/*
FILE NAME: dropdown.js
WRITTEN BY: Thomas Skuggevik, Andreas Risvaag
WHEN: November 2015
PURPOSE: load the navbar and rollover function, as well as the footer, on every page
*/

addEventListener("pageshow", function(){

	///adds navbar
	addNavbar();

	///adds footer
	addFooter();

	///adds rollover function to navbar
	document.getElementById("sup_dropfrom").addEventListener("mouseover", function(){ showMenu(1); });
	document.getElementById("sup_dropfrom").addEventListener("mouseout", function(){ hideMenu(1); });

	document.getElementById("about_dropfrom").addEventListener("mouseover", function(){ showMenu(2); });
	document.getElementById("about_dropfrom").addEventListener("mouseout", function(){ hideMenu(2); });
});

function addNavbar()
{
	var navbar = '<nav class="fixed-nav-bar"> <div id="menu" class="menu"><ul class="menu_items"><li id="logo"><a href="homepage.html"><img src="Images/logo.jpg" alt="logo"></a></li><li><a href="homepage.html">Home</a></li><li><a href="products.html">Products</a></li><li><a href="contact.html">Contact</a></li><li id="sup_dropfrom"><a href="support.html">Support&#9660;</a><ul id="sup_dropdown"><li><a href="faq.html">FAQ</a></li><li><a href="manuals.html">Manuals</a></li><li><a href="software.html">Software</a></li></ul></li><li id="about_dropfrom"><a href="about.html">About&#9660;</a><ul id="about_dropdown"><li ><a href="employees.html">Employees</a></li></ul></li></li></ul></div></nav>'
	document.getElementById("navbarslot").innerHTML = navbar;
	var links = document.createElement("Link");
	links.rel = "shortcut icon";
	links.href = "Images/logo4.jpg";
	links.type = "image/x-icon";
	document.head.appendChild(links);
	
}

function addFooter()
{
	var footer = document.createElement("FOOTER");
	var y = document.createElement("P");
	var z = document.createTextNode("MegaSuper Industries Incorporated | contact@msinc.com | Lade Alle 15, 7041 Trondheim</p>");
	var twitter = document.createElement("a");
	var facebook = document.createElement("a");
	twitter.setAttribute("href", "http://www.twitter.com");
	facebook.setAttribute("href", "http://www.facebook.com");
	var img1 = document.createElement("IMG");
	var img2 = document.createElement("img");
	img1.src ="Images/twitter.jpg";
	img1.alt ="twitter";
	img1.setAttribute("class","footerimg");
	img2.src ="Images/facebook.jpg";
	img2.alt ="facebook";
	img2.setAttribute("class", "footerimg");
	y.appendChild(z);
	footer.appendChild(y);
	twitter.appendChild(img1);
	facebook.appendChild(img2);
	footer.appendChild(twitter);
	footer.appendChild(facebook);
	document.body.appendChild(footer);
}


 function showMenu(n){
 	if (n == 1){
 		document.getElementById("sup_dropdown").style.display="table";
 	}
 	else if (n == 2){
 		document.getElementById("about_dropdown").style.display="table";
 	}

 }

function hideMenu(n){
	if (n == 1){
 		document.getElementById("sup_dropdown").style.display="none";
 	}
 	else if (n == 2){
 		document.getElementById("about_dropdown").style.display="none";
 	}

}