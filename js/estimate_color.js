
let price=["27,750,000","29,550,000","27,450,000","27,950,000","27,350,000","27,800,000"];
let color=["클리어 화이트","밀키 베이지","아스트로 그레이","스모크 블루","아쿠아 민트","오로라 펄 블랙"]
$('.model_img6').hide();
$('.model_img5').hide();
$('.model_img4').hide();
$('.model_img3').hide();
$('.model_img2').hide();
$('#van_type').hide();
$('.price > p > span').text(price[0]);
$('.color_type_name > p').text(color[0]);
$('.color_btn').hide();
$("input[name='color_label']").first().prop('checked',true);
$("input[name='color_label']").first().prop('checked',true).next('label').children('.color_btn').show();


$("input[name='color_label']").change(function(){

   let colorchk = $("input[name='color_label']:checked").val();

    if(colorchk == 'white'){
        $('.model_img6').hide();
        $('.model_img5').hide();
        $('.model_img4').hide();
        $('.model_img3').hide();
        $('.model_img2').hide();
        $('.model_img1').show();
        $('.color_type_name > p').text(color[0]);
        $('.color_btn').hide();
        $(this).next('label').children('.color_btn').show();
    }	

    else if(colorchk == 'milbeige'){

        $('.model_img6').hide();
        $('.model_img5').hide();
        $('.model_img4').hide();
        $('.model_img3').hide();
        $('.model_img2').show();
        $('.model_img1').hide();
        $('.color_type_name > p').text(color[1]);
        $('.color_btn').hide();
        $(this).next('label').children('.color_btn').show();

    }
    else if(colorchk == 'astrogray'){

        $('.model_img6').hide();
        $('.model_img5').hide();
        $('.model_img4').hide();
        $('.model_img3').show();
        $('.model_img2').hide();
        $('.model_img1').hide();
        $('.color_type_name > p').text(color[2]);
        $('.color_btn').hide();
        $(this).next('label').children('.color_btn').show();

    }
    else if(colorchk == 'blue'){

        $('.model_img6').hide();
        $('.model_img5').hide();
        $('.model_img4').show();
        $('.model_img3').hide();
        $('.model_img2').hide();
        $('.model_img1').hide();
        $('.color_type_name > p').text(color[3]);
        $('.color_btn').hide();
        $(this).next('label').children('.color_btn').show();

    }
    else if(colorchk == 'mint'){

        $('.model_img6').hide();
        $('.model_img5').show();
        $('.model_img4').hide();
        $('.model_img3').hide();
        $('.model_img2').hide();
        $('.model_img1').hide();
        $('.color_type_name > p').text(color[4]);
        $('.color_btn').hide();
        $(this).next('label').children('.color_btn').show();

    }
    else if(colorchk == 'black'){

        $('.model_img6').show();
        $('.model_img5').hide();
        $('.model_img4').hide();
        $('.model_img3').hide();
        $('.model_img2').hide();
        $('.model_img1').hide();
        $('.color_type_name > p').text(color[5]);
        $('.color_btn').hide();
        $(this).next('label').children('.color_btn').show();

    }
});

$("input[name='sedan_label']").change(function(){
    let sedanchk = $("input[name='sedan_label']:checked").val();
    
    $("label").removeClass('boxshadow');
    if(sedanchk == 'light'){
        $('.price > p > span').text(price[0]);
        $(this).next('label').addClass('boxshadow');
        
        
    }
    else if(sedanchk == 'air'){
        $('.price > p > span').text(price[1]);
        $(this).next('label').addClass('boxshadow');
    }
})
$("input[name='van_label']").change(function(){
    let vanchk = $("input[name='van_label']:checked").val();


    $("label").removeClass('boxshadow');
    if(vanchk == 'van_light'){
        $('.price > p > span').text(price[2]);
        $(this).next('label').addClass('boxshadow');
    }
    else if(vanchk == 'van_air'){
        $('.price > p > span').text(price[3]);
        $(this).next('label').addClass('boxshadow');
    }
    else if(vanchk == 'van_light1'){
        $('.price > p > span').text(price[4]);
        $(this).next('label').addClass('boxshadow');
    }
    else if(vanchk == 'van_air1'){
        $('.price > p > span').text(price[5]);
        $(this).next('label').addClass('boxshadow');
    }
})


$('.back').click(function(){
    $(location).attr("href", "./estimate.html");
   
})
$('.comple').click(function(){
    $(location).attr("href","./index.html");
})