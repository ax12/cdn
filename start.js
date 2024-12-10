$(document).ready(function($) {
	if ($('#gallery').length) {
	    Galleria.ready(function(options) {
            this.bind('image', function(e) {
                Galleria.log(e.index) // the image index
            });
        });
		Galleria.loadTheme("/template/js/galleria.classic.min.js");
		/*Galleria.configure({
			transition : 'fade'
		});*/
		Galleria.run('#gallery', {
			transition : 'fade',
			height: 0.75/*,
			dataSource : dataGallery*/
		});
	};
	$.backstretch(bgImage);
	if ($('#google-maps').length) {
        var map;
        var markerObjects = new Array();
        var mapContainer = $('#google-maps');
        var locations = $('#location');
        if (typeof locations !== 'undefined' && locations.length > 0 && mapContainer.length == 1) {
            infowindow = new google.maps.InfoWindow({});
            map = new google.maps.Map(mapContainer.get(0), {
				mapTypeId:google.maps.MapTypeId.ROADMA,
				zoom: 10,
				 disableDefaultUI: true
            });

            var mapBounds = new google.maps.LatLngBounds();
            locations.each(function () {
                var location = $(this).text().split(';');
                var latLng = new google.maps.LatLng(location[0], location[1]);
                mapBounds.extend(latLng);
                var marker = new google.maps.Marker({
                    draggable:false,
                    raiseOnDrag:false,
                    map:map,
                    position:latLng,
                });
                markerObjects.push(marker);
            });
            map.setCenter(mapBounds.getCenter());
           /* map.setCenter(mapBounds.getCenter(), map.fitBounds(mapBounds));*/
        }
    }
    
    
}); 
