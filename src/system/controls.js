import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
const createControl = (camera, canvas) => {
  const control = new OrbitControls(camera, canvas);
  control.enableDamping = true;
  control.tick = () => control.update();
  return control;
};

export { createControl };
