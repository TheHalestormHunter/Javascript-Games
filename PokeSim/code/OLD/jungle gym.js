/* Index 
Storage - 230
pokemonPicker - 263
stats - 273
calculations(iv, ev, moves) - 304
id's - 372
display - 380
healthUpdater - 413
ppUpdate - 475
moveFunctions - 484
attackFunction - 511
aiAttack - 559
damageCalc - 593
*/

var id1;
var savedMoves;
var saveGame;
var xp;

if(typeof(Storage) != null) { //Storage
  Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
  }
  Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
  }
  id1 = localStorage.getItem("id1");
  if(id1 == null) {
    id1 = 153;
    localStorage.setItem("id1",id1);
  }
  saveGame = localStorage.getItem("saveGame");
  if(saveGame == null) {
    saveGame = 0;
    localStorage.setItem("saveGame",0);
  }
  xp = localStorage.getItem("xp");
  if(xp == null) {
    xp = 0;
    localStorage.setItem("xp",0);
  }
   savedMoves = localStorage.getObj("savedMoves");
  if(savedMoves == null) {
  savedMoves = [];
  localStorage.setObj('savedMoves',savedMoves);
  }
}
var pokemon = [{name: "Mewtwo", type: ["Normal","Fighting","Flying","Psychic","Rock","Electric","Ice","Ground","Bug","Water","Grass","Poison","Ghost","Dragon"], level: 1, stats: [106,110,90,130,154,154], maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [HM99= {name: "Ultimate Power", PP: 30, power: 50, accuracy: 95, desc: "No additional effect.", type: ["Normal","Fighting","Flying","Psychic","Rock","Electric","Ice","Ground","Bug","Water","Grass","Poison","Ghost","Dragon"], action: "damage"}], sprite: "Beast", movesAvail: []},
{name: "Mew", type: ["Normal","Fighting","Flying","Psychic","Rock","Electric","Ice","Ground","Bug","Water","Grass","Poison","Ghost","Dragon"], level: 1, stats: [100,100,100,100,100,100], maxHealth: 100, currentHealth: 100, XP: 0, nextLevel: 100, moveset: [HM99= {name: "Ultimate Power", PP: 30, power: 50, accuracy: 95, desc: "No additional effect.", type: ["Normal","Fighting","Flying","Psychic","Rock","Electric","Ice","Ground","Bug","Water","Grass","Poison","Ghost","Dragon"], action: "damage"}], sprite: "Beast", movesAvail: []}];

var earnedXP = 0;
var caller;
var target;

var PPM = [];
var menuColor =[];
var msgArray = [];
var text = "";
var gain;
var crit = 1;
var	id2 = Math.floor(Math.random() * 151);

var accuracy;
var moveNum;
var damage;
var expSoFar;

var turnOver = false;

var typeEff = 1;
var STAB = 1;

var statStage = [0.25, 0.28, 0.33, 0.40, 0.50, 0.66, 1, 1.5, 2, 2.5, 3, 3.5, 4];

var mod;

var pokeFront = new Image();
var pokeBack = new Image();

pokeFront.src = "resources/sprites/gen1 fronts.png"
pokeBack.src = "resources/sprites/gen1 back.png"

var can = document.getElementById("pokePlace1")
var canv = document.getElementById("pokePlace2")
var box = document.getElementById("desc")

var c1 = can.getContext("2d");
var c2 = canv.getContext("2d");

var x = 0;
var y = 0;

var rows = 7;
var cols = 25;

var srcX = 0;
var srcY = 0;

var sheetWidth = 1600;
var sheetHeight = 448;

var srcX2 = 0;
var srcY2 = 0;

var w = sheetWidth / cols;
var h = sheetHeight / rows;

var currentCol = 0;
var currentRow = 0;

var idCol;
var idRow;
var mypoke;
	
function savePoke(){
	localStorage.setItem("saveGame", 1);
	localStorage.setObj("MyPokemon", pokemon[0])
	mypoke = localStorage.getObj("MyPokemon")
}

