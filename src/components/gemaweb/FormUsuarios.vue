<template>
    <div class="container-fluid">
      <div class="table-responsive">
          <table class=" table table-stripped table-hover  align-items-center table-flush ">
            <thead class="">
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Cargo</th>
                <th>Usuario</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Jerson Galvez</td>
                <td>Auxliliar Desarrollo</td>
                <td>JGALVEZ</td>
                <td>
                  <span class="badge badge-dot">
                    <i class="bg-success"></i> ACTIVO
                  </span>
                </td>
                <td>
                  <li class="nav-item dropdown active">
                      <a
                        class="nav-link pr-0"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                      <div class="media align-items-center">
                        <div class="media-body  d-none d-lg-block">
                          <font-awesome-icon icon="list-ul" class="text-danger mx-2 fa-1x" />
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                      <router-link class="nav-link" to="/gemaweb/altocancer">
                        Dar Acceso
                      </router-link>
                      <router-link class="nav-link" to="/gemaweb/altocancer">
                        Editar
                      </router-link>
                    </div>
                  </li>
                </td>
                </tr>
            </tbody>
          </table>
      </div>
    </div>
</template>
<script>
export default {
  name: 'FormUsuarios'
}
</script>
