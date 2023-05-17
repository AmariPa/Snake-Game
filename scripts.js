//creating important variables block = 25;
let block = 25;
let rows = 25;
let cols = 25;
let canvas;
let context;

//food variables
let foodX;
let foodY;

//head position
let headX = block * 5;
let headY = block * 5;

//snake vel
let velocityX = 0;
let velocityY = 0;

//snake body
let body = [];

//gameOver 
let gameOver = false;

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
    if (gameOver) {
        return;
    }
    //canvas
    context.fillStyle = 'black';
    context.fillRect(0, 0, c.height, c.width);

        //food
    context.fillStyle = 'red';
    context.fillRect(foodX, foodY, block, block);

    //if you eat the food, it spawns in a new location
    if(headX == foodX && headY == foodY) {
        body.push([foodX, foodY]);
        placeFood();
    }

    //extend body
    for (let i = body.length - 1; i >= 0; i-- ) {
        body[i] = body[i + 1];
    }
     if (body.length) {
        body[0] = [headX, headY];
     }

    //snake headd 
    context.fillStyle='green';
    //movement
    headX += velocityX * block;
    headY += velocityY * block;
    context.fillRect(headX, headY, block, block);
    for (let i = 0; i < body.length; i++) {
        context.fillRect(body[i][0], body[i][1], block, block);
    }
    //YOU LOSE (game over) scenarios...
    if (headX < 0 || headX > cols*block || headY < 0 || headY > rows * block) {
        gameOver = true;
        alert("YOU LOSE");
    }
    for (let i = 0; i < body.length; i++) {
        if (headX == body[i][0] && headY == body[i][1]){
            gameOver = true;
            alert("YOU LOSE");
        }
    }
}

//movement with arrow keys, cannot move in the oppsite direction of current one
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