function clearSave(){
	localStorage.removeItem("MyPokemon");
	localStorage.removeItem("savedMoves");
	localStorage.removeItem("saveGame");
	localStorage.removeItem("xp");
	location.reload();
}
function newMove(){
	localStorage.removeItem("savedMoves");
	for(i=0; i<4; i++){
	pokemon[0].moveset.pop();
	}
	while(pokemon[0].moveset.length < 4) {
		pokemon[0].moveset.push(pokemon[0].movesAvail[Math.floor(Math.random()*pokemon[0].movesAvail.length)]);
		pokemon[0].moveset = removeDup(pokemon[0].moveset);
		pokemon[0].moveset = shuffle(pokemon[0].moveset);
		pokemon[0].moveset.sort(function(a, b) {
			var textA = a.name.toUpperCase();
			var textB = b.name.toUpperCase();
			return (textA < textB) ? 1 : (textA > textB) ? -1 : 0;
		});
	}
	moveDisplay()
	savePoke()
}

function retrieve(){
	pokemon[0] = MyPokemon;
}

function pokemonPicker(){
	pokemonId();
	if(saveGame == 0){
		ivCalc();
		moveCalc();
		pokemon[0].level = 50;
		pokemon[1].level = 50;
		expCalc();
		evCalc();
		pokeStats();
	} else {
		retrieve();
	}
	pokeDisplay();
}

function pokemonId(){	
	if(id1 == 153){
		id1 = Math.floor(Math.random()*151);
	}
	pokemon[0] = pokeList[109];
	pokemon[1] = pokeList[id2];	
}

function ivCalc(){
	for(n=0; n<=1; n++){
		for(i=1; i<=4; i++){
			pokemon[n].iv[i] = Math.floor(Math.random()*15);
		}
		//converts 4 iv values into a binary type value by getting remainder divided by 2 then multiplying based on location in array compared to regular binary string to health iv. 
		pokemon[n].iv[0] = ((8*(pokemon[n].iv[1]%2)) + (4*(pokemon[n].iv[2]%2)) + (2*(pokemon[n].iv[3]%2)) + (pokemon[n].iv[4]%2));
	}
	
}

function moveCalc(){
	if(saveGame != 1){
		while(pokemon[0].moveset.length != 4){
			pokemon[0].moveset.push(pokemon[0].movesAvail[Math.floor(Math.random()*pokemon[0].movesAvail.length)]);
			pokemon[0].moveset = shuffle(pokemon[0].moveset);
			pokemon[0].moveset = removeDup(pokemon[0].moveset);
			pokemon[0].moveset.sort(function(a, b) {
   				var textA = a.name.toUpperCase();
    			var textB = b.name.toUpperCase();
    			return (textA < textB) ? 1 : (textA > textB) ? -1 : 0;
			});
		}
	}
	else {
		pokemon[0].moveset = savedMoves;
	}
	while(pokemon[1].moveset.length != 4) {
		pokemon[1].moveset.push(pokemon[1].movesAvail[Math.floor(Math.random()*pokemon[1].movesAvail.length)]);
		pokemon[1].moveset = shuffle(pokemon[1].moveset);
		pokemon[1].moveset = removeDup(pokemon[1].moveset);
		pokemon[1].moveset.sort(function(a, b) {
   			var textA = a.name.toUpperCase();
    		var textB = b.name.toUpperCase();
    		return (textA < textB) ? 1 : (textA > textB) ? -1 : 0;
		});
	}
}

function shuffle(array) {
	var currentIndex = array.length, tempValue, randomIndex;
	
	while(0 !== currentIndex) { //while there remain elements to shuffle
		randomIndex = Math.floor(Math.random() * currentIndex); //pick a remaining element
		currentIndex -= 1;
		
		//swap it with current element
		tempValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = tempValue;
	}
	return array;
}

function removeDup(arr){
    let unique_array = [];
    for(i=0; i<arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i]);
        }
    }
    return unique_array;
}


