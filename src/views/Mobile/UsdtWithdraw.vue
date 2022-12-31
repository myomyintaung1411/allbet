<template>
    <div class="w-full  relative overflow-x-hidden">
        <div class="h-[60px]  w-full text-gray-200   px-2 flex justify-between items-center">
            <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
            <p class=" text-[17px] mr-7">USDT取款</p>
            <div @click="goService">

                <img src="@/assets/mobile/home/service.png" alt="" class="w-8 h-7">
            </div>
        </div>


        <section>
            <section class="py-2 px-5 bg-[#13151b]">
                <div class="w-full  py-2 text-[#7e7e7e]">
                    <div class="text-base border-b border-[#333] py-2">
                        可取款金额
                    </div>
                    <div class="flex items-center py-2 space-x-2">
                        <img src="@/assets/usdt.svg" alt="" class="w-8 h-8">
                        <p class="text-2xl">0</p>
                    </div>
                </div>
            </section>
            <section class="py-3 mt-2  px-5 bg-[#13151b] text-[#d0d0d0]">
                <div @click="usdt_dialog = true"
                    class="flex items-center border-b py-3 border-[#333] justify-between text-[19px]">
                    <div class="flex items-center space-x-3 whitespace-normal">
                        <span>取款至</span>
                        <img src="@/assets/cc_card.webp" alt="" class="w-6 h-6">
                        <span>{{ usdtType }}({{ hideWord(usdtAddress) }})</span>
                    </div>
                    <div>
                        <ChevronRightIcon class="w-7 h-7"></ChevronRightIcon>
                    </div>
                </div>
                <div class="py-3">
                    <p class="text-base py-3">取款金额</p>

                    <form @click.prevent class="w-full text-start text-[#7e7e7e]">
                        <div class="relative flex items-center w-full border-b border-[#333]    ">
                            <div>
                                <img src="@/assets/usdt.svg" alt="" class="w-7 h-7">
                            </div>
                            <input v-model="amount" type="number" @input="eventName" placeholder="限额300-500万元"
                                maxlength="6" min="6" max="6"
                                class="w-full outline-none px-5 border-none input_ placeholder:text-[#7e7e7e]    p-0 h-12 bg-transparent   text-start ">
                            <div class="cursor-pointer top-3 text-[#bc6013]  absolute right-3  ">
                                全部取款
                            </div>
                        </div>
                    </form>

                </div>
            </section>

            <section class="px-6 py-3 ">
                <div @click="withUsdt()" class="py-5 text-base w-full btn_login text-center">
                    提交
                </div>
            </section>
        </section>

        <section v-if="usdt_dialog"
            class="absolute z-10 bottom-[0px] w-full overflow-y-hidden  h-full bg-[rgba(0,0,0,0.72)]">
            <div class="px-5 w-full fixed h-[screen] bottom-0 z-20  bg-[rgba(0,0,0,0.72)]">
                <div v-for="(bank) in moneyAddData" :key="bank.id" @click="chooseBank(bank)"
                    class="flex border-b border-[#202330] 
            items-center text-start space-x-2    overflow-hidden text-ellipsis text-[#d0d0d0]  py-4 bg-[#272c33] px-2 w-full">
                    <span class="text-[18px]">{{ bank.type }}</span>
                    <span
                        class="text-[12px] w-[80%]  overflow-hidden text-ellipsis whitespace-nowrap">{{ bank.ma_id }}</span>
                </div>
                <div @click="usdt_dialog = false"
                    class="flex items-center py-3 my-3 text-center text-[18px] justify-center bg-[#272c33] px-2 w-full">
                    取消
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
import { XIcon, ChevronRightIcon } from "@heroicons/vue/outline";
import { ChevronLeftIcon } from "@heroicons/vue/outline";
import userApi from "@/network/user.js";
import Loading from "@/utils/loader";
import bankApi from "@/network/bank.js";
import NotCloseDialog from "@/components/NotCloseDialog.vue";

import { ref, computed, onMounted } from 'vue'
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance()
const money = ref(["200", "500", "1000", "3000", "5000", "10000"])
const amount = ref('200')
const activeMoney = ref(0)

const router = useRouter()
const store = useStore()
const userValue = computed(() => store.getters["user/USERINFO"]);
const login = computed(() => store.getters["user/LOGIN"]);
const token = computed(() => store.getters["user/LToken"]);
const gameEn = computed(() => store.getters["app/GameEn"]);

const usdt_dialog = ref(false)

const usdtType = ref('')
const usdtAddress = ref('')

const moneyAddData = ref(null)



const goService = () => {
    if (token?.value) {
        window.open(`http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293&nick_name=${userValue?.value.username}`)
    } else {
        window.open('http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293')
    }
}



const moneyClick = (n, mon) => {
    activeMoney.value = n
    amount.value = mon
}

const chooseBank = (bank) => {
    console.log(bank);
    usdtAddress.value = bank.ma_id
    usdtType.value = bank.type
    usdt_dialog.value = false
}

function hideWord(w) {
    if (w.length < 1) return w;
    return w.substring(0, 1) + '***'
}

const withUsdt = () => {
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
            "type": 'USDT'
        }
        const encrypttxt =  AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)
        bankApi.GetMoneyAddress({data: data,key:login?.value?.key}).then((res) => {
            if (res.data.code == '1') {
                console.log("res of GetMoneyAddress data", res);
                moneyAddData.value = res?.data?.data
                usdtType.value = moneyAddData.value[0]?.type
                usdtAddress.value = moneyAddData.value[0]?.ma_id
            }
        }).catch((e) => {

            console.log(e);
        })
    }
}
onMounted(() => {
    GetMoneyAddress()
})
</script>


<style scoped>
.input_:focus {
    outline: 0 !important;
    outline: none !important;
}

.input_:focus-within {
    border: 0;
    outline: none;
    box-shadow: none;
}
</style>