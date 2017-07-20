require('./google-map.scss');
require('../../images/map-marker.png');
var apiKey = 'AIzaSyC7b4Gqe7teC0qIrDVVcxezQ-UDgLitGVQ';
var styles = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ed462f"
            },
            {
                "lightness": 17
            }
        ]
    }
];

var GoogleMapsLoader = require('google-maps'); // only for common js environments
GoogleMapsLoader.KEY = apiKey;
GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];
GoogleMapsLoader.LANGUAGE = 'fr';
GoogleMapsLoader.REGION = 'GB';

GoogleMapsLoader.load(function(google) {
    function initMap(){
        var location = new google.maps.LatLng(24.9045, 91.8611);
        var el = document.getElementById('google-map-container');
        var options = {
            center: location,
            zoom: 16,
            panControl: false,
            scrollwheel: false,
            mapTypeId: 'roadmap'
        };
        var map = new google.maps.Map(el, options);
        var markerImage = '/images/map-marker.png';

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: markerImage
        });
        var contentString = '<div class="info-window">' +
            '<h3>Info Window Content</h3>' +
            '<div class="info-content">' +
            '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ' +
            'Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit' +
            ' amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>' +
            '</div>' +
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

        map.set('styles', styles);
    }
    initMap();
});
