<template>
    <v-app dark>
        <v-toolbar
                dark
                clipped-left
                height="60px"
                color="blue"
        >
            <v-btn icon>
                <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-toolbar-title class="title">
                登录
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-content>
            <v-container>
                <v-form @submit.prevent="submit">
                    <v-text-field
                            prepend-icon="person"
                            v-model="account"
                            :rules="[
                                check_comment.empty_if,
                            ]"
                            color="white"
                            label="用户名"
                            required
                    ></v-text-field>

                    <v-text-field
                            prepend-icon="lock"
                            v-model="pw"
                            :rules="[
                                check_comment.empty_if,
                            ]"
                            :type="'password'"
                            color="white"
                            label="密码"
                            required
                    ></v-text-field>
                </v-form>
                <div>
                    <v-flex class="text-xs-center" style="padding-top: 2rem;">
                        <v-btn large
                               color="blue"
                               block
                               round
                               :disabled="!formIf"
                               type="submit"
                        >
                            <span>登录</span>
                        </v-btn>
                        <v-btn
                                large
                                color="blue"
                                outline
                                block
                                round
                                @click="change('/register')"
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
            names: ["bob","daer"],   //已注册的用户名

            account: '',
            pw: '',

            check_comment: {
                empty_if: value => !!value || '该选项不能为空',
            },
        }),

        computed: {
            form () {
                return {
                    account: this.account,
                    pw: this.pw,
                }
            },
            formIf () {
                return(
                    this.account && this.pw
                )
            }
        },

        methods: {
            change(n) {
                this.$router.push({path:n})
            },

            login() {
                axios.post()
            },
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~vuetify/src/stylus/main'
    .link_text
        text-decoration none
        color #4396ec
</style>