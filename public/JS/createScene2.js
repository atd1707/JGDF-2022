/*
export default function createStartScene(engine) {
	let that = {};
	let scene = (that.scene = new BABYLON.Scene(engine));
    scene.clearColor = new BABYLON.Color3.Black;
	const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(true);
	const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);
    light.intensity = 0.7;
	
	// Skybox
<<<<<<< HEAD

import { compassKey, compass } from "./my.JS";
       

function importMesh(scene, x, y) {
    let tempItem = { flag: false }
    let item = BABYLON.SceneLoader.ImportMesh ("", "./assets/models/", "dummy3.babylon", scene, function(newMeshes, particleSystems ,skeletons) {
        let mesh = newMeshes[0];
        let skeleton = skeletons[0];
        skeleton.animationPropertiesOverride = new BABYLON.AnimationPropertiesOverride();
        skeleton.animationPropertiesOverride.enableBlending = true;
        skeleton.animationPropertiesOverride.blendingSpeed = 0.05;
        skeleton.animationPropertiesOverride.loopMode = 1;
        
        var walkRange = skeleton.getAnimationRange("YBot_Walk");
        var runRange = skeleton.getAnimationRange("YBot_Run");
        var leftRange = skeleton.getAnimationRange("YBot_LeftStrafeWalk");
        var rightRange = skeleton.getAnimationRange("YBot_RightStrafeWalk");
        var idleRange = skeleton.getAnimationRange("YBot_Idle");
        var animating = false;

        // add colliders on the ground
         var collidersVisible = false;
         var meshCollider = BABYLON.Mesh.CreateCapsule("ribbon", {height:1, radius:0.6}, scene);
         var scale = new BABYLON.Vector3(1.5,2,1);
         meshCollider.scaling.x = scale.x;
         meshCollider.scaling.y = scale.y;
         meshCollider.scaling.z = scale.z;
         meshCollider.position.y = ( scale.y)/2;
         
         meshCollider.isVisible = collidersVisible;

        // Create a physics root and add all children 
        let physicsRoot = new BABYLON.Mesh("", scene);
        physicsRoot.position.x = 0.0;     
        physicsRoot.position.y = 0.0;    
        physicsRoot.position.z = 0.0;         
        physicsRoot.addChild(mesh);  
        physicsRoot.addChild(meshCollider);

	}
        //Enable physics on colliders first then physics root of the mesh
        meshCollider.physicsImpostor = new BABYLON.PhysicsImpostor(meshCollider, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0 }, scene);
        physicsRoot.physicsImpostor = new BABYLON.PhysicsImpostor(physicsRoot, BABYLON.PhysicsImpostor.NoImpostor, { mass: 3 }, scene);
  


        scene.onBeforeRenderObservable.add(()=> {

            var keydown = compass(physicsRoot);
 
            if(keydown){
                if(!animating){
                    animating = true;
                    scene.beginAnimation(skeleton, walkRange.from, walkRange.to, true);
                }
            }else{
                animating = false;
                scene.stopAnimation(skeleton)
            }
        });

        scene.actionManager.registerAction(
            new BABYLON.IncrementValueAction(
                BABYLON.ActionManager.OnEveryFrameTrigger,
                physicsRoot,
                'rotation.y',
                0.1,
                new BABYLON.PredicateCondition(
                    mesh.actionManager,
                    function () {
                        return tempItem.flag == true
                    }
                )
            )
        ); 

        mesh.actionManager = new BABYLON.ActionManager(scene);
    
        mesh.actionManager.registerAction(
            new BABYLON.SetValueAction(
                BABYLON.ActionManager.OnPickDownTrigger,
                tempItem,
                'flag',
                true
            )
        );
        
        mesh.actionManager.registerAction(
            new BABYLON.SetValueAction(
                BABYLON.ActionManager.OnLongPressTrigger,
                tempItem,
                'flag',
                false
            )
        );      
    }


    return item;
}    
    
function actionManager(scene){
    scene.actionManager = new BABYLON.ActionManager(scene);

    scene.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
            {
            trigger: BABYLON.ActionManager.OnKeyDownTrigger,
            //parameters: 'w'      
            },
            function(evt) {compassKey(evt.sourceEvent.key,true); }
        )
    );

    scene.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
            {
            trigger: BABYLON.ActionManager.OnKeyUpTrigger
            
            },
            function(evt) {compassKey(evt.sourceEvent.key,false); }
        )
    );   


    return scene.actionManager;
}


function createBox(scene, x, y, z){
    let box = BABYLON.MeshBuilder.CreateBox("box", scene);
    box.position.x = x;
    box.position.y = y;
    box.position.z = z;
    new BABYLON.PhysicsImpostor(box, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 10, restitution: 0.9 }, scene);
    return box;
}


function backgroundMusic(scene){
    let music = new BABYLON.Sound("music", "./assets/audio/chimes.mp3", scene, null, {
        loop: true,
        autoplay: true
    });
    return music;
}

function createGround(scene){
    const ground = BABYLON.MeshBuilder.CreateGround("ground", {height: 10, width: 10, subdivisions: 4});
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0.5, restitution: 0.7 }, scene);
    return ground;
}

function createLight(scene) {
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);
    light.intensity = 0.7;
    return light;
}

function createArcRotateCamera(scene) {
    let camAlpha = -Math.PI / 2;
    let camBeta = Math.PI / 2.5;
    let camDist = 15;
    let camTarget = new BABYLON.Vector3(0, 0, 0);
    let camera = new BABYLON.ArcRotateCamera("camera1", camAlpha, camBeta, camDist, camTarget, scene);
    camera.attachControl(true);
    return camera;
=======
	var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:1000.0}, scene);
	var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	skyboxMaterial.backFaceCulling = false;
	skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("assets/images/skybox", scene);
	skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	skyboxMaterial.disableLighting = true;
	skybox.material = skyboxMaterial;			
	    
    return that;
}   
 */   



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
}

