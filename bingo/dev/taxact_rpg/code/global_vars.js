// global variables 


var GVmyhero; 

var GVtemp = 15; 

var GVname = "Someone";
var GVrace = "human"; 
var GVclass = "bla";
var GVtitle = "temp";
var GVteam = "solo";

var GVxcoord = 0;
var GVycoord = 0;
var GVlog = "";

var GVexpts = 5; 
var GVhitpts = 10;
var GVbattle = [0,0,0,0,0]; //  0: enemy, 1: SR array spots, 2: failures  

var GVesc = 3;
var GVcurrentenemy = 0; 


function setTitle()
{
	if(GVexpts <= 0) GVtitle = "temp";
	else if(GVexpts >= 1 && GVexpts <= 50) GVtitle = "trainee";
	else if(GVexpts >= 50 && GVexpts <= 100) GVtitle = "y-jack";
	else if(GVexpts >= 100 && GVexpts <= 150) GVtitle = "con chat";
	else if(GVexpts >= 150 && GVexpts <= 200) GVtitle = "frontline";
	else if(GVexpts >= 200 && GVexpts <= 250) GVtitle = "con tech";
	else if(GVexpts >= 250 && GVexpts <= 300) GVtitle = "professional";
	else  GVtitle = "lead";
}


// EOF 