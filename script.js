let button = document.getElementById("colorchange");
let container = document.getElementById("background");
// let body = document.getElementsByTagName("body");
let logo = document.getElementById("logo");

button.addEventListener("click", function() {
    container.classList.toggle("toggle-bg");
    logo.classList.toggle("toggle-text");
    button.classList.toggle("toggle-text");
    if (button.innerHTML === 'purple') {
        button.innerHTML = 'yellow';
    } else {
        button.innerHTML = 'purple';
    }
});