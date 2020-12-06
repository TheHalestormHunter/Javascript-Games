highScore = localStorage.getItem('highScore');
if(highScore == null){
	highScore = 0;
	localStorage.setItem('highScore',highScore);
}

highLevel = localStorage.getItem('highLevel');
if(highLevel == null){
	highLevel = 1;
	localStorage.setItem('highLevel',highLevel);
}


const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

const nextBlock = document.getElementById('next');
const context2 = nextBlock.getContext('2d');

const holder = document.getElementById('hold');
const context3 = holder.getContext('2d');

context.scale(20,20);
context2.scale(20,20);
context3.scale(20,20);

let tetrisCount = 0;

function arenaSweep(){
	let rowCount = 1;
	outer: for(let y = arena.length -1; y > 0; --y){
		for(let x = 0; x < arena[y].length; ++x){
			if(arena[y][x] === 0) {
				continue outer;
			}
		}

		const row = arena.splice(y, 1)[0].fill(0);
		arena.unshift(row);
		++y;
		++tetrisCount;

		player.score += rowCount * 100;
		rowCount *= 2;
		player.lines += 1;
		if(player.lines == player.linesLeft){
			player.level += 1;
			player.lines = 0;
			dropInterval -= 10;
			updateLevel();
		}
		updateLines();
	}
	if(tetrisCount == 4){
		tetris.show = true;
	}
	tetrisCount = 0;
}

function collide(arena, player){
	const [m, o] = [player.matrix, player.pos];
	for(let y = 0; y < m.length; ++y) {
		for(let x = 0; x < m[y].length; ++x) {
			if(m[y][x] !== 0 &&
				(arena[y + o.y] &&
				arena[y + o.y][x + o.x]) !==0) {
				return true;
			}
		}
	}
	return false;
}

function createMatrix(w,h){
	const matrix = [];
	while(h--){
		matrix.push(new Array(w).fill(0));
	}
	return matrix;
}

function createPiece(type){
	if(type === 'T') {
		return [
			[0,0,0],
			[1,1,1],
			[0,1,0],
		];
	} else if(type === 'O') {
		return [
			[2,2],
			[2,2],
		];
	} else if(type === 'L') {
		return [
			[0,3,0],
			[0,3,0],
			[0,3,3],
		];
	} else if(type === 'J') {
		return [
			[0,4,0],
			[0,4,0],
			[4,4,0],
		];
	}
	 else if(type === 'I') {
		return [
			[0,5,0,0],
			[0,5,0,0],
			[0,5,0,0],
			[0,5,0,0],
		];
	} else if(type === 'S') {
		return [
			[0,6,6],
			[6,6,0],
			[0,0,0],
		];
	}else if(type === 'Z') {
		return [
			[7,7,0],
			[0,7,7],
			[0,0,0],
		];
	}
}

function draw(){
	context.fillStyle = '#000';
	context.fillRect(0, 0, canvas.width, canvas.height);
	context2.fillStyle = '#000';
	context2.fillRect(0, 0, nextBlock.width, nextBlock.height);
	context3.fillStyle = '#000';
	context3.fillRect(0, 0, holder.width, holder.height);


	drawMatrix(arena, {x: 0, y: 0});
	drawMatrix(player.matrix, player.pos);
	drawNext(player.next, {x: 0, y: 0});
	drawSwap(player.swap, {x: 0, y: 0});
	
	drawTetris();
}

function drawMatrix(matrix, offset){
	matrix.forEach((row, y,) => {
		row.forEach((value, x) => {
			if(value !== 0){
				//context.fillStyle = 'purple';
				let image = new Image();
				image.src = 'blocks/' + color[value] + 'Block.png';
				context.drawImage(image,
								 x + offset.x,
								 y + offset.y,
								 1, 1,)
			}
		})
	})
}

