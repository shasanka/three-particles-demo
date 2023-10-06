import { PerspectiveCamera } from "three";

function createCamera(container) {
  const aspect = container.clientWidth / container.clientHeight;
  const camera = new PerspectiveCamera(75, aspect, 0.1, 1000);
  // camera.position.set(-100.0, -50.0, 150);
  camera.position.set(0.0, 0.0, 150.0);
  return camera;
}

export { createCamera };
