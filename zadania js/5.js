let result = document.getElementById('result');

function text() {
    let inp = document.getElementById('inp').value;


    if (inp.length >= 6 && inp.endsWith("kot")) {
        result.innerText = "Napis ma co najmniej 6 znaków i kończy się 'kot'.";    
    } else if (inp.length >= 6) {
        result.innerText = "Napis ma co najmniej 6 znaków, ale nie kończy się 'kot'.";
    } else if (inp.endsWith("kot")) {
        result.innerText = "Napis nie ma co najmniej 6 znaków, ale kończy się 'kot'.";
    } else {
        result.innerText = "Napis nie spełnia żadnego z warunków.";
    }
}

let bth = document.getElementById('bth');
bth.addEventListener("click", text);