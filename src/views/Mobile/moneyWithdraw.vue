<template>
    <div class="w-full  relative overflow-x-hidden">
        <div class="h-[60px]  w-full text-gray-200   px-2 flex justify-between items-center">
            <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
            <p class=" text-[17px] mr-7">取款</p>
            <div @click="goService">

                <img src="@/assets/mobile/home/service.png" alt="" class="w-8 h-7">
            </div>
        </div>
        <section v-if="verifyWith" class="py-3 px-3 bg-[#101013]">
            <div class="flex flex-col space-y-3 items-center justify-center py-5 text-lg w-full ">
                <div class=" flex items-center justify-center  h-14 w-14 bg-[#bc6013] rounded-full">
                    <CheckIcon class="w-6 h-6 text-white"></CheckIcon>
                </div>
                <p>提现成功</p>
                <div class="py-3 w-full">
            <div @click="goHome" class="btn_login text-lg w-full py-3 text-center font-medium tracking-wider text-[#272c33]">去游戏</div>
        </div>
            </div>
        </section>
        <section v-if="!verifyWith">
            <section class="px-5 py-3 w-full bg-[#13151b]">
                <div class="py-3 flex items-center w-full relative border-b border-[#272c33] ">
                    <p class=" whitespace-nowrap text-[#d0d0d0]">真实姓名</p>
                    <form @click.prevent class="w-full">
                        <div class="relative w-full  ">
                            <div class="h-5 px-6 text-[#d0d0d0] tracking-widest">
                                {{ hideWord(userValue?.realname) }}
                            </div>

                        </div>
                    </form>
                </div>
                <div class="py-3 flex items-center w-full relative border-b border-[#272c33] ">
                    <p class=" whitespace-nowrap text-[#d0d0d0]">余额</p>
                    <form @click.prevent class="w-full">
                        <div class="relative w-full ml-8  ">
                            <div class="h-5 px-6 text-base text-[#d0d0d0] tracking-widest">
                                {{ userValue?.balance }} ¥
                            </div>

                        </div>
                    </form>
                </div>

            </section>
            <section class="px-4 py-3 border-t border-[#272c33] w-full">
                <div class="flex flex-wrap  justify-center  ">
                    <div v-for="(mon, n) in money" :key="n" @click="moneyClick(n, mon)"
                        :class="activeMoney == n ? ' border border-solid border-[#bc6013] text-[#efae3d]' : 'text-white border border-solid border-[#272c33] '"
                        class="w-[30%]   mx-[5px] my-2    cursor-pointer
                text-center py-2 text-base">
                        {{ mon }} 元
                    </div>
                </div>
                <div class="relative px-2 py-2">
                    <form @click.prevent>
                        <div class="relative">
                            <input v-model="amount" type="number" min="1" max="100000000" @input="eventName"
                                placeholder="请输入取款余额"
                                class="w-full input_foucs left-11 text-[#d0d0d0] h-12 bg-transparent border border-solid border-[gray]">
                            <XIcon v-if="amount" @click="amount = ''"
                                class="h-5 w-5 cursor-pointer top-3  absolute right-6 text-[#d0d0d0] "></XIcon>
                        </div>
                    </form>
                </div>
                <p class="px-2 text-[12px] text-red-500">本平台为了贵宾您的账户资金安全,只能使 用贵宾您本人的存款的卡号进行取款(同卡存 同卡取。 客服链接</p>
            </section>
            <section class="px-6 w-full py-2">
                <form @click.prevent>
                    <div class="relative text-[#d0d0d0]">
                        <input v-model="realname" type="text" placeholder="持卡人"
                            class="w-full input_foucs left-11 pr-14 h-12 bg-transparent border border-solid border-[gray]">
                        <XIcon v-if="realname" @click="realname = ''"
                            class="h-5 w-5 cursor-pointer top-3   absolute right-6   "></XIcon>
                    </div>
                    <p class="px-2 py-1 text-[12px] text-red-500">请使用户名为提*的银行卡转账,否则将无法到账 ,如需更改姓名请联系在线客服 客服链接</p>
                    <div class="relative py-3 text-[#d0d0d0]">
                        <input v-model="cardnumber" type="text" placeholder="卡号"
                            class="w-full input_foucs left-11 pr-14 h-12 bg-transparent border border-solid border-[gray]">
                        <XIcon v-if="cardnumber" @click="cardnumber = ''"
                            class="h-5 w-5 cursor-pointer flex items-center justify-center top-[26px]   absolute right-6  ">
                        </XIcon>
                    </div>
                    <div class="relative py-3 text-[#d0d0d0]">
                        <input v-model="bankacc" type="text" placeholder="开户行"
                            class="w-full input_foucs left-11 pr-14  h-12 bg-transparent border border-solid border-[gray]">
                        <XIcon v-if="bankacc" @click="bankacc = ''"
                            class="h-5 w-5 cursor-pointer   absolute right-6  top-[26px]"></XIcon>
                    </div>
                </form>
            </section>

            <div v-if="moneyAddData?.length > 0" class="px-4 w-full py-2">
                <div class="bg-[#171a21] w-full py-2 ">
                    <p class="text-center tracking-wider text-[#efae3d]">使用取款户进行取款</p>
                    <div @click="bank_list_dialog = true"
                        class="flex items-center  px-4 w-full py-2  justify-between text-[19px]">
                        <div class="flex items-center space-x-3 whitespace-normal">
                            <span>取款至</span>
                            <img src="@/assets/cc_card.webp" alt="" class="w-6 h-6">
                            <span>工商银行({{ hideWord(moneyAddData[0]?.ma_id) }})</span>
                        </div>
                        <div>
                            <ChevronRightIcon class="w-7 h-7"></ChevronRightIcon>
                        </div>
                    </div>
                </div>
            </div>

            <section class="px-6 py-3 ">
                <div @click="withDraw()" class="py-5 text-base w-full btn_login text-center">
                    提交
                </div>
            </section>
        </section>

        <section v-if="bank_list_dialog"
            class="absolute z-10 bottom-[0px] w-full overflow-y-hidden  h-full bg-[rgba(0,0,0,0.72)]">
            <div class="px-5 w-full fixed h-[screen] bottom-0 z-20  bg-[rgba(0,0,0,0.72)]">
                <div v-for="(bank) in moneyAddData" :key="bank.id" @click="chooseBank(bank)" class="flex border-b border-[#202330] 
            items-center text-center text-[18px] text-[#d0d0d0] center py-4 bg-[#272c33] px-3 w-full">
                    <div class=" space-x-2 w-full flex items-center">
                        <span class="w-[100px]  text-left"> {{ bank?.ma_address }}</span>
                        <span class="text-base">({{ hideMiddle(bank?.ma_id, 2, 2) }})</span>
                    </div>
                </div>
                <div @click="bank_list_dialog = false"
                    class="flex items-center py-3 my-3 text-center text-[18px] justify-center bg-[#272c33] px-2 w-full">
                    取消
                </div>
            </div>
        </section>

            


    </div>
</template>

<script setup>
import { XIcon, ChevronRightIcon } from "@heroicons/vue/outline";
import { ChevronLeftIcon,CheckIcon } from "@heroicons/vue/outline";
import userApi from "@/network/user.js";
import Loading from "@/utils/loader";
import bankApi from "@/network/bank.js";
import NotCloseDialog from "@/components/NotCloseDialog.vue";
import globaljs from '@/utils/global'
import AES from '@/utils/aes';

import { ref, computed, onMounted } from 'vue'
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance()
const name = ref('')
const realname = ref('')
const cardnumber = ref('')
const bankacc = ref('')
const verify = ref(false)

const bank_list_dialog = ref(false)

const money = ref(["200", "500", "1000", "3000", "5000", "10000"])
const amount = ref('200')
const activeMoney = ref(0)

const router = useRouter()
const store = useStore()
const userValue = computed(() => store.getters["user/USERINFO"]);
const login = computed(() => store.getters["user/LOGIN"]);
const token = computed(() => store.getters["user/LToken"]);
const gameEn = computed(() => store.getters["app/GameEn"]);

const verifyWith = ref(false)

const moneyAddData = ref(null)



const goService = () => {
    if (token?.value) {
        window.open(`http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293&nick_name=${userValue?.value.username}`)
    } else {
        window.open('http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293')
    }
}

const chooseBank = (bank) => {
    console.log(bank);
    cardnumber.value = bank.ma_id
    bankacc.value = bank.ma_address
    realname.value = bank.ma_name
    bank_list_dialog.value = false
}

const moneyClick = (n, mon) => {
    activeMoney.value = n
    amount.value = mon
}

const goHome = () => {
    router.push('/home')
}


function hideWord(w) {
    if (w.length < 1) return w;
    return w.substring(0, 1) + '***'
}

const withDraw = () => {
    if (realname.value == '' || bankacc.value == '' || cardnumber.value == '' || amount.value == '') return instance.proxy.$message({ message: '请输入所有字段', duration: 2 })
    if (!realname.value?.match(/^[\u4E00-\u9FFF\u3400-\u4DFF\uF900-\uFAFF]+$/g)) return instance.proxy.$message({ message: '只允许使用汉字', duration: 2 })
    if (!bankacc.value?.match(/^[\u4E00-\u9FFF\u3400-\u4DFF\uF900-\uFAFF]+$/g)) return instance.proxy.$message({ message: '银行账户名称只能使用中文', duration: 2 })
    if (realname.value != userValue?.value?.realname) return instance.proxy.$message({ message: '请使用户名为提', duration: 2 })

    let data = {
        "channelCode": 'bankCard',
        "username": userValue.value?.username,
        "amount": amount.value,
        "accountHolder": realname.value,
        "bankCardAccount": cardnumber.value,//bank account
        "openAccountBank": bankacc.value // bank name
    }
    Loading.showLoading()
    bankApi.MoneyWithdraw({ data: data, key: login?.value?.key }).then((res) => {
        Loading.hideLoading()
        console.log(res, "MoneyWithdraw rrrrrrrrrrrrrr");
        if (res.data.code == '1') {
            instance.proxy.$message({ message: res?.data?.message, duration: 2 })
            globaljs.getUserInfo()
            verifyWith.value = true
            //depo_Dialog.value = false;
            //localStorage.setItem('aa', res?.data?.data)
            //store.commit('pay/MoneyDeposit', res?.data?.data)
           // router.push('/moneyconfirm')
        }
    }).catch((e) => {
        verifyWith.value = false
        Loading.hideLoading()
        console.log(e.response, "ee");
        instance.proxy.$message({ message: e.response?.data.message || '网络错误', duration: 2 })
    })
}



function hideMiddle(string, prefixLength, suffixLength) {
    var re = new RegExp('^(\\+?\\d{' + prefixLength + '})(\\d+)(\\d{' + suffixLength + '})$');

    return string?.replace(re, function (match, prefix, middle, suffix) {
        return prefix + '*'.repeat(middle.length) + suffix;
    });
}

const eventName = (e) => {
    if (!/^[0-9]+$/.test(amount.value)) amount.value = amount.value.replace(/\D/g, '');
    if (amount.value > 100000000) amount.value = 100000000;
    if (amount.value < 0) amount.value = null
}

const goUser = () => {
    router.go(-1)
}

const GetMoneyAddress = () => {
    if (token?.value) {
        let data = {
            "player": login?.value?.info?.username,
            "type": 'BANK'
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
    GetMoneyAddress()
    if (userValue?.value?.user_level < 1) {
        router.push('/')
    }
})
</script>


<style scoped>
.input_foucs:focus-within {
    border: 0;
    outline: none;
    box-shadow: none;
}

.input_foucs:focus {
    outline: 0 !important;
    outline: none !important;
    border: 1px solid gray;
}
</style>