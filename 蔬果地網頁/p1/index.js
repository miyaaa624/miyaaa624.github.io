$(function(){
    $('.btn-menu').on('click', function(){
        $('.menu').addClass('active')
    })
    $('.btn-close').on('click', function(){
        $('.menu').removeClass('active')
    })
})