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

const tabsBtn = document.querySelectorAll(".navigation__tab")
const tabsitem = document.querySelectorAll(".slider-positions__slide")

function tabsControl(currentBtn) {
  const tabId = currentBtn.getAttribute("data-tab")
  let currentTab = document.querySelector(tabId)

  tabsBtn.forEach(function (item) {
    item.classList.remove("active")
  })

  tabsitem.forEach(function (item) {
    item.classList.remove("active")
  })

  currentBtn.classList.add("active")
  currentTab.classList.add("active")
}

tabsBtn.forEach(function (tab) {
  tab.addEventListener("click", function () {
    tabsControl(this)

    carretAnimate(this)
  })
})

const swiperPosition = new Swiper(".slider-positions", {
 
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});


   

