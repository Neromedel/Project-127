song_1 ="";
song_2 ="";

function preload(){
song_1 =loadSound("Cradles.mp3");
song_2 =loadSound("Love Nwantiti.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.position(30,40);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

