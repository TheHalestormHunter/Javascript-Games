var player;
var floors = [];
var coins = [];


function startGame(){
 // item = new component(size, color, x, y, type)
	player = new component(30,'crimson',10,100,'player');
	//player2 = new component(30,'crimson',player.x + (370),player.y,'player2');
	//floors.push(new component(50,'green',120,350,'floor'))
	//floors.push(new component(400,'black',0,494.5,'floor'))
	floors.push(new component(50,'blue',10,150,'floor'));
	coins.push(new component(10,'gold', 100, -20, 'coin'));
	//coins.push(new component(10,'gold', 100, -40, 'coin'));
	score = new component('Score: ','black',170,40,'text');
	level = new component('Level: ','black',140,20,'text');
	game.start();
}

var floorMax = 50;
var floorMin = 20;
var floorX;
var playerOffset = 2;

var game = {
	canvas : document.getElementById('canvas'),
	start : function(){
		this.canvas.height = 494;
		this.canvas.width = 370;
		this.context = game.canvas.getContext('2d');
		this.frameNo = 0;
		//this.go = updateGame(); // draw once
		this.interval = setInterval(updateGame,20); // draw every 20ms
		window.addEventListener('keydown',function(e){
			game.keys = (game.keys || []);
			game.keys[e.keyCode] = (e.type == 'keydown');
		})
		window.addEventListener('keyup', function(e){
			game.keys[e.keyCode] = (e.type == 'keydown');
		})
		//this.timer = setInterval(function(){
		//	player.level++;
		//	player.level = player.level.toString();
		//	while(player.level.length < 3) player.level = '0' + player.level;
		//},10000)
	},
	clear : function(){
		this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
	},
	stop : function(){
		clearInterval(this.interval);
	}
}

