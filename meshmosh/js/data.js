// Mock scene data — replace with real state management later
const MOCK_SCENE = {
  room: { id: 'studio-blockout', name: 'Studio Blockout', status: 'connected' },
  objects: [
    { id: 'cube_01',          name: 'Cube_01',          type: 'Mesh',   color: '#00d4ff', visible: true, locked: false,
      transform: { pos: [1.2, 0.5, -0.3], rot: [0, 45, 0], scale: [1, 1, 1] }, material: '#2a3a5c' },
    { id: 'sphere_01',        name: 'Sphere_01',        type: 'Mesh',   color: '#8b5cf6', visible: true, locked: false,
      transform: { pos: [-2.1, 0.8, 1.0], rot: [0, 0, 0], scale: [1.2, 1.2, 1.2] }, material: '#1a2040' },
    { id: 'blockout_wall_a',  name: 'Blockout_Wall_A',  type: 'Mesh',   color: '#84cc16', visible: true, locked: false,
      transform: { pos: [0, 0, -4.0], rot: [0, 0, 0], scale: [8, 3, 0.2] }, material: '#1e2830' },
    { id: 'camera_main',      name: 'Camera',           type: 'Camera', color: '#f97316', visible: true, locked: true,
      transform: { pos: [0, 5, 10], rot: [-20, 0, 0], scale: [1, 1, 1] }, material: null },
    { id: 'light_key',        name: 'Light_Key',        type: 'Light',  color: '#fbbf24', visible: true, locked: false,
      transform: { pos: [5, 8, 3], rot: [-45, 30, 0], scale: [1, 1, 1] }, material: null },
  ],
  selectedId: 'cube_01',
};

const MOCK_USERS = [
  { id: 'u1', name: 'Ana Torres',    initials: 'AT', color: '#00d4ff', action: 'Moving Cube_01', online: true },
  { id: 'u2', name: 'Leo Vargas',    initials: 'LV', color: '#8b5cf6', action: 'Editing materials', online: true },
  { id: 'u3', name: 'Mía Chen',      initials: 'MC', color: '#e879f9', action: 'Viewing scene', online: true },
];

const MOCK_ACTIVITY = [
  { user: 'Ana', action: 'moved', target: 'Cube_01',      color: '#00d4ff', time: '2s ago' },
  { user: 'Leo', action: 'added', target: 'Sphere_01',    color: '#8b5cf6', time: '14s ago' },
  { user: 'Mía', action: 'selected', target: 'Camera',   color: '#e879f9', time: '32s ago' },
  { user: 'Ana', action: 'scaled', target: 'Wall_A',      color: '#00d4ff', time: '1m ago' },
];

const TOOLS = [
  { id: 'select',    label: 'Select',     key: 'Q', icon: 'cursor' },
  { id: 'move',      label: 'Move',       key: 'W', icon: 'move' },
  { id: 'rotate',    label: 'Rotate',     key: 'E', icon: 'rotate' },
  { id: 'scale',     label: 'Scale',      key: 'R', icon: 'scale' },
  { id: 'sep1',      type: 'sep' },
  { id: 'add-cube',  label: 'Add Cube',   key: 'C', icon: 'cube' },
  { id: 'add-sphere',label: 'Add Sphere', key: 'S', icon: 'sphere' },
  { id: 'sep2',      type: 'sep' },
  { id: 'duplicate', label: 'Duplicate',  key: 'D', icon: 'duplicate' },
  { id: 'delete',    label: 'Delete',     key: 'X', icon: 'delete', danger: true },
  { id: 'sep3',      type: 'sep' },
  { id: 'reset-view',label: 'Reset View', key: 'F', icon: 'reset' },
];
