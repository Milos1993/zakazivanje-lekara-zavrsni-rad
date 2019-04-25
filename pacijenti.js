const pacijenti = {
    "results": [{"username" : "milos", "password" : "123", "fullName" : "Miloš Djordjević", "datum" : "25.04.2019", "JMBG" : "0202993722229", "anamneza" : "Leči se od 2016.god od povišenog pritiska"},
    {"username" : "ivan", "password" : "1234", "fullName" : "Ivan Jovanović", "datum" : "17.03.2019", "JMBG" : "3108993722228", "anamneza" : "Dva dana se oseća nestabilno i ima vrtoglavicu"}]
}

function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + "; path=/";
    
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
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



function logIn () {
    
    let userName = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    for (let i = 0; i < pacijenti.results.length; i++) {
        let pacijent = pacijenti.results[i];
        if (pacijent.username == userName && pacijent.password == password ) {
            alert("Ulogovali ste se");
            setCookie("trenutniKorisnik", pacijent.fullName, 1);
            setCookie("trenutnaLozinka", pacijent.password, 1);
            setCookie("datumPregleda", pacijent.datum, 1);
            setCookie("jedBroj", pacijent.JMBG, 1);
            setCookie('anamneza', pacijent.anamneza, 1);
            
            

            location.href = "index.html";
            
            return 0;
        }
        location.href = "logIn.html";
        
    }
    
    alert("Ne postoji korisnik ili je sifra pogresna");
    
   

}

function postaviTrenutnogKorisnika () {
    let trenutniKorisnik = getCookie("trenutniKorisnik");
    let ivan = document.getElementById("trenutniKorisnik");
    ivan.innerHTML = trenutniKorisnik;
  
   
    }
 





function prikaziKorisnika () {
    postaviTrenutnogKorisnika();
   
    let imePrezime = getCookie("trenutniKorisnik");
    let datum = getCookie("datumPregleda");
    let jedinstveniBroj = getCookie('jedBroj');
    let anamneza = getCookie('anamneza');

    let fullName = document.getElementById('fullName');
    fullName.innerHTML = imePrezime;


    let datumPregleda = document.getElementById('datum');
    datumPregleda.innerHTML = datum;

    let jmbg = document.getElementById('jmbg');
    jmbg.innerHTML = jedinstveniBroj;

    let anamneza1 = document.getElementById('anamneza');
    anamneza1.innerHTML = anamneza;


}


function logOut () {
    setCookie("trenutniKorisnik", "", 1);
    setCookie("trenutnaLozinka", "", 1);
}