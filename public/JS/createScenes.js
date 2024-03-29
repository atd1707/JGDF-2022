import createScene1  from "./createScene1.js";
import createScene2  from "./createScene2.js";
//import createScene3  from "./createScene3.js";
//import createScene4  from "./createScene4.js";
//import createScene5  from "./createScene5.js";

const CanvasName = "renderCanvas";

let canvas = document.createElement("canvas");
canvas.id = CanvasName;

canvas.classList.add("renderCanvas");
document.body.appendChild(canvas);

export let scene
export let scenes = [];

export let engine = new BABYLON.Engine(canvas, true, null, true);

scenes[0] = createScene1(engine);
scenes[1] = createScene2(engine);
//scenes[2] = createScene3(engine);
//scenes[3] = createScene4(engine);
//scenes[4] = createScene5(engine);
//scene = scenes[0].scene;

export function setSceneIndex(i){
    scene = scenes[i].scene;
}
