
$('.event_list').hide();
$('#ing').show();
$('#event_btn').change(function() {
    $('.event_list').hide();
    var select = $(this).val();
    if (select !== 'default') {
        $('#' + select).show();
    }
});
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