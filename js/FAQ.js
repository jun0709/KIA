
$('.accordion_item').click(function(){
if($(this).hasClass("active")){
    $(this).find('.acco_p').stop().slideUp();
    $(this).removeClass("active");
    $(this).find(".wid").css("transform", "rotate(0)");
     $(this).find(".hei").css("transform", "rotate(90deg)");
    }
else{
    $(this).find('.acco_p').stop().slideDown();
    $(this).addClass("active");
    $(this).find(".wid").css("transform", "rotate(180deg)");
    $(this).find(".hei").css("transform","rotate(360deg)")
}
})

$('.link_btn').mouseenter(function(){
    $(this).css("background","#05141f");
    $(this).find("div").css("filter","invert()")
    $(this).css("color","#fff")
}).mouseleave(function(){
    $(this).css("background","#efefef");
    $(this).find("div").css("filter","invert(0)")
    $(this).css("color","#000")
})
$(".as_b1").click(function(){
    $(".as_img1").addClass("block");
    $(".as_img2").removeClass("block");
    $(".as_b1").addClass("color");
    $(".as_b2").removeClass("color");
})

$(".as_b2").click(function(){
    $(".as_img2").addClass("block");
    $(".as_img1").removeClass("block");
    $(".as_b2").addClass("color");
    $(".as_b1").removeClass("color");
})
$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    var sec1offset = $('.sec').offset().top;
    
    if(scrollTop >= sec1offset){
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