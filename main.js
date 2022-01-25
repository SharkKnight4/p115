
function preload(){
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}
function draw(){
    image(video,0,0,300,300);

    fill(0, 190, 251);
    stroke(0, 190, 251);

    rect(10,10,10,280);

    rect(10,10,280,10);

    rect(280,10,10,280);

    rect(10,280,280,10);

    //rect(280,280,280,10);

    fill(245,40,100);
    stroke(255,0,0);
    
    circle(20,20,50);

    circle(20,280,50);

    circle(280,20,50);

    circle(280,280,50);

}
function take_snapshot(){
    save("HBDTY.png");
}