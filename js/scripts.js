$(() => {

    $('.reviews_items').slick({
        infinite: true,
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        }, {
            breakpoint: 875,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });


})