const btn = document.querySelector(".nav__item:nth-child(3)");
const actions = document.querySelector(".nav__actions");
const plusSign = document.querySelector(".nav__item_icon-plus");
const overlay = document.querySelector(".overlay");

btn.addEventListener("click", function () {
  if (actions.classList.contains("open")) {
    actions.classList.remove("open");
    btn.classList.remove("white");
    overlay.classList.remove("expand");
    plusSign.classList.remove("rotate");
  } else {
    actions.classList.add("open");
    btn.classList.add("white");
    overlay.classList.add("expand");
    plusSign.classList.add("rotate");
  }
});
