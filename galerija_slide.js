let indeksSlajda = 1; 
let tajmer; 

prikaziSlajdove(indeksSlajda);
pokreniTajmer();
postaviKlikoveNaTocke();
prilagodiStrelicama(); // Inicijalna provjera širine pri učitavanju

// --- NOVO: Funkcija za promjenu strelica ovisno o širini ekrana ---
function prilagodiStrelicama() {
  const lijeviGumb = document.querySelector('.galerija-gumb.lijevi');
  const desniGumb = document.querySelector('.galerija-gumb.desni');

  if (window.innerWidth < 500) {
    lijeviGumb.innerHTML = '&#10092;'; // Gornja strelica (ili sličan simbol)
    desniGumb.innerHTML = '&#10093;';  // Donja strelica
    // Napomena: Standardni entiteti za gore/dolje su &#10092; i &#10093; 
    // ili možeš koristiti strelice: &#9652; (gore) i &#9662; (dolje)
    lijeviGumb.innerHTML = '&#9652;'; 
    desniGumb.innerHTML = '&#9662;';
  } else {
    lijeviGumb.innerHTML = '&#10094;'; // Lijevo
    desniGumb.innerHTML = '&#10095;';  // Desno
  }
}

// Osluškivanje promjene veličine prozora
window.addEventListener('resize', prilagodiStrelicama);
// ----------------------------------------------------------------

function pokreniTajmer() {
  tajmer = setInterval(function() {
    mjenjajSlide(1);
  }, 3000);
}

function resetirajTajmer() {
  clearInterval(tajmer);
  pokreniTajmer();
}

function mjenjajSlide(n) {
  resetirajTajmer();
  prikaziSlajdove(indeksSlajda += n);
}

function trenutniSlide(n) {
  resetirajTajmer();
  prikaziSlajdove(indeksSlajda = n);
}

function postaviKlikoveNaTocke() {
  let tocke = document.getElementsByClassName("galerija-dot");
  for (let i = 0; i < tocke.length; i++) {
    tocke[i].onclick = function() {
      trenutniSlide(i + 1);
    };
  }
}

function prikaziSlajdove(n) {
  let i;
  let slajdovi = document.getElementsByClassName("galerija-slides");
  let tocke = document.getElementsByClassName("galerija-dot");

  if (n > slajdovi.length) { indeksSlajda = 1; }
  if (n < 1) { indeksSlajda = slajdovi.length; }

  for (i = 0; i < slajdovi.length; i++) {
    slajdovi[i].style.display = "none";
  }

  for (i = 0; i < tocke.length; i++) {
    tocke[i].className = tocke[i].className.replace(" aktivna", "");
  }

  if (slajdovi.length > 0) {
    slajdovi[indeksSlajda - 1].style.display = "block";
  }
  
  if (tocke.length > 0) {
    tocke[indeksSlajda - 1].className += " aktivna";
  }
}