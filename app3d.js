// Script para cargar el modelo 3D en la sección de inicio

// Obtener el contenedor del modelo
var modelContainer = document.getElementById('model-container');

// Crear una nueva escena de Three.js
var scene = new THREE.Scene();

// Crear una cámara
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Crear un renderizador
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
modelContainer.appendChild(renderer.domElement);

// Agregar controles de órbita
var controls = new THREE.OrbitControls(camera, renderer.domElement);

// Agregar luces
var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 1, 1);
scene.add(directionalLight);

// Cargar el modelo GLB
var loader = new THREE.GLTFLoader();
loader.load('tu_modelo.glb', function (gltf) {
    scene.add(gltf.scene);
}, undefined, function (error) {
    console.error(error);
});

// Función para renderizar la escena
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();
