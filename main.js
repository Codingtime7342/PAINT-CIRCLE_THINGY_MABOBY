canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

color = "limegreen";
//L_W means line_width
L_W = 4;



ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = L_W;
ctx.arc(400,300,50,0,2*Math.PI);
ctx.stroke();
var last_x, last_y;

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){

    mouse_Event = "mouse_UP";

}


canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){

    mouse_Event = "mouse_Leave";

}


canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){

    
   // x position on canvas = x position onscreen - left margin of the canvas;
    current_mouse_x = e.clientX - canvas.offsetLeft;
    // y position on canvas = y position onscreen - top margin of the canvas;
    current_mouse_y = e.clientY - canvas.offsetTop;
    
    

    if( mouse_Event =="mouse_Down") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = L_W;
        ctx.arc(last_x-15,last_y-15,50,0,2*Math.PI);
        ctx.stroke();
    
    }
    

    last_x = current_mouse_x;
    last_y = current_mouse_y;
   
}

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){

    mouse_Event = "mouse_Down";

}


