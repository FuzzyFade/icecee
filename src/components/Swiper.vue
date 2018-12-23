<template>
    <div class="wrapper">
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
        </div>
</template>

<script>
    export default {
        name: "Hoswiper",
        data () {
            return {
                swiperOption:{
                    pagination : {
                        el:'.swiper-pagination',
                        type:'progressbar',
                        // progressbarOpposite:true,
                    },
                    loop : true,
                    autoplay:true,
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-progressbar
        height 1rem
        position absolute
        top 8.75rem
    .wrapper >>> .swiper-pagination-progressbar-fill
        background-color #f7f0f5
    .wrapper
        overflow hidden
        width 100%
        height 0
        padding-bottom 9rem
        background-color #ebf5f7
        .loopic
            width 100%
            height 9rem
</style>