@push('head')
<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
@endpush
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
                  <p class="card-text">
                    32
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
                  <p class="card-text">
                    22
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
                  <p class="card-text">
                    22
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
                    <p class="card-text">
                      22
                    </p>            
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
    <div class="row h-75">
        {{-- <div class="col-4">
            <div class="card">
                <h5 class="card-header">Table Basic</h5>
                <div class="table-responsive text-nowrap">
                <table class="table">
                    <thead>
                    <tr>
                        <th>Nama Lokasi</th>
                        <th>Koordiant</th>
                        <th>Luas Lahan</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                    <tr>
                        <td><i class="fa-solid fa-location-dot me-3"></i><span class="fw-medium">SDA</span></td>
                        <td><span>-7.428511, 112.681201</span></td>
                        <td><span>1000 m<sup>2</sup></span></td>
                        <td class="text-center">
                            <a class="text-dark" href="javascript:void(0);"><i class="bx bx-link-external me-1"></i></a>                  
                        </td>
                    </tr>
                    <tr>
                        <td><i class="fa-solid fa-location-dot me-3"></i><span class="fw-medium">SDA</span></td>
                        <td><span>-7.428511, 112.681201</span></td>
                        <td><span>1000 m<sup>2</sup></span></td>
                        <td class="text-center">
                            <a class="text-dark" href="javascript:void(0);"><i class="bx bx-link-external me-1"></i></a>                  
                        </td>
                    </tr>
                    <tr>
                        <td><i class="fa-solid fa-location-dot me-3"></i><span class="fw-medium">SDA</span></td>
                        <td><span>-7.428511, 112.681201</span></td>
                        <td><span>1000 m<sup>2</sup></span></td>
                        <td class="text-center">
                            <a class="text-dark" href="javascript:void(0);"><i class="bx bx-link-external me-1"></i></a>                  
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
        <div class="col-8">
            <div class="card h-100">
                <h5 class="card-header">Maps</h5>
                <div class="card-body">
                  <div class="leaflet-map  h-100" id="layerControl"></div>
                </div>
            </div>
        </div> --}}

        <div class="col-12 col-lg-5 mb-3">
          <div class="row">
            <div class="col-12 mb-3">
              <div class="card">
                <h5 class="card-header">Table Disease</h5>
                <div class="card-body row">
                    <div class="table-responsive text-nowrap">
                        <table class="table">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody class="table-border-bottom-0">
                                @foreach ($data as $key => $d)
                                <tr class="location-row" data-lat="{{ $d->latitude }}" data-long="{{ $d->longitude }}" data-status="{{ $d->health_status }}" data-img="{{ asset('storage/images/disease/' . $d->image) }}">
                                    <td>{{ $d -> disease_name }}</td>
                                    <td>{{ $d->health_status == '0' ? 'Sehat' : '' }}
                                        {{ $d->health_status == '1' ? 'Kurang Sehat' : '' }}
                                        {{ $d->health_status == '2' ? 'Terindikasi Sakit' : '' }}
                                    </td>   
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
                <div class="card-body row">
                <img id="card-image" src="{{ asset('storage/images/disease/gresik3-1.jpg') }}" alt="Selected Image">
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
    var map = L.map('map').setView([averageLat, averageLong], 20);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    var locations = @json($data); // Pass PHP variable to JavaScript

    var markers = [];
    var activeMarker = null;

    function getCustomIcon(status, size = [30, 47]) {
        var iconUrl;
        if (status == 0) {
            iconUrl = '{{asset("img/icons/marker/green-marker.png")}}';
        } else if (status == 1) {
            iconUrl = '{{asset("/img/icons/marker/orange-marker.png")}}';
        } else if (status == 2) {
            iconUrl = '{{asset("/img/icons/marker/red-marker.png")}}';
        }

        return L.icon({
            iconUrl: iconUrl,
            iconSize: size, // Ukuran gambar marker
            iconAnchor: [size[0] / 2, size[1]], // Posisi anchor marker
            popupAnchor: [0, -size[1]] // Posisi popup di atas marker
        });
    }

    locations.forEach(function(location) {
        var marker = L.marker([location.latitude, location.longitude], {icon: getCustomIcon(location.health_status), status: location.health_status}).addTo(map)
            .bindPopup('<b>' + location.disease_name + '</b><br>Latitude: ' + location.latitude + '<br>Longitude: ' + location.longitude);
        
            markers.push({marker: marker, status: location.status});

        marker.on('click', function() {
            if (activeMarker) {
                activeMarker.setIcon(getCustomIcon(activeMarker.options.status));
            }
            this.setIcon(getCustomIcon(location.health_status, [40, 63])); // Set to larger size when clicked
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
            var imageSrc = row.getAttribute('data-img');
            var imageCard = document.getElementById('image-card');
            var cardImage = document.getElementById('card-image');

            cardImage.src = imageSrc;
            imageCard.style.display = 'block';
        });
    });
</script>
@endsection