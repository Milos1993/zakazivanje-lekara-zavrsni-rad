
// Pozivanje id-a doktori i ubacivanje u konstantu
const doktori = document.getElementById('doktori');

let kartica = ``;
// For loop da prodje kroz sve korisnike i pravi kartice za svakog posebno
for (let i = 0; i < korisnici.results.length; i++) {
  const doktor = korisnici.results[i];

  kartica += `   
        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4>
        <div class="card">
        <div class="card-body">
        <img src="${doktor.picture.large}" value=" class="card-img-top" alt="${doktor.name.first}"> 
          <h5 class="card-title velikoSlovo">${doktor.name.first} ${doktor.name.last}</h5>
          <h5>${doktor.name.specijalnost}</h5>
          <p class="card-text">Email: ${doktor.email}</p>
          
        </div>
      </div>
      </div>

        `
}
// Ispisivanje na html stranicu
doktori.innerHTML = kartica

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
