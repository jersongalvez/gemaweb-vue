<template>

  <div>
    <nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#sidenav-collapse-main"
          aria-controls="sidenav-main"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand pt-0" href="">
          <img src="https://saludmadreymujer.com/archivos/img/logo.png" class="navbar-brand-img" />
        </a>
        <ul class="nav align-items-center d-md-none">
          <li class="nav-item dropdown">
            <a class="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="ni ni-bell-55"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div class="media align-items-center">
                <span class="avatar avatar-sm rounded-circle">
                  <img alt="Image placeholder" src="https://saludmadreymujer.com/archivos/img/sketch.jpg">
                </span>
              </div>
            </a>
            <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
              <div class=" dropdown-header noti-title">
                <h6 class="text-overflow m-0">Bienvenido</h6>
              </div>
              <a href="" class="dropdown-item">
              <i class="ni ni-single-02"></i>
              <span>Perfil</span>
            </a>
            <a href="" class="dropdown-item">
              <i class="ni ni-settings-gear-65"></i>
              <span>Configuración</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#!" class="dropdown-item">
              <i class="ni ni-user-run"></i>
              <span>Cerrar Sesión</span>
            </a>
          </div>
        </li>
      </ul>
      <div class="collapse navbar-collapse" id="sidenav-collapse-main">
        <div class="navbar-collapse-header d-md-none">
          <div class="row">
            <div class="col-6 collapse-brand">
              <a href="">
                <img src="https://saludmadreymujer.com/archivos/img/sketch.jpg">
              </a>
            </div>
            <div class="col-6 collapse-close">
              <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <form class="mt-4 mb-3 d-md-none">
          <div class="input-group input-group-rounded input-group-merge">
            <input type="search" class="form-control form-control-rounded form-control-prepended" placeholder="Search" aria-label="Search">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <span class="fa fa-search"></span>
              </div>
            </div>
          </div>
        </form>
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link " href="">
              <i class="ni ni-tv-2 text-primary"></i> Inicio
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link " href="">
              <i class="ni ni-planet"></i> Usuarios
            </a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link  active " href="">
              <i class="ni ni-pin-3 text-orange"></i> Maps
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="">
              <i class="ni ni-single-02 text-yellow"></i> User profile
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="">
              <i class="ni ni-bullet-list-67 text-red"></i> Tables
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="ni ni-key-25 text-info"></i> Login
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="ni ni-circle-08 text-pink"></i> Register
            </a>
          </li> -->
        </ul>
        <hr class="my-3">
        <h6 class="navbar-heading ">Documentation</h6>
        <ul class="navbar-nav mb-md-3">
          <li class="nav-item active">
            <a class="nav-link" href="">
              <i class="ni ni-spaceship"></i> Version 1.0.0
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="">
              <i class="ni ni-palette"></i> Manual de usuario
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="">
              <i class="ni ni-ui-04"></i> Cerrar Sesión
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="main-content">
    <nav class="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
      <div class="container-fluid">
        <a class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="">Plataforma Gemaweb</a>
        <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
          <div class="form-group mb-0">
            <div class="input-group input-group-alternative">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-search"></i></span>
              </div>
              <input class="form-control" placeholder="Buscar" type="text">
            </div>
          </div>
        </form>
        <ul class="navbar-nav align-items-center d-none d-md-flex">
          <li class="nav-item dropdown">
            <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div class="media align-items-center">
                <span class="avatar avatar-sm rounded-circle">
                  <img alt="Image placeholder" src="https://saludmadreymujer.com/archivos/img/sketch.jpg">
                </span>
                <div class="media-body ml-2 d-none d-lg-block">
                  <span class="mb-0 text-sm  font-weight-bold">Jerson Galvez Ensuncho</span>
                </div>
              </div>
            </a>
            <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
              <div class=" dropdown-header noti-title">
                <h6 class="text-overflow m-0">Bienvenido!</h6>
              </div>
              <a href="" class="dropdown-item">
                <i class="ni ni-single-02"></i>
                <span>Perfil</span>
              </a>
              <a href="" class="dropdown-item">
                <i class="ni ni-settings-gear-65"></i>
                <span>Configuración</span>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#!" class="dropdown-item">
                <i class="ni ni-user-run"></i>
                <span>Cerrar Sesión</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div class="header bg-gradient-info pb-8 pt-5 pt-md-8">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row">
            <div class="col-xl-3 col-lg-6">
              <div class="card card-stats mb-4 mb-xl-0">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">Traffic</h5>
                      <span class="h2 font-weight-bold mb-0">350,897</span>
                    </div>
                    <div class="col-auto">
                      <div class="icon icon-shape bg-danger text-white rounded-circle shadow">
                        <i class="fas fa-chart-bar"></i>
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-muted text-sm">
                    <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                    <span class="text-nowrap">Since last month</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6">
              <div class="card card-stats mb-4 mb-xl-0">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">New users</h5>
                      <span class="h2 font-weight-bold mb-0">2,356</span>
                    </div>
                    <div class="col-auto">
                      <div class="icon icon-shape bg-warning text-white rounded-circle shadow">
                        <i class="fas fa-chart-pie"></i>
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-muted text-sm">
                    <span class="text-danger mr-2"><i class="fas fa-arrow-down"></i> 3.48%</span>
                    <span class="text-nowrap">Since last week</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6">
              <div class="card card-stats mb-4 mb-xl-0">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">Sales</h5>
                      <span class="h2 font-weight-bold mb-0">924</span>
                    </div>
                    <div class="col-auto">
                      <div class="icon icon-shape bg-yellow text-white rounded-circle shadow">
                        <i class="fas fa-users"></i>
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-muted text-sm">
                    <span class="text-warning mr-2"><i class="fas fa-arrow-down"></i> 1.10%</span>
                    <span class="text-nowrap">Since yesterday</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6">
              <div class="card card-stats mb-4 mb-xl-0">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">Performance</h5>
                      <span class="h2 font-weight-bold mb-0">49,65%</span>
                    </div>
                    <div class="col-auto">
                      <div class="icon icon-shape bg-info text-white rounded-circle shadow">
                        <i class="fas fa-percent"></i>
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-muted text-sm">
                    <span class="text-success mr-2"><i class="fas fa-arrow-up"></i> 12%</span>
                    <span class="text-nowrap">Since last month</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col">
          <div class="card shadow border-0">
           <br>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="row align-items-center justify-content-xl-between">
          <div class="col-xl-6">
            <div class="copyright text-center text-xl-left text-muted">
             2022 <a href="https://www.pijaossalud.com/" class="font-weight-bold ml-1" target="_blank">Pijaos Salud EPSI</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
 </div>
</template>
<script>
export default {
  name: 'Inicio',
  components: {

  }
}
</script>
