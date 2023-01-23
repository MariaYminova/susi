const swiperBaner = new Swiper(".slider-baner", {
  pagination: {
    el: ".pagination-baner",

  },
});

const swiperPop = new Swiper(".slider-popular", {
  slidesPerView: 4,
  spaceBetween: 18,

  scrollbar: {
    el: ".scrollbar-popular",
    draggable: true,
    dragSize: 143,
  },





});