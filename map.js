// Creates a map and adds a pin to the centre of the world, long and lat 0,0
const map = L.map('myMap');
map.setView({lon: 0, lat: 0}, 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
{
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

L.marker({lon: 0, lat: 0}).bindPopup('The center of the world').addTo(map);



// Adds a buton to zoom into the map
const button = document.querySelector('#find-me');

function doZoom() {
    map.setZoom(5);
}

button.addEventListener('click', doZoom);

/*
 * Now to get my coordinates and load those into the map when the button is clicked.
 */
var para = document.getElementById("result");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    para.innerHTML = "Geolocation is not supported by this browser.";
  }
}




function showPosition(position) {
    const myLong = position.coords.longitude;
    const myLat = position.coords.latitude;
  
    para.innerHTML = "Latitude: " + lat + "<br>Longitude: " + long;

    map = L.map('myLocation');
    map.setView({lon: myLong, lat: myLat}, 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
        maxZoom: 19,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map);

    L.marker({lon: 0, lat: 0}).bindPopup('The center of the world').addTo(map);
}

