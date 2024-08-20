$('#sedan_benefit').hide();
$('#rv_benefit').hide();
$('#texi_benefit').hide();
$('.nav_ev > a').addClass('active');
$('nav > ul > li > a').click(function(){
    let textchk = $(this).text();
    $(textchk == "EV & PBV").css("color","#000");
    if(textchk == "EV & PBV"){
        $(this).css("color","#000");
        $('nav > ul > li > a').not('.nav_ev > a').css("color","#697278");
        $('#ev_benefit').show();
        $('.benefit_outer').not('#ev_benefit').hide();
        $('nav > ul > li > a').removeClass('active');
        $(this).addClass('active');
    }
    else if(textchk == "승용"){
        $(this).css("color","#000");
        $('nav > ul > li > a').not('.nav_sedan > a').css("color","#697278");
        $('#sedan_benefit').show();
        $('.benefit_outer').not('#sedan_benefit').hide();
        $('nav > ul > li > a').removeClass('active');
        $(this).addClass('active');
    }
    else if(textchk == "RV"){
        $(this).css("color","#000");
        $('nav > ul > li > a').not('.nav_rv > a').css("color","#697278");
        $('#rv_benefit').show();
        $('.benefit_outer').not('#rv_benefit').hide();
        $('nav > ul > li > a').removeClass('active');
        $(this).addClass('active');
    }
    else if(textchk == "택시 & 상용"){
        $(this).css("color","#000");
        $('nav > ul > li > a').not('.nav_taxi > a').css("color","#697278");
        $('#texi_benefit').show();
        $('.benefit_outer').not('#texi_benefit').hide();
        $('nav > ul > li > a').removeClass('active');
        $(this).addClass('active');
    }
})

