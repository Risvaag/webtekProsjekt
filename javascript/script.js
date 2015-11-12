addEventListener("load", function() {
	setup();
	document.getElementById("TerminatorButton").addEventListener("click", TerminatorShowMore);
	document.getElementById("VacutronButton").addEventListener("click", VacutronShowMore);
	document.getElementById("SuckmasterButton").addEventListener("click", SuckmasterShowMore);
});

var TerminatorBase = "<p>nope</p>";
var VacutronBase = "<p> yeah!</p>";
var SuckmasterBase = "<p>I don't belong here</p>";

function setup()
{
	TerminatorBase = document.getElementById("Terminator").innerHTML;
	VacutronBase = document.getElementById("Vacutron").innerHTML;
	//SuckmasterBase = document.getElementById("Scukmaster").innerHTML;
}

function reset1()
{
	if(TerminatorBase != undefined)
	{
		document.getElementById("Terminator").innerHTML = TerminatorBase;
	}
	else{
		document.getElementById("Terminator").innerHTML = null;
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
	document.getElementById("Terminator").innerHTML += "<p>hello</p>";
	document.getElementById("TerminatorButton").addEventListener("click", reset1);
}

function VacutronShowMore()
{
	document.getElementById("button2").innerHTML = "<button id=VacutronButton>show less</button>";
	document.getElementById("Vacutron").innerHTML += "<p>hello again</p>";
	document.getElementById("VacutronButton").addEventListener("click", reset2);
}

function SuckmasterShowMore()
{
	document.getElementById("button3").innerHTML = "<button id=SuckmasterButton>show less</button>";
	document.getElementById("Suckmaster").innerHTML += "<p>Hello world</p>";
	document.getElementById("SuckmasterButton").addEventListener("click", reset3);
}