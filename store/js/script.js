$(document).ready(function () {
  $('.onecolumn__container').slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoPlaySpeed: 2000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    easing: 'ease'
  });
  $('.slider').slick({
    slidesToShow: 3,
    adaptiveHeight: true,
    infinite: true,
    speed: 500,
    autoPlay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1

        }
      }
    ]
  });
});

