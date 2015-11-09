addEventListener("load", function() {
	setup();
	document.getElementById("addTaskButton").addEventListener("click", addTask);
});

var base = element.getElementById("buttonspot").innerHTML;

function setup()
{
	var button = document.createElement("BUTTON");
	button.id = "addTaskButton";
	var text = document.createTextNode("show more");
	button.appendChild(text);
	document.getElementById("buttonspot").appendChild(button);
}

function reset()
{
	if(base != undefined)
	{
		document.getElementById("more").innerHTML = base;
	}
	else{
		document.getElementById("more").innerHTML = null;
	}
	var button = document.createElement("BUTTON");
	button.id = "addTaskButton";
	var text = document.createTextNode("show more");
	button.appendChild(text);
	document.getElementById("buttonspot").appendChild(button);
	document.getElementById("addTaskButton").addEventListener("click", addTask);
}

function addTask()
{
	//<button id="addTaskButton" type="button">Show more</button>
	var text2 = document.createTextNode("show less");
	var button2 = document.createElement("BUTTON");
	button2.id = "showLessButton";
	button2.appendChild(text2);
	document.getElementById("buttonspot").replaceChild(button2, document.getElementById("addTaskButton"));
	document.getElementById("more").innerHTML += "When we first designed VacuumExtre2000HD, we really didn't know we were making history. The project started out as a design for a new couch for Sup Er K. Ewl, as he has problems with his spine. His 10,000 dollars coach simply didn't please him. 4 hours later we could lay our eyes on the VacuumExtre2000HD. It will be avaible for purchase somewhere between 2020 and 2043.";
	document.getElementById("showLessButton").addEventListener("click", reset);
}