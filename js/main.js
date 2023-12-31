var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;

if (menu) {
  const closeMenu = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
    sidebarSwitch.classList.remove("active");
  };

  menuBtn.onclick = function () {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    body.classList.toggle("active");
  };

  const header = document.querySelector(".header");
  console.log(header)
  if (header)
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 10) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  const siebarLinks = document.querySelectorAll(".sidebarLink");
  const sidebarSwitch = document.querySelector(".sidebarSwitch");
  sidebarSwitch.onclick = () => {
    const isActive = sidebarSwitch.classList.contains("active");
    menu.classList.toggle("active", !isActive);
    body.classList.toggle("active", !isActive);
    sidebarSwitch.classList.toggle("active", !isActive);
  };
  siebarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (menu.classList.contains("active")) {
        closeMenu();
      }
    });
  });
  const sidebarClose = () => {
    menu.classList.remove("active");
  };
  window.onclick = function (event) {
    if (event.target == menu) {
      sidebarClose();
      closeMenu();
    }
  };
}

const range = document.getElementById("range");
const rangeButton = document.getElementById("rangeButton");
let display_768 = window.matchMedia("(max-width: 768px)");
let display_390 = window.matchMedia("(max-width: 390px)");
let add = 5;
let reducer = -1;
if (range) {
  const thumbSize = 5;
  const rangeAmount = document.getElementById("rangeAmount");
  rangeButton.style.left = range.value + "%";
  rangeAmount.innerHTML = range.value;

  range.addEventListener("input", (e) => {
    const ratio = (range.value - range.min) / (range.max - range.min);
    let value = thumbSize / 10 + ratio * 100 - ratio * thumbSize;
    rangeAmount.innerHTML = range.value;
    if (display_768.matches) {
      add = 8;
      reducer = -6;
    }
    if (display_390.matches) {
      add = 15;
      reducer = -10;
    }
    if (range.value < 50) {
      rangeButton.style.left = value + add + "%";
    } else {
      rangeButton.style.left = value + reducer + "%";
    }
    console.log(value);
  });
}

const themeBtn = document.getElementById("theme");
if (themeBtn) {
  let theme = document.querySelector("[data-theme]");
  themeBtn.addEventListener("input", () => {
    console.log(themeBtn.checked);
    if (themeBtn.checked) {
      theme.setAttribute("data-theme", "dark");
    } else {
      theme.setAttribute("data-theme", "light");
    }
    console.log(theme.getAttribute("data-theme"));
  });
}
