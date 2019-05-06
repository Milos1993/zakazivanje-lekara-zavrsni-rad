
// U konstantu pacijenti napravljeni objekti za logIn i podaci o istoriji pacijenata
const pacijenti = {
    "results": [{ "username": "milos", "password": "123", "fullName": "Miloš Djordjević", "datum": "25.04.2019", "JMBG": "0202993722229", "anamneza": "Leči se od 2016.god od povišenog pritiska", "terapija": "Enalapril 2,5mg 1 dnevno", "kontrola": "Za dva meseca" },
    { "username": "ivan", "password": "1234", "fullName": "Ivan Jovanović", "datum": "17.03.2019", "JMBG": "3108993722228", "anamneza": "Dva dana se oseća nestabilno i ima vrtoglavicu", "terapija": "Urutal 8mg", "kontrola": "Kontrola za dve nedelje sa osnovnim laboratorijskim analizama" }]
}
// Funkcija za postavljanje cookie-ja
function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    // Postavljanje vremena koliko cookie traje
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + "; path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
// LogIn funkcija
function logIn() {
    // Pakuje u promenjivu vrednosti unete u username i password
    let userName = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    // Provera da li su tacni username i password 
    for (let i = 0; i < pacijenti.results.length; i++) {
        let pacijent = pacijenti.results[i];
        if (pacijent.username === userName && pacijent.password === password) {
            //  Ako je uspesno ulogovali ste se
            alert("Ulogovali ste se");
            // Postavljanje cookie-a, pozivanje promenjive pacijent i hvatanje odredjenog property-a
            setCookie("trenutniKorisnik", pacijent.fullName, 365);
            setCookie("trenutnaLozinka", pacijent.password, 365);
            setCookie("datumPregleda", pacijent.datum, 365);
            setCookie("jedBroj", pacijent.JMBG, 365);
            setCookie('anamneza', pacijent.anamneza, 365);
            setCookie("terapija", pacijent.terapija, 365);
            setCookie("kontrola", pacijent.kontrola, 365);

            return 0;
        }
    }

    // Ukoliko korisnik je uneo pogresne podatke ostani na istoj stranici
    $(document).ready(
        function greska() {
            window.location.href = "logIn.html";
        },
        alert("Ne postoji korisnik ili je sifra pogresna")
    )
}

// Ispisivanje trenutnog ulogovanog korsnika u navigacioni bar
function postaviTrenutnogKorisnika() {
    let trenutniKorisnik = getCookie("trenutniKorisnik");
    let korisnik = document.getElementById("trenutniKorisnik");
    korisnik.innerHTML = trenutniKorisnik;
    if (trenutniKorisnik) {
        let element = document.getElementById("milos");
        element.style.display = "none";

    }
}

function prikaziKorisnika() {
    // Ubacivanje u promenjivu i pozivanje cookie-a u zavisnosti od property-ja
    let imePrezime = getCookie("trenutniKorisnik");
    let datum = getCookie("datumPregleda");
    let jedinstveniBroj = getCookie('jedBroj');
    let anamneza = getCookie('anamneza');
    let terapija = getCookie('terapija');
    let kontrola = getCookie('kontrola');
    // Ispisivanje podataka u html stranicu/tabelu
    let fullName = document.getElementById('fullName');
    fullName.innerHTML = imePrezime;

    let datumPregleda = document.getElementById('datum');
    datumPregleda.innerHTML = datum;

    let jmbg = document.getElementById('jmbg');
    jmbg.innerHTML = jedinstveniBroj;

    let anamneza1 = document.getElementById('anamneza');
    anamneza1.innerHTML = anamneza;

    let terapija1 = document.getElementById('terapija');
    terapija1.innerHTML = terapija;

    let kontrola1 = document.getElementById('kontrola');
    kontrola1.innerHTML = kontrola;
}
// logout funkcija

function logOut() {
    setCookie("trenutniKorisnik", "", 365);
    setCookie("trenutnaLozinka", "", 365);
}

var dugme = $('#button');
// Scroll funkcija koja pod uslovom dodaje klasu/dugme ili brise 
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        dugme.addClass('show');
    } else {
        dugme.removeClass('show');
    }
});
// Click funkcija koja vraca korisnika na pocetak stranice za 300 milisekundi
dugme.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});