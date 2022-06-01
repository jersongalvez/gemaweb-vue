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
                <FormContraUsuario />
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
import FormContraUsuario from '@/components/gemaweb/FormContraUsuario';
import MenuSuperior from '@/components/gemaweb/MenuSuperior';
import Menu from '@/components/gemaweb/Menu';

export default {
  name: 'ContraReferenciaUsuarios',
  components: {
    NoEstadisticas,
    FormContraUsuario,
    MenuSuperior,
    Menu,
    Footer
  }
}
</script>
