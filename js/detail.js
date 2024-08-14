
new Swiper('.brand_swip', {
    direction: 'horizontal', 
    loop: true,
    slidesPerView:1, 
    spaceBetween:40, 
    centeredSlides: true,
    breakpoints: {

      520: {
        slidesPerView: 2,  
        
      },
     
    
    },
  });
  new Swiper('.model_swip', {
    direction: 'horizontal', 
    slidesPerView:1, 
    spaceBetween:30, 
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
          
      768: {
        slidesPerView: 2,  
        spaceBetween: 30,
        
      },
      1024: {
        slidesPerView:3,  
        spaceBetween: 30,
      },
    
    },
  });

  new Swiper('.outer_swip', {
    direction: 'horizontal', 
    loop: true, 
    slidesPerView:1, 

    autoplay:{
        delay:2500,
        disableOnInteraction: false
    },
    speed:1000,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
        clickable: true,
      },
  });

  $('.front_btn').click(function(){
    $('.inner_img1').stop().fadeIn();
    $('.inner_img2').stop().fadeOut();
    $(this).addClass('color');
    $('.side_btn').removeClass('color');
    
  })
  $('.side_btn').click(function(){
    $('.inner_img2').stop().fadeIn();
    $('.inner_img1').stop().fadeOut();
    $(this).addClass('color');
    $('.front_btn').removeClass('color');
   
  })

  new Swiper('.driving', {
    direction: 'horizontal', 
    slidesPerView:1, 
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      480: {
        slidesPerView: 2,  
        
      },
      650: {
        slidesPerView: 3,  
        
      },
      768: {
        slidesPerView: 4,  
        
      },
      1024: {
        slidesPerView:5,  
      },
    
    },

  });

  new Swiper('.access_swip', {
    direction: 'horizontal', 
    loop: true,
    slidesPerView:1, 
    spaceBetween:50, 
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      480: {
        slidesPerView: 2,  
        
      },
      
      768: {
        slidesPerView: 3,  
        
      },
      1024: {
        slidesPerView:3.5,  
      },
    
    },
  });
  

      $('.inner').mouseenter(function(){
        if(window.innerWidth <= 550){
        $('.pop').show();
        } 
        else{
          $('.pop').hide();
        }
      }).mouseleave(function(){
        $('.pop').hide();
      })
   
  



$('.nav_item').click(function() {
  var target = $(this).data('target');
  var targetOffset = $(target).offset().top;
  $('html, body').animate({ scrollTop: targetOffset }, 'slow');
});