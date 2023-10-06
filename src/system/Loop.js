import { Clock } from "three";
import Stats from "stats.js";

const clock = new Clock();
class Loop {
  constructor(camera, scene, renderer, stats) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.stats = stats;
    this.updatables = [];
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      this.stats.begin();
      this.tick();
      this.renderer.render(this.scene, this.camera);
      this.stats.end();
    });
  }

  tick() {
    const delta = clock.getDelta();
    for (const object of this.updatables) {
      object.tick(delta);
    }
  }
}

export { Loop };
