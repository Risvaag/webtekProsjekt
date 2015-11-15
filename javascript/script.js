addEventListener("load", function() {
	document.getElementById("Terminator").innerHTML = TerminatorBase;
	document.getElementById("Vacutron").innerHTML = VacutronBase;
	document.getElementById("Suckmaster").innerHTML = SuckmasterBase;
	
	document.getElementById("TerminatorButton").addEventListener("click", TerminatorShowMore);
	document.getElementById("VacutronButton").addEventListener("click", VacutronShowMore);
	document.getElementById("SuckmasterButton").addEventListener("click", SuckmasterShowMore);
});

var TerminatorBase = "<p>The terminator offers the highest quality service at a corresponding price</p>";
var VacutronBase = "<p>The middle range of AI our AI vacuums providing decent service at a slightly lower price</p>";
var SuckmasterBase = "<p>The low budget AI vacuum, barely smarter than your average pet, but far cheaper than our other products</p>";

function reset1()
{
	if(TerminatorBase != undefined)
	{
		document.getElementById("Terminator").innerHTML = TerminatorBase;
	}
	else{
		document.getElementById("Terminator").innerHTML = "";
	}
	document.getElementById("button1").innerHTML = "<button id=TerminatorButton>show more</button>";
	document.getElementById("TerminatorButton").addEventListener("click", TerminatorShowMore);
}

function reset2()
{
	if(VacutronBase != undefined)
	{
		document.getElementById("Vacutron").innerHTML = VacutronBase;
	}
	else{
		document.getElementById("Vacutron").innerHTML = "";
	}
	document.getElementById("button2").innerHTML = "<button id=VacutronButton>show more</button>";
	document.getElementById("VacutronButton").addEventListener("click", VacutronShowMore);
}

function reset3()
{
	if(SuckmasterBase != undefined)
	{
		document.getElementById("Suckmaster").innerHTML = SuckmasterBase;
	}
	else{
		document.getElementById("Suckmaster").innerHTML = "";
	}
	document.getElementById("button3").innerHTML = "<button id=SuckmasterButton>show more</button>";
	document.getElementById("SuckmasterButton").addEventListener("click", SuckmasterShowMore);
}

function TerminatorShowMore()
{
	document.getElementById("button1").innerHTML = "<button id=TerminatorButton>show less</button>";
	var input = "<img id='r2d2' src='images/r2d2.jpg' alt='The terminator in all it&#39;s glory'><p>"+" The terminator uses state of the art technology to always find it's way through your home with no issues. It's highly advanced sensors makes it able to adapt to most any challenge on the fly and it's wide arange of actuators ensures it's equiped to deal with anything it may encounter on it's quest to terminate <strike>Sarah Connor</strike> dirt in your home</p>"
	document.getElementById("Terminator").innerHTML += input;
	document.getElementById("TerminatorButton").addEventListener("click", reset1);
}




function VacutronShowMore()
{
	document.getElementById("button2").innerHTML = "<button id=VacutronButton>show less</button>";
	document.getElementById("Vacutron").innerHTML += "<img id='robotVacuum' src='images/robotcleaner.jpg' alt ='The amazing vacutron'><p>While cheaper and less advanced than the terminator the vacutron remains an impressive accomplishment within the field of artificial inteligence. It's sensors and actuators are easily capable of identifying and overcoming most obstacles it may encounter and it's complex dust detection algorithm ensures it will always clean out every last spec of dust in your house.</p>";
	document.getElementById("VacutronButton").addEventListener("click", reset2);
}

function SuckmasterShowMore()
{
	document.getElementById("button3").innerHTML = "<button id=SuckmasterButton>show less</button>";
	document.getElementById("Suckmaster").innerHTML += "<img id='derpVacuum' src='images/shittyVacuum.jpg' alt='The suckmaster'> <p>Pretty much as effective as straping a vacuumcleaner to your dog and hoping it will clean your home but you get what you pay for. While it has issues dealing with chairs, walls and other obstacles it can on ocation sufice if the area you seek to clean is flat and contains nothing at all at floor height.</p>";
	document.getElementById("SuckmasterButton").addEventListener("click", reset3);
}