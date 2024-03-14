<!DOCTYPE html>
<html lang="en" class="light-style layout-navbar-fixed layout-menu-fixed layout-compact " dir="ltr" data-theme="theme-default" data-assets-path="/" data-template="vertical-menu-template-light">

<head>
    @include('layouts.head')
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
    
    <!-- Core JS -->
    <!-- build:js assets/vendor/js/core.js -->
  
    <script src="{{asset('/vendor/jquery/jquery.js')}}"></script>
    <script src="{{asset('/vendor/popper/popper.js')}}"></script>
    <script src="{{asset('/vendor/bootstrap/bootstrap.js')}}"></script>
    <script src="{{asset('/vendor/perfect-scrollbar/perfect-scrollbar.js')}}"></script>
    {{-- <script src="{{asset('/vendor/hammer/hammer.js')}}"></script> --}}
    <script src="{{asset('/vendor/i18n/i18n.js')}}"></script> 
    <script src="{{asset('/vendor/typeahead-js/typeahead.js')}}"></script>
    <script src="{{asset('/vendor/js/menu.js')}}"></script>
  
    <!-- endbuild -->

    <!-- Vendors JS -->
    <script src="{{asset('/vendor/apex-charts/apexcharts.js')}}"></script>

    <!-- Main JS -->
    <script src="{{asset('/js/main.js')}}"></script>
  
    <!-- Page JS -->
    <script src="{{asset('/vendor/js/dashboards-crm.js')}}"></script>
  
</body>

</html>

