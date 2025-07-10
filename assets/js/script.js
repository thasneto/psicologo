const btn = document.getElementById("return");

window.onload = function () {
	btn.style.display = "none";
};

window.onscroll = function() {
	btn.style.display = (window.scrollY > 100) ? "block" : "none";
};

function voltarAoTopo () {
	window.scrollTo({top: 0, behavior: "smooth"});
};