@push('head')
<link rel="stylesheet" href="{{asset('/vendor/libs/datatables-bs5/datatables.bootstrap5.css')}}">
<link rel="stylesheet" href="{{asset('/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css')}}">
<link rel="stylesheet" href="{{asset('/vendor/libs/datatables-buttons-bs5/buttons.bootstrap5.css')}}">
<link rel="stylesheet" href="{{asset('/vendor/libs/sweetalert2/sweetalert2.css')}}" />
<link rel="stylesheet" href="{{asset('/vendor/libs/select2/select2.css')}}" />
<link rel="stylesheet" href="{{asset('/vendor/libs/@form-validation/form-validation.css')}}" />
   
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

            <form id="editUserForm" class="row g-3" action="{{route('user.update',['username'=> $data->username])}}" method="POST">
              @csrf
              @method('PUT')
              <div class="col-12">
                <label class="form-label" for="modalEditUserFirstName">Name</label>
                <input type="text" id="modalEditUserFirstName" name="modalEditUserFirstName" class="form-control" value="{{$data->name}}" />
              </div>
              <div class="col-12">
                <label class="form-label" for="modalEditUserName">Username</label>
                <input type="text" id="modalEditUserName" name="modalEditUserName" class="form-control" value="{{$data->username}}" />
              </div>
              <div class="col-12">
                <label class="form-label" for="modalEditUserEmail">Email</label>
                <input type="text" id="modalEditUserEmail" name="modalEditUserEmail" class="form-control" value="{{$data->email}}" />
              </div>

              
              <div class="col-12 text-end">
                <button type="submit" class="btn btn-primary me-sm-3 me-1">Edit</button>
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

  <!-- Vendors JS -->
  <script src="{{asset('/vendor/libs/moment/moment.js')}}"></script>
<script src="{{asset('/vendor/libs/datatables-bs5/datatables-bootstrap5.js')}}"></script>
<script src="{{asset('/vendor/libs/sweetalert2/sweetalert2.js')}}"></script>
<script src="{{asset('/vendor/libs/select2/select2.js')}}"></script>
<script src="{{asset('/vendor/libs/@form-validation/popular.js')}}"></script>
<script src="{{asset('/vendor/libs/@form-validation/bootstrap5.js')}}"></script>
<script src="{{asset('/vendor/libs/@form-validation/auto-focus.js')}}"></script>

@endsection