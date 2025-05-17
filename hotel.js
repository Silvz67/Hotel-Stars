document.addEventListener("DOMContentLoaded", function () {
    const instaIcon = document.querySelector(".insta");
    const whatsIcon = document.querySelector(".whats");
  
    if (instaIcon) {
      instaIcon.addEventListener("click", function () {
        window.open("https://www.instagram.com/_Artur.082", "_blank"); 
      });
    }
  
    if (whatsIcon) {
      whatsIcon.addEventListener("click", function () {
        window.open("https://wa.me/5582996117038", "_blank"); 
      });
    }
  });