function pokeStats(){
	for(n=0; n<=1; n++){
		var mewCount = (Math.floor(Math.random()*656))*100;
		for(i=0; i<5; i++){
			pokemon[0].ev[i] = mewCount;
		}		
		pokemon[n].stats[0] = Math.floor(((pokemon[n].baseStats[0] + pokemon[n].iv[0])*2 + ((Math.sqrt(pokemon[n].ev[0])/4)*pokemon[n].level)/100) + pokemon[n].level + 10);
		pokemon[n].maxHealth = pokemon[n].stats[0]
		pokemon[n].currentHealth = pokemon[n].maxHealth;
		for(i=1; i<=4; i++){
			pokemon[n].stats[i] = Math.floor(((pokemon[n].baseStats[i] + pokemon[n].iv[i])*2 + ((Math.sqrt(pokemon[n].ev[i])/4)*pokemon[n].level)/100) + 5);
		}
		pokemon[n].stats[5] = pokemon[n].stats[4];
		console.log(pokemon[n].name);
		console.log("HP " + pokemon[n].stats[1]);
		console.log("ATK " + pokemon[n].stats[2]);
		console.log("Def " + pokemon[n].stats[3]);
		console.log("SP " + pokemon[n].stats[4]);
		console.log(" ");
		
	}
	// Health = (((Base stat + IV)*2+(SqRt(EV)/4)*level)/100) + level + 10
	//Calculate Health IV = The HP IV is calculated by taking the least significant bit (the final binary digit) of the Attack, Defense, Speed, and Special IVs, then creating a binary string by placing them in that order. As such, a Pokémon with an odd-number Attack IV has 8 added to its HP IV, an odd-number Defense IV has 4 added, an odd-number Speed IV has 2 added, and an odd-number Special IV has 1 added.
	//IV = Math.random()*15 % 2 ==== 8(At iv mod 2) + 4(def iv mod 2) + 2(speed iv mod 2) + 1(spec iv mod 2)
	//EV = when pokemon is defeated, add stats to ev. to max of 65535 for each stat
	//When a Pokémon grows a level, its stats will increase. For each level gained (ignoring Nature), stats will increase by 1/50 the base stat value, and 1/100 the combined individual value and effort value.
}



function evCalc(){
	var temp = Math.ceil(expSoFar/64)
	for(n=0; n <= temp; n++)
		for(i=0; i<5; i++){
			pokemon[0].ev[i] = pokemon[0].ev[i] + pokemon[1].ev[i];
			if(pokemon[0].ev[i] > 65335){
				pokemon[0].ev[i] = 65335;
			}
		}
		
}

function expCalc(){
	
	var lvlCubed = Math.pow(pokemon[0].level, 3)
	var mewsBeat = Math.pow((pokemon[0].level-1), 3)
	
	if(pokemon[0].expType.includes("Fastest") == true){
		pokemon[0].expLvl = Math.abs((4*lvlCubed) / 5);
		expSoFar = Math.abs((4*mewsBeat) / 5);
		// next level exp = 4n^3 / 5
	}
	else if(pokemon[0].expType.includes("Medium Fast") == true){
		pokemon[0].expLvl = Math.abs(lvlCubed);
		expSoFar = Math.abs(mewsBeat);
		// n^3
	}
	else if(pokemon[0].expType.includes("Medium Slow") == true){
		pokemon[0].expLvl = Math.abs(((6/5)*lvlCubed) - (15*(Math.pow(pokemon[0].level, 2))) + (100*pokemon[0].level) - 140);
		expSoFar = Math.abs(((6/5)*mewsBeat) - (15*(Math.pow(mewsBeat, 2))) + (100*pokemon[0].level) - 140);
		//  5/6n^3 - 15n^2 + 100n - 140
	}
	else if(pokemon[0].expType.includes("Slowest") == true){
		pokemon[0].expLvl = Math.abs((5*lvlCubed) / 4);
		expSoFar = Math.abs((5*mewsBeat) / 4);
		// 5n^3/4
	}
}

function expForEv(){
	var temp = expSoFar/64;
	
}

