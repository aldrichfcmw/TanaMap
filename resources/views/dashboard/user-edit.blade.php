@extends('layouts.main')
@section('content')
          <!-- Default -->
          <div class="row">
            <!-- Validation Wizard -->
            <div class="col-12">
              <div class="card">
                {{-- <h5 class="card-header">Bootstrap Validation</h5> --}}
                <div class="card-body">
                  <form class="needs-validation" novalidate="" action="{{route('user.update',['username'=> $data->username])}}" method="POST">
                    @csrf
                    @method('PUT')
                    <div class="mb-3">
                      <label class="form-label" for="bs-validation-name">Name</label>
                      <input type="text" class="form-control" name="name" id="bs-validation-name" placeholder="Name" value="{{$data->name}}" >
                    </div>
                    <div class="mb-3">
                      <label class="form-label" for="bs-validation-email">usernae</label>
                      <input type="text" id="bs-validation" name="username" class="form-control" placeholder="Username" value="{{$data->username}}" aria-label="john.doe">
                    </div>
                    <div class="mb-3">
                      <label class="form-label" for="bs-validation-email">Email</label>
                      <input type="email" id="bs-validation-email" name="email" class="form-control" placeholder="email"  value="{{$data->email}}" aria-label="john.doe" required="">
                    </div>
                    <div class="mb-3 form-password-toggle">
                      <label class="form-label" for="bs-validation-password">Password</label>
                      <div class="input-group input-group-merge">
                        <input type="password" id="bs-validation-password" class="form-control" placeholder="············"  name="password" >
                        <span class="input-group-text cursor-pointer" id="basic-default-password4"><i class="bx bx-hide"></i></span>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label" for="bs-validation-select">Select Role</label>
                      <select class="custom-select form-control" name="role" id="role" required>
                        @foreach($roles as $role)
                            <option value="{{ $role->name }}" {{ $data->roles->pluck('name')->contains($role->name) ? 'selected' : '' }}>{{ $role->name }}</option>
                        @endforeach
                      </select>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <button type="submit" class="btn btn-primary">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <!-- /Validation Wizard -->

          </div>
@endsection
