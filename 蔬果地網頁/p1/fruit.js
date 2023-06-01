$(function(){
    $('.btn-menu').on('click', function(){
        $('.menu').addClass('active')
    })
    $('.btn-close').on('click', function(){
        $('.menu').removeClass('active')
    })
})
$('.slideshow').each(function(){
    
    let slideImgs = $(this).find('img'),
        slideImgsCount = slideImgs.length,
        currentIndex = 0;
    
    slideImgs.eq(currentIndex).fadeIn();
    
    setInterval(showNextSlide, 3000);
    
    function showNextSlide(){
        let nextIndex = (currentIndex + 1) % slideImgsCount;
        console.log(nextIndex)
        slideImgs.eq(currentIndex).fadeOut();
        slideImgs.eq(nextIndex).fadeIn();
        currentIndex = nextIndex;
    }
})