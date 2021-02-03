(function() {
  "use strict";
  var menuId;
  function init() {
    menuId = document.getElementById("nav");
    document.addEventListener("scroll", scrollMenu, false);
  }
  function scrollMenu() {
    if (document.documentElement.scrollTop > 100) {
      menuId.classList.add("scroll");
      console.log("scroll");
    } else {
      menuId.classList.remove("scroll");
      console.log("no-scroll");
    }
  }
  document.addEventListener("DOMContentLoaded", init, false);
})();
