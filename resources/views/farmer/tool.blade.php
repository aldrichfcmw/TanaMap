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
                  <h5 class="card-title">Smart Irrigation</h5>
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
        <div class="col-4">
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
        </div>
    </div>
</div>

@endsection