// Canvas Set-Up
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// Ball properties
var ballRadius = canvas.width / 20;
// Paddle properties
var paddleHeight = canvas.height / 6;
var paddleWidth = canvas.width / 8;
var paddleX = (canvas.width - paddleWidth) / 2;
var aniCount = 0;
// Paddle properties
var paddleHeight2 = 90;
var paddleWidth2 = 90;
var paddleX2 = (canvas.width - paddleWidth) / 2;
var aniCount = 0;
// position and speed properties
var x = Math.floor((Math.random() * canvas.width) / 2);
var y = Math.floor((Math.random() * 50) + paddleHeight + 5);
var dx = 2;
var dy = -2;
// keypad & Score properties
var rightPressed = false;
var leftPressed = false;
var score = 0;
// Ball img storage
var loveball1 = new Image();
loveball1.src = 'images/fire ball small.png';
var loveball2 = new Image();
loveball2.src = 'images/fireball big.png';
var loveball3 = new Image();
loveball3.src = 'images/real red fire.png';
var loveball4 = new Image();
loveball4.src = 'images/real blue fire.png';
var loveball5 = new Image();
loveball5.src = 'images/real purple fire.png';
var loveball6 = new Image();
loveball6.src = 'images/real black fire.png';
// Player paddle img storeage
var rioluLeft = new Image();
rioluLeft.src = 'images/riolu sheet left.png';
var rioluRight = new Image();
rioluRight.src = 'images/riolu sheet right.png';
var rioluUp = new Image();
rioluUp.src = 'images/riolu sheet center.png';
var canvasBack = new Image();
canvasBack.src = 'images/18oiwrk32uilpgif.gif';

var boop = new Audio();
boop.src = 'images/431327__someguy22__8-bit-text-blip-low-pitch.wav'
var lose = new Audio();
lose.src = 'images/violin.wav'
var title = new Audio();
title.src = 'images/Getsu Fuma Den final boss music arrangement [FAMITRACKER VRC6].mp3'

var mayleneRight = new Image();
mayleneRight.src = 'images/hooh sheet right.png';
var mayleneLeft = new Image();
mayleneLeft.src = 'images/hooh sheet left.png';
var mayleneCenter = new Image();
mayleneCenter.src = 'images/hooh sheet center.png';
// keypad Event Listener
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


setInterval(() => {
    aniCount = (aniCount + 1) % 3
}, 120)
//<!--------------------------------------------------------------!>

// Keypad Hold Down Event Executer
function keyDownHandler(e) {
    if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }

}

// Keypad Hold Down Event Executer
function keyUpHandler(e) {
    if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }

}

// 
function drawBall() {
    console.log(score)

    if (score >= 0) {
        ctx.beginPath();
        ctx.drawImage(loveball1, x, y, ballRadius, ballRadius)
        ctx.fillStyle = loveball1;
        ctx.fill();
        ctx.closePath();
    }
    if (score > 3) {
        ctx.beginPath();
        ctx.drawImage(loveball2, x, y, ballRadius, ballRadius)
        ctx.fillStyle = loveball2;
        ctx.fill();
        ctx.closePath();
    }
    if (score > 6) {
        ctx.beginPath();
        ctx.drawImage(loveball3, x, y, ballRadius, ballRadius)
        ctx.fillStyle = loveball3;
        ctx.fill();
        ctx.closePath();
    }
    if (score > 9) {
        ctx.beginPath();
        ctx.drawImage(loveball4, x, y, ballRadius, ballRadius)
        ctx.fillStyle = loveball4;
        ctx.fill();
        ctx.closePath();
    }
    if (score > 12) {
        ctx.beginPath();
        ctx.drawImage(loveball5, x, y, ballRadius, ballRadius)
        ctx.fillStyle = loveball5;
        ctx.fill();
        ctx.closePath();
    }
    if (score > 18) {
        ctx.beginPath();
        ctx.drawImage(loveball6, x, y, ballRadius, ballRadius)
        ctx.fillStyle = loveball6;
        ctx.fill();
        ctx.closePath();
    }
}

function drawPaddle() {
    ctx.beginPath();
    if (leftPressed === true) {
        ctx.drawImage(rioluLeft, aniCount * 256, 0, 256, 300, paddleX, canvas.height - paddleHeight, 75, 75);
        ctx.fillStyle = rioluLeft;
        ctx.fill();
        ctx.closePath();
        console.log('helo left')
    }
    if (rightPressed === true) {
        ctx.drawImage(rioluRight, aniCount * 256, 0, 256, 300, paddleX, canvas.height - paddleHeight, 75, 75);
        ctx.fillStyle = rioluRight;
        ctx.fill();
        ctx.closePath();
        console.log('helo right')
    }
    if (rightPressed === leftPressed) {
        ctx.drawImage(rioluUp, aniCount * 250, 0, 230, 220, paddleX, canvas.height - paddleHeight, 75, 75);
        ctx.fillStyle = rioluUp;
        ctx.fill();
        ctx.closePath();
        console.log('helo up')
    }
}


// 
function drawPaddle2() {
    if (dx < 0) {
        ctx.beginPath();
        ctx.drawImage(mayleneLeft, aniCount * 68, 0, 66, 59, x - 20, 0, 130, 100);
        ctx.fillStyle = mayleneLeft;
        ctx.fill();
        ctx.closePath();
    }

    if (dx > 0) {
        ctx.beginPath();
        ctx.drawImage(mayleneRight, aniCount * 68, 0, 66, 59, x - 20, 0, 130, 100);
        ctx.fillStyle = mayleneRight;
        ctx.fill();
        ctx.closePath();
    }
    if (!(dx < 0) && !(dx > 0)) {
        ctx.beginPath();
        ctx.drawImage(mayleneCenter, aniCount * 68, 0, 63, 59, x - 20, 0, 130, 100);
        ctx.fillStyle = mayleneCenter;
        ctx.fill();
        ctx.closePath();
    }

}
// 
function draw() {
    title.play();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(canvasBack, 0, 0, canvas.width, canvas.height)
    drawBall();
    drawPaddle();
    drawPaddle2();
    document.querySelector("body > h1").innerText = `${score} is blocked.`

    if (x + dx > canvas.width - ballRadius || x + dx < 0) {
        dx = -dx;
    }
    if (y + dy < paddleHeight) {
        boop.play();
        dy = -dy;
    }
    else if (y + dy > canvas.height - paddleHeight) {
        if (x > paddleX - 30 && x < paddleX + 10 + 75) {
            dx++;
            dy++;
            score++;
            console.log(score)
            dy = -dy;
            boop.play()

        }
        else {
            lose.play();
            clearInterval(interval); // Needed for Chrome to end game
            document.location.reload();
        }
    }

    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 8;
    }
    else if (leftPressed && paddleX > 0) {
        paddleX -= 8;
    }

    x += dx;
    y += dy;
}
setInterval(draw, 20)
document.querySelector("button:nth-child(2)").addEventListener("click", () => interval = setInterval(draw, 15));
document.querySelector("button:nth-child(3)").addEventListener("click", () => interval = setInterval(draw, 10));