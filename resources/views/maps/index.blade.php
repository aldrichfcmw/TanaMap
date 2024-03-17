@extends('layouts.maps')
@section('content')
<div class="row">  
    <!-- Marker Circle & Polygon -->
    <div class="col-12">
      <div class="card mb-4">
        <h5 class="card-header">Marker Circle & Polygon</h5>
        <div class="card-body">
          <div class="leaflet-map" id="shapeMap"></div>
        </div>
      </div>
    </div>
    <!-- /Marker Circle & Polygon -->
  
    <!-- Draggable Marker With Popup -->
    <div class="col-12">
      <div class="card mb-4">
        <h5 class="card-header">Draggable Marker With Popup</h5>
        <div class="card-body">
          <div class="leaflet-map" id="dragMap"></div>
        </div>
      </div>
    </div>
    <!-- /Draggable Marker With Popup --> 
  
    <!-- GeoJson -->
    <div class="col-12">
      <div class="card mb-4">
        <h5 class="card-header">GeoJson</h5>
        <div class="card-body">
          <div class="leaflet-map" id="geoJson"></div>
        </div>
      </div>
    </div>
    <!-- /GeoJson -->
  
    <!-- Layer Control -->
    <div class="col-12">
      <div class="card">
        <h5 class="card-header">Layer Control</h5>
        <div class="card-body">
          <div class="leaflet-map" id="layerControl"></div>
        </div>
      </div>
    </div>
    <!-- /Layer Control -->
  </div>
@endsection