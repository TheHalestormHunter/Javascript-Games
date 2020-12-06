var player;
var myWalls = [];
var myWall;

document.addEventListener("click", mouseMove);

function startGame() {
    game.start();
    player = new component(19, "red", 0,0);
	myWall = new component(19,"black",241,1);
}

var game = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1001;
        this.canvas.height = 501;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 85);
        window.addEventListener('keydown', function (e) {
            game.keys = (game.keys || []);
            game.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            game.keys[e.keyCode] = (e.type == "keydown");
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
var context = game.canvas.getContext('2d');

function mouseMove(event) {	
	var mouseX = event.clientX
	var mouseY = event.clientY;
	var boxX = player.x;
	var boxY = player.y;
	if(mouseX < 250) player.speedX = -20;
	if(mouseX > 750) player.speedX = 20;
	if(mouseX > 250 && mouseX < 750 && mouseY < 250) player.speedY = 20;
	if(mouseX > 250 && mouseX < 750 && mouseY > 250) player.speedY = -20;
	/*if(mouseX < boxX) player.speedX = -30;
	if(mouseX > boxX) player.speedX = 30;
	if(mouseY < boxY) player.speedY = 30;
	if(mouseY > boxY) player.speedY = -30;
	game.clear();
	drawBoard();
	*/
	game.clear();
	for(i=0; i<myWalls.length; i++){
			myWalls[i].update()
	}
	myWall.update();
	player.newPos();
	player.update();
	
	//document.body.textContent = "clientX: " + event.clientX + " - clientY: " + event.clientY;
}

function draw(){
	row = 0;
	col = 0;
	rowWidth = 50;
	rowSize = 19;
	colSize = 19;
	var x;
	var y;
	for(i=0; i<map.length; i++){
		col = i % rowWidth;
		row = Math.floor(i/50)
		x = (col * colSize) + col;
		y = (row * rowSize) + row;
		switch (map[i]) {
			case 1:
				myWalls.push(new component(20,"black",x,y));
				break;
			case 2:
				player.positon = i
				break;
			default:
				break;
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
    this.gamearea = game;
    this.width = size;
    this.height = size;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;
	this.position = 0;
    this.update = function() {
        ctx = game.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    this.newPos = function() {
        this.x += this.speedX;
        this.y -= this.speedY;
		this.newX += this.speedX;
		this.newY -= this.speedY;
		
		/*
		if(this.x <= 0) this.x = 1;
		if(this.x >= (game.canvas.width - this.width)) this.x = game.canvas.width - this.width - 1;
		if(this.y <= 0) this.y = 1;
		if(this.y >= (game.canvas.height - this.height)) this.y = game.canvas.height - this.height -1;
		*/
    };
	this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) ||
               (mytop > otherbottom) ||
               (myright < otherleft) ||
               (myleft > otherright)) {
           crash = false;
        }
        return crash;
    };
	this.stop = function(){
		this.x = this.x;
		this.y = this.y;
	}
}

function wall(x,y){
	this.x = (x + 1);
	this.y = (y + 1);
	this.width = player.width;
	this.height = player.height;
	this.update = function(){
		ctx = game.context;
		ctx.fillStyle = "black";
		ctx.fillRect(this.x,this.y,this.width,this.height)
	}
}

function coord(){
	console.log("Top Left: " + player.x + "," + player.y);
	console.log("Top Right: " + (player.x + player.width) + "," + player.y);
	console.log("Bottom Left:" + player.x + "," + (player.y + player.height));
	console.log("Bottom Right: " + (player.x + player.width) + "," + (player.y + player.height));
	for(i=0; i<myWalls.length; i++){
		if(map[i]== 1){
		console.log("Wall " + i);
		console.log(myWalls[i].x + "," + myWalls[i].y);
		console.log((myWalls[i].x + myWalls[i].width) + "," + myWalls[i].y);
		console.log(myWalls[i].x + "," + (myWalls[i].y + myWalls[i].height));
		console.log((myWalls[i].x + myWalls[i].width) + "," + (myWalls[i].y + myWalls[i].height));
		}
	}
}

function updateGameArea() {
	    game.clear();
		draw();
		//drawBoard();
		//drawWall(240,0)
	    player.speedX = 0;
	    player.speedY = 0;
		for(i=0; i<myWalls.length; i++){
			myWalls[i].update()
		}
		myWall.update();
	    player.newPos();    
	    player.update();
}