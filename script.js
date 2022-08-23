var player = document.getElementById('player');

//j'ai déclaré une variable et sa valeur est "src"

player.src ="images/mario-front-1.png";

// variable "images" est un tableau avec 4 valeures:

var images =[src="images/mario-back-1.png",src="images/mario-left-1.png",src="images/mario-right-1.png",src="images/mario-front-1.png"];
console.log(images);

document.addEventListener('keydown',function(e){

if(e.key == "ArrowRight"){
    player.src = images[2];

}else if(e.key == "ArrowLeft"){
    player.src = images[1];
}else if(e.key == "ArrowUp"){
    player.src = images[3];
}else if(e.key == "ArrowDown"){
    player.src = images[0];
}


}
)



