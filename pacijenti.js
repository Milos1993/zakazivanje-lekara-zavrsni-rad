const pacijenti = {
    "results": [{"username" : "miske", "password" : "123", "fullName" : "Milos Djordjevic"},
    {"username" : "ivan", "password" : "jadnik", "fullName" : "Ivan Varioc" }]
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + "; path=/";
    
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }



function logIn () {
    var userName = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    for (let i = 0; i < pacijenti.results.length; i++) {
        var pacijent = pacijenti.results[i];
        if (pacijent.username == userName && pacijent.password == password ) {
            alert("Ulogovali ste se");
            setCookie("trenutniKorisnik", pacijent.fullName, 1);
            setCookie("trenutnaLozinka", pacijent.password, 1);

            location.href = "index.html";
            return 0;
        }
    }

    alert("Ne postoji korisnik ili je sifra pogresna");

}

function postaviTrenutnogKorisnika () {
    var trenutniKorisnik = getCookie("trenutniKorisnik");
    var ivan = document.getElementById("trenutniKorisnik");
    ivan.innerHTML = trenutniKorisnik;
} 

function prikaziKorisnika () {
    postaviTrenutnogKorisnika();
    var imePrezime = getCookie("trenutniKorisnik");
    var lozinka = getCookie('trenutnaLozinka');

    var fullName = document.getElementById('fullName');
    fullName.innerHTML = imePrezime;

    var sifra = document.getElementById('lozinka');
    sifra.innerHTML = lozinka;
}

function logOut () {
    setCookie("trenutniKorisnik", "", 1);
    setCookie("trenutnaLozinka", "", 1);
}