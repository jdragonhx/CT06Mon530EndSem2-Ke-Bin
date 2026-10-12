let posX, xSpeed;

function setup(){
    createCanvas(600, 400);
    background("lightblue")
    posX = width/ 2;
    xSpeed = 5;

}
function draw(){
    background("lightblue");
    posX = posX + xSpeed;
    if(posX > 575){
        xSpeed = -xSpeed;
    }
    if(posX < 25){
        xSpeed = -xSpeed;
    }
    fill('limegreen');
    circle(posX,200,50);
}