<template>
    <div class="container-fluid">
      <div class="row p-4">
        <div class="col-md-4">
            <label>Tipo de documento</label>
            <select class="form-control form-control-sm">
                <option value="">CC</option>
            </select>
        </div>
        <div class="col-md-5">
            <label>Documento</label>
            <input type="text" class="form-control form-control-sm">
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'FormContraUsuario'
}
</script>
