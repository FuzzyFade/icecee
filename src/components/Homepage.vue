<template>
  <div>
    <ho-header></ho-header>
    <ho-swiper></ho-swiper>
    <ho-icons></ho-icons>
   </div>
</template>

<script>
  import HoHeader from "@/components/Header";
  import HoSwiper from '@/components/Swiper.vue';
  import HoIcons from '@/components/Icons.vue';
  export default {
    name: 'Homepage',
    components: {
      HoHeader,
      HoSwiper,
      HoIcons,
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  $color-pack = false
  @import '~vuetify/src/stylus/main'
</style>
