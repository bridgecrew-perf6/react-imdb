export const sliderSettings ={
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
                slidesToScroll:3,
                infinite: true,
                dots: false
            }
        },
    ]
}