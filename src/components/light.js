import { AmbientLight, DirectionalLight } from "three";

function createLight() {
  const mainLight = new DirectionalLight("white", 5);
  const ambientLight = new AmbientLight();

  return { mainLight, ambientLight };
}

export { createLight };
