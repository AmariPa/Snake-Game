//creating important variables block = 25;
let block = 25;
let rows = 25;
let cols = 25;
let canvas;
let context;
let foodX;
let foodY;

//head position
let headX = block * 5;
let headY = block * 5;

//snake vel
let velocityX = 0;
let velocityY = 0;

//canvas creation 
window.onload = function() {
    c = document.getElementById("canvas");
    c.height = rows * block;
    c.width = cols * block;
    context = c.getContext("2d");

    placeFood();
    //watches for keyup event
    document.addEventListener("keyup", moveAround);
    //canvas update
    setInterval(update, 1000/15);
}

//drawing and updating  components
function update() {
    //canvas
    context.fillStyle = 'black';
    context.fillRect(0, 0, c.height, c.width);

        //food
    context.fillStyle = 'red';
    context.fillRect(foodX, foodY, block, block);

    //if you eat the food, it spawns in a new location
    if(headX == foodX && headY == foodY) {
        placeFood();
    }

    //snake headd 
    context.fillStyle='green';
    //movement
    headX += velocityX * block;
    headY += velocityY * block;
    context.fillRect(headX, headY, block, block);

}

//movement
function moveAround(e) {
    if (e.code == 'ArrowUp' && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
     if (e.code == 'ArrowDown' && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }
     if (e.code == 'ArrowLeft' && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }
     if (e.code == 'ArrowRight' && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}


//random food placement
function placeFood() {
    foodX = Math.floor(Math.random() * cols) * block;
    foodY = Math.floor(Math.random() * rows) * block;

}
