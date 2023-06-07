const frameRate = 10;
const xSlide = new BABYLON.Animation(
  "xSlide",
  "position.x",
  frameRate,
  BABYLON.Animation.ANIMATIONTYPE_FLOAT,
  BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
);

/****BUILD FUNCTIONS ****/

const buildHouse = (width) => {
    const box = buildBox(width);
    const roof = buildRoof(width);
    
    return BABYLON.Mesh.MergeMeshes([box, roof], true, false, null, false, true);
}


const createEstate = (scene) => {

    const detached_house = buildHouse(1);
    detached_house.rotation.y = -Math.PI / 16;
    detached_house.position.x = -6.8;
    detached_house.position.z = 2.5;
    
    const semi_house = buildHouse(2);
    semi_house .rotation.y = -Math.PI / 16;
    semi_house.position.x = -4.5;
    semi_house.position.z = 3;
    
    const places = []; //each entry is an array [house type, rotation, x, z]
    places.push([1, -Math.PI / 16, -6.8, 2.5 ]);
    places.push([2, -Math.PI / 16, -4.5, 3 ]);
    places.push([2, -Math.PI / 16, -1.5, 4 ]);
    places.push([2, -Math.PI / 3, 1.5, 6 ]);
    places.push([2, 15 * Math.PI / 16, -6.4, -1.5 ]);
    places.push([1, 15 * Math.PI / 16, -4.1, -1 ]);
    places.push([2, 15 * Math.PI / 16, -2.1, -0.5 ]);
    places.push([1, 5 * Math.PI / 4, 0, -1 ]);
    places.push([1, Math.PI + Math.PI / 2.5, 0.5, -3 ]);
    places.push([2, Math.PI + Math.PI / 2.1, 0.75, -5 ]);
    places.push([1, Math.PI + Math.PI / 2.25, 0.75, -7 ]);
    places.push([2, Math.PI / 1.9, 4.75, -1 ]);
    places.push([1, Math.PI / 1.95, 4.5, -3 ]);
    places.push([2, Math.PI / 1.9, 4.75, -5 ]);
    places.push([1, Math.PI / 1.9, 4.75, -7 ]);
    places.push([2, -Math.PI / 3, 5.25, 2 ]);
    places.push([1, -Math.PI / 3, 6, 4 ]);
    
    //Create instances from the first two that were built 
    const houses = [];
    for (let i = 0; i < places.length; i++) {
        if (places[i][0] === 1) {
            houses[i] = detached_house.createInstance("house" + i);
        }
        else {
            houses[i] = semi_house.createInstance("house" + i);
        }
        houses[i].rotation.y = places[i][1];
        houses[i].position.x = places[i][2];
        houses[i].position.z = places[i][3];
    }


}


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
  let estate = createEstate(scene);

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
