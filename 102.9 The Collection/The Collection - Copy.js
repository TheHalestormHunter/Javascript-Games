var highScore;

if(typeof(Storage) != null) { //Storage
  Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
  }
  Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
  }
  
  highScore = localStorage.getItem('highScore');
  if(highScore == null) {
    highScore = 0;
    localStorage.setItem('highScore',0);
  }
  highCoins = localStorage.getItem('highCoins');
  if(highCoins == null){
  	highCoins = 0;
	localStorage.setItem('highCoins',0);
  }

} else {
	highScore = 0;
	highCoins = 0;
}

var player;
var info = 1;
var blocks = [];
var coins = [];
var firstPress = false;
var blockSpeed = .01;
var coinSpeed = .01;
var key = [];
var colorArray = ['indigo','chartreuse','aqua','fuchsia','forestgreen','darkorange', 'blueviolet','mediumseagreen','maroon','antiquewhite','aquamarine','cadetblue','chocolate','coral','crimson','darkcyan'];
var rgbColor = [[75,0,130],[127,255,0],[0,255,255],[255,0,255],[34,139,34],[255,140,0],[138,43,226],[60,179,113],[128,0,0]]
var timerArray = ['white','black','black','white','white','black','white','black','white','black','black','white','white','white','white'];
var firstPress = false;
var startImage = new Image();
var colorChoice = Math.floor(Math.random()*colorArray.length);
var fLeft = Math.floor(Math.random()*2); if(fLeft == 0) fallLeft = true; else fallLeft = false;
var fRight = Math.floor(Math.random()*2); if(fRight == 0) fallRight = true; else fallRight = false;
var flashing = false;
var scoreP;
var timer;
var middleTimer = 0;
var totalCoins = 0;
var x = 0;
var show = false;

startImage.src = 'player.png'


function startGame(){
	startingScreen();
	window.addEventListener('keydown', function (e) {
	if(!firstPress && e.key.includes('Arrow') == true){
		firstPress = true;
		game.start();
	}
	})
	// name = new component(size, color, x, y, type, font)
	//coin = new component(10,'gold', 100,200,'coin');
	player = new component(30,'rgba(255,255,255)', 136,231, 'player');
	//block = new component(30,'deepskyblue', 1001, 501);
	score = new component('20px',timerArray[colorChoice], 20, 25, 'text','Consolas');
	timer = new component('20px',timerArray[colorChoice], 230, 25, 'text','Consolas');
}

