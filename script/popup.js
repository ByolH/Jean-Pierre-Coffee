$(function () {
    $('.strength a').click(function () {
        $('.popup').fadeIn();//.show();하면 그냥 나타남
    });
    $('.popup a').click(function () {
        $('.popup').fadeOut();//.hide();하면 그냥 사라짐
    });
});