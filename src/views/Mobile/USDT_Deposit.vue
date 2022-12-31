<template>
    <div class="w-full h-screen   relative">
        <div class="h-[60px]  w-full text-gray-200   px-2 flex justify-between items-center">
            <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
            <p class=" text-[17px]"> 存款 </p>
            <div @click="goService">

                <img src="@/assets/mobile/home/service.png" alt="" class="w-8 h-7">
            </div>
        </div>
        <div class="px-5 py-2 text-base text-white font-bold">
            USDT存款
        </div>

        <section class="py-3 px-5  w-full ">
            <div @click="usdtMore = !usdtMore" class="h-14  bg-[#282b32] flex items-center  px-2 space-x-2">
                <p class="text-[#bc6013] whitespace-nowrap">我没USDT</p>
                <p class="text-[12px] text-[#d0d0d0] whitespace-nowrap">到交易所用人民币买到钱包</p>
                <div class="flex items-center">
                    <img src="@/assets/xx.png" alt="" class="h-[20px] w-auto object-contain">
                    <img src="@/assets/yy.png" alt="" class="h-[20px] w-auto object-contain">
                    <img src="@/assets/zz.png" alt="" class="h-[20px] w-auto object-contain">
                </div>
                <div>
                    <ChevronDownIcon v-if="!usdtMore" class="w-5 h-5 text-white"></ChevronDownIcon>
                    <ChevronUpIcon v-else class="w-5 h-5 text-white"></ChevronUpIcon>
                </div>
            </div>
            <div v-if="usdtMore" class="flex flex-wrap pb-2 ml-3  mx-auto">
                <div v-for="data in usdtPic" :key="data.id"
                    class="flex relative items-center justify-center bg-[#d0d0d0] mr-2 mb-2 w-[47%] h-20">
                    <img :src="data.pic" alt="" loading="lazy" class="w-28">
                </div>
            </div>
        </section>
        <section class="py-0 px-5 w-full  ">
            <div class="mx-auto  py-2">
                <div class=" bg-[#282b32] py-4 flex items-center  px-2 space-x-2">
                    <p class="text-[#bc6013]">我有USDT</p>
                    <p class="text-[12px] text-[#d0d0d0]">请用您的USDT钱包存款</p>

                </div>
            </div>
        </section>

        <section class="w-full px-5 pt-8 pb-3">
            <div class="flex items-center  w-full mx-4 space-x-2">
                <div @click="clickCard(0)" class=" py-2 px-1 whitespace-nowrap flex items-center space-x-2  w-[45%] 
                        border border-solid"
                    :class="activeCard == 0 ? ' border-[#bc6013] text-[#efae3d]' : ' border-[#2f343c] text-[#d0d0d0]'">
                    <img src="@/assets/mobile/user/de.png" alt="" class="w-6 h-6">
                    <div class="text-[10px]">
                        <p class="text-sm">小金库</p>
                        <p>官方合作，到账快</p>
                    </div>
                </div>
                <div @click="clickCard(1)" class=" py-2 px-1 whitespace-nowrap flex items-center space-x-2  w-[45%] 
                        border border-solid"
                    :class="activeCard == 1 ? ' border-[#bc6013] text-[#efae3d]' : ' border-[#2f343c] text-[#d0d0d0]'">
                    <img src="@/assets/mobile/user/t.png" alt="" class="w-6 h-6">
                    <div class="text-[10px]">
                        <p class="text-sm"> 其他钱包</p>
                        <p>任意支持USDT的钱包</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="w-full px-5 py-3">
            <div class="mx-auto bg-[#282b32] py-2 px-3 flex items-center justify-between">
                <div class="flex items-center text-[13px] space-x-2 text-[#d0d0d0]">
                    <img src="@/assets/mark.png" alt="" class="w-3">
                    <p class="mt-[2px]">协议选择</p>
                </div>
                <RadioGroup v-model="usdtType">
                    <div class="flex  justify-between w-[210px]  items-center">
                        <RadioGroupOption v-slot="{ checked, active }" value="TRC20">
                            <div class="flex space-x-3 items-center">
                                <div class="w-4 h-4 " :class="[
                                    active
                                        ? ''
                                        : '',
                                    checked ? 'bg-[#bc6013]  ' : 'bg-white ',
                                ]">
                                    <div v-show="checked"
                                        class="shrink-0 text-white flex justify-center items-center h-full">
                                        <CheckIcon class="w-3 h-3"></CheckIcon>
                                    </div>
                                </div>

                                <span :class="checked ? 'text-[#d0d0d0]' : 'text-[#d0d0d0]'">TRC20 <span
                                        class="text-[#bc6013]">(推荐)</span></span>
                            </div>

                        </RadioGroupOption>
                        <RadioGroupOption v-slot="{ checked, active }" value="ERC20">
                            <div class="flex space-x-3 items-center">
                                <div class="w-4 h-4 " :class="[
                                    active
                                        ? ''
                                        : '',
                                    checked ? 'bg-[#bc6013] ' : 'bg-white ',
                                ]">
                                    <div v-show="checked"
                                        class="shrink-0 text-white flex justify-center items-center h-full">
                                        <CheckIcon class="w-3 h-3"></CheckIcon>
                                    </div>
                                </div>

                                <span :class="checked ? 'text-[#d0d0d0]' : 'text-[#d0d0d0]'">ERC20</span>
                            </div>
                        </RadioGroupOption>
                    </div>
                </RadioGroup>
            </div>
        </section>

        <section class="px-4 py-3 border-t border-[#272c33] w-full">
            <div class="flex flex-wrap  justify-center  ">
                <div v-for="(mon, n) in money" :key="n" @click="moneyClick(n, mon)"
                    :class="activeMoney == n ? ' border border-solid border-[#bc6013] text-[#efae3d]' : 'text-white border border-solid border-[#272c33] '"
                    class="w-[30%]   mx-[5px] my-2    cursor-pointer
                text-center py-2 text-base">
                    {{ mon }}
                </div>
            </div>
            <div class="relative px-2 py-2">
                <form @click.prevent>
                    <div class="relative">
                        <input v-model="amount" type="number" min="1" max="100000000" @input="eventName"
                            placeholder="存款金额  20USDT起，最多100万USDT"
                            class="w-full input_foucs left-11  h-12 bg-transparent border border-solid border-[gray] text-[#efae3d]">
                        <XIcon v-if="amount" @click="amount = ''"
                            class="h-5 w-5 cursor-pointer top-3  absolute right-6  "></XIcon>
                    </div>
                </form>
            </div>
        </section>

        <section class="pb-3 flex items-center px-6 space-x-2">
            <div class="p1-2 px-2 rounded bg-[#0e4e30] text-white">汇率</div>
            <p class="text-[#0b8a4f] mt-1">1USDT = 7.2 RMB</p>
        </section>

        <section class="px-6 py-2 ">
            <div @click="gonext()" class="py-5 text-base w-full btn_login text-center font-bold">
                下一步
            </div>
        </section>
        <div class=" relative mt-2  flex items-center __bgdcbox">

        </div>

    </div>
