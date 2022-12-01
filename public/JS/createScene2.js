var skyMaterial = new BABYLON.SkyMaterial("skyMaterial", scene);
skyMaterial.backFaceCulling = false;

skyMaterial.turbidity = 1; // Represents the amount (scattering) of haze as opposed to molecules in atmospher

skyMaterial.luminance = 1; // Controls the overall luminance of sky in interval ]0, 1,190[

// Control the planet's orientation over the sun
skyMaterial.inclination = 0.5; // The solar inclination, related to the solar azimuth in interval [0, 1]
skyMaterial.azimuth = 0.25; // The solar azimuth in interval [0, 1]



var skybox = BABYLON.Mesh.CreateBox("skyBox", 1000.0, scene);
skybox.material = skyMaterial;

// Manually set the sun position
skyMaterial.useSunPosition = true; // Do not set sun position from azimuth and inclination
skyMaterial.sunPosition = new BABYLON.Vector3(0, 100, 0);

skyMaterial.rayleigh = 2; // Represents the sky appearance (globally)

// Set the horizon elevation relative to the camera position
skyMaterial.cameraOffset.y = scene.activeCamera.globalPosition.y;


function createBox(scene){
    let box = BABYLON.MeshBuilder.CreateBox("box", scene);
    box.position.y = 3;
    box.position.x = 0.5;
    return box;
}
    
function createLight(scene){
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0),scene);
    light.intensity = 0.7;
    return light;
}
   
function createSphere(scene){
    let sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2, segments: 32 }, scene);
    sphere.position.y = 1;
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

export default function createStartScene(engine) {
    let that = {};
    let scene = that.scene = new BABYLON.Scene(engine);
    //scene.debugLayer.show();

    let box = that.starbox = createBox(scene);
    let light = that.light = createLight(scene);
    let sphere = that.sphere = createSphere(scene);
    let ground = that.ground = createGround(scene);
    let camera = that.camera = createArcRotateCamera(scene);
    return that;
}