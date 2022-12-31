<template>
    <div class="w-full  relative sm:flex-auto sm:mx-[19px]">
        <div class="h-[60px]  w-full text-gray-200   px-2 flex justify-between items-center">
            <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
            <p class=" text-[17px]">{{ addressType == 'BANK' ? '人民币取款' : 'USDT取款' }}</p>
            <div @click="goService">

                <img src="@/assets/mobile/home/service.png" alt="" class="w-8 h-7">
            </div>
        </div>
        <section class="px-5 py-3 w-full bg-[#13151b]">
            <div class="w-full flex items-center">
                <img src="@/assets/mobile/user/num11.png" alt="" class="w-12">

                <p class="px-2 text-[#d0d0d0]">为了您的账户资金安全，请先验证手机号</p>
            </div>
            <!-- if bank -->
            <div v-if="addressType == 'BANK'">
                <div v-if="userValue?.realname"
                    class="py-3 flex items-center w-full relative border-b border-[#272c33] ">
                    <p class=" whitespace-nowrap text-[#d0d0d0]">真实姓名</p>
                    <form @click.prevent class="w-full">
                        <div class="relative w-full  ">
                            <div class="h-5 px-6 text-[#d0d0d0] tracking-widest">
                                {{ hideWord(userValue?.realname) }}
                            </div>

                        </div>
                    </form>
                </div>
                <div v-else @click="openDialog"
                    class="py-3 flex items-center w-full relative border-b border-[#272c33] ">
                    <p class=" whitespace-nowrap text-[#d0d0d0]">真实姓名</p>
                    <form @click.prevent class="w-full">
                        <div class="relative w-full  ">
                            <input disabled v-model="name" type="text" placeholder="真实姓名填写后无法修改"
                                class="w-full input_foucs left-11 px-6 text-[#d0d0d0] placeholder:text-[#d0d0d0] h-12 bg-transparent border-none border-0 ">
                            <XIcon v-if="name" @click="name = ''"
                                class="h-5 w-5 cursor-pointer top-3  absolute right-0  ">
                            </XIcon>

                        </div>
                    </form>
                </div>
            </div>

        </section>
        <section v-if="userValue?.realname == '' && addressType == 'BANK'"
            class="flex justify-end w-full items-center text-[#858585] py-3 text-sm px-5">
            若姓名包含
            <span class="text-[#e74747] text-xl mx-2 -mt-2">.</span>
            请点
            <span class="text-[#f68e45]">复制</span>
            <span>后粘贴</span>
        </section>

        <section class="px-5 w-full  py-3">
            <div class="py-5 text-[#7e7e7e] px-5 bg-[#282b32]">{{ hideMiddle(userValue?.phone, 2, 2) }}</div>
            <div class="py-3 my-3 px-5 flex items-center w-full relative bg-[#282b32]   ">

                <form @click.prevent class="w-full text-start text-[#7e7e7e]">
                    <div class="relative w-full    ">
                        <input v-model="phonecode" type="text" placeholder="6位短信校验码" maxlength="6" min="6" max="6"
                            class="w-full input_foucs placeholder:text-[#7e7e7e]    p-0 h-12 bg-transparent border-none border-0  text-start ">
                        <XIcon v-if="phonecode" @click="phonecode = ''"
                            class="h-5 w-5 cursor-pointer top-3  absolute right-3  "></XIcon>
                    </div>
                </form>
                <button :disabled="codeDisable" @click="getCode()" class=" whitespace-nowrap text-[#f68e45]">{{ codeMsg
                }}</button>

            </div>
        </section>

        <section class="px-6 py-3 ">
            <div @click="BindcheckCode" class="py-5 text-base w-full btn_login text-center">
                提交验证码
            </div>
        </section>
    </div>

    <!-- dialog -->
    <NotCloseDialog :show="depo_Dialog" @close="depo_Dialog = false">
        <div class="w-[90vw]   py-10 text-white px-3  ">
            <p class="text-center text-xl">提示</p>
            <div class="w-full text-start py-3">
                <p class="text-sm text-[#7e7e7e] py-5">人民币存款前请实名认证，并只用该实名账户存取款。</p>
                <p class="text-[#ff1818] text-sm">注：实名不可随意更改，如需变更请联系在线客服。</p>
            </div>
            <div class="w-full h-12 bg-[#13151b] my-5">
                <form @click.prevent>
                    <input v-model="realname" type="text" placeholder="真实姓名" autocomplete="off" name="username" id="usr"
                        class="w-full focus:border-none  focus:outline-0 focus:shadow-none 
                    bg-transparent h-12 outline-0 border-none focus-within:outline-0 focus-within:shadow-none">
                </form>
            </div>
            <div class="flex justify-end w-full items-center text-[#858585]">
                若姓名包含
                <span class="text-[#e74747] text-xl mx-2 -mt-2">.</span>
                请点
                <span class="text-[#bc6013]">复制</span>
                <span>后粘贴</span>
            </div>
            <div class="flex pt-5 items-center w-full  justify-evenly px-3">
                <div @click="depo_Dialog = false" class="btn flex items-center justify-center 
          btn-outline  h-[50px]  border border-solid 
                              border-[#bc6013] text-[#bc6013] cursor-pointer px-12  whitespace-nowrap
                              ">
                    取消
                </div>
                <div @click="requestName" class="btn flex cursor-pointer px-12 whitespace-nowrap 
           items-center justify-center text-[#272c33] text-center  btn-primary  h-[50px]  
              ">
                    确认
                </div>
            </div>
        </div>
    </NotCloseDialog>

</template>

<script setup>
import { XIcon } from "@heroicons/vue/outline";
import { ChevronLeftIcon } from "@heroicons/vue/outline";
import userApi from "@/network/user.js";
import Loading from "@/utils/loader";
import NotCloseDialog from "@/components/NotCloseDialog.vue";
import globaljs from '@/utils/global'
import AES from '@/utils/aes';

import { ref, computed, onMounted } from 'vue'
import { useStore } from "vuex";
import { useRouter, useRoute } from 'vue-router';
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance()
const name = ref('')
const phonecode = ref('')
const depo_Dialog = ref(false)
const codeDisable = ref(false)
const codeMsg = ref('获取校验码')
const timer = ref(null)
const countdown = ref(60)

const verify = ref(false)
const realname = ref('') //realname bind

const router = useRouter()
const route = useRoute();
const store = useStore()
const userValue = computed(() => store.getters["user/USERINFO"]);
const login = computed(() => store.getters["user/LOGIN"]);
const token = computed(() => store.getters["user/LToken"]);
const gameEn = computed(() => store.getters["app/GameEn"]);


const addressType = ref('') // it's usdt or bank 

const goService = () => {
    if (token?.value) {
        window.open(`http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293&nick_name=${userValue?.value.username}`)
    } else {
        window.open('http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293')
    }
}

function getCode() {
    //only bind realname  when address is bank
    if (addressType.value == 'BANK' && (userValue.value?.realname == '' || userValue.value?.realname == undefined)) {
        depo_Dialog.value = true
        return instance.proxy.$message({ message: '请先绑定实名', duration: 2 })
    }
    getValidStr()
}

function hideWord(w) {
    if (w.length < 1) return w;
    return w.substring(0, 1) + '*'.repeat(w.length - 1);
}

function hideMiddle(string, prefixLength, suffixLength) {
    var re = new RegExp('^(\\+?\\d{' + prefixLength + '})(\\d+)(\\d{' + suffixLength + '})$');

    return string?.replace(re, function (match, prefix, middle, suffix) {
        return prefix + '*'.repeat(middle.length) + suffix;
    });
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
        "type": addressType.value == 'BANK' ? 9 : 8, // 9 BindBankAddress //8 bindusdtadress
        "player": userValue.value?.username,
        "phone": userValue.value?.phone,
        // "key": login?.value?.key,
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





const BindcheckCode = () => {
    //only bind realname  when address is bank
    if (addressType.value == 'BANK' && (userValue.value?.realname == '' || userValue.value?.realname == undefined)) {
        depo_Dialog.value = true
        return instance.proxy.$message({ message: '请先绑定实名', duration: 2 })
    }
    if (phonecode.value == '') return instance.proxy.$message({ message: '请输入所有字段', duration: 2 })


    let data = {
        "phone": userValue?.value?.phone,
        "type": addressType.value == 'BANK' ? 9 : 8,// 9 BindBankAddress //8 bindusdtadress
        "code": phonecode.value,
        "player": userValue.value?.username,
    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

    Loading.showLoading()
    userApi.CheckCode({ data: data }).then((res) => {
        Loading.hideLoading()
        if (res.data.code == '1') {
            phonecode.value = ''
            verify.value = true
            clearTimeout(timer.value)
            codeMsg.value = "获取校验码";
            codeDisable.value = false
            countdown.value = 60;
            console.log(res, "CheckCode resp ********");
            instance.proxy.$message({ message: res?.data?.message, duration: 2 })
            if (addressType.value == 'BANK') {
                router.push('/moneyWithdraw')
            } else {
                router.push('/usdtWithdraw')
            }
        }
    }).catch((err) => {
        Loading.hideLoading()
        console.log(err.response.data.message);
        return instance.proxy.$message({ message: err.response?.data?.message, duration: 2 })
    })
}

const goUser = () => {
    router.go(-1)
}



const requestName = () => {
    if (realname.value == '') return instance.proxy.$message({ message: '请输入真实姓名', duration: 2 })
    if (!realname.value?.match(/^[\u4E00-\u9FFF\u3400-\u4DFF\uF900-\uFAFF]+$/g)) return instance.proxy.$message({ message: '只允许使用汉字', duration: 2 })
    if (token?.value) {
        let data = {
            "player": login?.value?.info?.username,
            "realname": realname.value
        }
        const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)
        userApi.BindRealName({ data: data, key: login?.value?.key }).then((res) => {
            console.log(res, "rrrrrrrrr");
            if (res.data.code == '1') {
                instance.proxy.$message({ message: res?.data?.message, duration: 2 })
                globaljs.getUserInfo()
                depo_Dialog.value = false;
            }
        }).catch((e) => {
            console.log(e.response, "ee");
            instance.proxy.$message({ message: e.response?.data.message, duration: 2 })
        })
    }

}

const openDialog = () => {
    depo_Dialog.value = true
}

onMounted(() => {
    if (!token?.value) return router.push('/login')
    addressType.value = route.query.type
})
</script>


<style scoped>
.input_foucs:focus {
    outline: 0 !important;
    outline: none !important;
    border: 1px solid gray;
}

.input_foucs:focus-within {
    border: 0;
    outline: none;
    box-shadow: none;
}
</style>