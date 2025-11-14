let rew = document.getElementById('rewers');


function rewers() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;


    if (a.length === 0 || b.length === 0) {
        rew.innerText = "puste pole";
    } else {
        let rewWordone = a[0] + b.slice(1);
        let rewWordtwo = b[0] + a.slice(1);
        rew.innerText = rewWordone + "" + rewWordtwo;
    }
}

let bth = document.getElementById('bth');
bth.addEventListener("click", rewers);