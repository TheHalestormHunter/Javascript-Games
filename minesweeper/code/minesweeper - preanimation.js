var difficulty;
var color;
var gamesWon;
var gamesLost;
var gamesPlayed; 
var timesReset;
var highScores;
var oldScores;
var benCounter;
var popOut;
var popWindow;
var oneScore;
var twoScore;
var threeScore;
var totalGames;
var customW;
var customH;
var customM;
var customP;
var customX;
var solitaire;

if(typeof(Storage) != null) { //Storage
  Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
  }
  Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
  }
  difficulty = localStorage.getItem("difficulty");
  if(difficulty == null) {
    difficulty = 1;
    localStorage.setItem("difficulty",1);
  }
  color = localStorage.getItem("color");
  if(color == null) {
    color = 1;
    localStorage.setItem("color",1);
  }
  benCounter = localStorage.getItem("benCounter");
  if(benCounter == null) {
    benCounter = 0;
    localStorage.setItem("benCounter",0);
  }
  popOut = localStorage.getItem("popOut");
  if(popOut == null) {
    popOut = 0;
    localStorage.setItem("popOut",0);
  }
  totalGames = localStorage.getItem("totalGames");
  if(totalGames == null) {
    totalGames = 0;
    localStorage.setItem("totalGames",0);
  }
  customW = localStorage.getItem("customW");
  if(customW == null) {
    customW = 0;
    localStorage.setItem("customW",0);
  }
  customH = localStorage.getItem("customH");
  if(customH == null) {
    customH = 0;
    localStorage.setItem("customH",0);
  }
  customM = localStorage.getItem("customM");
  if(customM == null) {
    customM = 0;
    localStorage.setItem("customM",0);
  }
  customP = localStorage.getItem("customP");
  if(customP == null) {
    customP = 0;
    localStorage.setItem("customP",0);
  }
  customX = localStorage.getItem("customX");
  if(customX == null) {
    customX = 0;
    localStorage.setItem("customX",0);
  }
  customGame = localStorage.getItem("customGame");
  if(customGame == null) {
    customGame = 0;
    localStorage.setItem("customGame",0);
  }
  solitaire = localStorage.getItem("solitaire");
  if(solitaire == null) {
    solitaire = "true";
    localStorage.setItem("solitaire","true");
  }
  highScores = localStorage.getObj("highScores");
  if(highScores == null) {
  highScores = [[999,999,999],[999,999,999],[999,999,999],[999,999,999]];
  localStorage.setObj('highScores',highScores);
  }
  oldScores = localStorage.getObj("oldScores");
  if(oldScores == null) {
  oldScores = [999,999,999];
  localStorage.setObj('oldScores',oldScores);
  }
  gamesWon = localStorage.getObj("gamesWon");
  if(gamesWon == null) {
  gamesWon = [[0],[0],[0],[0]];
  localStorage.setObj('gamesWon',gamesWon);
  }
  gamesLost = localStorage.getObj("gamesLost");
  if(gamesLost == null) {
  gamesLost = [[0],[0],[0],[0]];
  localStorage.setObj('gamesLost',gamesLost);
  }
  gamesPlayed = localStorage.getObj("gamesPlayed");
  if(gamesPlayed == null) {
  gamesPlayed = [[0,0],[0,0],[0,0],[0,0]];
  localStorage.setObj('gamesPlayed',gamesPlayed);
  } 
} else { // no local storage available
    customW = 0;
    customH = 0;
    customP = 0;
    customM = 0;
    customX = 0;
    customGame = 0;
    difficulty = 1;
    color = 1;
    benCounter = 0;
    popOut = 0;
    totalGames = 0;
    oldScores = [0,0,0];
    gamesWon = [[0],[0],[0],[0]];
    gamesLost = [[0],[0],[0],[0]];
    gamesPlayed = [[0,0],[0,0],[0,0],[0,0]];
    highScores = [[999,999,999],[999,999,999],[999,999,999],[999,999,999]];
}
//if custom game is set but not active run custom to get values
if(difficulty == 3 && customGame == 0) {
  custom();
}
//for custom or non custom variables
if(difficulty !=3) {
  var boardWidth = [9,16,31][difficulty];
  var boardHeight = [9,16,16][difficulty];
  var numMines = [10,40,99][difficulty];
  var boardSize = boardWidth*boardHeight;
  var facePosition = [9,78,238][difficulty];
  var xPosition = [181,321,620][difficulty];
} else {
  var boardWidth = parseInt(customW);
  var boardHeight = parseInt(customH);
  var boardSize = parseInt(customW)*parseInt(customH);
  var numMines = parseInt(customM);
  customP = (customW*10) - 57;
  if(customP < 57) customP = 3;
  customX = (customW*20);
  var facePosition = customP;
  var xPosition = customX;
}
//static variables
var xPos = 49.5;
var yPos = 154.5;
var spreadX = 0;
var spreadY = 0;
var mineCards = numMines;
var numFlags = 0;
var currentTime = 0;
var spaceDifficulty = parseInt(difficulty) + 1;
var oneScore = highScores[difficulty][0].toString().padStart(3,"0");
var twoScore = highScores[difficulty][1].toString().padStart(3,"0");
var threeScore = highScores[difficulty][2].toString().padStart(3,"0");
var spaceWin = gamesWon[difficulty].toString().padStart(3,"0");
var spaceLoss = gamesLost[difficulty].toString().padStart(3,"0"); 
solitaire = JSON.parse(solitaire);

