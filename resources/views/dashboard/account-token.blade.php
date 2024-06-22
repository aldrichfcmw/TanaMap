@push('head')
   
{{-- <link rel="stylesheet" href="{{asset('/vendor/css/pages/page-user-view.css')}}" /> --}}
@endpush
@extends('layouts.main')
@section('content')           
<h4 class="py-3 mb-4">
  <span class="text-muted fw-light">{{$title}} / {{$page}} /</span> {{$subpage}}
</h4>
<div class="row">
  <!-- User Sidebar -->
  <div class="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0">
    <!-- User Card -->
    <div class="card mb-4">
      <div class="card-body">
        <div class="user-avatar-section">
          <div class=" d-flex align-items-center flex-column">
            <img class="img-fluid rounded my-4" src="{{asset('/img/avatars/1.png')}}" height="110" width="110" alt="User avatar" />
            <div class="user-info text-center">
              <h4 class="mb-2">{{$data->name}}</h4>
              <span class="badge bg-label-secondary">{{$role}}</span>
            </div>
          </div>
        </div>

        <h5 class="pb-2 border-bottom mb-4">Details</h5>
        <div class="info-container">
          <ul class="list-unstyled">
            <li class="mb-3">
              <span class="fw-medium me-2">Username:</span>
              <span>{{$data->username}}</span>
            </li>
            <li class="mb-3">
              <span class="fw-medium me-2">Email:</span>
              <span>{{$data->email}}</span>
            </li>
            <li class="mb-3">
              <span class="fw-medium me-2">Role:</span>
              <span>{{$role}}</span>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
    <!-- /User Card -->
    
  </div>
  <!--/ User Sidebar -->


  <!-- User Content -->
  <div class="col-xl-8 col-lg-7 col-md-7 order-0 order-md-1">
    <!-- User Pills -->
    <ul class="nav nav-pills flex-column flex-md-row mb-3">
      <li class="nav-item"><a class="nav-link {{ $subpage == 'Account' ? 'active' : '' }}" href="{{route('account.view')}}"><i class="bx bx-user me-1"></i>Account</a></li>
      <li class="nav-item"><a class="nav-link {{ $subpage == 'Security' ? 'active' : '' }}" href="{{route('account.security')}}"><i class="bx bx-lock-alt me-1"></i>Security</a></li>
      <li class="nav-item"><a class="nav-link {{ $subpage == 'Token' ? 'active' : '' }}" href="{{route('account.token')}}"><i class="bx bx-key me-1"></i>Token</a></li>
    </ul>
    <!--/ User Pills -->

    <!-- Project table -->
    <div class="card mb-4">
      <h5 class="card-header">Edit User Information</h5>
      <div class="card-body">
        <form id="formChangeToken" method="POST"  action="{{route('account.tokenupdate')}}" class="fv-plugins-bootstrap5 fv-plugins-framework" novalidate="novalidate">
          @csrf
          @method('PUT')
          <div class="alert alert-warning" role="alert">
            <h6 class="alert-heading mb-1">Personal access tokens allow you to access your own data via the API.</h6>
            <span>Do not give out your personal access tokens to anybody who you don't want to access your data.</span>
             
          </div>
          <div class="row">
            <div class="mb-3 col-12 col-sm-12 form-password-toggle fv-plugins-icon-container">
              <label class="form-label" for="token">Token</label>
              <div class="input-group input-group-merge has-validation">
                <input class="form-control" type="password" name="token" id="token" placeholder="············" value="{{$data->token_api }}" readonly>
                <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
              </div>
            </div>
            <div>
              <button type="submit" class="btn btn-primary me-2">Generate New Token</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- /Project table -->

    
</div>

<!-- Modal -->
<!-- Edit User Modal -->
<div class="modal fade" id="editUser" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-simple modal-edit-user">
    <div class="modal-content p-3 p-md-5">
      <div class="modal-body">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        
      </div>
    </div>
  </div>
</div>
<!--/ Edit User Modal -->

          </div>
          <!-- / Content -->

  
 
  <!-- endbuild -->


@endsection