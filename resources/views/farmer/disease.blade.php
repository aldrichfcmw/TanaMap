@push('head')
<link rel="stylesheet" href="{{asset('/vendor/libs/datatables-bs5/datatables.bootstrap5')}}">
<link rel="stylesheet" href="{{asset('/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5')}}">
{{-- <link rel="stylesheet" href="{{assets('/vendor/libs/datatables-select-bs5/select.bootstrap5')}}">
<link rel="stylesheet" href="{{assets('/vendor/libs/datatables-checkboxes-jquery/datatables.checkboxes')}}">
<link rel="stylesheet" href="{{assets('/vendor/libs/datatables-fixedcolumns-bs5/fixedcolumns.bootstrap5')}}">
<link rel="stylesheet" href="{{assets('/vendor/libs/datatables-fixedheader-bs5/fixedheader.bootstrap5')}}"> --}}
@endpush
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
                        <th>ID</th>
                        <th>Location</th>
                        <th>Create At</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                    <tr>
                        <td>GSK-001</td>
                        <td>Gresik</td>
                        <td>7 Hours Ago</td>
                        <td class="text-center">
                            <a class="text-dark" href="javascript:void(0);"><i class="bx bx-link-external me-1"></i></a>                  
                        </td>
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
<script src="{{asset('/vendor/libs/datatables-bs5/datatables-bootstrap5.js')}}"></script>
<script src="{{asset('/js/tables-datatables-extensions.js')}}"></script>
@endsection
