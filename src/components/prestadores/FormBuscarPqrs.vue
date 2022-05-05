

<template>
  <div>
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-5">
          <h4 class="text-uppercase">Consulta tu Solicitud </h4>
        </div>
        <div class="col-md-2 offset-md-5 text-danger ">
          <h5 class="font-weight-bold text-uppercase" id="estado1"></h5>
        </div>
      </div>
      <hr>
      <p>Este formulario está destinado para consultar su PQRD, relacionados con la prestación de servicios de salud.</p>
      <div class="row mt-5">
      <div class="col-md-3">
        <div class="form-group">
          <label>Tipo documento</label>
          <select
            id="tpdocumento"
            class="form-control form-control-sm"
            required aria-label=""
            v-model="tpdocumento"
          >
            <option value="">SELECCIONE</option>
            <option
            v-for="tpdocumento in tpdocumentos"
            v-bind:value="{id: tpdocumento.TIP_DOCUMENTO, text: tpdocumento.NOM_DOCUMENTO}"
            :key="tpdocumento.TIP_DOCUMENTO"
            >
              {{ tpdocumento.NOM_DOCUMENTO }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label>Documento</label>
          <input
            type="number"
            id="documento"
            min="3"
            max="10"
            class="form-control form-control-sm"
            v-model="documento"
          >
        </div>
      </div>
      <div class="col-md-3">
        <div class="form-group">
          <label>Numero de Radicado</label>
          <input
            type="number"
            id="radicado"
            class="form-control form-control-sm"
            v-model="radicado"
          >
        </div>
      </div>
      <div class="col-md-2 mt-4">
        <button
          class="btn btn-primary btn-sm mt-2"
          id="btn-consultar"
          @click="BuscarPqrs"
        > CONSULTAR
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
    <h5 class="mt-4 text-uppercase">Datos de la Solicitud</h5>
    <hr>
    <div class="row">
      <div class="col-md-4">
        <div class="form-group">
          <label>Nombres</label>
          <input
            type="text"
            id="nombres1"
            class="form-control form-control-sm"
            readonly
          >
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label>Apellidos</label>
          <input
            type="text"
            id="apellidos1"
            class="form-control form-control-sm"
            readonly
          >
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label>Celular</label>
          <input
            type="text"
            id="celular1"
            class="form-control form-control-sm"
            readonly
          >
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-4">
          <div class="form-group">
            <label>Dirección</label>
            <input
              type="text"
              id="direccion1"
              class="form-control form-control-sm"
              readonly
            >
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label>Correo electronico</label>
            <input
              type="text"
              id="correo1"
              class="form-control form-control-sm"
              readonly
            >
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label>Fecha radicación</label>
            <input
              type="text"
              id="fecha1"
              class="form-control form-control-sm"
              readonly
            >
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="form-group">
            <label>Solicitud</label>
            <textarea
              id="solicitud1"
              class="form-control text-uppercase"
              rows="5"
              readonly
            >
            </textarea>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label>Gestion</label>
            <textarea
              id="respuesta1"
              class="form-control text-uppercase"
              rows="5"
              readonly
            >
            </textarea>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-12">
          <table class="table table-stripped table-hover">
            <thead>
              <th>Respuestas a la solicitud</th>
            </thead>
            <tbody id="consulta-result" class="text-uppercase">
            </tbody>
          </table>
        </div>
      </div>
      <div class="row mt-3" id="container-pdf" hidden>
        <div class="col-md-12 text-uppercase" id="content">

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
  name:"FormBuscarPqrs",
  data() {
    return {
      tpdocumentos: [],
      tpdocumento: "",
      documento: "",
      radicado: "",
    }
  },
  methods: {
    getTpdocumentos: function () {
      let url =  baseurl + "/tipodocumentos";
      this.axios.get(url).then(response => {
        this.tpdocumentos = response.data ;
      });
    },
    BuscarPqrs: function () {
      let tpdocumento = this.tpdocumento.id,
      documento =  this.documento,
      radicado = this.radicado;
      let url = baseurl + "/buscarpqrs/" + tpdocumento + "/" + documento + "/" + radicado  ;
      let table = $("#consulta-result");
      this.axios.get(url).then(response => {
        $("#nombres1").val(response.data.pqrs[0].PRI_NOMBRE + " " + response.data.pqrs[0].SEG_NOMBRE);
        $("#apellidos1").val(response.data.pqrs[0].PRI_APELLIDO + " " + response.data.pqrs[0].SEG_APELLIDO);
        $("#celular1").val(response.data.pqrs[0].CELULAR1);
        $("#direccion1").val(response.data.pqrs[0].DIRECCION);
        $("#correo1").val(response.data.pqrs[0].CORREOEMAIL);
        $("#fecha1").val(response.data.pqrs[0].FECHA_REGISTRO);
        $("#solicitud1").val(response.data.pqrs[0].DETALLE);
        $("#respuesta1").val(response.data.pqrs[0].SOL_ESPERADA);
        const  respuesta = response.data.pqrs.map(function(result){
          return '<tr><td>'+result.DES_SOLUCION+'</td></tr>';
        });
        table.html(respuesta);
        $("#estado1").html(response.data.pqrs[0].DES_EST_QUEJA);
        console.log(response.data.pqrs[0]);
        let pdf = '<a target="blank" href="'+response.data.pqrs[0].DOCUMENTO_RESPUESTA+'" class="text-danger text-uppercase"><i class="fas fa-file-pdf fa-2x"></i> Descargar archivo de respuesta</a>';
        $("#content").html(pdf);
        $("#container-pdf").attr("hidden", false);
      })
      .catch(error => {
        alert("Aun no hay una respuesta a su solicitud");
      })
    }
  },
  mounted() {
    this.getTpdocumentos();
  },
}
</script>
<style>

</style>