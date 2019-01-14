<template>
    <v-app dark>
        <v-navigation-drawer
                v-model="drawer"
                dark
                app
                clipped
        >
            <v-list>
                <v-list-tile class="title">
                    Lambda
                </v-list-tile>
                <v-list-tile class="title">
                    Lambda
                </v-list-tile>
                <v-list-tile class="title">
                    Lambda
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar
                dark
                clipped-left
                height="60px"
                color="blue"
        >
            <v-toolbar-side-icon
                    @click.stop="drawer = !drawer"
            ></v-toolbar-side-icon>
            <v-toolbar-title>
                主页
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
            <v-toolbar-items>
                <v-menu
                        offset-y
                        transition="slide-y-transition"
                        left
                >
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

        <v-content>
            <v-container style="padding: 0">
                <ho-swiper></ho-swiper>
                <ho-icons></ho-icons>
            </v-container>
        </v-content>
    </v-app>
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
    data: () => ({
        drawer:false,
        items: [{
            con : '账户信息',
        }, {
            con : '安全登出',
        }],
    })
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  $color-pack = false
  @import '~vuetify/src/stylus/main'
</style>
