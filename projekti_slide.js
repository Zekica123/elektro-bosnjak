let indeksProjetk=1;

prikaziProjektSlajdove(indeksProjetk);
tockiceSlajdova();
promjenaStrelica();


function promjenaStrelica() {
  const prijeGumb = document.querySelector('.projekt-gumb.prije');
  const poslijeGumb = document.querySelector('.projekt-gumb.poslije');

  if (window.innerWidth < 500) {
    prijeGumb.innerHTML = '&#10092;'; // Gornja strelica (ili sličan simbol)
    poslijeGumb.innerHTML = '&#10093;';  // Donja strelica
    // Napomena: Standardni entiteti za gore/dolje su &#10092; i &#10093; 
    // ili možeš koristiti strelice: &#9652; (gore) i &#9662; (dolje)
    prijeGumb.innerHTML = '&#9652;'; 
    poslijeGumb.innerHTML = '&#9662;';
  } else {
    prijeGumb.innerHTML = '&#10094;'; // Lijevo
    poslijeGumb.innerHTML = '&#10095;';  // Desno
  }
}

window.addEventListener('resize', promjenaStrelica);

function mjenajajProjektSlide(n) {
  prikaziProjektSlajdove(indeksProjetk += n);
}

function trenutniProjektSlide(n) {
  prikaziProjektSlajdove(indeksProjetk = n);
}

function tockiceSlajdova() {
  let tockice=document.getElementsByClassName("projekti-dot");
  for(let i=0; i<tockice.length; i++) {
    tockice[i].onclick = function() {
      trenutniProjektSlide(i + 1);
    }
  }
}

function prikaziProjektSlajdove(n) {
  let i;
  let slajdovi=document.getElementsByClassName("projekti_slideshow");
  let tockice=document.getElementsByClassName("projekti-dot");

  if(n > slajdovi.length) { indeksProjetk = 1; }
  if(n < 1) { indeksProjetk = slajdovi.length; }

  for(i=0; i<slajdovi.length; i++) {
    slajdovi[i].style.display = "none";
  }

  for(i=0; i<tockice.length; i++) {
    tockice[i].className = tockice[i].className.replace(" aktivna", "");
  }

  if(slajdovi.length > 0) {
    slajdovi[indeksProjetk - 1].style.display = "block";
  }

  if(tockice.length > 0) {
    tockice[indeksProjetk - 1].className += " aktivna";
  }
}

// ----------------------------------------------------------------
