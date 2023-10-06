import { World } from "./src/system/World";
import "./style.css";

async function main() {
  const container = document.getElementById("app");
  const world = new World(container);
  // await world.init();
}

main().catch((e) => console.log(e));
