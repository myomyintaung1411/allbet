<template>
    <div class="hidden sm:block relative flex-auto mx-[19px] bg-[#0d0d0f] cursor-pointer">
        <div class="main">
            <div class="main-content w-full relative">
                <div
                    class="w-full pt-2 tabs flex items-center justify-between space-x-5   border-b border-[#7e7e7e] border-dashed">
                    <div
                        class="text-base link_phone text-[#d0d0d0] text-center py-3 cursor-pointer w-[120px] tracking-wider border-b border-[#eed0a4] ">
                        我的账户

                    </div>
                </div>
                <div class="flex justify-between  h-[230px] w-full my-2 ">
                    <div class="w-[300px] text-[12px] text-[#a6a6a6] px-2 py-2 bg-[#1f2129]">
                        <div class="h-[70px] border-b border-[#4c4c54] border-dashed ">
                            <div class="flex items-center justify-between">
                                <p class="text-[#cbcbcb] text-[14px] first-letter:text-red-700">{{ userValue?.username }}
                                </p>
                                <div>晋级条件 ></div>
                            </div>
                            <div class="flex items-center justify-between pt-2">
                                <div class="w-16 relative h-7 ">
                                    <img src="@/assets/mobile/user/level.png" alt="" class="w-full h-6">
                                    <div
                                        class=" text-right absolute top-[2px] right-1 w-full h-7 text-[#5e3f15] text-[13px] ">
                                        {{ userValue?.user_level }}</div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex justify-around items-center px-4 h-[70px] border-b border-[#4c4c54] border-dashed">
                        </div>
                        <div class="flex justify-around items-center px-4 h-[70px]">
                            <a>
                                <div class="h-[29px] w-[74px] flex items-center justify-center text-[12px] text-[#a6a6a6]
                                 border border-[#5b5b5b]
                                ">修改限红</div>
                            </a>
                            <div class="h-[29px] border-r border-[#282b30]"></div>
                            <a class="text-center">
                                <router-link to="/pc/feedback" class="h-[29px] flex items-center justify-center  w-[74px] text-[12px] text-[#a6a6a6]
                                 border border-[#5b5b5b]
                                ">问题反馈</router-link>
                            </a>
                        </div>
                    </div>
                    <!--  -->
                    <section class="h-full w-[475px] bg-[#1f2129] mx-1">
                        <div class="h-full">
                            <div class="relative px-2 py-2 h-[80px] border-b border-[#282b30] mb-3">
                                <div class="flex items-center text-[#a6a6a6] text-base">
                                    <p>账户总额度</p>
                                </div>
                                <div class="py-2 flex items-center space-x-3">
                                    <img src="@/assets/USDT.svg" alt="" class="w-5 h-5">
                                    <div class="fon-bold text-xl">{{ (userValue?.balance || 0) }}</div>
                                    <img src="@/assets/mobile/user/load.png" alt="" class="w-4 h-4">
                                </div>
                            </div>
                            <div class="h-[120px]  flex items-center justify-around px-2">
                                <div class="flex flex-col items-center h-full  justify-center">
                                    <p class="text-[#7e7e7e] text-[18px]">用户名</p>
                                    <span class="text-[#eed0a4] text-sm">{{ userValue?.username }}</span>
                                </div>
                                <div class="flex  flex-col items-center justify-center">
                                    <p class="text-[#7e7e7e] text-[18px]">真实姓名</p>
                                    <span class="text-[#eed0a4] text-sm">{{ hideWord(userValue?.realname) }}</span>
                                </div>
                                <div class="flex flex-col items-center  justify-center">
                                    <p class="text-[#7e7e7e] text-[18px]">等级</p>
                                    <span class="text-[#eed0a4] text-sm">{{ userValue?.user_level }}</span>
                                </div>
                                <div class="flex flex-col  items-center justify-center">
                                    <p class="text-[#7e7e7e] text-[18px]">手机号</p>
                                    <span class="text-[#eed0a4] text-sm">{{ hideMiddle(userValue?.phone, 2, 2) }}</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="w-[140px] ml-2 relative flex flex-col justify-between">
                        <router-link :to="activeTab == 1 ? '/pc/moneyDeposit' : '/pc/usdtDeposit'"
                            class="h-[97px] flex text-[18px] flex-col justify-center items-center w-full text-[#272c33] border-none outline-none"
                            style="background-image: linear-gradient(-14deg,#a0511a,#ff7f27);">
                            <CreditCardIcon class="w-9 h-9"></CreditCardIcon>
                            <span>存款</span>
                        </router-link>
                        <a @click="goWithDraw"
                            class="bg-[#282b30] border-none text-[#7e7e7e] h-[45px] text-[17px] flex items-center justify-center">
                            取款
                        </a>
                        <a @click="goWash"
                            class="bg-[#282b30] border-none text-[#7e7e7e] h-[45px] text-[17px] flex items-center justify-center">
                            洗码
                        </a>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
import { getCurrentInstance } from 'vue';
import {CreditCardIcon} from  "@heroicons/vue/solid";
const instance = getCurrentInstance()
const router = useRouter()
const activeRoute = ref("");
const route = useRoute();
const store = useStore()
const deg = ref(0);
const activeTab = ref(1)


const user = computed(() => store.getters["user/LOGIN"]);
const userValue = computed(() => store.getters["user/USERINFO"]);
const token = computed(() => store.getters["user/LToken"]);
const marquee = computed(() => store.getters["app/marqueeData"])

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

if (localStorage.getItem('tab')) {
    activeTab.value = localStorage.getItem('tab')
}

const goWithDraw = () => {
    if (userValue?.value?.is_set_phone == 0) {

        instance.proxy.$message({ message: '为了您的账户安全，请先绑定手机号。', duration: 2 })
        setTimeout(() => {
            router.push('/pc/accsetting')
        }, 1000);
        return
    }
    if (activeTab.value == 1 && userValue?.value?.user_level < 1) {
        return instance.proxy.$message({ message: '您尚未到达取款等级', duration: 2 })
    }

    if (activeTab.value == 1 && userValue?.value?.user_level >= 1 && userValue?.value?.is_set_phone == 1 && userValue?.value?.is_set_cash_password
        == 0) {
        router.push({ path: '/pc/PcbindPhoneForWithdraw', query: { type: 'BANK' } })
    }

    if (activeTab.value == 1 && userValue?.value?.user_level >= 1 && userValue?.value?.is_set_phone == 1 && userValue?.value?.is_set_cash_password
        == 1) {
        router.push('/pc/bindWithdrawpass')
    }
    //usdt withdrawal
    if (activeTab.value == 2 && userValue?.value?.is_add_usdt_info == 0) return instance.proxy.$message({ message: '请先添加USDT地址', duration: 2 })
    if (activeTab.value == 2 && userValue?.value?.is_set_phone == 1) {
        router.push({ path: '/pc/PcbindPhoneForWithdraw', query: { type: 'USDT' } })
    }
}

const goWash = () => {
    router.push('/pc/wash')
}

onMounted(() => {
    if (!token?.value) {
        router.push('/')
    }
})

</script>