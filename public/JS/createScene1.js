function createBox(scene, x, y) {
  let box = BABYLON.MeshBuilder.CreateBox("box", scene);
  box.position.x = x;
  box.position.y = y;
  return box;
}

function createLight(scene) {
  const light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(0, 1, 0),
    scene
  );
  light.intensity = 0.7;
  return light;
}

function createSphere(scene) {
  let sphere = BABYLON.MeshBuilder.CreateSphere(
    "sphere",
    { diameter: 2, segments: 32 },
    scene
  );
  sphere.position.y = 1;
  return sphere;
}

function createGround(scene) {
  let ground = BABYLON.MeshBuilder.CreateGround(
    "ground",
    { width: 6, height: 6 },
    scene
  );
  return ground;
}

function createArcRotateCamera(scene) {
  let camAlpha = -Math.PI / 2,
    camBeta = Math.PI / 2.5,
    camDist = 10,
    camTarget = new BABYLON.Vector3(0, 0, 0);
  let camera = new BABYLON.ArcRotateCamera(
    "camera1",
    camAlpha,
    camBeta,
    camDist,
    camTarget,
    scene
  );
  camera.attachControl(true);
  return camera;
}

function createHouse(scene) {
  /**** Materials *****/
  //color
  const groundMat = new BABYLON.StandardMaterial("groundMat");
  groundMat.diffuseColor = new BABYLON.Color3(0, 1, 0);

  //texture
  const roofMat = new BABYLON.StandardMaterial("roofMat");
  roofMat.diffuseTexture = new BABYLON.Texture(
    "/public/assets/images/roof.png"
  );
  const boxMat = new BABYLON.StandardMaterial("boxMat");
  boxMat.diffuseTexture = new BABYLON.Texture(
    "/public/assets/images/floor.png"
  );

  /**** World Objects *****/
  const box = BABYLON.MeshBuilder.CreateBox("box", {});
  box.material = boxMat;
  box.position.y = 0.5;
  const roof = BABYLON.MeshBuilder.CreateCylinder("roof", {
    diameter: 1.3,
    height: 1.2,
    tessellation: 3,
  });
  roof.material = roofMat;
  roof.scaling.x = 0.75;
  roof.rotation.z = Math.PI / 2;
  roof.position.y = 1.22;
 
  return box;
}

export default function createStartScene(engine) {
  let that = {};
  let scene = (that.scene = new BABYLON.Scene(engine));
  //scene.debugLayer.show();

  let box = (that.box = createBox(scene, 0.5, 0.5));
  let box2 = (that.box2 = createBox(scene, 0.5, 1.5));
  let house = (that.house = createHouse(scene));
  let light = (that.light = createLight(scene));
  let sphere = (that.sphere = createSphere(scene));
  let ground = (that.ground = createGround(scene));
  let camera = (that.camera = createArcRotateCamera(scene));
  return that;
}
