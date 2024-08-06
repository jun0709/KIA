$('#sedan_benefit').hide();
$('#rv_benefit').hide();
$('#texi_benefit').hide();
$('.nav_ev').css("color","#000");
$('nav ul li').click(function(){
    let textchk = $(this).text();
    $(textchk == "EV & PBV").css("color","#000");
    if(textchk == "EV & PBV"){
        $(this).css("color","#000");
        $('nav ul li').not('.nav_ev').css("color","#697278");
        $('#ev_benefit').show();
        $('.benefit_outer').not('#ev_benefit').hide();
    }
    else if(textchk == "승용"){
        $(this).css("color","#000");
        $('nav ul li').not('.nav_sedan').css("color","#697278");
        $('#sedan_benefit').show();
        $('.benefit_outer').not('#sedan_benefit').hide();
    }
    else if(textchk == "RV"){
        $(this).css("color","#000");
        $('nav ul li').not('.nav_rv').css("color","#697278");
        $('#rv_benefit').show();
        $('.benefit_outer').not('#rv_benefit').hide();
    }
    else if(textchk == "택시 & 상용"){
        $(this).css("color","#000");
        $('nav ul li').not('.nav_taxi').css("color","#697278");
        $('#texi_benefit').show();
        $('.benefit_outer').not('#texi_benefit').hide();
    }
})

$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    var offset = $('nav').offset().top;
    
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
