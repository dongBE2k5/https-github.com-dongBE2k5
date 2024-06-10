var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  // Lấy biểu tượng icon_arrow tương ứng với từng acc
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    // Tìm icon_arrow bên trong accordion hiện tại
    var icon = this.querySelector(".icon-arrow");

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      if (icon) {
        icon.style.transform = "rotateZ(-90deg)";
      }
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      if (icon) {
        icon.style.transform = "rotateZ(0deg)";
      }
    }
  });
}
document.addEventListener("DOMContentLoaded", function() {
  var images = document.querySelectorAll('img');

  var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
          if (entry.isIntersecting) {
              entry.target.classList.add('fade-in');
          } else {
              entry.target.classList.remove('fade-in');
          }
      });
  }, {
      threshold: 0.1
  });

  images.forEach(function(img) {
      observer.observe(img);
  });
});

