let pokemons = ["Pikachu","Raichu","Bulbasaur","Mewtwo","Charizard"];
let yPos;

function setup(){
    createCanvas(200, 300);
    fill("pink");
    // Task: Align the text to the center using textAlign
    textAlign(CENTER);
    textSize(20);
    // Task: set font size to 20 using textSize
    yPos = 100;
}
function draw(){
    background(0);
    for (let count = 0;pokemons.length;count++){
        text(pokemons[count],width/2,yPos+count*20);
    }
}