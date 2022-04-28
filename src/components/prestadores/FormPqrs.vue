<template>
    <div class="FormPqrs">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5 class="push-left text-uppercase mt-4 pull-rigth">Pijaos Salud EPSI</h5>
          </div>
        </div>
        <hr>
        <p>Este formulario está destinado para presentar PQRD y Solicitudes de Información relacionados con la prestación de servicios de salud.</p>
        <div class="alert alert-success" role="alert">
          Los campos con * son de diligenciamiento obligatorio
        </div>
        <p> ¿ Es usted el paciente o afectado ? </p>
        <div class="was-validated">
          <div class="form-check">
            <input type="radio" class="form-check-input" id="flexRadioDefault1" name="paciente_rad" value="1" required>
            <label class="form-check-label" for="validationFormCheck2">Si</label>
          </div>
          <div class="form-check mb-3">
            <input type="radio" class="form-check-input" id="flexRadioDefault2" name="paciente_rad" value="0" required>
            <label class="form-check-label" for="validationFormCheck3">No</label>
          <div class="invalid-feedback">Seleccione</div>
        </div>
       </div>
       <h6>Información del paciente</h6>
       <hr>
       <div class="row">
                <div class="col-md-3">
                  <div class="was-validated">
                    <div class="form-group">
                      <label>Tipo de Documento *</label>
                      <select
                        id="tpdocumento"
                        class="form-control form-control-sm"
                        required aria-label=""
                        v-model="tpdocumento"
                      >
                       <option value="">SELECCIONE</option>
                       <option v-for="tpdocumento in tpdocumentos"  v-bind:value="{ id: tpdocumento.TIP_DOCUMENTO, text: tpdocumento.NOM_DOCUMENTO }">
                          {{ tpdocumento.NOM_DOCUMENTO }}
                       </option>
                     </select>
                   <div class="invalid-feedback">Ingrese el tipo de documento</div>
                 </div>
               </div>
             </div>
             <div class="col-md-3">
               <div class="was-validated">
                 <div class="form-group">
                   <label>Documento *</label>
                   <input
                     type="number"
                     id="documento"
                     class="form-control form-control-sm"
                     required aria-label=""
                     v-model="documento"
                   >
                   <div class="invalid-feedback">Ingrese el numero de documento</div>
                 </div>
               </div>
             </div>
             <div class="col-md-3 fexpedicion"  hidden>
                 <div class="form-group">
                   <label>Fecha de expedición de su documento </label>
                   <input
                     type="date"
                     id="expedicion"
                     class="form-control form-control-sm"
                     v-model="expedicion"
                   >
                 </div>
             </div>
             <div class="col-md-1 mt-4" id="loading" hidden>
               <div class="spinner-border text-success" role="status">
                 <span class="visually-hidden"></span>
               </div>
             </div>
             <div class="col-md-1 mt-2">
               <button class="btn btn-primary btn-sm mt-4" @click.prevent="buscarAfiliado()">Consultar</button>
             </div>
           </div>
          <div class="row mt-2">
         <div class="col-md-3">
           <div class="form-group">
             <label>Primer Nombre *</label>
             <input
               type="text"
               id="pnombre"
               class="form-control form-control-sm"
               v-model="pnombre"
             >
           </div>
         </div>
         <div class="col-md-3">
           <div class="form-group">
             <label>Segundo Nombre </label>
             <input
               type="text"
               id="snombre"
               class="form-control form-control-sm"
               v-model="snombre"
              >
           </div>
         </div>
         <div class="col-md-3">
           <div class="form-group">
             <label>Primer Apellido *</label>
             <input
               type="text"
               id="papellido"
               class="form-control form-control-sm"
               v-model="papellido"
              >
           </div>
         </div>
         <div class="col-md-3">
           <div class="form-group">
             <label>Segundo  Apellido</label>
             <input
               type="text"
               id="sapellido"
               class="form-control form-control-sm"
               v-model="sapellido"
             >
           </div>
         </div>
       </div>
       <div class="row mt-2">
          <div class="col-md-6">
            <div class="form-group">
              <label>Fecha de Nacimiento *</label>
              <input
                type="date"
                id="nacimiento"
                class="form-control form-control-sm"
                v-model="nacimiento"
              >
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <label>Edad</label>
              <input
                type="number"
                id="edad"
                class="form-control form-control-sm"
                v-model="edad"
              >
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <label>Sexo *</label>
              <br>
              <div class="form-check form-check-inline">
                   <input class="form-check-input" type="radio" name="inlineRadioOptions" id="sexo" value="M">
                   <label class="form-check-label" for="inlineRadio1">Masculino</label>
                 </div>
                   <div class="form-check form-check-inline">
                     <input class="form-check-input" type="radio" name="inlineRadioOptions" id="sexo" value="F">
                     <label class="form-check-label" for="inlineRadio2">Femenino</label>
                   </div>
                 </div>
               </div>
             </div>
             <div class="row">
               <div class="col-md-3">
                 <div class="was-validated">
                   <div class="form-group">
                     <label>Población Especial *</label>
                     <select 
                       id="poblacion"
                       class="form-control"
                       required aria-label=""
                       v-model="poblacionespecial"
                      >
                       <option value="" >SELECCIONE</option>
                       <option v-for="poblacionespecial in poblacionespeciales" v-bind:value="{id: poblacionespecial.CONSECUTIVO, text: poblacionespecial.NOMPOBLACION}">
                         {{ poblacionespecial.NOMPOBLACION }}   
                       </option>
                     </select>
                   <div class="invalid-feedback">Ingrese el tipo de población</div>
                 </div>
               </div>
             </div>
             <div class="col-md-3">
               <div class="was-validated">
                 <div class="form-group">
                     <label>Grupo Étnico *</label>
                     <select
                       id="etnico"
                       class="form-control"
                       required aria-label=""
                       v-model="grupoetnico"
                     >
                       <option value="">SELECCIONE</option>
                       <option v-for="grupoetnico in grupoetnicos" v-bind="{id: grupoetnico.CONSECUTIVO, text: grupoetnico.NOMBRE }">{{ grupoetnico.NOMBRE }}</option>
                     </select>
                   <div class="invalid-feedback">Ingrese el grupo étnico</div>
                 </div>
               </div>
             </div>
             <div class="col-md-3" id="cont-resguardo" >
               <label>Resguardo</label>
               <input
                 type="text"
                 class="form-control"
                 id="resguardo"
                 v-model="resuardo"
               >
             </div>
             <div class="col-md-3" id="cont-comunidad" >
               <label>Comunidad</label>
               <input
                 type="text"
                 class="form-control"
                 id="comunidad"
                 v-model="comunidad"
               >
             </div>
           </div>
           <hr>
           <div class="row">
              <div class="col-md-2">
                <div class="form-group">
                  <label>País *</label>
                  <input
                    type="text"
                    id="pais"
                    class="form-control form-control-sm"
                    value="COLOMBIA"
                    readonly
                    v-model="pais"
                  >
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-group">
                  <label>Departamento *</label>
                  <select
                    id="departamento"
                    class="form-control form-control-sm"
                    v-model="departamento"
                  >
                    <option value="">SELECCIONAR</option>
                    <option v-for="departamento in departamentos" v-bind="{ id: departamento.COD_DEPARTAMENTO, text: departamento.NOM_DEPARTAMENTO }">
                      {{departamento.NOM_DEPARTAMENTO}}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label>Municipio *</label>
                  <select
                    id="municipio"
                    class="form-control form-control-sm"
                    v-model="municipio"
                  >
                    <option value="">SELECCIONAR</option>
                    <option v-for="municipio in municipios" v-bind="{ id: municipio.COD_CIUDAD, text: municipio.NOM_CIUDAD }">{{ municipio.NOM_CIUDAD }}</option>
                  </select>
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-group" >
                  <label>Zona *</label>
                  <select
                    id="zona"
                    class="form-control form-control-sm"
                    v-model="zona"
                  >
                    <option value="">SELECCIONE</option>
                    <option v-for="zona in zonas" v-bind="{ id: zona.COD_ZONA, text: zona.NOM_ZONA }">
                      {{zona.NOM_ZONA}}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-3">
                <div class="was-validated">
                  <div class="form-group" >
                    <label>Dirección *</label>
                    <input
                      type="text"
                      id="direccion"
                      class="form-control form-control-sm"
                      required aria-label=""
                      v-model="direccion"
                    >
                  <div class="invalid-feedback">Ingrese la direccion de residencia</div>
                 </div>
               </div>
             </div>
           </div>
            <hr>
            <div class="row">
              <div class="col-md-3">
                <div class="was-validated">
                  <div class="form-group">
                    <label>Celular *</label>
                    <input
                      type="number"
                      id="celular"
                      class="form-control form-control-sm"
                      required aria-label=""
                      v-model="celular"
                    >
                  <div class="invalid-feedback">Ingrese un numero de contacto</div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label>Teléfono Fijo </label>
                <input
                  type="number"
                  id="telefono"
                  class="form-control form-control-sm"
                  v-model="telefono"
                >
              </div>
            </div>
            <div class="col-md-6">
              <div class="was-validated">
                <div class="form-group">
                    <label>Correo Electronico</label>
                    <input
                      type="email"
                      id="correo"
                      class="form-control form-control-sm"
                      required aria-label=""
                      v-model="correo"
                    >
                  <div class="invalid-feedback">Ingrese correo donde llegara la respuesta</div>
                </div>
              </div>
             </div>
            </div>
            <h6 class="mt-2">Detalle de la petición</h6>
            <hr>
            <p>Permítanos conocer más sobre  la IPS o área de la EPSI  a la cual quiere formular su PQRD</p>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Área  a la que remite la PQRD</label>
                  <select
                    id="area"
                    class="form-control"
                    required aria-label=""
                    v-model="area"
                  >
                    <option value="">SELECCIONE</option>
                    <option v-for="area in areas" v-bind="{ id: area.NOM_AREA, text: area.NOM_AREA }">
                      {{area.NOM_AREA}}
                    </option>
                  </select>
                </div>
              </diV>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Prestador de servicio</label>
                  <select
                    id="ips"
                    class="form-control"
                    required aria-label=""
                    v-model="prestador"
                  >
                    <option value="">SELECCIONE</option>
                    <option v-for="prestador in prestadores" v-bind="{ id: prestador.NIT_PRESTADOR, text: prestador.NOM_PRESTADOR }">{{ prestador.NOM_PRESTADOR}}</option>
                  </select>
                </div>
              </diV>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="was-validated">
                  <div class="form-group">
                    <label for="validationTextarea" class="form-label">Escriba aqui de manera resumida lo que esta sucediendo</label>
                    <textarea
                      class="form-control"
                      id="descripcion"
                      placeholder=""
                      required
                      v-model="descripcion"
                    >
                    </textarea>
                    <div class="invalid-feedback">
                      Por favor ingrese un mensaje en el área de texto
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-md-4">
                <div class="form-group">
                  <label for="exampleFormControlFile1">Adjuntar soporte</label>
                  <input
                    type="file"
                    class="form-control-file"
                    id="exampleFormControlFile1"
                    multiple="multiple"
                  >
                </div>
              </div>
            </div>
            <div class="msjsuccess">
            </div>
              <p> <span class=""> <strong> AUTORIZACIÓN PREVIA PARA EL TRATAMIENTO DE DATOS PERSONALES Y DATOS PERSONALES SENSIBLES </strong></span>
                Manifiesto de manera clara, expresa, libre, inequívoca y espontánea que le otorgo a PIJAOS SALUD EPSI en su calidad de RESPONSABLE
                del tratamiento de mis datos personales, mi consentimiento previo para recolectar, almacenar, usar, circular, suprimir, reportar y
                en general para tratar los DATOS PERSONALES, DATOS PERSONALES SENSIBLES y demás información susceptible de tratamiento, registrada
                a mi nombre y/o de mi grupo familiar en sus Bases de Datos, con la finalidad de realizar las actividades propias del aseguramiento
                en salud y en los términos previstos en su POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES  disponible en su página web www.pijaossalud.com
                a través del link <a href=" https://www.pijaossalud.com/tratamiento-de-datos-personales/">tratamiento de datos personales</a> todo lo cual conforme
                lo establecido en la Ley Estatutaria 1581 de 2012 y demás normas que la sustituyan, adicionen, reglamenten, complementen o modifiquen. La
                presente autorización la he suministrado de forma voluntaria. Al hacer clic en el botón ENVIAR, usted acepta la remisión de la
                PQRD a Pijaos Salud EPSI. En la opción SEGUIMIENTO DE PQRD podrá verificar el estado de la respuesta.
              </p>
            <div class="was-validated">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="no" id="flexCheckDefault" name="flexCheckDefault" required>
                <label class="form-check-label" for="flexCheckDefault">
                  Acepto los términos y condiciones
                </label>
              <div class="invalid-feedback">Acepta los términos y condiciones</div>
            </div>
          </div>
            <button class="btn  btn-primary btn-lg checkterminos  mt-5" @click.prevent="crearPqrs()" >Enviar</button>
            <!-- <button class="btn btn-outline-primary btn-lg mt-5" onclick="cargarArchivoDrive();" type="submit">Borrar</button> -->
          </div>
        </div>
