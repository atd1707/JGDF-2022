function createBox(scene){
    let box = BABYLON.MeshBuilder.CreateBox("box", scene);
    box.position.y = 3;
    box.position.x = 2.5;
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

    let box = that.starbox = createBox(scene)
    let light = that.light = createLight(scene);
    let sphere = that.sphere = createSphere(scene);
    let ground = that.ground = createGround(scene);
    let camera = that.camera = createArcRotateCamera(scene);
<<<<<<< HEAD
    return;

}
const frameRate = 30;

function createBox(scene) {
    const box = BABYLON.MeshBuilder.CreateBox("box", {});
    var materialBox = new BABYLON.StandardMaterial("texture1", scene);
    box.material = materialBox;
    box.position.x = 2;
    return box;
}

function createxSlide(frameRate) {
    const xSlide = new BABYLON.Animation(
        "xSlide",
        "position.x",
        frameRate,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
    );

    const keyFramesX = [];
    keyFramesX.push({ frame: 0, value: 2 });
    keyFramesX.push({ frame: frameRate, value: -2 });
    keyFramesX.push({ frame: 2 * frameRate, value: 2 });

    xSlide.setKeys(keyFramesX);

    return xSlide;
}

function createySlide(frameRate) {
    const ySlide = new BABYLON.Animation(
        "ySlide",
        "position.y",
        frameRate,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
    );

    const keyFramesY = [];
    keyFramesY.push({ frame: 0, value: 2 });
    keyFramesY.push({ frame: frameRate, value: -2 });
    keyFramesY.push({ frame: 2 * frameRate, value: 2 });

    ySlide.setKeys(keyFramesY);

    return ySlide;
}

function createxRotate(frameRate) {
    const xRotation = new BABYLON.Animation(
        "xRotation",
        "rotation.x",
        frameRate,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
    );

    const keyFramesRX = [];
    keyFramesRX.push({ frame: 0, value: 0 });
    keyFramesRX.push({ frame: frameRate, value: Math.PI });
    keyFramesRX.push({ frame: 2 * frameRate, value: Math.PI * 2 });

    xRotation.setKeys(keyFramesRX);

    return xRotation;
}

function createyRotate(frameRate) {
    const yRotation = new BABYLON.Animation(
        "yRotation",
        "rotation.y",
        frameRate,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
    );

    const keyFramesRY = [];
    keyFramesRY.push({ frame: 0, value: 0 });
    keyFramesRY.push({ frame: 2 * frameRate, value: Math.PI });
    keyFramesRY.push({ frame: 4 * frameRate, value: Math.PI * 2 });

    yRotation.setKeys(keyFramesRY);

    return yRotation;
}

function createV3scaling(frameRate) {
    const v3scaling = new BABYLON.Animation(
        "v3Scaling",
        "scaling",
        frameRate,
        BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
    );

    const keyFramesv3s = [];
    keyFramesv3s.push({ frame: 0, value: new BABYLON.Vector3(1, 2, 3) }),
    keyFramesv3s.push({ frame: 0.66 * frameRate, value: new BABYLON.Vector3(2, 3, 1) });
    keyFramesv3s.push({ frame: 1.32 * frameRate, value: new BABYLON.Vector3(3, 1, 2) });
    keyFramesv3s.push({ frame: 2 * frameRate, value: new BABYLON.Vector3(1, 2, 3) });

    v3scaling.setKeys(keyFramesv3s);

    return v3scaling;
}

function createColorShift(frameRate) {
    const colorShift = new BABYLON.Animation(
        "color3",
        "material.diffuseColor",
        frameRate,
        BABYLON.Animation.ANIMATIONTYPE_COLOR3,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
    );

    const keyFramesC3 = [];
    keyFramesC3.push({ frame: 0, value: new BABYLON.Color3(1, 0.5, 0.2) }),
    keyFramesC3.push({ frame: 0.66 * frameRate, value: new BABYLON.Color3(0.5, 0.2, 1) });
    keyFramesC3.push({ frame: 1.32 * frameRate, value: new BABYLON.Color3(0.2, 1, 0.5) });
    keyFramesC3.push({ frame: 2 * frameRate, value: new BABYLON.Color3(1, 0.5, 0.2) });

   colorShift.setKeys(keyFramesC3);

    return colorShift;
}

function createLight(scene) {
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);
    light.intensity = 0.7;
    return light;
}

function createArcRotateCamera(scene) {
    let camAlpha = -Math.PI / 2;
    let camBeta = Math.PI / 2.5;
    let camDist = 10;
    let camTarget = new BABYLON.Vector3(0, 0, 0);
    let camera = new BABYLON.ArcRotateCamera("camera1", camAlpha, camBeta, camDist, camTarget, scene);
    camera.attachControl(true);
    return camera;
}

