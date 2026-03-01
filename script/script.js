const btn = document.getElementById("return");
const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementsByClassName("nav-links")[1];

window.onload = function () {
	btn.style.display = "none";
};

window.onscroll = function() {
	btn.style.display = (window.scrollY > 100) ? "block" : "none";
};

function voltarAoTopo () {
	window.scrollTo({top: 0, behavior: "smooth"});
};

function abrirMenu () {
	if (menu.style.display == "flex") {
		menu.style.display = "none";
	} else {
		menu.style.display = "flex";
	};

};