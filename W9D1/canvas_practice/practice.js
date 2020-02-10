document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById("mycanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 500;

    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 500, 500);

    ctx.beginPath();
    ctx.arc(250, 250, 250, 0, 2 * Math.PI);
    ctx.strokeStyle = "blue"
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.fillStyle = "yellow";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.lineTo(0, 250);
    ctx.lineTo(250, 0);
    ctx.fillStyle = "green";
    ctx.fill();
});
