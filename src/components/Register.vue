<template>
    <v-app>
        <v-card
                class="mx-auto"
                color="#2e2e2e"
                dark
                min-width="400"
        >
        <v-content>
            <v-container>
                <v-card-title>
                    <v-icon
                            large
                            left
                    >
                        mdi-twitter
                    </v-icon>
                    <span class="title font-weight-light">注册成为新用户</span>
                </v-card-title>
                <v-divider dark></v-divider>
                <v-form @submit.prevent="submit">
                    <v-text-field
                            prepend-icon="person"
                            v-model="account"
                            :rules="[
                                check_comment.empty_if,
                                check_comment.account_same(names, account)
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
                                check_comment.empty_if,
                                check_comment.password_short,
                                check_comment.password_long,
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
                                check_comment.empty_if,
                                check_comment.password_same(repw, pw),
                            ]"
                            :type="show1 ? 'text' : 'password'"
                            color="white"
                            label="确认密码"
                            counter
                            required
                    ></v-text-field>

                    <v-text-field
                            prepend-icon="mdi-chat"
                            v-model="invite"
                            :rules="[
                                check_comment.empty_if,
                            ]"
                            color="white"
                            label="邀请码"
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
                            《不平等条约》
                        </a>
                    </div>
                </v-checkbox>
                <div>
                    <v-divider dark></v-divider>
                    <v-flex class="text-xs-center" style="padding-top: 1rem;">
                        <v-btn large
                               color="blue"
                               outline
                               block
                               round
                               @click="change('/login')"
                        >
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
        </v-card>
    </v-app>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Register",

        data: () => ({
            names: ["bob","daer"], //已注册的用户名

            account: '', //账户
            pw: '', //密码
            repw: '', //确认密码
            invite: '', //邀请码

            show1: false,
            agree_raw: false,

            check_comment: {
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
                if(!this.account || !this.pw || !this.repw || !this.invite || !this.agree_raw){
                    return false
                }else if(this.pw != this.repw) {
                    return false
                }else if(this.pw.length <= 6) {
                    return false
                }else if(this.pw.length >= 16) {
                    return false
                }else {
                    return true
                }
            }
        },

        methods: {
            change(n) {
                this.$router.push({path:n})
            },
            register() {
                this.$axios({
                    method:'post',
                    url:'/api/',
                    data:{
                        name:this.account,
                        password:this.pw,
                    }
                }).then((res)=>{
                    console.log(res.data)
                })
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