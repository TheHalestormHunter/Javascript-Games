// SR battles 

// use GVbattle array, 0: enemy, 1: enemy HP, 2: SR array spots, 3:select spot , 4: failures      


function startBattle()
{
	var en = Math.floor(Math.random() * 4) + 1;
	GVbattle[0] = en; 
	GVbattle[1] = 10;
	GVbattle[2] = Math.floor(Math.random() * 2);  // pick an SR question 
	GVbattle[3] = 2; // spot in select that is correct 

	document.getElementById("errormsgbox").value = "hey";

	document.getElementById("viewdiv").innerHTML = "<img src='images/enemy"+GVbattle[0]+".jpg'>";	
	buttonMode(3);	
	GVlog += "Encountered enemy"+GVbattle[0]+"!\n";

}


function endbattle()
{
	GVbattle = [0,0,0,0,0];

}




function fireSR()
{
	var sel = document.getElementById("srselect").selectedIndex; 



	setTimeout( showEnemy(), 3000 );
	document.getElementById("viewdiv").innerHTML = "<img src='images/srmiss.jpg'>";

	GVexpts += 10; 	
	document.getElementById("expt_tb").value = GVexpts;	
	checkTitle();
	buttonMode(2);
}
 



/* **************************

var SRquestions = [   
	"Cannot open program",
	"Cannot sign in",
	"My EF Status is showing other and its been 2 weeks"


];


var SRanswers = [ 
	34567,
	25678,
	24272



];

*/ 

