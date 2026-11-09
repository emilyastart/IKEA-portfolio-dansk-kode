// TEMA 14 – Funktioner på hjemmesiden
// Billeder, videoer og tekster ændres i index.html

// 1. SKOLEBESKED

const skolebesked = document.getElementById("skolebesked");

document.getElementById("lukBesked").addEventListener("click", () => {
  skolebesked.hidden = true;
});

// 2. PRODUKTGALLERI – 20 BILLEDER

const billeder = document.querySelectorAll(".produktbillede");
const billedeTal = document.getElementById("billedeTal");

let aktivtBillede = 0;

function visBillede(nummer) {
  billeder[aktivtBillede].hidden = true;

  aktivtBillede = (nummer + billeder.length) % billeder.length;

  billeder[aktivtBillede].hidden = false;

  billedeTal.textContent = `${aktivtBillede + 1} / ${billeder.length}`;
}

document.getElementById("forrige").addEventListener("click", () => {
  visBillede(aktivtBillede - 1);
});

document.getElementById("naeste").addEventListener("click", () => {
  visBillede(aktivtBillede + 1);
});

// 3. META GALLERI – 2 BILLEDER

const metaBilleder = document.querySelectorAll(".meta-billede");
const metaTal = document.getElementById("metaTal");

let aktivtMetaBillede = 0;

function visMetaBillede(nummer) {
  metaBilleder[aktivtMetaBillede].hidden = true;

  aktivtMetaBillede = (nummer + metaBilleder.length) % metaBilleder.length;

  metaBilleder[aktivtMetaBillede].hidden = false;

  metaTal.textContent = `${aktivtMetaBillede + 1} / ${metaBilleder.length}`;
}

document.getElementById("metaForrige").addEventListener("click", () => {
  visMetaBillede(aktivtMetaBillede - 1);
});

document.getElementById("metaNaeste").addEventListener("click", () => {
  visMetaBillede(aktivtMetaBillede + 1);
});

// 4. HVIS ET BILLEDE MANGLER

document.querySelectorAll("img").forEach((billede) => {
  billede.addEventListener("error", () => {
    billede.parentElement.classList.add("billede-mangler");
  });

  if (billede.complete && billede.naturalWidth === 0) {
    billede.parentElement.classList.add("billede-mangler");
  }
});
