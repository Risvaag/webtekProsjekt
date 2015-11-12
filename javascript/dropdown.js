window.addEventListener("load", function(){
	document.getElementById("sup_dropfrom").addEventListener("mouseover", function(){ showMenu(1); });
	document.getElementById("sup_dropfrom").addEventListener("mouseout", function(){ hideMenu(1); });

	document.getElementById("pro_dropfrom").addEventListener("mouseover", function(){ showMenu(2); });
	document.getElementById("pro_dropfrom").addEventListener("mouseout", function(){ hideMenu(2); });

	document.getElementById("about_dropfrom").addEventListener("mouseover", function(){ showMenu(3); });
	document.getElementById("about_dropfrom").addEventListener("mouseout", function(){ hideMenu(3); });
});



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