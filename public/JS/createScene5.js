export default function createStartScene(engine) {
    let that = {};
    let scene = (that.scene = new BABYLON.Scene(engine));
    let keyDownMap =[];
    

    engine.enableOfflineSupport = false;

    // Scene and Camera


    var camera1 = new BABYLON.ArcRotateCamera("camera1", Math.PI / 2, Math.PI / 4, 10, new BABYLON.Vector3(0, -5, 0), scene);
    scene.activeCamera = camera1;
    scene.activeCamera.attachControl(true);
    camera1.lowerRadiusLimit = 2;
    camera1.upperRadiusLimit = 10;
    camera1.wheelDeltaPercentage = 0.01;

    // Lights
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.6;
    light.specular = BABYLON.Color3.Black();

    var light2 = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -0.5, -1.0), scene);
    light2.position = new BABYLON.Vector3(0, 5, 5);

    // Skybox
    var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", { size: 1000.0 }, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("assets/images/skybox2", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;

    // Ground
    var ground = BABYLON.MeshBuilder.CreateGround("ground", { height: 50, width: 50, subdivisions: 4 }, scene);
    var groundMaterial = new BABYLON.StandardMaterial("villageMaterial", scene);
    groundMaterial.diffuseTexture = new BABYLON.Texture("assets/enviroments/villagegreen.png", scene);
    groundMaterial.diffuseTexture.uScale = 30;
    groundMaterial.diffuseTexture.vScale = 30;
    groundMaterial.specularColor = new BABYLON.Color3(.1, .1, .1);
    ground.material = groundMaterial;


    // Load hero character and play animation
    BABYLON.SceneLoader.ImportMesh("", "https://assets.babylonjs.com/meshes/", "HVGirl.glb", scene, function (newMeshes, particleSystems, skeletons, animationGroups) {
        var hero = newMeshes[0];

        //Scale the model down        
        hero.scaling.scaleInPlace(0.1);

        //Lock camera on the character 
        camera1.target = hero;

        //Get the Samba animation Group
        const idleAnim = scene.getAnimationGroupByName("Idle");
        const sambaAnim = scene.getAnimationGroupByName("Samba");
        const walkingAnim = scene.getAnimationGroupByName("Walking");
        const walkingBackAnim = scene.getAnimationGroupByName("WalkingBack");

        const movement = false;


        scene.onKeyboardObservable.add((kbInfo) => {
            switch (kbInfo.type) {
                case BABYLON.KeyboardEventTypes.KEYDOWN:
                    switch (kbInfo.event.key) {
                        case "a":
                        case "A":
                            sambaAnim.stop(true, 1.0, sambaAnim.from, sambaAnim.to, false);
                            walkingAnim.stop(true, 1.0, walkingAnim.from, walkingAnim.to, false);
                            walkingBackAnim.stop(true, 1.0, walkingBackAnim.from, walkingAnim.to, false);
                            idleAnim.start(true, 1.0, idleAnim.from, idleAnim.to, false);
                            //hero.postion.x -= 0.1;
                        break
                        case "d":
                        case "D":
                            sambaAnim.start(true, 1.0, sambaAnim.from, sambaAnim.to, false);
                            //hero.position.x += 0.1;
                        break
                        case "w":
                        case "W":
                            walkingAnim.start(true, 1.0, walkingAnim.from, walkingAnim.to, false);
                            hero.position.z += 0.1;
                        break
                        case "s":
                        case "S":
                            walkingBackAnim.start(true, 1.0, walkingBackAnim.from, walkingAnim.to, false);
                            hero.position.z -= 0.1;
                        break
                    }
                break;
            }
        });

       
    });

    return that;
}
