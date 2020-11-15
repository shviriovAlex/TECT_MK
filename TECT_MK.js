$(document).ready(function(){
    $('.next').click(function(){
        var activeImage = $('.img.active');
        var activeImageIndex = $('.img.active').index();
        var nextImageIndex = activeImageIndex + 1;
        var nextImage = $('.img').eq(nextImageIndex);
        activeImage.fadeOut(1000);
        activeImage.removeClass('active');

        if(nextImageIndex == ($('.img:last').index()+1)){
            $('.img').eq(0).fadeIn(1000);
            $('.img').eq(0).addClass('active');
        } else {
            nextImage.fadeIn(1000);
            nextImage.addClass('active');
        }
    });
    $('.prev').click(function(){
        var activeImage = $('.img.active');
        var activeImageIndex = $('.img.active').index();
        var prevImageIndex = activeImageIndex - 1;
        var prevImage = $('.img').eq(prevImageIndex);

        activeImage.fadeOut(1000);
        activeImage.removeClass('active');
        prevImage.fadeIn(1000);
        prevImage.addClass('active');
    });

    $('.next-section-3').click(function(){
        var currentImage = $('.img-section-3.current');
        var currentImageIndex = $('.img-section-3.current').index();
        var nextImageIndex = currentImageIndex + 1;
        var nextImage = $('.img-section-3').eq(nextImageIndex);
        currentImage.fadeOut(1000);
        currentImage.removeClass('current');

        if(nextImageIndex == ($('.img-section-3:last').index()+1)){
            $('.img-section-3').eq(0).fadeIn(1000);
            $('.img-section-3').eq(0).addClass('current');
        } else {
            nextImage.fadeIn(1000);
            nextImage.addClass('current');
        }
    });
    $('.prev-section-3').click(function(){
        var currentImage = $('.img-section-3.current');
        var currentImageIndex = $('.img-section-3.current').index();
        var prevImageIndex = currentImageIndex - 1;
        var prevImage = $('.img-section-3').eq(prevImageIndex);

        currentImage.fadeOut(1000);
        currentImage.removeClass('current');
        prevImage.fadeIn(1000);
        prevImage.addClass('current');
    });

    $('.next-section-4').click(function(){
        var currentButton = $('.three-button.now');
        var currentButtonIndex = $('.three-button.now').index();
        var nextButtonIndex = currentButtonIndex + 1;
        var nextButton = $('.three-button').eq(nextButtonIndex);
        currentButton.removeClass('now');
        if(nextButtonIndex == ($('.three-button:last').index()+1)){
            $('.three-button').eq(0).addClass('now');
        } else {
            nextButton.addClass('now');
        }
     });
    $('.prev-section-4').click(function(){
        var currentButton = $('.three-button.now');
        var currentButtonIndex = $('.three-button.now').index();
        var prevButtonIndex = currentButtonIndex - 1;
        var prevButton = $('.three-button').eq(prevButtonIndex);

        currentButton.removeClass('now');
        prevButton.addClass('now');
       
    });


});


