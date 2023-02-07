



function createArcRotateCamera(scene){
  let camAlpha = -Math.PI / 2,
  camBeta  =  Math.PI / 2.5,
  camDist  =  10,
  camTarget = new BABYLON.Vector3(0, 0, 0); 
  let camera = new BABYLON.ArcRotateCamera("camera1", camAlpha, camBeta, camDist, camTarget, scene);
  camera.attachControl(true);
  return camera;
}

function createLight(scene){
  const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0),scene);
  light.intensity = 0.7;
  return light;
}

function createBox(scene){
  let box = BABYLON.MeshBuilder.CreateBox("box", scene);
  box.position.y = 1;
  return box;
}

function createBox2(scene){
  let box = BABYLON.MeshBuilder.CreateBox("box", scene);
  box.position.x = 5;
  box.position.y = 5;
  box.position.z = 5;

  return box;
}



export default function createStartScene(engine) {
let that = {};
let scene = that.scene = new BABYLON.Scene(engine);
  //scene.clearColor = new BABYLON.Color3.Black;
//const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, new BABYLON.Vector3(0, 0, 0));
  //camera.attachControl(true);
//const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);
  //light.intensity = 0.7;

that.scene.clearColor = new BABYLON.Color3.Blue;
that.box = createBox(scene);
that.box2 = createBox2(scene);
that.camera = createArcRotateCamera(scene);


return that;
};