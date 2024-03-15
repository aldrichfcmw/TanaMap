<!DOCTYPE html>
<html lang="en" class="dark-style layout-wide  customizer-hide" dir="ltr" data-theme="theme-default" data-assets-path="/" data-template="vertical-menu-template-dark">
  <head>
    @include('layouts.head')
    
    <!-- Core CSS -->
    <link rel="stylesheet" href="{{asset('vendor/css/rtl/core.css')}}" class="template-customizer-core-css" />
    <link rel="stylesheet" href="{{asset('vendor/css/rtl/theme-default.css')}}" class="template-customizer-theme-css" />
    
    <!-- Vendor -->
    <link rel="stylesheet" href="{{asset('vendor/libs/form-validation/form-validation.css')}}" />

    <!-- Page CSS -->
    <!-- Page -->
    <link rel="stylesheet" href="{{asset('vendor/css/pages/page-auth.css')}}">

    
</head>
<body>
  
    <!-- Content -->
  
  <div class="container-xxl">
    <div class="authentication-wrapper authentication-basic container-p-y">
      <div class="authentication-inner">
        <!-- Register -->
        <div class="card">
          <div class="card-body">
            <!-- Logo -->
            <div class="app-brand justify-content-center">
              <a href="{{url('/')}}" class="app-brand-link gap-2">
                <span class="app-brand-logo demo">
                  <img src="{{asset('img/favicons/logo.png')}}" alt="" srcset="">
                </span> 
              </a>
            </div>
            <!-- /Logo -->
            @yield('content')
          </div>
        </div>
        <!-- /Register -->
      </div>
    </div>
  </div>
  
  <!-- / Content -->
  
    <!-- endbuild -->
  
    <!-- Vendors JS -->
    <script src="{{asset('vendor/libs/form-validation/popular.js')}}"></script>
    <script src="{{asset('vendor/libs/form-validation/bootstrap5.js')}}"></script>
    <script src="{{asset('vendor/libs/form-validation/auto-focus.js')}}"></script>
  
    @include('layouts\foot')
  
    <!-- Page JS -->
    <script src="{{asset('js/pages-auth.js')}}"></script>
    
  </body>
  
  </html>