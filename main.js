$(document).ready(function() {

  let $xhr=  $.getJSON("http://api.wunderground.com/api/41c93dff69d2241b/geolookup/conditions/q/CO/Boulder.json");

  $xhr.done(function(data) {
    //Step 1: Log Data and see what you are getting back as a response
    console.log(data);
    //Step2: Access your Data
    

  })
});
