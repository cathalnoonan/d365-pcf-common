$('.tab').click(function () {
        
    // Toggle the active classes
    $('.tab.active').toggleClass('active');
    $(this).toggleClass('active');
    
    // Switch the open div
    var page = $(this).data('page');
    $('.page[data-page]').hide();
    $('.page[data-page="' + page + '"]').show();
    
});