</template>

<script>

export default {
  name:"FormPqrs",
  data() {
    return {
     //
     tpdocumentos: [],
     poblacionespeciales: [],
     grupoetnicos: [],
     departamentos: [],
     municipios: [],
     zonas: [],
     areas: [],
     prestadores: [],
     //
     tpdocumento: "",
     documento: "",
     expedicion: "",
     pnombre: "",
     snombre: "",
     papellido: "",
     sapellido: "",
     nacimiento: "",
     edad: "",
     poblacionespecial: "",
     grupoetnico: "",
     resuardo: "",
     comunidad: "",
     pais: "",
     departamento: "",
     municipio: "",
     zona: "",
     direccion: "",
     celular: "",
     telefono: "",
     correo: "",
     area: "",
     prestador: "",
     descripcion: "",
     
    }
  },
  methods: {
    //NETODOS QUE SE ENCARGAN DE LISTAR EN LOS INPUTS LA INFORMACION
    getTpdocumentos: function () {
      let url =  baseurl + "/tipodocumentos";
      this.axios.get(url).then(response => {
        this.tpdocumentos = response.data ;
      });
    },
    getPoblacionEspecial: function () {
      let url =  baseurl + "/grupopoblacion";
      this.axios.get(url).then(response => {
        this.poblacionespeciales = response.data ;
      });
    },
    getGrupoEtnico: function () {
      let url =  baseurl + "/grupoetnico";
      this.axios.get(url).then(response => {
        this.grupoetnicos = response.data ;
      });
    },
    getDepartamentos: function () {
      let url =  baseurl + "/departamentos";
      this.axios.get(url).then(response => {
        this.departamentos = response.data ;
      });
    },
    getMunicipios: function () {
      let url =  baseurl + "/ciudades";
      this.axios.get(url).then(response => {
        this.municipios = response.data ;
      });
    },
    getZonas: function () {
      let url = baseurl + "/zonas";
      this.axios.get(url).then(response => {
        this.zonas = response.data ;
      });
    },
    getAreas: function () {
      let url = baseurl + "/areas";
      this.axios.get(url).then(response => {
        this.areas = response.data ;
      });
    },
    getPrestadores: function () {
      let url = baseurl + "/prestadores";
      this.axios.get(url).then(response => {
        this.prestadores = response.data ;
      });
    },
    //METODOS DE FUNCIONALIDAD DE LA APLICACION
    buscarAfiliado: function () {
      let tpdocumento = this.tpdocumento.id,
          documento = this.documento,
          url = baseurl + "/buscar/"+tpdocumento+"/"+documento ;
      var spinner = document.getElementById("loading");
          spinner.removeAttribute("hidden");

      this.axios.get(url)
      .then(function (response){
        if (response.data == "error") {
          spinner.setAttribute("hidden", true);
        }
        else {
          spinner.setAttribute("hidden", true);
          // this.pnombre = "hola";
          //this.papellido = response.data.usuario[0].PRI_APELLIDO;
          //this.sapellido = response.data.usuario[0].SEG_APELLIDO;
          //console.log(response.data.usuario[0]);
        }
      })
      .catch(function(response) {
        console.log(response);
      }) 
    },
    crearPqrs: function () {
      let url = baseurl + "/crearpqrs";

      if(this.tpdocumento ==  ""){
        document.getElementById("tpdocumento").focus();
      }
      else if(this.documento ==  ""){
        document.getElementById("documento").focus();
      }
      else if(this.pnombre ==  ""){
        document.getElementById("pnombre").focus();
      }
      else if(this.papellido ==  ""){
        document.getElementById("papellido").focus();
      }
     
      else if(this.nacimiento ==  ""){
        document.getElementById("nacimiento").focus();
      }
      else if(this.poblacionespecial ==  ""){
        document.getElementById("poblacion").focus();
      }
      else if(this.grupoetnico ==  ""){
        document.getElementById("etnico").focus();
      }
      else if(this.departamento ==  ""){
        document.getElementById("departamento").focus();
      }
      else if(this.municipio ==  ""){
        document.getElementById("municipio").focus();
      }
      else if(this.zona ==  ""){
        document.getElementById("zona").focus();
      }
      else if(this.direccion ==  ""){
        document.getElementById("direccion").focus();
      }
      else if(this.celular ==  ""){
        document.getElementById("celular").focus();
      }
      else if(this.correo ==  ""){
        document.getElementById("correo").focus();
      }
      else if(this.descripcion ==  ""){
        document.getElementById("descripcion").focus();
      }
      else {
        this.axios.post(url, {

        })
        .then(function (response) {

        })
        .catch(function (error) {

        })
      }
    }
  },
  mounted() {
    this.getTpdocumentos();
    this.getPoblacionEspecial();
    this.getGrupoEtnico();
    this.getDepartamentos();
    this.getMunicipios();
    this.getZonas();
    this.getAreas();
    this.getPrestadores();
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
