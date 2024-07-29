new Swiper('.brand_swip', {
    direction: 'horizontal', 
    loop: true,
    slidesPerView:2, 
    spaceBetween:100, 
    centeredSlides: true,

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


  new Swiper('.access_swip', {
    direction: 'horizontal', 
    loop: true,
    slidesPerView:3.5, 
    spaceBetween:50, 
  });



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
$('.nav_item').click(function() {
  var target = $(this).data('target');
  var targetOffset = $(target).offset().top;
  $('html, body').animate({ scrollTop: targetOffset }, 'slow');
});