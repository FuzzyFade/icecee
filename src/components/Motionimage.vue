<template>
    <v-app>
        <v-toolbar
            dark
            clipped-left
            height="60px"
            color="#2e2e2e"
        >
            <v-btn icon>
                <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-toolbar-title class="title">
                登录
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <div style="width: 100%;height: 100%">
            <div data-relative-input="true" ref="scene">
                <div data-depth="0.2">
                    <v-flex xs12 sm6 offset-sm3>
                        <v-card>
                            <v-img
                                    src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                                    aspect-ratio="2.75"
                            ></v-img>

                            <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                                    <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                                </div>
                            </v-card-title>

                            <v-card-actions>
                                <v-btn flat color="orange">Share</v-btn>
                                <v-btn flat color="orange">Explore</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </div>
                <div data-depth="0.5">
                    <v-btn color="green" dark round>Success</v-btn>
                </div>
            </div>
        </div>
    </v-app>
</template>

<script>
    import Parallax from 'parallax-js'
    export default {
        name: "Motionimage",

        mounted() {
            var para = new Parallax(this.$refs.scene,{
                pointerEvents : true
            });
        }
    }
</script>

<style lang="stylus" scoped>
    $color-pack = false
    @import '~vuetify/src/stylus/main'
</style>