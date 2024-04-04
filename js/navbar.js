// Show navbar menu
$('#bars').click(function () {
  $('.navbar-menu').addClass('show');
});

// Hide navbar menu
$('#xmark').click(function () {
  $('.navbar-menu').removeClass('show');
  $('.navbar-menu').addClass('hide');
  setTimeout(function () {
    $('.navbar-menu').removeClass('hide');
  }, 500);
});