function expGain(){
	gain = (pokemon[1].level * pokemon[1].expYield)
	pokemon[0].exp = (pokemon[0].exp + gain);
	console.log(pokemon[0].name + " earned " + gain + "xp Points!")
	localStorage.setItem("xp", pokemon[0].exp)
	expUpdater();
	
}

function newPokemon(){
	id2 = Math.floor(Math.random()*151)
	pokemon[1] = pokeList[id2];
	pokemon[1].level = 50;
	pokemon[1].currentHealth = pokemon[1].maxHealth
	healthUpdater2();
	srcX2 = pokemon[1].col * w;
	srcY2 = pokemon[1].row * h;
	c2.clearRect(x,y,w,h)
	c2.drawImage(pokeFront, srcX2, srcY2, w, h, x, y, w, h);
	
}

function expUpdater(){
	//pokemon[0].exp = parseInt(xp)
	var experience = document.getElementById("exp1");
    var width = 1;
    var id = setInterval(frame, 10);
	var percent = (pokemon[0].exp/pokemon[0].expLvl)*100
    function frame() {
        if (width > percent) {
            clearInterval(id);
        } else {
            width = percent; 
            experience.style.width = width + '%'; 
			if(width >= 100){
				pokemon[0].level++;
				pokemon[0].exp = 0;
			}
        }
    }
}

function draw(){
	render()
	c1.drawImage(pokeBack, srcX, srcY, w, h, x, y, w, h);
	c2.drawImage(pokeFront, srcX2, srcY2, w, h, x, y, w, h);
}

function render(){
	srcX = pokemon[0].col * w;
	srcY = pokemon[0].row * h;
	
	srcX2 = pokemon[1].col * w;
	srcY2 = pokemon[1].row * h;
	
	c1.clearRect(x,y,w,h)
	c2.clearRect(x,y,w,h)
}

function pokeDisplay(){
	document.getElementById("pokemon1Name").innerHTML = pokemon[0].name;
	document.getElementById("pokemon2Name").innerHTML = pokemon[1].name;
	document.getElementById("pokemon1Level").innerHTML = "Lvl." + pokemon[0].level;
	document.getElementById("pokemon2Level").innerHTML = "Lvl." + pokemon[1].level;
	document.getElementById("pokemon1HPdisplay").innerHTML = pokemon[0].currentHealth + "/" + pokemon[0].maxHealth;
	document.getElementById("pokemon2HPdisplay").innerHTML = pokemon[1].currentHealth + "/" + pokemon[1].maxHealth;
	draw();
	moveDisplay();
	expUpdater();
}

function moveDisplay(){
	document.getElementById("move1").innerHTML = pokemon[0].moveset[0].name;
	document.getElementById("move2").innerHTML = pokemon[0].moveset[1].name;
	document.getElementById("move3").innerHTML = pokemon[0].moveset[2].name;
	document.getElementById("move4").innerHTML = pokemon[0].moveset[3].name;
	
	document.getElementById("menu1").title = "Type: " + pokemon[0].moveset[0].type + "\nPower: " + pokemon[0].moveset[0].power + "\nAccuracy: " + pokemon[0].moveset[0].accuracy;
	document.getElementById("menu2").title = "Type: " + pokemon[0].moveset[1].type + "\nPower: " + pokemon[0].moveset[1].power + "\nAccuracy: " + pokemon[0].moveset[1].accuracy;
	document.getElementById("menu3").title = "Type: " + pokemon[0].moveset[2].type + "\nPower: " + pokemon[0].moveset[2].power + "\nAccuracy: " + pokemon[0].moveset[2].accuracy;
	document.getElementById("menu4").title = "Type: " + pokemon[0].moveset[3].type + "\nPower: " + pokemon[0].moveset[3].power + "\nAccuracy: " + pokemon[0].moveset[3].accuracy;
	
	for(i=0; i<4; i++){
		PPM[i] = pokemon[0].moveset[i].PP;
	}
	
	document.getElementById("PP1").innerHTML = pokemon[0].moveset[0].PP + "/" + PPM[0];
	document.getElementById("PP2").innerHTML = pokemon[0].moveset[1].PP + "/" + PPM[1];
	document.getElementById("PP3").innerHTML = pokemon[0].moveset[2].PP + "/" + PPM[2];
	document.getElementById("PP4").innerHTML = pokemon[0].moveset[3].PP + "/" + PPM[3];
	
	menuColors()
	
	document.getElementById("menu1").style.backgroundColor = menuColor[0];
	document.getElementById("menu2").style.backgroundColor = menuColor[1];
	document.getElementById("menu3").style.backgroundColor = menuColor[2];
	document.getElementById("menu4").style.backgroundColor = menuColor[3];
	
}

