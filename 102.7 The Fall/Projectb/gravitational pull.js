var myGamePiece;

function startGame() {
    myGameArea.start();
    myGamePiece = new component(29, "red", 0,0);
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1891;
        this.canvas.height = 901;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 85);
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
    }, 
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
var bw = 1900;
var bh = 920;
var p = 0;
var context = myGameArea.canvas.getContext('2d');

function printMousePos(event) {
	
	var mouseX = event.clientX
	var mouseY = event.clientY;
	var boxX = myGamePiece.x;
	var boxY = myGamePiece.y;
	if(mouseX < 300) myGamePiece.speedX = -30;
	if(mouseX > 1591) myGamePiece.speedX = 30;
	if(mouseX > 300 && mouseX < 1591 && mouseY < 450) myGamePiece.speedY = 30;
	if(mouseX > 300 && mouseX < 1591 && mouseY > 450) myGamePiece.speedY = -30;
	/*if(mouseX < boxX) myGamePiece.speedX = -30;
	if(mouseX > boxX) myGamePiece.speedX = 30;
	if(mouseY < boxY) myGamePiece.speedY = 30;
	if(mouseY > boxY) myGamePiece.speedY = -30;
	myGameArea.clear();
	drawBoard();
	*/
	myGamePiece.newPos();
	myGamePiece.update();
	
	//document.body.textContent = "clientX: " + event.clientX + " - clientY: " + event.clientY;
}

document.addEventListener("click", printMousePos);


function drawBoard(){
	/*for (var x = 0; x <= bw; x += 30) {
	    context.moveTo(0.5 + x + p, p);
	    context.lineTo(0.5 + x + p, bh + p);
	}

	for (var x = 0; x <= bh; x += 30) {
	    context.moveTo(p, 0.5 + x + p);
	    context.lineTo(bw + p, 0.5 + x + p);
	}
	context.strokeStyle = "black";
	context.stroke();
	*/
	
}
function component(size, color, x, y) {
    this.gamearea = myGameArea;
    this.width = size;
    this.height = size;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y -= this.speedY;
		if(this.x <= 0) this.x = 1;
		if(this.x >= (myGameArea.canvas.width - this.width)) this.x = myGameArea.canvas.width - this.width - 1;
		if(this.y <= 0) this.y = 1;
		if(this.y >= (myGameArea.canvas.height - this.height)) this.y = myGameArea.canvas.height - this.height -1;
    }
}

function drawWall(x,y){
	x += 1;
	y += 1;
	size = 29;
	ctx = myGameArea.context;
	ctx.fillStyle = "black";
	ctx.fillRect(x,y,size,size)
}

function coord(){
	console.log("Top Left: " + myGamePiece.x + "," + myGamePiece.y);
	console.log("Top Right: " + (myGamePiece.x + myGamePiece.width) + "," + myGamePiece.y);
	console.log("Bottom Left:" + myGamePiece.x + "," + (myGamePiece.y + myGamePiece.height));
	console.log("Bottom Right: " + (myGamePiece.x + myGamePiece.width) + "," + (myGamePiece.y + myGamePiece.height));
}

function updateGameArea() {
    myGameArea.clear();
	drawWall(510,30)
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;    
    if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.speedX = -30; }
    if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.speedX = 30; }
    if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece.speedY= 30; }
    if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speedY= -30; }
    myGamePiece.newPos();    
    myGamePiece.update();
}