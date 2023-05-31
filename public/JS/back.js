// working createscene2 version
const frameRate = 10;
const xSlide = new BABYLON.Animation(
  "xSlide",
  "position.x",
  frameRate,
  BABYLON.Animation.ANIMATIONTYPE_FLOAT,
  BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
);

/****BUILD FUNCTIONS ****/
const buildHouse = (scene) => {
  const roof = buildRoof();
  const box = buildBox();

  return BABYLON.Mesh.MergeMeshes([box, roof], true, false, null, false, true);
};

const buildGround = (scene) => {
  //Create Village ground
  const groundMat = new BABYLON.StandardMaterial("groundMat");
  groundMat.diffuseTexture = new BABYLON.Texture(
    "assets/environments/villagegreen.png"
  );
  groundMat.diffuseTexture.hasAlpha = true;

  const ground = BABYLON.MeshBuilder.CreateGround("ground", {
    width: 24,
    height: 24,
  });
  ground.material = groundMat;

  //large ground
  const largeGroundMat = new BABYLON.StandardMaterial("largeGroundMat");
  largeGroundMat.diffuseTexture = new BABYLON.Texture(
    "assets/environments/valleygrass.png"
  );

  const largeGround = BABYLON.MeshBuilder.CreateGroundFromHeightMap(
    "largeGround",
    "assets/environments/villageheightmap.png",
    { width: 150, height: 150, subdivisions: 20, minHeight: 0, maxHeight: 4 }
  );
  largeGround.material = largeGroundMat;
  largeGround.position.y = -0.01;
};

const buildRoof = (scene) => {
  const roofMat = new BABYLON.StandardMaterial("roofMat");
  roofMat.diffuseTexture = new BABYLON.Texture(
    "https://assets.babylonjs.com/environments/roof.jpg"
  );

  const roof = BABYLON.MeshBuilder.CreateCylinder("roof", {
    diameter: 1.3,
    height: 1.2,
    tessellation: 3,
  });
  roof.material = roofMat;
  roof.position.y = 1.5;
  roof.position.x = 0;
  roof.position.z = 0;
  roof.scaling.x = 0.75;
  roof.rotation.z = Math.PI / 2;
  roof.position.y = 1.22;

  return roof;
};

const buildBox = (scene) => {
  const boxMat = new BABYLON.StandardMaterial("boxMat");
  boxMat.diffuseTexture = new BABYLON.Texture("assets/images/cubehouse.png");
  const faceUV = [];

  faceUV[0] = new BABYLON.Vector4(0.6, 0.0, 1.0, 1.0); //rear face
  faceUV[1] = new BABYLON.Vector4(0.0, 0.0, 0.4, 1.0); //front face
  faceUV[2] = new BABYLON.Vector4(0.4, 0, 0.6, 1.0); //right side
  faceUV[3] = new BABYLON.Vector4(0.4, 0, 0.6, 1.0); //left side

  const box = BABYLON.MeshBuilder.CreateBox("box", {
    width: 1,
    faceUV: faceUV,
    wrap: true,
  });
  box.material = boxMat;
  box.position.y = 0.5;
  return box;
};

export default function createStartScene(engine) {
  let that = {};
  let scene = (that.scene = new BABYLON.Scene(engine));
  scene.clearColor = new BABYLON.Color3.Black();
  const camera = new BABYLON.ArcRotateCamera(
    "camera",
    -Math.PI / 2,
    Math.PI / 2.5,
    10,
    new BABYLON.Vector3(0, 0, 0)
  );
  camera.attachControl(true);
  const light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(1, 1, 0),
    scene
  );
  light.intensity = 0.7;

  //House
  let ground = buildGround(scene);
  let box = buildBox(scene);
  let roof = buildRoof(scene);
  //let box2 = buildBox2(scene);
  //let roof2 = buildRoof2(scene);

  // Skybox
  var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", { size: 1000.0 }, scene);
  var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
  skyboxMaterial.backFaceCulling = false;
  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(
    "assets/images/skybox",
    scene
  );
  skyboxMaterial.reflectionTexture.coordinatesMode =
    BABYLON.Texture.SKYBOX_MODE;
  skyboxMaterial.disableLighting = true;
  skybox.material = skyboxMaterial;

  return that;
}