function ppUpdate(){
	pokemon[0].moveset[moveNum].PP--;
	document.getElementById("PP1").innerHTML = pokemon[0].moveset[0].PP + "/" + PPM[0];
	document.getElementById("PP2").innerHTML = pokemon[0].moveset[1].PP + "/" + PPM[1];
	document.getElementById("PP3").innerHTML = pokemon[0].moveset[2].PP + "/" + PPM[2];
	document.getElementById("PP4").innerHTML = pokemon[0].moveset[3].PP + "/" + PPM[3];
	
}

function animate1(){
	document.getElementById("pokePlace1").style.animation = "pokeAction1 .1s 1 alternate";
	var reset = setTimeout(resetAnimation, 500);
}

function animate2(){
	document.getElementById("pokePlace2").style.animation = "pokeAction2 .1s 1 alternate";
	var reset = setTimeout(resetAnimation, 500);
}

function resetAnimation(){
	document.getElementById("pokePlace1").style.animation = "nothing 1s infinite";
	document.getElementById("pokePlace2").style.animation = "nothing 1s infinite";
}

function disableButtons(){
	document.getElementById("menu1").disabled = true;
	document.getElementById("menu2").disabled = true;
	document.getElementById("menu3").disabled = true;
	document.getElementById("menu4").disabled = true;
}

function enableButtons(){
	document.getElementById("menu1").disabled = false;
	document.getElementById("menu2").disabled = false;
	document.getElementById("menu3").disabled = false;
	document.getElementById("menu4").disabled = false;
}

function menuColors(){
	for(i=0; i<4; i++){
		for(var color of pokemon[0].moveset[i].type){
			for(var hex of colors[color]){
				if(pokemon[0].moveset[i].type.includes(color) == true){
					menuColor[i] = hex;
				}
			}
		}
	}
}
	
function healthUpdater1(){
	var elem = document.getElementById("pokemon1Current");
	var width = 100;
	var id = setInterval(frame, 1);
	var percent = (pokemon[0].currentHealth/pokemon[0].maxHealth)*100;
	function frame(){
		if(width <= percent) {
			clearInterval(id)
		}
		else {
			width = percent;
			elem.style.width = width + '%';
			if(width <= 50 && width > 20){
				elem.style.backgroundColor = 'gold';
			}
			if(width <= 20){
				elem.style.backgroundColor = 'red';
			}
			if(width < 0){
				elem.style.backgroundColor = 'white';
			}
			if(pokemon[0].currentHealth > 0){
			document.getElementById("pokemon1HPdisplay").innerHTML = pokemon[0].currentHealth + "/" + pokemon[0].maxHealth;
			}
			if(pokemon[1].currentHealth < 0){
			document.getElementById("pokemon1HPdisplay").innerHTML = "0/" + pokemon[0].maxHealth;
			}
		}
	}
}

function healthUpdater2(){
	var elem = document.getElementById("pokemon2Current");
	var width = 100;
	var id = setInterval(frame, 1);
	var percent = (pokemon[1].currentHealth/pokemon[1].maxHealth)*100;
	function frame(){
		if(width <= percent) {
			clearInterval(id)
			if(percent == 100){
				elem.style.backgroundColor = 'lightgreen';
				elem.style.width = 100 + '%';
			}
		}
		else {
			width = percent;
			elem.style.width = width + '%';
			if(width <= 50 && width > 20){
				elem.style.backgroundColor = 'gold';
			}
			if(width <= 20){
				elem.style.backgroundColor = 'red';
			}
			if(width < 0){
				elem.style.backgroundColor = 'white';
			}
			if(pokemon[1].currentHealth > 0){
			document.getElementById("pokemon2HPdisplay").innerHTML = pokemon[1].currentHealth + "/" + pokemon[1].maxHealth;
			}
			if(pokemon[1].currentHealth < 0){
			document.getElementById("pokemon2HPdisplay").innerHTML = "0/" + pokemon[1].maxHealth;	
			}
		}
	}
}

