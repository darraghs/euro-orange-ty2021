let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 54.2767272, lng: -8.5064695 },
    zoom: 9,
  });
}
