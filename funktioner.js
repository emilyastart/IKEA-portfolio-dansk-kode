/* TEMA 14 – Funktioner på hjemmesiden
   Billeder, videoer og tekster ændres i index.html
*/

document.addEventListener("DOMContentLoaded", () => {
  // 1. SKOLEBESKED

  const skolebesked = document.getElementById("skolebesked");
  const lukBesked = document.getElementById("lukBesked");

  if (skolebesked && lukBesked) {
    lukBesked.addEventListener("click", () => {
      skolebesked.hidden = true;
    });
  }

  // 2. PRODUKTGALLERI – 20 BILLEDER

  const billeder = document.querySelectorAll(".produktbillede");
  const billedeTal = document.getElementById("billedeTal");
  const forrige = document.getElementById("forrige");
  const naeste = document.getElementById("naeste");

  if (billeder.length > 0) {
    let aktivtBillede = 0;

    function visBillede(nummer) {
      aktivtBillede = (nummer + billeder.length) % billeder.length;

      billeder.forEach((billede, index) => {
        billede.hidden = index !== aktivtBillede;
      });

      if (billedeTal) {
        billedeTal.textContent = `${aktivtBillede + 1} / ${billeder.length}`;
      }
    }

    if (forrige) {
      forrige.addEventListener("click", () => {
        visBillede(aktivtBillede - 1);
      });
    }

    if (naeste) {
      naeste.addEventListener("click", () => {
        visBillede(aktivtBillede + 1);
      });
    }

    visBillede(0);
  }

  // 3. META GALLERI – 2 BILLEDER

  const metaBilleder = document.querySelectorAll(".meta-billede");
  const metaTal = document.getElementById("metaTal");
  const metaForrige = document.getElementById("metaForrige");
  const metaNaeste = document.getElementById("metaNaeste");

  if (metaBilleder.length > 0) {
    let aktivtMetaBillede = 0;

    function visMetaBillede(nummer) {
      aktivtMetaBillede = (nummer + metaBilleder.length) % metaBilleder.length;

      metaBilleder.forEach((billede, index) => {
        billede.hidden = index !== aktivtMetaBillede;
      });

      if (metaTal) {
        metaTal.textContent = `${aktivtMetaBillede + 1} / ${metaBilleder.length}`;
      }
    }

    if (metaForrige) {
      metaForrige.addEventListener("click", () => {
        visMetaBillede(aktivtMetaBillede - 1);
      });
    }

    if (metaNaeste) {
      metaNaeste.addEventListener("click", () => {
        visMetaBillede(aktivtMetaBillede + 1);
      });
    }

    visMetaBillede(0);
  }

  // 4. KAMPAGNEMATERIALE – SLIDESHOW MED 5 BILLEDER

  document.querySelectorAll(".kampagne-slideshow").forEach((slideshow) => {
    const slides = slideshow.querySelectorAll("img.slide");
    const taeller = slideshow.querySelector(".slide-taeller");
    const pilForrige = slideshow.querySelector(".slide-pil.forrige");
    const pilNaeste = slideshow.querySelector(".slide-pil.naeste");

    if (slides.length === 0) return;

    let aktivSlide = 0;

    function visSlide(nummer) {
      aktivSlide = (nummer + slides.length) % slides.length;

      slides.forEach((slide, index) => {
        slide.classList.toggle("aktiv", index === aktivSlide);
      });

      if (taeller) {
        taeller.textContent = `${aktivSlide + 1} / ${slides.length}`;
      }
    }

    if (pilForrige) {
      pilForrige.addEventListener("click", () => {
        visSlide(aktivSlide - 1);
      });
    }

    if (pilNaeste) {
      pilNaeste.addEventListener("click", () => {
        visSlide(aktivSlide + 1);
      });
    }

    visSlide(0);
  });

  // 5. HVIS ET BILLEDE MANGLER

  document.querySelectorAll("img").forEach((billede) => {
    function billedeMangler() {
      // Skjul kun det billede, der ikke kan indlæses.
      billede.style.visibility = "hidden";
      console.warn("Billedet kunne ikke indlæses:", billede.src);
    }

    billede.addEventListener("error", billedeMangler);

    if (billede.complete && billede.naturalWidth === 0) {
      billedeMangler();
    }
  });
});
