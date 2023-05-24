0
 
function createSphere(scene){
  let sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 0.75, segments: 32 }, scene);
  ox.position.x = 0;
  box.position.y = 7.5;
   box.position.z = 0;
  return sphere;
}
 
function createGround(scene){
  let ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
  return ground;
}


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

function createBox1(scene){
  let box = BABYLON.MeshBuilder.CreateBox("box", scene);
  box.position.x = 0;
  box.position.y = 1;
   box.position.z = 0;
  return box;
}

function createBox2(scene){
  let box = BABYLON.MeshBuilder.CreateBox("box", scene);
  box.position.x = 0;
  box.position.y = 2.5
  box.position.z = 1.5;

  return box;
}


  function createBox3(scene){
    let box = BABYLON.MeshBuilder.CreateBox("box", scene);
    box.position.x = 0;
  box.position.y =0;
  box.position.z = -1.5;
  
    return box;
}

function createBox4(scene){
  let box = BABYLON.MeshBuilder.CreateBox("box", scene);
  box.position.x = 0;
  box.position.y = 2.5;
    box.position.z = 1.5

  return box;
}

function createBox5(scene){
  let box = BABYLON.MeshBuilder.CreateBox("box", scene);
  box.position.x = 0;
  box.position.y = 2.5;
  box.position.z = 0;

  return box;
}

function createBox6(scene){
  let box = BABYLON.MeshBuilder.CreateBox("box", scene);
  box.position.x = 0;
  box.position.y = 2.5;
  box.position.z = 1.5;

  return box;
}

function createBox7(scene){
  let box = BABYLON.MeshBuilder.CreateBox("box", scene);
  box.position.x = 0;
  box.position.y = 5;
  box.position.z = -1.5;

  return box;
}

function createBox8(scene){
  let box = BABYLON.MeshBuilder.CreateBox("box", scene);
  box.position.x = 0;
  box.position.y = 5;
  box.position.z = 0;

  return box;
}

function createBox9(scene){
  let box = BABYLON.MeshBuilder.CreateBox("box", scene);
  box.position.x = 0;
  box.position.y = 5;
  box.position.z = 1.5;

  return box;
}

function createBox10(scene){
  let box = BABYLON.MeshBuilder.CreateBox("box", scene);
  box.position.x = 0;
  box.position.y = 7.5;
  box.position.z = 0;

  return box;
}
 function createStartScene(engine) {
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
that.box3 = createBox3(scene);
that.box4 = createBox4(scene);
that.box5 = createBox5(scene);
that.box6 = createBox6(scene);
that.box7 = createBox7(scene);
that.box8 = createBox8(scene);
that.box9 = createBox9(scene);
that.box10 = createBox10(scene);
that.camera = createArcRotateCamera(scene);
let light = that.light = createLight(scene);
let sphere = that.sphere = createSphere(scene);
let ground = that.ground = createGround(scene);

return that;
}