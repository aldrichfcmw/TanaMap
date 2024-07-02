@extends('layouts.farmer')
@section('content')
<div class="container-fluid flex-grow-1 container-p-y">
  <div class="row mb-3">
    <div class="col-md">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-temperature-three-quarters" style="font-size: 4em;"></i>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Suhu</h5>
              <p class="card-text">
                {{$data -> temp}}
              </p>            
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-droplet" style="font-size: 4em;"></i>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Kelembapan</h5>
              <p class="card-text">
                {{$data -> hum}}
              </p>            
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4 d-flex align-items-center justify-content-center">
            <i class="fa-solid fa-gauge" style="font-size: 4em;"></i>
        </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Tekanan</h5>
              <p class="card-text">
                {{$data -> press}}
              </p>            
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4 d-flex align-items-center justify-content-center">
            <i class="fa-solid fa-sun-plant-wilt" style="font-size: 4em;"></i>
        </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">UV</h5>
              <p class="card-text">
                {{$data -> uv}}
              </p>            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row mb-3">
    <div class="col-md">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-cloud-showers-heavy" style="font-size: 4em;"></i>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Curah Hujan</h5>
              <p class="card-text">
                {{$data -> rainfall}}
              </p>            
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4 d-flex align-items-center justify-content-center">
            <i class="fa-solid fa-location-arrow" style="font-size: 4em;"></i>
        </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Arah</h5>
              <p class="card-text">
                {{$data -> winddir}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4 d-flex align-items-center justify-content-center">
            <i class="fa-solid fa-arrow-up-right-dots" style="font-size: 4em;"></i>
        </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Kecepatan Angin</h5>
              <p class="card-text">
                {{$data -> windspeed}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4 d-flex align-items-center justify-content-center">
            <i class="fa-solid fa-map-location-dot" style="font-size: 4em;"></i>
        </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Koordinat</h5>
              <p class="card-text">
                {{$data -> latitude}}, {{$data -> longitude}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--/ Horizontal -->

  <div class="row">
      <div class="col">
          <div class="row">
              <div class="col-12 mb-3">
                  <div class="card">
                      <h5 class="card-header">Prediksi Cuaca Per Jam</h5>
                      <div class="card-datatable table-responsive">
                        <table class="dt-responsive table border-top">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Time</th>
                              <th>Cuaca</th>
                            </tr>
                          </thead>
                          <tbody class="table-border-bottom-0">
                            @foreach ($jam as $key => $d)
                            <tr>
                                <td>{{ $d -> weather_name }}</td>
                                <td>{{ $d -> time }}</td>
                                <td>{{ $d -> description }}</td>
                            </tr>
                            @endforeach 
                          </tbody>
                        </table>
                      </div>
                  </div>              
              </div>
              <div class="col-12">
                  <div class="card">
                      <h5 class="card-header">Prediksi Cuaca Per Hari</h5>
                      <div class="card-datatable table-responsive">
                        <table class="dt-responsive table border-top">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Time</th>
                              <th>Cuaca</th>
                            </tr>
                          </thead>
                          <tbody class="table-border-bottom-0">
                            @foreach ($hari as $key => $d)
                            <tr>
                                <td>{{ $d -> weather_name }}</td>
                                <td>{{ $d -> time }}</td>
                                <td>{{ $d -> description }}</td>
                            </tr>
                            @endforeach 
                          </tbody>
                        </table>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="col">
          <div class="card h-100">
              <h5 class="card-header">Maps</h5>
              <div class="card-body">
                <div class="leaflet-map h-md-100" id="map"></div>
              </div>
          </div>
      </div>
    
    
  </div>
</div>

<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
{{-- <script src="https://unpkg.com/leaflet.gridlayer.googlemutant/Leaflet.GoogleMutant.js"></script> --}}
<script>
    var locations = @json($data); // Pass PHP variable to JavaScript
    // console.log(locations.longitude)
    var map = L.map('map').setView([locations.latitude, locations.longitude], 14);

    // Layer jalan dari Google Maps
    var roadmapLayer = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        maxZoom: 19,
    });

    // Layer satelit dari Google Maps
    var satelliteLayer = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        maxZoom: 19,
    });

    // Tambahkan layer jalan ke peta sebagai default
    roadmapLayer.addTo(map);

    // Tambahkan kontrol layer untuk beralih antara layer jalan dan satelit
    var baseMaps = {
        "Roadmap": roadmapLayer,
        "Satellite": satelliteLayer
    };

    L.control.layers(baseMaps).addTo(map);

    function getCustomIcon(size = [30, 47]) {
        var iconUrl = '{{ asset("img/icons/marker/red-marker.png") }}';

        return L.icon({
            iconUrl: iconUrl,
            iconSize: size, // Size of the marker image
            iconAnchor: [size[0] / 2, size[1]], // Anchor position of the marker
            popupAnchor: [0, -size[1]] // Popup position above the marker
        });
    }

    var marker = L.marker([locations.latitude, locations.longitude], {icon: getCustomIcon()}).addTo(map)
      .bindPopup('<b>' + locations.weather_name + '</b><br>Latitude: ' + locations.latitude + '<br>Longitude: ' + locations.longitude);
        
    
</script>
@endsection

