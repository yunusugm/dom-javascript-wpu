// const title = document.getElementById('judul');
// title.innerHTML = 'Yunus';

// const sectA = document.querySelector('section#a');
// sectA.innerHTML = 'Section a';

//? MANIPULASI ELEMENT
//! ATTRIBUTE
const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('name', 'yunus');

const ao = document.querySelector('a');
ao.setAttribute('class', 'link');
ao.getAttribute('href');
ao.removeAttribute('link');

//! CLASS LIST
const phi2 = document.querySelector('.p2');
// tambah
phi2.classList.add('label', 'link');
// hapus
phi2.classList.remove('label');
// cek (jika class belum ada class nambah)(jika class sudah ada class hilang)
phi2.classList.toggle('query');
// menampilkan/ untuk mencari urutan kelas
phi2.classList.item(1);
// find class (true/false)
phi2.classList.contains('joy');
// ganti kelas
phi2.classList.replace('link', 'linked');

//? MANIPULASI NODE

// buat elemen baru
const newElement = document.createElement('p');
const newTextForElement = document.createTextNode('Paragraph');

// simpan text ke elemen
newElement.appendChild(newTextForElement);

// simpan elemen baru di section a di akhir
const sectionA = document.getElementById('a');
sectionA.appendChild(newElement);

//! simpan elemen di tengah

//buat element
const newList = document.createElement('li');
const textForList = document.createTextNode('New Item');

newList.appendChild(textForList);

// panggil parent
const uList = document.querySelector('#b ul');
// panggil elemen setelahnya
const listTwo = uList.querySelector('li:nth-child(2)');

uList.insertBefore(newList, listTwo);

//! remove

const secAw = document.getElementById('a');
const linker = secAw.querySelector('.link');

secAw.removeChild(linker);

//! replace
// parent node
const sectionBi = document.getElementById('b');
// child node lama
const oldTitle = sectionBi.querySelector('p');
// node baru
const newTitle = document.createElement('h2');
const newText = document.createTextNode('Text Baru');
newTitle.appendChild(newText);

sectionBi.replaceChild(newTitle, oldTitle);
