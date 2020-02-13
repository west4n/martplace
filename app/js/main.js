$(function(){

    $('.search__inner-default').click(function(){
        $(this).parent().toggleClass("active");
    })

    $('.search__inner-select li').click(function(){
        let current = $(this).html();
        $('.search__inner-default li').html(current);
        $('.search__inner').removeClass('active');
    })

});