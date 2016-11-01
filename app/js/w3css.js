
// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
	var navbar = document.getElementById("myNavbar");
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		navbar.className = "w3-navbar" + " w3-card-2" + " w3-animate-top" + " w3-black";
	} else {
		navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-black", "");
	}
}

// Toggle between showing and hiding the sidenav when clicking the menu icon
var mySidenav = document.getElementById("mySidenav");

function w3_open() {
	if (mySidenav.style.display === 'block') {
		mySidenav.style.display = 'none';
	} else {
		mySidenav.style.display = 'block';
	}
}

// Close the sidenav with the close button
function w3_close() {
	mySidenav.style.display = "none";
}
// Modal Image Gallery
function onClick(element) {
	document.getElementById("img01").src = element.src;
	document.getElementById("modal01").style.display = "block";
	var captionText = document.getElementById("caption");
	captionText.innerHTML = element.alt;
}
