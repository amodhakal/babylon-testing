import "./style.css"
import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import {
  ArcRotateCamera,
  Engine,
  HemisphericLight,
  MeshBuilder,
  Scene,
  Vector3,
} from "@babylonjs/core";

const canvas = document.querySelector("canvas")!;
const engine = new Engine(canvas, true);
const scene = new Scene(engine);
const rotation = Math.PI / 2;

new ArcRotateCamera("camera", rotation, rotation, 2, Vector3.Zero(), scene);
new HemisphericLight("light", new Vector3(1, 1, 0), scene);
MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);

window.addEventListener("keydown", (event) => {
  if (!event.shiftKey) return;
  if (!event.ctrlKey) return;
  if (event.key !== "I") return;

  //* Shift+Ctrl+I
  if (scene.debugLayer.isVisible()) return scene.debugLayer.hide();
  scene.debugLayer.show();
});

engine.runRenderLoop(() => {
  scene.render();
  engine.resize();
});
