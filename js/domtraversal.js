//! CARA BIASA
// const card = document.querySelector('.card');
// const close = document.querySelector('.close');

// close.addEventListener('click', function () {
//   card.style.display = 'none';
// });

//! DOM TRAVERSAL
//? parentElement
const closed = document.querySelectorAll('.close');
// for (let i = 0; i < closed.length; i++) {
//   const e = closed[i];
//   e.addEventListener('click', function (event) {
//     // e.parentElement.style.display = 'none';
//     event.target.parentElement.style.display = 'none';
//   });
// }

//? .target
// closed.forEach((element) => {
//   element.addEventListener('click', function (event) {
//     event.target.parentElement.style.display = 'none';
//   });
// });

// closed.forEach(function (e) {
//   e.addEventListener('click', function (event) {
//     event.target.parentElement.style.display = 'none';
//   });
// });

const nama = document.querySelector('.nama');
console.log(nama.nextElementSibling.nextElementSibling);
console.log(nama.parentNode);
console.log(nama.previousElementSibling);

//! PREVENT DEFAULT
closed.forEach((element) => {
  element.addEventListener('click', function (event) {
    event.target.parentElement.style.display = 'none';
    event.preventDefault();
  });
});
