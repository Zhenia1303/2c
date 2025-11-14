let text = document.getElementById('text');

function taro() {
    let random = Math.random() * 100;
    if (random <= 33) {
        text.innerText = "Prawdopodobieństwo, że tak będzie wynosi:" + random + "%";
        text.style.color = "red";
    }   else if (random >= 34 && random <=66) {
        text.innerText = "Prawdopodobieństwo, że tak będzie wynosi:" + random + "%";
        text.style.color = "blue";
    } else {
        text.innerText = "Prawdopodobieństwo, że tak będzie wynosi:" + random + "%";
        text.style.color = "green";
    }
}


let bth = document.getElementById('bth');
bth.addEventListener("click", taro);