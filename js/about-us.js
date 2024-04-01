var jamBuka = document.getElementById('jam-buka');
var closeJamBuka = document.getElementById('close-jam-buka');
var jamBukaContainer = document.querySelector('.jam-buka-container');
var bgOverlay = document.getElementById('bg-overlay');

jamBuka.addEventListener('click', function () {
  jamBukaContainer.style.display = 'flex';
  bgOverlay.style.display = 'block';
});

closeJamBuka.addEventListener('click', function () {
  jamBukaContainer.style.display = 'none';
  bgOverlay.style.display = 'none';
});

bgOverlay.addEventListener('click', function () {
  jamBukaContainer.style.display = 'none';
  bgOverlay.style.display = 'none';
});
