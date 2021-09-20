// ! EVENT HANDLER (CARA LAMA) Perubahan terakhir akan menimpa perubahan sebelumnya
// ? INline HTML
const paragraphThree = document.querySelector('.p3');

// function ubahWarna() {
//   paragraphTwo.style.backgroundColor = 'aqua';
// }

// ? METHOD
const paragraphTwo = document.querySelector('.p2');
// paragraphTwo.onclick = ubahWarna;

// ! addEventListener (Perubahan terakhir akan menambah perubahan sebelumnya)

const paragraphFour = document.querySelector('section#b p');
paragraphFour.addEventListener('click', function () {
  const ul = document.querySelector('ul');
  const newLi = document.createElement('li');
  const liText = document.createTextNode('Item baru');
  newLi.appendChild(liText);
  ul.appendChild(newLi);
});

const paragraphOne = document.querySelector('.p1');
paragraphOne.addEventListener('dblclick', function () {
  paragraphOne.style.backgroundColor = 'aqua';
});
paragraphOne.addEventListener('click', function () {
  paragraphOne.style.color = 'red';
});

paragraphTwo.addEventListener('mouseenter', function () {
  paragraphTwo.style.backgroundColor = 'aqua';
});
paragraphTwo.addEventListener('mouseleave', function () {
  paragraphTwo.style.backgroundColor = 'white';
});
