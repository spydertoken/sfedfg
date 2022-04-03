$(document).ready(function () {
  //timer-1 token
  var date = "MAR 24 2022 09:00:00 GMT+4";

  //timer-2 land
  var date2 = "JAN 28 2022 09:00:00 GMT+4";

  //timer-3 nft
  var date3 = "JAN 27 2022 09:00:00 GMT+4";

  $('#countdown-1-1').timeTo({
    timeTo: new Date(new Date(date)),
    displayDays: 2,
    displayCaptions: true,
    fontSize: 26,
    captionSize: 12
  });

  $('#countdown-1-2').timeTo({
    timeTo: new Date(new Date(date)),
    displayDays: 2,
    displayCaptions: true,
    fontSize: 20,
    captionSize: 11
  });

  $('#countdown-2-1').timeTo({
    timeTo: new Date(new Date(date2)),
    displayDays: 2,
    displayCaptions: true,
    fontSize: 26,
    captionSize: 12
  });

  $('#countdown-2-2').timeTo({
    timeTo: new Date(new Date(date2)),
    displayDays: 2,
    displayCaptions: true,
    fontSize: 20,
    captionSize: 11
  });

  $('#nft-timer-1').timeTo({
    timeTo: new Date(new Date(date3)),
    displayDays: 2,
    displayCaptions: true,
    fontSize: 31,
    captionSize: 0
  });

  $('#nft-timer-2').timeTo({
    timeTo: new Date(new Date(date3)),
    displayDays: 2,
    displayCaptions: true,
    fontSize: 16,
    captionSize: 12
  });

  $('.header__button').click(function () {
    $('.header__menu').addClass('active');
  });
  $('.header__menu').click(function () {
    $('.header__menu').removeClass('active');
  });
  $('.header__link').click(function () {
    $('.header__menu').removeClass('active');
  });


  var $page = $('html, body');
  $('a[href*="#"]').click(function () {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
  });

  window.initHandler = setTimeout(handler, 3000);
  function handler() {
    $("#load").remove(); // Используем выбранный jQuery-объект внутри другой функции
  }
  $(function () {
    $("#progress").width((50 + Math.random() * 30) + "%");
    $(window).on('load', function () {
      $("#progress").width("100%");
      $("#load").fadeOut(400);
    });
  });
});

