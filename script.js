const btnUndo = document.querySelector(".btn-undo");
const btnClear = document.querySelector(".btn-clear");
const colorField = document.querySelector(".color-field");
const colorPicker = document.querySelector(".color-picker");
const penRange = document.querySelector(".pen-range");

const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth - 60;
canvas.height = 450;

const context = canvas.getContext("2d");
context.fillStyle = "white";
context.fillRect(0, 0, canvas.width, canvas.height);

let draw_color = "black";
let draw_width = "2";
let is_dawing = false;
let restore_array = [];
let index = -1;


canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);

canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);

function start(event) {
    is_dawing = true;
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft,
                   event.clientY - canvas.offsetTop);
                   event.preventDefault();
}

function draw(event){
    if (is_dawing){
        context.lineTo(event.clientX - canvas.offsetLeft,
            event.clientY - canvas.offsetTop);
            context.strokeStyle = draw_color;
            context.lineWidth = draw_width;
            context.lineCap = "round";
            context.lineJoin = "round";
            context.stroke();
    }
    event.preventDefault();
}

function stop(event){
if(is_dawing){
    context.stroke();
    context.closePath();
    is_dawing = false;
}
event.preventDefault();
if (event.type != 'mouseout'){
    restore_array.push(context.getImageData(0, 0, canvas.width, canvas.height))
index += 1;
}}

function changeColor(element){
    draw_color = element.style.background;
}

btnClear.addEventListener('click',()=>{
    window.location.reload()
})

