// Declare some variable I will need.

var map;
var markers = [];  // Will hold the markers for the restaurants.
var styles = []; // will hold the map styles.
var locations = []; // will hold location information for the restaurants.
var defaultMarker = makeMarkerIcon('0091ff');
var selectedMarker = makeMarkerIcon('FFFF24')

// Make map look cooler with this style (style 94/san-andreas) from snazzymaps.com
styles =

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

var locations = [
  {title: 'Dominoes', location: {lat: -36.790816, lng: 174.687644}},
  {title: 'Cafe Bon Bon', location: {lat: -36.791718, lng: 174.687397}},
  {title: 'Crustys Pizza Burger', location: {lat: -36.792915, lng: 174.661455}},
  {title: 'Hobsonville Sushi', location: {lat: -36.793456, lng: 174.660227}},
  {title: 'Indian Summer', location: {lat: -36.792735, lng: 174.660795}},
  {title: 'House of Chocolate', location: {lat: -36.792365, lng: 174.686845}},
];

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

// Makes sure the window has loaded before trying to initialize map.
window.onload = function() {

	initMap();	
}
// Function creates markers with a color parameter.

function makeMarkerIcon(markerColor) {
var markerImage = new google.maps.MarkerImage(
  'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
  '|40|_|%E2%80%A2',
  new google.maps.Size(21, 34),
  new google.maps.Point(0, 0),
  new google.maps.Point(10, 34),
  new google.maps.Size(21,34));
return markerImage;
}
