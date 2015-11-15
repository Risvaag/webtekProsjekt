addEventListener("load", function(){
	setup();
	document.getElementById("sup_dropfrom").addEventListener("mouseover", function(){ showMenu(1); });
	document.getElementById("sup_dropfrom").addEventListener("mouseout", function(){ hideMenu(1); });

	document.getElementById("pro_dropfrom").addEventListener("mouseover", function(){ showMenu(2); });
	document.getElementById("pro_dropfrom").addEventListener("mouseout", function(){ hideMenu(2); });

	document.getElementById("about_dropfrom").addEventListener("mouseover", function(){ showMenu(3); });
	document.getElementById("about_dropfrom").addEventListener("mouseout", function(){ hideMenu(3); });
});

function setup()
{
	var navbar = '<nav class="fixed-nav-bar"> <div id="menu" class="menu"><ul class="menu_items"><li id="logo"><a href="homepage.html"><img src="Images/logo.jpg" alt="logo"></a></li><li><a href="homepage.html">Home</a></li><li id="pro_dropfrom"><a href="products.html">Products&#9660;</a><ul id="pro_dropdown"><li ><a href="faq.html">Product 1</a></li></ul></li><li><a href="contact.html">Contact</a></li><li id="sup_dropfrom"><a href="support.html">Support&#9660;</a><ul id="sup_dropdown"><li><a href="faq.html">FAQ</a></li><li><a href="manuals.html">Manuals</a></li><li><a href="software.html">Software</a></li></ul></li><li id="about_dropfrom"><a href="about.html">About&#9660;</a><ul id="about_dropdown"><li ><a href="employees.html">Employees</a></li></ul></li></li></ul></div></nav>'
	document.getElementById("navbarslot").innerHTML = navbar;
}



 function showMenu(n){
 	if (n == 1){
 		document.getElementById("sup_dropdown").style.display="table";
 	}
 	else if (n == 2){
 		document.getElementById("pro_dropdown").style.display="table";
 	}
 	else if (n == 3){
 		document.getElementById("about_dropdown").style.display="table";
 	}

 }

function hideMenu(n){
	if (n == 1){
 		document.getElementById("sup_dropdown").style.display="none";
 	}
 	else if (n == 2){
 		document.getElementById("pro_dropdown").style.display="none";
 	}
 	else if (n == 3){
 		document.getElementById("about_dropdown").style.display="none";
 	}

}