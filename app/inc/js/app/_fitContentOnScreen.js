// If possible, fit the content into the view
var
fitContentOnScreen = function(){
    var
    screen_h  = $(window).height(),
    footer_h  = $('footer').outerHeight(true),
    header_h  = $('header').outerHeight(true),
    body_h    = screen_h - (footer_h + header_h);

    $('.page-content').css( "min-height", body_h );
};