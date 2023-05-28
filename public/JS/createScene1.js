<<<<<<< HEAD
var createScene = async function () {
  const scene = new BABYLON.Scene(engine);
  scene.debugLayer.show();
=======




function createArcRotateCamera(scene){
  let camAlpha = -Math.PI / 2,
  camBeta  =  Math.PI / 2.5,
  camDist  =  10,
  camTarget = new BABYLON.Vector3(0, 0, 0); 
  let camera = new BABYLON.ArcRotateCamera("camera1", camAlpha, camBeta, camDist, camTarget, scene);
  camera.attachControl(true);
  return camera;
>>>>>>> parent of 24e4961 (ok)
}

var createScene = async function () {
  const scene = new BABYLON.Scene(engine);
  scene.debugLayer.show();
}

<<<<<<< HEAD

function createBox1(scene){
  box.position.x = 0;
  box.position.y = 1;
  box.position.z = 0;
  
  
   return box;
=======
function createBox(scene){
  let box = BABYLON.MeshBuilder.CreateBox("box", scene);
  box.position.y = 1;
  return box;
>>>>>>> parent of 24e4961 (ok)
}

function createBox2(scene){
  let box = BABYLON.MeshBuilder.CreateBox("box", scene);
<<<<<<< HEAD
  box.position.x = -1.5;
  box.position.y = 1;
  box.position.z = 0;
  
  
  return box;
}

  function createBox3(scene){
    let box = BABYLON.MeshBuilder.CreateBox("box", scene);
    box.position.x = 1.5;
    box.position.y = 1;
    box.position.z = 0;
  
    return box;
}

function createBox4(scene){
  let box = BABYLON.MeshBuilder.CreateBox("box", scene);
  box.position.x = 0;
  box.position.y = 2.5;
  box.position.z = 1;
=======
  box.position.x = 5;
  box.position.y = 5;
  box.position.z = 5;
>>>>>>> parent of 24e4961 (ok)

  return box;
}

<<<<<<< HEAD
function createBox5(scene){
  let box = BABYLON.MeshBuilder.CreateBox("box", scene);
  box.position.x = -1.5;
  box.position.y = 2.5;
  box.position.z = 1;

  return box;
}

function createBox6(scene){
  let box = BABYLON.MeshBuilder.CreateBox("box", scene);
  box.position.x = 1.5;
  box.position.y = 2.5;
  box.position.z = 1;

  return box;
}

function createBox7(scene){
  let box = BABYLON.MeshBuilder.CreateBox("box", scene);
  box.position.x = 0;
  box.position.y = 4;
  box.position.z = 2;

  return box;
}

function createBox8(scene){
  let box = BABYLON.MeshBuilder.CreateBox("box", scene);
  box.position.x = -1.5;
  box.position.y = 4;
  box.position.z = 2;

  return box;
}

function createBox9(scene){
  let box = BABYLON.MeshBuilder.CreateBox("box", scene);
  box.position.x = 1.5;
  box.position.y = 4;
  box.position.z = 2;

  return box;
}

function createBox10(scene){
  let box = BABYLON.MeshBuilder.CreateBox("box", scene);
  box.position.x = 0;
  box.position.y = 5.5;
  box.position.z = 3;

  return box;
}

function createSphere(scene){
  let sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 0.75, segments: 32 }, scene);
  sphere.position.x = 0;
  sphere.position.y = 1.825;
  sphere.position.z = 0;
  return sphere;
} 
function  createCapsule(scene){  
  let capsule = new BABYLON.MeshBuilder.CreateCapsule("capsule", {radius:0.5, capSubdivisions: 1, height:2, tessellation:4, topCapSubdivisions:12});
  capsule.position.x = 0;
  capsule.position.y = 1.825;
  capsule.position.z = -1.5;
  return capsule;
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

<<<<<<< HEAD
function createGround(scene){
  let ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
  return ground;
}

=======

function createGround(scene){
  let ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
  return  ground;
}

function createArcRotateCamera(scene){
    let camAlpha = -Math.PI / 2,
    camBeta  =  Math.PI / 2.5,
    camDist  =  10,
    camTarget = new BABYLON.Vector3(0, 0, 0);    
    camera.attachControl(true);
    return camera;
=======


export default function createStartScene(engine) {
let that = {};
let scene = that.scene = new BABYLON.Scene(engine);
  //scene.clearColor = new BABYLON.Color3.Black;
//const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, new BABYLON.Vector3(0, 0, 0));
  //camera.attachControl(true);
//const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);
  //light.intensity = 0.7;
>>>>>>> parent of 24e4961 (ok)

}

 function createStartScene(engine) {
  let that = {};
  let scene = that.scene = new BABYLON.Scene(engine);
  //scene.debugLayer.show();
}
  function createLight(scene){
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0),scene);
    light.intensity = 0.7;
    var light0 = new BABYLON.HemisphericLight("hemiLight", new BABYLON.Vector3(-1, 1, 0), scene);
	  light0.diffuse = new BABYLON.Color3(1, 0, 0);
	  light0.specular = new BABYLON.Color3(0, 1, 0);
    light0.groundColor = new BABYLON.Color3(0, 1, 0);
  }
   
  
>>>>>>> bae9dd4c272451dbac7422101eb130786e9bc1fa
that.scene.clearColor = new BABYLON.Color3.Blue;
that.box = createBox(scene);
that.box2 = createBox2(scene);
<<<<<<< HEAD
that.box3 = createBox3(scene);
that.box4 = createBox4(scene);
that.box5 = createBox5(scene);
that.box6 = createBox6(scene);
that.box7 = createBox7(scene);
that.box8 = createBox8(scene);
that.box9 = createBox9(scene);
<<<<<<< HEAD
that.box10 = createBox10(scene);

let sphere = that.sphere = createSphere(scene);
let capsule = that.capsule = createCapsule(scene);
=======
>>>>>>> parent of 24e4961 (ok)
that.camera = createArcRotateCamera(scene);


<<<<<<< HEAD
  return that;
=======
that.box10 = createBox10(scene)
let light = that.light = createLight(scene);
let sphere = that.sphere = createSphere(scene);
let ground = that.ground = createGround(scene);
let camera = that.camera = createArcRotateCamera(scene);
 
  

  return that;


 






>>>>>>> bae9dd4c272451dbac7422101eb130786e9bc1fa
=======
return that;
};
>>>>>>> parent of 24e4961 (ok)
