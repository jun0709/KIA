
$('.event_list').hide();
$('#ing').show();
$('#event_btn').change(function() {
    $('.event_list').hide();
    var select = $(this).val();
    if (select !== 'default') {
        $('#' + select).show();
    }
});
