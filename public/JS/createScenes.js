import createScene1  from "./createScene1.js";
import createScene2  from "./createScene2.js";
// import createScene3  from "./createScene3.js";
// import createScene4  from "./createScene4.js";
// import createScene5  from "./createScene5.js";

const CanvasName = "renderCanvas";

let canvas = document.createElement("canvas");
canvas.id = CanvasName;

canvas.classList.add("renderCanvas");
document.body.appendChild(canvas);

export let scene
export let scenes = [];

export let engine = new BABYLON.Engine(canvas, true, null, true);

scenes[1] = createScene1(engine);
scenes[0] = createScene2(engine);
//scenes[2] = createScene3(engine);
//scenes[3] = createScene2(engine);
//scenes[4] = createScene3(engine);
scene = scenes[1].scene;// starting scene

export function setSceneIndex(i){
    scene = scenes[i].scene;
}
