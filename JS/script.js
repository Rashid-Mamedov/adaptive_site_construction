document.addEventListener("DOMContentLoaded", (e) => {
  let burger = document.querySelector(".header__burger");
  let menu = document.querySelector(".header__nav");
  burger.addEventListener("click", function () {
    menu.classList.toggle("header__nav__active");
    document.body.classList.toggle("stop-scroll");
  });

  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    loop: true,
    // пагинация
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // навигация
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  document.querySelectorAll(".section-4__btn").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (e) {
      const path = e.currentTarget.dataset.path;

      document.querySelectorAll(".section-4__btn").forEach(function (btn) {
        btn.classList.remove("btn__active");
      });
      e.currentTarget.classList.add("btn__active");

      document
        .querySelectorAll(".section-4__conteiner")
        .forEach(function (tabsBtn) {
          tabsBtn.classList.remove("conteiner__active");
        });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("conteiner__active");
    });
  });

  new Accordion(".accordion-list", {
    elementClass: "accordion",
    triggerClass: "accordion-control",
    panelClass: "accordion-content",
    activeClass: "accordion-active",
  });

  document.querySelector(".header_btn").addEventListener("click", function () {
    document
      .querySelector(".header__form")
      .classList.toggle("header__form__show");
  });

  document
    .querySelector(".header__form__input__btn__close")
    .addEventListener("click", function () {
      document
        .querySelector(".header__form")
        .classList.remove("header__form__show");
    });

  document.querySelector(".header__form").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  document
    .querySelector(".header__burger")
    .addEventListener("click", function () {
      document.querySelector(".header__X").classList.add("header__X__active");
    });

  document.querySelector(".header__X").addEventListener("click", function () {
    document
      .querySelector(".header__nav")
      .classList.remove("header__nav__active");
  });

  document.querySelector(".header__X").addEventListener("click", function () {
    document
      .querySelector(".header__nav")
      .classList.remove("header__nav__active");
  });

  document.querySelector(".header__X").addEventListener("click", function () {
    document.body.classList.remove("stop-scroll");
  });
});