var mineArray = new Array(boardSize);
mineArray.fill(0);

var checked = new Array(boardSize);
checked.fill(0);

var firstClick = true;
var stopCounting = false;
var currentCounterID;
var gameOn = true;
var gamePause = false;
var cheater = false;
var lost = false;

function neighborsOf(arrayID) {
  output = [];
  //row above, left to right
  if(arrayID >= boardWidth) {
    if(arrayID%boardWidth != 0) output.push(arrayID-boardWidth-1);
    output.push(arrayID-boardWidth);
    if((arrayID+1)%boardWidth != 0) output.push(arrayID-boardWidth+1);
  }
  //current row, left then right
  if(arrayID%boardWidth != 0) output.push(arrayID-1);
  if((arrayID+1)%boardWidth != 0) output.push(arrayID+1);
  //row below, left to right
  if(arrayID < boardWidth*(boardHeight-1)) {
    if(arrayID%boardWidth != 0) output.push(arrayID+boardWidth-1);
    output.push(arrayID+boardWidth);
    if((arrayID+1)%boardWidth != 0) output.push(arrayID+boardWidth+1);
  }
  return output;
}

function randomizeBoard(mineId) {
  //console.log("Randomizing board");
  var randNumber;
  var neighbors = neighborsOf(mineId);
  neighbors.push(mineId);
  while(mineArray.reduce(function f(x,y){return x+y}) < numMines) {
    randNumber = Math.trunc(boardSize*Math.random());
    if(!mineArray[randNumber] && neighbors.indexOf(randNumber) == -1) mineArray[randNumber]=1;
  }
}

