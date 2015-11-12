addEventListener("load", function() {
	setup();
	document.getElementById("showMoreButton").addEventListener("click", showMore);
});

var base = "<p>nope</p>";

function setup()
{
	base = document.getElementById("Terminator").innerHTML;
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
	document.getElementById("button1").innerHTML = "<button id=showMoreButton>Show more</button>";
	document.getElementById("showMoreButton").addEventListener("click", showMore);
}

function showMore()
{
	document.getElementById("button1").innerHTML = "<button id=showLessButton>Show less</button>";
	document.getElementById("Terminator").innerHTML += "<p>hello</p>";
	var text3 = document.createTextNode("hello");
	//document.getElementById("Terminator").innerHTML.insertBefore(text3,addTaskButton);
	document.getElementById("showLessButton").addEventListener("click", reset);
}