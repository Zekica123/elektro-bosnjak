const forma = document.getElementById("moja-forma");
const skocniProzor = document.getElementById("skocni-prozor-omotac");

// Funkcija za zatvaranje prozora
function zatvoriProzor() {
  skocniProzor.style.display = "none";
}

forma.addEventListener("submit", async function(event) {
  event.preventDefault(); // Zaustavlja redirect
  
  const podaci = new FormData(event.target);
  
  fetch(event.target.action, {
    method: forma.method,
    body: podaci,
    headers: { 'Accept': 'application/json' }
  }).then(odgovor => {
    if (odgovor.ok) {
      // Prikaži skočni prozor
      skocniProzor.style.display = "flex"; 
      forma.reset(); // Isprazni polja forme
    } else {
      alert("Ups! Došlo je do problema pri slanju.");
    }
  }).catch(greška => {
    alert("Greška: Nije moguće poslati poruku. Provjerite internetsku vezu.");
  });
});