<!DOCTYPE html>
<html lang="en" class="light-style layout-navbar-fixed layout-menu-fixed layout-compact " dir="ltr" data-theme="theme-default" data-assets-path="/" data-template="vertical-menu-template-dark">

  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

    <title>Leaflet - Maps | Sneat - Bootstrap 5 HTML Admin Template - Pro</title>

    
    <meta name="description" content="Most Powerful &amp; Comprehensive Bootstrap 5 HTML Admin Dashboard Template built for developers!" />
    <meta name="keywords" content="dashboard, bootstrap 5 dashboard, bootstrap 5 design, bootstrap 5">
    <!-- Canonical SEO -->
    <link rel="canonical" href="https://themeselection.com/item/sneat-bootstrap-html-admin-template/">
    
    

    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="{{asset('/img/favicon/favicon.ico')}}" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">

    <!-- Icons -->
    <link rel="stylesheet" href="{{asset('/vendor/fonts/boxicons.css')}}" />
    <link rel="stylesheet" href="{{asset('/vendor/fonts/fontawesome.css')}}" />
    <link rel="stylesheet" href="{{asset('/vendor/fonts/flag-icons.css')}}" />

    <!-- Core CSS -->
    <link rel="stylesheet" href="{{asset('/vendor/css/rtl/core-dark.css')}}" class="template-customizer-core-css" />
    <link rel="stylesheet" href="{{asset('/vendor/css/rtl/theme-default-dark.css')}}" class="template-customizer-theme-css" />
    <link rel="stylesheet" href="{{asset('/css/demo.css')}}" />
    
    <!-- Vendors CSS -->
    <link rel="stylesheet" href="{{asset('/vendor/libs/perfect-scrollbar/perfect-scrollbar.css')}}" />
    <link rel="stylesheet" href="{{asset('/vendor/libs/typeahead-js/typeahead.css')}}" /> 
    <link rel="stylesheet" href="{{asset('/vendor/libs/leaflet/leaflet.css')}}" />

    <!-- Page CSS -->
    

    <!-- Helpers -->
    <script src="{{asset('/vendor/js/helpers.js')}}"></script>
    <!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js')}} in the <head> section -->
    <!--? Template customizer: To hide customizer set displayCustomizer value false in config.js')}}.  -->
    <script src="{{asset('/vendor/js/template-customizer.js')}}"></script>
    <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  -->
    <script src="{{asset('/js/config.js')}}"></script>
    
</head>

<body>
  
  <!-- Layout wrapper -->
<div class="layout-wrapper layout-content-navbar  ">
  <div class="layout-container">

    
{{-- aside --}}

    

    <!-- Layout container -->
    <div class="layout-page">
      
      



<!-- Navbar -->


      

      <!-- Content wrapper -->
      <div class="content-wrapper">

        <!-- Content -->
        
          <div class="container-xxl flex-grow-1 container-p-y">
            
            
<h4 class="py-3 mb-4">
  <span class="text-muted fw-light">Maps /</span> Leaflet
</h4>

<div class="row">
  <!-- Basic -->
  <div class="col-12">
    <div class="card mb-4">
      <h5 class="card-header">Basic Map</h5>
      <div class="card-body">
        <div class="leaflet-map" id="basicMap"></div>
      </div>
    </div>
  </div>
  <!-- /Basic -->

  <!-- Marker Circle & Polygon -->
  <div class="col-12">
    <div class="card mb-4">
      <h5 class="card-header">Marker Circle & Polygon</h5>
      <div class="card-body">
        <div class="leaflet-map" id="shapeMap"></div>
      </div>
    </div>
  </div>
  <!-- /Marker Circle & Polygon -->

  <!-- Draggable Marker With Popup -->
  <div class="col-12">
    <div class="card mb-4">
      <h5 class="card-header">Draggable Marker With Popup</h5>
      <div class="card-body">
        <div class="leaflet-map" id="dragMap"></div>
      </div>
    </div>
  </div>
  <!-- /Draggable Marker With Popup -->

  <!-- User Location -->
  <div class="col-12">
    <div class="card mb-4">
      <h5 class="card-header">User Location</h5>
      <div class="card-body">
        <div class="leaflet-map" id="userLocation"></div>
      </div>
    </div>
  </div>
  <!-- /User Location -->

  <!-- Custom Icons -->
  <div class="col-12">
    <div class="card mb-4">
      <h5 class="card-header">Custom Icons</h5>
      <div class="card-body">
        <div class="leaflet-map" id="customIcons"></div>
      </div>
    </div>
  </div>
  <!-- /Custom Icons -->

  <!-- GeoJson -->
  <div class="col-12">
    <div class="card mb-4">
      <h5 class="card-header">GeoJson</h5>
      <div class="card-body">
        <div class="leaflet-map" id="geoJson"></div>
      </div>
    </div>
  </div>
  <!-- /GeoJson -->

  <!-- Layer Control -->
  <div class="col-12">
    <div class="card">
      <h5 class="card-header">Layer Control</h5>
      <div class="card-body">
        <div class="leaflet-map" id="layerControl"></div>
      </div>
    </div>
  </div>
  <!-- /Layer Control -->
</div>

          </div>
          <!-- / Content -->

          
          

<!-- Footer -->
<footer class="content-footer footer bg-footer-theme">
  <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
    <div class="mb-2 mb-md-0">
      © <script>
      document.write(new Date().getFullYear())

      </script>, made with ❤️ by <a href="https://themeselection.com" target="_blank" class="footer-link fw-medium">ThemeSelection</a>
    </div>
    <div class="d-none d-lg-inline-block">
      
      <a href="https://themeselection.com/license/" class="footer-link me-4" target="_blank">License</a>
      <a href="https://themeselection.com/" target="_blank" class="footer-link me-4">More Themes</a>
      
      <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/documentation/" target="_blank" class="footer-link me-4">Documentation</a>
      
      
      <a href="https://themeselection.com/support/" target="_blank" class="footer-link d-none d-sm-inline-block">Support</a>
      
    </div>
  </div>
</footer>
<!-- / Footer -->

          
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

  
  <div class="buy-now">
    <a href="https://themeselection.com/item/sneat-bootstrap-html-admin-template/" target="_blank" class="btn btn-danger btn-buy-now">Buy Now</a>
  </div>
  

  

  <!-- Core JS -->
  <!-- build:js assets/vendor/js/core.js')}} -->
  
  <script src="{{asset('/vendor/libs/jquery/jquery.js')}}"></script>
  <script src="{{asset('/vendor/libs/popper/popper.js')}}"></script>
  <script src="{{asset('/vendor/js/bootstrap.js')}}"></script>
  <script src="{{asset('/vendor/libs/perfect-scrollbar/perfect-scrollbar.js')}}"></script>
  <script src="{{asset('/vendor/libs/hammer/hammer.js')}}"></script>
  <script src="{{asset('/vendor/libs/i18n/i18n.js')}}"></script>
  <script src="{{asset('/vendor/libs/typeahead-js/typeahead.js')}}"></script>
  <script src="{{asset('/vendor/js/menu.js')}}"></script>
  
  <!-- endbuild -->

  <!-- Vendors JS -->
  <script src="{{asset('/vendor/libs/leaflet/leaflet.js')}}"></script>

  <!-- Main JS -->
  <script src="{{asset('/js/main.js')}}"></script>
  

  <!-- Page JS -->
  <script src="{{asset('/js/maps-leaflet.js')}}"></script>
  
</body>

</html>

<!-- beautify ignore:end -->

