const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.scale(5,5) //scale the canvas to prevent blurry shapes
const scale = 5;
const area = { // define the area of the canvas as a const
	pos: {x: 0, y: 0},
	height: 96,
	width: 96,
	matrix: [],
}
	
function createMatrix(h,w,f){ //createable matrix with h,w and what to fill with
	let matrix = [];
	while(h--){
		matrix.push(new Array(w).fill(f));
	}
	return matrix;
}

function draw(){
	ctx.clearRect(0,0,canvas.height,canvas.width)
	drawMatrix(player.matrix, player.pos)
	drawMatrix(knife.matrix, knife.pos)
	drawMatrix(sword.matrix, sword.pos)
}

function drawMatrix(matrix, offset){
	matrix.forEach((row, y) => {
		row.forEach((value, x) => {
			if(value !== 0){
				getColor(value);
				ctx.fillStyle = color;
				ctx.fillRect(x + offset.x,
							 y + offset.y,
							 1,1);
			}
		})
	})
}

function getColor(value){
	switch(value){
		case 1: color = 'red'; break;
		case 2: color = 'black'; break;
		case 3: color = 'blue'; break;
		case 4: color = 'green'; break;
		default: color = 'null'; break;
	}
	return color;
}


function playerMove(dir){
	switch(dir){
		case -1: player.speed.y -= player.moveSpeed * player.speedMod; break;
		case 0: player.speed.y += player.moveSpeed * player.speedMod; break;
		case 1: player.speed.x -= player.moveSpeed * player.speedMod; break;
		case 2: player.speed.x += player.moveSpeed * player.speedMod; break;
		case 3: break;
		default: break;
	}
}

function randomPos(){
	let randX = Math.random()*area.width/1.5| 0;
	let randY = Math.random()*area.height/1.5 | 0;
	let pos = {x: randX, y: randY};
	return pos;
}

function update(){
	player.newPos();
	draw();
	player.speed.x = 0;
	player.speed.y = 0;
	requestAnimationFrame(update);
}

const player = {
	health: 100,
	level: 1,
	mana: 10,
	str: 1,
	def: 1,
	acc: 1,
	items: [],
	spells: [],
	size: 4,
	width: 4,
	height: 4,
	color: 'red',
	pos: {x: 0, y: 0},
	speed: {x: 0, y: 0},
	speedMod: 1,
	moveSpeed: 1,
	matrix: [],
	gravity: 0,
	gravitySpeed: 0.5,
	newPos: function(){
		this.pos.x += this.speed.x;
		this.pos.y += this.speed.y;
		//prevent travel outside canvas
		if(this.pos.x < 0){
			this.pos.x = 0;
		} else if(this.pos.x + this.width * scale > area.width){
			this.pos.x = area.width - (this.width * scale);
		} else if(this.pos.y < 0){
			this.pos.y = 0;
		} else if(this.pos.y + this.height * scale > area.height){
			this.pos.y = area.height - (this.height * scale)
		}
	},
	
}

const knife = new weapon(5, randomPos(), [1,2,2])
	
const sword = new weapon(10, randomPos(), [1,3,3])

function weapon(damage, pos, size){
	this.damage = damage;
	this.pos = pos;
	this.held = false;
	this.size = size;
	this.height = size[0];
	this.width = size[1];
	this.matrix = createMatrix(this.size[0],this.size[1],this.size[2]);
}

player.matrix = createMatrix(player.size, player.size, 1)
area.matrix = createMatrix(area.height, area.width, 0);

update();

document.addEventListener('keydown', function(e){
	if(e.keyCode == 87){
		playerMove(-1);
	} else if(e.keyCode == 83){
		playerMove(0);
	} else if(e.keyCode == 65){
		playerMove(1);
	} else if(e.keyCode == 68){
		playerMove(2);
	} else if(e.keyCode == 32){
		console.log('not ready fool');
	}
})