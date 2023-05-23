function createBox(scene){
    let box = BABYLON.MeshBuilder.CreateBox("box", scene);
    box.position.y = 3;
    box.position.x = 2.0;
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
import {setSceneIndex}        from "./createScenes.js";

function createSceneButton(name, index, x,y, advtex){
    var button = BABYLON.GUI.Button.CreateSimpleButton(name, index);
        button.left = x;
        button.top  =  y;
        button.width = "80px"
        button.height = "30px";
        button.color = "white";
        button.cornerRadius = 20;
        button.background = "green";
        button.onPointerUpObservable.add(function() {
            setSceneIndex(index - 1);
        });
        advtex.addControl(button); 
        return button;
}

export default function guiScene(engine) {
    var guiScene = new BABYLON.Scene(engine);

    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), guiScene);

    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("myUI",true);

    var button1 = createSceneButton("but1", 1,"-200px", "120px", advancedTexture);
    var button2 = createSceneButton("but2", 2,"-100px", "120px", advancedTexture);
    var button3 = createSceneButton("but3", 3,"000px", "120px", advancedTexture);
    var button2 = createSceneButton("but4", 4,"100px", "120px", advancedTexture);
    var button3 = createSceneButton("but5", 5,"200px", "120px", advancedTexture); 
    //guiScene.debugLayer.show();
    return guiScene;
}var keyDownMap =[];

export function compassKey(keyID, status){
    keyDownMap[keyID] = status; 
}

export function compass(root){

    // setup rotation quaternions for physics root
    const q1 = BABYLON.Quaternion.RotationAxis(BABYLON.Axis.Y,0);
    const q2 = BABYLON.Quaternion.RotationAxis(BABYLON.Axis.Y, 1 * Math.PI / 4);
    const q3 = BABYLON.Quaternion.RotationAxis(BABYLON.Axis.Y, 2 * Math.PI / 4);
    const q4 = BABYLON.Quaternion.RotationAxis(BABYLON.Axis.Y, 3 * Math.PI / 4);
    const q5 = BABYLON.Quaternion.RotationAxis(BABYLON.Axis.Y, 4 * Math.PI / 4);
    const q6 = BABYLON.Quaternion.RotationAxis(BABYLON.Axis.Y, 5 * Math.PI / 4);
    const q7 = BABYLON.Quaternion.RotationAxis(BABYLON.Axis.Y, 6 * Math.PI / 4);
    const q8 = BABYLON.Quaternion.RotationAxis(BABYLON.Axis.Y, 7 * Math.PI / 4);

    
    let keydown = false;
    // check 2 keys
    if (keyDownMap["w"] & keyDownMap["d"]) {
        root.position.x += 0.1;
        root.position.z += 0.1;
        root.rotationQuaternion = q2;
        keydown=true;
    }
    if (keyDownMap["s"] & keyDownMap["d"] ) {
        root.position.x += 0.1;
        root.position.z -= 0.1;
        root.rotationQuaternion = q4;
        keydown=true;
    }
    if (keyDownMap["s"] & keyDownMap["a"]  ) {
        root.position.x -= 0.1;
        root.position.z -= 0.1;
        root.rotationQuaternion = q6;
        keydown=true;
    }
    if (keyDownMap["a"] & keyDownMap["w"]  ) {
        root.position.x -= 0.1;
        root.position.z += 0.1;
        root.rotationQuaternion = q8;
        keydown=true;
    }
    // check 1 key
    if  (keydown == false) {
        if (keyDownMap["w"] ) {
            root.position.z += 0.1;
            root.rotationQuaternion = q1;
            keydown=true;
        }
        if (keyDownMap["d"] ) {
            root.position.x += 0.1;
            root.rotationQuaternion = q3;
            keydown=true;
        }
        if (keyDownMap["s"] ) {
            root.position.z -= 0.1;
            root.rotationQuaternion = q5;
            keydown=true;
        }
        if (keyDownMap["a"] ) {
            root.position.x -= 0.1;
            root.rotationQuaternion = q7;
            keydown=true;
        }
    }
    return keydown;
}
