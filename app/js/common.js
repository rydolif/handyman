$(function() {

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


//------------------------------------form-------------------------------------------
  // $('input[type="tel"]').mask('+0 (000) 000-00-00');

  // jQuery.validator.addMethod("phoneno", function(phone_number, element) {
  //    return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
  // }, "Введите Ваш телефон");

  // $(".form").each(function(index, el) {
  //   $(el).addClass('form-' + index);

  //   $('.form-' + index).validate({
  //     rules: {
  //       phone: {
  //         required: true,
  //         phoneno: true
  //       },
  //       name: 'required',
  //     },
  //     messages: {
  //       name: "Введите Ваше имя",
  //       phone: "Введите Ваш телефон",
  //     },
  //     submitHandler: function(form) {
  //       var t = {
  //         name: jQuery('.form-' + index).find("input[name=name]").val(),
  //         phone: jQuery('.form-' + index).find("input[name=phone]").val(),
  //         subject: jQuery('.form-' + index).find("input[name=subject]").val()
  //       };
  //       ajaxSend('.form-' + index, t);
  //     }
  //   });

  // });

  // function ajaxSend(formName, data) {
  //   jQuery.ajax({
  //     type: "POST",
  //     url: "sendmail.php",
  //     data: data,
  //     success: function() {
  //       $(".modal").popup("hide");
  //       $("#thanks").popup("show");
  //       setTimeout(function() {
  //         $(formName).trigger('reset');
  //       }, 2000);
  //     }
  //   });
  // }

//---------------------------tabs-----------------------
  // $('.tabs__wrap').hide();
  // $('.tabs__wrap:first').show();
  // $('.tabs ul a:first').addClass('active');
  //  $('.tabs ul a').click(function(event){
  //   event.preventDefault();
  //   $('.tabs ul a').removeClass('active');
  //   $(this).addClass('active');
  //   $('.tabs__wrap').hide();
  //    var selectTab = $(this).attr('href');
  //   $(selectTab).fadeIn();
  // });

//----------------------------------------fixed----------------------------------
  // $(window).scroll(function(){
  //     if($(this).scrollTop()>20){
  //         $('.header').addClass('header--active');
  //     }
  //     else if ($(this).scrollTop()<20){
  //         $('.header').removeClass('header--active');
  //     }
  // });

  // if($(this).scrollTop()>20){
  //   $('.header').addClass('header--active');
  // }

//-------------------------скорость якоря---------------------------------------
  // $(".header__list").on("click","a", function (event) {
  //     event.preventDefault();
  //     var id  = $(this).attr('href'),
  //         top = $(id).offset().top;
  //     $('body,html').animate({scrollTop: top - 60}, 'slow', 'swing');
  // //--------------------закриття меню при кліку на ссилку якоря--------------------
  //    // $('.hamburger').removeClass('hamburger--active');
  //    // $('.header-menu').removeClass('header-menu');
  //    // $('.header--active').removeClass('header--active');
  //    // $('.nav--active').removeClass('nav--active');

  // });

  // //-------------------------------анімація цифр---------------------------------------
  //   var show = true;
  //   var countbox = ".about-statistics__container";
  //   $(window).on("scroll load resize", function () {
  //       if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
  //       var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
  //       var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
  //       var w_height = $(window).height(); // Высота окна браузера
  //       var d_height = $(document).height(); // Высота всего документа
  //       var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
  //       if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
  //           $('.about-statistics__item h3').spincrement({
  //               thousandSeparator: "",
  //               duration: 2000
  //           });
  //           show = false;
  //       }
  //   });

  
});

//----------------------------------------preloader----------------------------------

  // $(window).on('load', function(){
  //   $('.preloader').delay(1000).fadeOut('slow');
  // });
