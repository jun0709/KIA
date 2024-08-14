new Swiper('.swiper', {
    direction: 'horizontal', 
    slidesPerView:1, 
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
        
      768: {
        slidesPerView: 2.4,  
        spaceBetween: 30,
        
      },
      1024: {
        slidesPerView: 2.4,  
        spaceBetween: 30,
      },
      1250 : {
          slidesPerView: 3.4,  
          spaceBetween: 30,
      }
    },
   
  });

  $('.swiper-slide').click(function(){
    $(location).attr("href", "detail.html")
  })

  
