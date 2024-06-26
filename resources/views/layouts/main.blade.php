<!DOCTYPE html>
<html lang="en" class="light-style layout-navbar-fixed layout-menu-fixed layout-compact customizer-hide" dir="ltr" data-theme="theme-default" data-assets-path="/" data-template="vertical-menu-template-light">
<head>
    @include('layouts.head')
    @stack('head')
    {{-- @yield('head') --}}
    {{-- <link rel="stylesheet" href="{{asset('/vendor/libs/apex-charts/apex-charts.css')}}" /> --}}
    {{-- <link rel="stylesheet" href="{{asset('/vendor/libs/bs-stepper/bs-stepper.css')}}" /> --}}
</head>
<body>
    <!-- Layout wrapper -->
    <div class="layout-wrapper layout-content-navbar  ">
        <div class="layout-container">
            @include('layouts.aside')
            <!-- Layout container -->
            <div class="layout-page">
                @include('layouts.navbar')
                <!-- Content wrapper -->
                <div class="content-wrapper">
                    <!-- Content -->
                    <div class="container-xxl flex-grow-1 container-p-y">
                        {{-- <h4 class="py-3 mb-4">
                            <span class="text-muted fw-light">{{$title}}/</span> {{$page}}
                        </h4> --}}
                        @yield('content')
                    </div>
                    <!-- / Content -->
                    @include('layouts.footer')
                    <div class="content-backdrop fade"></div>
                </div>
                <!-- Content wrapper -->
            </div>
            <!-- / Layout page -->
        </div>
        <!-- Overlay -->
        <div class="layout-overlay layout-menu-toggle"></div>
        <!-- Drag Target Area To SlideIn Menu On Small Screens -->
        <div class="drag-target"></div>
    </div>
    <!-- / Layout wrapper -->

    <!-- Vendors JS -->
    {{-- <script src="{{asset('/vendor/libs/apex-charts/apexcharts.js')}}"></script>
    <script src="{{asset('/vendor/libs/bs-stepper/bs-stepper.js')}}"></script> --}}

    @include('layouts.foot')
  
    <!-- Page JS -->
    <script src="{{asset('/js/dashboards-crm.js')}}"></script>
    
    @include('layouts.toast') 
</body>

</html>

