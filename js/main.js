$(function () {
    $(window).on('mousemove', function (e) {
        let X = e.pageX;
        let Y = e.pageY;

        // $(window).width() /2 
        let b;
        if ($(window) / 2 < X) {
            b = -1
        } else {
            b = 1
        }


        let t;
        if ($(window) / 2 < X) {
            t = 1
        } else {
            t = -1
        }

        $('.img_btm').css({
            transform: `translate(${b * X / 50 - 25}px, ${Y / 50}px)`
        })

        $('.img_top').css({
            transform: `translate(${t * X / 50}px, ${Y / 50}px)`
        })

        $('.img_btm img:first-child').css({
            transform: `translate(${t * X / 50}px, ${Y / 50}px)`
        })


        $('.img_btm').css({
            // transform: `translate(${X / 100 - 70}px, ${Y / 100}px`,
            //transform : 'translate(' + X + 'px, ' + Y + 'px)';
        });
    });
})
