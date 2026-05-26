// MeshMosh UI — main app logic
// All data is mocked; replace with real state/network layer later

let state = {
  activeTool: 'select',
  selectedObjectId: MOCK_SCENE.selectedId,
  roomStatus: MOCK_SCENE.room.status,
  objects: [...MOCK_SCENE.objects],
  users: [...MOCK_USERS],
};

// ── Render helpers ──────────────────────────────────────────────

function getObjectIcon(type) {
  const map = { Mesh: 'mesh', Camera: 'camera', Light: 'light' };
  return icon(map[type] || 'cube', 13);
}

function fmt(n) { return Number(n).toFixed(2); }

// ── Toolbar ─────────────────────────────────────────────────────

function renderToolbar() {
  const el = document.getElementById('toolbar');
  el.innerHTML = TOOLS.map(t => {
    if (t.type === 'sep') return `<div class="toolbar-sep"></div>`;
    const isActive = state.activeTool === t.id;
    const isDanger = t.danger;
    return `
      <button
        class="tool-btn ${isActive ? 'active' : ''} ${isDanger ? 'danger-tool' : ''}"
        data-tool="${t.id}"
        data-tip="${t.label}"
        title="${t.label} (${t.key})"
      >
        ${icon(t.icon, 16)}
        <span class="tool-key">${t.key}</span>
      </button>`;
  }).join('');

  el.querySelectorAll('.tool-btn[data-tool]').forEach(btn => {
    btn.addEventListener('click', () => {
      const tool = btn.dataset.tool;
      if (['select','move','rotate','scale'].includes(tool)) {
        state.activeTool = tool;
        renderToolbar();
        showToast(`${tool.charAt(0).toUpperCase() + tool.slice(1)} tool active`, 'info', 'cursor');
      } else if (tool === 'add-cube') {
        addMockObject('Mesh');
      } else if (tool === 'add-sphere') {
        addMockObject('Sphere');
      } else if (tool === 'duplicate' && state.selectedObjectId) {
        duplicateMockObject();
      } else if (tool === 'delete' && state.selectedObjectId) {
        deleteMockObject();
      } else if (tool === 'reset-view') {
        animateViewReset();
      }
    });
  });
}

// ── Scene panel ──────────────────────────────────────────────────

function renderScenePanel() {
  const body = document.getElementById('scene-list');
  body.innerHTML = state.objects.map(obj => {
    const sel = obj.id === state.selectedObjectId;
    return `
      <div class="scene-item ${sel ? 'selected' : ''}" data-id="${obj.id}">
        <span class="scene-item-icon">${getObjectIcon(obj.type)}</span>
        <span class="scene-color-dot" style="background:${obj.color}"></span>
        <span class="scene-item-name">${obj.name}</span>
        <span class="scene-item-type">${obj.type}</span>
        <span class="scene-item-actions">
          <button class="scene-action-btn ${obj.visible ? '' : 'active'}" data-action="hide" data-id="${obj.id}" title="${obj.visible ? 'Hide' : 'Show'}">
            ${icon(obj.visible ? 'eye' : 'eyeOff', 11)}
          </button>
          <button class="scene-action-btn ${obj.locked ? 'active' : ''}" data-action="lock" data-id="${obj.id}" title="${obj.locked ? 'Unlock' : 'Lock'}">
            ${icon('lock', 11)}
          </button>
        </span>
      </div>`;
  }).join('');

  body.querySelectorAll('.scene-item').forEach(item => {
    item.addEventListener('click', e => {
      if (e.target.closest('[data-action]')) return;
      selectObject(item.dataset.id);
    });
  });

  body.querySelectorAll('[data-action="hide"]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const obj = state.objects.find(o => o.id === btn.dataset.id);
      if (obj) { obj.visible = !obj.visible; renderScenePanel(); }
    });
  });

  body.querySelectorAll('[data-action="lock"]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const obj = state.objects.find(o => o.id === btn.dataset.id);
      if (obj) { obj.locked = !obj.locked; renderScenePanel(); }
    });
  });
}

// ── Properties panel ─────────────────────────────────────────────