function attack(value){
	moveNum = parseInt(value);
	console.log(moveNum);
	pokeAttack();
}


function log(){
  console.log(pokemon[caller].name + " used " + pokemon[caller].moveset[moveNum].name + " which is a " + pokemon[caller].moveset[moveNum].type + " move on " + pokemon[target].name + " which is a " + pokemon[target].type + " pokeman");
}

function runAction(c, m){
	var fnstring = pokemon[c].moveset[m].action;
	var fn = window[fnstring];
	if(typeof fn === "function") fn.call(null, c, pokemon[c].moveset[m].actionValue);
}

function displayMsg(text){
	msgArray.push(text);
	var delay = setTimeout(update, 50);
}

function update(){
	var text = msgArray.pop();
	if(text != undefined){
		var item = document.createTextNode(text + "\r\n");
		box.appendChild(item)
	}
	box.scrollTop = box.scrollHeight;
}


function pokeAttack(){
	disableButtons()
	if(pokemon[1].currentHealth > 0){
		if(pokemon[0].moveset[moveNum].PP >=1){
			ppUpdate();
			accuracy = (Math.floor(Math.random()*100));
		    if(pokemon[0].moveset[moveNum].accuracy >= accuracy){
				caller = 0;
				target = 1;
				dmgTypeCalc();
				runAction(caller, moveNum);
				critikal();
				damage = Math.floor(((((((2*pokemon[caller].level)/5)+2)*(pokemon[caller].moveset[moveNum].power)*(pokemon[caller].stats[1]/pokemon[target].stats[2]))/50)+2)*mod*crit);
				console.log("the damage was " + damage)
				if(damage != 0){
					pokemon[1].currentHealth = pokemon[1].currentHealth - damage;	
					healthUpdater2();
					log();
					animate1();
					displayMsg("Your "+ pokemon[0].name + " used " + pokemon[0].moveset[moveNum].name + "!");
					var delay = setTimeout(function moveInfo(){
						if(crit > 1){
							displayMsg("Critical Hit")
						}
						if(typeEff == 2){
							displayMsg("It's super effective!")
						}
						if(typeEff == .5){
							displayMsg("It's not very effective...")
						}
					},100);
					turnOver = true;
				}
			} else {
				displayMsg(pokemon[0].name + "'s " +pokemon[0].moveset[moveNum].name + " missed!");
				turnOver = true;
			}
			if(pokemon[1].currentHealth < 0){
				displayMsg(pokemon[1].name + " fainted!");
				evCalc();
				expGain();
				turnOver = true;
			}
		} else {
			displayMsg("There is no PP left for this move.");
			enableButtons()
			turnOver = false;
		}
	}
	if(turnOver){
		var delay = setTimeout(aiAttack, 500);		
	}
}

