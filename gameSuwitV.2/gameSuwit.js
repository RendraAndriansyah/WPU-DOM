function AIComp() {
  let comp = Math.random();
  if (comp < 0.34) return "semut";
  if (comp >= 0.34 && comp <= 0.67) return "orang";
  return "gajah";
}

function rules(comp, player) {
  if (player == comp) return "SERI !!!";
  if (player == "gajah") return comp == "orang" ? "MENANG !!!" : "KALAH !!!";
  if (player == "orang") return comp == "semut" ? "MENANG !!!" : "KALAH !!!";
  if (player == "semut") return comp == "gajah" ? "MENANG !!!" : "KALAH !!!";
}

// ANIMASI RANDOM GAMBAR
function randomImg() {
  const imgComputer = document.querySelector(".img-computer");
  const gambar = ["gajah", "orang", "semut"];
  const showHasil = document.querySelector(".info");
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }

    imgComputer.setAttribute("src", `img/${gambar[i++]}.png`);
    showHasil.innerHTML = "";
    if (i == gambar.length) i = 0;
  }, 100);
}

// !!! CODE YANG LEBIH EFEKTIF (RINGKAS DENGAN FUNCTION SAMA YANG BERULANG)
let nilaiPlayer = 0;
let nilaiComp = 0;

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pilih) {
  pilih.addEventListener("click", () => {
    const pilihanPlayer = pilih.className;
    const pilihanComp = AIComp();
    const hasil = rules(pilihanComp, pilihanPlayer);
    const showHasil = document.querySelector(".info");

    const skorPlayer = document.querySelector(".skor-player");
    const skorComp = document.querySelector(".skor-comp");

    randomImg();

    setTimeout(() => {
      const gambarPilihanComp = document.querySelector(".img-computer");
      gambarPilihanComp.setAttribute("src", `img/${pilihanComp}.png`);
      showHasil.textContent = hasil;
      if (hasil == "MENANG !!!") nilaiPlayer++;
      if (hasil == "KALAH !!!") nilaiComp++;
      skorPlayer.innerHTML = nilaiPlayer;
      skorComp.innerHTML = nilaiComp;
    }, 1000);
  });
});
// console.log(skorPlayer);

// !!! CODE KURANG EFEKTIF (TERLALU PANJANG & FUNCTION SAMA YANG BERULANG)

// const pGajah = document.querySelector('.gajah')
// const getInfo = document.querySelector('.info')
// pGajah.addEventListener('click', ()=>{
//    const getAIcomp = AIComp()
//    const getPlayer = pGajah.className
//    const getRules = rules(getAIcomp,getPlayer)
//    getInfo.textContent = getRules

//    const imgComp = document.querySelector('.img-computer')
//    imgComp.setAttribute('src', `img/${getAIcomp}.png`)
// })

// const pOrang = document.querySelector('.orang')
// pOrang.addEventListener('click', ()=>{
//    const getAIcomp = AIComp()
//    const getPlayer = pOrang.className
//    const getRules = rules(getAIcomp,getPlayer)
//    getInfo.textContent = getRules

//    const imgComp = document.querySelector('.img-computer')
//    imgComp.setAttribute('src', `img/${getAIcomp}.png`)
// })

// const pSemut = document.querySelector('.semut')
// pSemut.addEventListener('click', ()=>{
//    const getAIcomp = AIComp()
//    const getPlayer = pSemut.className
//    const getRules = rules(getAIcomp,getPlayer)
//    getInfo.textContent = getRules

//    const imgComp = document.querySelector('.img-computer')
//    imgComp.setAttribute('src', `img/${getAIcomp}.png`)
// })
