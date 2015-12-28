'use strict';

(function() {
  var menuToggle = document.querySelectorAll('.js-menu-toggle');

  if (menuToggle) {
    for (var i = 0; i < menuToggle.length; i++) {
      menuToggle[i].addEventListener('click', function() {
        var globalWrapper = document.querySelectorAll('.global');
        if (globalWrapper[0].classList.contains('global--open')) {
          globalWrapper[0].classList.remove('global--open');
        } else {
          globalWrapper[0].classList.add('global--open');
        }
      });
    }
  }
})();
