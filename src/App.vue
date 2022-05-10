
<template>
  <div id="app">
    <transition>
        <keep-alive>
       <router-view :key="$route.fullPath">
         </router-view>
        </keep-alive>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
