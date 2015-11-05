addEventListener("load", function() {
	setup();
	document.getElementById("addTaskButton").addEventListener("click", addTask);
});

var base = element.getElementById("Terminator").innerHTML;

function setup()
{
	var button = document.createElement("BUTTON");
	button.id = "addTaskButton";
	var text = document.createTextNode("show more");
	button.appendChild(text);
	document.getElementById("Terminator").appendChild(button);
}

function reset()
{
	if(base != undefined)
	{
		document.getElementById("Terminator").innerHTML = base;
	}
	else{
		document.getElementById("Terminator").innerHTML = null;
	}
	var button = document.createElement("BUTTON");
	button.id = "addTaskButton";
	var text = document.createTextNode("show more");
	button.appendChild(text);
	document.getElementById("Terminator").appendChild(button);
	document.getElementById("addTaskButton").addEventListener("click", addTask);
}

function addTask()
{
	//<button id="addTaskButton" type="button">Show more</button>
	var text2 = document.createTextNode("show less");
	var button2 = document.createElement("BUTTON");
	button2.id = "showLessButton";
	button2.appendChild(text2);
	document.getElementById("Terminator").replaceChild(button2, document.getElementById("addTaskButton"));
	document.getElementById("Terminator").innerHTML += " hello";
	document.getElementById("showLessButton").addEventListener("click", reset);
}