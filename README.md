# VoxelParty - Modelado 3D Colaborativo

Editor de modelado 3D multi-usuario en tiempo real. Todos editan la misma escena, al mismo tiempo, desde el navegador. Sin servidor, sin costo.

Proyecto del desafio en vivo de la **formacion Tech Art** — Max Sarlija Academy.

## Stack

| Capa | Tecnologia |
|------|-----------|
| 3D / Render | [Three.js](https://threejs.org) |
| Estado compartido | [Yjs](https://yjs.dev) (CRDT) |
| Conexion P2P | [y-webrtc](https://github.com/yjs/y-webrtc) |
| Build | [Vite](https://vitejs.dev) |
| Deploy | GitHub Pages |

Sin frameworks, vanilla JS.

## Instalacion

```bash
npm install
npm run dev
```

Abri `http://localhost:5173`. Para probar multi-usuario, abri la misma URL en **dos pestanas o navegadores** a la vez.

## Estructura

```
index.html
/src
  main.js        # Entry point, render loop, conecta todo
  scene.js       # Three.js: escena, camara, luces, OrbitControls
  sync.js        # Yjs: documento compartido + WebRTC + awareness
  objects.js     # Crear / renderizar objetos 3D sincronizados (TODO Dev1/Dev2)
  ui.js          # Panel lateral + lista de usuarios conectados (TODO UIUX)
vite.config.js   # base: './' para GitHub Pages
package.json
```

## Como funciona el multi-usuario

1. Cada usuario que abre la app se une a la sala Yjs `max-academy-3d-room`.
2. El estado de la escena vive en un `Y.Map` compartido (cada objeto = una entrada).
3. Yjs sincroniza los cambios entre todos via WebRTC (peer-to-peer).
4. El **awareness** de Yjs muestra quien esta conectado en vivo.

No hay servidor central: los navegadores se hablan directo entre si.

## Deploy a GitHub Pages

1. **Build:**
   ```bash
   npm run build
   ```

2. **Opcion A - GitHub Actions (recomendado):**
   - Settings > Pages > Source: **GitHub Actions**
   - Crea `.github/workflows/deploy.yml`:
     ```yaml
     name: Deploy to Pages
     on:
       push:
         branches: [main]
     permissions:
       contents: read
       pages: write
       id-token: write
     jobs:
       deploy:
         environment:
           name: github-pages
           url: ${{ steps.deployment.outputs.page_url }}
         runs-on: ubuntu-latest
         steps:
           - uses: actions/checkout@v4
           - uses: actions/setup-node@v4
             with:
               node-version: 20
           - run: npm install && npm run build
           - uses: actions/upload-pages-artifact@v3
             with:
               path: dist
           - id: deployment
             uses: actions/deploy-pages@v4
     ```

3. **Opcion B - Manual:**
   ```bash
   npx gh-pages -d dist
   ```
   Settings > Pages > Source: rama `gh-pages`.

## Roles del desafio

| Rol | Responsabilidad |
|-----|----------------|
| **Dev 1** | Funcion "Add Object" sincronizada (`objects.js`) |
| **Dev 2** | Transform controls (mover/rotar/escalar) (`objects.js`) |
| **UI/UX** | Panel lateral + usuarios conectados (`ui.js`) |

> **Regla anti-conflictos:** cada quien trabaja en su archivo. El unico archivo compartido es `main.js` donde cada rol descomenta su linea TODO.

## Scripts

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de produccion (carpeta dist/)
npm run preview  # Preview del build local
```
