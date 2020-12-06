//function name(caller, target, stageMod, actionChance, actionValue)
//actionValue = string for immunity or value to adjust by

var twoTurn;
var modSelfStat = 6;
var modTargStat = 6;
var statChange;
var valueChange;
var statChanged = false;
var accuracyChanged = false; 
var evasionChanged = false;
var chance;
var repeatValue = 1;
var hitCount;

var statStage = [0.25, 0.28, 0.33, 0.40, 0.50, 0.66, 1, 1.5, 2, 2.5, 3, 3.5, 4],
	accuStage = [-6,-5,-4,-3,-2,-1,0, 1, 2, 3, 4, 5, 6],
	evasStage = [6, 5, 4, 3, 2, 1, 0,-1,-2,-3,-4,-5,-6],
	accuvasionCalc = [(25/100),(28/100),(33/100),(40/100),(50/100),(66/100),(100/100),(150/100),(200/100),(250/100),(300/100),(350/100),(400/100)];
/*
For example, a Pokémon with -1 accuracy using a move that has 100% accuracy on a target with +1 evasion would have a 66/100 * 66/100 ~= 43.56%

*/

function moveDelay(c, t, s, ch, v){
	
}
function modSpeed(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
	if(chance <= ch){
		statChange = 3;
		if(v == 0) {
			modSelfStat = s + pokemon[caller].statStage[statChange];
			if(modSelfStat > 12) modSelfStat = 12;
			if(modSelfStat < 0) modSelfStat = 0;
			pokemon[caller].statStage[statChange] = modSelfStat;
			Math.floor(pokemon[caller].stats[statChange] = pokemon[caller].startStats[statChange] * statStage[modSelfStat]);
		} else {
			modTargStat = s + pokemon[target].statStage[statChange];
			if(modTargStat > 12) modTargStat = 12;
			if(modTargStat < 0) modTargStat = 0;
			pokemon[target].statStage[statChange] = modTargStat;
			Math.floor(pokemon[target].stats[statChange] = pokemon[target].startStats[statChange] * statStage[modTargStat]);	
		}
		valueChange = s;
		statChanged = true;
	}
}
function modAttack(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
	if(chance <= ch){
		statChange = 1;
		if(v == 0){
			modSelfStat = s + pokemon[caller].statStage[statChange];
			if(modSelfStat > 12) modSelfStat = 12;
			if(modSelfStat < 0) modSelfStat = 0;
			pokemon[caller].statStage[statChange] = modSelfStat;
			Math.floor(pokemon[caller].stats[statChange] = pokemon[caller].startStats[statChange] * statStage[modSelfStat]);
		} else {
			modTargStat = s + pokemon[target].statStage[statChange];
			if(modTargStat > 12) modTargStat = 12;
			if(modTargStat < 0) modTargStat = 0;
			pokemon[target].statStage[statChange] = modTargStat;
			Math.floor(pokemon[target].stats[statChange] = pokemon[target].startStats[statChange] * statStage[modTargStat]);
		}
		valueChange = s;
		statChanged = true;
	}
}
function modAccuracy(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
	if(chance <= ch){
		Math.floor(pokemon[target].accuracy = pokemon[target].accuracy + s);
		statChange = 5;
		valueChange = s;
		accuracyChanged = true;
	}
}
function modEvasive(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
	if(chance <= ch){
		Math.floor(pokemon[caller].evasion = pokemon[caller].evasion + s);
		statChange = 6;
		valueChange = s;
		evasionChanged = true;
	}
}

