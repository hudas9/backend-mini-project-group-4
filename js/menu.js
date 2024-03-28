$(document).ready(() => {
  $.ajax({
    url: 'data/data.json',
    dataType: 'json',
    success: (data) => {
      Object.keys(data.umkm.menu).forEach((category) => {
        var categoryTitle = `<h3 class="category-title" id="${category}">${category}</h3>`;
        var menuItems = `<div class="menu">`;

        data.umkm.menu[category].forEach((item) => {
          var itemImage =
            item.images || 'https://placeholder.com/120x120?text=Poster';
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

function toggleMenu() {
  var icon = document.querySelector('.menu-list-icon i');
  var desc = document.querySelector('.menu-list-desc');
  var categoryList = document.querySelector('.category-list');

  var isBell = icon.classList.contains('fa-bell-concierge');
  var newIconClass = isBell ? 'fa-xmark' : 'fa-bell-concierge';
  var oldIconClass = isBell ? 'fa-bell-concierge' : 'fa-xmark';
  var textContent = isBell ? 'Tutup Menu' : 'Menu';

  icon.classList.remove(oldIconClass, 'rotate');
  icon.classList.add(newIconClass, 'rotate');
  desc.textContent = textContent;

  if (categoryList.classList.contains('show')) {
    categoryList.classList.remove('show');
    categoryList.classList.add('hide');
    setTimeout(function () {
      categoryList.style.display = 'none';
    }, 300);
  } else {
    categoryList.classList.remove('hide');
    categoryList.classList.add('show');
    categoryList.style.display = 'block';
  }

  setTimeout(function () {
    icon.classList.remove('rotate');
  }, 500);
}

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
