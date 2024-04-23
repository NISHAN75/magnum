(function ($) {
   $(document).ready(function () {


    $(".main-menu li , .top-btn-wrapper").hover(function(){
        $(this).find("ul").stop(true, true).slideDown();
        $(this).find('.down-arrow-icon').addClass('rotate');
      }, function(){
        $(this).find("ul").stop(true, true).slideUp();
        $(this).find('.down-arrow-icon').removeClass('rotate');
      });



    //   magnific Popup
      $(".trigger-popup").magnificPopup({
        type: "iframe",
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allow="autoplay"></iframe>' + "</div>",
            patterns: {
                youtube: {
                    index: "youtube.com/",
                    id: "v=",
                    src: "https://www.youtube.com/embed/%id%?autoplay=1",
                },
            },
        },
      });

      // swiper
      let projectSlider = new Swiper(".featured-project", {
        slidesPerView: "auto",
        centeredSlides: true,
        grabCursor:true,
        // autoplay: {
        //   delay: 5000,
        // },
        initialSlide: 1, 
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

      });
      

       
   });
})(jQuery);