function drawNext(matrix, offset){
	matrix.forEach((row, y) => {
		row.forEach((value, x) => {
			if(value !== 0){
				let image2 = new Image();
				image2.src = 'blocks/' + color[value] + 'Block.png';
				getOffset(color[value],offset);
				context2.drawImage(image2,
								  x + offset.x, 
								  y + offset.y,
								  1, 1);
			}
		})
	})
}

function drawSwap(matrix, offset){
	matrix.forEach((row, y) => {
		row.forEach((value, x) => {
			if(value !== 0){
				let image3 = new Image();
				image3.src = 'blocks/' + color[value] + 'Block.png';
				getOffset(color[value],offset);
				context3.drawImage(image3,
								  x + offset.x, 
								  y + offset.y,
								  1, 1);
			}
		})
	})
}

let tetris = {
		text: ['T','E','T','R','I','S','!'],
		color: ['#ed1c24','#ff7f27','#fff200','#008800','#ff7f27','#9301e0','#00ffff'],
		font: '1.5px Consolas',
		pos: {x: 3, y: 9},
		show: false,
		title : false,
		by: ['B','y',':',' ','T','r','a','v','i','s'],
		level: highLevel,
		score: highScore,
		scr: ['H','i','g','h',' ','S','c','o','r','e',':','',],
		sco: 'High Score: ',
		lvl: 'Highest Level: ',
	}
let spacing = 1;

function drawTetris(){
	if(tetris.show == true){
		for(i=0; i<(tetris.text.length); i++){
			context.fillStyle = tetris.color[i];
			context.font = tetris.font;
			context.fillText(tetris.text[i], (tetris.pos.x + (spacing * i)), tetris.pos.y)
		}
	}
	if(tetris.title == true){
		context.fillStyle = 'white';
		context.font = '1px Consolas';
		for(i=0; i<(tetris.by.length); i++){

			context.fillText(tetris.by[i], (tetris.pos.x + .9 + (.5 * i)) ,tetris.pos.y + 1.5);
		}
		//for(x=0; x<tetris.scr.length; x++){
		//	context.fillText(tetris.scr[x], (tetris.pos.x - 1 +(.5 * x)), tetris.pos.y + 6);
		//}
		context.fillText(tetris.sco + highScore, tetris.pos.x - 1.5, tetris.pos.y + 6);
		context.fillText(tetris.lvl + highLevel, tetris.pos.x - 1.5, tetris.pos.y + 8);
		
	}
}

function getOffset(color, offset){
	switch(color){
		case 'n': offset.x = 0;
				  offset.y = 0;
			break;
		case 't': offset.x = 0.5;
				  offset.y = 0;
			break;
		case 'o': offset.x = 1;
				  offset.y = 1;
			break;
		case 'l': offset.x = 0;
				  offset.y = 0.5;
			break;
		case 'j': offset.x = 1;
				  offset.y = 0.5;
			break;
		case 'i': offset.x = 0.5;
				  offset.y = 0;
			break;
		case 's': offset.x = 0.5;
				  offset.y = 1;
			break;
		case 'z': offset.x = 0.5;
				  offset.y = 1;
			break;
		default: offset.x = 0; offset.y = 0; break;
	}
	return offset.x, offset.y;
}

function merge(arena, player){
	player.matrix.forEach((row, y) => {
		row.forEach((value, x) => {
			if(value !==0){
				arena[y + player.pos.y][x + player.pos.x] = value;
			}
		})
	})
}

let gamePause = false;

function playerFloor(){
	while(collide(arena,player) == false){
		player.pos.y++;
		player.score += 2;
		updateScore();
	}
	if(collide(arena, player)) {
		player.pos.y--;
	}
	dropCounter = 0;
}

function playerDrop(){
	window.onblur = function(e) {
		gamePause = true;
	}
	window.onfocus = function(e) {
		gamePause = false;
	}
	if(!gamePause){
		player.pos.y++;
		if(player.pos.y > 1) {
			tetris.show = false;
			tetris.title = false;
		}
		if(player.pos.y > 2) player.sAble = false;
		else player.sAble = true;
		if(collide(arena, player)) {
			player.pos.y--;
			merge(arena,player);
			playerReset();
			arenaSweep();
			updateScore();
		}
		dropCounter = 0;
	}
}

