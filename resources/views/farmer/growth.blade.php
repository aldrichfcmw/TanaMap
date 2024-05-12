@extends('layouts.farmer')
@section('content')
<div class="container-fluid flex-grow-1 container-p-y">
    <div class="row h-md-100">
        <div class="col-12 col-lg-4 mb-3">
            <div class="card">
                <h5 class="card-header">Table Disease</h5>
                <div class="table-responsive text-nowrap">
                <table class="table">
                    <thead>
                    <tr>
                        <th>Lokasi</th>
                        <th>Koordinat</th>
                        <th>Hasil Bagan</th>
                        <th>Umur</th>
                    </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                    <tr>
                        <td>SDA</td>
                        <td>-7.090, 112.000</td>
                        <td>3</td>
                        <td>5 MST</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-8 mb-3">
            <div class="card h-md-100">
              <h5 class="card-header">Layer Control</h5>
              <div class="card-body">
                <div class="leaflet-map h-md-100" id="layerControl"></div>
              </div>
            </div>
          </div>
    </div>
</div>   
@endsection
