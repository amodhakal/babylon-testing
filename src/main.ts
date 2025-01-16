import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import {
  ArcRotateCamera,
  BackgroundMaterial,
  Camera,
  Engine,
  HemisphericLight,
  Layer,
  MeshBuilder,
  Scene,
  StandardMaterial,
  Texture,
  UniversalCamera,
  Vector3,
} from "@babylonjs/core";

import BG_URL from "/BG.png";
import SPACESHIP_URL from "/spaceship.png"

const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const engine = new Engine(canvas, true);
const scene = new Scene(engine);

const layer = new Layer("Background", BG_URL, scene);

const camera = new UniversalCamera("Camera", new Vector3(0, 0, -5), scene);
camera.attachControl(canvas, true);

new HemisphericLight("lightUp", new Vector3(0, 1, 0), scene);
new HemisphericLight("lightDown", new Vector3(0, 0, 0), scene);
const spaceship = MeshBuilder.CreateBox("spaceship", { width: 0.5, height: 0.5 });

window.addEventListener("keydown", (ev) => {
  // ctrl-d
  if (ev.ctrlKey && ev.key === "d") {
    if (scene.debugLayer.isVisible()) {
      scene.debugLayer.hide();
    } else {
      scene.debugLayer.show();
    }
  }
});

engine.runRenderLoop(() => {
  scene.render();
});
