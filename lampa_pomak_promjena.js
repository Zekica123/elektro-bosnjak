
  const lampa = document.getElementById("lampa");
  const linija = document.querySelector(".lampa_container hr");

  let ukljucena = false;
  let animira = false;

  lampa.addEventListener("click", () => {
    if (animira) return; // spriječi spam klikove
    animira = true;

    linija.classList.toggle("aktivno");

    setTimeout(() => {
      ukljucena = !ukljucena;
      lampa.src = ukljucena
        ? "slike/lampa_nar.svg"
        : "slike/lampa_crna.svg";

      // pokreni animaciju lampe
      lampa.classList.remove("pomak");
      void lampa.offsetWidth;
      lampa.classList.add("pomak");

      animira = false;
    }, 600); // mora biti isto kao CSS transition
  });
