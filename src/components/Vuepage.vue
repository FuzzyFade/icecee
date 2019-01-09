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
                scroll-off-screen
        >
            <v-toolbar-side-icon
                    @click.stop="drawer = !drawer"
            ></v-toolbar-side-icon>
            <v-toolbar-title>
                Icecee
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
            <v-container>
                <v-form>
                    <v-text-field
                            v-model="account"
                            counter maxlength="10"
                            color="white"
                            label="Account"
                            hint="该用户名被用过了"
                    ></v-text-field>
                    <v-text-field
                            v-model="pw"
                            counter
                            maxlength="18"
                            color="white"
                            label="Password"
                    ></v-text-field>
                    <v-text-field
                            v-model="repw"
                            counter
                            maxlength="18"
                            color="white"
                            label="Password reinput"
                    ></v-text-field>
                </v-form>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: "Vuepage",
        data: () => ({
            items: [{
                con : '账户信息',
            }, {
                con : '安全登出',
            }],

            account: null,
            pw: null,
            repw: null,

            drawer: false,
        }),
        computed: {
            from () {
                return {
                    account: this.account,
                    pw: this.pw,
                    repw: this.repw,
                }
            }
        }

    }
</script>

<style lang="stylus" scoped>
    @import '~vuetify/src/stylus/main'
    .input
        background none
        border none
</style>