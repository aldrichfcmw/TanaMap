<!-- Navbar -->
  <nav class="layout-navbar {{ request()->is('farmer/*') ? 'container-fluid' : 'container-xxl' }} navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
    @can('admin')
    <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0   d-xl-none ">
      <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
        <i class="bx bx-menu bx-sm"></i>
      </a>
    </div>
    @endcan
    @can('guest|farmer')
    <div class="app-brand demo ">
      <a href="{{url('/')}}" class="app-brand-link">
        <span class="app-brand-logo" style="">
          <img src="{{asset('img/favicons/logo.png')}}" alt="" srcset="" width="80%" >
        </span> 
      </a>
    </div>
    @endcan

    <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">

      <ul class="navbar-nav flex-row align-items-center ms-auto">
        

        <!-- Language -->
        <li class="nav-item dropdown-language dropdown me-2 me-xl-0">
          <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
            <i class='bx bx-globe bx-sm'></i>
          </a>
          <ul class="dropdown-menu dropdown-menu-end">
            <li>
              <a class="dropdown-item" href="javascript:void(0);" data-language="en" data-text-direction="ltr">
                <span class="align-middle">English</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:void(0);" data-language="id" data-text-direction="ltr">
                <span class="align-middle">Indonesia</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:void(0);" data-language="jp" data-text-direction="rtl">
                <span class="align-middle">Japan</span>
              </a>
            </li>
          </ul>
        </li>
        <!-- /Language -->


        
        <!-- Style Switcher -->
        <li class="nav-item dropdown-style-switcher dropdown me-2 me-xl-0">
          <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
            <i class='bx bx-sm'></i>
          </a>
          <ul class="dropdown-menu dropdown-menu-end dropdown-styles">
            <li>
              <a class="dropdown-item" href="javascript:void(0);" data-theme="light">
                <span class="align-middle"><i class='bx bx-sun me-2'></i>Light</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:void(0);" data-theme="dark">
                <span class="align-middle"><i class="bx bx-moon me-2"></i>Dark</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:void(0);" data-theme="system">
                <span class="align-middle"><i class="bx bx-desktop me-2"></i>System</span>
              </a>
            </li>
          </ul>
        </li>
        <!-- / Style Switcher-->
        

        
        <!-- User -->
        <li class="nav-item navbar-dropdown dropdown-user dropdown">
          <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
            <div class="avatar avatar-online">
              <img src="{{asset('/img/avatars/1.png')}}" alt class="w-px-40 h-auto rounded-circle">
            </div>
          </a>
          <ul class="dropdown-menu dropdown-menu-end">
            <li>
              <a class="dropdown-item" href="pages-account-settings-account.html">
                <div class="d-flex">
                  <div class="flex-shrink-0 me-3">
                    <div class="avatar avatar-online">
                      <img src="{{asset('/img/avatars/1.png')}}" alt class="w-px-40 h-auto rounded-circle">
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <span class="fw-medium d-block">{{ auth()->user()->name }}</span>
                    <small class="text-muted">{{ auth()->user()->roles->first()->name }}</small>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <div class="dropdown-divider"></div>
            </li>
            @can('admin')
            <li>
              <a class="dropdown-item" href="pages-profile-user.html">
                <i class="bx bx-user me-2"></i>
                <span class="align-middle">My Profile</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="pages-account-settings-account.html">
                <i class="bx bx-cog me-2"></i>
                <span class="align-middle">Settings</span>
              </a>
            </li>
            <li>
              <div class="dropdown-divider"></div>
            </li>
            @endcan
            <li>
              <a class="dropdown-item" href="{{route('auth.signout')}}" target="_self">
                <i class="bx bx-power-off me-2"></i>
                <span class="align-middle">Log Out</span>
              </a>
            </li>
          </ul>
        </li>
        <!--/ User -->
        

      </ul>
    </div>

    
    <!-- Search Small Screens -->
    <div class="navbar-search-wrapper search-input-wrapper  d-none">
      <input type="text" class="form-control search-input container-xxl border-0" placeholder="Search..." aria-label="Search...">
      <i class="bx bx-x bx-sm search-toggler cursor-pointer"></i>
    </div>
    
    
</nav>



<!-- / Navbar -->