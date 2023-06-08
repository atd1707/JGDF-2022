export default function createStartScene(engine) {
    let that = {};
    let scene = (that.scene = new BABYLON.Scene(engine));



    
        //Adding a light
        var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 20, 100), scene);
    
        //Adding an Arc Rotate Camera
        var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), scene);
        camera.attachControl(canvas, false);
        var skull;
        var skullMaterial = new BABYLON.StandardMaterial("skullmat", scene);
        // The first parameter can be used to specify which mesh to import. Here we import all meshes
        BABYLON.SceneLoader.ImportMesh("", "/scenes/", "skull.babylon", scene, function (newMeshes) {
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
        let loadedGUI = advancedTexture.parseFromSnippetAsync("D04P4Z");
    
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
    
        return that;
    }
        