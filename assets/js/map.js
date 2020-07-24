function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: {
            lat: 17.037736,
            lng: -81.931150
        }
    });
        
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        {lat: 23.083833, lng: -82.458169},
        {lat: 23.129948, lng: -82.369486},
        {lat: 23.134520, lng: -82.360470},
        {lat: 19.486487, lng: -70.620113},
        {lat: 19.474516, lng: -70.731854},
        {lat: 19.476948, lng: -70.728924},
        {lat: 13.089563, lng: -86.368665},
        {lat: 13.081883, lng: -86.352978},
        {lat: 13.110041, lng: -86.358604}
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, 
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});            
}
