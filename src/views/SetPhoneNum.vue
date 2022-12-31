<template>
    <div class="w-full h-screen bg-black  relative sm:hidden sm:mx-[19px]">
        <div class="h-[60px]  w-full text-gray-400    px-2 flex justify-between items-center">
            <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
            <p class=" text-[17px]"> 绑定手机号 </p>
            <div class="flex flex-col pt-2 text-center mr-2 items-center whitespace-nowrap ">
                &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
        </div>
        <div class="py-5 w-full">
            <form @click.prevent>
                <div class="bg-[#13151b] text-base">

                    <div
                        class=" formDiv  border-b border-solid border-[#5a5b5d]  relative overflow-hidden flex items-center mx-2 px-2 h-20">
                        <div class="relative  flex items-center h-full justify-start w-40 text-[#9b9b9b] ">
                            <p>电话号码</p>
                        </div>
                        <div class="formInput w-full h-full text-sm flex justify-center items-center relative">
                            <input v-model="phonenum" autocomplete="off" type="text" 
                                class=" input-name placeholder:text-[#9b9b9b]  focus:border-none border-none outline-none bg-transparent focus:outline-none text-[#9b9b9b] w-full h-full"
                                id="phonenum" pattern="" name="username" min="11" max="11" maxlength="11">

                        </div>
                    </div>
                </div>

                <div class="bg-[#13151b] text-base">
                    <div class=" formDiv   relative overflow-hidden flex items-center mx-2 px-2 h-20">
                        <div class="relative flex items-center h-full justify-start w-40 text-[#9b9b9b] ">
                            <p>短信校验码</p>
                        </div>
                        <div class="formInput w-full h-full text-sm flex justify-center items-center relative">
                            <input v-model="phonecode" autocomplete="off" type="text"
                                class=" input-name placeholder:text-[#9b9b9b]  focus:border-none border-none outline-none bg-transparent focus:outline-none text-[#9b9b9b] w-full h-full"
                                pattern="" name="username" min="6" max="6" maxlength="6">

                            <div class="absolute right-3 z-10">
                                <button :disabled="codeDisable" class=" whitespace-nowrap text-sm text-[#e06c24]"
                                    :class="!codeDisable ? ' ' : ' opacity-80 cursor-not-allowed'" @click="getCode()">{{
                                            codeMsg
                                    }}</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="py-7 w-full px-5">
                    <button @click="binePhone" class="w-full btn_login text-base py-4">
                        绑定手机号
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
                <span class="text-base text-white">为保障您的账号安全，请绑定手机号</span>
            </div>
            <section class="form w-[381px]">
                <div class="bg-[#13151b] my-5   formDiv relative overflow-hidden flex items-center mx-auto  h-14">
                    <div class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                        <input v-model="phonenum" type="tel" autocomplete="off" class=" input-name text-[#d0d0d0]   
                               border-none outline-none focus:outline-none focus:border-none    
                             w-full h-full" pattern="" name="code" placeholder="电话号码" maxlength="11" min="11" max="11">

                    </div>
                </div>
                <div class="bg-[#13151b] my-5   formDiv relative overflow-hidden flex items-center mx-auto  h-14">
                    <div class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                        <input v-model="phonecode" autocomplete="off" class=" input-name text-[#d0d0d0]   
                             border-none outline-none focus:outline-none focus:border-none    
                             w-full h-full" pattern="" name="code" placeholder="6位短信校验码" type="text" maxlength="6"
                            min="6" max="6">
                        <XIcon v-if="phonecode" @click="phonecode = ''"
                            class="h-5 w-5 cursor-pointer  absolute right-28  ">
                        </XIcon>
                        <button :disabled="codeDisable" :class="!codeDisable ? ' ' : ' opacity-80 cursor-not-allowed'"
                            @click="getCode()"
                            class="h-10 px-2 absolute right-2 whitespace-nowrap flex items-center justify-center cursor-pointer border border-solid border-[#eed0a4] ">
                            {{ codeMsg }}
                        </button>
                    </div>
                </div>

                <section class="btn py-5">
                    <div @click="binePhone" class="py-3 cursor-pointer text-base w-full btn_login text-center">
                        提交验证
                    </div>
                </section>
            </section>
            <section class=" mt-40 pb-5 w-full mx-8 border-t border-dashed text-center">
                <div class="pt-5">
                    <p>温馨提示：手机号码不正确?联系客服</p>
                </div>
            </section>
        </div>
    </div>


