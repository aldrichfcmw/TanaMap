@extends('layouts-farmer.maps')
@section('content')
<div class="row h-md-100">
  <div class="col-12 col-lg-3 mb-3">
    <div class="card">
      <h5 class="card-header">Table Basic</h5>
      <div class="table-responsive text-nowrap">
        <table class="table">
          <thead>
            <tr>
              <th>Hama Penyakit Tanaman</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody class="table-border-bottom-0">
            <tr>
              <td><i class="fa-solid fa-location-dot me-3"></i><span class="fw-medium">HPT 1</span></td>
              <td class="text-center">
                    <a class="text-dark" href="javascript:void(0);"><i class="bx bx-link-external me-1"></i></a>                  
              </td>
            </tr>
            <tr>
              <td><i class="fa-solid fa-location-dot me-3"></i><span class="fw-medium">HPT 2</span></td>
              <td class="text-center">
                    <a class="text-dark" href="javascript:void(0);"><i class="bx bx-link-external me-1"></i></a>                  
              </td>
            </tr>
            <tr>
              <td><i class="fa-solid fa-location-dot me-3"></i><span class="fw-medium">HPT 3</span></td>
              <td class="text-center">
                    <a class="text-dark" href="javascript:void(0);"><i class="bx bx-link-external me-1"></i></a>                  
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="col-12 col-lg-9 mb-3">
    <div class="card h-md-100">
      <h5 class="card-header">Layer Control</h5>
      <div class="card-body">
        <div class="leaflet-map h-md-100" id="layerControl"></div>
      </div>
    </div>
  </div>
</div>
@endsection