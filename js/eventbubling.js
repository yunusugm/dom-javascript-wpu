const closed = document.querySelectorAll(".close");

closed.forEach((element) => {
  element.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
    //! event bubbling
    e.stopPropagation();
  });
});

const card = document.querySelectorAll(".card");
card.forEach((cards) => {
  cards.addEventListener("click", function (e) {
    alert("ok");
  });
});

//! CARA EFEKTIF DENGAN MENGGUNAKAN 1 EVENT DI PARENTNYA
const parent = document.querySelector(".container");

parent.addEventListener("click", function (el) {
  if (el.target.className === "close") {
    el.target.parentElement.style.display = "none";
  }
});
