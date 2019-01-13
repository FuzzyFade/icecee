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
                <v-form @submit.prevent="submit">
                    <v-text-field
                            prepend-icon="person"
                            v-model="account"
                            :rules="[
                                rules.empty_if,
                                rules.account_same(names, account),
                            ]"
                            color="white"
                            label="用户名"
                            hint="用户名不可修改哦"
                            counter maxlength="12"
                            required
                    ></v-text-field>

                    <v-text-field
                            prepend-icon="lock"
                            :append-icon="show1 ? 'visibility_off' : 'visibility' "
                            @click:append="show1 =! show1"
                            v-model="pw"
                            :rules="[
                                rules.empty_if,
                                rules.password_short,
                                rules.password_long,
                            ]"
                            :type="show1 ? 'text' : 'password'"
                            color="white"
                            label="密码"
                            hint="6~16个字符，区分大小写"
                            counter
                            required
                    ></v-text-field>

                    <v-text-field
                            prepend-icon="lock"
                            v-model="repw"
                            :rules="[
                                rules.empty_if,
                                rules.password_same(repw, pw),
                            ]"
                            :type="show1 ? 'text' : 'password'"
                            color="white"
                            label="确认密码"
                            counter
                            required
                    ></v-text-field>
                </v-form>
                <v-checkbox
                        v-model="agree_raw"
                        color="blue"
                >
                    <div slot="label" style="font-weight:bold">
                        我已同意
                        <a href="" target="_blank" class="link_text">
                            《233333333333》
                        </a>
                    </div>
                </v-checkbox>
                <div>
                    <v-flex class="text-xs-center" style="padding-top: 2rem;">
                        <v-btn large
                               color="blue"
                               outline
                               block
                               round>
                            <span>登录</span>
                        </v-btn>
                        <v-btn
                                large
                                color="blue"
                                block
                                round
                                :disabled="!formIf"
                                type="submit"
                        >
                            <span>注册</span>
                        </v-btn>
                    </v-flex>
                </div>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Login",

        data: () => ({              //信息
            items: [{
                con : '账户信息',
            }, {
                con : '安全登出',
            }],

            names:["bob","daer"],   //已注册的用户名
            account: null,
            pw: null,
            repw: null,
            show1:false,

            drawer: false,
            agree_raw: false,

            rules: {
                empty_if: value => !!value || '该选项不能为空',
                account_same: (list, account) => !list.includes(account) || '该用户已存在',
                password_same: (repw, pw) => repw === pw || '前后密码不一致',
                password_short: value => (value + 1).length >= 7 || '密码长度要大于6',
                password_long: value => (value + 1).length <= 17 || '密码过长',
            },
        }),

        computed: {
            form () {
                return {
                    account: this.account,
                    pw: this.pw,
                    repw: this.repw,
                }
            },
            formIf () {
                return(
                      this.agree_raw
                )
            }
        },

        method: {
            register() {

            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~vuetify/src/stylus/main'
    .link_text
        text-decoration none
        color #4396ec
</style>