$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 4000 ) {
        $('.c3_img').addClass('img1');
    } else {
        $('.c3_img').removeClass('img1');
    }

    if (height > 5000 ) {
        $('.c3_img').addClass('img2');
    } else {
        $('.c3_img').removeClass('img2');
    }

    
});