function renderPropsPanel() {
  const container = document.getElementById('props-content');
  const obj = state.objects.find(o => o.id === state.selectedObjectId);

  if (!obj) {
    container.innerHTML = `<div class="panel-section" style="color:var(--text-muted);font-size:var(--text-sm);text-align:center;padding:32px 16px;">
      No object selected
    </div>`;
    return;
  }

  const { pos, rot, scale } = obj.transform;
  const hasMaterial = obj.material !== null;

  container.innerHTML = `
    <div class="panel-section">
      <div class="prop-object-name">${obj.name}</div>
      <div class="prop-object-type">${obj.type}</div>
    </div>

    <div class="panel-section">
      <button class="section-toggle" data-section="transform">
        <span style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--text-muted)">Transform</span>
        <span class="chevron">${icon('chevronDown', 12)}</span>
      </button>
      <div data-section-body="transform">
        <div class="prop-label">Position</div>
        <div class="prop-input-group">
          <div class="prop-input-labeled"><div class="axis-label x">X</div><input type="number" step="0.1" value="${fmt(pos[0])}"></div>
          <div class="prop-input-labeled"><div class="axis-label y">Y</div><input type="number" step="0.1" value="${fmt(pos[1])}"></div>
          <div class="prop-input-labeled"><div class="axis-label z">Z</div><input type="number" step="0.1" value="${fmt(pos[2])}"></div>
        </div>
        <div class="prop-label">Rotation</div>
        <div class="prop-input-group">
          <div class="prop-input-labeled"><div class="axis-label x">X</div><input type="number" step="1" value="${fmt(rot[0])}"></div>
          <div class="prop-input-labeled"><div class="axis-label y">Y</div><input type="number" step="1" value="${fmt(rot[1])}"></div>
          <div class="prop-input-labeled"><div class="axis-label z">Z</div><input type="number" step="1" value="${fmt(rot[2])}"></div>
        </div>
        <div class="prop-label">Scale</div>
        <div class="prop-input-group">
          <div class="prop-input-labeled"><div class="axis-label x">X</div><input type="number" step="0.1" value="${fmt(scale[0])}"></div>
          <div class="prop-input-labeled"><div class="axis-label y">Y</div><input type="number" step="0.1" value="${fmt(scale[1])}"></div>
          <div class="prop-input-labeled"><div class="axis-label z">Z</div><input type="number" step="0.1" value="${fmt(scale[2])}"></div>
        </div>
      </div>
    </div>

    ${hasMaterial ? `
    <div class="panel-section">
      <button class="section-toggle" data-section="material">
        <span style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--text-muted)">Material</span>
        <span class="chevron">${icon('chevronDown', 12)}</span>
      </button>
      <div data-section-body="material">
        <div class="prop-row" style="margin-top:8px">
          <div class="color-swatch" style="background:${obj.material}"></div>
          <input type="text" value="${obj.material}" style="font-family:var(--font-mono)">
        </div>
        <div class="prop-label" style="margin-top:10px">Roughness</div>
        <input type="range" min="0" max="1" step="0.01" value="0.6" style="width:100%;accent-color:var(--accent-cyan)">
        <div class="prop-label" style="margin-top:8px">Metalness</div>
        <input type="range" min="0" max="1" step="0.01" value="0.1" style="width:100%;accent-color:var(--accent-cyan)">
      </div>
    </div>` : ''}

    <div class="panel-section">
      <div class="toggle-row">
        <span class="toggle-label">Visible</span>
        <div class="toggle ${obj.visible ? 'on' : ''}" data-toggle="visible"></div>
      </div>
      <div class="toggle-row">
        <span class="toggle-label">Locked</span>
        <div class="toggle ${obj.locked ? 'on' : ''}" data-toggle="locked"></div>
      </div>
    </div>
  `;

  // Section toggles
  container.querySelectorAll('.section-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('collapsed');
      const body = container.querySelector(`[data-section-body="${btn.dataset.section}"]`);
      if (body) body.style.display = btn.classList.contains('collapsed') ? 'none' : '';
    });
  });

  // Property toggle switches
  container.querySelectorAll('[data-toggle]').forEach(t => {
    t.addEventListener('click', () => {
      t.classList.toggle('on');
      const key = t.dataset.toggle;
      if (obj) { obj[key] = t.classList.contains('on'); renderScenePanel(); }
    });
  });
}

