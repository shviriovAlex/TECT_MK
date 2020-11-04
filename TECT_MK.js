$(document).ready(function(){
    $('.next').click(function(){
        var firstImage = $('.img.first');
        var firstImageIndex = $('.img.first').index();
        var nextImageIndex = firstImageIndex + 1;
        var nextImage = $('.img').eq(nextImageIndex);
        firstImage.fadeOut(1000);
        firstImage.removeClass('first');

        if(nextImageIndex == ($('.img:last').index()+1)){
            $('.img').eq(0).fadeIn(1000);
            $('.img').eq(0).addClass('first');
        } else {
            nextImage.fadeIn(1000);
            nextImage.addClass('first');
        }
    });
    $('.prev').click(function(){
        var firstImage = $('.img.first');
        var firstImageIndex = $('.img.first').index();
        var prevImageIndex = firstImageIndex - 1;
        var prevImage = $('.img').eq(prevImageIndex);

        firstImage.fadeOut(1000);
        firstImage.removeClass('first');
        prevImage.fadeIn(1000);
        prevImage.addClass('first');
    });

    $('.next-container-3').click(function(){
        var currentImage = $('.img-container-3.current');
        var currentImageIndex = $('.img-container-3.current').index();
        var nextImageIndex = currentImageIndex + 1;
        var nextImage = $('.img-container-3').eq(nextImageIndex);
        currentImage.fadeOut(1000);
        currentImage.removeClass('current');

        if(nextImageIndex == ($('.img-container-3:last').index()+1)){
            $('.img-container-3').eq(0).fadeIn(1000);
            $('.img-container-3').eq(0).addClass('current');
        } else {
            nextImage.fadeIn(1000);
            nextImage.addClass('current');
        }
    });
    $('.prev-container-3').click(function(){
        var currentImage = $('.img-container-3.current');
        var currentImageIndex = $('.img-container-3.current').index();
        var prevImageIndex = currentImageIndex - 1;
        var prevImage = $('.img-container-3').eq(prevImageIndex);

        currentImage.fadeOut(1000);
        currentImage.removeClass('current');
        prevImage.fadeIn(1000);
        prevImage.addClass('current');
    });

    $('.next-container-4').click(function(){
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
    $('.prev-container-4').click(function(){
        var currentButton = $('.three-button.now');
        var currentButtonIndex = $('.three-button.now').index();
        var prevButtonIndex = currentButtonIndex - 1;
        var prevButton = $('.three-button').eq(prevButtonIndex);

        currentButton.removeClass('now');
        prevButton.addClass('now');
       
    });


});


