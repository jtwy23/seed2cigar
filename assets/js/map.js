//Google map
//Individual place id for each of the factories.
const places = [
    {placeId:'A', lat: 23.083833, lng: -82.458169},
    {placeId:'B', lat: 23.129948, lng: -82.369486},
    {placeId:'C', lat: 23.134520, lng: -82.360470},
    {placeId:'D', lat: 19.486487, lng: -70.620113},
    {placeId:'E', lat: 19.474516, lng: -70.731854},
    {placeId:'F', lat: 19.476948, lng: -70.728924},
    {placeId:'G', lat: 13.089563, lng: -86.368665},
    {placeId:'H', lat: 13.081883, lng: -86.352978},
    {placeId:'I', lat: 13.110041, lng: -86.358604},  
];

var map;

// Loads google map
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: {
        lat: 17.037736,
        lng: -81.931150
    }
});

// Map markers
var markers = places.map(function(place, i) {
    return new google.maps.Marker({
        position: {lat: place.lat, lng: place.lng},
        label: place.placeId
    });
});
   
var markerCluster = new MarkerClusterer(map, markers, 
{imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});      
}

// User clicks to location and zooms in on location
function moveMapTo(placeId){
    var foundPlace;
        for (i=0; i<places.length; i++){
            if(places[i].placeId === placeId) {
                foundPlace=places[i];
    }
}

map.setCenter({
    lat: foundPlace.lat,
    lng: foundPlace.lng,
});

    map.setZoom(15);
}
