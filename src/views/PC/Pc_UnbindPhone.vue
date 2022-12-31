<template>
    <div class="hidden sm:block relative w-full bg-[#1f2129]  sm:mx-[19px]">
        <div class="w-full tabs    border-b border-gray-800">
            <div class="text-base text-center py-2 cursor-pointer w-[150px] tracking-wider border-b border-[#eed0a4]">
                解绑手机号
            </div>
        </div>
        <div class="py-5 mt-20 flex flex-col justify-center items-center">
            <section class="form w-[381px]">
                <form @click.prevent>
                    <div class="bg-[#13151b] my-5   formDiv relative overflow-hidden flex items-center mx-auto  h-14">
                        <div class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                            <input disabled type="tel" autocomplete="off" class=" input-name text-[#d0d0d0]   
                               border-none outline-none focus:outline-none focus:border-none    
                             w-full h-full" pattern="" name="code" :placeholder="hideMiddle(userValue?.phone, 2, 2)"
                                maxlength="11" min="11" max="11">

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
                            <button :disabled="codeDisable"
                                :class="!codeDisable ? ' ' : ' opacity-80 cursor-not-allowed'" @click="getCode()"
                                class="h-10 px-2 text-[#eed0a4] absolute right-2 whitespace-nowrap flex items-center justify-center cursor-pointer border border-solid border-[#eed0a4] ">
                                {{ codeMsg }}
                            </button>
                        </div>
                    </div>



                    <section class="btn py-5">
                        <div @click="UnBindPhone" class="py-3 cursor-pointer text-base w-full btn_login text-center">
                            解绑手机号
                        </div>
                    </section>
                </form>
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
import { getCurrentInstance } from 'vue';
import AES from '@/utils/aes';

import { ref, onMounted, computed } from 'vue'
import { XIcon } from "@heroicons/vue/outline";
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



const changePhone = ref(false)



const goUser = () => {
    router.go(-1)
}

const goService = () => {
    if (token?.value) {
        window.open(`http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293&nick_name=${userValue?.value.username}`)
    } else {
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
const BindcheckCode = () => {
    if (phonecode.value == '') return instance.proxy.$message({ message: '请输入所有字段', duration: 2 })
    let data = {
        "phone": userValue?.value?.phone,
        "type": 4,
        "code": phonecode.value
    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

    Loading.showLoading()
    userApi.CheckCode({ data: data }).then((res) => {
        Loading.hideLoading()
        if (res.data.code == '1') {
            phonecode.value = ''
            changePhone.value = true
            clearTimeout(timer.value)
            codeMsg.value = "获取校验码";
            codeDisable.value = false
            countdown.value = 60;
            console.log(res, "CheckCode resp ********");
            instance.proxy.$message({ message: res?.data?.message, duration: 2 })
            //  router.push('/')
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
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

    userApi.GetSmsCode({ data: data, key: login?.value?.key }, userValue.value?.id).then((res) => {
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

const UnBindPhone = () => {
    if (phonecode.value == '') return instance.proxy.$message({ message: '请输入所有字段', duration: 2 })
    let data = {
        "player": userValue.value?.username,
        "phone": userValue?.value?.phone,
        "type": 12,
        "code": phonecode.value,
    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

    Loading.showLoading()
    userApi.UnBindPhoneNumber({ data: data, key: login?.value?.key }).then((res) => {
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
onMounted(() => {
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