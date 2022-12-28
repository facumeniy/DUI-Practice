const dropdown = document.getElementById("nav-dropdown");
const men = document.getElementById("men");
const menContainer = document.getElementById("men-container");

dropdown.classList.add("hide");

men.addEventListener('mouseover', () => {
    setTimeout(function() {
        menContainer.classList.add("selected");
        dropdown.classList.remove("hide");
    }, 350);
})

men.addEventListener('mouseout', () => {
    setTimeout(function() {
        menContainer.classList.remove("selected");
        dropdown.classList.add("hide");
    }, 350);
})