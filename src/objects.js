/**
 * objects.js - Gestión de objetos 3D sincronizados
 *
 * Este módulo maneja la creación, actualización y eliminación
 * de objetos 3D en la escena, sincronizados via Yjs.
 */

// TODO Dev1: Implementar addObject(type, position)
//   - Crear mesh (box, sphere, cylinder) según type
//   - Asignar ID único (crypto.randomUUID)
//   - Añadir a la escena y al Y.Map 'objects'
//   - Serializar: { type, position: {x,y,z}, rotation: {x,y,z}, scale: {x,y,z}, color }
export function addObject(type, position) {
  // TODO Dev1
}

// TODO Dev1: Implementar removeObject(id)
//   - Eliminar mesh de la escena
//   - Eliminar entrada del Y.Map 'objects'
export function removeObject(id) {
  // TODO Dev1
}

// TODO Dev2: Implementar updateObjectTransform(id, transform)
//   - Actualizar posición/rotación/escala en el Y.Map
//   - El observer de Yjs propagará el cambio a otros peers
export function updateObjectTransform(id, transform) {
  // TODO Dev2
}

// TODO Dev2: Implementar syncFromRemote()
//   - Observar cambios en yObjects (observe/observeDeep)
//   - Crear/actualizar/eliminar meshes locales según el estado remoto
export function syncFromRemote() {
  // TODO Dev2
}

// TODO Dev2: Implementar selectObject(mesh)
//   - Adjuntar TransformControls al mesh seleccionado
//   - Mostrar outline/highlight
export function selectObject(mesh) {
  // TODO Dev2
}
