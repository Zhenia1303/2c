function randoms() {
    return Math.floor(Math.random() * 100);
}

let tab = [randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(), randoms(),];


console.log(tab[7]);

let rev = tab.sort(function (a, b) { return (a - b) * -1})
console.log(rev.toString());

tab.pop();
console.log(tab.toString());

let random = Math.floor(Math.random() * 100);
if (random > 69) {
    tab.unshift('secretInput');
} else {
    tab.unshift(random);
}
console.log(tab.toString());

let lastElements1 = tab.slice(-2);
let lastElements2 = tab.slice(-2);
tab.pop();
tab.pop();
lastElements1[0] = lastElements1[1];
lastElements1[1] = lastElements2[0];
tab = tab.concat(lastElements1);
console.log(tab.toString());