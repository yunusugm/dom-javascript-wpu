// ! CARA KU
// const buttonRed = document.querySelector('.btn-red');
// const buttonBlue = document.querySelector('.btn-blue');
// const buttonYellow = document.querySelector('.btn-yellow');
// const buttonWhite = document.querySelector('.btn-white');
// const body = document.querySelector('body');
// body bisa ditangkap dengan document.body

// buttonRed.addEventListener('click', function () {
//   body.style.backgroundColor = 'red';
// });
// buttonBlue.addEventListener('click', function () {
//   body.style.backgroundColor = 'blue';
// });
// buttonYellow.addEventListener('click', function () {
//   body.style.backgroundColor = 'yellow';
// });
// buttonWhite.addEventListener('click', function () {
//   body.style.backgroundColor = 'white';
// });

// ! CARA WPUNPAS
const buttonSolo = document.getElementById('warna');
buttonSolo.onclick = function () {
  //   document.body.setAttribute('class', 'aqua');
  document.body.classList.toggle('aqua');
};

// ? buat elemen baru
const newEl = document.createElement('button');
const newText = document.createTextNode('Warna random');

newEl.appendChild(newText);

newEl.setAttribute('type', 'button');

buttonSolo.after(newEl);

//? generate warna random
newEl.addEventListener('click', function () {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

// ! SLIDER COLOR GENERATOR

// ambil slidernya
const redSlider = document.querySelector('input[name=merah]');
const greenSlider = document.querySelector('input[name=hijau]');
const blueSlider = document.querySelector('input[name=biru]');

// ambil event (change=event untuk slider)(input=event slider real time)
redSlider.addEventListener('input', function () {
  // ambil nilai slider pakai .value
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;

  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
greenSlider.addEventListener('input', function () {
  // ambil nilai slider pakai .value
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;

  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
blueSlider.addEventListener('input', function () {
  // ambil nilai slider pakai .value
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;

  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

// ! CURSOR COLOR GENERATOR

document.body.addEventListener('mousemove', function (event) {
  //? posisi mouse
  //   console.log(event.clientX);
  //? ukuran browser
  //   console.log(window.innerWidth);

  const xPosisi = Math.round((event.clientX / window.innerWidth) * 255);
  const yPosisi = Math.round((event.clientY / window.innerHeight) * 255);

  document.body.style.backgroundColor = `rgb(${xPosisi},${yPosisi}, 255)`;
});
