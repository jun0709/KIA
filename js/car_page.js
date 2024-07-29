new Swiper('.swiper', {
    direction: 'horizontal', 
    loop: false, 
    slidesPerView: 3.4, 
    spaceBetween: 30
    
  });

  $('.swiper-slide').click(function(){
    $(location).attr("href", "detail.html")
  })

  
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    var offset = $('.sec').offset().top;
    
    if(scrollTop >= offset){
      $('.retop_btn').fadeIn();
    }
    else{
      $('.retop_btn').fadeOut();
    }
  })
  
  $('.retop_btn').click(function() {
    var wrapOffset = $('#wrap').offset().top;
    $('html, body').animate({ scrollTop: wrapOffset }, 'slow');
  });