const buildGround = (scene) => {
    //ground materials
    const groundMat = new BABYLON.StandardMaterial("groundMat");
    groundMat.diffuseColor = new BABYLON.Color3(0, 1, 0);
    //groundMat.diffuseColor = new BABYLON.Color3.Red();

    //Ground
    const ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 15, height: 15});
    ground.material = groundMat;
}

const buildRoof = (scene) => {
const roofMat = new BABYLON.StandardMaterial("roofMat");
roofMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/roof.jpg");

const roof = BABYLON.MeshBuilder.CreateCylinder("roof", {diameter: 1.3, height: 1.2, tessellation: 3});
roof.material = roofMat;
roof.scaling.x = 0.75;
roof.rotation.z = Math.PI / 2;
roof.position.y = 1.22;

return roof;
}

const buildBox = (scene) => {
const boxMat = new BABYLON.StandardMaterial("boxMat");
boxMat.diffuseTexture = new BABYLON.Texture("https://www.babylonjs-playground.com/textures/floor.png");

const box = BABYLON.MeshBuilder.CreateBox("box", {});
box.material = boxMat;
box.position.y = 0.5;
//box.scaling.x = 5;
//box.scaling = new BABYLON.Vector3(2, 1.5, 2);
//box.rotation.y = BABYLON.Tools.ToRadians(20);

return box;
<<<<<<< HEAD
=======
>>>>>>> ab92d71ae028200a3bd42b8433f03affaa7f58c5
>>>>>>> bae9dd4c272451dbac7422101eb130786e9bc1fa
}

export default function createStartScene(engine) {
    let that = {};
    let scene = (that.scene = new BABYLON.Scene(engine));
<<<<<<< HEAD
=======
<<<<<<< HEAD
    var gravityVector = new BABYLON.Vector3(0,-9.81, 0);
    var physicsPlugin = new BABYLON.CannonJSPlugin();
    scene.enablePhysics(gravityVector, physicsPlugin);
    //scene.debugLayer.show();

    let light = (that.light = createLight(scene));
    let camera = (that.camera = createArcRotateCamera(scene));
    let ground = (that.ground = createGround(scene));

    let box = (that.box = createBox(scene,2,2,2));
    let manager = (that.actionManager = actionManager(scene));
    let mesh1 = (that.mesh1 = importMesh(scene, 100, 100));

    let bgMusic = (that.bgMusic = backgroundMusic(scene));
    
    
    return that;
}
=======
>>>>>>> bae9dd4c272451dbac7422101eb130786e9bc1fa
    scene.clearColor = new BABYLON.Color3.Black;
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);
    light.intensity = 0.7;

    //House
    let ground = buildGround(scene);
    let box = buildBox(scene);


    
    // Skybox
    var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:1000.0}, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("assets/images/skybox", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.disableLighting = true;
    skybox.material = skyboxMaterial;           
        
    return that;

} 

