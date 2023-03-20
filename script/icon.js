$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 700) {
        $('.topbutton').fadeIn();
    } else {
        $('.topbutton').fadeOut();
    }
});

$( '.topbutton' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
} );

