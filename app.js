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



// CAROUSEL
const image = document.querySelector('#image');
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');

let currentIndex = 0;

const imageURLs = [
    '/images/slide1.jpg',
    '/images/slide2.jpg',
    '/images/adidas.png'
];

image.src = imageURLs[currentIndex];

prevButton.addEventListener('click', () => {
    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = imageURLs.length - 1;
    }

    image.src = imageURLs[currentIndex];
});

nextButton.addEventListener('click', () => {
    currentIndex++;

    if (currentIndex === imageURLs.length){
      currentIndex = 0;
    }

    image.src = imageURLs[currentIndex];
});

function nextSlide() {
    currentIndex++; 

    if (currentIndex === imageURLs.length){
        currentIndex = 0;
    }

    image.src = imageURLs[currentIndex];
}

setInterval(nextSlide, 2000); 