function modDefense(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
	if(chance <= ch){
		statChange = 2;
		if(v == 0){
			modSelfStat = s + pokemon[caller].statStage[statChange];
			if(modSelfStat > 12) modSelfStat = 12;
			if(modSelfStat < 0) modSelfStat = 0;
			pokemon[caller].statStage[statChange] = modSelfStat;
			Math.floor(pokemon[caller].stats[statChange] = pokemon[caller].startStats[statChange] * statStage[modSelfStat]);
		}
		if(v ==1){
			modTargStat = s + pokemon[target].statStage[statChange];
			if(modTargStat > 12) modTargStat = 12;
			if(modTargStat < 0) modTargStat = 0;
			pokemon[target].statStage[statChange] = modTargStat;
			Math.floor(pokemon[target].stats[statChange] = pokemon[target].startStats[statChange] * statStage[modTargStat]);
		}
		valueChange = s;
		statChanged = true;
	}
}
function modSpecial(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
	if(chance <= ch){
		statChange = 4;
		if(v == 0){
			modSelfStat = s + pokemon[caller].statStage[statChange];
			if(modSelfStat > 12) modSelfStat = 12;
			if(modSelfStat < 0) modSelfStat = 0;
			pokemon[caller].statStage[statChange] = modSelfStat;
			Math.floor(pokemon[caller].stats[statChange] = pokemon[caller].startStats[statChange] * statStage[modSelfStat]);
		} else {
			modTargStat = s + pokemon[target].statStage[statChange];
			if(modTargStat > 12) modTargStat = 12;
			if(modTargStat < 0) modTargStat = 0;
			pokemon[target].statStage[statChange] = modTargStat;
			Math.floor(pokemon[target].stats[statChange] = pokemon[target].startStats[statChange] * statStage[modTargStat]);
		}
		valueChange = s;
		statChanged = true;
	}
}
function swapPokemon(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
	if(chance <= ch){
		
	}
}
function poison(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
console.log("I am called")
	
	//value 1 = okemon loses 1/16 Max HP every turn... 
	
	// value 2 = badly = 1/16++ every turn... cannot effect poison type pokemon
	
	//non volatile
	
}
function burn(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
	//pokemon loses 1/16 max hp every turn... cannot effect fire types
	
	//non volatile
	
}
function sleep(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
	
	//lasts for Math.floor(Math.random(c, t, s, ch, v)*7) turns
	
	//non volatile
	
}
function confuse(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
	
	//volatile
	// 50% chance to hurt itself
	// damage 40 power typeless without crit
	// wears off after 1-4 turns
	// recharge moves or not able to attack (paralyzed) do NOT count as turns
	// checks on multi turn attacks
	
	
}
function paralyze(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
	
	//25% chance to not use move
	//reduces speed by 25%
	
	//non volatile
	
}
function freeze(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
	
	//non volatile
	
}
function flinch(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
	// only happens if it hits before pokemon uses its own move
	// prevents from attacking
}
function instant(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
	// value : 1 horn drill breaks substitute, also will not affect if target speed > caller speed
	
}
function recoil(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
	// value = % damage
	// if value = 1 damage = 1/4 max caller HP
}
function recharge(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
	
}
function counter(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
}
function flatDmg(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
}
function rage(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
}
function digDetect(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
}
function teleport(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
}
function mirror(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
}
function protect(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
}
function bide(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
}
function randomMove(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
}
function selfDestruct(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
}
function swift(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
}
function skullBash(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
}
function recoverSleep(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
}
function skyAttack(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
}
function rest(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
}
function trifecta(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
	burn(c, t, s, ch, v);
	freeze(c, t, s, ch, v);
	paralyze(c, t, s, ch, v);
}
function substitute(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
}
function pin(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
}
function twin(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
}
function repeat(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
	if(chance <= ch){
		var min, max;
		min = v[0]
		max = v[1]
		console.log(min,max)
		repeatValue = Math.floor(Math.random()*(max-min+1)+min)
		hitCount = repeatValue;
	}
}
function gamble(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)	
}
function sumo(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
}
function gust(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)	
}
function trap(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
	//37.5% chance 2 turns, 37.5% chance 3 turns, 12.5% 4 turns 12.5 chance 5 turns
	//each attack does the same damage
	
	
}
function leech(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
	// cannot effect grass types
	//damages 1/16 max hp heals for same amount
	
}
function petalDance(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
}
function statLock(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
}
function reset(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
	//stagemod = 9 : reset all stats
	
}
function conversion(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
}
function growth(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
}
function splash(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
}
function blank(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
}
function copy(c, t, s, ch, v){
	chance = Math.floor(Math.random()*100)
	localStorage.removeItem("savedMoves");
	localStorage.removeItem("saveGame");
	var storeIV, storeEV, storeBaseStats, storeStats, storeLevel, storeStatus, storeAccuracy;
	storeIV = pokemon[caller].iv;
	storeEV = pokemon[caller].ev;
	storeBaseStats = pokemon[caller].baseStats;
	storeStats = pokemon[caller].stats;
	storeAccuracy = pokemon[caller].accuracy;
	storeStatus = pokemon[caller].status;
	storeLevel = pokemon[caller].level;
	
	pokemon[caller] = pokeList[id2]
	
	pokemon[caller].iv = storeIV;
	pokemon[caller].ev = storeEV;
	pokemon[caller].baseStats = storeBaseStats;
	pokemon[caller].stats = storeStats;
	pokemon[caller].accuracy = storeAccuracy;
	pokemon[caller].status = storeStatus;
	pokemon[caller].level = storeLevel;
	
	moveCalc(pokemon[caller])
	evCalc(pokemon[caller])
	pokeStats(pokemon[caller])
	
	pokeDisplay();
	updateTitles();
	enableButtons();
	turnOver = true;
}