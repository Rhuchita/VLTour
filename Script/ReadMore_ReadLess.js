$('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }

  $('html, body').animate({
        scrollTop: $(".card-group").offset().top
    }, 2000);

  // $('html, body').animate({
  //     scrollTop: $(".slidingDiv").offset().top + $('window').height()
  //   }, 2000);
});
