var menu = document.getElementById("menu");
var opener = document.getElementById("open-menu");
opener.addEventListener("click", function() {
  menu.classList.toggle("is-open");
});

let img = document.querySelectorAll(".img");
let img_s = document.querySelectorAll(".img_s");
var article_tab = document.querySelectorAll(".display");

for (let i = 0; i < img_s.length; i++) {
  img_s[i].addEventListener("click", function() {
    img_s[i].classList.toggle("is-click");
  });
}

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function() {
    img[i].classList.toggle("is-click");
  });
}

article_tab.forEach(element => {
  var waypoint = new Waypoint({
    element: element,
    handler: function(direction) {
      element.classList.add("is-reached");
      console.log("scroll");
    },
    offset: "50%"
  });
});
