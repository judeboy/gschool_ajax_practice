$(document).ready(function() {
  $.$.getJSON('/path/to/file', {param1: 'value1'}, function(json, textStatus) {
      /*optional stuff to do after success */
  });
});
