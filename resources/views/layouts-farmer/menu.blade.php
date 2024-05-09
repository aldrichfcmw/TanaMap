<!-- Menu -->

  <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
  
    <div class="app-brand demo ">
      <a href="{{url('/')}}" class="app-brand-link">
        <span class="app-brand-logo" style="margin-left: -5%">
  
          <img src="{{asset('img/favicons/logo-icon.png')}}" alt="" srcset="" width="40" >
  
        </span>
        <span class="app-brand-text menu-text fw-bold ms-2">TanaMap</span>
      </a>
      
      
    </div>
  
    <div class="menu-inner-shadow"></div>

    <ul class="menu-inner py-1">
      @can('guest')
      <li class="menu-item active">
        <a
          href="#"
          target="_self"
          class="menu-link"
        >
          <i class="menu-icon tf-icons bx bx-home-circle"></i>
          <div data-i18n="Dashboard">Dashboard</div>
        </a>
      </li>
      @endcan
    </ul>
    
    
  
  </aside>
  <!-- / Menu -->