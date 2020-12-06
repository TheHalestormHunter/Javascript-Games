


function randomizeTable() {
  picked = [];
  if(bingoSpaces.length < 24) {
    alert("Not enough entries for bingo spaces!");
    return;
  }
  while(picked.length < 24) {
    randNumber = Math.trunc(bingoSpaces.length*Math.random());
    if(picked.indexOf(randNumber)<0) {
      document.getElementById(picked.length.toString()).innerText = bingoSpaces[randNumber];
      picked.push(randNumber);
    }
  }
}

function changeColor(tableData) {
  if(!tableData.color || tableData.color=="white") {
    tableData.style = "background-color: DeepSkyBlue";
    tableData.color = "DeepSkyBlue";
  } else {
    tableData.style = "background-color: white";
    tableData.color = "white";
  }
	markSpot( parseInt(tableData.id) );	 // ********************** Mikes code ***************

}

// ********************** begin Mikes code ********************************************************************


//*********************** global variables **********************************

var theboard = [ [0,0,0,0,0] ,   // keeps track of spots 
	[0,0,0,0,0] ,
	[0,0,1,0,0] ,
	[0,0,0,0,0] ,
	[0,0,0,0,0] ];

var bingo = false;
var xbingo = false;
var fourcorners = false;
var blackout = false;
var hits = 0;

//*********************** functions  **********************************

function markSpot(spnum)   // make changes to theboard array 
{
	document.getElementById("msgbox").value = spnum; 
	hits++; 

	switch(spnum)
	{
		case 0: theboard[0][0] = 1; checkBingo(0,0,1); break; 
		case 1: theboard[1][0] = 1; checkBingo(1,0,0); break;
		case 2: theboard[2][0] = 1; checkBingo(2,0,0); break;
		case 3: theboard[3][0] = 1; checkBingo(3,0,0); break;
		case 4: theboard[4][0] = 1; checkBingo(4,0,1); break;

		case 5: theboard[0][1] = 1; checkBingo(0,1,0); break;
		case 6: theboard[1][1] = 1; checkBingo(1,1,1); break;
		case 7: theboard[2][1] = 1; checkBingo(2,1,0); break;
		case 8: theboard[3][1] = 1; checkBingo(3,1,1); break;
		case 9: theboard[4][1] = 1; checkBingo(4,1,0); break;

		case 10: theboard[0][2] = 1; checkBingo(0,2,0); break;
		case 11: theboard[1][2] = 1; checkBingo(1,2,0); break;
		// 2,2 is free 
		case 12: theboard[3][2] = 1; checkBingo(3,2,0); break;
		case 13: theboard[4][2] = 1; checkBingo(4,2,0); break;

		case 14: theboard[0][3] = 1; checkBingo(0,3,0); break;
		case 15: theboard[1][3] = 1; checkBingo(1,3,1); break;
		case 16: theboard[2][3] = 1; checkBingo(2,3,0); break;
		case 17: theboard[3][3] = 1; checkBingo(3,3,1); break;
		case 18: theboard[4][3] = 1; checkBingo(4,3,0); break;

		case 19: theboard[0][4] = 1; checkBingo(0,4,1); break;
		case 20: theboard[1][4] = 1; checkBingo(1,4,0); break;
		case 21: theboard[2][4] = 1; checkBingo(2,4,0); break;
		case 22: theboard[3][4] = 1; checkBingo(3,4,0); break;
		case 23: theboard[4][4] = 1; checkBingo(4,4,1); break;

	}
	
} // end markSpot()


function checkBingo(col, row, diag) // determine if Bingo has been made 
{
	if( theboard[col][0] == 1 &&  theboard[col][1] == 1 && theboard[col][2] == 1 && theboard[col][3] == 1 && theboard[col][4] == 1 ) bingo = true;
	else if( theboard[0][row] == 1 &&  theboard[1][row] == 1 && theboard[2][row] == 1 && theboard[3][row] == 1 && theboard[4][row] == 1 ) bingo = true;
	else if( theboard[0][0] == 1 && theboard[0][4] == 1 && theboard[4][0] == 1 && theboard[4][4] == 1 ) fourcorners = true;
	else if( diag == 1 )
		{
			if( theboard[0][0] == 1 && theboard[1][1] == 1 && theboard[3][3] == 1 && theboard[4][4] == 1 ) xbingo = true;
			if( theboard[0][4] == 1 && theboard[1][3] == 1 && theboard[3][1] == 1 && theboard[4][0] == 1 ) xbingo = true;
		}
	else document.getElementById("msgbox").value = col + ", " + row;

	if( bingo || xbingo )
	{	document.getElementById("msg").innerHTML = "<strong><font size='+4' color='red'>Bingo Winner!</font></strong>";
	//	document.getElementsByClassName("bingo").style  = "background-color: red";
		document.getElementById("msgbox").value = "bingo";

		if(xbingo) document.getElementById("sideimg").src = "code/worker.jpg";
		else document.getElementById("sideimg").src = "code/good_job.jpg";
	}
	else if( fourcorners )
	{
		document.getElementById("msg").innerHTML = "<strong><font size='+4' color='red'>Four Corners!</font></strong>";
		document.getElementById("msgbox").value = "four corners";
		document.getElementById("sideimg").src = "code/doctor.jpg";
	}
	else
	{ 	document.getElementById("sideimg").src = "code/cd.jpg";
		document.getElementById("msgbox").value += " missed";
	}

	if( hits > 22 ) checkBlackout();

} // end checkBingo()

function checkBlackout()
{
	var bo = true; // start with blackout being true 

	for(var col = 0; col < 5; col++)
	{
		for(var row = 0; row < 5; row++)
		{
			if (theboard[col][row] == 0) // if you find one empty spot 
			{
				bo = false; col = 6; row = 6;	
			}
		}
	}

	if(bo)
	{
		blackout = true;
		document.getElementById("msg").innerHTML = "<strong><font size='+4' color='black'>Black Out!</font></strong>";
		document.getElementById("msgbox").value = "blackout";
		document.getElementById("sideimg").src = "code/blacksuit.jpg";
		document.body.style = "background-color: black";
	}	

}


function restart()
{
	document.getElementById("msgbox").value = "restarting";

	for(var bnum = 0; bnum < 24; bnum++)
	{
		document.getElementById( bnum ).style = "background-color = white";
	}

	theboard = [ [0,0,0,0,0] , [0,0,0,0,0] , [0,0,1,0,0] , [0,0,0,0,0] , [0,0,0,0,0] ];
	document.getElementById("sideimg").src = "code/cd.jpg";

	document.getElementById("msg").innerHTML = "_";
	document.body.style = "background-color: white";

	bingo = false;
	xbingo = false;
	fourcorners = false;
	blackout = false;
	hits = 0;
}


// ********************** end Mikes code ***********************************************************************

