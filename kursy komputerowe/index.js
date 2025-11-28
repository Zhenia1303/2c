let Dark = false;
let bth = document.getElementById('bth');

function darkmode() {
    if (Dark) {
        bth.innerText = "DARK MODE";
    } else {
        bth.innerText = "LIGHT MODE"
    }
}

bth.addEventListener('click', function() {
    let body = document.getElementsByTagName('body')[0];
    Dark = !Dark;
    darkmode();
    
    body.classList.toggle('dark-mode');
})