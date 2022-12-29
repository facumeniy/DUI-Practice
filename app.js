const dropdown = document.getElementById("nav-dropdown");
const womenDropdown = document.getElementById("nav-women-dropdown");

const menNav = document.getElementById("men");
const womenNav = document.getElementById("women");

const menContainer = document.getElementById("men-container");
const womenContainer = document.getElementById("women-container");

dropdown.classList.add("hide");
womenDropdown.classList.add("hide");

menNav.addEventListener('mouseover', () => {
    setTimeout(function() {
        menContainer.classList.add("selected");
        dropdown.classList.remove("hide");
    }, 350);
})

menNav.addEventListener('mouseout', () => {
    setTimeout(function() {
        menContainer.classList.remove("selected");
        dropdown.classList.add("hide");
    }, 350);
})

womenNav.addEventListener('mouseover', () => {
    setTimeout(function() {
        womenContainer.classList.add("selected");
        womenDropdown.classList.remove("hide");
    }, 350);
})

womenNav.addEventListener('mouseout', () => {
    setTimeout(function() {
        womenContainer.classList.remove("selected");
        womenDropdown.classList.add("hide");
    }, 350);
})




var carousel = document.getElementById("carousel");
var slides = carousel.getElementsByClassName("slide");
var currentSlide = 0;

function nextSlide() {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = "block";
}

setInterval(nextSlide, 10000); 