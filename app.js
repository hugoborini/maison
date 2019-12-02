var menu = document.getElementById("menu");
var opener = document.getElementById("open-menu");
opener.addEventListener("click", function() {
  menu.classList.toggle("is-open");
});

var img = document.getElementById("img");

img.addEventListener("click", function() {
  img.classList.toggle("is-click");
});

var img2 = document.getElementById("img2");

img2.addEventListener("click", function() {
  img2.classList.toggle("is-click");
});

var img3 = document.getElementById("img3");

img3.addEventListener("click", function() {
  img3.classList.toggle("is-click");
});

var img4 = document.getElementById("img4");

img4.addEventListener("click", function() {
  img4.classList.toggle("is-click");
});

var img5 = document.getElementById("img5");

img5.addEventListener("click", function() {
  img5.classList.toggle("is-click");
});

var article_tab = document.querySelectorAll(".display");

article_tab.forEach(element => {
  var waypoint = new Waypoint({
    element: element,
    handler: function(direction) {
      element.classList.add("is-reached");
    },
    offset: "50%"
  });
});
