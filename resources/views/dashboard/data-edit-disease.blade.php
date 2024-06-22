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
                      <img class="img-fluid rounded my-4" src="{{ asset('storage/images/disease/' . $data->image) }}" height="110" width="110" alt="User avatar">
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
                  <form class="" novalidate="" action="{{route('data.update',['type'=>'disease','uname'=> $data->disease_name])}}" method="POST">
                    @csrf
                    @method('PUT')
                    <div class="row">
                      <div class="mb-3 col-12">
                        <label class="form-label" for="">Name</label>
                        <input type="text" class="form-control" name="disease_name" id="disease_name" placeholder="Name" value="{{$data->disease_name}}" >
                      </div>
                      <div class="mb-3 col-12 col-md-6">
                        <label class="form-label" for="">Latitude</label>
                        <input type="text" class="form-control" name="latitude" id="latitude" placeholder="Latitude" value="{{$data->latitude}}" >
                      </div>
                      <div class="mb-3 col-12 col-md-6">
                        <label class="form-label" for="">Longitude</label>
                        <input type="text" id="longitude" name="longitude" class="form-control" placeholder="Longitude" value="{{$data->longitude}}">
                      </div>
                      <div class="mb-3 col-12 col-md-3">
                        <label class="form-label" for="">Healthly Area</label>
                        <input type="text" id="healthy_area" name="healthy_area" class="form-control" placeholder="Healthy Area" value="{{$data->healthy_area}}">
                      </div>
                      <div class="mb-3 col-12 col-md-3">
                        <label class="form-label" for="">Total Area</label>
                        <input type="text" id="total_area" name="total_area" class="form-control" placeholder="Total Area" value="{{$data->total_area}}">
                      </div>
                      <div class="mb-3 col-12 col-md-3">
                        <label class="form-label" for="">Healthly Percentage</label>
                        <input type="text" id="healthy_percentage" name="healthy_percentage" class="form-control" placeholder="Healthy Percentage" value="{{$data->healthy_percentage}}">
                      </div>
                      <div class="mb-3 col-12 col-md-3">
                        <label class="form-label" for="">Healthly Status</label>
                        <input type="text" id="health_status" name="health_status" class="form-control" placeholder="Health Status" value="{{$data->health_status}}">
                      </div>
                      <div class="mb-3">
                        <label for="formFile" class="form-label">Image File</label>
                        <input class="form-control" type="file" id="image_file" name="image_file" accept="image/*">
                        <input type="text" hidden name="image" id="image" value="{{$data->image}}">
                      </div>
                      <div div class="row">
                        <div class="col-12">
                          <button type="submit" class="btn btn-primary">Submit</button>
                          <a href="{{route('disease')}}" class="btn btn-warning">Cancel</a>
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
