
function preload() {
	world_start = loadSound("world_start.wav");
	mariojump = loadSound('jump.wav')
	mariokick = loadSound('kick.wav')
	gameOverSound = loadSound('gameover.wav')
	getCoin = loadSound('coin.wav')
	dieSound = loadSound('mariodie.wav')

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.parent('gameConsole');
	video.hide()
	poseNet = ml5.poseNet(video, () => console.log("loaded"));
	poseNet.on('pose', gotPose);
}

function draw() {
	game();
}

function gotPose(result) {
	if(result.length > 0){
		console.log(result)
		noseX = result[0].pose.nose.x
		noseY = result[0].pose.nose.y
		
	}
}




