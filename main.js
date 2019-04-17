
fetch('https://randomuser.me/api/?results=6')
.then(response => response.json())
.then(podaci => prikaziDoktora(podaci))


function prikaziDoktora(korisnici) {
    const doktori = document.getElementById('doktori');
    let kartica = ``;

    for(let i = 0; i < korisnici.results.length; i++) {
        const doktor = korisnici.results[i];

        kartica += `
        
        <div class="col-sm-12 col-md-4 col-lg-4>
        <div class="card">
        <div class="card-body">
        <img src="${doktor.picture.large}" class="card-img-top" alt="${doktor.name.first}"> 
          <h5 class="card-title velikoSlovo">${doktor.name.first} ${doktor.name.last}</h5>
          <p class="card-text">Email: ${doktor.email}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
        
        `
      
    }

    doktori.innerHTML = kartica
}





