var c = document.createElement('canvas');

c.style.border = '1px solid black';
c.style.position = 'absolute';
c.style.zIndex = '-5';

document.body.appendChild(c);

c.width = window.innerWidth;
c.height = window.innerHeight;

var ctx = c.getContext('2d');



ctx.fillStyle = '#1a1f21';
ctx.fillRect(0, 0, c.width, c.height);
ctx.fillStyle = 'white';

class Star
{
    constructor(posX, posY, radius, alpha, speed)
    {
        this.posX = posX;
        this.posY = posY;
        this.radius = radius;
        this.alpha = alpha;
        this.speed = speed;

    }
}

var stars = [];
let starCount = 2000;

for (let i = 0; i < starCount; i++)
{
    // ctx.fillStyle = 'rgba(255, 255, 255,' + Math.random() + ') ';
    // ctx.fillRect(Math.random() * c.width, Math.random() * c.height, Math.random() * 1.1, Math.random() * 1.1);

    stars.push(new Star(Math.random() * c.width, Math.random() * c.height, Math.random(), Math.random(), Math.random()));
    // console.log(stars.length);
    // console.log(stars[i].posX);
    ctx.strokeStyle = 'rgba(255, 255, 255,' + stars[i].alpha + ') ';
    // ctx.strokeStyle = 'rgba(255, 255, 255,' + 1 + ') ';
    ctx.beginPath();
    ctx.arc(stars[i].posX, stars[i].posY, stars[i].radius, 0, 2 * Math.PI);
    // ctx.arc(500, stars[i].posY, stars[i].radius, 0, 2 * Math.PI);
    ctx.stroke();

}

window.requestAnimationFrame(repeat);

var x;
var y;

Number.prototype.map = function (in_min, in_max, out_min, out_max)
{
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function getMousePos(canvas, evt)
{
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

var mousePos = {}; c.addEventListener('mousemove', function (evt)
{
    mousePos = getMousePos(c, evt);
    console.log('Mouse position: ' + mousePos.x + ',' + mousePos.y);
}, false);

function repeat()
{
    ctx.fillStyle = '#1a1f21';
    ctx.fillRect(0, 0, c.width, c.height);


    // x = event.clientX;
    // y = event.clientY;
    for (let i = 0; i < starCount; i++)
    {
        stars[i].posX += stars[i].speed;
        stars[i].posY += stars[i].speed / 4;
        if (stars[i].posX > window.innerWidth || stars[i].posY > window.innerHeight)
        {
            stars[i].posX = Math.random() * c.width;
            stars[i].posY = Math.random() * c.width;
        }
        ctx.strokeStyle = 'rgba(255, 255, 255,' + stars[i].alpha + ') ';
        // ctx.strokeStyle = 'rgba(255, 255, 255,' + stars[i].posX.map(0, window.innerWidth, 0.2, 0) + ') ';
        // ctx.strokeStyle = 'rgba(255, 255, 255,' + 0.1 + ') ';
        ctx.beginPath();
        ctx.arc(stars[i].posX, stars[i].posY, stars[i].radius, 0, 2 * Math.PI);
        // ctx.arc(500, stars[i].posY, stars[i].radius, 0, 2 * Math.PI);
        ctx.stroke();

        // console.log()
        // ctx.strokeStyle = 'white';
        var grad = ctx.createLinearGradient(0, 0, 500, 1000);
        grad.addColorStop(0, 'rgba(255, 255, 255,' + stars[i].posX.map(0, window.innerWidth, 0, 0.2) + ')');

        grad.addColorStop(1, "gray");
        // ctx.strokeStyle = grad;

        ctx.beginPath();
        // ctx.moveTo(window.innerWidth / 2, window.innerHeight / 2 - 200);
        if (i > 0)
        {
            ctx.strokeStyle = 'rgba(255, 255, 255,' + stars[i].posX.map(0, window.innerWidth, 0.2, 0) + ') ';
            ctx.moveTo(stars[i - 1].posX % 10, stars[i - 1].posY % 10);
            // ctx.moveTo(getMousePos(c, evt).x, 0);
            // ctx.moveTo(mousePos.x, mousePos.y);
            ctx.lineTo(stars[i].posX, stars[i].posY);
            ctx.stroke();
        }
    }

    window.requestAnimationFrame(repeat);
}

window.onresize = function (e)
{
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'white';

    for (let i = 0; i < 6000; i++)
    {
        if (i % 500 == 0)
        {
            ctx.fillStyle = 'rgba(55, 255, 155,' + Math.random() + ') ';
            ctx.fillRect(Math.random() * c.width, Math.random() * c.height, Math.random() * 6.8, Math.random() * 9.8);
        }

        ctx.fillStyle = 'rgba(255, 255, 255,' + Math.random() + ') ';
        ctx.fillRect(Math.random() * c.width, Math.random() * c.height, Math.random() * 1.1, Math.random() * 1.1);
    }
};