</template>

<script setup>
import userApi from "@/network/user.js";
import Loading from "@/utils/loader";
import { useRouter } from 'vue-router';
import { useStore } from "vuex";
import AES from '@/utils/aes';
import { ref, onMounted, computed } from 'vue'
import { XIcon, LockClosedIcon, ChevronLeftIcon } from "@heroicons/vue/outline";

import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance()

const codeDisable = ref(false)
const codeMsg = ref('获取校验码')
const timer = ref(null)
const countdown = ref(60)
const phonenum = ref('')
const phonecode = ref('')

const router = useRouter()
const store = useStore()
const userValue = computed(() => store.getters["user/USERINFO"]);
const login = computed(() => store.getters["user/LOGIN"]);
const token = computed(() => store.getters["user/LToken"]);

const gameEn = computed(() => store.getters["app/GameEn"]);

const passwordField = ref('password')
const con_passField = ref('password')

const showVisibile = () => {
    passwordField.value = passwordField.value === "password" ? "text" : "password";
};
const confirmshowVisibile = () => {
    con_passField.value = con_passField.value === "password" ? "text" : "password";
};

const goUser = () => {
    router.push('/accsetting')
}

function getCode() {

    if (phonenum.value == '') return instance.proxy.$message({ message: '请输入所有字段', duration: 2 })
    
    getValidStr()
}

const getValidStr = () => {

    console.log(codeDisable.value, "disable");
    codeMsg.value = "重发(" + countdown.value + ")";
    countdown.value--;
    if (countdown.value == 59) {
        console.log("countdown value is", countdown.value);
        createPhoneCode()
    }
    if (countdown.value <= 0) {
        countdown.value = 60;
        codeMsg.value = "获取校验码";
        codeDisable.value = false
    } else {
        codeDisable.value = true;
        timer.value = setTimeout(() => {
            getValidStr()
        }, 1000);
    }
}

const createPhoneCode = () => {

    let data = {
        "type": 7,
        "player": userValue.value?.username,
        "phone": phonenum.value,
        // "key": login?.value?.key,

    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

    userApi.GetSmsCode({ data: data, key: login?.value?.key }, userValue.value?.id).then((res) => {
        console.log(res, "sms code");
        if (res.data.code == '1') {
            console.log("success *************************")
            return instance.proxy.$message({ message: '手机验证码发送成功，请查收手机', duration: 2 })
            // clearTimeout(timer.value)
            // codeMsg.value = "Get Code";
            // codeDisable.value = false
            // countdown.value = 60;
        }
    }).catch((e) => {
        console.log(e);
        //catch error then reset timer
        clearTimeout(timer.value)
        codeMsg.value = "获取校验码";
        codeDisable.value = false
        countdown.value = 60;
        return instance.proxy.$message({ message: e.response?.data?.message, duration: 2 })
    })
}


const binePhone = () => {
    if (phonenum.value == '' || phonecode.value == '') return instance.proxy.$message({ message: '请输入所有字段', duration: 2 })

    // if (
    //     !/^((1[3,5,8,7,9][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(
    //         phonenum.value
    //     )
    // ) {
    //     return instance.proxy.$message({ message: '手机号码格式不对', duration: 2 })
    // }

    let data = {
        "player": login.value?.info?.username,
        "phone": phonenum.value,
        "code": phonecode.value,
        // "key": login?.value?.key
    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

    Loading.showLoading()
    userApi.BindPhoneNumber({ data: data, key: login?.value?.key }).then((res) => {
        Loading.hideLoading()
        if (res.data.code == '1') {
            console.log(res, "setphone resp ********");
            instance.proxy.$message({ message: '绑定手机号成功', duration: 2 })
            router.push('/')
        } else {
            instance.proxy.$message({ message: "绑定手机号失败", duration: 2 })
        }
    }).catch((err) => {
        Loading.hideLoading()
        console.log(err.response.data.message);
        instance.proxy.$message({ message: err.response?.data?.message, duration: 2 })
    })
}


onMounted(() => {

    if (!token?.value) return router.push('/login')
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