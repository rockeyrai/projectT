document.addEventListener('DOMContentLoaded', function() {
  // Initialize Isotope
  var $grid = new Isotope('.project', {
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    transitionDuration: '0.6s'
  });

  // Set the "All" button as active by default
  var allButton = document.querySelector('.filter-button-group button[data-filter="*"]');
  if (allButton) {
    allButton.classList.add('active');
  }

  // Apply the default filter to show all items
  $grid.arrange({ filter: '*' });

  // Handle button click for filtering
  var buttons = document.querySelectorAll('.filter-button-group button');
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Remove 'active' class from all buttons
      buttons.forEach(function(btn) {
        btn.classList.remove('active');
      });

      // Add 'active' class to the clicked button
      this.classList.add('active');

      // Get the filter value from the data-filter attribute
      var filterValue = this.getAttribute('data-filter');

      // Apply the filter to Isotope
      $grid.arrange({ filter: filterValue });
    });
  });
});
