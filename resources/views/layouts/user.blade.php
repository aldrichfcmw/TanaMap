<!DOCTYPE html>
<html lang="en" class="light-style layout-navbar-fixed layout-menu-fixed layout-compact customizer-hide" dir="ltr" data-theme="theme-default" data-assets-path="/" data-template="vertical-menu-template-dark">

<head>
    @include('layouts.head')
    <link rel="stylesheet" href="{{asset('/vendor/libs/bootstrap-select/bootstrap-select.css')}}" />
    <link rel="stylesheet" href="{{asset('/vendor/libs/select2/select2.css')}}" />
    <link rel="stylesheet" href="{{asset('/vendor/libs/flatpickr/flatpickr.css')}}" />
    <link rel="stylesheet" href="{{asset('/vendor/libs/@form-validation/form-validation.css')}}" />
    <link rel="stylesheet" href="{{asset('/vendor/libs/typeahead-js/typeahead.css')}}" />
    <link rel="stylesheet" href="{{asset('/vendor/libs/tagify/tagify.css')}}" />
    <link rel="stylesheet" href="{{asset('/vendor/libs/animate-css/animate.css')}}" />
    <link rel="stylesheet" href="{{asset('/vendor/libs/sweetalert2/sweetalert2.css')}}" />

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
    <script src="{{asset('/vendor/libs/bootstrap-select/bootstrap-select.js')}}"></script>
    <script src="{{asset('/vendor/libs/select2/select2.js')}}"></script>
    <script src="{{asset('/vendor/libs/moment/moment.js')}}"></script>
    <script src="{{asset('/vendor/libs/flatpickr/flatpickr.js')}}"></script>
    <script src="{{asset('/vendor/libs/typeahead-js/typeahead.js')}}"></script>
    <script src="{{asset('/vendor/libs/tagify/tagify.js')}}"></script>
    <script src="{{asset('/vendor/libs/@form-validation/popular.js')}}"></script>
    <script src="{{asset('/vendor/libs/@form-validation/bootstrap5.js')}}"></script>
    <script src="{{asset('/vendor/libs/@form-validation/auto-focus.js')}}"></script>
    <script src="{{asset('/vendor/libs/sweetalert2/sweetalert2.js')}}"></script>
    <!-- Page JS -->

    <script src="{{asset('/js/form-validation.js')}}"></script>
    @if($message = Session::get('success'))
    <script>
    Swal.fire({
                icon: 'success', // Tipe ikon (success, error, warning, info)
                text: '{{ $message }}', // Pesan toast
                toast: true, // Tentukan bahwa ini adalah toast
                position: 'bottom-end', // Posisi toast (top-start, top-end, bottom-start, bottom-end)
                showConfirmButton: false, // Tampilkan tombol OK
                background:"#fff",
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
                }
            });
    </script>
    @endif
    @if($message = Session::get('error'))
    <script>
      Swal.fire({
                icon: 'error', // Tipe ikon (success, error, warning, info)
                text: '{{ $message }}', // Pesan toast
                toast: true, // Tentukan bahwa ini adalah toast
                position: 'bottom-end', // Posisi toast (top-start, top-end, bottom-start, bottom-end)
                showConfirmButton: false, // Tampilkan tombol OK
                background:"#fff",
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
            });
    </script>
    @endif    

    @if ($errors->any())
    <script>
        @foreach ($errors->all() as $error)
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "{{ $error }}",
        });
        @endforeach
    </script>
    @endif   
</body>

</html>