function aiAttack(){
	accuracy = (Math.floor(Math.random()*100));
	moveNum = (Math.floor(Math.random()*4))
    if(pokemon[1].moveset[moveNum].accuracy >= accuracy){
		caller = 1;
		target = 0;
		dmgTypeCalc();
		runAction(caller, moveNum);
		critikal();
		damage = Math.floor(((((((2*pokemon[1].level)/5)+2)*(pokemon[1].moveset[moveNum].power*(pokemon[1].stats[1]/pokemon[0].stats[2])))/50)+2)*mod*crit);
		console.log("the damage was " + damage)
		if(damage == 0 || typeEff == 0){
			displayMsg(pokemon[1].moveset[moveNum].name + " has no effect on " + pokemon[0].name);
			turnOver = true;
		}
		else {
			pokemon[0].currentHealth = pokemon[0].currentHealth - damage;	
			healthUpdater1();
			log();
			animate2();			
			displayMsg("Enemy's " + pokemon[1].name + " used " + pokemon[1].moveset[0].name + "!");
			var delay = setTimeout(function moveInfo(){
				if(crit > 1){
					displayMsg("Critical Hit")
				}
				if(typeEff == 2){
					displayMsg("It's super effective!")
				}
				if(typeEff == .5){
					displayMsg("It's not very effective...")
				}
			},100);
			turnOver = true;
		}
	} else {
		displayMsg(pokemon[1].name + "'s " +pokemon[1].moveset[0].name + " missed!")
		turnOver = true;
	}
	if(pokemon[0].currentHealth < 0){
		displayMsg(pokemon[0].name + " fainted!");
		turnOver = true;
	}
	if(turnOver)
	enableButtons()
}

function critikal(){
	var threshold = pokemon[caller].stats[3]
	var prob = Math.floor(Math.random()*255);
	if(pokemon[caller].moveset[moveNum].type.includes("Normal") == false)
		if(prob <= threshold){
			crit = ((2*pokemon[caller].level) + 5) / (pokemon[caller].level + 5)
		}
		else crit = 1;
	else{
		if(prob <= (threshold/2)){
			crit = ((2*pokemon[caller].level) + 5) / (pokemon[caller].level + 5)
		}
		else crit = 1;
	}	
}

function dmgTypeCalc(){
	for(var type of pokemon[caller].moveset[moveNum].type){
		for(var weakness of weaknessTo[type]){
			if(pokemon[target].type.includes(weakness) == true){
				typeEff =2;
			}
		}
		for(var resistant of resistanceTo[type]){
			if(pokemon[target].type.includes(resistant) == true){
				typeEff = .5;
			}
		}
    	for(var immune of immuneTo[type]){
			if(pokemon[target].type.includes(immune) == true){
				typeEff = 0;
  				}
			}
				
		if(pokemon[caller].type.includes(type) == true){
			console.log("STAB bonus")
		STAB = 1.5;
		}	
	}
	mod = (Math.random()*(1-.85)+.85)*STAB*typeEff;
}
var weaknessTo = {
	"Normal": [],
	"Fighting": ["Normal","Rock","Ice","Dark"],
	"Flying": ["Grass","Fighting","Bug"],
	"Poison": ["Grass"],
	"Ground": ["Fire","Electric","Poison","Rock"],
	"Rock": ["Fire","Ice","Flying","Bug"],
	"Bug": ["Grass","Psychic","Dark","Fire"],
	"Ghost": ["Ghost","Psychic"],
	"Fire": ["Grass","Ice","Bug"],
	"Water": ["Fire","Ground","Rock"],
	"Grass": ["Water","Ground","Rock"],
	"Electric": ["Water","Flying"],
	"Psychic": ["Fighting","Poison"],
	"Ice": ["Grass","Ground","Flying","Dragon"],
	"Dragon": ["Dragon"],
	"Dark": ["Psychic","Ghost"],
}
var resistanceTo = {
	"Normal": ["Rock"],
	"Fighting": ["Flying","Poison","Bug","Psychic"],
	"Flying": ["Rock","Electric"],
	"Poison": ["Rock", "Poison", "Ground","Ghost"],
	"Ground": ["Grass","Bug"],
	"Rock": ["Fighting","Ground"],
	"Bug": ["Fire","Fighting","Poison","Flying","Ghost"],
	"Ghost": ["Dragon"],
	"Fire": ["Fire","Water","Rock","Dragon"],
	"Water": ["Water","Grass","Dragon"],
	"Grass": ["Grass","Fire","Poison","Fly","Bug","Dragon"],
	"Electric": ["Electric","Grass","Dragon"],
	"Psychic": ["Psychic"],
	"Ice": ["Fire","Water","Ice"],
	"Dragon": [],	
	"Dark": ["Fighting", "Dark"],
}

