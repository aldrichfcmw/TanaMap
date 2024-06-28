@extends('layouts.main')
@section('content')
<h4 class="py-3 mb-4">
  <span class="text-muted fw-light">{{$title}} / {{$page}} /  </span> {{$subpage}} 
</h4>
<div class="row">
  <div class="col-12">
    <div class="card">
      <h5 class="card-header">Weather Table</h5>
      <div class="table-responsive text-nowrap">
        @if ($subpage == "Data")
            
        <table class="table">
          <thead class="table-light">
            <tr>
              <th>No.</th>
              <th>ID</th>
              <th>Temp</th>
              <th>Hum</th>
              <th>Press</th>
              <th>UV</th>
              <th>Rainfall</th>
              <th>Wind Speed</th>
              <th>Wind Dir</th>
              <th>Location</th> 
              <th>Date Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody class="table-border-bottom-0">
              @foreach ($data as $key => $d)
                <tr>
                  <td>{{ $key+1 }}</td>
                  <td>{{ $d -> weather_name }}</td>
                  <td>{{ $d -> temp }}</td>
                  <td>{{ $d -> hum }}</td>
                  <td>{{ $d -> press }}</td>
                  <td>{{ $d -> uv }}</td>
                  <td>{{ $d -> rainfall }}</td>
                  <td>{{ $d -> windspeed }}</td>
                  <td>{{ $d -> winddir }}</td>
                  <td>{{ $d -> latitude }}, {{ $d -> longitude }}</td>
                  <td>{{ $d -> time }}</td>
                  <td>
                      <div class="dropdown">
                        <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></button>
                        <div class="dropdown-menu">
                          <button class="dropdown-item" onclick="confirmDelete('{{ $d->id }}','{{ $d->weather_name }}')"><i class="bx bx-trash me-1"></i> Delete</button> 
                        </div>
                      </div>
                      
                      <!-- Modal -->
                       <div class="modal fade" id="deleteModal-{{ $d->id }}" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="modalCenterTitle">Konfirmasi Penghapusan</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <h5>Apakah Anda yakin ingin menghapus data <span id="user">{{ $d->weather_name }}</span>?</h5>
                            </div>
                            <div class="modal-footer">
                              <form action="{{route('data.delete',['type'=>'weather data','uname'=> $d->weather_name])}}" method="post">
                                @csrf
                                @method('DELETE')
                                <button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal">Batal</button>
                                <button type="submit" class="btn btn-warning">Ya, Hapus</button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div> 

                  </td>
                </tr>
              @endforeach          
          </tbody>
        </table>

        @endif
        @if ($subpage == "Prediction")
            
        <table class="table">
          <thead class="table-light">
            <tr>
              <th>No.</th>
              <th>ID</th>
              <th>Type</th>
              <th>Date Time</th>
              <th>Description</th> 
              <th>Actions</th>
            </tr>
          </thead>
          <tbody class="table-border-bottom-0">
              @foreach ($data as $key => $d)
                <tr>
                  <td>{{ $key+1 }}</td>
                  <td>{{ $d -> weather_name }}</td>
                  <td>{{ $d -> type }}</td>
                  <td>{{ $d -> time }}</td>
                  <td>{{ $d -> description }}</td>
                  <td>
                      <div class="dropdown">
                        <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></button>
                        <div class="dropdown-menu">
                          <button class="dropdown-item" onclick="confirmDelete('{{ $d->id }}','{{ $d->weather_name }}')"><i class="bx bx-trash me-1"></i> Delete</button> 
                        </div>
                      </div>
                      
                      <!-- Modal -->
                       <div class="modal fade" id="deleteModal-{{ $d->id }}" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="modalCenterTitle">Konfirmasi Penghapusan</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <h5>Apakah Anda yakin ingin menghapus data <span id="user">{{ $d->weather_name }}</span>?</h5>
                            </div>
                            <div class="modal-footer">
                              <form action="{{route('data.delete',['type'=>'weather','uname'=> $d->weather_name])}}" method="post">
                                @csrf
                                @method('DELETE')
                                <button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal">Batal</button>
                                <button type="submit" class="btn btn-warning">Ya, Hapus</button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div> 

                  </td>
                </tr>
              @endforeach          
          </tbody>
        </table>

        @endif
      </div>
    </div>
  </div>
</div>
<script>
  function confirmDelete(userId,userName) {
      $('#deleteModal-'+userId).modal('show');
  }
</script>

@endsection