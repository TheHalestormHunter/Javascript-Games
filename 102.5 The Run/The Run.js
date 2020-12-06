var player;

var game = {
	canvas : document.getElementById('canvas'),
	start : function(){
		this.canvas.width = 500;
		this.canvas.height = 300;
		this.frameNo = 0;
		this.ctx = game.getContext('2d');
		this.interval = setInterval(updateGame, 20);
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
	stop : function(){
		clearInterval(updateGame);
	},
	clear : function(){
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}