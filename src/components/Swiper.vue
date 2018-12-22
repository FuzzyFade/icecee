<template>
    <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide>
            <div class="loopic" style="background-color: aquamarine"></div>
        </swiper-slide>
        <swiper-slide>
            <div class="loopic" style="background-color: #ff8687"></div>
        </swiper-slide>
        <swiper-slide>
            <div class="loopic" style="background-color: #ffdf8e"></div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
        <!--<div class="swiper-button-next" slot="button-next"></div>-->
        <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
</template>

<script>
    export default {
        name: "Hoswiper",
        data () {
            return {
                swiperOption:{
                    pageination:'.swiper-pagination',
                    loop:true
                }

            }
        }
    }
</script>

<style lang="stylus" scoped>
    .loopic
        width 100%
        height 9rem
</style>