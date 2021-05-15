/*********  burger ************/
let user_icon = document.querySelector('.burger');
user_icon.addEventListener("click", function (e) {
  let user_menu = document.querySelector('.main-menu');
  user_menu.classList.toggle('show');
  user_icon.classList.toggle('active');
});

document.documentElement.addEventListener("click", function (e) {
  if (!e.target.closest('.burger')) {
    let user_menu = document.querySelector('.main-menu');
    user_menu.classList.remove('show');
    user_icon.classList.remove('active');
  }
});

/************  убираем классы, если burger не активен  ************************/
document.documentElement.addEventListener("click", function () {

  let burgerActive = document.querySelector('.burger.active');

  if (burgerActive) {
    $('.logo').addClass('active');
  }
  if (!burgerActive) {
    $('.logo').removeClass('active');
  }

});

$('.main-menu__link').click(function () {
  $('.main-menu').removeClass('show');
  $('.burger').removeClass('active');
});

/*************       header  slick       ************/
$('.header__slider').slick({
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  autoplay: true,
  speed: 2000,
  pauseOnHover: false
});

/***********   active menu по click   **************/
$(function () {
  $('.main-menu a').each(function () {
    var location = window.location.href;
    var link = this.href;
    if (location == link) {
      $(this).addClass('active');
    }
    else {
      $(this).removeClass('active');
    }
  });
});

/***************   изменение html  ******************************/
$(window).resize(function (event) {
  adaptive_function();
});

function adaptive_header(w, h) {
  var headerMenuLeft = $('.main-menu__left');/* блок, который закинуть */
  var headerMenuRight = $('.main-menu__right');/* блок, который закинуть */
  var headerLinkRight = $('.main-menu__link_right');/* блок, который закинуть */

  if (w < 451) {
    $('.single-post__comments-text').appendTo($('.single-post__comments-wrap'));
  } else {
    $('.single-post__comments-text').appendTo($('.single-post__comments-message'));
  }

  if (w > 700) {
    $('.burger').click(function () {
      $('.right-menu').addClass('active');
    });
    $('.right-menu__close').click(function () {
      $('.right-menu').removeClass('active');
    });
  } else {
    $('.burger').click(function () {
      $('.right-menu').removeClass('active');
    });
  }

  if (w < 701) {
    headerLinkRight.appendTo(headerMenuLeft);
  } else {
    headerLinkRight.prependTo(headerMenuRight);
  }
}

function adaptive_function() {
  var w = $(window).outerWidth();
  var h = $(window).outerHeight();
  adaptive_header(w, h);
}
adaptive_function();

/*************       collection  slick       ************/
$('.collection__slider').slick({
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  dots: false,
  autoplay: true,
  pauseOnHover: false,
  speed: 2500,
  responsive: [
    {
      breakpoint: 1101,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 801,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 601,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 451,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

/**********************  gallery__filter   ************/
$(document).ready(function () {

  //filter gallery (data-filter)
  $('.gallery__btn').click(function () {

    var value = $(this).attr('data-filter');
    if (value == 'all') {
      $('.gallery__item').show('1000');
    }
    else {
      $('.gallery__item').not('.' + value).hide('1000');
      $('.gallery__item').filter('.' + value).show('1000');
    }

    //add actice class
    $('.gallery__filter .gallery__btn').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
    });

  });

});

/*************       about  slick       ************/
$('.about-partners__slider').slick({
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  dots: false,
  autoplay: true,
  speed: 2000,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1401,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1001,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 701,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 501,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

/***********   pagination   ***********/
$('#blog-page__pagination').paginate({
  perPage: 4
});

/*************       blog-page  slick       ************/
$('.blog-page__slider-list').slick({
  prevArrow: $('.blog-page__slider-btn_left'),
  nextArrow: $('.blog-page__slider-btn_right'),
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: false,
  autoplay: true,
  speed: 2000,
  pauseOnHover: false
});

/*************       contact-page  slick       ************/
$('.contact-page__slider').slick({
  arrows: false,
  slidesToShow: 10,
  slidesToScroll: 6,
  infinite: true,
  dots: true,
  autoplay: true,
  pauseOnHover: false,
  speed: 2500,
  responsive: [
    {
      breakpoint: 1101,
      settings: {
        slidesToShow: 6
      }
    },
    {
      breakpoint: 801,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 601,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 451,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 401,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 351,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});






