<template>
    <div class="w-full h-screen bg-black   relative sm:hidden sm:mx-[19px]">
        <div class="h-[60px]  w-full text-gray-400    px-2 flex justify-between items-center">
            <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
            <p class=" text-[17px]"> 设定登录密码 </p>
            <div class="flex flex-col pt-2 text-center mr-5 items-center whitespace-nowrap ">
                &nbsp;&nbsp;&nbsp;
            </div>
        </div>
        <div class=" sm:px-0 py-5 w-full">
            <form @click.prevent>
                <div class="pt-8 bg-[#13151b] text-base">
                    <div
                        class=" formDiv border-b border-solid border-[#5a5b5d]   relative overflow-hidden flex items-center mx-2 px-2 h-20">
                        <div class="relative flex items-center h-full justify-center w-32 text-[#9b9b9b] ">
                            <p>新密码</p>
                        </div>
                        <div class="formInput w-full h-full text-sm flex justify-center items-center relative">
                            <input v-model="pass" autocomplete="off" :type="passwordField"
                                class=" input-name placeholder:text-[#9b9b9b]  focus:border-none border-none outline-none bg-transparent focus:outline-none text-[#9b9b9b] w-full h-full"
                                id="password" pattern="" name="username" placeholder="6-16字母和数组组成" min="6" max="16"
                                maxlength="16">
                            <XIcon v-if="pass" @click="pass = ''"
                                class="h-5 w-5 cursor-pointer text-[#9b9b9b] absolute right-10 ">
                            </XIcon>
                            <div class="absolute right-3">
                                <EyeIcon v-if="passwordField !== 'password'" @click="showVisibile"
                                    class="w-5 h-5 text-[#9b9b9b] " />
                                <EyeOffIcon v-else @click="showVisibile" class="w-5 h-5 text-[#9b9b9b] " />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-[#13151b] text-base">
                    <div class=" formDiv   relative overflow-hidden flex items-center mx-2 px-2 h-20">
                        <div class="relative flex items-center h-full justify-center w-32 text-[#9b9b9b] ">
                            <p>确认新密码</p>
                        </div>
                        <div class="formInput w-full h-full text-sm flex justify-center items-center relative">
                            <input v-model="confirmpass" autocomplete="off" :type="con_passField"
                                class=" input-name placeholder:text-[#9b9b9b]  focus:border-none border-none outline-none bg-transparent focus:outline-none text-[#9b9b9b] w-full h-full"
                                id="confirmpass" pattern="" name="username" placeholder="6-16字母和数组组成" min="6" max="16"
                                maxlength="16">
                            <XIcon v-if="confirmpass" @click="confirmpass = ''"
                                class="h-5 w-5 cursor-pointer text-[#9b9b9b] absolute right-10 ">
                            </XIcon>
                            <div class="absolute right-3">
                                <EyeIcon v-if="con_passField !== 'password'" @click="confirmshowVisibile"
                                    class="w-5 h-5 text-[#9b9b9b] " />
                                <EyeOffIcon v-else @click="confirmshowVisibile" class="w-5 h-5 text-[#9b9b9b] " />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-9 w-full px-3">
                    <button @click="setPass" class="w-full btn_login text-base py-5">
                        提交
                    </button>
                </div>
            </form>
        </div>
    </div>

    <div class="hidden sm:block relative w-full bg-[#1f2129] my-2 py-[20px] px-[18px]">
        <div class="py-5 flex flex-col justify-center items-center">
            <div class="mb-[40px] flex space-x-3 items-center justify-center">
                <div class=" py-2 rounded-full bg-slate-500 px-2 border-[#7e7e7e]">
                    <LockClosedIcon class="w-10 h-10"></LockClosedIcon>
                </div>
                <span class="text-base text-white">为保障您的账号安全，请修改登录密码</span>
            </div>
            <div class="px-3 sm:px-0 py-5 form w-[381px]">
                <form @click.prevent>
                    <div class="bg-[#13151b] formDiv my-5 relative overflow-hidden flex items-center mx-auto px-2 h-14">
                        <div
                            class="relative flex items-center justify-center w-20    border-r border-[#7e7e7e] border-solid">
                            <LockClosedIcon class="w-5 h-5 "></LockClosedIcon>
                        </div>
                        <div class="formInput w-full h-full text-sm flex justify-center items-center relative">
                            <input v-model="pass" autocomplete="off" :type="passwordField"
                                class=" input-name  focus:border-none border-none outline-none bg-transparent focus:outline-none text-[#d0d0d0] w-full h-full"
                                pattern="" name="username" placeholder="请输入新密码" min="6" max="12" maxlength="12">
                            <XIcon v-if="pass" @click="pass = ''" class="h-5 w-5 cursor-pointer  absolute right-10 ">
                            </XIcon>
                            <div class="absolute right-3">
                                <EyeIcon v-if="passwordField !== 'password'" @click="showVisibile" class="w-5 h-5 " />
                                <EyeOffIcon v-else @click="showVisibile" class="w-5 h-5 " />
                            </div>
                        </div>
                    </div>
                    <div class="bg-[#13151b] formDiv relative overflow-hidden flex items-center mx-auto px-2 h-14">
                        <div
                            class="relative flex items-center justify-center w-20    border-r border-[#7e7e7e] border-solid">
                            <LockClosedIcon class="w-5 h-5 "></LockClosedIcon>
                        </div>
                        <div class="formInput w-full h-full text-sm flex justify-center items-center relative">
                            <input v-model="confirmpass" autocomplete="off" :type="con_passField"
                                class=" input-name  focus:border-none border-none outline-none bg-transparent focus:outline-none text-[#d0d0d0] w-full h-full"
                                pattern="" name="username" placeholder="请输入确认密码" min="6" max="12" maxlength="12">
                            <XIcon v-if="confirmpass" @click="confirmpass = ''"
                                class="h-5 w-5 cursor-pointer  absolute right-10  ">
                            </XIcon>
                            <div class="absolute right-3">
                                <EyeIcon v-if="con_passField !== 'password'" @click="confirmshowVisibile"
                                    class="w-5 h-5 " />
                                <EyeOffIcon v-else @click="confirmshowVisibile" class="w-5 h-5 " />
                            </div>
                        </div>
                    </div>
                    <div class="py-7 w-full">
                        <button @click="setPass" class="w-full btn_login text-base py-4">
                            提交
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import userApi from "@/network/user.js";
import Loading from "@/utils/loader";
import { useRouter } from 'vue-router';
import { ref, onMounted, computed } from 'vue'
import { XIcon, LockClosedIcon, EyeIcon, EyeOffIcon, ChevronLeftIcon } from "@heroicons/vue/outline";
import { useStore } from "vuex";
import AES from '@/utils/aes';

import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance()

const innerWidth = ref(0)

const name = ref('')
const pass = ref('')
const confirmpass = ref('')
const store = useStore()
const passwordField = ref('password')
const con_passField = ref('password')
const router = useRouter()
const userValue = computed(() => store.getters["user/USERINFO"]);
const login = computed(() => store.getters["user/LOGIN"]);
const token = computed(() => store.getters["user/LToken"]);
const gameEn = computed(() => store.getters["app/GameEn"]);


const showVisibile = () => {
    passwordField.value = passwordField.value === "password" ? "text" : "password";
};
const confirmshowVisibile = () => {
    con_passField.value = con_passField.value === "password" ? "text" : "password";
};

const goUser = () => {
    router.go(-1)
}

const setPass = () => {
    if (pass.value == '' || confirmpass.value == '') return instance.proxy.$message({ message: '请输入所有字段', duration: 2 })
    if (pass.value != confirmpass.value) return instance.proxy.$message({ message: '两次输入密码不一致', duration: 2 })
    if (pass.value.length < 6) return instance.proxy.$message({ message: '密码必须至少有6个字符长', duration: 2 })

    if (!/\d/.test(pass.value) || !/[a-zA-Z]/.test(pass.value)) return instance.proxy.$message({ message: '密码必须包含数字和英文字母', duration: 2 })
    let data = {
        "player": userValue.value?.username,
        "password": pass.value,
    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

    Loading.showLoading()
    userApi.SetPasswordPhU({ data: data, key: login?.value?.key }).then((res) => {
        Loading.hideLoading()
        if (res.data.code == '1') {
            console.log(res, "SetPasswordPhU resp ********");
            instance.proxy.$message({ message: res?.data.message, duration: 2 })
            if (innerWidth.value > 640) {
                router.push('/')
            } else {
                router.go(-1)
            }

        } else {
            instance.proxy.$message({ message: '登录密码修改失败', duration: 2 })
        }
    }).catch((err) => {
        Loading.hideLoading()
        console.log(err.response.data.message);
        instance.proxy.$message({ message: err.response?.data?.message, duration: 2 })
    })
}



onMounted(() => {
    if (!token?.value) return router.push('/login')

    innerWidth.value = window.innerWidth
})
</script>

<style scoped>
.formDiv:focus-within {
    outline: 0;
}

.formDiv input {
    border: none;
    outline: none;
    background: no-repeat;
}

.input-name:focus-within {
    border: 0;
    outline: none;
    box-shadow: none;
}

.input-name:focus {
    outline: 0 !important;
    outline: none !important;
    border: none !important;
}
</style>