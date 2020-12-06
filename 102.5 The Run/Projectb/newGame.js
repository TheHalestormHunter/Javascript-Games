var player;
var object;
var info = 1;
var walls = [];
var score;
var firstPress = false;
var speedness = .01;
var key = [];
var colorArray = ['indigo','chartreuse','aqua','fuchsia','forestgreen','darkorange', 'blueviolet','mediumseagreen','maroon' ];
var scoreArray = ['white','black','black','white','white','black','white','black','white'];
var firstPress = false;
var startImage = new Image();
var colorChoice = Math.floor(Math.random()*colorArray.length);
var fLeft = Math.floor(Math.random()*2); if(fLeft == 0) fallLeft = true; else fallLeft = false;

startImage.src = "player.png"


function startGame(){
	startingScreen();
	window.addEventListener('keydown', function (e) {
	if(!firstPress && e.key.includes("Arrow") == true){
		firstPress = true;
		game.start();
	}
	})
	
	player = new component(30,"darkorange", 135,230);
	wall = new component(30,"deepskyblue", 1001, 501);
	score = new component("20px",scoreArray[colorChoice], 200, 40, "text","Consolas");
}

var game = {
	canvas : document.getElementById("canvas"),
	start : function(){
		this.canvas.width = 300;
		this.canvas.height = 500;
		//this.canvas.style.background = "conic-gradient(red,yellow,lime,blue,magenta,red)";
		this.canvas.style.background = colorArray[colorChoice];
		this.context = game.canvas.getContext('2d');
		this.frameNo = 0;
		this.interval = setInterval(updateGame, 20);
		window.addEventListener('keydown', function (e) {
            game.key = e.key;
        })
        window.addEventListener('keyup', function (e) {
            game.key = false;
			game.double = true;
			var timer = setTimeout(function() {game.double = false},500)
        })
		this.scoreDelay = setInterval(function(){
			player.score++;
			player.score = player.score.toString();
			while(player.score.length < 4) player.score = '0' + player.score;
		}, 1000);
	},
	clear : function(){
		 this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
	stop : function() {
        clearInterval(this.interval);
		clearInterval(this.scoreDelay)
    }
}

function everyinterval(n){
	if((game.frameNo / n) % 1 == 0){
		return true;
	}
	return false;
}

function component(size, color, x, y, type, font,grdColor){
	this.type = type;
	this.width = size;
	this.height = size;
	this.size = size;
	this.font = font;
	this.x = x;
	this.y = y;
	this.speedX = 0;
	this.speedY = 0;
	this.gravity = 0.5;
	this.gravitySpeed = 0;
	this.thickness = 1;
	this.color = color;
	this.grdColor = grdColor;
	this.score = "0000";
	this.scoreX;
	this.bottom = false;
	this.update = function() {
        ctx = game.context;
		if(this.type == "text"){
			ctx.font = this.size + " " + this.font;
			ctx.fillStyle = color;
			ctx.fillText(this.text, this.x, this,y);
		} else {
			drawBorder(this.x, this.y, this.width, this.height, this.thickness);
			
			var grd = ctx.createLinearGradient(0, 0, 0, game.canvas.height);
			grd.addColorStop(0,"deepskyblue");
			grd.addColorStop(.2,"blue");
			grd.addColorStop(.4,"lime")
			grd.addColorStop(.6,"yellow");
			grd.addColorStop(.8,"red")
			grd.addColorStop(1,"crimson");
			ctx.fillStyle = grd;
	        ctx.fillRect(this.x, this.y, this.width, this.height);
		
			function drawBorder(xPos, yPos, width, height, thick){
				ctx.fillStyle='#000';
				ctx.fillRect(xPos - (thick), yPos - (thick), width + (thick * 2), height + (thick * 2));
			}
		}
    };
	this.newPos = function(){
		this.gravitySpeed += this.gravity;
		this.x += this.speedX;
        this.y -= this.speedY - this.gravitySpeed;
		if(this.x <= 0) this.x = 1;
		if(this.x >= (game.canvas.width - this.width)) this.x = game.canvas.width - this.width - 1;
		if(this.y <= 0) {
			this.gravitySpeed = 0;
			this.y = 1;
		}
		if(this.y >= (game.canvas.height - this.height -1)){
			this.gravitySpeed = 0;
			this.y = game.canvas.height - this.height - 1;
			this.bottom = true;
		} else this.bottom = false;
    };
	this.fall = function(){
		this.gravitySpeed += this.gravity;
		this.x += this.speedX;
		this.y -= this.speedY - this.gravitySpeed;
	};
	this.samePos = function(otherObj){
		var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherObj.x;
        var otherright = otherObj.x + (otherObj.width);
        var othertop = otherObj.y;
        var otherbottom = otherObj.y + (otherObj.height);
		if(myright <= otherleft){
			this.x = otherObj.x - this.width;
		}
		this.gravity = 0;
		
	}
	this.crashesWith = function(otherObj){
		var myleft = this.x - 2;
        var myright = this.x + (this.width) + 2;
        var mytop = this.y - 2;
        var mybottom = this.y + (this.height) + 2;
        var otherleft = otherObj.x;
        var otherright = otherObj.x + (otherObj.width);
        var othertop = otherObj.y;
        var otherbottom = otherObj.y + (otherObj.height);
        var crash = true;
        if ((mybottom < othertop) ||
               (mytop > otherbottom) ||
               (myright < otherleft) ||
               (myleft > otherright)) {
           crash = false;
        }
        return crash;
	};
}

function jump(){
	player.gravity = -12;
	updateParts();
}
function fall(){
	player.gravity = .5;
	for(i=0; i <walls.length; i++){
		walls[i].gravity = speedness
	}
	updateParts();
}

function left(){
	double()
	player.speedX = -1 * (movement);
}
function right(){
	double()
	player.speedX = movement;
}

function double(){
	if(game.double){
		movement = 10;
	} else {
		movement = 4;
	}
}

function displayInfo(){
	if(info == 1){
		otherObj = walls[1];
		var myleft = player.x;
        var myright = player.x + (player.width);
        var mytop = player.y;
        var mybottom = player.y + (player.height);
        var otherleft = otherObj.x;
        var otherright = otherObj.x + (otherObj.width);
        var othertop = otherObj.y;
        var otherbottom = otherObj.y + (otherObj.height);
		console.log("my bottom " + mybottom);
		console.log("other top " + othertop);
		console.log("my right " + myright);
		console.log("other left " + otherleft);
		console.log("my left " + myleft);
		console.log("other right " + otherright);
	}
}

function startingScreen(){
	game.canvas.height = 500;
	game.canvas.width = 300;
	can = game.canvas.getContext('2d');
	// player
	can.drawImage(startImage,0,0,32,32,135,230,32,32)
	
	// text
	
}

function updateParts(){
	for(i=0; i< walls.length; i++){
		if (player.crashesWith(wall)) {
			displayInfo();
			info = 0;
			player.samePos(wall);
			player.update()
		}
	}
	player.newPos();
	player.update();
	
}

function jared(){
	
	switch(parseInt(player.score)){
		case 5: console.log("magic"); break;
		case 10: console.log("beans"); break;
		default: console.log("regular");
	}
}

function showScore(){
	score.text = "Score: ";
	scorePlace = 10;
	ctx = game.context;
	ctx.font = score.size + " " + score.font;
	ctx.fillStyle = score.color;
	ctx.fillText(score.text, score.x, score.y);
	
	ctx.font = score.size + " " + score.font;
	ctx.fillStyle = score.color;
	ctx.fillText(player.score, (score.x + scorePlace), score.y + 20)
}

function updateGame(){
	var x, y;
	for(i=0; i < walls.length; i++){
		if(player.crashesWith(walls[i])){
			game.stop();
			return;
		}
	}
		game.clear();
		game.frameNo += 1;
		player.speedX = 0;
	    player.speedY = 0;
	if (game.frameNo == 1 || everyinterval(20)) {
		min = player.x - 100;
        xMax = player.x + player.width + 200;
        yMax = game.canvas.height;
		if(xMax > game.canvas.width){
			xMax = game.canvas.width - player.width;
		}
		if(min < 0){
			min = 0;
		}
		x = Math.floor(Math.random()*(xMax-min)+min);
		if(game.frameNo > 500){
			if(x >= 103 && x <= 167){
				if(!fallLeft){
					x = 102.9;
					fallLeft = true;
				} else {
					x = 167.1;
					fallLeft = false;
				}
			}
	}
        walls.push(new component(wall.size, wall.color, x, -50));
    }
	if(everyinterval(500)){ // 50 = 1 second
		speedness = speedness + .01
		colorChoice = Math.floor(Math.random()*colorArray.length);
		game.canvas.style.background = colorArray[colorChoice];
		score.color = scoreArray[colorChoice];		
	}
    for (i = 0; i < walls.length; i += 1) {
        //walls[i].y -= .5;
		walls[i].fall();
        walls[i].update();
    }
	showScore();
	    if (game.key == "ArrowLeft") {left(); key.push("left"); key.length = 2;} //left
	    if (game.key == "ArrowRight") {right(); key.push("right")} //right
	    if (game.key == "ArrowUp" && player.bottom == true) { jump() } //up
		else{
			fall() // if not touching ground fall. prevents flying.
		}
	    if (game.key == "ArrowDown") {player.speedY = -3; }//down
}