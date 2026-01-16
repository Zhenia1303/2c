let a = 'secretInput';

function doWork() {
    console.log("provide magic");
}
// wole switch
switch (a) {
    case 1:
        console.log("przelaczam do dzialu obslugi reklamacji");
        break;
    case 2:
    case 5:
    case 8:
        console.log("hakuje...");
        break;
    case 3:
        alert("haslo: okon");
        break;
    case 4:
    case 6:
    case 7:
    case 9:
        doWork();
        break;
    case 'secretInput':
        console.log("secretInput");
        break;
    default:
        console.log("not implemented method");
        break;
}


if (a === 1) {
    console.log("przelaczam do dzialu obslugi reklamacji");
} else if (a === 2 || a === 5 || a === 8) {
    console.log("hakuje...");
} else if (a === 3) {
    alert("haslo: okon");
} else if (a === 4 || a === 6 || a === 7 || a === 9) {
    doWork();
} else if (a === 'secretInput') {
    console.log("secretInput");
} else {
    console.log("not implemented method");
}
