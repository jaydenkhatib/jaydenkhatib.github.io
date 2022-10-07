// init Isotope
var $grid = $('.portfolio').isotope({
    itemSelector: '.works',
    layoutMode: 'fitRows',
    getSortData: {
      category: '[data-category]'
    }
    }
    );
  
  // bind filter button click
  $('#filters').on( 'click', 'a', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterValue;
    $grid.isotope({ filter: filterValue });
  });
  
  // change is-checked class on buttons
  $('#filters').each( function( i, filters ) {
    var $filters = $( filters );
    $filters.on( 'click', 'a', function() {
      $filters.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });