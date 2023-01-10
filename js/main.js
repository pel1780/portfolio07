$(function () {
    $(window).on('mousemove', function (e) {
        let X = e.pageX;
        let Y = e.pageY;

        // $(window).width() /2 
        let bX;
        if ($(window) / 2 < X) {
            bX = -1
        } else {
            bX = 1
        }
        let bY;
        if ($(window) / 2 < Y) {
            bY = -1
        } else {
            bY = 1
        }


        let tX;
        if ($(window) / 2 < X) {
            tX = 1
        } else {
            tX = -1
        }
        let tY;
        if ($(window) / 2 < Y) {
            tY = 1
        } else {
            tY = -1
        }

        $('.img_btm').css({
            transform: `translate(${bX * X / 50 - 25}px, ${bY * Y / 50}px)`
        });

        $('.img_top').css({
            transform: `translate(${tX * X / 50}px, ${tY * Y / 50}px)`
        });

        $('.img_btm img:first-child').css({
            transform: `translate(${tX * X / 25 + 25}px, ${tY * Y / 25 + 3}px)`
        });

        $('.mainVisual .img_case .deco').css({
            transform: `translate(${bX * X / 50 - 25}px, ${bY * Y / 50}px)`
        })
    });
    // main visual

    $('.mainContent .img_slide').slick({
        arrows: false,
        vertical: true,
        infinite: false,
    });

    $(window).on('scroll', function () {

    });

    $('.main_content_case').on('wheel', function (e) {
        if (e.originalEvent.deltaY < 0) {
            $('.mainContent .img_slide').slick('slickPrev');
        } else {
            $('.mainContent .img_slide').slick('slickNext');
        }
    });

    $('.main_content_case').on('mouseover', function () {
        var thisTop = $(this).parent().offset().top;
        var sct = $(window).scrollTop();
        console.log(thisTop, sct);
        if (sct > thisTop) {
        }

        $(this).on('wheel', function (e) {
            if (e.originalEvent.deltaY < 0) {
                $('.mainContent .img_slide').slick('slickPrev');
            } else {
                $('.mainContent .img_slide').slick('slickNext');
            }
        });
    })


})
