canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouseEvent = "empty";
var lastPositionofX, lastPositionofY;

color = black;
widthOfLine = 1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    mouseEvent = "mouseDown";

    color = document.getElementById("color").value;
    widthOfLine = document.getElementById("widthofLine").value;
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    currentPositionofMouseX = e.clientX - canvas.offsetLeft;
    currentPositionofMouseY = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;

        console.log("lastPositionofX = "+lastPositionofX+", lastPositionofY = "+lastPositionofY);
        ctx.moveTo(lastPositionofX, lastPositionofY);

        console.log("currentPositionofMouseX = "+currentPositionofMouseX+", currentPositionofMouseY = "+currentPositionofMouseY);
        ctx.lineTo(currentPositionofMouseX, currentPositionofMouseY);
        ctx.stroke();
    }
    lastPositionofY = currentPositionofMouseX;
    lastPositionofY = currentPositionofMouseY;
}

function clearArea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}