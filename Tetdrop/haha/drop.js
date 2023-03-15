var board = [];
const rows = 24;
const cols = 10;
var pieces = [];
var dropSpeed = 200;

var pieceLocations = [
	[3,4,5,6], // I
	[3,4,5,15], // L
	[3,4,5,13], // J
	[3,4,5,14], // T
	[3,4,14,15], // Z
	[13,14,4,5], // S
	[3,4,13,14] // O
	]


function game(){
	//var updater = setInterval(clear,100);
	var newSquare, blockId;
	divGameSquares = document.getElementById('gameSquares');
	//divGameSquares = document.createElement('div');
	//divGameSquares.id = 'gameSquares';
	//document.body.appendChild(divGameSquares);
	document.body.appendChild(document.createElement('br'));
	for(r=0; r<rows; r++){
		for(c=0; c<cols; c++){
			newSquare = document.createElement('img');
			newSquare.src = 'blank.png';
			blockId = r*cols+c;
			newSquare.id = blockId;
			newSquare.className = 'empty'
		    divGameSquares.appendChild(newSquare);
    	}
		divGameSquares.appendChild(document.createElement('br'));
	}
	pieces.push(new piece(Math.floor(Math.random()*pieceLocations.length)));
	drawPiece();
}

function piece(type){
	this.location = pieceLocations[type];
	this.newPos = function(){
		for(i=0; i<4; i++){
			if(this.location[3] + 10 < 240){
				this.location[i] += 10;
			}
		}
	}
	this.update = function(){
		for(i=0; i<4; i++){
			document.getElementById(this.location[i]).src = 'block.png'
		}
	}
	this.clear = function(){
		for(i=0; i<4; i++){
			document.getElementById(this.location[i]).src = 'blank.png'
		}
	}
}

function drawPiece(){
	pieces[pieces.length-1].update();
	var delay = setInterval(movePiece,dropSpeed)
}

function movePiece(){
		pieces[pieces.length-1].clear();
		pieces[pieces.length-1].newPos();
		pieces[pieces.length-1].update();
}
