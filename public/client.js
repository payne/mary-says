// client-side js
// run by the browser each time your view template is loaded

$(function() {
  $.get('/says', function(says) {
    $('h1#says').text(says);
  });

  $('form').submit(function(event) {
    event.preventDefault();
    var fName = $('input#fName').val();
    var lName = $('input#lName').val();
    $.post('/says?' + $.param({fName:fName, lName:lName}), function() {
      $('h1#says').text(fName);
      $('input#fName').val('');
      $('input').focus();
    });
  });
});