function onLoad() {
  window.oncontextmenu = function() {return false}; //disable right-click menu
  window.onblur = function(e){ //pause on loss of focus
    if(gameOn){
      gamePause = true;
      document.getElementById("f0").src = "resources/face/clock.png";
      document.getElementById("sFace").src = "resources/face/space/paused.png";
      document.getElementById("sMsg").src = "resources/Space Cadet/Paused.png";
      document.getElementById("wins").src = "resources/Space Cadet/Games Won.png";
      document.getElementById("loss").src = "resources/Space Cadet/Games Lost.png";
      spaceWin = gamesWon[difficulty].toString().padStart(3,"0");
      spaceLoss = gamesLost[difficulty].toString().padStart(3,"0"); 
      for(var i=0; i<3; i++) document.getElementById("wc" + i).src = "resources/counter/Space/" + spaceWin[i] + ".png";
      for(var i=0; i<3; i++) document.getElementById("lc" + i).src = "resources/counter/Space/" + spaceLoss[i] + ".png";
      stopCounting = stopCounting? false:true;
      for(var i=0; i<boardSize; i++)
        document.getElementById(i).src = "resources/tiles/"+"PAUSED000"[i%9]+".png";
    }
  };
  window.onkeydown = function(e) { //key press indicators
    switch(e.key) {
      case "1": localStorage.setItem("difficulty",0); location.reload(); break;
      case "2": localStorage.setItem("difficulty",1); location.reload(); break;
      case "3": localStorage.setItem("difficulty",2); location.reload(); break;
      case "4": custom(); break;
      case "r": gameLost(); location.reload(); break;
      case "c": changeColor(); break;
      case "b": ben(); break;
      case "p": 
        if(gameOn){
          gamePause = false;
          document.getElementById("f0").src = "resources/face/smile.png";
          document.getElementById("sFace").src = "resources/face/space/face.png";
          stopCounting = stopCounting? false:true;
            if(!stopCounting){
              updateTimer();
              for(var i=0; i<boardSize; i++){
                 var mineButton = document.getElementById(i);
                 if(mineButton.className == "unrevealed"){
                   if(mineButton.flagged){
                   mineButton.src = "resources/tiles/flag.png";
                   } else mineButton.src = "resources/tiles/blank.png";
                 } else mineButton.src = "resources/tiles/"+mineButton.className+".png";
              }
            } else {
              gamePause = true;
              clearTimeout(currentCounterID);
              document.getElementById("f0").src = "resources/face/clock.png";
              document.getElementById("sFace").src = "resources/face/space/paused.png";
              for(var i=0; i<boardSize; i++)
                document.getElementById(i).src = "resources/tiles/"+"PAUSED000"[i%9]+".png";
          } break;
        }
      }
    }
  //document layout for displays
  for(var i=0; i<3; i++) document.getElementById("t" + i).src = "resources/counter/" + color + "/0.png";
  for(var i=0; i<3; i++) document.getElementById("st" + i).src = "resources/counter/Space/0.png";
  for(var i=0; i<3; i++) document.getElementById("ssZ" + i).src = "resources/counter/Space/" + oneScore[i] + ".png";
  for(var i=0; i<3; i++) document.getElementById("ssO" + i).src = "resources/counter/Space/" + twoScore[i] + ".png";
  for(var i=0; i<3; i++) document.getElementById("ssT" + i).src = "resources/counter/Space/" + threeScore[i] + ".png";
  document.getElementById("sMsg").src = "resources/Space Cadet/Awaiting Deployment.png";
  divMineButtons = document.getElementById("mineButtons");
  document.getElementById("ex").style["left"] = xPosition + "px";
  document.body.style.backgroundImage = "url('resources/border/"+ (difficulty) + ".png')";
  document.getElementById("sD").src = "resources/counter/Space/"  + spaceDifficulty + ".png"
  document.getElementById("gameBody").style.width = boardWidth * 20 + 222;
  document.getElementById("face").style["padding-left"] = facePosition + "px";
  document.addEventListener("dragstart", function(e) { //prevents images from being dragged
    if(!stopCounting){
      if(e.target.flagged == 1){
        e.target.src = "resources/tiles/flag.png";
      } else {
          if(gamePause) {
            document.getElementById("f0").src = "resources/face/clock.png";
            document.getElementById("sFace").src = "resources/face/space/paused.png";
          }
          if(!gamePause) {
            document.getElementById("f0").src = "resources/face/smile.png";
            document.getElementById("sFace").src = "resources/face/space/face.png";
          }
        if(e.target.className == "unrevealed") e.target.src = "resources/tiles/blank.png";
        }
      }
    });
  var newButton, mineId; //creates a new element for each tile
  document.body.appendChild(document.createElement("br"));
  for(var i=0; i<boardHeight; i++) {
    for(var j=0; j<boardWidth; j++) {
      newButton = document.createElement("img");
      newButton.src = "resources/tiles/blank.png";
      newButton.flagged = 0;
      newButton.draggable = "true";
      mineId = i*boardWidth+j;
      newButton.id = mineId;
      newButton.className = "unrevealed";
      document.body.onmousedown = function(e) { if (e.button === 1) return false; }
      newButton.onmousedown = function(e) { 
       if(gameOn)
        if(!stopCounting)
          switch(e.which) {
            case 1: if(e.target.className=="unrevealed" && e.target.flagged == 0) {e.target.src = "resources/tiles/depressed.png"; document.getElementById("f0").src = "resources/face/O.png"; document.getElementById("sFace").src = "resources/face/space/O.png";} break;
            case 2: var neighbors = neighborsOf(parseInt(e.target.id)); neighbors.push(e.target.id);
              for(var i=0; i<neighbors.length; i++){
                neighbor = document.getElementById(neighbors[i]);
                if(neighbor.className =="unrevealed" && neighbor.flagged == 0) {neighbor.src = "resources/tiles/depressed.png"; document.getElementById("f0").src = "resources/face/O.png"; document.getElementById("sFace").src = "resources/face/space/O.png";}} break;
            case 3: break;         
          }
      }
      newButton.onmouseup = function(e) {  //change face when on mouseup
        if(gamePause) {
          document.getElementById("f0").src = "resources/face/clock.png";
          document.getElementById("sFace").src = "resources/face/space/paused.png";
        }
        if(!gamePause) {
          document.getElementById("f0").src = "resources/face/smile.png";
          document.getElementById("sFace").src = "resources/face/space/face.png";
        }
        if(!gameOn) { 
          document.getElementById("f0").src = "resources/face/lose.png";
          document.getElementById("sFace").src = "resources/face/space/paused.png";
        }
        if(gameOn)
        if(!stopCounting) //checks tile
          switch(e.which) {
            case 1: if(e.target.className=="unrevealed") {check(e.target, 0)} else {check(e.target, -1)}; break;
            case 2: 
          var neighbors = neighborsOf(parseInt(e.target.id));
  neighbors.push(e.target.id);
                  for(var i=0; i<neighbors.length; i++){
                    var neighbor = document.getElementById(neighbors[i]);
                    if(neighbor.className == "unrevealed" && neighbor.flagged == 0)
      neighbor.src = "resources/tiles/blank.png";
  }
  check(e.target, -1);
  break;
            case 3:
              if(!checked[e.target.id]) {
                e.target.src = e.target.flagged ? "resources/tiles/blank.png" : "resources/tiles/flag.png";
                e.target.flagged = e.target.flagged ? 0 : 1;
                numFlags += e.target.flagged ? 1 : -1;
                updateMinesLeft();
              } break;
           }
      }
      newButton.onmouseleave = function(e) { //prevents tiles from staying depressed after mouse move
   
      if(e.which == 2){
            var neighbors = neighborsOf(parseInt(e.target.id)); neighbors.push(e.target.id);
            document.getElementById("f0").src = "resources/face/smile.png";
            document.getElementById("sFace").src = "resources/face/space/face.png";
            for(var i=0; i<neighbors.length; i++){
              neighbor = document.getElementById(neighbors[i]);
              if(neighbor.className == "unrevealed") {neighbor.src = "resources/tiles/blank.png";}
              if(neighbor.flagged) neighbor.src = "resources/tiles/flag.png";
             }
          }
      }
      newButton.onmouseenter = function(e) { //raises tiles on enter when holding middle mouse move
 
  if(e.which == 2){
          var neighbors = neighborsOf(parseInt(e.target.id)); neighbors.push(e.target.id);
          document.getElementById("f0").src = "resources/face/O.png";
          document.getElementById("sFace").src = "resources/face/space/O.png";
          for(var i=0; i<neighbors.length; i++){
            neighbor = document.getElementById(neighbors[i]);
            if(neighbor.className == "unrevealed") {neighbor.src = "resources/tiles/depressed.png";}
            if(neighbor.flagged) neighbor.src = "resources/tiles/flag.png";
          }
        }
      }
      divMineButtons.appendChild(newButton);
    }
    divMineButtons.appendChild(document.createElement("br"));
  }

  updateMinesLeft();
}

