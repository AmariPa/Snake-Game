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

    update();

}

//drawing and updating the canvas
function update() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, c.height, c.width);

    context.fillStyle='green';
    context.fillRect(headX, headY, block, block);
}



