console.log("loaded");
$(document).ready(function() {
    $.get('http://0.0.0.0:5001/api/v1/status/', function(ans) {
        if (ans.status === 'OK') {
            $('#api_status').addClass('available');
        } else {
            $('#api_status').removeClass('available');
        }
    });

    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        data: JSON.stringify({}),
        success: function(data) {
            for (const elem of data.values()) {
                $('.places').append('<article><div class="title"><h2>' + elem.name +
                    '</h2><div class="price_by_night">' + elem.price_by_night +
                    '</div></div><div class="information"><div class="max_guest"><i class="fa fa-users fa-3x" aria-hidden="true"></i><br />' + elem.max_guest +
                    ' Guests</div><div class="number_rooms"><i class="fa fa-bed fa-3x" aria-hidden="true"></i><br />' + elem.number_rooms +
                    ' Bedrooms</div><div class="number_bathrooms"><i class="fa fa-bath fa-3x" aria-hidden="true"></i><br />' + elem.number_bathrooms +
                    ' Bathroom</div></div><div class="description">' + elem.description + '</div></article>');
            }
        },
        error: function(data) {
            console.log('Not Json');
        },
    });

    let checkDictionary = {};
    $("input").on('change', function() {
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
