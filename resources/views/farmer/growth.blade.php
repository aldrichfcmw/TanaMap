@extends('layouts.farmer')
@section('content')
<div class="container-fluid flex-grow-1 container-p-y">
    <div class="row h-md-100">
        <div class="col-12 col-lg-5 mb-3">
            <div class="row">
                <div class="col mb-3">
                    <div class="card">
                        <h5 class="card-header">Bagan Warna</h5>
                        <img src="{{asset('/img/gallery/bagan_warna.jpg')}}" alt="">
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <h5 class="card-header">Table Disease</h5>
                        <div class="table-responsive text-nowrap">
                        <table class="table">
                            <thead>
                            <tr>
                                <th>Lokasi</th>
                                <th>Koordinat</th>
                                <th>Hasil Bagan</th>
                            </tr>
                            </thead>
                            <tbody class="table-border-bottom-0">
                                @foreach ($data as $key => $d)
                                <tr class="location-row" data-name="{{ $d -> growth_name }}" data-lat="{{ $d->latitude }}" data-long="{{ $d->longitude }}">
                                    <td>{{ $d -> growth_name }}</td>
                                    <td>{{ $d -> latitude }}, {{ $d -> longitude }}</td>
                                    <td>{{ $d -> color }}</td>
                                </tr>
                                @endforeach 
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="col-12 col-lg-7 mb-3">
            <div class="card h-md-100">
              <h5 class="card-header">Layer Control</h5>
              <div class="card-body">
                <div class="leaflet-map h-md-100" id="map"></div>
              </div>
            </div>
          </div>
    </div>
</div>   
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script> 
<script>
    var averageLat = {{ $avgLat }};
    var averageLong = {{ $avgLong }};
    var map = L.map('map').setView([averageLat, averageLong], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    var locations = @json($data); // Pass PHP variable to JavaScript

    var markers = [];
    var activeMarker = null;

    function getCustomIcon(size = [30, 47]) {
      var iconUrl = '{{ asset("img/icons/marker/red-marker.png") }}';

      return L.icon({
          iconUrl: iconUrl,
          iconSize: size, // Size of the marker image
          iconAnchor: [size[0] / 2, size[1]], // Anchor position of the marker
          popupAnchor: [0, -size[1]] // Popup position above the marker
      });
  }

  locations.forEach(function(location) {
      var marker = L.marker([location.latitude, location.longitude], {icon: getCustomIcon()}).addTo(map)
          .bindPopup('<b>' + location.growth_name + '</b><br>Latitude: ' + location.latitude + '<br>Longitude: ' + location.longitude);
      
      markers.push(marker);

      marker.on('click', function() {
          if (activeMarker) {
              activeMarker.setIcon(getCustomIcon());
          }
          this.setIcon(getCustomIcon([40, 63])); // Set to larger size when clicked
          activeMarker = this;
      });    
  });

    document.querySelectorAll('.location-row').forEach(function(row) {
        row.addEventListener('click', function() {
            var lat = this.dataset.lat;
            var long = this.dataset.long;
            var status = this.dataset.status;

            map.setView([lat, long], 22); // Pan map to the clicked location

            var selectedMarker = markers.find(function(item) {
                return item.marker.getLatLng().lat == lat && item.marker.getLatLng().lng == long;
            });

            if (selectedMarker) {
                if (activeMarker) {
                    activeMarker.setIcon(getCustomIcon(activeMarker.options.status));
                }
                selectedMarker.marker.setIcon(getCustomIcon(status, [40, 63])); // Set to larger size when clicked
                activeMarker = selectedMarker.marker;
            }
        });
    });
</script>
@endsection

