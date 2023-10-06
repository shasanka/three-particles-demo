import { BoxGeometry, Clock, Mesh, ShaderMaterial, Vector2 } from "three";

import vertexShader from "../shaders/vertex.glsl";
import fragmentShader from "../shaders/fragment.glsl";

function createCube() {
  const geometry = new BoxGeometry(3, 3, 3, 20, 12, 12);
  const clock = new Clock();

  const uniformData = {
    u_time: {
      type: "f",
      value: clock.getElapsedTime(),
    },
    u_mouse: {
      type: "v2",
      value: new Vector2(1.0, 1.0),
    },
  };
  const material = new ShaderMaterial({
    // wireframe: true,
    uniforms: uniformData,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
  });

  const handleMouseMove = (e) => {
    const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -((e.clientY / window.innerHeight) * 2 - 1);
    uniformData.u_mouse.value.x = mouseX;
    uniformData.u_mouse.value.y = mouseY;
  };
  document.addEventListener("mousemove", handleMouseMove);

  const mesh = new Mesh(geometry, material);
  mesh.position.set(-1.0, 0.0, 0.0);
  mesh.tick = (delta) => {
    console.log("delta");
    // uniformData.u_time.value = clock.getElapsedTime();
  };
  return mesh;
}

export { createCube };
