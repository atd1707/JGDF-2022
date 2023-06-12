var createScene = async function () {
    var scene = new BABYLON.Scene(engine);

    //Adding a light
    var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 20, 100), scene);

    //Adding an Arc Rotate Camera
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, false);
    var skull;
    var skullMaterial = new BABYLON.StandardMaterial("skullmat", scene);
    // The first parameter can be used to specify which mesh to import. Here we import all meshes
    BABYLON.SceneLoader.ImportMesh("", "assets/scenes/", "skull.babylon", scene, function (newMeshes) {
        // Set the target of the camera to the first imported mesh
        camera.target = newMeshes[0];
        skull = newMeshes[0];
        skull.material = skullMaterial;
    });

    // Move the light with the camera
    scene.registerBeforeRender(function () {
        light.position = camera.position;
    });

    // Load in a full screen GUI from the snippet server
    let advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("GUI", true, scene);
    let loadedGUI = await advancedTexture.parseFromSnippetAsync("D04P4Z");

    // Get controls by name
    let sliderX = advancedTexture.getControlByName("RotationXSlider");
    let sliderY = advancedTexture.getControlByName("RotationYSlider");
    let sliderZ = advancedTexture.getControlByName("RotationZSlider");
    let matPicker = advancedTexture.getControlByName("MatColor");
    let specPicker = advancedTexture.getControlByName("SpecColor");

    // Add observables to change the rotation
    sliderX.onValueChangedObservable.add(function(value) {
        if (skull) {
            skull.rotation.x = value;
        }
    });
    
    sliderY.onValueChangedObservable.add(function(value) {
        if (skull) {
            skull.rotation.y = value;
        }
    });
    
    sliderZ.onValueChangedObservable.add(function(value) {
        if (skull) {
            skull.rotation.z = value;
        }
    });

    // Add observables to change the color
    matPicker.onValueChangedObservable.add(function(value) { // value is a color3
        skullMaterial.diffuseColor.copyFrom(value);
    });

    specPicker.onValueChangedObservable.add(function(value) {
        skullMaterial.specularColor.copyFrom(value);
    });

    return scene;
}


    var camera = new BABYLON.FreeCamera("FreeCamera", new BABYLON.Vector3(0, 0, 0), scene);

    var music1 = new BABYLON.Sound("Violons11", "assets/sounds/violons11.wav", scene, 
		soundReady, { loop: true });
	var music2 = new BABYLON.Sound("Violons18", "assets/sounds/violons18.wav", scene, 
		soundReady, { loop: true });
	var music3 = new BABYLON.Sound("Cellolong", "assets/sounds/cellolong.wav", scene, 
		soundReady, { loop: true });

	var soundsReady = 0;
	
	function soundReady() {
		soundsReady++;
		if (soundsReady === 3) {
			music1.play();
			music2.play();
			music3.play();	
		}
	}
	
    return scene;
