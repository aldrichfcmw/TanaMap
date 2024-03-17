<!DOCTYPE html>
<html lang="en" class="light-style layout-navbar-fixed layout-menu-fixed layout-compact customizer-hide" dir="ltr" data-theme="theme-default" data-assets-path="/" data-template="vertical-menu-template-light">

<head>
    @include('layouts.head')
    <link rel="stylesheet" href="{{asset('/vendor/libs/bs-stepper/bs-stepper.css')}}" />
    <link rel="stylesheet" href="{{asset('/vendor/libs/bootstrap-select/bootstrap-select.css')}}" />
    <link rel="stylesheet" href="{{asset('/vendor/libs/select2/select2.css')}}" />
    <link rel="stylesheet" href="{{asset('/vendor/libs/@form-validation/form-validation.css')}}" />
    <link rel="stylesheet" href="{{asset('/vendor/libs/animate-css/animate.css')}}" />
    <link rel="stylesheet" href="{{asset('/vendor/libs/toastr/toastr.css')}}" />
    <link rel="stylesheet" href="{{asset('/vendor/libs/sweetalert2/sweetalert2.css')}}" />
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
                        <h4 class="py-3 mb-4">
                            <span class="text-muted fw-light">{{$title}}/</span> {{$page}}
                        </h4>
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

    @include('layouts.foot')

    <!-- Vendors JS -->
    <script src="{{asset('/vendor/libs/bs-stepper/bs-stepper.js')}}"></script>
    <script src="{{asset('/vendor/libs/bootstrap-select/bootstrap-select.js')}}"></script>
    <script src="{{asset('/vendor/libs/select2/select2.js')}}"></script>
    <script src="{{asset('/vendor/libs/@form-validation/popular.js')}}"></script>
    <script src="{{asset('/vendor/libs/@form-validation/bootstrap5.js')}}"></script>
    <script src="{{asset('/vendor/libs/@form-validation/auto-focus.js')}}"></script>
    <script src="{{asset('/vendor/libs/sweetalert2/sweetalert2.js')}}"></script>
    <script src="{{asset('/vendor/libs/toastr/toastr.js')}}"></script>
    <!-- Page JS -->

    {{-- <script src="{{asset('/js/form-wizard-numbered.js')}}"></script> --}}
    {{-- <script src="{{asset('/js/form-wizard-validation.js')}}"></script> --}}
    <script src="{{asset('/js/ui-toasts.js')}}"></script>
    {{-- <script>
            toastr.option = {
                "autoDismiss" : true,
                "closeButton" : true,
                "showMethod": "fadeIn",
                "showDuration": 300,
                "showEasing": "swing",
                "hideMethod": "fadeOut",
                "hideDuration": 1000,
                "hideEasing": "linear",
                "closeMethod": false,
                "closeDuration": false,
                "closeEasing": false,
                "closeOnHover": true,
            }
        toastr.success("oke",'Success',{timeOut:6000});
    </script> --}}
    @if(Session::has('message'))
        <script>
            toastr.success("{{Session::get('message')}}");
        </script>
    @endif
</body>

</html>

