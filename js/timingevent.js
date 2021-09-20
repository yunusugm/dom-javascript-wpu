//! setTimeOut()

setTimeout(function getMessage() {
  console.log('Hello');
}, 5000);

//? Hentikan setTimeOut di tengah"
const cek = setTimeout(function () {
  console.log('tess');
}, 5000);

const button = document.getElementById('btn');
// button.addEventListener('click', () => {
//   clearTimeout(cek);
//   console.log('stop');
// });

//! setInterval()
const interval = setInterval(() => {
  console.log('interval');
}, 2000);

//? Hentikan setInterval
// button.addEventListener('click', function () {
//   clearInterval(interval);
//   console.log('interval stop');
// });

//! LATIHAN

const tanggalTujuan = new Date('Apr 8, 2021 07:24:10').getTime();

const hitungMundur = setInterval(() => {
  const now = new Date().getTime();
  const selisih = tanggalTujuan - now;
  const day = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60 * 60));
  const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((selisih % (1000 * 60)) / 1000);
  const teks = document.getElementById('teks');
  teks.innerHTML = `waktu anda tinggal ${day}hari ${jam}jam ${menit}menit ${detik}detik lagi`;

  if (selisih <= 0) {
    clearInterval(hitungMundur);
    teks.innerHTML = 'Waktu HABIS';
  }
}, 1000);
