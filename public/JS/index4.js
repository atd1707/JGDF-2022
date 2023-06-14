import {scenes, scene, engine, setSceneIndex}  from "./createScenes.js";

setSceneIndex(0);

engine.runRenderLoop(() => {
    scene.render();
});