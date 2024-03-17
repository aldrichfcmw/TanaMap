<!-- Menu -->

  <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
  
    <div class="app-brand demo ">
      <a href="{{url('/')}}" class="app-brand-link">
        <span class="app-brand-logo demo" style="margin-left: -5%">
  
          <img src="{{asset('img/favicons/logo-icon.png')}}" alt="" srcset="" width="40" >
  
        </span>
        <span class="app-brand-text demo menu-text fw-bold ms-2">TanaMap</span>
      </a>
  
      <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto">
        <i class="bx bx-chevron-left bx-sm align-middle"></i>
      </a>
    </div>
  
    <div class="menu-inner-shadow"></div>

    <ul class="menu-inner py-1">
      <!-- Dashboards -->
      <li class="menu-item active open">
        <a href="javascript:void(0);" class="menu-link menu-toggle">
          <i class="menu-icon tf-icons bx bx-home-circle"></i>
          <div class="text-truncate" data-i18n="Dashboards">Dashboards</div>
          <span class="badge badge-center rounded-pill bg-danger ms-auto">5</span>
        </a>
        <ul class="menu-sub">
          <li class="menu-item">
            <a href="{{route('dashboard')}}" class="menu-link">
              <div class="text-truncate" data-i18n="Overview">OverView</div>
            </a>
          </li>
          <li class="menu-item">
            <a href="{{route('user')}}" class="menu-link">
              <div class="text-truncate" data-i18n="User">User</div>
            </a>
          </li>
          <li class="menu-item">
            <a href="{{route('user.add')}}" class="menu-link">
              <div class="text-truncate" data-i18n="Add-User">Add-User</div>
            </a>
          </li>
        </ul>
      </li>
      <!-- Misc -->
      <li class="menu-header small text-uppercase"><span class="menu-header-text" data-i18n="Misc">Misc</span></li>
    </ul>
    
    
  
  </aside>
  <!-- / Menu -->