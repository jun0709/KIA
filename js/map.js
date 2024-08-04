$('.view').hide();
$('#dongsan').show();
$('.name_title').click(function(){
    let namechk = $(this).find('h3').text();

    if(namechk == "동산로"){
        $('#dongsan').show();
        $('.view').not('#dongsan').hide();
    }
    else if(namechk == "서초"){
        $('#seocho').show();
        $('.view').not('#seocho').hide();
    }
    else if(namechk == "매봉"){
        $('#mebong').show();
        $('.view').not('#mebong').hide();
    }
    else if(namechk == "역삼"){
        $('#Yeoksam').show();
        $('.view').not('#Yeoksam').hide();
    }
    else if(namechk == "도곡"){
        $('#dogok').show();
        $('.view').not('#dogok').hide();
    }
    else if(namechk == "서초남부"){
        $('#seocho_nam').show();
        $('.view').not('#seocho_nam').hide();
    }
    else if(namechk == "대치갤러리"){
        $('#deachi_gall').show();
        $('.view').not('#deachi_gall').hide();
    }
    else if(namechk == "교대"){
        $('#gyodae').show();
        $('.view').not('#gyodae').hide();
    }
    else if(namechk == "신사"){
        $('#sinsa').show();
        $('.view').not('#sinsa').hide();
    }
    else if(namechk == "방배"){
        $('#bangbe').show();
        $('.view').not('#bangbe').hide();
    }
})