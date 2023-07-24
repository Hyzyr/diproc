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

  const header = document.getElementById("header");
  if (header)
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 400) {
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

// ///
// ///
// /// slick slider

// ///
// ///
// /// tabEvents
// const toggleBody = (isClosed) => {
//   if (isClosed) {
//     document.body.classList.add("active");
//     if (menu) closeMenu();
//   } else {
//     document.body.classList.remove("active");
//   }
// };
// document.querySelectorAll(`[data-event="tabEvent"]`).forEach((eventBtn) => {
//   const tab = document.querySelector(eventBtn.getAttribute("data-tab"));
//   if (tab) {
//     eventBtn.onclick = (e) => {
//       e.preventDefault();
//       tab.classList.toggle("active");
//       toggleBody(tab.classList.contains("active"));
//     };
//     tab.onclick = (e) => {
//       if (e.target === e.currentTarget) {
//         tab.classList.toggle("active");
//         toggleBody(tab.classList.contains("active"));
//       }
//     };
//   }
// });
// document.querySelectorAll(`[data-toggle]`).forEach((toggleBtn) => {
//   console.log("btn ->");
//   toggleBtn.onclick = () =>
//     toggleBtn.classList.toggle(toggleBtn.getAttribute("data-toggle"));
// });
///
///
///
///WOW JS
// new WOW().init({
//   boxClass: "wow",
// });
// const tabBtn = document.querySelectorAll(".tabBtn");
// const tabEvent = document.querySelectorAll(".tabEvent");
// tabBtn.forEach((e) => {
//   onTabClick(tabBtn, tabEvent, e);
// });
// function onTabClick(tabBtns, tabItems, item) {
//   item.addEventListener("click", function (e) {
//     let currentBtn = item;
//     let tabId = currentBtn.getAttribute("data-tab");
//     let currentTab = document.querySelector(tabId);
//     if (currentBtn.classList.contains("active")) {
//       console.log("now active");
//       const faq = currentBtn.parentElement.querySelector(".tabEvent");
//       if (faq) {
//         faq.classList.remove("active");
//         currentBtn.classList.remove("active");
//       }
//     } else if (!currentBtn.classList.contains("active")) {
//       tabBtns.forEach(function (item) {
//         item.classList.remove("active");
//       });

//       tabItems.forEach(function (item) {
//         item.classList.remove("active");
//       });
//       currentBtn.classList.add("active");
//       currentTab.classList.add("active");
//     }
//   });
// }

const range = document.getElementById("range");
if (range) {
  const thumbSize = 5;
  const rangeButton = document.getElementById("rangeButton");
  const rangeAmount = document.getElementById("rangeAmount");
  range.addEventListener("input", (e) => {
    const ratio = (range.value - range.min) / (range.max - range.min);
    let value = thumbSize / 10 + ratio * 100 - ratio * thumbSize;
    rangeAmount.innerHTML = range.value;
    if (range.value < 50) {
      rangeButton.style.left = value + 5 + "%";
    } else {
      rangeButton.style.left = value + -2 + "%";
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
