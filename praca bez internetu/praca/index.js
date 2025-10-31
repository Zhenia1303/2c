function oblicz() {
    waga = document.getElementById('waga').value
    wzrost = document.getElementById('wzrost').value
    wynik = document.getElementById('wynik')
    res = document.getElementById('result')


    if ((waga == '' || wzrost == '') || (waga == NaN || wzrost == NaN)) {
        res.innerHTML = "Wprowadź poprawne dane!"
        res.style.color = "red"

        return
    }
    if (wzrost == 0 && waga != NaN) {
        res.innerHTML = "Ty głuptasie ^_o!"
        res.style.color = "pink"

        return
    }

    wzrost = wzrost / 100
    BMI = waga / (wzrost * wzrost)
    res.innerHTML = ("Twoje BMI wynos" + BMI)
    BMI = parseFloat(BMI)

    if (BMI < 18.5) {
        wynik.innerHTML = "klasyfikacja: Niedowaga"
        wynik.style.color = "blue"

        return
    } else if (18.6 < BMI || BMI < 24.9) {
        wynik.innerTextHTML = "klasyfikacja: Waga prawidlowa"
        wynik.style.color = "green"

        return
    } else if (25.0 < BMI || BMI < 29.9) {
        wynik.innerHTML = ("klasyfikacja: Nadwaga")
        wynik.style.color = "orange"

        return
    } else if (BMI < 30) {
        wynik.innerHTML = ("klasyfikacja: Otylosc")
        wynik.style.color = "red"

        return
    }


}

click = document.getElementById('click');
click.addEventListener("click", oblicz);
