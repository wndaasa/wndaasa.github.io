/* 상단 메뉴: 히어로를 지나면 흰 바탕(.solid)으로 바꾼다 */
(function () {
  var nav = document.querySelector(".nav");
  var hero = document.querySelector(".hero");
  function update() { nav.classList.toggle("solid", window.scrollY > hero.offsetHeight - 70); }
  window.addEventListener("scroll", update, { passive: true });
  update();
})();
