$('.b_box').mouseover(function(){
    $(this).find('img').css({"transform":"scale(1.1)" , "transition":"all 1s"});
    $(this).find('.box_pan').stop().slideDown(100);
}).mouseleave(function(){
    $(this).find('img').css("transform", "scale(1)");
    $(this).find('.box_pan').stop().slideUp();
})
new Swiper('.model_siwper', {
    direction: 'horizontal', 
    slidesPerView:1, 
    spaceBetween:40, 
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        
        768: {
          slidesPerView: 1,  
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,  
          spaceBetween: 40,
        },
        1250 : {
            slidesPerView: 3,  
            spaceBetween: 40,
        }
      },
  });

$(window).scroll(function(){
    if($('.top > nav').offset().top<= $(window).scrollTop()){
        anime({
            targets: '.model_img > img',
            translateX:0,
         
          });
    }
    else{
        anime({
            targets: '.model_img > img',
            translateX:'100%',
          });
    }
})

$('.btn2').click(function(){
    $(this).addClass('dd');
    $('.btn1').addClass('bl');
        $('.model').css(
            "transform","translateX(-50%)"
    );
})
$('.btn1').click(function(){
    $(this).addClass('dd').removeClass('bl');
    $('.btn2').removeClass('dd');
    $('.model').css(
     "transform","translateX(0)"
      );
}) 
$('nav li').mouseenter(function(){
    anime({
        targets: $(this).find('.nav_img img')[0],
        rotate :[
            { value: -10, duration: 100, easing: 'easeInOutSine' },
            { value: 10, duration: 100, easing: 'easeInOutSine' },
            { value: -10, duration: 100, easing: 'easeInOutSine' },
            { value: 10, duration: 100, easing: 'easeInOutSine' },
            { value: 0, duration: 100, easing: 'easeInOutSine' }
        ]
    })
})




  $(".b_box").click(function(){
    $(location).attr("href", "detail.html")
})