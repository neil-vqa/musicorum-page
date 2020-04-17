let container;
let camera;
let renderer;
let scene;
let product;

function init() {
  container = document.querySelector(".model");

//scene
  scene = new THREE.Scene();

//camera
  const fov = 100;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 5;
  const far = 3000;

  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(10, -20, 15);

//lights
  const ambient = new THREE.AmbientLight(0xffffff, 2);
  scene.add(ambient);

  const light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(50, 50, 100);
  scene.add(light);
  
//renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

//orbit
  let controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;
  controls.autoRotateSpeed = 5;
  controls.minPolarAngle = Math.PI / 4;
  controls.maxPolarAngle = Math.PI / 2;
  controls.target.set(0,50,30);
  controls.update();


//Load Model
  let loader = new THREE.GLTFLoader();
  loader.load("./model/scene.gltf", function(gltf) {
    scene.add(gltf.scene);
    product = gltf.scene.children[0];
    animate();
  });
  
  function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
}

init();

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);
