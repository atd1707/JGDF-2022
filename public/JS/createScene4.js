var createScene = function () {
    var scene = new BABYLON.Scene(engine);
    var donut = BABYLON.Mesh.CreateTorusKnot("donut", 2, 0.5, 48, 32, 3, 2, scene);

    scene.createDefaultCameraOrLight(true, true, true);

    // Create the 3D UI manager
    var manager = new BABYLON.GUI.GUI3DManager(scene);

    // Create a horizontal stack panel
    var panel = new BABYLON.GUI.StackPanel3D();
    panel.margin = 0.02;
  
    manager.addControl(panel);
    panel.position.z = -1.5;

    // Let's add some buttons!
    var addButton = function() {
        var button = new BABYLON.GUI.Button3D("orientation");
        panel.addControl(button);
        button.onPointerUpObservable.add(function(){
            panel.isVertical = !panel.isVertical;
        });   
        
        var text1 = new BABYLON.GUI.TextBlock();
        text1.text = "change orientation";
        text1.color = "white";
        text1.fontSize = 24;
        button.content = text1;  
    }

    addButton();    
    addButton();
    addButton();





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
};