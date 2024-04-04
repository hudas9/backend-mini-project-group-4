var showOpeningHours = document.getElementById('show-opening-hours');
var closeOpeningHours = document.getElementById('close-opening-hours');
var openingHoursContainer = document.querySelector('.opening-hours-container');
var bgOverlay = document.getElementById('bg-overlay');

// Show opening hours
showOpeningHours.addEventListener('click', function () {
  openingHoursContainer.style.display = 'flex';
  bgOverlay.style.display = 'block';
});

// Hide opening hours
closeOpeningHours.addEventListener('click', function () {
  openingHoursContainer.style.display = 'none';
  bgOverlay.style.display = 'none';
});

// Hide opening hours when clicking outside the container
bgOverlay.addEventListener('click', function () {
  jamBukaContainer.style.display = 'none';
  bgOverlay.style.display = 'none';
});
