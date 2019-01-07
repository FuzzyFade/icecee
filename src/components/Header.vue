<template>
    <v-navigation-drawer>

    </v-navigation-drawer>
    <v-toolbar dark>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>
            Icecee
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn icon >
                <v-icon>search</v-icon>
            </v-btn>
            <v-menu offset-y left>
                <v-btn icon slot="activator">
                    <v-icon>more_vert</v-icon>
                </v-btn>
                <v-list>
                    <v-list-tile
                        v-for="(item,index) in items"
                        :key="index"
                        @click=""
                    >
                        <v-list-tile-title>
                            {{item.con}}
                        </v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar-items>
    </v-toolbar>
    <!--<v-navigation-drawer temporary>-->
        <!--<v-list>-->
            <!--23333-->
        <!--</v-list>-->
    <!--</v-navigation-drawer>-->
    <!--<div class="header">-->
        <!--<div class="header_left">-->
            <!--<div class="iconfont back_icon">&#xe624;</div>-->
        <!--</div>-->
        <!--<div class="header_input">-->
            <!--<span class="iconfont">&#xe632;</span>-->
            <!--<span> Search your need</span>-->
        <!--</div>-->
        <!--<div class="header_right">-->
            <!--City-->
            <!--<span class="iconfont arrow_icon">&#xeb6d;</span>-->
        <!--</div>-->
    <!--</div>-->
</template>

<script>
    export default {
        name: "Hoheader",
        data: () => ({
            items : [{
                con : 'China',
            }, {
                con : 'theus',
            }, {
                con : 'meili',
            }],

            drawer: null
        })
    }
</script>

<style lang="stylus" scoped>
    @import '~vuetify/src/stylus/main'
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
                font-size 1.15rem
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
            .arrow_icon
                font-size .4rem
</style>