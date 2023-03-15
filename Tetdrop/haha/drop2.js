var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

context.scale(20,20);

var image = new Image();
var matrix = [
	[0,0,0],
	[1,1,1],
	[0,1,0]
];
var color = [
	'i',
	'j',
	't',
	's',
	'z',
	'o',
	'l',
	]
	
const arena = createMatrix(12,20);
console.log(arena); console.table(arena);
	
const player = {
	pos: {x: 5, y: 5},
	matrix: matrix,
	color: image,
	type: color[Math.floor(Math.random()*color.length)]
};	

var dropCounter = 0;
var dropInterval = 1000;
var lastTime = 0;

image.src = 'blocks/' + player.type + 'Block.png';	

function collide(arena,player){
	const [m, o] = [player.matrix, player.pos];
	for(var y=0; y < m.length; y++){
		for(var x=0; x < m[y].length; x++){
			if(m[y][x] != 0 &&
				(arena[y + o.y] &&
				arena[y + o.y][x + o.x]) !== 0) {
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


function draw(){	
	context.fillStyle = '#000';
	context.fillRect(0,0, canvas.width, canvas.height);

	drawMatrix(arena, {x: 0, y:0})
	drawMatrix(player.matrix, player.offset, player.color)
}

function drawMatrix(matrix,offset){
	matrix.forEach((row,y) => {
		row.forEach((value,x) => {
			if(value !== 0){
				//context.fillStyle = 'green';
				context.drawImage(player.color,
								 (x + player.pos.x),
								 (y + player.pos.y),
								 1,1)
			}
		});
	});
}

function merge(arena, player){
	player.matrix.forEach((row,y) => {
		row.forEach((value, x) =>{
			if(value !==0){
				arena[y + player.pos.y][x + player.pos.x] = value;
			}
		})
	})
}

function playerDrop(){
	player.pos.y++;
	if(collide(arena,player)){
		player.pos.y--;
		merge(arena,player);
		player.pos.y = 0;
	}
	dropCounter = 0;
}

function update(time = 0){
	const deltaTime = time - lastTime;
	lastTime = time;
	dropCounter += deltaTime;
	if(dropCounter > dropInterval){
		playerDrop();
	}
	draw();
	requestAnimationFrame(update);
}



document.addEventListener('keydown',function(e){
	if(e.keyCode === 37){
		player.pos.x--;
	}
	else if(e.keyCode === 39){
		player.pos.x++;
	}
	else if(e.keyCode === 40){
		playerDrop();
	}
})


update()