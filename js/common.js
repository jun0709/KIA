
$('.menu_tab_btn').click(function () {
   
    
    if($('.menu_outer').is(':visible')){
        $('body').css('overflow', 'auto'); 
        $('.menu_outer').stop().slideUp();
        anime({
            targets: $(this).find('.line')[0],
            keyframes: [
                
                { rotate: '0'},
                { top: '0', translateY: '0' }
            ],
            easing: 'easeOutCubic'
        })
        anime({
            targets: $(this).find('.line')[1],
            keyframes: [
               
                { rotate: '0'},
                { translateY: '-50%' },
            ],
            easing: 'easeOutCubic'
        })
        anime({
            targets: $(this).find('.line')[2],
            keyframes: [
                { rotate: '0' },
                { bottom: '0', translateY: '0' },
               
            ],
            easing: 'easeOutCubic'
        })
    

    }
    else{

        $('.menu_outer').stop().slideDown();
        $('body').css('overflow', 'hidden'); 
        anime({
            targets: $(this).find('.line')[0],
            keyframes: [
                { top: '50%', translateY: '-50%' },
                { rotate: '45deg'}
            ],
            easing: 'easeOutCubic'
        })
        anime({
            targets: $(this).find('.line')[1],
            keyframes: [
                { translateY: '-50%' },
                { rotate: '45deg', }
            ],
            easing: 'easeOutCubic'
        })
        anime({
            targets: $(this).find('.line')[2],
            keyframes: [
                { bottom: '50%', translateY: '50%' },
                { rotate: '-45deg' }
            ],
            easing: 'easeOutCubic'
        })
        
    }
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