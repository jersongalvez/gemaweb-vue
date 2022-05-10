<template>
    <div class="FormPqrs">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h4 class="push-left text-uppercase mt-4 pull-rigth">Pijaos Salud EPSI</h4>
          </div>
          <div class="col-md-3 offset-md-3">
            <!-- <img src="<?= base_url(); ?>/img/logo.png"  width="60px;"> -->
            <router-link class="btn rounded-pill btn-primary btn-sm mt-4 text-uppercase" to="/buscarpqrs">
              Consulta tu pqrd
            </router-link>
          </div>
        </div>
        <hr>
        <h3>Este formulario está destinado para presentar PQRD  relacionados con la prestación de servicios de salud.</h3>
        <div class="alert alert-success mt-3" role="alert">
          Los campos con * son de diligenciamiento obligatorio
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="was-validated">
              <div class="form-group">
                <label>Tipo de Solicitud</label>
                <select
                  class="form-control form-control-sm text-uppercase"
                  required aria-label=""
                  id="pqrs"
                  v-model="pqrs"
                >
                  <option value="">seleccione</option>
                  <option value="PETICION">Petición</option>
                  <option value="QUEJA">Queja</option>
                  <option value="RECLAMO">Reclamo</option>
                  <option value="SUGERENCIA">Sugerencia</option>
                  <option value="FELICITACION">Felicitación</option>
                </select>
                <div class="invalid-feedback">Ingrese el tipo de petición</div>
              </div>
            </div>
          </div>
        </div>
        <p> ¿ Es usted el paciente o afectado ? </p>
        <div class="was-validated">
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="paciente_rad"
              name="paciente_rad"
              value="1" required
              v-model="paciente_rad"
            >
            <label class="form-check-label" for="validationFormCheck2">Si</label>
          </div>
          <div class="form-check mb-3">
            <input
              type="radio"
              class="form-check-input"
              id="flexRadioDefault2"
              name="paciente_rad"
              value="0"
              required
              v-model="paciente_rad"
            >
            <label class="form-check-label" for="validationFormCheck3">No</label>
          <div class="invalid-feedback">Seleccione si usted es el paciente afectado</div>
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
                        @change="mostrarExpedicion"
                      >
                       <option value="">SELECCIONE</option>
                       <option
                         v-for="(tpdocumento, index) in tpdocumentos"
                         :key="index"
                         v-bind:value="{ id: tpdocumento.TIP_DOCUMENTO, text: tpdocumento.NOM_DOCUMENTO }"
                       >
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
             <div class="col-md-4 fexpedicion"  hidden>
                 <div class="form-group">
                   <label>Expedición de su documento </label>
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
             <label>Segundo Apellido</label>
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
                @blur.prevent="calcularEdad"
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
                   <input
                     class="form-check-input"
                     type="radio"
                     name="inlineRadioOptions"
                     id="sexo"
                     value="M"
                     v-model="sexo"
                   >
                   <label class="form-check-label" for="inlineRadio1">Masculino</label>
                 </div>
                   <div class="form-check form-check-inline">
                     <input
                       class="form-check-input"
                       type="radio"
                       name="inlineRadioOptions"
                       id="sexo"
                       value="F"
                       v-model="sexo"
                     >
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
                       <option
                         v-for="(poblacionespecial, index) in poblacionespeciales"
                         :key="index"
                         v-bind:value="{id: poblacionespecial.CONSECUTIVO, text: poblacionespecial.NOMPOBLACION}"
                       >
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
                       @change="mostrarResguardo"
                     >
                       <option value="">SELECCIONE</option>
                       <option
                         v-for="(grupoetnico, index) in grupoetnicos"
                         :key="index"
                         v-bind:value="{id: grupoetnico.CONSECUTIVO, text: grupoetnico.NOMBRE }"
                       >
                         {{ grupoetnico.NOMBRE }}
                       </option>
                     </select>
                   <div class="invalid-feedback">Ingrese el grupo étnico</div>
                 </div>
               </div>
             </div>
             <div class="col-md-3" id="cont-resguardo" hidden>
               <label>Resguardo</label>
               <input
                 type="text"
                 class="form-control"
                 id="resguardo"
                 v-model="resguardo"
               >
             </div>
             <div class="col-md-3" id="cont-comunidad" hidden>
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
                    <option
                      v-for="(departamento, index) in departamentos"
                      :key="index"
                      v-bind:value="{id: departamento.COD_DEPARTAMENTO, text: departamento.NOM_DEPARTAMENTO }"
                    >
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
                    <option
                      v-for="(municipio, index) in municipios"
                      :key="index"
                      v-bind:value="{id: municipio.COD_CIUDAD, text: municipio.NOM_CIUDAD }"
                    >
                      {{municipio.NOM_CIUDAD }}
                    </option>
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
                    <option
                      v-for="(zona, index) in zonas"
                      :key="index"
                      v-bind:value="{id: zona.COD_ZONA, text: zona.NOM_ZONA }"
                    >
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
            <h3 class="mt-2">Detalle de la petición</h3>
            <hr>
            <p>Permítanos conocer más sobre  la IPS o área de la EPSI  a la cual quiere formular su PQRD</p>
            <br>
            <div class="row">
              <div class="col-md-3">
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      value="ips"
                      v-model="checkips"
                      @change="validarIps"
                    />
                      <label class="form-check-label">
                        IPS
                      </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      value="eps"
                      v-model="ckeckeps"
                      @change="validarEps"
                      />
                        <label class="form-check-label" for="flexRadioDefault2">
                          Pijaos Salud
                        </label>
                    </div>
                </div>
              </div>
              <div class="col-md-9 eps" hidden>
                <div class="form-group">
                  <label>Área  a la que remite la PQRD</label>
                  <select
                    id="area"
                    class="form-control"
                    required aria-label=""
                    v-model="area"
                  >
                    <option value="">SELECCIONE</option>
                    <option
                      v-for="(area, index) in areas"
                      :key="index"
                      v-bind:value="{ id: area.COD_AREA, text: area.NOM_AREA }"
                    >
                      {{area.NOM_AREA}}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-9 ips" hidden>
                <div class="form-group">
                  <label>Prestador de servicio</label>
                  <select
                    id="ips"
                    class="form-control"
                    required aria-label=""
                    v-model="prestador"
                  >
                    <option value="">SELECCIONE</option>
                    <option
                      v-for="(prestador, index) in prestadores"
                      :key="index"
                      v-bind:value="{id: prestador.NIT_PRESTADOR, text: prestador.NOM_PRESTADOR }"
                    >
                      {{prestador.NOM_PRESTADOR}}
                    </option>
                  </select>
                </div>
              </div>
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
                  <label>Adjuntar soporte</label>
                  <input
                    type="file"
                    class="form-control-file"
                    id="soporte"
                  >
                </div>
              </div>
            </div>
              <p> <span class=""> <strong> AUTORIZACIÓN PREVIA PARA EL TRATAMIENTO DE DATOS PERSONALES Y DATOS PERSONALES SENSIBLES </strong></span>
                Manifiesto de manera clara, expresa, libre, inequívoca y espontánea que le otorgo a PIJAOS SALUD EPSI en su calidad de RESPONSABLE
                del tratamiento de mis datos personales, mi consentimiento previo para recolectar, almacenar, usar, circular, suprimir, reportar y
                en general para tratar los DATOS PERSONALES, DATOS PERSONALES SENSIBLES y demás información susceptible de tratamiento, registrada
                a mi nombre y/o de mi grupo familiar en sus Bases de Datos, con la finalidad de realizar las actividades propias del aseguramiento
                en salud y en los términos previstos en su POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES  disponible en su página web www.pijaossalud.com
                a través del link <a target="_blank" href=" https://www.pijaossalud.com/tratamiento-de-datos-personales/">tratamiento de datos personales</a> todo lo cual conforme
                lo establecido en la Ley Estatutaria 1581 de 2012 y demás normas que la sustituyan, adicionen, reglamenten, complementen o modifiquen. La
                presente autorización la he suministrado de forma voluntaria. Al hacer clic en el botón ENVIAR, usted acepta la remisión de la
                PQRD a Pijaos Salud EPSI. En la opción SEGUIMIENTO DE PQRD podrá verificar el estado de la respuesta.
              </p>
            <div class="was-validated">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="no"
                  id="terminos"
                  name="terminos"
                  required
                  v-model="terminos"
                  @change="aceptarTerminos"
                >
                <label class="form-check-label" for="flexCheckDefault">
                  Acepto los términos y condiciones
                </label>
              <div class="invalid-feedback">Acepta los términos y condiciones</div>
            </div>
          </div>
            <button class="btn  btn-primary btn-lg checkterminos mt-5" @click.prevent="crearPqrs()" id="enviar" disabled>Enviar</button>
            <!-- <button class="btn btn-outline-primary btn-lg mt-5" onclick="cargarArchivoDrive();" type="submit">Borrar</button> -->
          </div>
          <div class="modal" tabindex="-1" id="modal-notificacion">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title text-success text-uppercase">Se ha creado correctamente</h5>
                    <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                           x
                         </button>
                    -->
                </div>
                <div class="modal-body">
                  <p class="text-center msjsuccess">

                  </p>
                </div>
                <div class="modal-footer text-capitalize">
                  <i class="fas fa-home"></i><small>Pijaos salud EPS - Indigena</small>
                </div>
              </div>
            </div>
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
     pqrs: '',
     paciente_rad: '',
     tpdocumento: '',
     documento: '',
     expedicion: '',
     pnombre: '',
     snombre: '',
     papellido: '',
     sapellido: '',
     nacimiento: '',
     edad: '',
     sexo: '',
     poblacionespecial: '',
     grupoetnico: '',
     resguardo: '',
     comunidad: '',
     pais: '',
     departamento: '',
     municipio: '',
     zona: '',
     direccion: '',
     celular: '',
     telefono: '',
     correo: '',
     area: '',
     prestador: '',
     descripcion: '',
     terminos: '',
     checkeps: '',
     checkips: ''

    }
  },
  methods: {
    //METODOS QUE SE ENCARGAN DE LISTAR EN LOS INPUTS LA INFORMACION
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
    mostrarExpedicion() {
      if (this.tpdocumento.id == "CC") {
        $(".fexpedicion").attr("hidden", false);
      }
      else {
        $(".fexpedicion").attr("hidden", true);
        this.expedicion = "";
      }
    },
    buscarAfiliado: function () {
      let tpdocumento = this.tpdocumento.id,
      documento = this.documento,
      url = baseurl + "/buscar/"+tpdocumento+"/"+documento ;
      var spinner = document.getElementById("loading");
      spinner.removeAttribute("hidden");

      this.axios.get(url,)
      .then((response) => {
        spinner.setAttribute("hidden", true);
        let fecha = response.data.usuario[0].FEC_NACIMIENTO.split(" ");
        this.pnombre = response.data.usuario[0].PRI_NOMBRE;
        this.snombre = response.data.usuario[0].NOM_NOMBRE;
        this.papellido = response.data.usuario[0].PRI_APELLIDO;
        this.sapellido = response.data.usuario[0].SEG_APELLIDO;
        this.nacimiento = fecha[0];
        this.sexo = response.data.usuario[0].SEXO;
      })
      .catch((response) => {
      });
    },
    calcularEdad: function () {
      let fecha = document.getElementById("nacimiento").value;
      let hoy = new Date();
      let cumpleanos =  new Date(fecha);
      let edad = hoy.getFullYear() - cumpleanos.getFullYear();
      let m = hoy.getMonth() - cumpleanos.getMonth();
        if(m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
          edad --;
        }
        this.edad = edad;
    },
    mostrarResguardo: function () {
      if(this.grupoetnico.id == 4) {
        $("#cont-resguardo").attr("hidden", false);
        $("#cont-comunidad").attr("hidden", false);
      }else {
         $("#cont-resguardo").attr("hidden", true);
         $("#cont-comunidad").attr("hidden", true);
      }
    },
    aceptarTerminos: function() {
      if(this.terminos == true){
        $("#enviar").attr("disabled", false);
      }
      else {
        $("#enviar").attr("disabled", true);
      }
    },
    validarIps: function () {
      this.checkeps  = "";
      $(".eps").attr("hidden", true);
      $(".ips").attr("hidden", false);
    },
    validarEps: function () {
      this.checkips  = "";
      $(".ips").attr("hidden", true);
      $(".eps").attr("hidden", false);
    },
    enviarEmail: function () {
      let url1 = baseurl + "/notificaciones";
      this.axios.post(url1, {
          pqrs: this.pqrs,
          nombre: this.pnombre + ' ' + this.snombre + ' ' + this.papellido + ' ' + this.sapellido,
          tpdocumento: this.tpdocumento.id,
          documento: this.documento,
          telefono: this.telefono + ' - ' +this.celular,
          correo: this.correo,
          mensaje: this.descripcion
      })
      .then(response => {

      })
    },
    crearPqrs: function () {
      let url = baseurl + "/crearpqrs",
      //RECUPERA TODO LO QUE VIENE EN EL EL INPUT FILE DEL DOCUMENTO
      archivo = document.getElementById("soporte"),
      formdata = new FormData();
      formdata.append('archivo', archivo.files[0]);
      formdata.append('paciente_rad', this.paciente_rad);
      formdata.append('tpdocumento', this.tpdocumento.id);
      formdata.append('documento', this.documento);
      formdata.append('expedicion', this.expedicion);
      formdata.append('pnombre', this.pnombre);
      formdata.append('snombre', this.snombre);
      formdata.append('papellido', this.papellido);
      formdata.append('sapellido', this.sapellido);
      formdata.append('nacimiento', this.nacimiento);
      formdata.append('edad', this.edad);
      formdata.append('sexo', this.sexo);
      formdata.append('poblacionespecial', this.poblacionespecial.id);
      formdata.append('grupoetnico', this.grupoetnico.id);
      formdata.append('resguardo', this.resguardo);
      formdata.append('comunidad', this.comunidad);
      formdata.append('pais', this.pais);
      formdata.append('departamento', this.departamento.id);
      formdata.append('municipio', this.municipio.id);
      formdata.append('zona', this.zona.id);
      formdata.append('direccion', this.direccion);
      formdata.append('celular', this.celular);
      formdata.append('telefono', this.telefono);
      formdata.append('correo', this.correo);
      formdata.append('area', this.area.text);
      formdata.append('ips', this.prestador.id);
      formdata.append('descripcion', this.descripcion);
      this.enviarEmail();
      $("#enviar").attr("disabled", true);
      //VALIDA QUE LOS CAMPOS REQUERIDOS NO ESTEN VACIOS
      if(this.sexo == "") {
        document.getElementById("paciente_rad").focus();
      }
      else if(this.tpdocumento ==  ""){
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
        this.axios.post(url, formdata, {'content-type': 'multipart/form-data'})
        .then(function (response) {

          let respuesta = 'Solicitud registrada con exito su solicitud ha sido de creada exitosamente con el radicado N° <br><br> <span class="text-primary h2">'+response.data.consecutivo+'</span>';
          $(".msjsuccess").html(respuesta);
          $("#modal-notificacion").modal("show");
          $("#enviar").attr("disabled", false);
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
    this.pais = "COLOMBIA";
  }
}
</script>
<style >

</style>
