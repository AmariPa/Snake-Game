//creating important variables
const block = 25;
const rows = 20;
const cols = 20;
let canvas;
let context;

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
    context.fillStyle = 'gray';
    context.fillRect(0, 0, c.height, c.width);
}



