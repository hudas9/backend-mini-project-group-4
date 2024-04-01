$(document).ready(() => {
  $.ajax({
    url: 'data/data.json',
    dataType: 'json',
    success: (data) => {
      Object.keys(data.umkm.menu).forEach((category) => {
        var categoryTitle = `<h3 class="category-title" id="${category}">${category}</h3>`;
        var menuItems = `<div class="menu">`;

        data.umkm.menu[category].forEach((item) => {
          var itemImage = item.images || 'images/placeholder-menu.jpg';
          var formattedPrice = item.price.toLocaleString('id-ID');
          var menuItem = `
              <div class="menu-item">
                <div class="menu-item-detail">
                  <p class="menu-item-title">${item.name}</p>
                  <p class="menu-item-price">Rp ${formattedPrice}</p>
                </div>
                <img src="${itemImage}" alt="${item.name}" class="menu-item-image" />
              </div>
          `;

          menuItems += menuItem;
        });

        menuItems += `</div>`;

        $('.category').append(categoryTitle + menuItems);
      });
    },
    error: (xhr, status, error) => {
      console.error('Failed to load menu data:', error);
    },
  });
});

$('.menu-list').click(function () {
  var icon = $('.menu-list-icon i');
  var desc = $('.menu-list-desc');
  var categoryList = $('.category-list');
  var bgOverlay = $('.bg-overlay');

  var isBell = icon.hasClass('fa-bell-concierge');
  var newIconClass = isBell ? 'fa-xmark' : 'fa-bell-concierge';
  var oldIconClass = isBell ? 'fa-bell-concierge' : 'fa-xmark';
  var textContent = isBell ? 'Tutup Menu' : 'Menu';

  icon.removeClass(oldIconClass + ' rotate').addClass(newIconClass + ' rotate');
  desc.text(textContent);

  if (categoryList.hasClass('show')) {
    categoryList.removeClass('show').addClass('hide');
    setTimeout(function () {
      categoryList.css('display', 'none');
    }, 100);
  } else {
    categoryList.removeClass('hide').addClass('show');
    categoryList.css('display', 'block');
  }

  setTimeout(function () {
    icon.removeClass('rotate');
  }, 300);

  if (window.innerWidth >= 768) {
    bgOverlay.css('display', 'none');
  } else {
    if (categoryList.hasClass('show')) {
      bgOverlay.css('display', 'block');
    } else {
      bgOverlay.css('display', 'none');
    }
  }
});

$(document).click(function (event) {
  var categoryList = document.querySelector('.category-list');
  var menuList = document.querySelector('.menu-list');

  if (
    categoryList.classList.contains('show') &&
    !menuList.contains(event.target)
  ) {
    $('.menu-list').click();
  }
});

$(document).ready(function () {
  $.ajax({
    url: 'data/data.json',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      var menu = data.umkm.menu;

      for (var key in menu) {
        var category = key;
        var totalMenu = menu[key].length;
        $('.category-list ul').append(
          `<li>
            <a href="#${category}">
              <span class="category-name">${category}</span>
              <span class="total-menu">${totalMenu}</span>
            </a>
          </li>`
        );
      }
    },
    error: function (xhr, status, error) {
      console.error('Error:', error);
    },
  });
});
