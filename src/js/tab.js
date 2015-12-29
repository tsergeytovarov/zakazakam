'use strict';

(function() {

  // табы
  var tabs = document.querySelectorAll('.js-tab-container');
  tabs = Array.prototype.slice.call(tabs, 0);

  if (tabs) {

    tabs.forEach(function(t) {
      var tabsControl = t.querySelectorAll('.tab-control');
      tabsControl = Array.prototype.slice.call(tabsControl, 0);

      tabsControl.forEach(function(tabc) {
        tabc.addEventListener('click', function() {

          if (tabc.classList.contains('active')) {
            return false;
          } else {
            tabsControl.forEach(function(tabc2) {
              tabc2.classList.remove('active');
            });
            tabc.classList.add('active');
          }

          var tabTargetName = tabc.dataset.tab;

          var tabTargets = t.querySelectorAll('.js-tab');
          tabTargets = Array.prototype.slice.call(tabTargets, 0);

          tabTargets.forEach(function(tabi) {
            if (tabi.getAttribute('id') !== tabTargetName) {
              tabi.classList.remove('active');
            } else {
              tabi.classList.add('active');
            }
          });
        });
      });
    });
  }

})();
