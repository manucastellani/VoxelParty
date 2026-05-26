import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'

// --- Yjs Document ---
const ydoc = new Y.Doc()

// --- WebRTC Provider (serverless sync) ---
const provider = new WebrtcProvider('max-academy-3d-room', ydoc, {
  signaling: ['wss://signaling.yjs.dev'],
})

// --- Shared data structures ---
const yObjects = ydoc.getMap('objects')
const awareness = provider.awareness

export { ydoc, yObjects, awareness, provider }
