$('.b_box').mouseover(function(){
    $(this).find('img').css({"transform":"scale(1.1)" , "transition":"all 1s"});
    $(this).find('.box_pan').stop().slideDown(100);
}).mouseleave(function(){
    $(this).find('img').css("transform", "scale(1)");
    $(this).find('.box_pan').stop().slideUp();
})

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