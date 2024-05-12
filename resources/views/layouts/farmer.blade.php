<!DOCTYPE html>
<html lang="en" class="light-style layout-wide customizer-hide" dir="ltr" data-theme="theme-default" data-assets-path="/" data-template="vertical-menu-template-light">
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
    <div class="layout-wrapper layout-content-navbar  ">
        <div class="layout-container">
            <!-- Layout container -->
            <div class="layout-page">
                <div class="mt-3">
                    @include('layouts.navbar')
                </div>
                <!-- Content wrapper -->
                <div class="content-wrapper">
                    <!-- Content -->
                    @yield('content')
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
    @include('layouts.foot')
    @include('layouts.toast')
    <script src="{{asset('/vendor/libs/leaflet/leaflet.js')}}"></script>
    <script src="{{asset('/js/maps-leaflet.js')}}"></script>
  </body>