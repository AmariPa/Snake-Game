//creating important variables block = 25;
let block = 25;
let rows = 25;
let cols = 25;
let canvas;
let context;

//head position
const headX = block * 5;
const headY = block * 5;


//canvas creation 
window.onload = function() {
    c = document.getElementById("canvas");
    c.height = rows * block;
    c.width = cols * block;
    context = c.getContext("2d");

    placeFood();

    update();

}

//drawing and updating  components
function update() {
    //canvas
    context.fillStyle = 'black';
    context.fillRect(0, 0, c.height, c.width);

    //snake headd 
    context.fillStyle='green';
    context.fillRect(headX, headY, block, block);

    //food
    context.fillStyle = 'red';
    context.fillRect(foodX, foodY, block, block);
}


//random food placement
function placeFood() {
    foodX = Math.floor(Math.random() * cols) * block;
    foodY = Math.floor(Math.random() * rows) * block;

}