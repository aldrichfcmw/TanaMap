<!DOCTYPE html>
<html
  lang="en"
  class="light-style"
  dir="ltr" 
  data-theme="theme-default" 
  data-assets-path="/" 
  data-template="vertical-menu-template-light">
  <head>
    @include('layouts.head')
    <link rel="stylesheet" href="{{asset('vendor/css/pages/page-misc.css')}}" />
  </head>

  <body>
    <!-- Content -->

    <!-- Error -->
    <div class="container-xxl container-p-y">
      <div class="misc-wrapper">
        <h2 class="mb-4 mx-2">Permission Denied</h2>
        <p class="mx-2">Oops! 😖 The requested page dont have permission on this server.</p>
        <p class="mb-4 mx-2">Please contact administator for request the permission.</p>
        <div class="row">
            <div class="col">
                <a href="javascript:void(0)" class="btn btn-success mx-2">Contact Me</a>
                <a href="{{url('/signout')}}" class="btn btn-warning mx-2">Back to home</a>
            </div>
        </div>
        <div class="mt-3">
          <img
            src="{{asset('img/illustrations/page-error-permission-light.png')}}"
            alt="page-misc-error-light"
            width="500"
            class="img-fluid"
            data-app-dark-img="illustrations/page-error-permission-dark.png"
            data-app-light-img="illustrations/page-error-permission-light.png"
          />
        </div>
      </div>
      @include('layouts.footer')
    </div>
    <!-- /Error -->

    <!-- / Content -->
    @include('layouts.foot')
    @include('layouts.toast')

  </body>
</html>
