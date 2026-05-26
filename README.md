# 🎲 MeshMosh

> Editor de modelado 3D multi-usuario en tiempo real. Todos editan la misma escena, al mismo tiempo, desde el navegador. Sin servidor, sin costo.

Proyecto del desafío en vivo de la **formación Tech Art** — Max Sarlija Academy.

---

## 🚀 Qué es

Un editor 3D web donde varios usuarios se conectan a la misma "sala" y modelan juntos en tiempo real: agregás un cubo y aparece en la pantalla de todos; movés un objeto y se mueve para todos. Pensado para correr 100% gratis en **GitHub Pages** (peer-to-peer, sin backend).

---

## 🛠️ Stack

| Capa | Tecnología |
|------|-----------|
| 3D / Render | [Three.js](https://threejs.org) |
| Estado compartido | [Yjs](https://yjs.dev) (CRDT) |
| Conexión P2P | [y-webrtc](https://github.com/yjs/y-webrtc) |
| Build | [Vite](https://vitejs.dev) |
| Deploy | GitHub Pages + GitHub Actions |

Sin frameworks, vanilla JS.

---

## ⚡ Instalación

```bash
git clone https://github.com/<usuario>/meshmosh.git
cd meshmosh
npm install
npm run dev
```

Abrí `http://localhost:5173`. Para probar el multi-usuario, abrí la misma URL en **dos pestañas o dos navegadores** a la vez.

---

## 📁 Estructura

```
index.html
/src
  main.js        # Entry point, render loop, conecta todo
  scene.js       # Three.js: escena, cámara, luces, OrbitControls
  sync.js        # Yjs: documento compartido + WebRTC + awareness
  objects.js     # Crear / renderizar objetos 3D sincronizados
  ui.js          # Panel lateral + lista de usuarios conectados
vite.config.js   # base: './' para GitHub Pages
.github/workflows/deploy.yml   # Deploy automático
```

---

## 👥 Roles del desafío

| Rol | Responsabilidad | Branch |
|-----|----------------|--------|
| **PM Real-time** | Board kanban, issues, coordina el sprint | — |
| **Dev 1** | Función "Add Cube" sincronizada | `feature/add-cube` |
| **Dev 2** | Transform controls (mover/rotar/escalar) | `feature/transform` |
| **UI/UX** | Panel lateral + usuarios conectados | `feature/ui` |
| **Tester** | Prueba cada PR, reporta bugs | — |
| **Merge Master** | Revisa PRs, mergea, deploya | `main` |

> **Regla anti-conflictos:** el único archivo que todos tocan es `main.js`. Cada quien reemplaza SOLO su línea `// TODO`.

---

## 🎮 Cómo funciona el multi-usuario

1. Cada usuario que abre la app se une a la sala Yjs `meshmosh-room`.
2. El estado de la escena vive en un `Y.Map` compartido (cada objeto = una entrada).
3. Yjs sincroniza los cambios entre todos vía WebRTC (peer-to-peer).
4. El **awareness** de Yjs muestra quién está conectado en vivo.

No hay servidor central: los navegadores se hablan directo entre sí.

---

## 🌐 Deploy a GitHub Pages

El deploy es automático vía GitHub Actions en cada push a `main`.

**Setup inicial (una vez):**
1. Settings → Pages → Source: **GitHub Actions**.
2. Verificá que `vite.config.js` tenga `base: './'`.
3. Push a `main` → el workflow buildea y publica.

URL pública: `https://<usuario>.github.io/meshmosh/`

---

## ✅ Checklist de pruebas (Tester)

Corré con **2 pestañas abiertas**:

- [ ] El grid 3D carga sin errores en consola
- [ ] "Add Cube" → el cubo aparece en ambas pestañas
- [ ] Mover un objeto se refleja en la otra pestaña en <1s
- [ ] La lista de "Conectados" muestra a todos los usuarios
- [ ] Refrescar reconecta y muestra los objetos existentes
- [ ] El deploy de Pages funciona igual que local

---

## 📋 Scripts

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción (carpeta dist)
npm run preview  # Preview del build local
```

---

Hecho con 🎲 en el desafío en vivo de **Max Sarlija Academy**.
