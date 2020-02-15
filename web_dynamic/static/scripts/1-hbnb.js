console.log("loaded");
$(document).ready(function () {
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
	   $('.amenities h4').text("hola");
	   $('.amenities h4').text(Object.values(checkDictionary).join(', '));

   });
});
