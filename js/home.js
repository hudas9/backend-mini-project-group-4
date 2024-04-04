const aboutElement = document.getElementById('about');
const rImgElement = document.getElementById('rImg');

// Run the animation when the image is loaded
rImgElement.addEventListener('animationend', () => {
  aboutElement.classList.remove('opacity-0');
  aboutElement.style.animation = 'slideInLeft 0.9s';
});

const sloganElement = document.getElementById('slogan');
const sloganTexts = [
  'Nikmati Kelezatan Sederhana, Rasakan Kehangatan Rumah',
  'Sederhana, Tetapi Tidak Pernah Mengurangi Kelezatan',
  'Sajian Sederhana, Kebahagiaan yang Sejati',
  'Rasakan Kelezatan Otentik dalam Setiap Sajian',
  'Di Sini, Sederhana Bukan Berarti Biasa',
  'Kesederhanaan yang Menggugah Selera, Rasakan Sendiri',
  'Sederhana dalam Rasa, Luar Biasa dalam Pengalaman',
  'Setiap Hidangan Sederhana adalah Cerita Kebahagiaan',
  'Kelezatan yang Tidak Pernah Tergantikan oleh Kesederhanaan',
  'Rumah Rasa Sederhana, Kebahagiaan yang Tiada Tanding',
  'Sederhana Sebagai Kunci Kebahagiaan',
  'Hidangan Sederhana, Kenikmatan yang Murni',
  'Kelezatan Sederhana, Kenyamanan Sejati',
  'Kesederhanaan yang Membuatmu Pulang',
  'Rasakan Ketenangan dalam Setiap Suapan Sederhana',
  'Kesederhanaan yang Menginspirasi',
  'Hidup yang Sederhana, Rasakan Kelezatan Sejati',
  'Sederhana, Tetapi Tak Terlupakan',
  'Kebahagiaan dalam Kesederhanaan',
  'Kenikmatan Sederhana, Kebahagiaan yang Berlipat-lipat',
];

// Display a random slogan
function displayRandomSlogan() {
  const randomIndex = Math.floor(Math.random() * sloganTexts.length);
  sloganElement.innerHTML = '';
  new TypeIt(sloganElement, {
    strings: [sloganTexts[randomIndex]],
    speed: 50,
    cursor: false,
    waitUntilVisible: true,
    lifeLike: true,
    afterComplete: () => {
      setTimeout(displayRandomSlogan, 6000);
    }
  }).go();
}

// Display a random slogan when the page is loaded
displayRandomSlogan();
