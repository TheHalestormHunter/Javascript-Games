var myGamePiece;
var myWalls = [];
var myWall;

document.addEventListener("click", mouseMove);

function startGame() {
    myGameArea.start();
    myGamePiece = new component(19, "red", 0,0);
	myWall = new component(19,"black",161,21);
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1001;
        this.canvas.height = 501;
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
    }, stop : function() {
        clearInterval(this.interval);
    }
}
var bw = 1001;
var bh = 500;
var p = 0;
var context = myGameArea.canvas.getContext('2d');

function mouseMove(event) {
	
	var mouseX = event.clientX
	var mouseY = event.clientY;
	var boxX = myGamePiece.x;
	var boxY = myGamePiece.y;
	if(mouseX < 250) myGamePiece.speedX = -20;
	if(mouseX > 750 && mouseX < 1000) myGamePiece.speedX = 20;
	if(mouseX > 250 && mouseX < 750 && mouseY < 250) myGamePiece.speedY = 20;
	if(mouseX > 250 && mouseX < 750 && mouseY > 250) myGamePiece.speedY = -20;
	/*if(mouseX < boxX) myGamePiece.speedX = -30;
	if(mouseX > boxX) myGamePiece.speedX = 30;
	if(mouseY < boxY) myGamePiece.speedY = 30;
	if(mouseY > boxY) myGamePiece.speedY = -30;
	myGameArea.clear();
	drawBoard();
	
	if (myGamePiece.crashWithR(myWall)) {
		if(myGamePiece.speedX > 0) myGamePiece.speedX = 0;
    }
	myGameArea.clear();
	for(i=0; i<myWalls.length; i++){
			myWalls[i].update()
	}
	myWall.update();
	myGamePiece.newPos();
	myGamePiece.update();
	*/
	updater();
	//document.body.textContent = "clientX: " + event.clientX + " - clientY: " + event.clientY;
}

function updater(){
	//if (myGamePiece.crashWithR(myWall)) {
		//myGamePiece.speedX = 0;
    //}
	myGameArea.clear();
	for(i=0; i<myWalls.length; i++){
			myWalls[i].update()
	}
	myWall.update();
	myGamePiece.newPos();
	myGamePiece.update();
}

function draw(){
	row = 0;
	col = 0;
	rowWidth = 50;
	rowSize = 19;
	colSize = 19;
	color = "";
	var x;
	var y;
	for(i=0; i<map.length; i++){
		if(map[i] != 0){
			col = i % rowWidth;
			row = Math.floor(i/50)
			x = (col * colSize) + col;
			y = (row * rowSize) + row;
			if(i == 1) color = "green";
			if(i == 2) color = "red";
			if(i == 3) color = "black";
			myWalls.push(new component(20,color,x,y))
		}
	}
}


function drawBoard(){
	for (var x = 0; x <= bw; x += 20) {
	    context.moveTo(0.5 + x + p, p);
	    context.lineTo(0.5 + x + p, bh + p);
	}

	for (var x = 0; x <= bh; x += 20) {
	    context.moveTo(p, 0.5 + x + p);
	    context.lineTo(bw + p, 0.5 + x + p);
	}
	context.strokeStyle = "black";
	context.stroke();
	
	
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
    };
    this.newPos = function() {
        this.x += this.speedX;
        this.y -= this.speedY;
		if(this.x <= 0) this.x = 1;
		if(this.x >= (myGameArea.canvas.width - this.width)) this.x = myGameArea.canvas.width - this.width - 1;
		if(this.y <= 0) this.y = 1;
		if(this.y >= (myGameArea.canvas.height - this.height)) this.y = myGameArea.canvas.height - this.height -1;
    };
	this.crashWithR = function(other) {
		var crash = true;
		if ((this.x + 4) <= other.x + other.width &&
	        (this.x + this.width + 4) > other.x &&
	        (this.y + 4) < other.y + other.height &&
	        (this.height + this.y + 4) > other.y) {
	        // collision detected!
				crash = false;
	        console.log("green");
	    } else {
	        // no collision
	        console.log("blue"); 
	    }
		return crash
    };
}

function wall(x,y){
	this.x = (x + 1);
	this.y = (y + 1);
	this.width = myGamePiece.width;
	this.height = myGamePiece.height;
	this.update = function(){
		ctx = myGameArea.context;
		ctx.fillStyle = "red";
		ctx.fillRect(this.x,this.y,this.width,this.height)
	}
}

function coord(){
	console.log("Top Left: " + myGamePiece.x + "," + myGamePiece.y);
	console.log("Top Right: " + (myGamePiece.x + myGamePiece.width) + "," + myGamePiece.y);
	console.log("Bottom Left:" + myGamePiece.x + "," + (myGamePiece.y + myGamePiece.height));
	console.log("Bottom Right: " + (myGamePiece.x + myGamePiece.width) + "," + (myGamePiece.y + myGamePiece.height));
	//for(i=0; i<myWalls.length; i++){
		//if(map[i]== 1){
		console.log("Wall ");
		console.log(myWall.x + "," + myWall.y);
		console.log((myWall.x + myWall.width) + "," + myWall.y);
		console.log(myWall.x + "," + (myWall.y + myWall.height));
		console.log((myWall.x + myWall.width) + "," + (myWall.y + myWall.height));
	//	}
//	}
}

function updateGameArea() {
	    myGameArea.clear();
		draw();
		//drawBoard();
		//drawWall(240,0)
	    myGamePiece.speedX = 0;
	    myGamePiece.speedY = 0;
		for(i=0; i<myWalls.length; i++){
			myWalls[i].update()
		}
		myWall.update();
	    myGamePiece.newPos();    
	    myGamePiece.update();
}