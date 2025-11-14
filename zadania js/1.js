let result = document.getElementById('result');

function trojkat() {
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let c = Number(document.getElementById('c').value);

    let p = (a + b + c) / 2;
    let P = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    if ((a + b) > c && (a + c) > b && (b + c) > a) {
        result.innerHTML = P;
    } else {
        result.innerText = " Z podanych boków nie sposób utworzyć trójkąta!"
    }
}

    let bth = document.getElementById('bth');
    bth.addEventListener("click", trojkat);