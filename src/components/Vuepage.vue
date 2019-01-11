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
                注册
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
                            :rules="[
                                () => !!account || '该选项不能为空',
                                () => !this.names.includes(this.account) || '该用户已存在',
                            ]"
                            :error-messages="errorMessage"
                            counter maxlength="10"
                            color="white"
                            label="Account"
                            required
                    ></v-text-field>
                    <v-text-field
                            :append-icon="show1 ? 'visibility_off' : 'visibility' "
                            @click:append="show1 =! show1"
                            v-model="pw"
                            :rules="[
                                () => !!pw || '该选项不能为空',
                            ]"
                            :error-messages="errorMessage"
                            :type="show1 ? 'text' : 'password'"
                            color="white"
                            label="Password"
                            required
                    ></v-text-field>
                    <v-text-field
                            v-model="repw"
                            :rules="[
                                () => !!repw || '该选项不能为空',
                                () => repw === pw || '前后密码不一致',
                            ]"
                            :error-messages="errorMessage"
                            :type="show1 ? 'text' : 'password'"
                            color="white"
                            label="Password reinput"
                            required
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

            errorMessage:[],
            names:["bob","daer"],   //去复用户名
            account: null,
            pw: null,
            repw: null,
            show1:false,

            drawer: false,
        }),

        computed: {
            form () {
                return {
                    account: this.account,
                    pw: this.pw,
                    repw: this.repw,
                }
            },
        },

        watch: {
            chec() {
                this.errorMessage = ''
            }
        },

        method: {
        }

    }
</script>

<style lang="stylus" scoped>
    @import '~vuetify/src/stylus/main'
    .input
        background none
        border none
</style>