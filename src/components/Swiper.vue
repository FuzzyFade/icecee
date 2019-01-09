<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="pic of pic_list":key="pic.id">
                <div class="loopic" :style="{background : pic.color}"></div>
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
                pic_list:[{
                    id:"001",
                    them : "blue",
                    color : "#97ffbc"
                }, {
                    id:"002",
                    them : "yellow",
                    color : "#ffda62"
                }, {
                    id:"003",
                    them : "red",
                    color : "#ff5a5d"
                }, {
                    id:"004",
                    them : "back",
                    color : "#4d4547"
                }],
                swiperOption:{
                    grabCursor: true,
                    speed: 600,
                    loop : true,
                    pagination : {
                        el: '.swiper-pagination',
                        type: 'progressbar',
                    },
                    autoplay : {
                        disableOnInteraction: false,
                        delay : 3500,
                    }
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-progressbar
        height 1rem
        position flex
        top 11.7rem
    .wrapper >>> .swiper-pagination-progressbar-fill
        background-color #f7f4f4
    .wrapper
        overflow hidden
        width 100%
        height 0
        padding-bottom 12rem
        background-color #ebf5f7
        .loopic
            width 100%
            height 12rem
</style>