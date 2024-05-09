@extends('layouts-farmer.maps')
@section('content')

<!-- Horizontal -->
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
              32
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
              22
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
              22
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
              22
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
              32
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
              22
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
              22
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
              -7.090, 112.000
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
                    <div class="table-responsive text-nowrap">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>Hari</th>
                            <th>Cuaca</th>
                          </tr>
                        </thead>
                        <tbody class="table-border-bottom-0">
                          <tr>
                            <td> <strong>besok</strong></td>
                            <td>hujan</td>
                          </tr>
                          <tr>
                            <td> <strong>besok</strong></td>
                            <td>hujan</td>
                          </tr>
                          <tr>
                            <td> <strong>besok</strong></td>
                            <td>hujan</td>
                          </tr>
                          <tr>
                            <td> <strong>besok</strong></td>
                            <td>hujan</td>
                          </tr>
                          <tr>
                            <td> <strong>besok</strong></td>
                            <td>hujan</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                </div>              
            </div>
            <div class="col-12">
                <div class="card">
                    <h5 class="card-header">Prediksi Cuaca Per Hari</h5>
                    <div class="table-responsive text-nowrap">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>Hari</th>
                            <th>Cuaca</th>
                          </tr>
                        </thead>
                        <tbody class="table-border-bottom-0">
                          <tr>
                            <td> <strong>besok</strong></td>
                            <td>hujan</td>
                          </tr>
                          <tr>
                            <td> <strong>besok</strong></td>
                            <td>hujan</td>
                          </tr>
                          <tr>
                            <td> <strong>besok</strong></td>
                            <td>hujan</td>
                          </tr>
                          <tr>
                            <td> <strong>besok</strong></td>
                            <td>hujan</td>
                          </tr>
                          <tr>
                            <td> <strong>besok</strong></td>
                            <td>hujan</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card">
            <h5 class="card-header">Maps</h5>
            <div class="card-body">
              <div class="leaflet-map " id="layerControl"></div>
            </div>
        </div>
    </div>
  
  
</div>



@endsection