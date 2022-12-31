<template>
    <div class="w-full h-screen relative sm:flex-auto sm:mx-[19px]">
        <div class="h-[60px]  w-full text-gray-200   px-2 flex justify-between items-center">
            <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
            <p class=" text-[17px]">添加USDT地址</p>
            <div @click="goService">

                <img src="@/assets/mobile/home/service.png" alt="" class="w-8 h-7">
            </div>
        </div>

        <div v-if="!verify">
            <section class="px-5 py-5 w-full bg-[#13151b]">
                <div class="w-full flex items-center justify-center">
                    <img src="@/assets/mobile/user/num11.png" alt="" class="w-12">
                    <p class="px-2 text-[#d0d0d0]">为了您的账户资金安全，请先验证手机号</p>
                </div>
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
                    <button :disabled="codeDisable" @click="getCode()" class=" whitespace-nowrap text-[#f68e45]">{{
                            codeMsg
                    }}</button>

                </div>
            </section>


            <section class="px-6 py-3 ">
                <div @click="BindcheckCode" class="py-5 text-base w-full btn_login text-center">
                    提交验证
                </div>
            </section>
        </div>

        <div v-if="verify">
            <div class="px-3 py-3 w-full sm:max-w-xl sm:mx-auto">
                <form @click.prevent>
                    <div class="bg-[#282b32] my-5 formDiv relative overflow-hidden flex items-center mx-auto px-2 h-14">
                        <div
                            class="relative flex items-center justify-center w-20    border-r border-[#7e7e7e] border-solid">
                            <img src="@/assets/USDT.svg" class="w-5 h-5" />
                        </div>
                        <div class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                            <input v-model="addressID" autocomplete="off" class=" input-name text-[#d0d0d0]   
                        border-none outline-none focus:outline-none pr-12 focus:border-none  bg-transparent   
                        w-full h-full" id="addressID" pattern="" name="addressID" placeholder="收款地址" min="6" max="12"
                                maxlength="70" type="text">
                            <XIcon v-if="addressID" @click="addressID = ''"
                                class="h-5 w-5 cursor-pointer  absolute right-3  "></XIcon>
                        </div>
                    </div>
                    <div class="bg-[#282b32] my-5 formDiv relative overflow-hidden flex items-center mx-auto px-2 h-14">
                        <div
                            class="relative flex items-center justify-center w-20    border-r border-[#7e7e7e] border-solid">
                            <img src="@/assets/comment.svg" class="w-5 h-5" />
                        </div>
                        <div class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                            <input v-model="addMore" autocomplete="off" class=" input-name text-[#d0d0d0]   
                        border-none outline-none focus:outline-none pr-12 focus:border-none  bg-transparent   
                        w-full h-full" id="addMore" pattern="" name="addMore" placeholder="信息备注" min="6" max="12"
                                maxlength="30" type="text">
                            <XIcon v-if="addMore" @click="addMore = ''"
                                class="h-5 w-5 cursor-pointer  absolute right-3  ">
                            </XIcon>
                        </div>
                    </div>

                    <div class="py-7 w-full">
                        <button @click="UsdtAddress" class="w-full btn_login text-base py-4">
                            确定
                        </button>
                    </div>
                </form>
            </div>

            <section class="px-6 py-2   w-full bg-[#282b32] ">
                <div class="flex justify-between py-2 text-[#7e7e7e] text-sm items-center">
                    <div @click="viewUsdtAddress()" class=" flex items-center space-x-2 ">
                        <img src="@/assets/mobile/user/t.png" alt="" class="w-7">
                        <p class="text-[#f68e45] ">添加其他数字币钱包</p>
                    </div>
                    <div @click="addUsdtAddress()" class="flex items-center space-x-3 text-[#f68e45]">
                        <p>数量 ({{ moneyAddData?.length || 0 }}/1)</p>
                        <!-- <PlusCircleIcon class="w-6 h-6 text-[#775c07]"></PlusCircleIcon> -->

                    </div>
                </div>
            </section>

            <div v-if="moneyAddData?.length > 0">
                <section class=" w-full">
                    <section v-if="moneyAddData?.length > 0" class="px-3 w-full py-2">
                        <div class="mx-auto my-2 py-1 h-fit w-full bg-[#282b32] rounded-lg"
                            v-for="(card, i) in moneyAddData" :key="i">
                            <div class="w-full mx-auto">
                                <div
                                    class="mx-2 my-1 bg-gradient-to-b from-buttonLinearFrom to-buttonLinearTo py-3 px-3">
                                    <p class="text-xl font-bold text-white">{{ card.name }}</p>
                                    <div class="space-x-2 flex items-center justify-between">
                                        <span id="textToBecopied"
                                            class="text-md overflow-hidden text-ellipsis w-11/12 text-gray-100 py-2 leading-tight">{{
                                                    card.ma_id
                                            }}</span>
                                        <div @click="copyAddress(card.ma_id)" title="copy address"
                                            class="text-md text-black rounded-full bg-black cursor-pointer shadow-lg px-1 inline-block w-fit bg-HomecardBg py-1 leading-tight">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white"
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>



        <!-- <router-link to="/usdtExplain" class="py-3 absolute bottom-0 z-10  mt-10 w-full flex items-center">
            <img src="@/assets/mobile/user/usdtwith.webp"
             alt="" class="h-[50px] w-full" >
            
        </router-link> -->
    </div>
