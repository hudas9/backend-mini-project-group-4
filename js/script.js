$('#bars').click(function () {
  $('.navbar-menu').addClass('show');
});

$('#xmark').click(function () {
  $('.navbar-menu').removeClass('show');
  $('.navbar-menu').addClass('hide');
  setTimeout(function () {
    $('.navbar-menu').removeClass('hide');
  }, 500);
});

var width = $(window).width(); 
window.onscroll = function(){

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top
        }, 1500, function(){
        window.location.hash = hash;
       });
       } 
      });
  });
}