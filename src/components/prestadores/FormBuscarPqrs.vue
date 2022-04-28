<template>
  <div>
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-5">
          <h4 class="text-uppercase">Consulta tu Solicitud </h4>
        </div>
        <div class="col-md-2 offset-md-5 text-danger ">
          <h4 class="font-weight-bold" id="estado1"></h4>
        </div>
      </div>
      <hr>
      <p>Este formulario está destinado para consultar su PQRD, relacionados con la prestación de servicios de salud.</p>
      <div class="row mt-5">
      <div class="col-md-3">
        <div class="form-group">
          <label>Tipo documento</label>
          <select id="tpdocumento1" class="form-control form-control-sm" required aria-label="">
            <option value="">SELECCIONAR</option>
          </select>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label>Documento</label>
          <input type="number" id="documento1" min="3" max="10" class="form-control form-control-sm" >
        </div>
      </div>
      <div class="col-md-3">
        <div class="form-group">
          <label>Numero de Radicado</label>
          <input type="number" id="radicado1" class="form-control form-control-sm">
        </div>
      </div>
      <div class="col-md-2 mt-4">
          <button class="btn btn-primary btn-sm mt-2" id="btn-consultar"> CONSULTAR  <i class="fas fa-search"></i></button>
      </div>
    </div>
    <h5 class="mt-4 text-uppercase">Datos de la Solicitud</h5>
    <hr>
    <div class="row">
      <div class="col-md-4">
        <div class="form-group">
          <label>Nombres</label>
          <input type="text" id="nombres1" class="form-control form-control-sm" readonly>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label>Apellidos</label>
          <input type="text" id="apellidos1" class="form-control form-control-sm" readonly>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label>Celular</label>
          <input type="text" id="celular1" class="form-control form-control-sm" readonly>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-4">
          <div class="form-group">
            <label>Dirección</label>
            <input type="text" id="direccion1"  class="form-control form-control-sm" readonly>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label>Correo electronico</label>
            <input type="text" id="correo1" class="form-control form-control-sm" readonly>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label>Fecha radicación</label>
            <input type="text" id="fecha1" class="form-control form-control-sm" readonly>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="form-group">
            <label>Solicitud</label>
            <textarea id="solicitud1" class="form-control" rows="5" readonly></textarea>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label>Gestion</label>
            <textarea id="respuesta1" class="form-control" rows="5" readonly></textarea>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-12">
          <table class="table table-stripped table-hover">
            <thead>
              <th>Respuestas a la solicitud</th>
            </thead>
            <tbody id="consulta-result">
            </tbody>
          </table>
        </div>
      </div>
      <div class="row mt-3" id="container-pdf" hidden>
        <div class="col-md-12" id="content">
        </div>
      </div>
      <p class="mt-5"> <span class=""> <strong> AUTORIZACIÓN PREVIA PARA EL TRATAMIENTO DE DATOS PERSONALES Y DATOS PERSONALES SENSIBLES </strong></span>
        Manifiesto de manera clara, expresa, libre, inequívoca y espontánea que le otorgo a PIJAOS SALUD EPSI en su calidad de RESPONSABLE
        del tratamiento de mis datos personales, mi consentimiento previo para recolectar, almacenar, usar, circular, suprimir, reportar y
        en general para tratar los DATOS PERSONALES, DATOS PERSONALES SENSIBLES y demás información susceptible de tratamiento, registrada
        a mi nombre y/o de mi grupo familiar en sus Bases de Datos, con la finalidad de realizar las actividades propias del aseguramiento
        en salud y en los términos previstos en su POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES  disponible en
        su página web www.pijaossalud.com a través del link <a href="https://www.pijaossalud.com/tratamiento-de-datos-personales/">tratamiento de datos personales</a> 
        todo lo cual conforme lo establecido en la Ley Estatutaria 1581 de 2012 y demás normas que la sustituyan, adicionen, reglamenten,
        complementen o modifiquen. La presente autorización la he suministrado de forma voluntaria. Al hacer clic en el botón ENVIAR, usted
        acepta la remisión de la PQRD a Pijaos Salud EPSI. En la opción SEGUIMIENTO DE PQRD podrá verificar el estado de la respuesta.
      </p>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style>

</style>