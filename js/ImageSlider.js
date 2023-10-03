//   Initialize Swiper 

 
 var swiper = new Swiper(".mySwiper", { 
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "fraction",
        
      },
autoplay: {
  delay: 5000,
  disableOnInteraction: false,
},



      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    
