//Swiper
 new Swiper('.tabs__slider', {
 slidesPerView: 4,
 slidesPerGroup: 1,
 spaceBetween: 20,
 allowTouchMove: false,
 loop: true,
 pagination: {
   el: '.swiper-pagination',
   clickable: true,
 },
 navigation: {
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
 },

  // Брейкпоинты
  breakpoints: {
   320: {
    slidesPerView: 1,
    spaceBetween: 0,
   },
   610: {
    slidesPerView: 2,
    spaceBetween: 20,
   },
   900: {
    slidesPerView: 3,
    spaceBetween: 20,
   },
   1390: {
    slidesPerView: 4,
    spaceBetween: 20,
   },
  },
});

new Swiper('.image__slider', {
 slidesPerView: 1,
 slidesToShow: 1,
 spaceBetween: 10,
 loop: true,
 pagination: {
  el: '.swiper-pagination',
  clickable: true,
}
});

//tabs
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('.tabs__button');
const tabContents = tabs.querySelectorAll('.tabs__item');

function handleTabClick(event) {
  tabButtons.forEach(button => {
    button.classList.remove('active');
  });
  event.currentTarget.classList.add('active');
  const tabData = event.currentTarget.getAttribute('data-tab');
  tabContents.forEach(content => {
    content.classList.remove('active');
    if (content.id === tabData) {
      content.classList.add('active');
    }
  });
}
tabButtons.forEach(button => {
  button.addEventListener('click', handleTabClick);
});

//quantity
const decrementButtons = document.querySelectorAll('.quantity__decrement');
const incrementButtons = document.querySelectorAll('.quantity__increment');
const countFields = document.querySelectorAll('.quantity__count');

let counts = Array(countFields.length).fill(0);

for (let i = 0; i < countFields.length; i++) {
  decrementButtons[i].addEventListener('click', function() {
    counts[i]--;
    countFields[i].textContent = counts[i];
  });

  incrementButtons[i].addEventListener('click', function() {
    counts[i]++;
    countFields[i].textContent = counts[i];
  });
}