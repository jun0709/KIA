
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
    $(".as_b1").addClass("color");
    $(".as_b2").removeClass("color");
    if(innerWidth >768){
        $(".as_img1").show();
        $(".as_img2").hide();
    }
    else{
        $(".cu_service_list").show();
        $(".change_service_list").hide();
    }

})

$(".as_b2").click(function(){
    $(".as_b2").addClass("color");
    $(".as_b1").removeClass("color");
    if(innerWidth >768){
        $(".as_img2").show();
        $(".as_img1").hide();
    }
    else{
        
        $(".change_service_list").show();
        $(".cu_service_list").hide();
    }
   
})
