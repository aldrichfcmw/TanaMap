<!DOCTYPE html>
<html lang="en" class="light-style layout-navbar-fixed layout-menu-fixed layout-compact customizer-hide" dir="ltr" data-theme="theme-default" data-assets-path="/" data-template="vertical-menu-template-light">

  <head>
    @include('layouts.head')
  </head>

  <body>
    <!-- Layout wrapper -->
    <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">
        <!-- Aside -->
        @include('layouts.aside')
        <!-- / Aside -->

        <!-- Layout container -->
        <div class="layout-page">
          <!-- Navbar -->
          @include('layouts.navbar')
          <!-- / Navbar -->

          <!-- Content wrapper -->
          <div class="content-wrapper">
            <!-- Content -->

            <div class="container-xxl flex-grow-1 container-p-y">
                <h4 class="py-3 mb-4">
                    <span class="text-muted fw-light">{{$title}}/</span> {{$page}}
                </h4>
                @yield('content')  
              <!-- Examples -->
              
              <!--/ Card layout -->
            </div>
            <!-- / Content -->

            <!-- Footer -->
            @include('layouts.footer')
            <!-- / Footer -->

            <div class="content-backdrop fade"></div>
          </div>
          <!-- Content wrapper -->
        </div>
        <!-- / Layout page -->
      </div>

      <!-- Overlay -->
      <div class="layout-overlay layout-menu-toggle"></div>
    </div>
    <!-- / Layout wrapper -->

    <!-- Vendors JS -->
    @include('layouts.foot')
    <!-- Page JS -->
  </body>
</html>