var immuneTo = {
	"Normal": ["Ghost"],
	"Fighting": [],
	"Flying": ["Ground"],
	"Poison": [],
	"Ground": ["Electric"],
	"Rock": [],
	"Bug": [],
	"Ghost": ["Normal", "Flying"],
	"Fire": [],
	"Water": [],
	"Grass": [],
	"Electric": ["Ground"],	
	"Psychic": ["Ghost"],
	"Ice": [],
	"Dragon": [],
	"Dark": [],
}
var colors =  {
	"Normal": ["#aaaa29"],
	"Fire": ["#ff4422"],
	"Water": ["#3399ff"],
	"Electric": ["#ffcc33"],
	"Grass": ["#77cc55"],
	"Ice": ["#66ccff"],
	"Fighting": ["#ba5544"],
	"Poison": ["#aa5599"],
	"Ground": ["#ddbb55"],	
	"Flying": ["#8899ff"],
	"Psychic": ["#ff5599"],
	"Bug": ["#aabb22"],
	"Rock": ["#bbaa66"],
	"Ghost": ["#6666bb"],
	"Dragon": ["#7766ee"],
	"Dark": ["#775544"]
}

function moveDelay(){
	
}
function modSpeed(){
	
}
function modAttack(){
	
}
function modAccuracy(){
	
}
function modDefense(){
	
}
function modSpecialAttack(){
	
}
function modSpecialDefense(){
	
}
function swapPokemon(){
	
}
function poison(c, value){
console.log(c, value) 
	
	//value 1 = okemon loses 1/16 Max HP every turn... 
	
	// value 2 = badly = 1/16++ every turn... cannot effect poison type pokemon
	
	//non volatile
	
}
function burn(){
	//pokemon loses 1/16 max hp every turn... cannot effect fire types
	
	//non volatile
	
}
function sleep(){
	
	//lasts for Math.floor(Math.random()*7) turns
	
	//non volatile
	
}
function confuse(){
	
	//volatile
	// 50% chance to hurt itself
	// damage 40 power typeless without crit
	// wears off after 1-4 turns
	// recharge moves or not able to attack (paralyzed) do NOT count as turns
	// checks on multi turn attacks
	
	
}
function paralyze(){
	
	//25% chance to not use move
	//reduces speed by 25%
	
	//non volatile
	
}
function freeze(){
	
	//non volatile
	
}
function flinch(){
	// only happens if it hits before pokemon uses its own move
	// prevents from attacking
}
function instant(){
	// value : 1 horn drill breaks substitute, also will not affect if target speed > caller speed
	
}
function recoil(){
	// value = % damage
	// if value = 1 damage = 1/4 max caller HP
}
function recharge(){
	
}
function counter(){
	
}
function flatDmg(){
	
}
function rage(){
	
}
function recover(){
	
}
function digDetect(){
	
}
function teleport(){
	
}
function mirror(){
	
}
function protect(){
	
}
function bide(){
	
}
function randomMove(){
	
}
function selfDestruct(){
	
}
function swift(){
	
}
function skullBash(){
	
}
function recoverSleep(){
	
}
function skyAttack(){
	
}
function rest(){
	
}
function trifecta(){
	burn();
	freeze();
	paralyze();
}
function substitute(){
	
}
function pinMissle(){
	
}
function repeat(){
	
}
function gamble(){
	
}
function sumo(){
	
}
function gust(){
	
}
function trap(){
	
	//37.5% chance 2 turns, 37.5% chance 3 turns, 12.5% 4 turns 12.5 chance 5 turns
	//each attack does the same damage
	
	
}
function leech(){
	
	// cannot effect grass types
	//damages 1/16 max hp heals for same amount
	
}
function petalDance(){
	
}
function statLock(){
	
}
function reset(){
	
}
function conversion(){
	
}
function disable(){
	
}
function growth(){
	
}
function splash(){
	
}
function struggle(){
	
}
function blank(){
	
}
function copy(){
	localStorage.removeItem("savedMoves");
	localStorage.removeItem("saveGame");
	pokemon[0] = pokemon[1]
	moveCalc();
	pokeDisplay();
}