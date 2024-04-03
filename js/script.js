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

const aboutElement = document.getElementById('about');
const rImgElement = document.getElementById('rImg');

rImgElement.addEventListener('animationend', () => {
  aboutElement.classList.remove('hide');
  aboutElement.style.animation = 'slideInLeft 0.9s';
});
