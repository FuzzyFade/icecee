<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Homepage from './components/Homepage.vue'
  import VueHopage from './components/Vuepage.vue'
  export default {
    name: 'App',
    components: {
      Homepage,
      VueHopage
    }
  }
</script>

<style>
  #app {
    font-family: 'PingFang SC', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
  }
</style>