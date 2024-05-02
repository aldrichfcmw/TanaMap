@extends('layouts.main')
@section('content')

<!-- Horizontal -->
<div class="row mb-3">
  <div class="col-md">
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4 d-flex align-items-center justify-content-center">
            <i class="bx bx-wind" style="font-size: 5em;"></i>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Suhu</h5>
            <p class="card-text">
              32
            </p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md">
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4 d-flex align-items-center justify-content-center">
          <i class="bx bx-wind" style="font-size: 5em;"></i>
      </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Kelembapan</h5>
            <p class="card-text">
              22
            </p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md">
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4 d-flex align-items-center justify-content-center">
          <i class="bx bx-wind" style="font-size: 5em;"></i>
      </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Tekanan</h5>
            <p class="card-text">
              22
            </p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md">
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4 d-flex align-items-center justify-content-center">
          <i class="bx bx-wind" style="font-size: 5em;"></i>
      </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">UV</h5>
            <p class="card-text">
              22
            </p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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
            <i class="bx bx-wind" style="font-size: 5em;"></i>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Curah Hujan</h5>
            <p class="card-text">
              32
            </p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md">
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4 d-flex align-items-center justify-content-center">
          <i class="bx bx-wind" style="font-size: 5em;"></i>
      </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Arah</h5>
            <p class="card-text">
              22
            </p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md">
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4 d-flex align-items-center justify-content-center">
          <i class="bx bx-wind" style="font-size: 5em;"></i>
      </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Kecepatan Angin</h5>
            <p class="card-text">
              22
            </p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</div>
<!--/ Horizontal -->

<div class="row">
  <div class="col-md">
    <div class="card">
      <h5 class="card-header">Prediksi Cuaca</h5>
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

  <div class="col-md">
    <div class="card">
      <h5 class="card-header">Prediksi Curah Hujan</h5>
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



@endsection