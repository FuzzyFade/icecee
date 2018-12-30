<template>
    <div class="icons">
        <div class="icon">
            <div class="picture">
                <div class="iconfont lib">&#xe612;</div>
            </div>
            <p class="text_icon">更多</p>
        </div>
        <div class="icon">
            <div class="picture">
                <div class="iconfont lib">&#xe611;</div>
            </div>
            <p class="text_icon">房子</p>
        </div>
        <div class="icon">
            <div class="picture">
                <div class="iconfont lib">&#xe613;</div>
            </div>
            <p class="text_icon">更多</p>
        </div>
        <div class="icon">
            <div class="picture">
                <div class="iconfont lib">&#xe614;</div>
            </div>
            <p class="text_icon">更多</p>
        </div>
        <div class="icon">
            <div class="picture">
                <div class="iconfont lib">&#xe615;</div>
            </div>
            <p class="text_icon">更多</p>
        </div>
        <div class="icon">
            <div class="picture">
                <div class="iconfont lib">&#xe616;</div>
            </div>
            <p class="text_icon">更多</p>
        </div>
        <div class="icon">
            <div class="picture">
                <div class="iconfont lib">&#xe617;</div>
            </div>
            <p class="text_icon">更多</p>
        </div>
        <div class="icon">
            <div class="picture">
                <div class="iconfont lib">&#xe618;</div>
            </div>
            <p class="text_icon">更多</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HoIcons"
    }
</script>

<style lang="stylus" scoped>
    .icons
        overflow hidden
        height 0
        padding-bottom 50%
        background-color: #8f9192
        .icon
            position relative
            overflow hidden
            float left
            width 25%
            padding-bottom 25%
            .text_icon
                position absolute
                left 0
                right 0
                bottom .8rem
                text-align center
                margin 0
                color #fff9fb
                font-size .8rem
            .picture
                position relative
                height 0
                padding-bottom 0
                text-align center
                .lib
                    position absolute
                    top .8rem
                    left 0
                    right 0
                    font-size 2.1rem
                    color #fff2ed
</style>