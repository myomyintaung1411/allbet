<template>
    <div class="w-full h-screen bg-black   relative sm:hidden sm:mx-[19px]">
        <div class="h-[60px]  w-full text-gray-400    px-2 flex justify-between items-center">
            <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
            <p class=" text-[17px]"> 解绑手机号 </p>
            <div class="flex flex-col pt-2 text-center mr-2 items-center whitespace-nowrap ">
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
        </div>

        <div  class="py-5 w-full">
            <form @click.prevent>
                <div class="pt-8 bg-[#13151b] text-base">
                    <div
                        class=" formDiv border-b border-solid border-[#5a5b5d]   relative overflow-hidden flex items-center mx-2 px-2 h-16">
                        <div class="relative flex items-center h-full justify-center w-32 text-[#9b9b9b] ">
                            <p>已绑定手机</p>
                        </div>
                        <div class="formInput w-full h-full text-sm flex justify-center items-center relative">
                            <input disabled autocomplete="off" :type="passwordField"
                                class=" input-name placeholder:text-[#9b9b9b]  focus:border-none border-none outline-none bg-transparent focus:outline-none text-[#9b9b9b] w-full h-full"
                                id="password" pattern="" name="username" :placeholder="hideMiddle(userValue?.phone, 2, 2)"
                                min="6" max="16" maxlength="16">
                        </div>
                    </div>
                </div>
                <div class="bg-[#13151b] text-base">

                    <div class=" formDiv   relative overflow-hidden flex items-center mx-2 px-2 h-20">
                        <div class="relative flex items-center h-full justify-center w-32 text-[#9b9b9b] ">
                            <p>短信校验码</p>
                        </div>
                        <div class="formInput w-full h-full text-sm flex justify-center items-center relative">
                            <input v-model="phonecode" autocomplete="off" type="text"
                                class=" input-name placeholder:text-[#9b9b9b]  focus:border-none border-none outline-none bg-transparent focus:outline-none text-[#9b9b9b] w-full h-full"
                                id="phonecode" pattern="" name="username" min="6" max="6" maxlength="6">

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
                    <button @click="UnBindPhone" class="w-full btn_login text-base py-4">
                        解绑手机号
                    </button>
                </div>
            </form>
        </div>
    </div>

</template>

<script setup>
import userApi from "@/network/user.js";
import Loading from "@/utils/loader";
import NoticeMsg from "@/utils/alert";
import { useRouter } from 'vue-router';
import { useStore } from "vuex";
import { getCurrentInstance } from 'vue';
import AES from '@/utils/aes';

import { ref, onMounted, computed } from 'vue'
import { XIcon, UserIcon, LockClosedIcon, EyeIcon, EyeOffIcon, ChevronLeftIcon, PhoneIcon, CodeIcon } from "@heroicons/vue/outline";
const name = ref('')
const pass = ref('')
const newphone = ref('')
const phonecode = ref('')
const router = useRouter()
const store = useStore()
const userValue = computed(() => store.getters["user/USERINFO"]);
const login = computed(() => store.getters["user/LOGIN"]);
const token = computed(() => store.getters["user/LToken"]);
const gameEn = computed(() => store.getters["app/GameEn"]);

const codeDisable = ref(false)
const codeMsg = ref('获取校验码')
const timer = ref(null)
const countdown = ref(60)

const instance = getCurrentInstance()

const passwordField = ref('password')
const con_passField = ref('password')

const changePhone = ref(false)

const showVisibile = () => {
    passwordField.value = passwordField.value === "password" ? "text" : "password";
};
const confirmshowVisibile = () => {
    con_passField.value = con_passField.value === "password" ? "text" : "password";
};

const goUser = () => {
    router.go(-1)
}

const goService = () => {
  if(token?.value){
    window.open(`http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293&nick_name=${userValue?.value.username}`)
  }else{
    window.open('http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293')
  }
}

function getCode() {
    if (changePhone.value) {
        if (newphone.value == '') return instance.proxy.$message({ message: '请输入所有字段', duration: 2 })
    }
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
function hideMiddle(string, prefixLength, suffixLength) {
    var re = new RegExp('^(\\+?\\d{' + prefixLength + '})(\\d+)(\\d{' + suffixLength + '})$');

    return string?.replace(re, function (match, prefix, middle, suffix) {
        return prefix + '*'.repeat(middle?.length) + suffix;
    });
}
const UnBindPhone = () => {
    if (phonecode.value == '') return instance.proxy.$message({ message: '请输入所有字段', duration: 2 })
    let data = {
        "player":userValue.value?.username,
        "phone": userValue?.value?.phone,
        "type": 12,
        "code": phonecode.value,
    }
    const encrypttxt =  AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)
    Loading.showLoading()
    userApi.UnBindPhoneNumber({data: data,key:login?.value?.key}).then((res) => {
        Loading.hideLoading()
        if (res.data.code == '1') {
            phonecode.value = ''
            changePhone.value = true
            clearTimeout(timer.value)
            codeMsg.value = "获取校验码";
            codeDisable.value = false
            countdown.value = 60;
            console.log(res, "unbind resp ********");
            instance.proxy.$message({ message: res?.data?.message, duration: 2 })
              router.push('/')
        }
    }).catch((err) => {
        Loading.hideLoading()
        console.log(err.response.data.message);
        return instance.proxy.$message({ message: err.response?.data?.message, duration: 2 })
    })
}

//if change phone num newphone send otherwise old phone send
const createPhoneCode = () => {
    let phone = ''
    if (changePhone.value) {
        phone = newphone.value
    } else {
        phone = userValue.value?.phone
    }
    let data = {
        "type": 12,
        "player": userValue.value?.username,
        "phone": phone,
    }
    const encrypttxt =  AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

    userApi.GetSmsCode({data: data,key:login?.value?.key}, userValue.value?.id).then((res) => {
        console.log(res, "sms code");
        if (res.data.code == '1') {
            console.log("success *************************")
            return instance.proxy.$message({ message: '手机验证码发送成功，请查收手机', duration: 2 })
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

onMounted(()=>{
    if (!token?.value) return router.push('/login')

})
</script>

<style scoped>
.formDiv:focus-within {
    color: #272c33 !important;
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