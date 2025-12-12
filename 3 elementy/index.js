let bth = document.getElementById('przycisk');
let divv = document.getElementById('element_div');
let spann = document.getElementById('element_span');
let opis = document.getElementById('opis');

function button() {
    opis.innerText = this.id;
}

function div() {
    opis.innerText = this.id;
}

function span() {
    opis.innerText = this.id;
}

bth.addEventListener('click', button);
divv.addEventListener('click', div);
spann.addEventListener('click', span);