/*
const showAxis = (scene) => {
// show axis
        var showAxis = function (size) {
        var makeTextPlane = function (text, color, size) {
        var dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", 50, scene, true);
        dynamicTexture.hasAlpha = true;
        dynamicTexture.drawText(text, 5, 40, "bold 36px Arial", color, "transparent", true);
        var plane = new BABYLON.Mesh.CreatePlane("TextPlane", size, scene, true);
        plane.material = new BABYLON.StandardMaterial("TextPlaneMaterial", scene);
        plane.material.backFaceCulling = false;
        plane.material.specularColor = new BABYLON.Color3(0, 0, 0);
        plane.material.diffuseTexture = dynamicTexture;
        return plane;
    };

    var axisX = BABYLON.Mesh.CreateLines("axisX", [
        new BABYLON.Vector3.Zero(), new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, 0.05 * size, 0),
        new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, -0.05 * size, 0)
    ], scene);
    axisX.color = new BABYLON.Color3(1, 0, 0);
    var xChar = makeTextPlane("X", "red", size / 10);
    xChar.position = new BABYLON.Vector3(0.9 * size, -0.05 * size, 0);
    var axisY = BABYLON.Mesh.CreateLines("axisY", [
        new BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(-0.05 * size, size * 0.95, 0),
        new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(0.05 * size, size * 0.95, 0)
    ], scene);
    axisY.color = new BABYLON.Color3(0, 1, 0);
    var yChar = makeTextPlane("Y", "green", size / 10);
    yChar.position = new BABYLON.Vector3(0, 0.9 * size, -0.05 * size);
    var axisZ = BABYLON.Mesh.CreateLines("axisZ", [
        new BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3(0, -0.05 * size, size * 0.95),
        new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3(0, 0.05 * size, size * 0.95)
    ], scene);
    axisZ.color = new BABYLON.Color3(0, 0, 1);
    var zChar = makeTextPlane("Z", "blue", size / 10);
    zChar.position = new BABYLON.Vector3(0, 0.05 * size, 0.9 * size);
};

//Local Axes
function localAxes(size) {
    var pilot_local_axisX = BABYLON.Mesh.CreateLines("pilot_local_axisX", [
        new BABYLON.Vector3.Zero(), new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, 0.05 * size, 0),
        new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, -0.05 * size, 0)
    ], scene);
    pilot_local_axisX.color = new BABYLON.Color3(1, 0, 0);

    pilot_local_axisY = BABYLON.Mesh.CreateLines("pilot_local_axisY", [
        new BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(-0.05 * size, size * 0.95, 0),
        new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(0.05 * size, size * 0.95, 0)
    ], scene);
    pilot_local_axisY.color = new BABYLON.Color3(0, 1, 0);

    var pilot_local_axisZ = BABYLON.Mesh.CreateLines("pilot_local_axisZ", [
        new BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3(0, -0.05 * size, size * 0.95),
        new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3(0, 0.05 * size, size * 0.95)
    ], scene);
    pilot_local_axisZ.color = new BABYLON.Color3(0, 0, 1);

    var local_origin = BABYLON.MeshBuilder.CreateBox("local_origin", { size: 1 }, scene);
    local_origin.isVisible = false;

    pilot_local_axisX.parent = local_origin;
    pilot_local_axisY.parent = local_origin;
    pilot_local_axisZ.parent = local_origin;

    return local_origin;

        }
    {
showAxis(4);
}
}
*/


/*
const ground = buildGround();
    
const house = buildHouse();

const house2 = buildHouse();
house2.position.x = 3;
house2.position.z = 1;

const house3 = buildHouse();
house2.position.x = 4;
house2.position.z = 2;

//Debugging
const axis = showAxis();
//return scene;
<<<<<<< HEAD
*/
=======
*/
>>>>>>> ab92d71ae028200a3bd42b8433f03affaa7f58c5
>>>>>>> bae9dd4c272451dbac7422101eb130786e9bc1fa
