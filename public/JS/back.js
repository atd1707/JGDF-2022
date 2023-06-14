var soundsReady = 0;

export default async function createStartScene(engine) {
  let that = {};
  let scene = (that.scene = new BABYLON.Scene(engine));
  //var createScene = async function () {
  //   var scene = new BABYLON.Scene(engine);
  // var camera = new BABYLON.FreeCamera("FreeCamera", new BABYLON.Vector3(0, 0, 0), scene);

  const soundReady = () => {
    soundsReady++;
    if (soundsReady === 3) {
      music1.play();
      music2.play();
      music3.play();
    }
  };

  const music1 = new BABYLON.Sound(
    "Violons11",
    "assets/audio/violons11.wav",
    scene,
    soundReady,
    { loop: true }
  );
  const music2 = new BABYLON.Sound(
    "Violons18",
    "assets/audio/violons18.wav",
    scene,
    soundReady,
    { loop: true }
  );
  const music3 = new BABYLON.Sound(
    "Cellolong",
    "assets/audio/cellolong.wav",
    scene,
    soundReady,
    { loop: true }
  );

  //Adding a light
  var light = new BABYLON.PointLight(
    "Omni",
    new BABYLON.Vector3(20, 20, 100),
    scene
  );
 /* 
  //Adding an Arc Rotate Camera
  var camera = new BABYLON.ArcRotateCamera(
    "Camera",
    0,
    0.8,
    100,
    BABYLON.Vector3.Zero(),
    scene
  );
  scene.activeCamera = camera;
  scene.activeCamera.attachControl(true);
   
  //camera.attachControl(canvas, false);
  var skull;
  var skullMaterial = new BABYLON.StandardMaterial("skullmat", scene);
  // The first parameter can be used to specify which mesh to import. Here we import all meshes
  BABYLON.SceneLoader.ImportMesh(
    "",
    "assets/scenes/",
    "skull.babylon",
    scene,
    function (newMeshes) {
      // Set the target of the camera to the first imported mesh
      camera.target = newMeshes[0];
      skull = newMeshes[0];
      skull.material = skullMaterial;
    }
  );

  // Move the light with the camera
  scene.registerBeforeRender(function () {
    light.position = camera.position;
  });
 

  // Load in a full screen GUI from the snippet server
  let advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI(
    "GUI",
    true,
    scene
  );
    //let loadedGUI = await advancedTexture.parseFromSnippetAsync("D04P4Z");
    var panel = new BABYLON.GUI.StackPanel();
    panel.width = "220px";
    panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
    advancedTexture.addControl(panel);
    
    var header = new BABYLON.GUI.TextBlock();
    header.text = "Y-rotation: 0 deg";
    header.height = "30px";
    header.color = "white";
    panel.addControl(header); 

    var slider = new BABYLON.GUI.Slider();
    slider.minimum = 0;
    slider.maximum = 2 * Math.PI;
    slider.value = 0;
    slider.height = "20px";
    slider.width = "200px";
    slider.onValueChangedObservable.add(function(value) {
        header.text = "Y-rotation: " + (BABYLON.Tools.ToDegrees(value) | 0) + " deg";
        if (skull) {
            skull.rotation.y = value;
        }
    });
    panel.addControl(slider);

  // Get controls by name
  let sliderX = advancedTexture.getControlByName("RotationXSlider");
  let sliderY = advancedTexture.getControlByName("RotationYSlider");
  let sliderZ = advancedTexture.getControlByName("RotationZSlider");
  let matPicker = advancedTexture.getControlByName("MatColor");
  let specPicker = advancedTexture.getControlByName("SpecColor");

  // Add observables to change the rotation
  sliderX.onValueChangedObservable.add(function (value) {
    if (skull) {
      skull.rotation.x = value;
    }
  });

  sliderY.onValueChangedObservable.add(function (value) {
    if (skull) {
      skull.rotation.y = value;
    }
  });

  sliderZ.onValueChangedObservable.add(function (value) {
    if (skull) {
      skull.rotation.z = value;
    }
  });

  // Add observables to change the color
  matPicker.onValueChangedObservable.add(function (value) {
    // value is a color3
    skullMaterial.diffuseColor.copyFrom(value);
  });

  specPicker.onValueChangedObservable.add(function (value) {
    skullMaterial.specularColor.copyFrom(value);
  });
*/
  return that;
}
