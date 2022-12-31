<template>
    <div class="hidden sm:block relative flex-auto mx-[19px]   ">
        <div class="main">
            <div class="main-content w-full relative">
                <div class="w-full tabs   border-b border-gray-800">
                    <div
                        class="text-base text-center py-1 cursor-pointer w-[140px] tracking-wider border-b border-[#eed0a4]">
                        取款
                    </div>
                </div>
                <section v-if="!verifyWith" class="relative w-full bg-[#1f2129]  my-2 py-[20px] px-[18px]">

                    <div class="py-5 flex flex-col justify-center items-center">
                        <form @click.prevent>
                            <section class="form w-[381px] relative">
                                <div
                                    class="bg-[#13151b] my-2   formDiv relative overflow-hidden flex items-center mx-auto  h-14">
                                    <div
                                        class=" border-none w-full px-3 h-full text-sm flex justify-center items-center relative">
                                        <p class=" whitespace-nowrap text-[#d0d0d0]">真实姓名</p>
                                        <input disabled autocomplete="off" class=" input-name text-[#d0d0d0]   
                                        border-none outline-none focus:outline-none focus:border-none    
                                      w-full h-full" id="name" pattern="" name="name"
                                            :placeholder="hideWord(userValue?.realname)" type="text">
                                    </div>

                                </div>
                                <div class="flex justify-end w-full items-center text-[#858585]  text-sm">
                                    若姓名包含
                                    <span class="text-[#e74747] text-xl mx-2 -mt-2">.</span>
                                    请点
                                    <span class="text-[#eed0a4]">复制</span>
                                    <span>后粘贴</span>
                                </div>
                                <div
                                    class="bg-[#13151b] my-2   formDiv relative overflow-hidden flex items-center mx-auto  h-14">
                                    <div class=" border-none w-full px-3 h-full text-sm flex  items-center relative">
                                        <p class=" whitespace-nowrap text-[#d0d0d0]">余额</p>
                                        <div class="h-5 ml-4 px-6 text-base text-[#d0d0d0] tracking-widest">
                                            {{ userValue?.balance }} ¥
                                        </div>
                                    </div>
                                </div>


                                <div
                                    class="bg-[#13151b] my-2   formDiv relative overflow-hidden flex items-center mx-auto  h-14">
                                    <div
                                        class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                                        <input v-model="amount" autocomplete="off" class=" input-name text-[#d0d0d0]   
                                                                        border-none outline-none focus:outline-none focus:border-none    
                                                                      w-full h-full" id="amount" pattern=""
                                            name="amount" placeholder="请输入取款余额" type="number" min="1" max="100000000"
                                            @input="eventName">
                                        <XIcon v-if="amount" @click="amount = ''"
                                            class="h-5 w-5 cursor-pointer  absolute right-3  ">
                                        </XIcon>

                                    </div>
                                </div>
                                <p class="px-2 text-[12px] text-red-500">本平台为了贵宾您的账户资金安全,只能使 用贵宾您本人的存款的卡号进行取款(同卡存 同卡取。
                                    客服链接
                                </p>

                                <div
                                    class="bg-[#13151b] my-2   formDiv relative overflow-hidden flex items-center mx-auto  h-14">
                                    <div
                                        class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                                        <input v-model="realname" autocomplete="off" class=" input-name text-[#d0d0d0]   
                                                                        border-none outline-none focus:outline-none focus:border-none    
                                                                        pr-10 w-full h-full" id="realname" pattern=""
                                            name="realname" placeholder="持卡人" type="text">
                                        <XIcon v-if="realname" @click="realname = ''"
                                            class="h-5 w-5 cursor-pointer  absolute right-3  ">
                                        </XIcon>

                                    </div>
                                </div>
                                <p class="px-2 py-1 text-[12px] text-red-500">请使用户名为提*的银行卡转账,否则将无法到账 ,如需更改姓名请联系在线客服 客服链接
                                </p>

                                <div
                                    class="bg-[#13151b] my-2   formDiv relative overflow-hidden flex items-center mx-auto  h-14">
                                    <div
                                        class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                                        <input v-model="cardnumber" autocomplete="off" class=" input-name text-[#d0d0d0]   
                                                                        border-none outline-none focus:outline-none focus:border-none    
                                                                    pr-10  w-full h-full" id="cardnumber" pattern=""
                                            name="cardnumber" placeholder="卡号" type="text">
                                        <XIcon v-if="cardnumber" @click="cardnumber = ''"
                                            class="h-5 w-5 cursor-pointer  absolute right-3  ">
                                        </XIcon>

                                    </div>
                                </div>
                                <div
                                    class="bg-[#13151b] my-3   formDiv relative overflow-hidden flex items-center mx-auto  h-14">
                                    <div
                                        class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                                        <input v-model="bankacc" autocomplete="off" class=" input-name text-[#d0d0d0]   
                                    pr-10 border-none outline-none focus:outline-none focus:border-none    
                                                                      w-full h-full" id="bankacc" pattern=""
                                            name="bankacc" placeholder="开户行" type="text">
                                        <XIcon v-if="bankacc" @click="bankacc = ''"
                                            class="h-5 w-5 cursor-pointer  absolute right-3  ">
                                        </XIcon>

                                    </div>
                                </div>

                                <div v-if="moneyAddData?.length > 0">
                                    <p>使用取款户进行取款</p>
                                    <div @click="addAdd()"
                                        class="bg-[#13151b] my-3 cursor-pointer z-10   formDiv relative overflow-hidden flex items-center mx-auto  h-14">

                                        <div
                                            class=" border-none w-full h-full text-sm flex justify-between px-4 items-center relative">
                                            <div class=" space-x-3">
                                                <span>取款至</span>
                                                <span>工商银行({{ hideWord(moneyAddData[0]?.ma_id) }})</span>
                                            </div>
                                            <div>
                                                <ChevronRightIcon class="w-7 h-7"></ChevronRightIcon>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <!-- <div v-if="bank_list_dialog" class=" w-full overflow-y-hidden  ">
                                    <div
                                        class="px-0 w-full  cursor-pointer   flex flex-col items-center justify-center  ">
                                        <div v-for="(bank) in moneyAddData" :key="bank.id" @click="chooseBank(bank)"
                                            class="flex border-b border-[#202330] 
                    items-center text-center text-[18px] text-[#d0d0d0] center z-20 py-4 bg-[#272c33] px-3 w-full">
                                            <div class=" space-x-2 w-full flex items-center">
                                                <span class="w-[100px]  text-left"> {{ bank?.ma_address }}</span>
                                                <span class="text-base">({{ hideMiddle(bank?.ma_id, 2, 2) }})</span>
                                            </div>
                                        </div>
                                        <div @click="bank_list_dialog = false"
                                            class="flex cursor-pointer items-center py-3 my-3 text-center text-[18px] justify-center bg-[#272c33] px-2 w-full">
                                            取消
                                        </div>
                                    </div>
                                </div> -->



                                <section class="btn py-5">
                                    <button @click="withDraw()"
                                        class="py-3 cursor-pointer text-base w-full btn_login text-center">
                                        提交
                                    </button>
                                </section>

                            </section>
                        </form>
                    </div>


                </section>

                <section v-if="verifyWith" class="relative w-full bg-[#1f2129]   my-2 py-[20px] px-[18px]">
                    <div class="flex flex-col space-y-3 items-center justify-center py-5 text-lg w-full ">
                        <div class=" flex items-center justify-center  h-14 w-14 bg-[#bc6013] rounded-full">
                            <CheckIcon class="w-6 h-6 text-white"></CheckIcon>
                        </div>
                        <p>提现成功</p>
                        <div class="py-3 w-[300px]">
                            <div @click="goHome"
                                class="btn_login text-lg w-full py-3 text-center font-medium tracking-wider text-[#272c33]">
                                去游戏</div>
                        </div>
                    </div>
                </section>

            </div>
        </div>

            <!-- dialog -->
    <NotCloseDialog :show="bank_list_dialog" @close="bank_list_dialog = false">
        <div class="w-[700px] min-w-[300px]   py-10 text-white px-3  ">
            <div v-if="bank_list_dialog" class=" max-w-full w-[350px] justify-center mx-auto cursor-pointer flex items-center overflow-y-hidden  ">
                                    <div
                                        class="px-0 w-full  cursor-pointer   flex flex-col items-center justify-center  ">
                                        <div v-for="(bank) in moneyAddData" :key="bank.id" @click="chooseBank(bank)"
                                            class="flex border-b border-[#202330] 
                    items-center text-center text-[18px] text-[#d0d0d0] center z-20 py-4 bg-[#272c33] px-3 w-full">
                                            <div class=" space-x-2 w-full flex items-center">
                                                <span class="w-[100px]  text-left"> {{ bank?.ma_address }}</span>
                                                <span class="text-base">({{ hideMiddle(bank?.ma_id, 2, 2) }})</span>
                                            </div>
                                        </div>
                                        <div @click="bank_list_dialog = false"
                                            class="flex cursor-pointer items-center py-3 my-3 text-center text-[18px] justify-center bg-[#272c33] px-2 w-full">
                                            取消
                                        </div>
                                    </div>
                                </div>
        </div>
    </NotCloseDialog>
        

    </div>

</template>

<script setup>
import { XIcon } from "@heroicons/vue/solid";
import { ChevronRightIcon, CheckIcon } from "@heroicons/vue/outline";
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted, computed } from 'vue'
import NotCloseDialog from "@/components/NotCloseDialog.vue";
import { getCurrentInstance } from 'vue';
import { useStore } from "vuex";
import bankApi from "@/network/bank.js";
import Loading from "@/utils/loader";
import AES from '@/utils/aes';
import globaljs from '@/utils/global'

const instance = getCurrentInstance()


const bank_list_dialog = ref(false)
const money = ref(["200", "500", "1000", "3000", "5000", "10000"])
const amount = ref('')
const activeMoney = ref(0)
const realname = ref('')
const cardnumber = ref('')
const bankacc = ref('')
const moneyAddData = ref(null)

const verifyWith = ref(false)


const store = useStore()
const router = useRouter()
const route = useRoute();
const login = computed(() => store.getters["user/LOGIN"]);
const userValue = computed(() => store.getters["user/USERINFO"]);
const token = computed(() => store.getters["user/LToken"]);
const gameEn = computed(() => store.getters["app/GameEn"]);

const goUser = () => {
    router.go(-1)
}

const eventName = (e) => {
    if (!/^[0-9]+$/.test(amount.value)) amount.value = amount.value.replace(/\D/g, '');
    if (amount.value > 100000000) amount.value = 100000000;
    if (amount.value < 0) amount.value = null
}

const moneyClick = (n, mon) => {
    activeMoney.value = n
    amount.value = mon
}

const chooseBank = (bank) => {
    console.log(bank);
    cardnumber.value = bank.ma_id
    bankacc.value = bank.ma_address
    realname.value = bank.ma_name
    bank_list_dialog.value = false
}

const goHome = () => {
    router.push('/home')
}


function addAdd() {
    console.log("daffsaafsadf", bank_list_dialog.value);
    bank_list_dialog.value = true
}

function hideWord(w) {
    if (w?.length < 1) return w;
    return w?.substring(0, 1) + '*'.repeat(w?.length - 1);
}

function hideMiddle(string, prefixLength, suffixLength) {
    var re = new RegExp('^(\\+?\\d{' + prefixLength + '})(\\d+)(\\d{' + suffixLength + '})$');

    return string?.replace(re, function (match, prefix, middle, suffix) {
        return prefix + '*'.repeat(middle?.length) + suffix;
    });
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
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)
    Loading.showLoading()
    bankApi.MoneyWithdraw({ data: data, key: login?.value?.key }).then((res) => {
        Loading.hideLoading()
        console.log(res, "MoneyWithdraw rrrrrrrrrrrrrr");
        if (res.data.code == '1') {
            instance.proxy.$message({ message: res?.data?.message, duration: 2 })
            globaljs.getUserInfo()
            verifyWith.value = true
            //depo_Dialog.value = false;

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
    if (!token?.value) return router.push('/login')
    GetMoneyAddress()
    if (userValue?.value?.user_level < 1) {
        router.push('/')
    }
})
</script>

<style scoped>
.formDiv:focus-within {
    background-color: #ffffff !important;
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
    color: black !important;
}
</style>