import { createCamera } from "../components/camera";
import { createAxesHelper, createGridHelper } from "../components/helpers";
import { createLight } from "../components/light";
import { createPoints } from "../components/points";
import { createScene } from "../components/scene";
import LoaderManager from "../managers/LoaderManager";
import { Loop } from "./Loop";
// import { createRenderer } from "./Renderer";
import { Resizer } from "./Resizer";
import { createControl } from "./controls";
import Stats from "stats.js";
import GUI from "lil-gui";
import { createRenderer } from "./renderer";

let camera;
let scene;
let renderer;
let loop;
class World {
  #points;
  #stats;
  #guiObj = {
    progress: 0,
    showTitle: true,
  };

  constructor(container) {
    this.container = container;

    this.init();
  }

  async init() {
    const assets = [
      {
        name: "image",
        texture: "./src/assets/stading.jpg",
        // texture: "./src/system/stading.jpg",
      },
    ];

    this.setGUI();

    await LoaderManager.load(assets);
    camera = createCamera(this.container);
    renderer = createRenderer();
    this.container.append(renderer.domElement);

    scene = createScene();
    scene.add(createLight().mainLight, createLight().ambientLight);
    this.setStats();
    loop = new Loop(camera, scene, renderer, this.#stats);

    this.#points = createPoints(camera);
    console.log(this.#points.material.uniforms);
    scene.add(this.#points);
    loop.updatables.push(this.#points);

    const axisHelper = createAxesHelper();
    const gridHelper = createGridHelper();
    scene.add(axisHelper, gridHelper);

    const control = createControl(camera, this.container);
    loop.updatables.push(control);

    new Resizer(this.container, camera, renderer);

    this.start();
  }
  start() {
    loop.start();
  }

  setGUI() {
    const titleEl = document.querySelector(".main-title");
    const gui = new GUI();
    const handleChange = () => {
      // this.#mesh.position.y = this.#guiObj.y
      titleEl.style.display = this.#guiObj.showTitle ? "block" : "none";
    };
    gui.add(this.#guiObj, "progress", 0, 1).onChange(() => {
      // this.#points.uniform.
      this.#points.material.uniforms.u_Progress.value = this.#guiObj.progress;
    });
    gui
      .add(this.#guiObj, "showTitle")
      .name("show title")
      .onChange(handleChange);
  }

  setStats() {
    this.#stats = new Stats();
    this.#stats.showPanel(0);
    document.body.appendChild(this.#stats.dom);
  }
}

export { World };
