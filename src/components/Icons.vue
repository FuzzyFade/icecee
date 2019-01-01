<template>
    <swiper :options="swiperOption">
        <swiper-slide v-for="page of pages">
            <div class="icons">
                <div class="icon"
                     v-for="item of page">
                    <div class="picture">
                        <div class="iconfont content"
                             v-html="item.icon"
                             :style="{color : item.color}">
                        </div>
                        <div class="text_icon">{{item.name}}</div>
                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>
    export default {
        name: "HoIcons",
        data() {
            return {
                icon_list:[{
                    icon :'&#xe611',
                    name : '房产',
                    color : '#37ddff',
                }, {
                    icon : '&#xe612',
                    name : '更多',
                    color : '#57aeff',
                }, {
                    icon : '&#xe613',
                    name : '钱包',
                    color : '#97ffbc',
                }, {
                    icon : '&#xe614',
                    name : '装修',
                    color : '#ff9597',
                }, {
                    icon : '&#xe615',
                    name : '账单',
                    color : '#556768',
                }, {
                    icon : '&#xe616',
                    name : '活动',
                    color : '#bb8aff',
                }, {
                    icon : '&#xe617',
                    name : '转账',
                    color : '#ce4ba1',
                }, {
                    icon : '&#xe618',
                    name : '租赁',
                    color : '#ffe159',
                }, {
                    icon : '&#xe613',
                    name : '不知道',
                    color : '#2e4eb6',
                }, {
                    icon : '&#xe613',
                    name : '不知2323232道',
                    color : '#2e4eb6',
                }],
                swiperOption: {

                }
            }
        },
        computed: {
            pages () {
                const pages = [];
                this.icon_list.forEach((it, index) => {
                    const page = Math.floor(index / 8);
                    if(!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(it)
                });
                return pages
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .icons
        overflow hidden
        height 0
        padding-bottom 50%
        background-color: #fff
        .icon
            overflow hidden
            position relative
            float left
            width 25%
            height 25%
            padding-bottom 25%
            .picture
                text-align center
                .content
                    height 100%
                    font-size 2rem
                    margin-top 1rem
                    margin-bottom .6rem
                    color #2fa8ff
                .text_icon
                    overflow hidden
                    white-space nowrap
                    text-overflow ellipsis
                    font-size .9rem
                    text-align center
                    position relative
                    color #5d5d5d

</style>