@extends('layouts.main')
@section('content')
<h4 class="py-3 mb-4">
  <span class="text-muted fw-light">{{$title}} / {{$page}} / </span> {{$subpage}}
</h4>
          <!-- Default -->
          <div class="row">
            <!-- Validation Wizard -->
            <div class="col-xl-3 col-lg-4 col-md-5 order-1 order-md-0">
              <!-- User Card -->
              <div class="card mb-4">
                <div class="card-body">
                  <div class="user-avatar-section">
                    <div class=" d-flex align-items-center flex-column">
                      <img class="img-fluid rounded my-4" src="{{ asset('storage/images/tool/' . $data->image) }}" height="110" width="110" alt="User avatar">
                      <div class="user-info text-center">
                        <h6 class="mb-2">{{$data->image}}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /User Card -->
              
            </div>
            <div class="col-xl-9 col-lg-8 col-md-7 order-0 order-md-1">
              <div class="card">
                {{-- <h5 class="card-header">Bootstrap Validation</h5> --}}
                <div class="card-body">
                  <form class="" novalidate="" action="{{route('data.update',['type'=>'tool','uname'=> $data->tool_name])}}" method="POST">
                    @csrf
                    @method('PUT')
                    <div class="row">
                      <div class="mb-3 col-12">
                        <label class="form-label" for="">Name</label>
                        <input type="text" class="form-control" name="tool_name" id="tool_name" placeholder="Name" value="{{$data->tool_name}}" >
                      </div>
                      <div class="mb-3 col-12 col-md-6">
                        <label class="form-label" for="">Latitude</label>
                        <input type="text" class="form-control" name="latitude" id="latitude" placeholder="Latitude" value="{{$data->latitude}}" >
                      </div>
                      <div class="mb-3 col-12 col-md-6">
                        <label class="form-label" for="">Longitude</label>
                        <input type="text" id="longitude" name="longitude" class="form-control" placeholder="Longitude" value="{{$data->longitude}}">
                      </div>
                      <div class="mb-3 col-12 col-md-6">
                        <label class="form-label" for="">Land Area</label>
                        <input type="text" id="land_area" name="land_area" class="form-control" placeholder="Land Area" value="{{$data->land_area}}">
                      </div>
                      <div class="mb-3 col-12 col-md-6">
                        <label class="form-label" for="">Terdapat Sungai?</label>
                        <select class="custom-select form-control" name="status" id="status" required>
                              <option value="0" {{ $data->status == 0 ? 'selected' : '' }}>Tidak Ada</option>
                              <option value="1" {{ $data->status == 1 ? 'selected' : '' }}>Ada</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <label for="formFile" class="form-label">Image File</label>
                        <input class="form-control" type="file" id="image_file" name="image_file" accept="image/*">
                        <input type="text" hidden name="image" id="image" value="{{$data->image}}">
                      </div>
                      <div div class="row">
                        <div class="col-12">
                          <button type="submit" class="btn btn-primary">Submit</button>
                          <a href="{{route('tool')}}" class="btn btn-warning">Cancel</a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <!-- /Validation Wizard -->

          </div>
@endsection
