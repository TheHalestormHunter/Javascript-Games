var player;
var floors = [];
var enemy;

function startGame(){
 // item = new component(size, color, x, y, type)
	player = new component(30,'crimson',100,100,'player');
	enemy = new component(30,'blue',100,100,'enemy');
	game.start();
}

var game = {
	canvas : document.getElementById('canvas'),
	start : function(){
		this.canvas.height = 300;
		this.canvas.width = 300;
		this.context = game.canvas.getContext('2d');
		//this.go = updateGame(); // draw once
		this.interval = setInterval(updateGame,20); // draw every 20ms
		window.addEventListener('keydown',function(e){
			game.keys = (game.keys || []);
			game.keys[e.keyCode] = (e.type == 'keydown');
		})
		window.addEventListener('keyup', function(e){
			game.keys[e.keyCode] = (e.type == 'keydown');
		})
	},
	clear : function(){
		this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
	}
}

function component(size, color, x, y, type){
	this.size = size;
	this.width = size;
	this.height = size;
	this.x = x;
	this.y = y;
	this.speedX = 0;
	this.speedY = 0;
	this.speedMod = 1;
	this.type = type;
	this.color = color;
	this.thick = 1; // thickness of border
	this.update = function(){
		ctx = game.context;
		if(this.type == 'player'){
			drawBorder(this.x, this.y, this.width, this.height, this.thick);
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x, this.y, this.width, this.height);
		}
		if(this.type == 'enemy'){
			drawBorder(this.x, this.y, this.width, this.height, this.thick);
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x, this.y, this.width, this.height);
			}
			
			function drawBorder(xPos, yPos, width, height, thick){
				ctx.fillStyle = '#000';
				ctx.fillRect(xPos - (thick), yPos - (thick), width + (thick * 2), height + (thick * 2));
			
		
	}
	this.newPos = function() {
		this.x += this.speedX * this.speedMod;
		this.y += this.speedY * this.speedMod;
	}
}

function updateGame(){
	game.clear();
	player.speedX = 0;
	player.speedY = 0;
	// 16 - Shift   17 - Ctrl   37 - Right Arrow   39 - Left Arrow
	// 39 - Up Arrow   40 - Down Arrow
	if(game.keys && game.keys[16]){player.speedMod = 2;}
	else if(game.keys && game.keys[17]){player.speedMod = .5;}
	else player.speedMod = 1;
	if(game.keys && game.keys[37]){player.speedX = -1;}
	if(game.keys && game.keys[39]){player.speedX = 1;}
	if(game.keys && game.keys[38]){player.speedY = -1;}
	if(game.keys && game.keys[40]){player.speedY = 1;}
	player.newPos();
	player.update();
	enemy.newPos();
	enemy.update();
}