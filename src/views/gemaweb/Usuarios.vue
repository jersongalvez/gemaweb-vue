<template>
  <div>
    <Menu />
      <div class="main-content">
        <MenuSuperior />
        <NoEstadisticas />
        <div class="container-fluid mt--7">
          <div class="row">
            <div class="col">
              <div class="card shadow border-0">
                <FormUsuarios />
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <Footer />
        </div>
      </div>
  </div>
</template>
<script>
import Footer from '@/components/gemaweb/Footer';
import NoEstadisticas from '@/components/gemaweb/NoEstadisticas';
import MenuSuperior from '@/components/gemaweb/MenuSuperior';
import Menu from '@/components/gemaweb/Menu';
import FormUsuarios from '@/components/gemaweb/FormUsuarios';
export default {
  name: 'Usuarios',
  components: {
    NoEstadisticas,
    MenuSuperior,
    Menu,
    FormUsuarios,
    Footer
  }
}
</script>
