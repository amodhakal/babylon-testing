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

const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const engine = new Engine(canvas, true);
const scene = new Scene(engine);

new Layer("Background", BG_URL, scene);
const camera = new UniversalCamera("Camera", new Vector3(0, 0, -5), scene);
camera.inputs.clear();
camera.attachControl(canvas, true);

//? Just for testing
MeshBuilder.CreateSphere("");

window.addEventListener("keydown", (ev) => {
  if (!ev.ctrlKey || ev.key !== "d") return;

  //* Ctrl-D for debug
  scene.debugLayer.isVisible() ? scene.debugLayer.hide() : scene.debugLayer.show();
});

engine.runRenderLoop(() => {
  scene.render();
});
