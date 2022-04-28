<template>
    <div>
        <Navbar></Navbar>
        <FormBuscarPqrs></FormBuscarPqrs>
        <Footer></Footer>
    </div>
</template>
<script>
import FormBuscarPqrs from '@/components/prestadores/FormBuscarPqrs';
import Navbar from '@/components/prestadores/Navbar';
import Footer from '@/components/prestadores/Footer';
export default {
 name: 'BuscarPqrs',
   components: {
    FormBuscarPqrs,
    Navbar,
    Footer
  }
}
</script>
<style>
</style>