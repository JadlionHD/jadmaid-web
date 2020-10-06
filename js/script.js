const sideNav = document.querySelectorAll(".sidenav");
const slider = document.querySelectorAll(".slider");
const parallax = document.querySelectorAll(".parallax");
const scrollspy = document.querySelectorAll(".scrollspy");
let options = {
	"height": 500,
	"indicators": true,
	"transition": 700
}

M.ScrollSpy.init(scrollspy);
M.Parallax.init(parallax);
M.Slider.init(slider, options);
M.Sidenav.init(sideNav);