// ── Users panel ───────────────────────────────────────────────────

function renderUsersPanel() {
  const userList = document.getElementById('users-list');
  const actFeed  = document.getElementById('activity-feed');

  userList.innerHTML = state.users.map(u => `
    <div class="user-row">
      <div class="avatar avatar-online" style="background:${u.color}20;color:${u.color};border:1.5px solid ${u.color}40">${u.initials}</div>
      <div class="user-info">
        <div class="user-name">${u.name}</div>
        <div class="user-action">${u.action}</div>
      </div>
      <div style="width:8px;height:8px;border-radius:50%;background:var(--color-online);box-shadow:0 0 6px var(--color-online);flex-shrink:0"></div>
    </div>`).join('');

  actFeed.innerHTML = MOCK_ACTIVITY.map(a => `
    <div class="activity-item">
      <div class="activity-dot" style="background:${a.color}"></div>
      <div>
        <div class="activity-text"><strong>${a.user}</strong> ${a.action} <strong>${a.target}</strong></div>
        <div class="activity-time">${a.time}</div>
      </div>
    </div>`).join('');
}

// ── Viewport ──────────────────────────────────────────────────────

function renderViewport() {
  const canvas = document.getElementById('viewport-canvas');
  const sel = state.objects.find(o => o.id === state.selectedObjectId);

  // Render mock objects
  const mockObjs = {
    cube_01: { el: document.getElementById('mock-cube') },
    sphere_01: { el: document.getElementById('mock-sphere') },
    blockout_wall_a: { el: document.getElementById('mock-wall') },
  };

  for (const [id, { el }] of Object.entries(mockObjs)) {
    if (!el) continue;
    const isSelected = id === state.selectedObjectId;
    el.classList.toggle('selected', isSelected);
    const label = el.querySelector('.selection-label');
    if (label) label.style.display = isSelected ? 'block' : 'none';
  }

  // Update selection bar
  const bar = document.getElementById('vp-selection-bar');
  if (sel) {
    bar.style.display = 'flex';
    bar.innerHTML = `
      <div class="sel-item"><div class="sel-dot"></div><span style="color:var(--accent-cyan);font-weight:600">${sel.name}</span></div>
      <div class="sel-item" style="color:var(--text-muted)">${sel.type}</div>
      <div class="sel-item" style="color:var(--text-muted);font-family:var(--font-mono)">
        ${fmt(sel.transform.pos[0])}, ${fmt(sel.transform.pos[1])}, ${fmt(sel.transform.pos[2])}
      </div>`;
  } else {
    bar.style.display = 'none';
  }
}

// ── Selection ─────────────────────────────────────────────────────

function selectObject(id) {
  if (state.selectedObjectId === id) return;
  const obj = state.objects.find(o => o.id === id);
  if (!obj || obj.locked) {
    if (obj?.locked) showToast(`${obj.name} is locked`, 'warn', 'lock');
    return;
  }
  state.selectedObjectId = id;
  renderScenePanel();
  renderPropsPanel();
  renderViewport();
  showToast(`Selected ${obj.name}`, 'info', 'cursor');
}

// ── Mock operations ───────────────────────────────────────────────

let objCounter = 10;
function addMockObject(type) {
  objCounter++;
  const names = { Mesh: 'Cube', Sphere: 'Sphere' };
  const colors = ['#00d4ff','#8b5cf6','#e879f9','#84cc16','#f97316'];
  const newObj = {
    id: `obj_${objCounter}`,
    name: `${names[type] || type}_${String(objCounter).padStart(2,'0')}`,
    type: 'Mesh',
    color: colors[objCounter % colors.length],
    visible: true,
    locked: false,
    transform: { pos: [Math.random()*4-2, 0, Math.random()*4-2], rot: [0,0,0], scale: [1,1,1] },
    material: '#1a2035',
  };
  state.objects.push(newObj);
  state.selectedObjectId = newObj.id;
  renderAll();
  showToast(`Added ${newObj.name}`, 'success', 'plus');
  addActivity('You', 'added', newObj.name, '#00d4ff');
}

