
var createScene = async function () {
    var scene = new BABYLON.Scene(engine);
    
    var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI/2, Math.PI / 3, 25, BABYLON.Vector3.Zero(), scene);
	camera.attachControl(canvas, true);

    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
	light.intensity = 0.7;

    //Create advance texture
    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, scene);
    advancedTexture.idealWidth = 1600;
    advancedTexture.renderAtIdealSize = true;
    if( window.innerWidth < 500 ) {
        await advancedTexture.parseFromSnippetAsync("E92W52");
        return scene;
    }
    
    await advancedTexture.parseFromSnippetAsync("I59XFB#11");

    var currentIndex = 4;
    var captions = [
    "\"Baby don't hurt me\"",
    "\"An existentially sad dog\"", 
    "\"Help, I did my makeup wrong\"",
    "\"Sharkbait OooHaHa\"",
    "\"An uncomfortable position\""];

    var titles = [
        "What is Love?",
        "Meow",
        "Colors of the Wind",
        "Sharkbait",
        "Tightrope"
    ]

    //Create gradient background
    var rect1 = new BABYLON.GUI.Rectangle();
    var gradient = new BABYLON.GUI.LinearGradient(0, 0, 1000, 1000);
    gradient.addColorStop(0, "white");
    gradient.addColorStop(1, "#bbb");
    rect1.backgroundGradient = gradient;
    advancedTexture.addControl(rect1);

    let children = advancedTexture.getChildren()[0].children;
    var title = children.filter(control => control.name === "Title")[0];
    var caption = children.filter(control => control.name === "Caption")[0];

    var nextButton = children.filter(control => control.name === "Next")[0];
    var backButton = children.filter(control => control.name === "Back")[0];
    var mainPainting = children.filter(control => control.name === "MainPainting")[0];
    var paintings = children.filter(control => control.name === "Painting");
    var background = children.filter(control => control.name === "Background")[0];

    for(let i = 0; i < paintings.length; ++i)
    {
        paintings[i].onPointerClickObservable.add((evt) => {
            addshadow(paintings[currentIndex], 0);
            currentIndex = i;
            caption.text = captions[currentIndex];
            title.text = titles[currentIndex];
            mainPainting.source = paintings[currentIndex].source;
            addshadow(paintings[currentIndex], 5);
            resetZoom();
        });

    }

    var view = children.filter(control => control.name === "View")[0];
    caption.text = captions[currentIndex];

    function addshadow(painting, value) {     
        painting.shadowOffsetX = value;
        painting.shadowOffsetY = value;
        painting.shadowBlur = value;
    }
    nextButton.onPointerClickObservable.add((evt) => {
        addshadow(paintings[currentIndex], 0);
        currentIndex++;
        if(currentIndex >= captions.length) currentIndex = 0;
        caption.text = captions[currentIndex];
        title.text = titles[currentIndex];
        mainPainting.source = paintings[currentIndex].source;
        addshadow(paintings[currentIndex], 5);
        resetZoom();
    });

    backButton.onPointerClickObservable.add((evt) => {
        addshadow(paintings[currentIndex], 0);
        currentIndex--;
        if(currentIndex < 0) currentIndex =  captions.length-1;
        caption.text = captions[currentIndex];
        title.text = titles[currentIndex];
        mainPainting.source = paintings[currentIndex].source;
        addshadow(paintings[currentIndex], 5);
        resetZoom();
    });

    background.onPointerClickObservable.add((evt) => {
        resetZoom();
    });

    var defaultPosX = mainPainting.leftInPixels;
    var defaultPosY = mainPainting.topInPixels;
    view.onPointerClickObservable.add((evt) => {
        mainPainting.scaleX = 0.35;
        mainPainting.scaleY = 0.35;
        mainPainting.zIndex = 5;
        mainPainting.leftInPixels = 0;
        mainPainting.topInPixels = 0;
        mainPainting.shadowBlur = 500;
        background.background = "black";
        background.zIndex = 3;
        background.alpha = 0.3;
    });

    function resetZoom() {     
        mainPainting.scaleX = 0.15;
        mainPainting.scaleY = 0.15;
        mainPainting.leftInPixels = defaultPosX;
        mainPainting.topInPixels = defaultPosY;
        mainPainting.shadowBlur = 0;
        background.alpha = 0.0;
        background.zIndex = 0;
    }
    return scene;
};
   
 var createScene = function () {
    var scene = new BABYLON.Scene(engine);

    var camera = new BABYLON.FreeCamera("FreeCamera", new BABYLON.Vector3(0, 0, 0), scene);

    var music1 = new BABYLON.Sound("Violons11", "assets/audio/violons11.wav", scene, 
		soundReady, { loop: true });
	var music2 = new BABYLON.Sound("Violons18", "assets/audio/violons18.wav", scene, 
		soundReady, { loop: true });
	var music3 = new BABYLON.Sound("Cellolong", "assets/audio/cellolong.wav", scene, 
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