</template>
  
<script setup>
import { XIcon, CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/solid";
import { ChevronLeftIcon } from "@heroicons/vue/outline";
import { useRouter } from 'vue-router';
import { ref, reactive, onMounted, computed } from 'vue'
import { useStore } from "vuex";

import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupDescription,
    RadioGroupOption,
} from '@headlessui/vue'
import NotCloseDialog from "@/components/NotCloseDialog.vue";
const depo_Dialog = ref(false)
const activeMoney = ref(0)
const activeCard = ref(0)
const usdtMore = ref(false)
const router = useRouter()
const store = useStore()

const amount = ref('')
const name = ref('')
const usdtType = ref('TRC20')

const money = ref(["200", "500", "1000", "3000", "5000", "10000"])
const usdtPic = reactive([
    { id: 1, pic: '/public/usdt1.webp' },
    { id: 2, pic: '/public/usdt2.webp' },
    { id: 3, pic: '/public/usdt3.webp' },
    { id: 4, pic: '/public/usdt4.webp' },
    { id: 5, pic: '/public/usdt5.webp' },
    { id: 6, pic: '/public/usdt6.webp' },
    { id: 7, pic: '/public/usdt7.webp' },
    { id: 8, pic: '/public/usdt8.webp' },
])
const token = computed(() => store.getters["user/LToken"]);
const userValue = computed(() => store.getters["user/USERINFO"]);

const eventName = (e) => {
    if (!/^[0-9]+$/.test(amount.value)) amount.value = amount.value.replace(/\D/g, '');
    if (amount.value > 100000000) amount.value = 100000000;
    if (amount.value < 0) amount.value = null
}

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

const clickCard = (number) => {
    activeCard.value = number
    console.log(activeCard.value);
}

const goUser = () => {
    router.go(-1)
}

const gonext = () => {
    router.push('/usdtdepositConfirm')
}

onMounted(() => {
    if (!token?.value) return router.push('/login')

    depo_Dialog.value = false
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

.__bgdcbox {
    background-image: url("@/assets/bggg.png");
    background-repeat: no-repeat;
    background-size: 100%;
    height: 80px;
    width: 100%;
}
</style>