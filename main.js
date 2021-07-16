function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#329ea8');
    textSize(difference);
    fill('#ab3fab');
    text('Hello World', 50, 50);
    
}

function modelLoaded(){
    console.log("Pose Net is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX= "+ leftWristX + "rightWristX= "+ rightWristX + "difference= " + difference);
    }
}