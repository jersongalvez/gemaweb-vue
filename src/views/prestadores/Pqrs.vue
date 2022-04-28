<template>
    <div>
        <Navbar></Navbar>
        <FormPqrs></FormPqrs>
        <Footer></Footer>
    </div>
</template>
<script>
import FormPqrs from '@/components/prestadores/FormPqrs';
import Navbar from '@/components/prestadores/Navbar';
import Footer from '@/components/prestadores/Footer';
export default {
 name: 'Pqrs',
   components: {
    FormPqrs,
    Navbar,
    Footer
  }
}
</script>
<style>
</style>