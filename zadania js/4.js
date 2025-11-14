let result_one = document.getElementById('result_one');
let result_two = document.getElementById('result_two');

function liczby() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;

    if (a.length !== 0 || b.length !== 0 || c.length !== 0) {
        let min = Math.min(a, b, c);
        let max = Math.max(a, b, c);
        result_one.innerText = "min:" + min;
        result_two.innerText = "max:" + max;
    }   else {
        result_one.innerText = "puste pole";
        result_two.style.visibility = "hidden";
    }

}

let bth = document.getElementById('bth');
bth.addEventListener("click", liczby);