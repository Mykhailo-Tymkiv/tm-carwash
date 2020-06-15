function initMap() {
  const carwash = {lat: 49.8319545, lng: 23.9877542};
  const map = new google.maps.Map(
      document.getElementById('map'), {zoom: 17, center: carwash});
  const marker = new google.maps.Marker({position: carwash, map: map});
  const InfoWindow = new google.maps.InfoWindow({content: '<h2>TM EXPRESS Car wash</h2>'});
  marker.AddListener('click', function(){
        InfoWindow.open(map, marker);
  });
}
// function addMarker(coordinates) {
   // const marker = new google.maps.Marker({coordinates: carwash, map: map});
// } 