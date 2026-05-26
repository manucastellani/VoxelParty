"""Asset Exchange System.

This module provides a production-grade, highly extensible asset import/export system 
built using the Strategy and Registry design patterns.

Design Patterns Used:
    1. Strategy Pattern: Define a family of file parsing algorithms (concrete subclasses of 
       BaseExchangeHandler), encapsulate each one (JSONHandler, TextManifestHandler), 
       and make them interchangeable. This lets the parsing algorithm vary independently 
       from clients that use it.
    2. Registry Pattern: Centralize the mapping of file extensions to their corresponding 
       strategy handler in the AssetExchangeManager, allowing runtime registration and lookup 
       without hardcoding format dependencies into the central exchange logic.

Architecture Overview:
    - BaseExchangeHandler (Abstract Base Class): Declares the interface for all file operations.
    - JSONHandler (Concrete Handler): Handles reading/writing native JSON files.
    - TextManifestHandler (Concrete Handler): Handles reading/writing key-value text files (.manifest).
    - AssetExchangeManager (Registry): Maps file extensions to BaseExchangeHandler implementations
      and acts as the single entry point for all import/export tasks in the pipeline.
"""

from __future__ import annotations

import abc
import json
import logging
from pathlib import Path

# Configure clean logging for production pipelines
logging.basicConfig(
    level=logging.INFO,
    format="[%(asctime)s] [%(levelname)s] %(name)s: %(message)s"
)
logger = logging.getLogger("AssetExchange")


class BaseExchangeHandler(abc.ABC):
    """Abstract Base Class for all asset format handlers (Strategy Pattern)."""

    @abc.abstractmethod
    def read(self, filepath: Path) -> dict:
        """Read data from the specified filepath and parse it into a dictionary.

        Args:
            filepath: The pathlib.Path to read from.

        Returns:
            dict: The parsed data payload.

        Raises:
            FileNotFoundError: If the file does not exist.
            ValueError: If the file contains parsing errors.
            Exception: For other unexpected system/file errors.
        """
        pass

    @abc.abstractmethod
    def write(self, filepath: Path, data: dict) -> bool:
        """Write the data dictionary to the specified filepath.

        Args:
            filepath: The pathlib.Path to write to.
            data: The key-value pairs representing asset metadata/data.

        Returns:
            bool: True if writing succeeded, False otherwise.
        """
        pass


class JSONHandler(BaseExchangeHandler):
    """Concrete handler for reading and writing JSON files."""

    def read(self, filepath: Path) -> dict:
        """Read and parse a JSON file.

        Args:
            filepath: Path to the JSON file.

        Returns:
            dict: Parsed JSON data.
        """
        logger.info(f"Attempting to read JSON file: {filepath}")
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                return json.load(f)
        except FileNotFoundError:
            logger.error(f"JSON file not found: {filepath}")
            raise
        except json.JSONDecodeError as err:
            logger.error(f"Failed to parse JSON file {filepath}: {err}")
            raise ValueError(f"Invalid JSON format in {filepath}: {err}") from err
        except Exception as err:
            logger.error(f"Unexpected error reading JSON file {filepath}: {err}")
            raise

    def write(self, filepath: Path, data: dict) -> bool:
        """Write a dictionary to a JSON file.

        Args:
            filepath: Destination path.
            data: Data payload to write.

        Returns:
            bool: True if success, False otherwise.
        """
        logger.info(f"Attempting to write JSON file: {filepath}")
        try:
            # Ensure parent directories exist
            filepath.parent.mkdir(parents=True, exist_ok=True)
            with open(filepath, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=4, ensure_ascii=False)
            logger.info(f"Successfully wrote JSON file: {filepath}")
            return True
        except Exception as err:
            logger.error(f"Failed to write JSON file {filepath}: {err}")
            return False


class TextManifestHandler(BaseExchangeHandler):
    """Concrete handler for reading and writing simple flat key-value Text Manifests.

    Example manifest line format:
        key = value
    """

    def read(self, filepath: Path) -> dict:
        """Read and parse a key-value manifest text file.

        Args:
            filepath: Path to the manifest file.

        Returns:
            dict: Parsed key-value mapping.
        """
        logger.info(f"Attempting to read Text Manifest file: {filepath}")
        parsed_data = {}
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                for line_num, line in enumerate(f, 1):
                    line = line.strip()
                    # Skip empty lines and comment lines
                    if not line or line.startswith("#"):
                        continue
                    if "=" not in line:
                        raise ValueError(f"Line {line_num} is malformed: missing '=' delimiter.")
                    
                    key, val = line.split("=", 1)
                    parsed_data[key.strip()] = val.strip()
            return parsed_data
        except FileNotFoundError:
            logger.error(f"Text Manifest file not found: {filepath}")
            raise
        except ValueError as err:
            logger.error(f"Parsing error in Text Manifest {filepath}: {err}")
            raise ValueError(f"Invalid manifest syntax in {filepath}: {err}") from err
        except Exception as err:
            logger.error(f"Unexpected error reading Text Manifest {filepath}: {err}")
            raise

    def write(self, filepath: Path, data: dict) -> bool:
        """Write a dictionary as flat key-value lines to a text manifest file.

        Args:
            filepath: Destination path.
            data: Data payload to write.

        Returns:
            bool: True if success, False otherwise.
        """
        logger.info(f"Attempting to write Text Manifest file: {filepath}")
        try:
            filepath.parent.mkdir(parents=True, exist_ok=True)
            with open(filepath, "w", encoding="utf-8") as f:
                f.write("# Generated Asset Manifest\n")
                for key, val in data.items():
                    # Flatten complex objects/structures to string representations if needed
                    f.write(f"{key}={val}\n")
            logger.info(f"Successfully wrote Text Manifest file: {filepath}")
            return True
        except Exception as err:
            logger.error(f"Failed to write Text Manifest file {filepath}: {err}")
            return False


