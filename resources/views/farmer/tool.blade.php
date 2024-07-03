{{-- @push('head') --}}
{{-- <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" /> --}}
{{-- @endpush --}}
@extends('layouts.farmer')
@section('content')
<div class="container-fluid flex-grow-1 container-p-y">
    <div class="row mb-3">
        <div class="col-md">
          <div class="card">
            <div class="row g-0">
              <div class="col-md-4 d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-cloud-sun-rain" style="font-size: 4em;"></i>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Smart Weather</h5>
                  <p class="card-text" id="weather">
                    0
                  </p>            
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md">
          <div class="card">
            <div class="row g-0">
              <div class="col-md-4 d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-seedling" style="font-size: 4em;"></i>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Smart Soil</h5>
                  <p class="card-text" id="soil">
                    0
                  </p>            
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md">
          <div class="card">
            <div class="row g-0">
              <div class="col-md-4 d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-water" style="font-size: 4em;"></i>
            </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h6 class="card-title">Smart Irrigation</h6>
                  <p class="card-text" id="irrigation">
                    0
                  </p>            
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md">
            <div class="card">
              <div class="row g-0">
                <div class="col-md-4 d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-map-location-dot" style="font-size: 4em;"></i>
              </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Koordinat</h5>
                    <p class="card-text" id="koordinat">
                      0
                    </p>            
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
    <div class="row h-75">
        

        <div class="col-12 col-lg-6 mb-3">
          <div class="row">
            <div class="col-12 mb-3">
              <div class="card">
                <h5 class="card-header">Tabel Tool</h5>
                <div class="card-body row">
                  <div class="card-datatable table-responsive">
                    <table class="dt-responsive table border-top">
                            <thead>
                            <tr>
                              <th>No.</th>
                              <th>Name</th>
                              <th>Location</th>
                              <th>Land Area</th>
                              <th>Action</th>
                            </tr>
                            </thead>
                            <tbody class="table-border-bottom-0">
                                @foreach ($data as $key => $d)
                                <tr class="location-row" data-name="{{ $d -> tool_name }}" data-area="{{ $d -> land_area }}" data-status="{{ $d -> status }}" data-lat="{{ $d->latitude }}" data-long="{{ $d->longitude }}" data-img="{{ asset('storage/images/tool/' . $d->image) }}">
                                  <td>{{ $key+1 }}</td>
                                  <td>{{ $d -> tool_name }}</td>
                                  <td>{{ $d -> latitude }}, {{ $d -> longitude }}</td>
                                  <td>{{ $d -> land_area }}</td>
                                    <td class="text-center">
                                        <a class="text-dark" target="blank" href="https://www.google.com/maps?q={{ $d -> latitude }},{{ $d -> longitude }}"><i class="bx bx-link-external me-1"></i></a>                  
                                    </td>
                                </tr>
                                @endforeach  
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div>
            <div class="col-12">
              <div class="card" id="image-card" style="display:;">
                <h5 class="card-header">Image: <span id="image-name"></span></h5>
                <div class="card-body row">
                <img id="card-image" src="" alt="&nbsp Select row table to show image">
              </div>
              </div>
            </div>
          </div>
          
      </div>
      <div class="col-12 col-lg-6 mb-3">
          <div class="card ">
            <h5 class="card-header">Layer Control</h5>
            <div class="card-body">
              <div class="leaflet-map " id="map"></div>
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
          .bindPopup('<b>' + location.tool_name + '</b><br>Latitude: ' + location.latitude + '<br>Longitude: ' + location.longitude);
      
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

          map.setView([lat, long], 22); // Pan map to the clicked location

          var selectedMarker = markers.find(function(marker) {
              return marker.getLatLng().lat == lat && marker.getLatLng().lng == long;
          });

          if (selectedMarker) {
              if (activeMarker) {
                  activeMarker.setIcon(getCustomIcon());
              }
              selectedMarker.setIcon(getCustomIcon([40, 63])); // Set to larger size when clicked
              activeMarker = selectedMarker;
          }
          var imageSrc  = row.getAttribute('data-img');
          var rowSrc    = row.getAttribute('data-name');
          var landArea  = row.getAttribute('data-area')
          var statusSungai  = row.getAttribute('data-status')
          var imageCard = document.getElementById('image-card');
          var cardImage = document.getElementById('card-image');

          cardImage.src = imageSrc;
          imageCard.style.display = 'block';
          document.getElementById('image-name').innerHTML = rowSrc;
          var area = Math.ceil(landArea / 400);
          // console.log(area);
          if (statusSungai == 1){
            var status_sungai = 1 ;
          } else{
            var status_sungai = 0 ;
          }
          document.getElementById('weather').innerHTML = 1;
          document.getElementById('irrigation').innerHTML = status_sungai;
          document.getElementById('soil').innerHTML = area;
          document.getElementById('koordinat').innerHTML = lat + ', ' + long;
      });
  });
</script>

@endsection