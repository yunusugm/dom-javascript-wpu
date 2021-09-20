console.log(document);

//! DOM SELECTION

//? getElementById (mengembalikan element)
const title = document.getElementById('judul');
title.style.color = 'aqua';
title.style.backgroundColor = '#dedede';
title.innerHTML = 'Hey World';

//? getElementsByTagName (mengembalikan HTMLCollection)
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
  const element = p[i];
  element.style.textTransform = 'uppercase';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.textShadow = '2px 4px 10px black';

//? getElementsByClassName (kembalian HTML Collection)
const piOne = document.getElementsByClassName('p1');
piOne[0].innerHTML = 'TEXT SATU';

//? querySelector
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '1.5rem';

const li2 = document.querySelector('#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// const phe = document.querySelector('phe');
// phe.style.textTransform = 'capitalize';

//? querySelectorAll
const phi = document.querySelectorAll('p');
for (let i = 0; i < phi.length; i++) {
  const element = phi[i];
  element.style.color = 'red';
}

//? ubah node root
const sectionB = document.getElementById('b');
const peFour = sectionB.querySelector('p');
peFour.style.backgroundColor = 'blue';
