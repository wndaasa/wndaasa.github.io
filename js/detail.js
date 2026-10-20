/* 미니맵: 지금 화면 위쪽에 걸린 대목차의 막대와 목록 항목을 보라색(.on)으로 표시 */
(function () {
  var map = document.querySelector(".minimap");
  if (!map) return;
  var links = map.querySelectorAll("a[href^='#']");
  var chapters = map.querySelectorAll(".bars a");
  function update() {
    var line = window.scrollY + window.innerHeight * 0.35;
    var current = null;
    for (var i = 0; i < chapters.length; i++) {
      var target = document.querySelector(chapters[i].getAttribute("href"));
      if (target && target.offsetTop <= line) current = chapters[i].getAttribute("href");
    }
    for (var j = 0; j < links.length; j++) links[j].classList.toggle("on", links[j].getAttribute("href") === current);
  }
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
