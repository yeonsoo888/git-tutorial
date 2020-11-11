$(function() {
    var innerClicked = false;

    $(".header-top .btn-navi").click(function() {
        $(".header-top .navi-bg").toggleClass("clicked-menu-wrap");
        $(".header-top .main-navi").toggleClass("clicked-menu");
    })

    $(".main-navi .btn-close").click(function() {
        $(".header-top .navi-bg").toggleClass("clicked-menu-wrap");
        $(".header-top .main-navi").toggleClass("clicked-menu");
    });

    $(".main-navi .navi > li a").click(function() {
        if(!innerClicked) {
            innerClicked = true;
            $(this).children("strong").addClass("clicked-text");
            $(this).children("div").addClass("clicked-direction");
            $(this).next().addClass("non-hidden");
        }else {
            $(this).children("strong").toggleClass("clicked-text");
            $(this).children("div").toggleClass("clicked-direction");
            $(this).next().toggleClass("non-hidden");
        }
    });

    $(".groupsite-area .groupsite").click(function() {
        if($(this).hasClass("clicked-groupsite")) {
            $(this).removeClass("clicked-groupsite");
            $(this).children("span").removeClass("clicked-direction");
            $(".groupsite-area .hidden-menu").removeClass("clicked-hidden-menu");
        }else {
            $(".groupsite-area .hidden-menu").addClass("clicked-hidden-menu");
            $(this).addClass("clicked-groupsite");
            $(this).children("span").addClass("clicked-direction");
        }
    })

    $(".groupsite-area .gototop").click(function() {
        $("body").animate({
            scrollTop: "0"
        },500)
    });

    var mainSwiper = new Swiper('.main-slide-area .swiper-container', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        pagination: {
            el: '.main-slide-area .swiper-pagination',
        },
    })

    var cjSwiper = new Swiper('.cjnow-area .swiper-container', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        centeredSlides: true,
        loop:'true',
        spaceBetween: 15,
        pagination: {
            el: '.cjnow-area .swiper-pagination',
        },
    })

    var mediaSwiper = new Swiper('.media-area .swiper-container', {
      direction: 'horizontal',
      slidesPerView: 'auto',
      centeredSlides: true,
      loop:'true',
      spaceBetween: 15,
        pagination: {
            el: '.media-area .swiper-pagination',
        },
    })

    var hireSwiper = new Swiper('.hire-area .swiper-container', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
            el: '.hire-area .swiper-pagination',
        },
    })

    function footerFix() {
      curr_sc = $(window).scrollTop();
      target = $('.global-new-area').offset().top-100;
      if(curr_sc >= target){
        $('.footer .hidden-footer').addClass('fix');
      }else{
        $('.footer .hidden-footer').removeClass('fix');
      }
    }
    footerFix();
    $(window).scroll(function(){
      footerFix();
    })

    $(".play_btn").click(function() {
        let src = $(this).data("src");
        $('.media-area').append("<div class='bg'></div>");
        $('.media-area .bg').append('<div class="if_wrap"><iframe src="https://www.youtube.com/embed/' + src + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')
        $('.media-area .bg').append('<div class="if_close">X</div>')
    })
    
    $(document).on("click",".if_close",function() {
        $(this).parent().remove();
    })

});
