noseX = 0;
noseY = 0;
ReyeX = 0;
ReyeY = 0;
RearX = 0;
RearY = 0;
LearX = 0;
LearY = 0;
LeyeX = 0;
LeyeY = 0;

function preload(){
    clown_nose = loadImage("Clown-Nose.png");
    sunglasses = loadImage("sunglasses.png");
    dog_ear = loadImage("dog_ear_1.png")
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(noseX, noseY, 20);
    image(clown_nose, Number(noseX)-15, Number(noseY)-15, 30, 30);
    image(sunglasses, Number(ReyeX)-15, Number(ReyeY)-10, 70, 30);
    image(dog_ear, Number(ReyeX)-30, Number(ReyeY)-5, 20, 20);
    image(dog_ear, Number(LeyeX)+15, Number(LeyeY)-5, 20, 20);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log('PoseNet activated');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        ReyeX = results[0].pose.rightEye.x;
        ReyeY = results[0].pose.rightEye.y;
        RearX = results[0].pose.rightEar.x;
        RearY = results[0].pose.rightEar.y;
        LearX = results[0].pose.leftEar.x;
        LearY = results[0].pose.leftEar.y;
        LeyeX = results[0].pose.leftEye.x;
        LeyeY = results[0].pose.leftEye.y;
        console.log("nose x ="+noseX);
        console.log("nose y ="+noseY);
        console.log("eye x ="+ReyeX);
        console.log("eye y ="+ReyeY);
        console.log("right ear x ="+RearX);
        console.log("right ear y ="+RearY);
        console.log("left ear x ="+LearX);
        console.log("left ear y ="+LearY);
        console.log("left eye x ="+LeyeX);
        console.log("left eye y ="+LeyeY);
    }
}