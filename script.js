const swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    effect: "fade",
    loop: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);});