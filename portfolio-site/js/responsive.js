$(function() {
    $(".comercial_area h2").addClass("appear");
    var mainSwiper = new Swiper('.property_area .swiper-container', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 50,
        centeredSlides: true,
        navigation: {
            nextEl: '.property_area .swiper-button-next',
            prevEl: '.property_area .swiper-button-prev',
        },
    })
    var target = $(".family_area .photo_wrap").offset().top;
    var winHeight = window.innerHeight;
    var targetHeight = parseInt($(".family_area .photo_wrap").css("height"));
    var realTarget = target - (winHeight - targetHeight)/2
    $(".comercial_area .btn_bottom").click(function() {
        $("html, body").animate({
            scrollTop: realTarget
        })
    })

    var lastScroll = 0;
    $(window).scroll(function() {
        var winHeight = $(this).scrollTop();
        var $navTop = $("header nav");
        if(winHeight > lastScroll) {
            $navTop.addClass("down");
            $navTop.removeClass("up");
            $(".main_nav li a").removeClass("up_a");
            $(".header_logo a").removeClass("up");
            $(".nav_wrap .btn_hide_menu").removeClass("up_hide_menu");
            $(".nav_wrap .main_nav").removeClass("slide_menu");
            $(".main_nav li:last-child").removeClass("slide_last");
        }else if(winHeight < lastScroll) {
            $navTop.addClass("up");
            $navTop.removeClass("down");
            $(".main_nav li a").addClass("up_a");
            $(".header_logo a").addClass("up");
            $(".nav_wrap .btn_hide_menu span").addClass("up_hide_menu");
            $(".nav_wrap .main_nav").addClass("slide_menu");
            $(".main_nav li:last-child").addClass("slide_last");
        }
        lastScroll = winHeight;
        if(winHeight == 0) {
            $navTop.removeClass("up");
            $navTop.removeClass("down");
            $(".header_logo a").removeClass("up");
            $(".main_nav li a").removeClass("up_a");
            $(".nav_wrap .btn_hide_menu span").removeClass("up_hide_menu");
            $(".nav_wrap .main_nav").removeClass("slide_menu");
            $(".main_nav li:last-child").removeClass("slide_last");
        }
    }).trigger("scroll");

    var menuShow = false;
    $(".nav_wrap .btn_hide_menu").click(function() {
        if(!menuShow) {
            $('html, body').toggleClass('hidden');
            $(".nav_wrap .main_nav").toggleClass("open_menu");
            $(".nav_wrap .btn_hide_menu span").toggleClass("active");

            menuShow = true;
        }else {
            $('html, body').toggleClass('hidden');
            $(".nav_wrap .main_nav").toggleClass("open_menu");
            $(".nav_wrap .btn_hide_menu span").toggleClass("active");

            menuShow = false;
        }
    });
    $(".footer_wrap .contents > div").click(function() {
        $(this).children("ul").toggleClass("open");
        $(this).children("ul").next().children().toggleClass("close");
    })

})