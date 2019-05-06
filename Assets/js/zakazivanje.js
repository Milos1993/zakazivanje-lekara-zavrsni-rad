
// Kreiranje forme i postavljanje atributa 
function makeReservation() {
  let form = document.createElement("form");
  form.setAttribute("method", "post");
  // Na koji mail korisnik salje svoje podatke
  form.setAttribute("action", "https://formspree.io/djordjevicmilos993@gmail.com");

  document.body.appendChild(form);
  form.submit();
}

let dugme = $('#button');
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