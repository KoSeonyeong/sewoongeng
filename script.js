document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  if (!menuBtn || !nav) return;

  const items = Array.from(nav.querySelectorAll(".nav-item"));

  function closeSubmenus() {
    items.forEach(function (item) {
      item.classList.remove("open");
      const btn = item.querySelector(":scope > button");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });
  }

  function closeMenu() {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    closeSubmenus();
  }

  menuBtn.setAttribute("type", "button");
  menuBtn.setAttribute("aria-expanded", "false");

  menuBtn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    const opening = !nav.classList.contains("open");
    if (opening) {
      nav.classList.add("open");
      menuBtn.setAttribute("aria-expanded", "true");
    } else {
      closeMenu();
    }
  });

  items.forEach(function (item) {
    const button = item.querySelector(":scope > button");
    const dropdown = item.querySelector(":scope > .dropdown");
    if (!button || !dropdown) return;

    button.setAttribute("type", "button");
    button.setAttribute("aria-expanded", "false");

    button.addEventListener("click", function (e) {
      if (window.innerWidth <= 800) {
        e.preventDefault();
        e.stopPropagation();
        const opening = !item.classList.contains("open");
        closeSubmenus();
        if (opening) {
          item.classList.add("open");
          button.setAttribute("aria-expanded", "true");
        }
      }
    });
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 800) closeMenu();
    });
  });

  document.addEventListener("click", function (e) {
    if (window.innerWidth <= 800 && nav.classList.contains("open") &&
        !nav.contains(e.target) && !menuBtn.contains(e.target)) {
      closeMenu();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 800) closeMenu();
  });
});