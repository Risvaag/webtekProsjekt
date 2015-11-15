
//FILE NAME: homepage.js
//WRITTEN BY: Andreas Williams
//WHEN: September 2015
//PURPOSE: read more and show less for the articles on the front page

//JavaScript for the read more button on the homepage

addEventListener("load", function() {
	setup();
	document.getElementById("news1button").addEventListener("click", News1ShowMore);
	document.getElementById("news2button").addEventListener("click", News2ShowMore);
	document.getElementById("news3button").addEventListener("click", News3ShowMore);
	document.getElementById("news4button").addEventListener("click", News4ShowMore);
});

//sets the preview text for the articles
var news1base = "As you may already know, we make the best vacuum cleaners in the world. Our new model, VacuumExtre2000HD, is THE best in the world.";
var news2base = "At MegaSuper INC we take care of our employees. Literally. If a employee call in sick, we send a nurse to feed him soup.";
var news3base = "- It's fire, said Sup Er K. Ewl in an interview with MTV. Sup Er K. Ewl's mixtape 'Meaner than a vacuum cleaner' will feature one track and has been in development for the last 4 days."
var news4base = "Sometimes, the hardest part of letting go is holding on. Tag a mate, sub for sub, like if you agree - Sup Er K. Ewl, August 2015"

function setup()
{
	var news1base = document.getElementById("news1").innerHTML;
	var news2base = document.getElementById("news2").innerHTML;
	var news3base = document.getElementById("news3").innerHTML;
	var news3base = document.getElementById("news4").innerHTML;
}

//sets the articles back to preview state

function reset1()
{
	if(news1base != undefined)
	{
		document.getElementById("news1").innerHTML = news1base;
	}
	else{
		document.getElementById("news1").innerHTML = "";
	}
	document.getElementById("news1buttonspot").innerHTML = "<button id=news1button>Read more</button>";
	document.getElementById("news1button").addEventListener("click", News1ShowMore);
}

function reset2()
{

	if(news2base != undefined)
	{
		document.getElementById("news2").innerHTML = news2base;
	}
	else{
		document.getElementById("news2").innerHTML = "";
	}
	document.getElementById("news2buttonspot").innerHTML = "<button id=news2button>Read more</button>";
	document.getElementById("news2button").addEventListener("click", News2ShowMore);
}
function reset3()
{
	if(news3base != undefined)
	{
		document.getElementById("news3").innerHTML = news3base;
	}
	else{
		document.getElementById("news3").innerHTML = "";
	}
	document.getElementById("news3buttonspot").innerHTML = "<button id=news3button>Read more</button>";
	document.getElementById("news3button").addEventListener("click", News3ShowMore);
}

function reset4()
{
	if(news4base != undefined)
	{
		document.getElementById("news4").innerHTML = news4base;
	}
	else{
		document.getElementById("news4").innerHTML = "";
	}
	document.getElementById("news4buttonspot").innerHTML = "<button id=news4button>Read more</button>";
	document.getElementById("news4button").addEventListener("click", News4ShowMore);
}

//shows rest of the articles


function News1ShowMore()
{
	document.getElementById("news1buttonspot").innerHTML = "<button id=news1button>Show less</button>";
	document.getElementById("news1").innerHTML += "<br> <br> When we first designed VacuumExtre2000HD, we really didn't know we were making history. The project started out as a design for a new couch for Sup Er K. Ewl, as he has problems with his spine. His 10,000 dollars coach simply didn't please him. 4 hours later we could lay our eyes on the VacuumExtre2000HD. It will be avaible for purchase somewhere between 2020 and 2043.";
	document.getElementById("news1button").addEventListener("click", reset1);
}

function News2ShowMore()
{
	document.getElementById("news2buttonspot").innerHTML = "<button id=news2button>Show less</button>";
	document.getElementById("news2").innerHTML += "<br> <br> The expenses for the nurse will be deducted from the employee's salary. The emplyee has no other choice, but to accept the help from the nurse if he wants to keep his job. By doing so, we keep our employees healthy and working.";
	document.getElementById("news2button").addEventListener("click", reset2);
}

function News3ShowMore()
{
	document.getElementById("news3buttonspot").innerHTML = "<button id=news3button>Show less</button>";
	document.getElementById("news3").innerHTML += "<br> <br> For the beat, the skilled music producers at MegaSuper INC. have used the sound of vacuum cleaner in full action, accompanied by the feel and sound of Sup Er K. Ewl beating a sledgehammer against a large bucket. - It's the ultimate beat, says Sup Er K. Ewl as he flashes his smile and waves at the crowd during the interview.";
	document.getElementById("news3button").addEventListener("click", reset3);


}

function News4ShowMore()
{
	document.getElementById("news4buttonspot").innerHTML = "<button id=news4button>Show less</button>";
	document.getElementById("news4").innerHTML += "<br> <br> Sup Er K. Ewl thinks it's important to keep his employees inspired, and therefore, there's a new quote on the wall in the cafeteria every day. All the quotes are by Sup Er K. Ewl. When asked where he gets his inspiration from, he said 'I don't get inspired by anyone. I belive that getting inspired is the same as stealing another person's idea.'";
	document.getElementById("news4button").addEventListener("click", reset4);


}