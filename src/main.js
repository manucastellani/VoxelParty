import { scene, camera, renderer, controls } from './scene.js'
import { ydoc, yObjects, awareness } from './sync.js'
import { syncFromRemote } from './objects.js'
import { createPanel } from './ui.js'

// --- Inicialización ---
console.log('[VoxelParty] Scene initialized')
console.log('[VoxelParty] Connected to room: max-academy-3d-room')

// TODO Dev2: Llamar syncFromRemote() para escuchar cambios de Yjs
// syncFromRemote()

// TODO UIUX: Llamar createPanel() para montar la UI
// createPanel()

// TODO Dev1: Añadir raycaster para selección de objetos con click

// --- Render Loop ---
function animate() {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}

animate()