function component(size, color, x, y, type){
	this.size = size;
	this.width = size;
	this.height = size;
	this.x = x;
	this.y = y;
	this.newX;
	this.newY;
	this.speedX = 0;
	this.speedY = 0;
	this.gravity = 0.05;
	this.gravitySpeed = 0;
	this.speedMod = 1;
	this.type = type;
	this.bottom = false;
	this.score = '00';
	this.level = '000';
	this.color = color;
	this.thick = 1; // thickness of border
	this.del = false;
	this.update = function(){
		ctx = game.context;
		if(this.type == 'player'){
			drawBorder(this.x, this.y, this.width, this.height, this.thick);
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x, this.y, this.width, this.height);
			
			function drawBorder(xPos, yPos, width, height, thick){
				ctx.fillStyle = '#000';
				ctx.fillRect(xPos - (thick), yPos - (thick), width + (thick * 2), height + (thick * 2));
			}
		}
		if(this.type == 'floor'){
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x, this.y, this.width, 3);
		}
		if(this.type == 'coin'){
			if(this.del) this.x = -20;
			drawCircle(this.x,this.y,this.size, this.thick);
			ctx.beginPath();
			ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
			ctx.stroke();
			ctx.fillStyle = this.color;
			ctx.fill();
			
			ctx.font = '20px Consolas';
			ctx.fillStyle = '#000'; //black
			ctx.fillText('c', this.x - 6, this.y + 5);
			
			function drawCircle(xPos, yPos, size, thick){
				ctx.fillStyle = '#000';
				ctx.beginPath();
				ctx.arc(xPos, yPos, size + thick, 0,2*Math.PI);
				ctx.stroke();
				ctx.fill();
			}
		}
		if(this.type == 'text'){
			ctx.font = '20px Consolas';
			ctx.fillStyle = this.color;
			ctx.fillText(this.size, this.x, this.y)
		}
	}
	this.newPos = function() {
		if(this.type == 'player'){
			this.gravitySpeed += this.gravity;
			this.newX = this.speedX * this.speedMod;
			this.newY = (this.speedY * this.speedMod) + this.gravitySpeed;
		//(this.type == 'player'){
			/*newX = this.speedX * this.speedMod;
			newY = (this.speedY * this.speedMod) + this.gravitySpeed;
			for(i=0; i<floors.length; i++){
				// collision with floor stuff. GOOD LUCK FOOL
				floorTop = floors[i].y;
				floorLeft = floors[i].x;
				floorRight = floors[i].x + floors[i].size;
				floorBottom = floors[i].y + 3;
				
				playerTop = player.y;
				playerLeft = player.x;
				playerRight = player.x + player.width;
				playerBottom = player.y + player.height;
				playerWidth = player.width;
				playerHeight = player.height;
				
				//console.log((playerBottom + newY) >= floorTop)
				//console.log((playerLeft + newX + playerWidth) <= floorLeft)
				//console.log((playerRight + newX - playerWidth) >= floorRight)
			if(		
					((playerBottom + newY) >= floorTop - 1) &&
					((playerLeft + newX + playerWidth) >= floorLeft) &&
					((playerRight + newX - playerWidth) <= floorRight) &&
					((playerTop + playerHeight) < floorBottom -1)
				) {
					this.gravitySpeed = 0;
					this.y = floorTop - playerHeight - 1;
					this.bottom = true;
					console.log(this.bottom)
				}
				else if(this.y + newY > game.canvas.height - playerHeight - 1){ // hit floor
					this.gravitySpeed = 0;
					this.y = game.canvas.height - playerHeight - 1;
					this.bottom = true;
				}
				else {
					this.gravity = 0.05
					this.y += this.speedY * this.speedMod + this.gravitySpeed; //if not colliding with floor
					this.bottom = false;
				}
			}
			this.x += this.speedX * this.speedMod; // x movement not effected
		}
		else { */
		
			this.x += this.speedX * this.speedMod; // movement for non players
			this.y += (this.speedY * this.speedMod * 2) + this.gravitySpeed;
			this.hitFloor();
			this.hitWall();
		}
		else if(this.type == 'floor'){
			this.gravitySpeed += this.gravity;
			this.y += this.speedY + this.gravitySpeed;
		}
		else if(this.type == 'coin'){
			this.gravitySpeed += this.gravity;
			this.newY = this.speedY + this.gravitySpeed;
			this.newX = this.speedX;
			this.x += this.speedX;
			this.y += this.speedY + this.gravitySpeed;
		}
	}
	this.hitWall = function(){
		var top = 1;
		var left = 1;
		var right = game.canvas.width - this.width - 1;
		/*if(this.y + this.newY <= top){
			this.y = top;
			this.gravitySpeed = 0;
		}		
		else if(this.x + this.newX < left){
			this.x = left;
			this.wall = true;
			//this.x += this.speedX * -1 * this.speedMod;
			this.gravitySpeed = .005;
		}
		else if(this.x + this.newX > right){
			this.x = right;
			this.wall = true;
			//this.x += this.speedX * -1 * this.speedMod;
			this.gravitySpeed = .005;
		*///}
		//else 
		this.wall = false;
		if(this.x > game.canvas.width){
			this.x = 0 - this.width;
		}
		if(this.x + this.width < 0){
			this.x = game.canvas.width;
		}
		
	}
	this.hitFloor = function(){
		for(i=0; i<floors.length; i++){
			if((this.y + this.height + this.newY > floors[i].y -1) &&
			   (this.x + this.newX + this.width >= floors[i].x) && 
			   (this.x + this.newX < floors[i].x + floors[i].size) && 
			   (this.y + this.height < floors[i].y + 3)){
				this.gravitySpeed = 0;
				this.bottom = true;
				this.y = floors[i].y - this.height + .5;
			}
		}
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

function everyinterval(n){ // every n frames return true
	if((game.frameNo / n) % 1 == 0){
		return true;
	}
	return false;
}

function jumpStop(){
	var timeout = setTimeout(function(){
		player.bottom = false;
	},1);
}

function showScore(){
	level.text = 'Level: ';
	levelPlace = 70;
	score.text = 'x';
	scorePlace = 30;
	ctx = game.context;
	ctx.font = level.size + ' ' + level.font;
	ctx.fillStyle = level.color;
	ctx.fillText(level.text, level.x, level.y);
	player.level = player.level.toString();
	while(player.level.length < 3) player.level = '0' + player.level;
	ctx.fillText(player.level, (level.x + levelPlace), level.y);
	
	player.score = player.score.toString();
	while(player.score.length < 2) player.score = '0' + player.score;
	
	ctx.fillText(player.score, (score.x + scorePlace), score.y + 6);
	ctx.fillText(score.text,score.x + 15,score.y + 5)
	
	drawCircle(score.x,score.y,10, 1.5);
	ctx.beginPath();
	ctx.arc(score.x,score.y,10,0,2*Math.PI);
	ctx.stroke();
	ctx.fillStyle = 'gold';
	ctx.fill();
	
	ctx.font = '20px Consolas'
	ctx.fillStyle = '#000' // black
	ctx.fillText('c', score.x - 6, score.y + 5);
	
	function drawCircle(xPos, yPos, size, thick){
		ctx.fillStyle = '#000';
		ctx.beginPath();
		ctx.arc(xPos, yPos, size + thick, 0,2*Math.PI);
		ctx.stroke();
		ctx.fill();
	}
}

function updateGame(){
	if(player.y > game.canvas.height + 50){
		console.log(player.x)
		game.stop();
		return;
	}
	for(i=0; i<coins.length; i++){
		if(player.crashesWith(coins[i])){
			coins[i].del = true;
			player.score++;
		}
	}
	game.clear();
	
	game.frameNo += 1;
	player.speedX = 0; // stops movement every frame
	player.speedY = 0; // prevents movement after keypress
	
	
	if(game.frameNo == 1 || everyinterval(90)){
		var length = Math.floor(Math.random()*(floorMax-floorMin)+floorMin);
		var floorX = Math.floor(Math.random()*(game.canvas.width - length));
		floors.push(new component(length,'black',floorX,0,'floor'));
		
	}
	/*
	 Keyboard Movement
	 16 - Shift   17 - Ctrl   37 - Right Arrow   39 - Left Arrow
	 39 - Up Arrow   40 - Down Arrow
	*/
	if(game.frameNo == 1 || everyinterval(500)){
		player.level++;
		player.speedMod *= .5
	}
	
	
	if(game.keys && game.keys[16]){player.speedMod = 2;} // shift Speed Up
	else if(game.keys && game.keys[17]){player.speedMod = .5;} //Ctrl slow down
	else player.speedMod = 1;
	if(game.keys && game.keys[37]){ // left
		player.speedX = -2;
	}
	if(game.keys && game.keys[39]){ // right
			player.speedX = 2;
	}
	if(game.keys && game.keys[38] && (player.bottom || player.wall)){ // up
		jumpStop();
		player.gravity = -11;
		//player.speedY -= 4;
	}
	else {
		(player.gravity = 0.4)
	}
	if(game.keys && game.keys[40]){ // down?
		player.y = player.y + 4;
		player.bottom = false;
	} 
	

	
	for(i=0; i<floors.length; i++){
		if(player.level == 1) floors[i].y += 1;
		else floors[i].y += .5 * (parseInt(player.level));
		floors[i].gravity = 0;
		floors[i].newPos();
		floors[i].update();
	  	if(floors[i].y > 370){
			console.log(i)
	  		if(i%10 == 0){
				//player.level++;
			}
		}
	}
	for(i=0; i<coins.length; i++){
		coins[i].gravity = .1;
		coins[i].newPos();
		coins[i].update();
	}
	
	player.newPos();
	player.update();
	
	showScore();
	
}