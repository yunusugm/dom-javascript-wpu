const parent = document.getElementById('container');
const thumbs = document.querySelectorAll('.thumb');
const big = document.querySelector('.big-img');

parent.addEventListener('click', function (e) {
  if (e.target.className === 'thumb') {
    big.src = e.target.src;
    big.classList.add('fade');
    setTimeout(function () {
      big.classList.remove('fade');
    }, 500);
    thumbs.forEach((e) => {
      e.classList.contains('active');
      e.classList.remove('active');
    });
    e.target.classList.add('active');
  }
});