function sumMines(mineId) {
  var sum = 0;
  var neighbors = neighborsOf(mineId);
  for(var i=0; i<neighbors.length; i++)
    sum += mineArray[neighbors[i]];
  return sum;
}

function check(mineButton, depth) {
  var mineId = parseInt(mineButton.id);

  if(mineButton.flagged) return; //flagged mine protection

  if(firstClick && depth==0 && !gamePause) {
    //console.log("First click!");
    randomizeBoard(mineId);
    updateTimer();
    firstClick = false;
    document.getElementById("sMsg").src = "resources/Space Cadet/blank.png";
  }

  if(depth<0) { //middle click or click on revealed square
    var neighbors = neighborsOf(mineId);
    var flags = 0;
    for(var i=0; i<neighbors.length; i++)
      flags += (document.getElementById(neighbors[i]).flagged);
    if(flags == mineButton.className) //check if number of flags equals sum of mines
      for(var i=0; i<neighbors.length; i++)
         check(document.getElementById(neighbors[i]), 0);
    return;
  }

  if(checked[mineId])
    return;
  checked[mineId]++;
  if(mineArray[mineId]) {
    if(!cheater){
      if(depth == 0) {
      gameOn = false;
      gameLost();
      showMines(false);
      mineButton.src = "resources/tiles/triggered.png";
    }
  }
    return;
  } else if(!mineArray[mineId]){
    var numMines = sumMines(mineId);
    var neighbors = neighborsOf(mineId);
    if(numMines == 0) 
      for(var i=0; i<neighbors.length; i++)
        check(document.getElementById(neighbors[i]), depth+1);
    mineButton.src = "resources/tiles/"+numMines+".png";
    mineButton.className = numMines; //this line is to help middle click logic
    checkWin();
    return;
  }
}

