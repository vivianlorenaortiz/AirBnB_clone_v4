console.log("loaded");
$(document).ready(function () {
    $.get('http://0.0.0.0:5001/api/v1/status/', function (ans) {
      if (ans.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
  });


    let checkDictionary = {};
   $("input").on('change', function () {
	if (this.checked) {
	    checkDictionary[$(this).attr('data-id')] = $(this).attr('data-name');
	} else {
	    delete checkDictionary[$(this).attr('data-id')];
	}
       console.log(checkDictionary);
       let cont = Object.values(checkDictionary);
       console.log(cont.lenght)
	   $('.amenities h4').text(Object.values(checkDictionary).join(', '));

   });
});
