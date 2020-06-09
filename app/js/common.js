$(function() {

//------------------------------hamburger-----------------------------
  $('.tabs__wrap').hide();
  $('.tabs__wrap:first').show();
  $('.tabs ul a:first').addClass('active');
   $('.tabs ul a').click(function(event){
    event.preventDefault();
    $('.tabs ul a').removeClass('active');
    $(this).addClass('active');
    $('.tabs__wrap').hide();
     var selectTab = $(this).attr('href');
    $(selectTab).fadeIn();
  });

//------------------------------hamburger-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active');
    $('.header__nav').toggleClass('header__nav--active');
    $('.header').toggleClass('header--menu');
  });

//-------------------------------попандер---------------------------------------
  var swiper = new Swiper('.client__slider', {
    slidesPerView: 2,
    spaceBetween: 50,
    loop: true,
    pagination: {
      el: '.client__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      767: {
        slidesPerView: 1
      }
    }
  });


//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});


//-------------------------скорость якоря---------------------------------------
  $(".click").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 60}, 'slow', 'swing');
  //--------------------закриття меню при кліку на ссилку якоря--------------------
     $('.hamburger').removeClass('hamburger--active');
     $('.header-menu').removeClass('header-menu');
     $('.header--active').removeClass('header--active');
     $('.nav--active').removeClass('nav--active');

  });


  
});

