import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

// --- Escena ---
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x1a1a2e)

// --- Cámara ---
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.set(8, 6, 8)
camera.lookAt(0, 0, 0)

// --- Renderer ---
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.getElementById('app').appendChild(renderer.domElement)

// --- Controles ---
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.05

// --- Luces ---
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(5, 10, 7)
scene.add(directionalLight)

// --- Grid ---
const gridHelper = new THREE.GridHelper(20, 20, 0x444444, 0x333333)
scene.add(gridHelper)

// --- Responsive ---
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

export { scene, camera, renderer, controls }
