canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

function circle(x, y, color) {
    ctx = canvas.getContext("2d");
    ctx.beginPath()
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.arc(x, y, 50, 0, 2 * Math.PI);
    ctx.stroke()
}
    circle(290, 300, "blue");
    circle(350, 350, "yellow");
    circle(410, 300, "black");
    circle(470, 350, "green");
    circle(530, 300, "red");

