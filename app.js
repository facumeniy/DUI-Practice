// HEADER
const header = document.getElementById("header");
const hideThreshold = 50;

const dropdown = document.getElementById("nav-dropdown");
const womenDropdown = document.getElementById("nav-women-dropdown");

const menNav = document.getElementById("men");
const womenNav = document.getElementById("women");

const menContainer = document.getElementById("men-container");
const womenContainer = document.getElementById("women-container");

const featuredBtn = document.getElementById("featured-btn");

// ONLOAD
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

// SELECTORS
const image = document.querySelector('#image');
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');

// GLOBAL VARIABLES
let currentIndex = 0;
const imageURLs = [
    'https://facumeniy.github.io/DUI-Practice/images/slide1.jpg',
    'https://facumeniy.github.io/DUI-Practice/images/slide2.jpg',
    'https://facumeniy.github.io/DUI-Practice/images/slide3.jpg'
];

const imageTexts = [
    'CELEBRÁ CON LOS CAMPEONES',
    'QATAR 2022',
    'ADIDAS COPA 2023'
];


// FUNCTIONS
function nextSlide() {
    currentIndex++; 

    if (currentIndex === imageURLs.length){
        currentIndex = 0;
    }

    image.src = imageURLs[currentIndex];
    featuredBtn.innerText = imageTexts[currentIndex];

}

// ONLOAD
image.src = imageURLs[currentIndex];
let changeSlide = setInterval(nextSlide, 10000);

// EVENT LISTENERS
prevButton.addEventListener('click', () => {
    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = imageURLs.length - 1;
    }

    image.src = imageURLs[currentIndex];
    featuredBtn.innerText = imageTexts[currentIndex];

    clearInterval(changeSlide);
    changeSlide = setInterval(nextSlide, 10000);
});

nextButton.addEventListener('click', () => {
    currentIndex++;

    if (currentIndex === imageURLs.length){
      currentIndex = 0;
    }

    image.src = imageURLs[currentIndex];
    featuredBtn.innerText = imageTexts[currentIndex];

    clearInterval(changeSlide);
    changeSlide = setInterval(nextSlide, 10000);
});
