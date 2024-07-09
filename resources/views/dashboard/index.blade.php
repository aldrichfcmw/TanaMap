@extends('layouts.main')
@push('head')
<meta http-equiv="refresh" content="15">    
@endpush
@section('content')
<h4 class="py-3 mb-4">
    <span class="text-muted fw-light">{{$title}} / </span> {{$page}}
</h4>
<div class="row">
    <div class="col-6 mb-3">
        <div class="card">
            <h5 class="card-header">Disease Table</h5>
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
                            @foreach ($dataDisease as $key => $d)
                            <tr>
                                <td>{{ $d -> disease_name }}</td>
                                <td>{{ $d->health_status == '0' ? 'Sehat' : '' }}
                                    {{ $d->health_status == '1' ? 'Terindikasi Hama/Penyakit' : '' }}
                                    {{-- {{ $d->health_status == '2' ? 'Terindikasi Sakit' : '' }} --}}
                                </td>  
                                <td class="text-center">
                                    <a class="text-dark" href="https://www.google.com/maps?q={{ $d -> latitude }},{{ $d -> longitude }}"><i class="bx bx-link-external me-1"></i></a>                  
                                </td>
                            </tr>
                            @endforeach  
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="col-6 mb-3">
        <div class="card">
            <h5 class="card-header">Growth Table</h5>
            <div class="table-responsive text-nowrap">
                <table class="table">
                    <thead>
                    <tr>
                        <th>Lokasi</th>
                        <th>Koordinat</th>
                        <th>Hasil Bagan</th>
                    </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                        @foreach ($dataGrowth as $key => $d)
                        <tr>
                            <td>{{ $d -> growth_name }}</td>
                            <td>{{ $d -> latitude }}, {{ $d -> longitude }}</td>
                            <td>{{ $d -> color }}</td>
                        </tr>
                        @endforeach 
                    </tbody>
                </table>
                </div>
        </div>
    </div>
    <div class="col-6 mb-3">
        <div class="card">
            <h5 class="card-header">Tool Table</h5>
            <div class="table-responsive text-nowrap">
                <table class="table">
                    <thead>
                    <tr>
                      <th>No.</th>
                      <th>Name</th>
                      <th>Location</th>
                      <th>Land Area (<span style = "text-transform: lowercase">m</span><sup>2</sup>)</th>
                      <th>Action</th>
                    </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                        @foreach ($dataTool as $key => $d)
                        <tr class="location-row" data-name="{{ $d -> tool_name }}" data-area="{{ $d -> land_area }}" data-lat="{{ $d->latitude }}" data-long="{{ $d->longitude }}" data-img="{{ asset('storage/images/tool/' . $d->image) }}">
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
    <div class="col-6 mb-3">
        <div class="card">
            <h5 class="card-header">Prediction Table</h5>
            <div class="table-responsive text-nowrap">
                <table class="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Time</th>
                      <th>Cuaca</th>
                    </tr>
                  </thead>
                  <tbody class="table-border-bottom-0">
                    @foreach ($dataWeather as $key => $d)
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
@endsection