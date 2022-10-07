// init Isotope
var $grid = $('.portfolio').isotope({
    itemSelector: '.works',
    layoutMode: 'fitRows',
    getSortData: {
      category: '[data-category]'
    }
    console.log(category);
    }
    );
  
  // bind filter button click
  $('.work_filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterValue;
    $grid.isotope({ filter: filterValue });
  });
  
  // change is-checked class on buttons
  $('.work_filters').each( function( i, filters ) {
    var $filters = $( filters );
    $filters.on( 'click', 'button', function() {
      $filters.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });