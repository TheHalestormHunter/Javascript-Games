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

var MyPokemon;
var savedMoves;
var saveGame;

if(typeof(Storage) != null) { //Storage
  Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
  }
  Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
  }

  saveGame = localStorage.getItem("saveGame");
  if(saveGame == null) {
    saveGame = 0;
    localStorage.setItem("saveGame",0);
  }
  savedMoves = localStorage.getObj("savedMoves");
  if(savedMoves == null) {
  	savedMoves = [];
  	localStorage.setObj('savedMoves',savedMoves);
  }
  test = localStorage.getItem("test");
  if(test == null){
  	test = 0;
	localStorage.setItem("test", test);
  }
  MyPokemon = localStorage.getObj("MyPokemon");
  if(MyPokemon == null){
  	MyPokemon = {name: "Mew", type: ["Psychic"], col: 0, row: 6, level: 1, exp: 0, expYield: 64, expLvl: 0, expType: "Medium Slow", baseStats: [100,100,100,100,100,100], stats: [0,0,0,0,0,0], ev: [0,0,0,0,0], iv: [0,0,0,0,0], maxHealth: 100, currentHealth: 100, moveset: [], movesAvail: [HM01, HM02, HM03, HM04, HM05, TM01, TM02, TM03, TM04, TM05, TM06, TM07, TM08, TM09, TM10, TM11, TM12, TM13, TM14, TM15, TM16, TM17, TM18, TM19, TM20, TM21, TM22, TM23, TM24, TM25, TM26, TM27, TM28, TM29, TM30, TM31, TM32, TM33, TM34, TM35, TM36, TM37, TM38, TM39, TM40, TM41, TM42, TM43, TM44, TM45, TM46, TM47, TM48, TM49, TM50, pound, transform]}
	localStorage.setObj("MyPokemon", MyPokemon);
  }
}
var pokemon = [ {name: "Mewtwo", type: ["Psychic"], col: 24, row: 5, level: 1, exp: 0, expYield: 220, expLvl: 0, expType: "Slowest", baseStats: [106,110,90,130,154,154], stats: [0,0,0,0,0,0], ev: [0,0,0,0,0], iv: [0,0,0,0,0], maxHealth: 106, currentHealth: 106, moveset: [], movesAvail: [HM04, HM05, TM01, TM05, TM06, TM08, TM09, TM10, TM11, TM12, TM13, TM14, TM15, TM16, TM17, TM18, TM19, TM20, TM22, TM24, TM25, TM29, TM30, TM31, TM32, TM33, TM34, TM35, TM36, TM38, TM40, TM44, TM45, TM46, TM49, TM50, confusion, disable, barrier, recover, mist, amnesia]},
				{name: "Mew", type: ["Psychic"], col: 0, row: 6, level: 1, exp: 0, expYield: 64, expLvl: 0, expType: "Medium Slow", baseStats: [100,100,100,100,100,100], stats: [0,0,0,0,0,0], ev: [0,0,0,0,0], iv: [0,0,0,0,0], maxHealth: 100, currentHealth: 100, moveset: [], movesAvail: [HM01, HM02, HM03, HM04, HM05, TM01, TM02, TM03, TM04, TM05, TM06, TM07, TM08, TM09, TM10, TM11, TM12, TM13, TM14, TM15, TM16, TM17, TM18, TM19, TM20, TM21, TM22, TM23, TM24, TM25, TM26, TM27, TM28, TM29, TM30, TM31, TM32, TM33, TM34, TM35, TM36, TM37, TM38, TM39, TM40, TM41, TM42, TM43, TM44, TM45, TM46, TM47, TM48, TM49, TM50, pound, transform]}
				];


var earnedXP = 0;
var caller;
var target;

var PPM = [];
var menuColor =[];
var msgArray = [];
var text = "";
var gain;
var crit = 1;
var id1 = Math.floor(Math.random()* 151)
var	id2 = test;
	//= Math.floor(Math.random() * 151);

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

var can = document.getElementById("pokePlace1");
var canv = document.getElementById("pokePlace2");
var box = document.getElementById("desc");
var other = document.getElementById("other");
var save = document.getElementById("save");
var button = document.getElementById("reset");

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
	pokemon[1] = pokeList[id2];
	ivCalc(pokemon[1])
	moveCalc(pokemon[1])
	pokemon[0].level = 50;
	expCalc(pokemon[1])
	evCalc(pokemon[1])
	pokeStats(pokemon[1])
}

function pokemonPicker(){
	if(saveGame == 0){
		pokemonId();
		ivCalc(pokemon[0]);
		ivCalc(pokemon[1]);
		moveCalc(pokemon[0]);
		moveCalc(pokemon[1]);
		
		pokemon[0].level = 50;
		pokemon[1].level = 50;

		expCalc(pokemon[0]);
		expCalc(pokemon[1]);
		evCalc(pokemon[0]);
		evCalc(pokemon[1]);
		pokeStats(pokemon[0]);
		pokeStats(pokemon[1]);
		console.log("No saved game")
	} else {
		retrieve();
		console.log("Loading saved game")
	}
	pokeDisplay();
}

function pokemonId(){	
	pokemon[0] = pokeList[id1];
	pokemon[1] = pokeList[id2];	
}

function ivCalc(pokem){
	for(i=1; i<=4; i++){
		pokem.iv[i] = Math.floor(Math.random()*15);
	}
	//converts 4 iv values into a binary type value by getting remainder divided by 2 then multiplying based on location in array compared to regular binary string to health iv. 
	pokem.iv[0] = ((8*(pokem.iv[1]%2)) + (4*(pokem.iv[2]%2)) + (2*(pokem.iv[3]%2)) + (pokem.iv[4]%2));
	
}

