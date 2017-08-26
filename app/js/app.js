// Declare some variable I will need.

var map;
var markers = [];

// Create a new map and set it to my neighbourhood at the zoom level I want.
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: 36.7930251, lng: 174.6784522},
	  zoom: 13,
	  styles: styles,
	  mapTypeControl: false, // I don't want users to be able to mess with this.
	  zoomControl: false
	});
}
window.onload = function() {

	initMap();	
}
