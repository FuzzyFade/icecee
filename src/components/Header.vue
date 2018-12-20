<template>
    <div class="header">
        <div class="header_left">
            <div class="iconfont back_icon">&#xe624;</div>
        </div>
        <div class="header_input">
            <span class="iconfont">&#xe632;</span>
            <span> Search your need</span>
        </div>
        <div class="header_right">
            City
            <span class="iconfont">&#xeb6d;</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Hoheader"
    }
</script>

<style lang="stylus" scoped>
    .header
        display flex
        line-height 3.12rem
        width 100%
        color #fff
        background-color #2e2e2e
        .header_left
            width 12%
            float left
            .back_icon
                text-align center
                font-size 1.1rem
        .header_input
            flex 1
            float left
            height 2rem
            line-height 2rem
            margin-top .5rem
            margin-bottom .5rem
            border-radius 3rem
            padding-left .6rem
            color #6e6e6e
            background-color #ffffff
        .header_right
            text-align: center
            width 25%
            float right
</style>