function playerReset(){
	const pieces = 'ILJOTSZ';
	while(player.array.length <= 2){
		player.array.push(new createPiece(pieces[pieces.length * Math.random() | 0]));
	}
	player.matrix = player.array[0];
	player.next = player.array[1];
	
	player.array.shift();
	
	player.pos.y = 0;
	player.pos.x = (arena[0].length / 2 | 0) -
				   (player.matrix[0].length / 2 | 0);
	if(collide(arena,player)){
		arena.forEach(row => row.fill(0));
		
		if(player.score > highScore){
			localStorage.setItem('highScore',player.score);
		}
		if(player.level > highLevel){
			localStorage.setItem('highLevel',player.level);
		}
		location.reload();
	}	
}

function playerMove(dir){
	player.pos.x += dir;
	if(collide(arena, player)){
		player.pos.x -= dir;
	}
}

function playerRoate(dir){
	let offset = 1;
	rotate(player.matrix, dir);
	while(collide(arena, player)) {
		player.pos.x += offset;
		offset = -(offset +(offset > 0 ? 1: -1));
		if(offset > player.matrix[0].length) {
			rotate(player.matrix, -dir);
			player.pos.x = pos;
			return;
		}
	}
}

function playerSwap(){
	if(player.swap.length == 0){
		player.swap = player.matrix;
		playerReset();
	}
	else if(player.sAble){
		let temp = player.matrix;
		player.matrix = player.swap;
		player.swap = temp;
		player.pos.y = 0;
		player.pos.x = (arena[0].length / 2 | 0) -
				   (player.matrix[0].length / 2 | 0);
	}
}

function startScreen(){
	tetris.show = true;
	tetris.title = true;
}

function rotate(matrix, dir){
	for(let y = 0; y < matrix.length; ++y){
		for(let x = 0; x < y; ++x){
			[
				matrix[x][y],
				matrix[y][x],
			] = [
				matrix[y][x],
				matrix[x][y]
			];
		}
	}
	if(dir > 0){
		matrix.forEach(row => row.reverse());
	} else {
		matrix.reverse();
	}
}

let dropCounter = 0;
let dropInterval = 1000;

let lastTime = 0;
function update(time = 0){
	const deltaTime = time - lastTime;
	lastTime = time;

	dropCounter += deltaTime;
	if(dropCounter > dropInterval){
		playerDrop();
	}

	draw();
	requestAnimationFrame(update)
}

function updateScore(){
	document.getElementById('score').innerText = player.score;
}

function updateLines(){
	document.getElementById('lines').innerText = player.lines;
}

function updateLevel(){
	document.getElementById('level').innerText = player.level;
}

const color = [
	'n',
	't',
	'o',
	'l',
	'j',
	'i',
	's',
	'z',
];

const arena = createMatrix(12,20);

const player = {
	pos: {x: 0, y: 0},
	matrix: null,
	next: null,
	array: [],
	score: 0,
	swap: [],
	sAble: true,
	lines: 0,
	level: 1,
	linesLeft: 0,
}

player.linesLeft = player.level + 4;

document.addEventListener('keydown', event => {
	if(event.keyCode === 100) {
		playerMove(-1)
	} else if(event.keyCode === 102) {
		playerMove(1)
	} else if((event.keyCode === 101)) {
		player.score += 1;
		playerDrop();
		updateScore();
	} else if(event.keyCode === 105) {
		playerRoate(1);
	} else if(event.keyCode === 103) {
		playerRoate(-1);
	} else if(event.keyCode === 98) {
		playerFloor();
	} else if(event.keyCode === 96) {
		if(player.sAble) playerSwap();
	}
});


playerReset();
updateScore();
updateLines();
updateLevel();
update();
