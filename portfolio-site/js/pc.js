window.addEventListener('load', function() {

  $('.youtube-area .play').click(function(){
    var src = $(this).attr("data");
    $('.pop').addClass('on');
    $('.pop .youtube').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+src+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
  })

  $('.pop .close').click(function(){
    $('.pop .youutube iframe').remove();
    $('.pop').removeClass('on');
  })
  $('.youtube-area .mini-photo').click(function() {
    var youtubeActive = $(".play").attr("data");
    $('.pop').addClass('on');
    $('.pop .youtube').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+youtubeActive+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
  })

  $(window).scroll(function() {
    curr_sc = $(window).scrollTop();
    var target = $('.header-navi-main').offset().top;
    var target2 = $('.header-navi-main').offset().top + 44;
    if(curr_sc >= 120){
      $('.header-navi-main').addClass('fix');
      $(".main-header").addClass('fix2');
    }else {
      $('.header-navi-main').removeClass('fix');
      $(".main-header").removeClass('fix2');
    }
  }).trigger("scroll");

  var mainSwiper = new Swiper('.main-slider-area .swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.main-slider-area .swiper-button-next',
      prevEl: '.main-slider-area .swiper-button-prev',
    },
    pagination: {
      el: '.main-slider-area .swiper-pagination',
    },
    on:{
      touchStart:function(){
        $('.main-slider-area .swiper-slide').addClass('on')
      },
      touchEnd:function(){
        $('.main-slider-area .swiper-slide').removeClass('on')
      }

    },
  })

  var bestSwiper = new Swiper('.best-area .swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 15,
    navigation: {
      nextEl: '.best-area .swiper-button-next',
      prevEl: '.best-area .swiper-button-prev',
    },
    pagination: {
      el: '.best-area .swiper-pagination',
    },
  })

  var newBrandSwiperL = new Swiper('.newbrand-area .left .swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.newbrand-area .left .swiper-button-next',
      prevEl: '.newbrand-area .left .swiper-button-prev',
    },
    pagination: {
      el: '.newbrand-area .left .swiper-pagination',
    },
  })

  var newBrandSwiperR = new Swiper('.newbrand-area .right .swiper-container', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: '.newbrand-area .right .swiper-pagination',
      },
      navigation: {
        nextEl: '.newbrand-area .right .swiper-button-next',
        prevEl: '.newbrand-area .right .swiper-button-prev',
      },
  })

  var youtubeSwiper = new Swiper('.youtube-area .swiper-container', {
      direction: 'horizontal',
      centeredSlides: true,
      loop: true,
      slidesPerView: 3,
      navigation: {
        nextEl: '.youtube-area .swiper-button-next',
        prevEl: '.youtube-area .swiper-button-prev',
      },
  })



})
