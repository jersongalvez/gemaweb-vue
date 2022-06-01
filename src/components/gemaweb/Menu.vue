<template>
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
          <img src="https://saludmadreymujer.com/archivos/img/logo.png" class="navbar-brand-img" /> <h4 class="mt-2">Pijaos Salud EPSI</h4>
        </a>
        <ul class="nav align-items-center d-md-none">
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div class="media align-items-center">
                <span class="avatar avatar-sm rounded-circle">
                  <img alt="Image placeholder" src="https://saludmadreymujer.com/archivos/img/sketch.jpg" />
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
              <button
                type="button"
                class="navbar-toggler"
                data-toggle="collapse"
                data-target="#sidenav-collapse-main"
                aria-controls="sidenav-main"
                aria-expanded="false"
                aria-label="Toggle sidenav"
              >
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <form class="mt-4 mb-3 d-md-none">
          <div class="input-group input-group-rounded input-group-merge">
            <input
              type="search"
              class="form-control form-control-rounded form-control-prepended"
              placeholder="Buscar"
              aria-label="Buscar"
            >
            <div class="input-group-prepend">
              <div class="input-group-text">
                <span class="fa fa-search"></span>
              </div>
            </div>
          </div>
        </form>
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/gemaweb/inicio">
              <font-awesome-icon icon="home" class="text-dark mx-2" />  Inicio
            </router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/gemaweb/usuarios">
              <font-awesome-icon icon="users" class="text-dark mx-2" />  Usuarios
            </router-link>
          </li>
          <li class="nav-item dropdown active">
            <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div class="media align-items-center">
                <div class="media-body  d-none d-lg-block">
                  <font-awesome-icon icon="bacteria" class="text-dark mx-2" /> Alto Costo
                </div>
              </div>
            </a>
            <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
              <router-link class="nav-link" to="/gemaweb/altocancer">
                Cancer
              </router-link>
              <router-link class="nav-link" to="/gemaweb/artitris">
                Artritis
              </router-link>
              <router-link class="nav-link" to="/gemaweb/hipertitis">
                Hipertitis
              </router-link>
              <router-link class="nav-link" to="/gemaweb/erc">
                ERC
              </router-link>
              <router-link class="nav-link" to="/gemaweb/hemofilia">
                Hemofilia
              </router-link>
              <router-link class="nav-link" to="/gemaweb/novih">
                No VIH
              </router-link>
              <router-link class="nav-link" to="/gemaweb/vih">
                VIH
              </router-link>
            </div>
          </li>

          <li class="nav-item dropdown active">
            <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div class="media align-items-center">
                <div class="media-body  d-none d-lg-block">
                  <font-awesome-icon icon="user-nurse" class="text-dark mx-2" />Contrareferencia
                </div>
              </div>
            </a>
            <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
              <router-link class="nav-link" to="/gemaweb/contrausuarios">
                Ingreso de usuario
              </router-link>
              <!-- 
              <router-link class="nav-link" to="/gemaweb/artitris">
                Artritis
              </router-link>
              <router-link class="nav-link" to="/gemaweb/hipertitis">
                Hipertitis
              </router-link>
              <router-link class="nav-link" to="/gemaweb/erc">
                ERC
              </router-link>
              <router-link class="nav-link" to="/gemaweb/hemofilia">
                Hemofilia
              </router-link>
              <router-link class="nav-link" to="/gemaweb/novih">
                No VIH
              </router-link>
              <router-link class="nav-link" to="/gemaweb/vih">
                VIH
              </router-link> -->
            </div>
          </li>
        </ul>
        <hr class="my-4">
        <h6 class="navbar-heading ">Documentación</h6>
        <ul class="navbar-nav mb-md-3">
          <li class="nav-item active">
            <a class="nav-link" href="">
              <font-awesome-icon icon="info" class="text-dark mx-2" /> Version 1.0.0.0
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="">
              <font-awesome-icon icon="book" class="text-dark mx-2" /> Manual de Usuario
            </a>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/gemaweb/login">
                <font-awesome-icon icon="power-off" class="text-dark mx-2" />  Cerrar Sesión
              </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Menu",
    data() {
      return {

      };
    }
}
</script>