</template>

<script setup>
import { XIcon, CreditCardIcon, PlusCircleIcon } from "@heroicons/vue/outline";
import { ChevronLeftIcon } from "@heroicons/vue/outline";
import userApi from "@/network/user.js";
import bankApi from "@/network/bank.js";
import useClipboard from 'vue-clipboard3'
import Loading from "@/utils/loader";
import AES from '@/utils/aes';

import { ref, computed, onMounted } from 'vue'
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance()
const name = ref('')
const phonecode = ref('')
const { toClipboard } = useClipboard()

const codeDisable = ref(false)
const codeMsg = ref('获取校验码')
const timer = ref(null)
const countdown = ref(60)

const addressID = ref('')
const addMore = ref('')

const router = useRouter()
const store = useStore()
const userValue = computed(() => store.getters["user/USERINFO"]);
const login = computed(() => store.getters["user/LOGIN"]);
const token = computed(() => store.getters["user/LToken"]);
const gameEn = computed(() => store.getters["app/GameEn"]);

const verify = ref(false)

const moneyAddData = ref(null)

function hideMiddle(string, prefixLength, suffixLength) {
    var re = new RegExp('^(\\+?\\d{' + prefixLength + '})(\\d+)(\\d{' + suffixLength + '})$');

    return string?.replace(re, function (match, prefix, middle, suffix) {
        return prefix + '*'.repeat(middle?.length) + suffix;
    });
}

const goService = () => {
    if (token?.value) {
        window.open(`http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293&nick_name=${userValue?.value.username}`)
    } else {
        window.open('http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293')
    }
}

const viewUsdtAddress = () => {
    if (moneyAddData.value?.length > 0) {
        router.push({ path: '/cardinfo', query: { type: 'USDT' } });
    }
}

const addUsdtAddress = () => {
    if (userValue.value?.is_set_phone == 1 && moneyAddData.value?.length < 4) {
        router.push('/add_usdt_address')
    }
}

function getCode() {
    if (userValue.value?.user_level < 1) return instance.proxy.$message({ message: '账号未充值', duration: 2 })
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

const copyAddress = async (copyTxt) => {
    try {
        await toClipboard(copyTxt)
        return instance.proxy.$message({ message: '复制USDT地址成功', duration: 2 })
    } catch (e) {
        alert('copy error')
        console.error(e)
    }
}

const createPhoneCode = () => {

    let data = {
        "type": 8,
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
    if (phonecode.value == '') return instance.proxy.$message({ message: '请输入所有字段', duration: 2 })
    if (userValue.value?.user_level < 1) return instance.proxy.$message({ message: '账号未充值', duration: 2 })//user_level
    let data = {
        "phone": userValue?.value?.phone,
        "type": 8,
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
            // router.push('/')
        }
    }).catch((err) => {
        Loading.hideLoading()
        console.log(err.response.data.message);
        return instance.proxy.$message({ message: err.response?.data?.message, duration: 2 })
    })
}


const UsdtAddress = () => {
    if (moneyAddData?.length > 1) return instance.proxy.$message({ message: '您已经绑定了USDT地址', duration: 2 })//only to add one address
    if (userValue.value?.user_level < 1) return instance.proxy.$message({ message: '账号未充值', duration: 2 })

    let data;
    data = {
        "player": userValue.value?.username,
        "type": 'USDT',
        "ad_id": addressID.value,
        "ad_more": addMore.value
    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

    if (addressID.value === '' || addMore.value === ''
    )
        return instance.proxy.$message({ message: '请输入所有字段', duration: 2 })
    Loading.showLoading()
    bankApi.SetCoinAddress({ data: data, key: login?.value?.key }).then((res) => {
        Loading.hideLoading()
        if (res.data.code == '1') {
            GetMoneyAddress()
            console.log(res, "SetCoinAddress from usdt resp ********");
            instance.proxy.$message({ message: res?.data.message, duration: 2 })
        }
    }).catch((err) => {
        Loading.hideLoading()
        console.log(err.response.data.message);
        instance.proxy.$message({ message: err.response.data.message, duration: 2 })
    })
}



const goUser = () => {
    router.go(-1)
}

const GetMoneyAddress = () => {
    if (token?.value) {
        let data = {
            "player": login?.value?.info?.username,
            "type": 'USDT'
        }
        const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

        bankApi.GetMoneyAddress({ data: data, key: login?.value?.key }).then((res) => {
            if (res.data.code == '1') {
                console.log("res of GetMoneyAddress data", res);
                moneyAddData.value = res?.data?.data
            }
        }).catch((e) => {

            console.log(e);
        })
    }
}
onMounted(() => {
    if (!token?.value) return router.push('/login')
    GetMoneyAddress()
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