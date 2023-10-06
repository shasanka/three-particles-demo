import {
  BufferAttribute,
  BufferGeometry,
  Clock,
  Points,
  ShaderMaterial,
} from "three";
import vertexShader from "../shaders/pointsVertex.glsl";
import fragmentShader from "../shaders/pointsFragment.glsl";
import LoaderManager from "../managers/LoaderManager";
import { randFloat } from "three/src/math/MathUtils";

function createPoints(camera) {
  // const raycaster = new Raycaster();

  const geometry = new BufferGeometry();

  let vertices = [];
  let initVertices = [];

  const multiplier = 18.0;
  const noColumns = 16.0 * multiplier;
  const noRows = 9.0 * multiplier;
  for (let i = 0; i < noColumns; i++) {
    for (let j = 0; j < noRows; j++) {
      const point = [i, j, 0];
      const initPoint = [i - noColumns / 2, j - noRows / 2, randFloat(10, 100)];

      vertices.push(...point);
      initVertices.push(...initPoint);
    }
  }
  const pointsVertices32 = new Float32Array(vertices);
  const initPointsVertices32 = new Float32Array(initVertices);

  const clock = new Clock();

  const uniformData = {
    size: {
      value: 4.0,
    },
    u_time: {
      type: "f",
      value: clock.getElapsedTime(),
    },
    u_texture: { value: LoaderManager.assets["image"].texture },
    u_noRows: {
      value: noRows,
    },
    u_noColumns: {
      value: noColumns,
    },
    u_Progress: {
      value: 0,
    },
  };

  geometry.setAttribute("position", new BufferAttribute(pointsVertices32, 3));
  geometry.setAttribute(
    "initPosition",
    new BufferAttribute(initPointsVertices32, 3)
  );
  geometry.center();

  const material = new ShaderMaterial({
    depthWrite: false,
    depthTest: false,
    size: 0.2,
    uniforms: uniformData,
    vertexShader,
    fragmentShader,
    transparent: true,
  });

  const mesh = new Points(geometry, material);

  mesh.tick = (delta) => {
    uniformData.u_time.value = clock.getElapsedTime();
  };

  return mesh;
}

export { createPoints };
