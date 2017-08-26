// Declare some variable I will need.

var map;
var markers = [];

// Make map look cooler with this style (style 94/san-andreas) from snazzymaps.com
var styles =
[
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": -100
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "lightness": 100
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": 100
            },
            {
                "hue": "#006eff"
            },
            {
                "lightness": -19
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": -16
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#2bff00"
            },
            {
                "lightness": -39
            },
            {
                "saturation": 8
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "saturation": -100
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 100
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "saturation": -100
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "saturation": -100
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "saturation": -100
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 100
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 100
            }
        ]
    }
]

// Create a new map and set it to my neighbourhood at the zoom level I want.
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: -36.7930251, lng: 174.6784522},
	  zoom: 16,
	  styles: styles,
	  mapTypeControl: false, // I don't want users to be able to mess with this.
	  zoomControl: false
	});
}
window.onload = function() {

	initMap();	
}