function duplicateMockObject() {
  const src = state.objects.find(o => o.id === state.selectedObjectId);
  if (!src) return;
  objCounter++;
  const copy = {
    ...JSON.parse(JSON.stringify(src)),
    id: `obj_${objCounter}`,
    name: src.name + '_copy',
    transform: { ...JSON.parse(JSON.stringify(src.transform)), pos: src.transform.pos.map(v => v + 0.5) },
  };
  state.objects.push(copy);
  state.selectedObjectId = copy.id;
  renderAll();
  showToast(`Duplicated ${src.name}`, 'success', 'duplicate');
}

function deleteMockObject() {
  const obj = state.objects.find(o => o.id === state.selectedObjectId);
  if (!obj) return;
  const name = obj.name;
  state.objects = state.objects.filter(o => o.id !== state.selectedObjectId);
  state.selectedObjectId = state.objects[0]?.id || null;
  renderAll();
  showToast(`Deleted ${name}`, 'warn', 'delete');
}

function addActivity(user, action, target, color) {
  MOCK_ACTIVITY.unshift({ user, action, target, color, time: 'just now' });
  if (MOCK_ACTIVITY.length > 8) MOCK_ACTIVITY.pop();
  renderUsersPanel();
}

function animateViewReset() {
  const cam = document.getElementById('vp-cam-info');
  if (cam) {
    cam.style.color = 'var(--accent-cyan)';
    setTimeout(() => { cam.style.color = ''; }, 600);
  }
  showToast('View reset', 'info', 'reset');
}

// ── Toast system ──────────────────────────────────────────────────

function showToast(msg, type = 'info', iconName = 'cube') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast type-${type}`;
  toast.innerHTML = `<span class="toast-icon">${icon(iconName, 14)}</span>${msg}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 250);
  }, 2400);
}

// ── Topbar share button ───────────────────────────────────────────

function setupTopbar() {
  document.getElementById('btn-share')?.addEventListener('click', () => {
    showToast('Room link copied to clipboard!', 'success', 'share');
  });
  document.getElementById('btn-settings')?.addEventListener('click', () => {
    showToast('Settings coming soon', 'info', 'settings');
  });
}

// ── Keyboard shortcuts ────────────────────────────────────────────

function setupKeyboard() {
  const keyMap = { q:'select', w:'move', e:'rotate', r:'scale', c:'add-cube', s:'add-sphere', d:'duplicate', x:'delete', f:'reset-view' };
  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT') return;
    const tool = keyMap[e.key.toLowerCase()];
    if (!tool) return;
    const btn = document.querySelector(`[data-tool="${tool}"]`);
    if (btn) btn.click();
  });
}

// ── Mock simulation ───────────────────────────────────────────────

function startMockSimulation() {
  const messages = [
    () => showToast('Ana is editing Cube_01', 'user', 'move'),
    () => showToast('Leo added a new light', 'user', 'light'),
    () => showToast('Scene saved', 'success', 'cube'),
    () => { document.getElementById('sync-status').classList.add('visible'); setTimeout(() => document.getElementById('sync-status').classList.remove('visible'), 2000); },
    () => showToast('Mía joined the room', 'user', 'mesh'),
  ];
  let i = 0;
  setInterval(() => {
    messages[i % messages.length]();
    i++;
  }, 7000);
}

// ── Render all ────────────────────────────────────────────────────

function renderAll() {
  renderToolbar();
  renderScenePanel();
  renderPropsPanel();
  renderViewport();
  renderUsersPanel();
}

// ── Mock object click in viewport ─────────────────────────────────

function setupViewportClicks() {
  document.querySelectorAll('.mock-object[data-obj-id]').forEach(el => {
    el.addEventListener('click', () => selectObject(el.dataset.objId));
  });
}

// ── Init ──────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  setupTopbar();
  setupKeyboard();
  setupViewportClicks();
  startMockSimulation();

  // Initial welcome toast
  setTimeout(() => showToast('Welcome to MeshMosh — Studio Blockout', 'info', 'mesh'), 500);
  setTimeout(() => showToast('3 users connected', 'user', 'mesh'), 1500);
});