function ben(){ //instawin. helps test wins. change cheater = false to use to win game 
  if(gameOn){
  cheater = true;
  showMines(true);
    for(var i=0; i<boardSize; i++) {
      var boardSpaces = document.getElementById(i);
      boardSpaces.src = "resources/tiles/"+boardSpaces.className+".png";
      if(boardSpaces.className=="unrevealed") {check(boardSpaces, 1)};  
      if(boardSpaces.flagged) return; //flag protection
      if(boardSpaces.className=="unrevealed") {check(boardSpaces, 1)};  
}
   benCounter++;
   localStorage.setItem("benCounter", benCounter);
   console.log("Ben has been special summoned to complete the game.");
   console.log("Ben has been summoned " + benCounter + " times.");
}
}

function showMines(winner) {
  for(var i=0; i<boardSize; i++) {
    var mineButton = document.getElementById(i);
    if(mineArray[i]) {
  if(winner) {
        mineButton.src = "resources/tiles/flag.png";
        document.getElementById("f0").src = "resources/face/win.png"
        document.getElementById("sFace").src = "resources/face/space/win.png";
  } else {
  document.getElementById("f0").src = "resources/face/lose.png"
  document.getElementById("sFace").src = "resources/face/space/lose.png";
  mineButton.src = mineButton.flagged ? "resources/tiles/flag.png" : "resources/tiles/bomb.png";
 }
} else if(!winner && mineButton.flagged) { //display the bomb you misflagged 
    mineButton.src = "resources/tiles/miss.png";
    document.getElementById("f0").src = "resources/face/lose.png"
    document.getElementById("sFace").src = "resources/face/space/lose.png";
    }
  }
  clearTimeout(currentCounterID);
  numFlags = winner?numMines:numFlags;
  updateMinesLeft();
  stopCounting = true;
  if(winner) gameWon();
  if(gameOn){ //if you are not cheater you can update the highscore
    if(!cheater){
      updateHighScore();
      gameOn = false;
    }
  }
  gameOn = false;
}
function updateMinesLeft() {
  var minesLeft = (numMines - numFlags).toString();
  if(minesLeft[0] == "-" && minesLeft.length==2) minesLeft = "-0" + minesLeft[1];
  if(parseInt(minesLeft) < -99) minesLeft = "-99";
  while(minesLeft.length < 3) minesLeft = "0" + minesLeft
  for(var i=0; i<3; i++) document.getElementById("m" + i).src = "resources/counter/" + color + "/" + minesLeft[i] + ".png";
  for(var i=0; i<3; i++) document.getElementById("s" + i).src = "resources/counter/Space/"  + minesLeft[i] + ".png";

}

function updateTimer() {
  if(gameOn)
  if(currentTime > 999) {
    currentTime = 999;
  } else if(!stopCounting) {
    currentCounterID = setTimeout(updateTimer, 1000);
    currentTime++;
  }
  currentTime = currentTime.toString();
  while(currentTime.length < 3) currentTime = "0" + currentTime;
  for(var i=0; i<3; i++) document.getElementById("t" + i).src = "resources/counter/" + color + "/" + currentTime[i] + ".png";
  for(var i=0; i<3; i++) document.getElementById("st" + i).src = "resources/counter/Space/" + currentTime[i] + ".png";

}

