// webpage layout functions 


function startPage()
{	
	var tempstring;
	tempstring = "type name <input type='textbox' size='10' id='startnamebox'>&nbsp;&nbsp;";
	tempstring += "choose class <select name='classselect' id='startclassselect'><option value='1'>Fighter</option><option value='2'>Archer</option></select><br><br><br>"; 
	tempstring += "race <select name='raceselect' id='startraceselect'><option value='1'>human</option><option value='2'>elf</option><option value='3'>dwarf</option></select> &nbsp; &nbsp; "; 
	tempstring += "team <select name='teamselect' id='startteamselect'><option value='0'>none</option><option value='1'>Robert Half</option><option value='2'>Tech Syst</option></select><br><br><br>"; 
	tempstring += "<input type='button' value='start for free' class='btn' onclick='startGame()'>";
	document.getElementById("herostatsdiv").innerHTML = tempstring;

	// buttonMode(1);

} // end startPage() 


function startGame()
{	
	getStartdata();
	drawHeropic(1);
	drawHerostats();
	drawViewmsg(); 

	buttonMode(2);

} // end startGame() 


function getStartdata()
{
	tempstr = document.getElementById("startnamebox").value; // assign hero name 
	if( tempstr.length < 3 ) GVname = "Gordon"; // too short 
	else if( tempstr.length > 10 ) GVname = tempstr.substr(0,9);  // too long 
	else GVname = tempstr; 


	var cnum = document.getElementById("startclassselect").value; // assign class 
	if(cnum == 2) 
	{	GVclass = "archer";
	}
	else
	{	GVclass = "fighter";	
	}

	var rnum = document.getElementById("startraceselect").value; // assign race 
	if(rnum == 2) 
	{	GVrace = "elf";
	}
	else if(rnum == 3) 
	{	GVrace = "dwarf";
	}
	else
	{	GVrace = "human";	
	}

	var tnum = document.getElementById("startteamselect").value; // assign team 
	if(tnum == 1) 
	{	GVteam = "Robert Half";
	}
	else if(tnum == 2) 
	{	GVteam = "Tech Syst";
	}
	else
	{	GVteam = "loner";	
	}

} // end getStartdata()

function drawViewmsg()
{
	var tempstring = "";

	tempstring += "<textarea rows='4' cols='30' id='view_ta'> Adventure log </textarea>";

	document.getElementById("viewmsgdiv").innerHTML = tempstring;
	

} // end drawViewmsg()


function drawHeropic( dhp )
{
	var tempstring = "";

	tempstring += "<img src='images/" + GVclass + ".jpg' height='100' width='100' id='heropic'><br>";
	tempstring += "<strong>" + GVname + "</strong><br>race: "+ GVrace +"<br>title: "+ GVtitle + "<br>job: " + GVclass +"<br>team: "+ GVteam + "<br><br>";
	tempstring += "<span id='coordspan'>" + GVxcoord + ", " + GVycoord + "</span><br>";
	tempstring += "<span id='gpsspan'> somewhere </span>";

	document.getElementById("heropicdiv").innerHTML = tempstring;

} // end drawHeropic()


function drawHerostats()
{
	var tempstring = "";

	tempstring += " hitpoints <input type='textbox' size='4' id='hp_tb' readonly> &nbsp;&nbsp;&nbsp;&nbsp;";
	tempstring += " xp: <input type='textbox' size='4' id='expt_tb' readonly><br><br>";

	tempstring += " &nbsp; &nbsp; <input type='button' value='north' id='walkNbtn' disabled='true' onclick='walk(1)'><br>"; 
	tempstring += "<input type='button' value='west' id='walkWbtn' disabled='true' onclick='walk(4)'> <input type='button' value='east' id='walkEbtn' disabled='true' onclick='walk(2)'><br>";
	tempstring += " &nbsp; &nbsp; <input type='button' value='south' id='walkSbtn' disabled='true' onclick='walk(3)'><br><br>"; 

	tempstring += "<input type='button' value='email' id='emailBtn' disabled='true' onclick='email()'> &nbsp; &nbsp; ";
	tempstring += "<input type='button' value='escalate' id='escBtn' disabled='true' onclick='escalate()'><br><br>";
	tempstring += "<input type='button' value='hang up' id='hangupBtn' disabled='true' onclick='hangup()'> &nbsp; &nbsp; ";
	tempstring += "<input type='button' value='TPS' id='tpsBtn' disabled='true' onclick='tps()'> &nbsp; &nbsp; "; 		
	tempstring += "SR <select name='srselect' id='srselect'><option value='0'>00000</option><option value='1'>11111</option><option value='2'>22222</option><option value='3'>33333</option><option value='4'>44444</option></select>";
	tempstring += "<input type='button' value='fire SR' id='srBtn' disabled='true' onclick='fireSR()'><br><br><br>";
	tempstring += "<input type='textbox' size='20' id='errormsgbox' readonly>";

	document.getElementById("herostatsdiv").innerHTML = tempstring;

	document.getElementById("hp_tb").value = GVhitpts; // put hp in box 
	document.getElementById("expt_tb").value = GVexpts; // put ex pts in box 

} // end drawHerostats()

// EOF 