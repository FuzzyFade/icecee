<template>
  <div>
    <hoheader></hoheader>
    <homeswiper></homeswiper>
  </div>
</template>

<script>
  import Hoheader from "@/components/Header";
  import Homeswiper from '@/components/Swiper.vue';
  export default {
    name: 'Homepage',
    components: {
      Hoheader,
      Homeswiper,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