var game = {
	canvas : document.getElementById('canvas'),
	start : function(){
		this.canvas.width = 300;
		this.canvas.height = 500;
		//this.canvas.style.background = 'conic-gradient(red,yellow,lime,blue,magenta,red)';
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
		this.timerDelay = setInterval(function(){
			player.timer++;
			player.timer = player.timer.toString();
			while(player.timer.length < 4) player.timer = '0' + player.timer;
		}, 1000);
	},
	clear : function(){
		 this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
	stop : function() {
		newHighScore = player.timer;
		if(newHighScore > highScore) localStorage.setItem('highScore',newHighScore);
		newHighCoins = totalCoins;
		if(newHighCoins > highCoins) localStorage.setItem('highCoins',newHighCoins);
        clearInterval(this.interval);
		clearInterval(this.timerDelay);
		window.addEventListener('keydown', function (e) {
			if(e.key.includes('Up') == true){
				location.reload();
			}
		})
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
	this.thickness = 1.5;
	this.color = color;
	this.grdColor = grdColor;
	this.timer = '0000';
	this.score = '0';
	this.bottom = false;
	this.del = false;
	this.life = false;
	this.update = function() {
        ctx = game.context;
		if(this.type == 'text'){
			ctx.font = this.size + ' ' + this.font;
			ctx.fillStyle = color;
			ctx.fillText(this.text, this.x, this,y);
		} else if(this.type == 'coin'){
			if(this.del == true){
				this.x = -20;
			}
			drawCircle(this.x,this.y,this.size, this.thickness);
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
		} else if(this.type == 'block'){
			
			drawBorder(this.x, this.y, this.width, this.height, this.thickness);
			
			var grd = ctx.createLinearGradient(0, 0, 0, game.canvas.height);
			grd.addColorStop(0,'deepskyblue');
			grd.addColorStop(.2,'blue');
			grd.addColorStop(.4,'lime')
			grd.addColorStop(.6,'yellow');
			grd.addColorStop(.8,'red')
			grd.addColorStop(1,'crimson');
			ctx.fillStyle = grd;
	        ctx.fillRect(this.x, this.y, this.width, this.height);
			
			function drawBorder(xPos, yPos, width, height, thick){
				ctx.fillStyle = '#000'
				ctx.fillRect(xPos - (thick), yPos - (thick), width + (thick * 2), height + (thick * 2));
			}
			
		} else if(this.type == 'player'){
			drawBorder(this.x, this.y, this.width, this.height, this.thickness);
			
	        
			if(this.life == true) {
				ctx.fillStyle = 'gold'
				ctx.fillRect(this.x, this.y, this.width, this.height);
			}
			else {
				ctx.fillStyle = 'white';
				ctx.fillRect(this.x, this.y, this.width, this.height);
				drawFill(this.x,this.y,this.width,this.height);
				
			}
			function drawBorder(xPos, yPos, width, height, thick){
				ctx.fillStyle = '#000'
				ctx.fillRect(xPos - (thick), yPos - (thick), width + (thick * 2), height + (thick * 2));
			};
			function drawFill(xPos,yPos,width,height){
				ctx.fillStyle = 'gold'; // gold fills white box
				ctx.fillRect(xPos, (yPos + height), width, (-1 * ((player.score/100) * 30)));
				ctx.fillStyle = 'black'; // black bar on top of gold fill
				ctx.fillRect(xPos, ((yPos + height) + (-1 * ((player.score/100 * 30)))),width,(-1 * ((1/100) * 30)));
			};
			
		}
    };
	this.newPos = function(){
		/*if(this.type == 'coin'){
			this.gravitySpeed += this.gravity;
			this.x += this.speedX;
			this.y -= this.speedY - this.gravitySpeed;
		} else { */ 
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
	this.fill = function(){
		
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
	player.gravity = 0.5;
	for(i=0; i <blocks.length; i++){
		blocks[i].gravity = blockSpeed;
	}
	for(i=0; i <coins.length; i++){
		coins[i].gravity = coinSpeed;
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
		otherObj = blocks[1];
		var myleft = player.x;
        var myright = player.x + (player.width);
        var mytop = player.y;
        var mybottom = player.y + (player.height);
        var otherleft = otherObj.x;
        var otherright = otherObj.x + (otherObj.width);
        var othertop = otherObj.y;
        var otherbottom = otherObj.y + (otherObj.height);
		console.log('my bottom ' + mybottom);
		console.log('other top ' + othertop);
		console.log('my right ' + myright);
		console.log('other left ' + otherleft);
		console.log('my left ' + myleft);
		console.log('other right ' + otherright);
	}
}

function startingScreen(){
	game.canvas.height = 500;
	game.canvas.width = 300;
	can = game.canvas.getContext('2d');
	// player
	can.drawImage(startImage,0,0,32,32,135,230,32,32)
	
	// text
	can.font = '20px Consolas';
	header = {text: '102.9', text2: 'The Collection', x: 125, y: 100, color: 'white'}
	can.fillStyle = header.color;
	can.fillText(header.text, header.x, header.y);
	can.fillText(header.text2, (header.x - 55), (header.y + 20));
	byline = {text: 'A JTGB', text2: 'Creation', x: 115, y: 385, color: 'black'};
	can.fillStyle = byline.color;
	can.fillText(byline.text, byline.x, byline.y);
	can.fillText(byline.text2, (byline.x - 10), (byline.y + 20))
	can.fillText(('High Score: ' + highScore), (byline.x - 50), byline.y + 70);
	while(highCoins.length < 4) highCoins = '0' + highCoins;
	can.fillText(('Most Coins: ' + highCoins), (byline.x - 50), byline.y + 90);
	
}

function updateParts(){
	player.newPos();
	player.update();	
}

function extraLife(){
}

function showScore(){
	timer.text = 'Timer: ';
	timerPlace = 10;
	score.text = 'x';
	scorePlace = 30;
	ctx = game.context;
	ctx.font = timer.size + ' ' + timer.font;
	ctx.fillStyle = timer.color;
	ctx.fillText(timer.text, timer.x, timer.y);
	ctx.fillText(player.timer, (timer.x + timerPlace), timer.y + 20);
	
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

function minMax(){
	min = player.x - 100;
    xMax = player.x + player.width + 200;
	if(xMax > game.canvas.width){
		xMax = game.canvas.width - player.width;
	}
	if(min < 0){
		min = 0;
	}
}

function extraLife(){
	if(player.life){
		ctx = game.context;
		if(show){
		var delay = setInterval(function(){
			if(x != 20)	x = x + 1;
		},300)
		var extra = {text: '+1 Extra Life!', x: player.x, y: player.y, font: 'px Consolas'};
		} else {
		var delay = setInterval(function(){
			if(x != 0)	x = x - 1;
		},300)
			var extra = {text: '', x: player.x, y: player.y, font: 'px Consolas'};
		}
		ctx.fillStyle = timerArray[colorChoice]
		ctx.font = x + extra.font;
		ctx.fillText(extra.text, extra.x - (x*2.7), extra.y - (x))
	}
}

function updateGame(){
	var x, y;
	for(i=0; i < blocks.length; i++){
		if(player.crashesWith(blocks[i])){
			if(player.life == false){
				game.stop();
				return;
			}
			else {
				flashing = true;
				var delay = setTimeout(function(){
					player.life = false;
				},380);
			}
		}
	}
	for(i=0; i<coins.length; i++){
		if(player.crashesWith(coins[i])){
			coins[i].del = true;
			player.score = parseInt(player.score);
			player.score = player.score + 1;
			totalCoins = totalCoins + 1;
			if(player.score == 100){
				player.score = 1;
				player.life = true;
				show = true;
				var delay = setTimeout(function(){
					show = false;
				},2000)
			}
			
		}
	}
		game.clear();
		game.frameNo += 1; // 50 = 1 second
		player.speedX = 0;
	    player.speedY = 0;
		extraLife();
	if (game.frameNo == 1 || everyinterval(30)) {
		minMax();
		x = Math.floor(Math.random()*(xMax-min)+min);
		if(game.frameNo > 500){
			if(player.x >= 103 && player.x <= 167){
				if(middleTimer < 16) middleTimer += 1;
				if(x >= 103 && x <= 167){
					if(!fallLeft){
						x = 102.9;
						fallLeft = true;
					} else {
						x = 167.1;
						fallLeft = false;
					}
				}
			} else middleTimer = 0;
		}
        blocks.push(new component(30, 'deepskyblue', x, -50,'block'));
    }
	if(game.frameNo == 1 || everyinterval(15)){
		minMax();
		coinX = Math.floor(Math.random()*(xMax-min)+min);
		if(game.frameNo > 1500){
			if(player.x >= 103 && player.x <=167){
				if(middleTimer > 15)
				coinX = 150;
			}
		}
		coins.push( new component(10,'gold', (coinX),-55,'coin','20px') );
	}
	if(everyinterval(500)){ // 50 = 1 second
		blockSpeed = blockSpeed + .01;
		coinSpeed = coinSpeed + .01;
		colorChoice = Math.floor(Math.random()*colorArray.length);
		game.canvas.style.background = colorArray[colorChoice];
		timer.color = timerArray[colorChoice];
	}
    for (i = 0; i < blocks.length; i += 1) {
		blocks[i].fall();
		blocks[i].update();
    }
	for(i=0; i<coins.length; i++){
		coins[i].gravity = .04;
		coins[i].fall();
		coins[i].update();
	}
	showScore();
	    if (game.key == 'ArrowLeft') {left();} //left
	    if (game.key == 'ArrowRight') {right();} //right
	    if (game.key == 'ArrowUp' && player.bottom == true) { jump() } //up
		else{
			fall() // if not touching ground fall. prevents flying.
		}
	    if (game.key == 'ArrowDown') {player.speedY = -3; }//down
		if (game.key == 'T' || game.key == 'J'){player.x = 135}
}