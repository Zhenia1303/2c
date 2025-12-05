let Dark = false;
let btn = document.getElementById('bth');

if (localStorage.getItem("darkMode") === "true") {
    Dark = true;
    document.body.classList.add("dark-mode");
}

updateButtonText();

function updateButtonText() {
    if (Dark) {
        btn.innerText = "DARK MODE";
    }   else {
        btn.innerText = "LIGHT MODE";
    }
}

function toggleDarkMode() {
    Dark = !Dark;
    updateButtonText();
    document.body.classList.toggle("dark-mode"); 

    localStorage.setItem("darkMode", Dark);
}

btn.addEventListener("click", toggleDarkMode);