class AssetExchangeManager:
    """Central registry manager for matching file extensions to strategy handlers (Registry Pattern)."""

    def __init__(self) -> None:
        self._handlers: dict[str, BaseExchangeHandler] = {}

    def _normalize_extension(self, extension: str) -> str:
        """Ensure file extension is formatted consistently (lowercase and prefixed with a dot)."""
        ext = extension.strip().lower()
        if ext and not ext.startswith("."):
            ext = f".{ext}"
        return ext

    def register_handler(self, extension: str, handler: BaseExchangeHandler) -> None:
        """Register a format handler for a specific file extension.

        Args:
            extension: The file extension (e.g., '.json' or 'json').
            handler: An instance of a BaseExchangeHandler subclass.
        """
        normalized_ext = self._normalize_extension(extension)
        self._handlers[normalized_ext] = handler
        logger.info(f"Registered '{handler.__class__.__name__}' for extension '{normalized_ext}'")

    def import_asset(self, filepath: str | Path) -> dict:
        """Import an asset from a file path using the registered handler.

        Args:
            filepath: The path to the file to import.

        Returns:
            dict: The parsed data payload.

        Raises:
            ValueError: If no handler is registered for the file format.
        """
        path = Path(filepath)
        ext = self._normalize_extension(path.suffix)
        
        handler = self._handlers.get(ext)
        if not handler:
            raise ValueError(
                f"No handler registered for file extension: '{ext}' (file: {path.name}). "
                f"Registered extensions: {list(self._handlers.keys())}"
            )
        
        return handler.read(path)

    def export_asset(self, filepath: str | Path, data: dict) -> bool:
        """Export asset data to a file path using the registered handler.

        Args:
            filepath: The target path.
            data: The dictionary to write.

        Returns:
            bool: True if writing succeeded, False otherwise.

        Raises:
            ValueError: If no handler is registered for the file format.
        """
        path = Path(filepath)
        ext = self._normalize_extension(path.suffix)
        
        handler = self._handlers.get(ext)
        if not handler:
            raise ValueError(
                f"No handler registered for file extension: '{ext}' (file: {path.name}). "
                f"Registered extensions: {list(self._handlers.keys())}"
            )
        
        return handler.write(path, data)


if __name__ == "__main__":
    import tempfile
    import os

    print("--- Starting Asset Exchange System Demonstration ---")

    # 1. Initialize the Central Manager
    manager = AssetExchangeManager()

    # 2. Register format strategies
    manager.register_handler(".json", JSONHandler())
    manager.register_handler(".manifest", TextManifestHandler())

    # 3. Define sample asset metadata dictionary
    sample_asset_data = {
        "asset_name": "HeroCharacter",
        "version": "1.0.4",
        "poly_count": "15420",
        "author": "PipelineTeam"
    }

    # 4. Use a temporary directory to perform clean demo operations
    with tempfile.TemporaryDirectory() as tmpdir:
        temp_dir_path = Path(tmpdir)
        
        json_file_path = temp_dir_path / "hero_metadata.json"
        manifest_file_path = temp_dir_path / "hero_metadata.manifest"
        unregistered_file_path = temp_dir_path / "hero_model.fbx"

        print("\n--- Testing JSON Export & Import ---")
        # Export JSON
        success_json = manager.export_asset(json_file_path, sample_asset_data)
        print(f"Export JSON result: {success_json}")

        # Import JSON back
        imported_json_data = manager.import_asset(json_file_path)
        print(f"Imported JSON data: {imported_json_data}")
        assert imported_json_data == sample_asset_data, "JSON mismatch!"

        print("\n--- Testing Text Manifest Export & Import ---")
        # Export Manifest
        success_manifest = manager.export_asset(manifest_file_path, sample_asset_data)
        print(f"Export Manifest result: {success_manifest}")

        # Import Manifest back
        imported_manifest_data = manager.import_asset(manifest_file_path)
        print(f"Imported Manifest data: {imported_manifest_data}")
        assert imported_manifest_data == sample_asset_data, "Manifest mismatch!"

        print("\n--- Testing Unregistered Format Error Handling ---")
        try:
            manager.export_asset(unregistered_file_path, sample_asset_data)
        except ValueError as e:
            print(f"Caught expected error (exporting unregistered extension): {e}")

        try:
            manager.import_asset(unregistered_file_path)
        except ValueError as e:
            print(f"Caught expected error (importing unregistered extension): {e}")

        print("\n--- Testing File Not Found Error Handling ---")
        missing_json_path = temp_dir_path / "does_not_exist.json"
        try:
            manager.import_asset(missing_json_path)
        except FileNotFoundError as e:
            print(f"Caught expected FileNotFoundError: {e}")

        print("\n--- Testing Parse/Syntax Error Handling ---")
        malformed_json_path = temp_dir_path / "malformed.json"
        with open(malformed_json_path, "w", encoding="utf-8") as f:
            f.write("{invalid_json_here")
        
        try:
            manager.import_asset(malformed_json_path)
        except ValueError as e:
            print(f"Caught expected malformed JSON parsing error: {e}")

        malformed_manifest_path = temp_dir_path / "malformed.manifest"
        with open(malformed_manifest_path, "w", encoding="utf-8") as f:
            f.write("key_without_equals_delimiter\n")
        
        try:
            manager.import_asset(malformed_manifest_path)
        except ValueError as e:
            print(f"Caught expected malformed Manifest parsing error: {e}")

    print("\n--- Demonstration Completed Successfully ---")