function moveCalc(pokem){
	while(pokem.moveset.length != 4){
		pokem.moveset.push(pokem.movesAvail[Math.floor(Math.random()*pokem.movesAvail.length)]);
		pokem.moveset = shuffle(pokem.moveset);
		pokem.moveset = removeDup(pokem.moveset);
		pokem.moveset.sort(function(a, b) {
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


function pokeStats(pokem){	
	pokem.stats[0] = Math.floor(((pokem.baseStats[0] + pokem.iv[0])*2 + ((Math.sqrt(pokem.ev[0])/4)*pokem.level)/100) + pokem.level + 10);
	pokem.maxHealth = pokem.stats[0]
	pokem.currentHealth = pokem.maxHealth;
	for(i=1; i<=4; i++){
		pokem.stats[i] = Math.floor(((pokem.baseStats[i] + pokem.iv[i])*2 + ((Math.sqrt(pokem.ev[i])/4)*pokem.level)/100) + 5);
	}
	pokem.stats[5] = pokem.stats[4];
	
	// Health = (((Base stat + IV)*2+(SqRt(EV)/4)*level)/100) + level + 10
	//Calculate Health IV = The HP IV is calculated by taking the least significant bit (the final binary digit) of the Attack, Defense, Speed, and Special IVs, then creating a binary string by placing them in that order. As such, a Pokémon with an odd-number Attack IV has 8 added to its HP IV, an odd-number Defense IV has 4 added, an odd-number Speed IV has 2 added, and an odd-number Special IV has 1 added.
	//IV = Math.random()*15 % 2 ==== 8(At iv mod 2) + 4(def iv mod 2) + 2(speed iv mod 2) + 1(spec iv mod 2)
	//EV = when pokemon is defeated, add stats to ev. to max of 65535 for each stat
	//When a Pokémon grows a level, its stats will increase. For each level gained (ignoring Nature), stats will increase by 1/50 the base stat value, and 1/100 the combined individual value and effort value.
}



function evCalc(pokem){
	var temp = Math.ceil(expSoFar/64)
	for(i=0; i<5; i++){
		pokem.ev[i] = temp*100;
		if(pokem.ev[i] > 65335){
			pokem.ev[i] = 65335;
		}
	}
}

function evAdd(){
	for(i=0; i<5; i++){
		pokemon[0].ev[i] = pokemon[0].ev[i] + pokemon[1].ev[i];
		if(pokemon[0].ev[i] > 65335){
			pokemon[0].ev[i] = 65335;
		}
	}
}

function expCalc(pokem){
	
	var lvlCubed = Math.pow(pokem.level, 3)
	var mewsBeat = Math.pow((pokem.level-1), 3)
	
	if(pokem.expType.includes("Fastest") == true){
		pokem.expLvl = Math.abs((4*lvlCubed) / 5);
		expSoFar = Math.abs((4*mewsBeat) / 5);
		// next level exp = 4n^3 / 5
	}
	else if(pokem.expType.includes("Medium Fast") == true){
		pokem.expLvl = Math.abs(lvlCubed);
		expSoFar = Math.abs(mewsBeat);
		// n^3
	}
	else if(pokem.expType.includes("Medium Slow") == true){
		pokem.expLvl = Math.abs(((6/5)*lvlCubed) - (15*(Math.pow(pokem.level, 2))) + (100*pokem.level) - 140);
		expSoFar = Math.abs(((6/5)*mewsBeat) - (15*(Math.pow(mewsBeat, 2))) + (100*pokem.level) - 140);
		//  5/6n^3 - 15n^2 + 100n - 140
	}
	else if(pokem.expType.includes("Slowest") == true){
		pokem.expLvl = Math.abs((5*lvlCubed) / 4);
		expSoFar = Math.abs((5*mewsBeat) / 4);
		// 5n^3/4
	}
}

function expGain(){
	gain = (pokemon[1].level * pokemon[1].expYield)
	pokemon[0].exp = (pokemon[0].exp + gain);
	displayMsg(pokemon[0].name + " earned " + gain + "xp Points!")
	localStorage.setItem("xp", pokemon[0].exp)
	expUpdater();
	
}

function newPokemon(){
	id2 = Math.floor(Math.random()*151)
	pokemon[1] = pokeList[id2];
	pokemon[1].level = 50;
	pokemon[1].currentHealth = pokemon[1].maxHealth;

	ivCalc(pokemon[1])
	moveCalc(pokemon[1])
	expCalc(pokemon[1])
	evCalc(pokemon[1])
	pokeStats(pokemon[1])
	
	healthUpdater2();
	srcX2 = pokemon[1].col * w;
	srcY2 = pokemon[1].row * h;
	c2.clearRect(x,y,w,h)
	c2.drawImage(pokeFront, srcX2, srcY2, w, h, x, y, w, h);
	
	enableButtons();
	pokeDisplay();
	
	other.disabled = false;
	save.disabled = false;
	button.innerHTML = "Reset Game"
	button.onclick = clearSave;
}

function expUpdater(){
	//pokemon[0].exp = parseInt(xp)
	var experience = document.getElementById("exp1");
    var width = 1;
    var id = setInterval(frame, 10);
	var percent = (pokemon[0].exp/pokemon[0].expLvl)*100
    function frame() {
        if (width >= percent) {
            clearInterval(id);
        } else {
            width = percent; 
            experience.style.width = width + '%'; 
			if(width >= 100){
				pokemon[0].level = pokemon[0].level++;
				pokemon[0].exp = 0;
				document.getElementById("pokemon1Level").innerHTML = "Lvl." + pokemon[0].level;
			}
        }
    }
}



function draw(){
	render()
	c1.drawImage(pokeBack, srcX, srcY, w, h, x, y, w, h);
	c2.drawImage(pokeFront, srcX2, srcY2, w, h, x, y, w, h);
	
	var typing;
	var typing2;
	
	if(pokemon[0].type[1] == undefined){
		typing = pokemon[0].type
	} else {
		typing = pokemon[0].type[0] + ", " + pokemon[0].type[1];
	}
	if(pokemon[1].type[1] == undefined){
		typing2 = pokemon[1].type
	} else {
		typing2 = pokemon[1].type[0] + ", " + pokemon[1].type[1];
	}
	can.title = typing + "\nHP: " + pokemon[0].stats[0] + "\nATK: " + pokemon[0].stats[1] + "\nDEF: " + pokemon[0].stats[2] + "\nSP: " + pokemon[0].stats[3];
	canv.title = typing2 + "\nHP: " + pokemon[1].stats[0] + "\nATK: " + pokemon[1].stats[1] + "\nDEF: " + pokemon[1].stats[2] + "\nSP: " + pokemon[1].stats[3];
		
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
			if(pokemon[0].currentHealth < 0){
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
	pokeAttack();
}

function fainted(){
	disableButtons();
	other.disabled = true;
	save.disabled = true;
	button.innerHTML = "New Pokemon"
	button.onclick = newPokemon;
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
	var delay = setTimeout(update, 100);
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
				displayMsg("Your "+ pokemon[0].name + " used " + pokemon[0].moveset[moveNum].name + "!");
				dmgTypeCalc();
				runAction(caller, moveNum);
				critikal();
				damage = Math.floor(((((((2*pokemon[caller].level)/5)+2)*(pokemon[caller].moveset[moveNum].power)*(pokemon[caller].stats[1]/pokemon[target].stats[2]))/50)+2)*mod*crit);
				console.log("the damage was " + damage)
				if(damage == 0 || typeEff == 0){
					var delay = setTimeout(function fail(){
					displayMsg("But, it failed!");
					},100);
					turnOver = true;
				} else {
					pokemon[1].currentHealth = pokemon[1].currentHealth - damage;	
					healthUpdater2();
					log();
					animate1();
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
			if(pokemon[1].currentHealth <= 0){
				var delay = setTimeout(function faint(){
				displayMsg(pokemon[1].name + " fainted!");
				evAdd();
				expGain();
				},500);
				fainted();
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
	if(pokemon[1].currentHealth <= 0){
		fainted()
	} else{
		accuracy = (Math.floor(Math.random()*100));
		moveNum = (Math.floor(Math.random()*4))
	    if(pokemon[1].moveset[moveNum].accuracy >= accuracy){
			caller = 1;
			target = 0;
			displayMsg("Enemy " + pokemon[1].name + " used " + pokemon[1].moveset[0].name + "!");
			dmgTypeCalc();
			runAction(caller, moveNum);
			critikal();
			damage = Math.floor(((((((2*pokemon[1].level)/5)+2)*(pokemon[1].moveset[moveNum].power*(pokemon[1].stats[1]/pokemon[0].stats[2])))/50)+2)*mod*crit);
			console.log("the damage was " + damage)
			if(damage == 0 || typeEff == 0){
					var delay = setTimeout(function fail(){
					displayMsg("But, it failed!");
					},100);
					turnOver = true;
			} else {
				pokemon[0].currentHealth = pokemon[0].currentHealth - damage;	
				healthUpdater1();
				log();
				animate2();			
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
			displayMsg("Enemy's " + pokemon[1].name + "'s " + pokemon[1].moveset[0].name + " missed!")
			turnOver = true;
		}
		if(pokemon[0].currentHealth <= 0){
			displayMsg(pokemon[0].name + " fainted!");
			turnOver = true;
		}
		if(turnOver)
		enableButtons()
	}
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
				typeEff = 2;
			} else typeEff = 1;
		}
		for(var resistant of resistanceTo[type]){
			if(pokemon[target].type.includes(resistant) == true){
				typeEff = .5;
			} else typeEff = 1;
		}
    	for(var immune of immuneTo[type]){
			if(pokemon[target].type.includes(immune) == true){
				typeEff = 0;
			} else typeEff = 1;
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
}