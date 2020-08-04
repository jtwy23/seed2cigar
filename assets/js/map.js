//Google map
//Individual place id for each of the factories.
const places = [
    {placeId:'A', lat: 23.083833, lng: -82.458169, photo:'assets/images/cohiba_logo.png', name: 'Factory - Cohiba', address: 'Address: 146 Avenida No. 2121, Havana', description: 'Cohiba produce around 3 million cigars annually. Their vitolas are Lanceros, Esplendidos, Coronas Especial, Robusto, Exquisito and Panatela. The name cohíba derives from the Taíno word for "tobacco".'},
    {placeId:'B', lat: 23.129948, lng: -82.369486, photo:'assets/images/montecristo_logo.jpg', name: 'Factory - Montecristo', address: 'Address: y, Penalver, Havana, Cuba', description: 'The name for the brand was inspired by the Alexandre Dumas, père novel The Count of Monte Cristo, which was supposedly a very popular choice among the torcedores (cigar rollers) in their factory to have read by the lector on the rolling floor.'},
    {placeId:'C', lat: 23.134520, lng: -82.360470, photo:'assets/images/partagas_logo.jpg', name: 'Factory - Partagas', address: 'Address: 416 Industria, Havana, Cuba', description: 'Don Jaime is also legendarily credited with hiring one of the first lectors to read to and entertain the cigar rollers as they worked.'},
    {placeId:'D', lat: 19.486487, lng: -70.620113, photo:'assets/images/lfd_logo.jpg', name: 'Factory - LFD', address: 'Address: Tabacalera La Flor (LFD), Tamboril, 51000, Dominican Republic', description: 'La Flor Dominicana (Dominican Flower) is a "boutique-style" cigar brand manufactured by Tabacalera La Flor S.A. The owner, Litto Gomez Diez, who was called by Cigar Aficionado "arguably the most innovative mind in the cigar business. '},
    {placeId:'E', lat: 19.474516, lng: -70.731854, photo:'assets/images/ep_logo.jpg', name: 'Factory - E.P Carillo', address: 'Address: Tabacalera La Alianza, 51000, Dominican Republic', description: 'Ernesto’s children proposed for him to return to the tobacco fields and craft the next great cigar. With the start of E.P. Carrillo, a boutique cigar brand alongside his daughter and son.'},
    {placeId:'F', lat: 19.476948, lng: -70.728924, photo:'assets/images/arturo_logo.png', name: 'Factory - Arturo Fuente', address: 'Address: Tabacalera Arturo Fuente, 51000, Dominican Republic', description: 'Arturo Fuente is a brand of cigar, founded by Arturo Fuente, Sr. in 1912 in West Tampa, Florida. As of 2010 the company was producing 30 million cigars per annum from its factory in the Dominican Republic.'},
    {placeId:'G', lat: 13.089563, lng: -86.368665, photo:'assets/images/drew_logo.jpg', name: 'Factory - Drew Estate', address: 'Address: Drew Estate Tobacco Company, Esteli, Nicaragua', description: 'The Drew Estate story is one of daring, heartbreak & success but, most of all, one of passion for cigars and the country of Nicaragua, where we have been making cigars since 1998.'},
    {placeId:'H', lat: 13.081883, lng: -86.352978, photo:'assets/images/jdn_logo.jpg', name: 'Factory - Joya De Nicaragua', address: 'Address: Km 147 carretera panamericana. detras del centro comercial erwin, Estelí, Nicaragua', description: 'Joya de Nicaragua, is the oldest brand of cigars made in Nicaragua. The Spanish word joya is a false friend with the English word "joy." The meaning is "jewel" — thus the brand name "Joya de Nicaragua" correctly translates as "Jewel of Nicaragua."'},
    {placeId:'I', lat: 13.110041, lng: -86.358604, photo:'assets/images/myfather_logo.jpg', name: 'Factory - My Father Cigars', address: 'Address: My Father Cigars , Esteli, Nicaragua', description: 'Don José "Pepin" Garcia is the CEO My Father Cigars. My Father\'\s rise to prominence was capped when his Flor de las Antillas was named 2012 Cigar of the Year, an accolade repeated when My Father Le Bijou 1922 received the same honor for 2015.'}  
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
     var marker = new google.maps.Marker({
        position: {lat: place.lat, lng: place.lng},
        label: place.placeId
    });

// Info Windows connected to markers
var infowindow = new google.maps.InfoWindow({
    content: `
        <div>
            <strong>${place.name}</strong>
            <br>
            <br>
            <img src="${place.photo}">                
            <br>
            <br>
            <em>${place.address}</em>
            <br>
            <br>
            <div>${place.description}</div>
        </div>
    `
});

marker.addListener('click', function() {
    infowindow.open(map, marker);
});

return marker;
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