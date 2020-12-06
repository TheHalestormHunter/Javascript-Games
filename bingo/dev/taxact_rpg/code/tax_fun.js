// button functions 


function walk(dr)
{
	var rnum = Math.floor(Math.random() * 5) + 1;

	if(rnum == 5)
	{
		startBattle();
	}
	else
	{
		document.getElementById("viewdiv").innerHTML = "<img src='images/road"+rnum+".jpg'>";
		buttonMode(2);
	}

	switch(dr)
	{
		case 1: GVycoord++; GVlog += "walking north\n"; break; 
		case 2: GVxcoord++; GVlog += "walking east\n"; break; 
		case 3: GVycoord--; GVlog += "walking south\n"; break; 
		case 4: GVxcoord--; GVlog += "walking west\n"; break; 
	}

	document.getElementById("coordspan").innerHTML = GVxcoord + ", " + GVycoord;
	
	document.getElementById("gpsspan").innerHTML = getGPStown();

	document.getElementById("view_ta").value = GVlog;

} // endWalk() 



function tps()
{
	document.getElementById("viewdiv").innerHTML = "<img src='images/tps.jpg'>";	
	GVexpts += 5; 	
	document.getElementById("expt_tb").value = GVexpts;	
	checkTitle();
	buttonMode(2);
	GVlog += "TPSed the call\n";
	GVcurrentenemy = 0; 

} // end tps() 


function email()
{
	document.getElementById("viewdiv").innerHTML = "<img src='images/email.jpg'>";
	GVexpts += 5; 	
	document.getElementById("expt_tb").value = GVexpts;	
	checkTitle();
	buttonMode(2);
	GVlog += "Shot email\n";
	GVcurrentenemy = 0; 
}

function hangup()
{
	document.getElementById("viewdiv").innerHTML = "<img src='images/hangup.jpg'>";
	GVexpts -= 5; 	
	document.getElementById("expt_tb").value = GVexpts;	
	checkTitle();
	buttonMode(2);
	GVlog += "Hung up on the bastard\n";
	GVcurrentenemy = 0; 
	alterHitpts( -5 );
} 


function escalate()
{
	document.getElementById("viewdiv").innerHTML = "<img src='images/supervisor.jpg'>";
	GVexpts -= 10; 	
	document.getElementById("expt_tb").value = GVexpts;	
	checkTitle();
	buttonMode(2);	
	GVlog += "Escalated the call\n "+GVesc+" escalations left\n";
	document.getElementById("view_ta").value = GVlog;
	GVcurrentenemy = 0; 
	GVesc--;

} // end escalate() 




function showEnemy()
{
	document.getElementById("viewdiv").innerHTML = "<img src='images/enemy" + GVcurrentenemy + ".jpg'>";
}


function alterHitpts( hn )
{
	GVhitpts += hn;
	document.getElementById("hp_tb").value = GVhitpts;

	if( GVhitpts <= 0 ) // death 
	{
		buttonMode( 4 );
		document.getElementById("viewdiv").innerHTML = "<img src='images/gameover.jpg'>";
		GVrace = "skeleton";
		GVtitle = "bones";
		GVteam = "the dead";
		GVclass = "walker";
		drawHeropic();
		document.getElementById("heropic").src = "images/dead_hero.jpg"; 
		GVlog += "Hey, loser, you died!\n";
		document.getElementById("view_ta").value = GVlog;
	}

}


function checkTitle()
{
	if( ( GVexpts >=-10 && GVexpts <= 10 ) || ( GVexpts >= 40 && GVexpts <= 60 ) || ( GVexpts >= 90 && GVexpts <= 110 ) || ( GVexpts >= 140 && GVexpts <= 160 ) )
	{
		setTitle();	drawHeropic( 0 );
	}
}


function buttonMode( bm ) // disable or enable buttons 
{
	switch(bm)
	{
		case 1: document.getElementById("walkNbtn").disabled = true; // pregame 
			document.getElementById("walkEbtn").disabled = true;
			document.getElementById("walkSbtn").disabled = true;
			document.getElementById("walkWbtn").disabled = true;
			break; 
		case 2: document.getElementById("walkNbtn").disabled = false; // walking 
			document.getElementById("walkEbtn").disabled = false;
			document.getElementById("walkSbtn").disabled = false;
			document.getElementById("walkWbtn").disabled = false;
			document.getElementById("emailBtn").disabled = true;
			document.getElementById("escBtn").disabled = true;
			document.getElementById("hangupBtn").disabled = true;
			document.getElementById("tpsBtn").disabled = true;
			document.getElementById("srBtn").disabled = true;
			break; 
		case 3: document.getElementById("walkNbtn").disabled = true; // fight 
			document.getElementById("walkEbtn").disabled = true;
			document.getElementById("walkSbtn").disabled = true;
			document.getElementById("walkWbtn").disabled = true;
			document.getElementById("emailBtn").disabled = false;
			document.getElementById("escBtn").disabled = false;
			document.getElementById("hangupBtn").disabled = false;
			document.getElementById("tpsBtn").disabled = false;
			document.getElementById("srBtn").disabled = false;
			break;
		case 4: document.getElementById("walkNbtn").disabled = true; // dead 
			document.getElementById("walkEbtn").disabled = true;
			document.getElementById("walkSbtn").disabled = true;
			document.getElementById("walkWbtn").disabled = true;
			document.getElementById("emailBtn").disabled = true;
			document.getElementById("escBtn").disabled = true;
			document.getElementById("hangupBtn").disabled = true;
			document.getElementById("tpsBtn").disabled = true;
			document.getElementById("srBtn").disabled = true;
			break; 
	}

	if(GVesc <= 0) {  document.getElementById("escBtn").disabled = true;  } 

} // end buttonMode()


function getGPStown()
{
	var retstring = "lost";

	if( GVxcoord <= -10 && GVxcoord >= -30 && GVycoord >= 0 && GVycoord <= 20 ) { retstring = "Hiawatha"; }
	else if( GVxcoord <= 60 && GVxcoord >= 50 && GVycoord >= 0 && GVycoord <= 20 )  { retstring = "Marion"; }
	else if( GVxcoord <= 50 && GVxcoord >= -30 && GVycoord >= -40 && GVycoord <= 20 )  { retstring = "Cedar Rapids"; }
	else if( GVxcoord <= -40 && GVxcoord >= -50 && GVycoord >= 20 && GVycoord <= 30 )  { retstring = "Palo"; }
	else if( GVxcoord <= 0 && GVxcoord >= -10 && GVycoord >= 30 && GVycoord <= 40 )  { retstring = "Robbins"; }
	else if( GVxcoord <= 80 && GVxcoord >= 70 && GVycoord >= 20 && GVycoord <= 30 )  { retstring = "Springville"; }
	else if( GVxcoord <= -50 && GVxcoord >= -40 && GVycoord >= -60 && GVycoord <= -50 )  { retstring = "Fairfax"; }
	else if( GVxcoord <= 60 && GVxcoord >= 50 && GVycoord >= -60 && GVycoord <= -50 )  { retstring = "Ely"; }
	else { retstring = "Linn County";  } 

	return retstring; 
}
