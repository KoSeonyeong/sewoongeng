document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  if (!menuBtn || !nav) return;

  // 햄버거 메뉴
  menuBtn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", nav.classList.contains("open") ? "true" : "false");
  });

  // 모바일 대메뉴 터치 → 소메뉴 펼치기
  const items = nav.querySelectorAll(".nav-item");
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

        const willOpen = !item.classList.contains("open");

        // 한 번에 하나만 펼쳐지게
        items.forEach(function (other) {
          other.classList.remove("open");
          const otherBtn = other.querySelector(":scope > button");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
        });

        if (willOpen) {
          item.classList.add("open");
          button.setAttribute("aria-expanded", "true");
        }
      }
    });
  });

  // 소메뉴 링크는 정상 이동
  nav.querySelectorAll(".dropdown a, .nav > a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 800) nav.classList.remove("open");
    });
  });

  // PC로 넓어지면 모바일 상태 초기화
  window.addEventListener("resize", function () {
    if (window.innerWidth > 800) {
      nav.classList.remove("open");
      items.forEach(function (item) { item.classList.remove("open"); });
    }
  });
});