export default function createStartScene(engine) {
    let that = {};
    let scene = (that.scene = new BABYLON.Scene(engine));
    //scene.debugLayer.show();

    let box = (that.box = createBox(scene));
    box.animations.push(createxSlide(frameRate));
    box.animations.push(createySlide(frameRate));
    box.animations.push(createxRotate(frameRate));
    box.animations.push(createyRotate(frameRate));
    box.animations.push(createV3scaling(frameRate));
    box.animations.push(createColorShift(frameRate));

    let light = (that.light = createLight(scene));
    let camera = (that.camera = createArcRotateCamera(scene));

    that.scene.beginAnimation(box, 0, 2 * frameRate, true);
    return that;
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
const frameRate = 30;

function createBox(scene) {
    const box = BABYLON.MeshBuilder.CreateBox("box", {});
    var materialBox = new BABYLON.StandardMaterial("texture1", scene);
    box.material = materialBox;
    box.position.x = 2;
    return box;
}

function createxSlide(frameRate) {
    const xSlide = new BABYLON.Animation(
        "xSlide",
        "position.x",
        frameRate,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
    );

    const keyFramesX = [];
    keyFramesX.push({ frame: 0, value: 2 });
    keyFramesX.push({ frame: frameRate, value: -2 });
    keyFramesX.push({ frame: 2 * frameRate, value: 2 });

    xSlide.setKeys(keyFramesX);

    return xSlide;
}

function createySlide(frameRate) {
    const ySlide = new BABYLON.Animation(
        "ySlide",
        "position.y",
        frameRate,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
    );

    const keyFramesY = [];
    keyFramesY.push({ frame: 0, value: 2 });
    keyFramesY.push({ frame: frameRate, value: -2 });
    keyFramesY.push({ frame: 2 * frameRate, value: 2 });

    ySlide.setKeys(keyFramesY);

    return ySlide;
}

function createxRotate(frameRate) {
    const xRotation = new BABYLON.Animation(
        "xRotation",
        "rotation.x",
        frameRate,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
    );

    const keyFramesRX = [];
    keyFramesRX.push({ frame: 0, value: 0 });
    keyFramesRX.push({ frame: frameRate, value: Math.PI });
    keyFramesRX.push({ frame: 2 * frameRate, value: Math.PI * 2 });

    xRotation.setKeys(keyFramesRX);

    return xRotation;
}

function createyRotate(frameRate) {
    const yRotation = new BABYLON.Animation(
        "yRotation",
        "rotation.y",
        frameRate,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
    );

    const keyFramesRY = [];
    keyFramesRY.push({ frame: 0, value: 0 });
    keyFramesRY.push({ frame: 2 * frameRate, value: Math.PI });
    keyFramesRY.push({ frame: 4 * frameRate, value: Math.PI * 2 });

    yRotation.setKeys(keyFramesRY);

    return yRotation;
}

function createV3scaling(frameRate) {
    const v3scaling = new BABYLON.Animation(
        "v3Scaling",
        "scaling",
        frameRate,
        BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
    );

    const keyFramesv3s = [];
    keyFramesv3s.push({ frame: 0, value: new BABYLON.Vector3(1, 2, 3) }),
    keyFramesv3s.push({ frame: 0.66 * frameRate, value: new BABYLON.Vector3(2, 3, 1) });
    keyFramesv3s.push({ frame: 1.32 * frameRate, value: new BABYLON.Vector3(3, 1, 2) });
    keyFramesv3s.push({ frame: 2 * frameRate, value: new BABYLON.Vector3(1, 2, 3) });

    v3scaling.setKeys(keyFramesv3s);

    return v3scaling;
}

function createColorShift(frameRate) {
    const colorShift = new BABYLON.Animation(
        "color3",
        "material.diffuseColor",
        frameRate,
        BABYLON.Animation.ANIMATIONTYPE_COLOR3,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
    );

    const keyFramesC3 = [];
    keyFramesC3.push({ frame: 0, value: new BABYLON.Color3(1, 0.5, 0.2) }),
    keyFramesC3.push({ frame: 0.66 * frameRate, value: new BABYLON.Color3(0.5, 0.2, 1) });
    keyFramesC3.push({ frame: 1.32 * frameRate, value: new BABYLON.Color3(0.2, 1, 0.5) });
    keyFramesC3.push({ frame: 2 * frameRate, value: new BABYLON.Color3(1, 0.5, 0.2) });

   colorShift.setKeys(keyFramesC3);

    return colorShift;
}

function createLight(scene) {
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);
    light.intensity = 0.7;
    return light;
}

function createArcRotateCamera(scene) {
    let camAlpha = -Math.PI / 2;
    let camBeta = Math.PI / 2.5;
    let camDist = 10;
    let camTarget = new BABYLON.Vector3(0, 0, 0);
    let camera = new BABYLON.ArcRotateCamera("camera1", camAlpha, camBeta, camDist, camTarget, scene);
    camera.attachControl(true);
    return camera;
}

export default function createStartScene(engine) {
    let that = {};
    let scene = (that.scene = new BABYLON.Scene(engine));
    //scene.debugLayer.show();

    let box = (that.box = createBox(scene));
    box.animations.push(createxSlide(frameRate));
    box.animations.push(createySlide(frameRate));
    box.animations.push(createxRotate(frameRate));
    box.animations.push(createyRotate(frameRate));
    box.animations.push(createV3scaling(frameRate));
    box.animations.push(createColorShift(frameRate));

    let light = (that.light = createLight(scene));
    let camera = (that.camera = createArcRotateCamera(scene));

    that.scene.beginAnimation(box, 0, 2 * frameRate, true);
    return that;
}
=======
>>>>>>> ab92d71ae028200a3bd42b8433f03affaa7f58c5
>>>>>>> bae9dd4c272451dbac7422101eb130786e9bc1fa
=======
    return that;
}
>>>>>>> parent of 24e4961 (ok)
