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
      <li class="menu-header small text-uppercase"><span class="menu-header-text" data-i18n="Dashboard">Dashboard</span></li>
      <!-- Dashboards -->
      <li class="menu-item {{ $page == 'Overview' ? 'active' : '' }}">
        <a href="{{route('dashboard')}}" class="menu-link">
          <i class="menu-icon tf-icons bx bx-home-circle"></i>
          <div class="text-truncate" data-i18n="Dashboards">Dashboards</div>
        </a>
      </li>

      <li class="menu-item {{ $title == 'Farmer' ? 'active open' : '' }}">
        <a href="javascript:void(0);" class="menu-link menu-toggle">
          <i class="menu-icon tf-icons bx bxs-florist"></i>
          <div class="text-truncate" data-i18n="Farmers">Farmers</div>
        </a>
        <ul class="menu-sub">
          <li class="menu-item {{ $page == 'Disease' ? 'active' : '' }}">
            <a href="{{route('disease')}}" class="menu-link">
              <div class="text-truncate" data-i18n="Disease">Disease</div>
            </a>
          </li>
          <li class="menu-item {{ $page == 'Growth' ? 'active' : '' }}">
            <a href="{{route('growth')}}" class="menu-link">
              <div class="text-truncate" data-i18n="Growth">Growth</div>
            </a>
          </li>
          <li class="menu-item {{ $page == 'Tool' ? 'active' : '' }}">
            <a href="{{route('tool')}}" class="menu-link">
              <div class="text-truncate" data-i18n="Tool">Tool</div>
            </a>
          </li>
          <li class="menu-item {{ $page == 'Weather' ? 'active' : '' }}">
            <a href="{{route('weather')}}" class="menu-link">
              <div class="text-truncate" data-i18n="Weather">Weather</div>
            </a>
          </li>
        </ul>
      </li>

      
      <!-- Misc -->
      <li class="menu-header small text-uppercase"><span class="menu-header-text" data-i18n="Administrator">Administrator</span></li>
      
      <li class="menu-item {{ $title == 'User' ? 'active open' : '' }}">
        <a href="javascript:void(0);" class="menu-link menu-toggle">
          <i class="menu-icon tf-icons bx bx-slider-alt"></i>
          <div class="text-truncate" data-i18n="User">User</div>
        </a>
        <ul class="menu-sub">
          <li class="menu-item {{ $page == 'Add User' ? 'active' : '' }}">
            <a href="{{route('user.add')}}" class="menu-link">
              <div class="text-truncate" data-i18n="Add User">Add User</div>
            </a>
          </li>
          <li class="menu-item {{ $page == 'List Users' ? 'active' : '' }}">
            <a href="{{route('user.list')}}" class="menu-link">
              <div class="text-truncate" data-i18n="List User">List User</div>
            </a>
          </li>
          <li class="menu-item {{ $page == 'View' ? 'active open' : '' }}">
            <a href="javascript:void(0)" class="menu-link menu-toggle">
              <div class="text-truncate" data-i18n="View">View</div>
            </a>
            <ul class="menu-sub">
              <li class="menu-item {{ $subpage == 'Account' ? 'active' : '' }}">
                <a href="{{route('account.view')}}" class="menu-link">
                  <div class="text-truncate" data-i18n="Account">Account</div>
                </a>
              </li>
              <li class="menu-item {{ $subpage == 'Security' ? 'active' : '' }}">
                <a href="{{route('account.security')}}" class="menu-link">
                  <div class="text-truncate" data-i18n="Security">Security</div>
                </a>
              </li>
              <li class="menu-item {{ $subpage == 'Token' ? 'active' : '' }}">
                <a href="{{route('account.token')}}" class="menu-link">
                  <div class="text-truncate" data-i18n="Token">Token</div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
  <!-- / Menu -->