function checkWin() {
  sumUnrevealed = 0;
  for(var i=0; i<boardSize; i++)
    sumUnrevealed += (document.getElementById(i).className == "unrevealed");
  if(sumUnrevealed == numMines)
    showMines(true); //flag all the mines & stop the clock
}

function pause(){ 
  console.log(gamePause);
  if(!gameOn) {
  location.reload();
  }
   else if(gameOn && !gamePause) {
    location.reload();
    gameLost();
  } else {
      if(!firstClick){
        gamePause = false;
        document.getElementById("f0").src = "resources/face/smile.png";
        document.getElementById("sFace").src = "resources/face/space/face.png";
        stopCounting = stopCounting? false:true;
        if(!stopCounting){
          clearTimeout(currentCounterID)
          updateTimer();
          for(var i=0; i<boardSize; i++){
            var mineButton = document.getElementById(i);
            if(mineButton.className == "unrevealed"){
              if(mineButton.flagged){
                mineButton.src = "resources/tiles/flag.png";
              } else mineButton.src = "resources/tiles/blank.png";
            } else mineButton.src = "resources/tiles/"+mineButton.className+".png";
          }
        }
      } else location.reload();
    }
}

function changeColor(){
  if(color == 1) {
    localStorage.setItem("color",2);
    location.reload();
  } else if (color == 2){
      localStorage.setItem("color",3);
      location.reload();
  } else if (color == 3){
      localStorage.setItem("color",1);
      location.reload();
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

//Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }  
  else if (!e.target.matches('.dropbtn2')) {
    var myDropdown = document.getElementById("myDropdown2");
      if (myDropdown2.classList.contains('show')) {
        myDropdown2.classList.remove('show');
      }
  }
}
//emergency escape
function exit() {
  window.location.assign("https://css.taxact.com/")
}
//change difficulty
function diff0() {
  localStorage.setItem("difficulty",0); 
  parseInt(popOut);
  if(popOut == 1) {
    popWindow = window.open("//mhvfs01/TechSupport/Professional Support/Travis/archive/minesweeper/minesweeper popout.html", " ", "resizable=1, titlebar=0, status=0, menubar=0, width=207, height=289, top=870, left=2275");
   } 
  location.reload(); 
}
function diff1() {
  localStorage.setItem("difficulty",1); 
  parseInt(popOut);
  if(popOut == 1) {
    popWindow = window.open("//mhvfs01/TechSupport/Professional Support/Travis/archive/minesweeper/minesweeper popout.html", " ", "resizable=1, titlebar=0, status=0, menubar=0, width=346, height=429, top=870, left=2275");
  } 
  location.reload(); 
}
function diff2() {
  localStorage.setItem("difficulty",2);
  parseInt(popOut);
  if(popOut == 1) {
    popWindow = window.open("//mhvfs01/TechSupport/Professional Support/Travis/archive/minesweeper/minesweeper popout.html", " ", "resizable=1, titlebar=0, status=0, menubar=0, width=646, height=429, top=870, left=2275");
 } 
  location.reload(); 
}
function diff3() {
  localStorage.setItem("difficulty",3);
  parseInt(popOut);
  if(popOut == 1) {
    popWindow = window.open("//mhvfs01/TechSupport/Professional Support/Travis/archive/minesweeper/minesweeper popout.html", " ", "resizable=1, titlebar=0, status=0, menubar=0, width=646, height=429, top=870, left=2275");
  }
   location.reload(); 
}

function resetScore() { //reset ALL scores
  if(confirm('Are you sure you want to reset all your scores? (This cannot be undone).')) {
    localStorage.clear();
    location.reload();
  } else {
    //do nothing
  }
}


function updateHighScore() {
  localStorage.setObj("oldScores", highScores[difficulty]);
  highScores[difficulty].push(parseInt(currentTime, 10)); //set 
  highScores[difficulty].sort(sortScores);
  highScores[difficulty].pop();
  newScore = highScores[difficulty];
  oldScores = localStorage.getObj("oldScores");
  if(oldScores.length === newScore.length && oldScores.every(function(v,i) {return v ===newScore[i]})){
    //do nothing as returns true for matching highscores - no new score
  }
  else {
    solitaireWin(); //show solitaire on new highscore
  }
  localStorage.setObj("highScores", highScores); //pad highscores to 3 digits and preface with 0
  oneScore = highScores[difficulty][0].toString().padStart(3,"0");
  twoScore = highScores[difficulty][1].toString().padStart(3,"0");
  threeScore = highScores[difficulty][2].toString().padStart(3,"0");
  for(var i=0; i<3; i++) document.getElementById("ssZ" + i).src = "resources/counter/Space/" + oneScore[i] + ".png";
  for(var i=0; i<3; i++) document.getElementById("ssO" + i).src = "resources/counter/Space/" + twoScore[i] + ".png";
  for(var i=0; i<3; i++) document.getElementById("ssT" + i).src = "resources/counter/Space/" + threeScore[i] + ".png";
}

function sortScores(a,b) { //sort highscore values incrementally and return
  return a - b;
}

function gameWon() { //win events
  JSON.parse(gamesWon[difficulty],100);
  gamesWon[difficulty]++;
  totalGames++;
  gamesPlayed[difficulty] = gamesWon[difficulty] + gamesLost[difficulty];
  localStorage.setItem("totalGames",totalGames);
  localStorage.setObj("gamesWon", gamesWon);
  document.getElementById("spaceMsg").style.left = 75;
  document.getElementById("sMsg").src = "resources/Space Cadet/Winner.png";
  document.getElementById("wins").src = "resources/Space Cadet/Games Won.png";  
  document.getElementById("loss").src = "resources/Space Cadet/Games lost.png";
  spaceWin = gamesWon[difficulty].toString().padStart(3,"0");
  spaceLoss = gamesLost[difficulty].toString().padStart(3,"0"); 
  for(var i=0; i<3; i++) document.getElementById("wc" + i).src = "resources/counter/Space/" + spaceWin[i] + ".png";
  for(var i=0; i<3; i++) document.getElementById("lc" + i).src = "resources/counter/Space/" + spaceLoss[i] + ".png";
  parseInt("gamesPlayed[difficulty]", 10)
  console.log('Games Played at this difficulty: '+gamesPlayed[difficulty]);
}

function gameLost() { //lose events
  if(lost == false)
  JSON.parse(gamesLost[difficulty],100);
  gamesLost[difficulty]++;
  totalGames++;
  gamesPlayed[difficulty] = gamesWon[difficulty] + gamesLost[difficulty];
  localStorage.setItem("totalGames",totalGames);
  localStorage.setObj("gamesLost", gamesLost);
  document.getElementById("spaceMsg").style.left = 50;
  document.getElementById("sMsg").src = "resources/Space Cadet/Game Over.png";
  document.getElementById("wins").src = "resources/Space Cadet/Games Won.png";
  document.getElementById("loss").src = "resources/Space Cadet/Games lost.png";
  spaceWin = gamesWon[difficulty].toString().padStart(3,"0");
  spaceLoss = gamesLost[difficulty].toString().padStart(3,"0"); 
  for(var i=0; i<3; i++) document.getElementById("wc" + i).src = "resources/counter/Space/" + spaceWin[i] + ".png";
  for(var i=0; i<3; i++) document.getElementById("lc" + i).src = "resources/counter/Space/" + spaceLoss[i] + ".png";
  parseInt("gamesPlayed[difficulty]", 10)
  console.log('Games Played at this difficulty: '+gamesPlayed[difficulty]);
  lost = true;
}

function newHighScore(){
	document.getElementById("sFace").src = "resources/Space Cadet/blankSpace.png";
	document.getElementById("spaceBoard").src = "rescources/Space Cadet/Space Cadet Modified backup.png";
}

function custom() { //prompt for input for custom game, save and reload
  customW = prompt("Enter the Custom Width: ",boardWidth);
  customH = prompt("Enter the Custom Height: ",boardHeight);
  customM = prompt("Enter the Number of Mines:",numMines);
  parseInt("customW",10);
  parseInt("customH",10);
  parseInt("customM",10);
  localStorage.setItem("customW",customW);
  localStorage.setItem("customH",customH);
  localStorage.setItem("customM",customM);
  localStorage.setItem("difficulty",3);
  localStorage.setItem("customGame",1);
  location.reload();
}

function popGame() { //creates popout of game without Space Cadet
  parseInt(popOut);
  if(difficulty==0)
    popWindow = window.open("minesweeper.html", " ", "resizable=1, titlebar=0, status=0, menubar=0, width=207, height=291, top=870, left=2275");
  if(difficulty==1)
    popWindow = window.open("minesweeper.html", " ", "resizable=1, titlebar=0, status=0, menubar=0, width=347, height=431, top=870, left=2275");
  if(difficulty==2)
    popWindow = window.open("minesweeper.html", " ", "resizable=1, titlebar=0, status=0, menubar=0, width=647, height=431, top=870, left=2275");
  if(diffiuclty==3)  
    popWindow = window.open("minesweeper.html", " ", "resizable=1, titlebar=0, status=0, menubar=0"); 
    window.close();
}

function toggleSolitaire () { //toggle solitaire on or off
  solitaire = !solitaire;
  localStorage.setItem("solitaire",solitaire);
  location.reload();
}
function solitaireWin() { //displays solitaire win animation on new highscore if set
  if(solitaire == true) {
  var canvas = document.getElementById('can');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  var context = canvas.getContext('2d');
  var id = 51;
  var row = 0;
  var col = 0;
  var cwidth = 71, cwidthhalf = cwidth / 2;
  var cheight = 96, cheighthalf = cheight / 2;
  var particles = [];
  var Particle = function ( id, x, y, sx, sy ) {
    if ( sx === 0 ) sx = 2;
    var cx = ( id % 4 ) * cwidth;
    var cy = Math.floor( id / 4 ) * cheight;
    this.update = function () {
      x += sx;
      y += sy;
      if ( x < ( - cwidthhalf ) || x > ( canvas.width + cwidthhalf ) ) {
        var index = particles.indexOf( this );
        particles.splice( index, 1 );
        return false;
      }
    if ( y > canvas.height - cheighthalf ) {
      y = canvas.height - cheighthalf;
      sy = - sy * 0.85;
    }
    sy += 0.98;
    context.drawImage( image, cx, cy, cwidth, cheight, Math.floor( x - cwidthhalf ), Math.floor( y - cheighthalf ), cwidth, cheight
);
    return true;
    }
  }
  var image = document.createElement( 'img' );
 image.src = "data:image/png;base64,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";
   
  var throwCard = function ( x, y ) { //id = card number shown when thrown
    //if(mineCards !=0){
    id > 0 ? id -- : id = 51;
    var particle = new Particle( id, x, y, Math.floor( Math.random() * 6 - 3 ) * 2, - Math.random() * 16 );
    particles.push( particle );
	//mineCards--;
	}
  function insanity(){ //fill board with cards depending on size.
    switch(difficulty) {
	  case "0": row = 2; col = 3; break;
	  case "1": row = 4; col = 5; break;
	  case "2": row = 4; col = 10; break;
	  case "3": row = Math.round(boardHeight/3); col = Math.round(boardWidth/3);
	}
	setTimeout(crazy,0);
  } 
  
  function crazy() { 
    if(spreadY < row){
      if(spreadX < col) {
        throwCard(xPos,yPos);
        xPos +=60;
        spreadX++;  
      }
      if(spreadX == col) {
        spreadX = 0;
	    yPos += 86;
  	    spreadY++;
	    xPos = 49.5;
	  }
	}setTimeout(crazy,100);
  }	  	
  document.addEventListener( 'mousedown', function ( event ) {
    event.preventDefault();
    document.addEventListener( 'mousemove', onMouseMove, false );
  }, false );
  
  document.addEventListener( 'mouseup', function ( event ) {
    event.preventDefault();
		insanity();
    document.removeEventListener( 'mousemove', onMouseMove, false );
  }, false );

  function onMouseMove( event ) { 
    event.preventDefault();    
    //throwCard(173,255);
  }

  setInterval( function () {
    var i = 0, l = particles.length;
    while ( i < l ) {
      particles[ i ].update() ? i ++ : l --;
    }
  }, 1000 / 60 );
}
}

var keyboardEvent = document.createEvent("KeyboardEvent");
var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";
