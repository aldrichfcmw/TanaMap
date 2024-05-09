<!DOCTYPE html>
<html lang="en" class="light-style layout-navbar-fixed layout-wide customizer-hide layout-menu-100vh layout-menu-collapsed" dir="ltr" data-theme="theme-default" data-assets-path="/" data-template="vertical-menu-template-light">

<head>
    @include('layouts.head')
    <link rel="stylesheet" href="{{asset('/vendor/libs/leaflet/leaflet.css')}}" />
    <style>
        @media (min-width: 960px) {
          .h-md-100 {
            height: 100%;
          }
        }
      </style>
</head>
<body>
    <!-- Layout wrapper -->
    <div class="layout-wrapper layout-content-navbar  ">
        <div class="layout-container">
            @include('layouts-farmer.menu')
            <!-- Layout container -->
            <div class="layout-page">
                @include('layouts-farmer.navbar')
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
    </div>
    <!-- / Layout wrapper -->

    <!-- Vendors JS -->
    <script src="{{asset('/vendor/libs/leaflet/leaflet.js')}}"></script>
    @include('layouts.foot')
  
    <!-- Page JS -->
    <script src="{{asset('/js/maps-leaflet.js')}}"></script>
       
</body>

</html>

