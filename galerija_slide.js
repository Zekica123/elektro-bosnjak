let indeksSlajda = 1; // Početni indeks bi trebao biti 1 radi tvoje logike
let tajmer; // Varijabla koja će čuvati naš interval

prikaziSlajdove(indeksSlajda);
pokreniTajmer(); // Pokrećemo automatsko mijenjanje

// Funkcija za automatsko pokretanje
function pokreniTajmer() {
  tajmer = setInterval(function() {
    mjenjajSlide(1);
  }, 3000); // 3000ms = 3 sekunde
}

// Funkcija za resetiranje tajmera kod klika
function resetirajTajmer() {
  clearInterval(tajmer); // Zaustavi trenutni tajmer
  pokreniTajmer();       // Pokreni ga ispočetka
}

function mjenjajSlide(n) {
  resetirajTajmer(); // Resetiraj kad se klikne naprijed/nazad
  prikaziSlajdove(indeksSlajda += n);
}

function trenutniSlide(n) {
  resetirajTajmer(); // Resetiraj kad se klikne na točkicu
  prikaziSlajdove(indeksSlajda = n);
}

function prikaziSlajdove(n) {
  let i;
  let slajdovi = document.getElementsByClassName("galerija-slides");
  let tocke = document.getElementsByClassName("galerija-dot");

  if (n > slajdovi.length) { indeksSlajda = 1; }
  if (n < 1) { indeksSlajda = slajdovi.length; }

  // Sakrij sve slajdove
  for (i = 0; i < slajdovi.length; i++) {
    slajdovi[i].style.display = "none";
  }

  // Makni "aktivna" klasu sa svih točkica
  for (i = 0; i < tocke.length; i++) {
    tocke[i].className = tocke[i].className.replace(" aktivna", "");
  }

  slajdovi[indeksSlajda - 1].style.display = "block";
  if (tocke.length > 0) {
    tocke[indeksSlajda - 1].className += " aktivna";
  }
}