var player;
class Player {
	constructor(health,coords,damage,xp){
		this.health = health;
		this.coords = coords;
		this.damage = damage;
		this.xp = xp;
	}
}
var enemies = [];
class Enemy {
	constructor(health,coords,damage){
		this.health = health;
		this.coords = coords;
		this.damage = damage;
	}
}

