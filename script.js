const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

const parent = document.querySelectorAll('.parent');

const changeActiveItem = () => {
  parent.forEach((item) => {
    item.classList.remove('active');
  });
};

parent.forEach((item) => {
  item.addEventListener('click', () => {
    changeActiveItem();
    item.classList.add('active');
  });
});

const reviewContentInfo = document.querySelectorAll('.review-content--info');
const btnDecrease = document.getElementById('btn__increase');
const btnIncrease = document.getElementById('btn__decrease');

let curSlide = 0;
let maxSlide = reviewContentInfo.length;

const goToSlide = function (slide) {
  reviewContentInfo.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

goToSlide(0);

// Next slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  console.log('Increase');
  goToSlide(curSlide);
};

// Previous slide
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  console.log('Decrease');
  goToSlide(curSlide);
};

btnIncrease.addEventListener('click', prevSlide);
btnDecrease.addEventListener('click', nextSlide);

document.addEventListener('keydown', function (e) {
  console.log(e);

  if (e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide();
});
