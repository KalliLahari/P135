status1="";
object_name="";


function preload(){

}

function setup(){
canvas=createCanvas(350,300);
canvas.center();
video=createCapture(VIDEO);
video.size(350,300);
video.hide();
}

function draw(){
    image(video,0,0,350,300);
}

function start(){
    objectdetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status : Detecting objects";
    object_name=document.getElementById("object_names").value;
}

function modelloaded(){
    console.log("modelloaded");
    status1="true";
}
