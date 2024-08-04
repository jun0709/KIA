
		let price=["27,750,000","29,550,000","27,450,000","27,950,000","27,350,000","27,800,000"];
        $('.model_img2').hide();   
        $('#van_type').hide();
        $('.price > p > span').text(price[0]);
        $("input[name='sedan_label']").first().prop('checked',true);
        $("input[name='sedan_label']").first().prop('checked',true).next('label').addClass('boxshadow');
        $("input[name='van_label']").first().prop('checked',true);
        $("input[name='van_label']").first().prop('checked',true).next('label').addClass('boxshadow');

       
        $("input[name='body_label']").change(function(){

            let bodychk = $("input[name='body_label']:checked").val();

            if(bodychk == 'sedan'){
                
                $('.model_img2').hide();
                $('.model_img1').show();
                $('#sedan_type').show();
                $('#van_type').hide();
                $('.price > p > span').text(price[0]);
                $(this).next('.body_type_label_btn').css({"background":"#000","color":"#fff"});
                $('#body_type_label2').next('.body_type_label_btn').css({"background":"#fff","color":"#000"});
                $("label").removeClass('boxshadow');
                $("input[name='sedan_label']").first().prop('checked',true).next('label').addClass('boxshadow');
                
              
            }	

            else if(bodychk == 'van'){
                
                $('.model_img1').hide();
                $('.model_img2').show();
                $('#sedan_type').hide();
                $('#van_type').show();
                $('.price > p > span').text(price[2]);
                $(this).next('.body_type_label_btn').css({"background":"#000","color":"#fff"});
                $('#body_type_label1').next('.body_type_label_btn').css({"background":"#fff","color":"#000"});
                $("label").removeClass('boxshadow');
                $("input[name='van_label']").first().prop('checked',true).next('label').addClass('boxshadow');
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
        

$('.next_btn button').click(function(){
    let nextchk = $("input[name='body_label']:checked").val();
    if(nextchk == 'sedan'){
        $(location).attr("href", "./sedan_estimate_color.html")
    }
    else if(nextchk == 'van'){
        $(location).attr("href", "./van_estimate_color.html")
    }
})
