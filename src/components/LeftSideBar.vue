<script setup>
import { useRouter, useRoute } from "vue-router";
import { onMounted, ref, watch, computed } from "vue";
import { useStore } from "vuex";
import globaljs from '@/utils/global'
import { CreditCardIcon, LogoutIcon } from "@heroicons/vue/outline";
import NotCloseDialog from "@/components/NotCloseDialog.vue";
import { getCurrentInstance } from 'vue';
import AES from '@/utils/aes';

const instance = getCurrentInstance()
const router = useRouter()
const activeRoute = ref("");
const route = useRoute();
const store = useStore()
const deg = ref(0);
const activeYen = ref(true)
const activeUSDT = ref(false)
const logoutDialog_ = ref(false)
const activeTab = ref(1)

const user = computed(() => store.getters["user/LOGIN"]);
const userValue = computed(() => store.getters["user/USERINFO"]);
const token = computed(() => store.getters["user/LToken"]);
const marquee = computed(() => store.getters["app/marqueeData"])
const gameEn = computed(() => store.getters["app/GameEn"]);

watch(
    () => route.path,
    () => {
        console.log(route.path, "watching");
        activeRoute.value = route.path;
    },
    { immediate: true, deep: true }
);

const goReg = () => {
    router.push('/register')
}
const goLogin = () => {
    router.push('/login')
}

const logout = () => {
    logoutDialog_.value = false
    localStorage.clear()
    router.push('/')
    setTimeout(() => {
        window.location.reload()
    }, 1000);
}

if (localStorage.getItem('tab')) {
    activeTab.value = localStorage.getItem('tab')
}

const moneyActive = (number) => {
    activeTab.value = number
    localStorage.setItem('tab', number)
    if( number == 1 && (activeRoute.value === '/pc/addBankCard' || activeRoute.value === '/pc/addUsdtCard')){
        router.push('/pc/addBankCard')
    }
    if( number == 2 && (activeRoute.value === '/pc/addBankCard' || activeRoute.value === '/pc/addUsdtCard')){
        router.push('/pc/addUsdtCard')
    }
}

const getUserInfo = () => {
    console.log("clickedddddddddd");
    deg.value += 360;
    return globaljs.getUserInfo()
}

//bind phone
const addAccount = () => {
    if(!token.value){
        router.push('/login')
    }
    if (userValue?.value?.is_set_phone == 0) {

        instance.proxy.$message({ message: '为了您的账户安全，请先绑定手机号。', duration: 2 })
        setTimeout(() => {
            router.push('/pc/accsetting')
        }, 1000);
        return
    }
    
    if (activeTab.value == 1) {
                router.push('/pc/addBankCard')
            } else {
                router.push('/pc/addUsdtCard')
            }
}

const goUserInfo = (number) => {
    if (!token?.value) return router.push('/login')
    console.log("number", number);
    switch (number) {
        case 1:
            if (userValue?.value?.is_set_phone == 0) {

                instance.proxy.$message({ message: '为了您的账户安全，请先绑定手机号。', duration: 2 })
                setTimeout(() => {
                    router.push('/pc/accsetting')
                }, 1000);
                return
            }

            if (activeTab.value == 1) {
                router.push('/pc/moneyDeposit')
            } else {
                router.push('/pc/usdtDeposit')
            }
            break;
        case 2:
            router.push('/pc/wash')
            break;
        case 3:
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
                    router.push({path:'/pc/PcbindPhoneForWithdraw',query:{type:'BANK'}})
            }

            if (activeTab.value == 1 && userValue?.value?.user_level >= 1 && userValue?.value?.is_set_phone == 1 && userValue?.value?.is_set_cash_password
                == 1) {
                router.push('/pc/bindWithdrawpass')
            }
            //usdt withdrawal
            if(activeTab.value == 2 && userValue?.value?.is_add_usdt_info == 0)return instance.proxy.$message({ message: '请先添加USDT地址', duration: 2 })
            if (activeTab.value == 2 && userValue?.value?.is_set_phone == 1) {
                router.push({path:'/pc/PcbindPhoneForWithdraw',query:{type:'USDT'}})
            }

            break;
        case 4:
            router.push('/pc/PcUsdtBuy')
            break;
        case 5:
            router.push('/pc/PcUsdtSell')
            break;

        default:
            break;
    }
}
</script>
    
<template>
    <div class="h-full w-[212px] min-w-[212px] flex flex-col relative">
        <div v-if="!token">
            <div @click="goReg()"
                class="h-[100px] cursor-pointer flex flex-col w-full bg_user relative justify-center items-center">
            </div>
            <div class="py-2">
                <div @click="goLogin()" class="h-[70px] cursor-pointer w-full ">
                    <img src="@/assets/pc/Home/txt2.png" alt="" class="w-full h-full">
                </div>
            </div>
        </div>
        <div v-else>
            <div class="bg-[#24252a] h-[70px] __bginfo mb-2 px-2 py-1 cursor-pointer">
                <div class="first-letter:text-red-700 tracking-[5px] text-white">{{ userValue?.username }}</div>
                <div class="flex relative items-center space-x-3">
                    <div class="w-[67px] relative h-3 ">
                        <img src="@/assets/mobile/user/level.png" alt="" class="w-auto h-6">
                        <div class=" text-right absolute top-[3px] right-1 text-sm w-full h-6 text-[#5e3f15]  ">
                            {{ userValue?.user_level }}</div>
                    </div>
                    <div class="w-4 h-3 absolute top-[5px] left-20">
                        <img src="@/assets/mobile/user/gurad.png" alt="" class="w-auto h-auto">
                    </div>
                    <router-link to="/pc/notification" class="w-4 h-4 absolute top-[4px] right-2">
                        <div class="relative">
                            <img src="@/assets/pc/notiii.png" alt="" class="w-auto h-auto" />
                            <!-- <div class="absolute -top-2 -left-4 bg-red-700 rounded-full h-5 w-5 ">
                    <p class="text-sm p-0 m-0 text-[10px] text-center">10</p>
                </div> -->
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="w-full  bg-[#24252a] border-b border-[#525050] py-2 relative cursor-pointer">
                <div class="w-full flex justify-center items-center space-x-7 ">
                    <div @click="moneyActive(1)">
                        <img v-if="(activeTab == 1)" src="@/assets/mobile/user/yena.png" alt="" class="w-auto h-7">
                        <img v-else src="@/assets/mobile/user/yen.png" alt="" class="w-auto h-7">
                    </div>
                    <div class="h-4 w-[1px] bg-[#585858]"></div>
                    <div @click="moneyActive(2)">
                        <img v-if="(activeTab == 2)" src="@/assets/mobile/user/USDTa.png" alt="" class="w-auto h-7">
                        <img v-else src="@/assets/mobile/user/USDT.png" alt="" class="w-auto h-7">

                    </div>

                </div>
                <div class="flex items-center relative pt-2 px-3 ">
                    <div>
                        <img src="@/assets/mobile/user/money.png" alt="" class="w-5 h-5" />
                    </div>
                    <div class="text-base pt-1 px-3 text-[white]">{{ userValue?.ye || 0 }}</div>
                    <div class="text-base pt-1 px-3 absolute right-0">
                        <img @click="getUserInfo()" v-bind:style="{ transform: `rotate(${deg}deg)` }"
                            src="@/assets/mobile/user/load.png" alt="" class="w-4 h-4 transition ">
                    </div>
                </div>
            </div>
            <div class="bg-[#24252a] mb-2">
                <div class="h-[70px] cursor-pointer w-full  justify-evenly flex items-center ">
                    <div @click="goUserInfo(1)">
                        <img src="@/assets/mobile/user/card.png" alt="" class="w-auto h-8">
                    </div>
                    <div @click="goUserInfo(2)">
                        <img src="@/assets/mobile/user/card22.png" alt="" class="w-auto h-8">
                    </div>
                    <div @click="goUserInfo(3)">
                        <img src="@/assets/mobile/user/card33.png" alt="" class="w-auto h-8">
                    </div>

                </div>
                <div v-if="(activeTab == 2)" class="flex items-center pb-2 justify-between cursor-pointer ">
                    <div @click="goUserInfo(4)" class="w-[50%] flex items-center  space-x-2 ">
                        <img src="@/assets/USDT.svg" alt="" class="w-4 h-4 ml-1">
                        <span class="text-[11px] text-[#7e7e7e]">买币</span>
                        <img src="@/assets/mobile/home/usedbuytip.webp" alt="" class="h-5">
                    </div>
                    <div class="h-4 w-[1px] ml-1 bg-gray-600"></div>
                    <div @click="goUserInfo(5)" class="flex items-center  justify-center w-[45%] space-x-2">
                        <img src="@/assets/USDT.svg" alt="" class="w-4 h-4">
                        <span class="text-[11px] text-[#7e7e7e]">兑人民币</span>
                    </div>
                </div>
            </div>


        </div>

        <div class="meau-area  bg-[#24252a] text-sm  relative" :class="token ? 'h-[625px]' : 'h-[675px]'">
            <nav class="relative px-1">
                <div class="pt-[10px] ">
                    <ul class=" p-0 ">
                        <li class="  mb-[20px] relative border-b border-solid border-[#4d4c4c] pt-3 pb-4  ">
                            <router-link to="/home" class=" h-full w-full flex items-center    ">
                                <div class="px-5 h-[20px] flex items-center">
                                    <img v-if="activeRoute === '/home'" src="@/assets/pc/homea.png" alt=""
                                        class="h-full w-auto">
                                    <img v-else src="@/assets/pc/home.png" alt="" class="h-full w-auto">
                                    <div class="h-full px-3 pt-2 text-center text-[13px] tracking-widest
                              flex items-center " :class="activeRoute === '/home' ? 'text-[#eed0a4]' : 'text-white'">
                                        首页
                                    </div>
                                </div>
                            </router-link>
                        </li>
                        <li class="  mb-[10px] relative   pb-2  ">
                            <router-link to="/promotion" class=" h-full w-full flex items-center    ">
                                <div class="px-5 h-[20px] flex items-center">
                                    <img v-if="activeRoute === '/promotion'" src="@/assets/pc/vipa.png" alt=""
                                        class="h-full w-auto">
                                    <img v-else src="@/assets/pc/vip.png" alt="" class="h-full w-auto">
                                    <div class="h-full px-3 pt-0 text-center text-[13px] tracking-widest
                              flex items-center "
                                        :class="activeRoute === '/promotion' ? 'text-[#eed0a4]' : 'text-white'">
                                        待领优惠
                                    </div>
                                    <div class="absolute right-1">
                                        <img src="@/assets/pc/th.png" alt="" class="h-full w-[35px]">
                                    </div>
                                </div>
                            </router-link>
                        </li>
                        <li class="  mb-[20px] relative border-b border-solid border-[#4d4c4c]  pb-4  ">
                            <router-link :to="token ? '/pc/userdetail' : '/login'"
                                class=" h-full w-full flex items-center    ">
                                <div class="px-5 h-[20px] flex items-center">
                                    <img v-if="activeRoute === '/pc/userdetail'" src="@/assets/pc/va.png" alt=""
                                        class="h-full w-auto">
                                    <img v-else src="@/assets/pc/v.png" alt="" class="h-full w-auto">
                                    <div class="h-full px-3 pt-0 text-center text-[13px] tracking-widest
                              flex items-center "
                                        :class="activeRoute === '/pc/userdetail' ? 'text-[#eed0a4]' : 'text-white'">
                                        会员中心
                                    </div>
                                </div>
                            </router-link>
                        </li>
                        <li class="  mb-[15px] relative   pb-2  ">
                            <router-link :to="token ? '/pc/transRecord' : '/login'"
                                class=" h-full w-full flex items-center    ">
                                <div class="px-5 h-[20px] flex items-center">
                                    <img v-if="activeRoute === '/pc/transRecord'" src="@/assets/pc/aa.png" alt=""
                                        class="h-full w-auto">
                                    <img v-else src="@/assets/pc/a.png" alt="" class="h-full w-auto">
                                    <div class="h-full px-3 pt-0 text-center text-[13px] tracking-widest
                              flex items-center "
                                        :class="activeRoute === '/pc/transRecord' ? 'text-[#eed0a4]' : 'text-white'">
                                        交易记录
                                    </div>
                                </div>
                            </router-link>
                        </li>
                        <li class="  mb-[15px] relative   pb-2  ">
                            <div @click="addAccount" class=" h-full w-full cursor-pointer flex items-center    ">
                                <div class="px-5 h-[20px] flex items-center">
                                    <img v-if="activeRoute === '/pc/addBankCard' || activeRoute === '/pc/addUsdtCard'" src="@/assets/pc/ba.png"
                                        alt="" class="h-[16px] w-auto">
                                    <img v-else src="@/assets/pc/b.png" alt="" class="h-[16px] w-auto">
                                    <div class="h-full px-3 pt-0 text-center text-[13px] tracking-widest
                              flex items-center "
                                        :class="activeRoute === '/pc/addBankCard' || activeRoute === '/pc/addUsdtCard' ? 'text-[#eed0a4]' : 'text-white'">
                                        添加取款账户
                                    </div>
                                    <div class="absolute right-1">
                                        <img v-if="activeTab == 1" src="@/assets/pc/card.png" alt="" class="h-full w-[35px]">
                                        <img v-if="activeTab == 2" src="@/assets/USDT.svg" alt="" class="h-full w-[30px]">
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="  mb-[15px] relative   pb-4 border-b border-solid border-[#4d4c4c] ">
                            <router-link :to="token ? '/pc/accsetting' : '/login'"
                                class=" h-full w-full flex items-center    ">
                                <div class="px-5 h-[20px] flex items-center">
                                    <img v-if="activeRoute === '/pc/accsetting'" src="@/assets/pc/ca.png" alt=""
                                        class="h-full w-auto">
                                    <img v-else src="@/assets/pc/c.png" alt="" class="h-full w-auto">
                                    <div class="h-full px-3 pt-0 text-center text-[13px] tracking-widest
                              flex items-center "
                                        :class="activeRoute === '/pc/accsetting' ? 'text-[#eed0a4]' : 'text-white'">
                                        账户安全
                                    </div>
                                </div>
                            </router-link>
                        </li>
                        <li class="  mb-[15px] relative   pb-2  ">
                            <router-link to="/about" class=" h-full w-full flex items-center    ">
                                <div class="px-5 h-[20px] flex items-center">
                                    <img v-if="activeRoute === '/about'" src="@/assets/pc/da.png" alt=""
                                        class="h-[16px] w-auto">
                                    <img v-else src="@/assets/pc/d.png" alt="" class="h-[16px] w-auto">
                                    <div class="h-full px-3 pt-0 text-center text-[13px] tracking-widest
                              flex items-center " :class="activeRoute === '/about' ? 'text-[#eed0a4]' : 'text-white'">
                                        关于博冠
                                    </div>
                                </div>
                            </router-link>
                        </li>
                        <li class="  mb-[15px] relative   pb-2  ">
                            <router-link to="/aggrement" class=" h-full w-full flex items-center    ">
                                <div class="px-5 h-[20px] flex items-center">
                                    <img v-if="activeRoute === '/aggrement'" src="@/assets/pc/ea.png" alt=""
                                        class="h-full w-auto">
                                    <img v-else src="@/assets/pc/e.png" alt="" class="h-full w-auto">
                                    <div class="h-full pl-4 pt-0 text-center text-[13px] tracking-widest
                              flex items-center "
                                        :class="activeRoute === '/aggrement' ? 'text-[#eed0a4]' : 'text-white'">
                                        游戏规则
                                    </div>
                                </div>
                            </router-link>
                        </li>
                        <li class="  mb-[15px] relative   pb-2  ">
                            <router-link to="/pc/coporation" class=" h-full w-full flex items-center    ">
                                <div class="px-5 h-[20px] flex items-center">
                                    <img v-if="activeRoute === '/pc/coporation'" src="@/assets/pc/fa.png" alt=""
                                        class="h-[16px] w-auto">
                                    <img v-else src="@/assets/pc/f.png" alt="" class="h-[16px] w-auto">
                                    <div class="h-full px-3 pt-0 text-center text-[13px] tracking-widest
                              flex items-center "
                                        :class="activeRoute === '/pc/coporation' ? 'text-[#eed0a4]' : 'text-white'">
                                        合作加盟
                                    </div>
                                </div>
                            </router-link>
                        </li>

                        <li v-if="token" class="h-[40px] cursor-pointer mb-[30px] relative px-3  ">
                            <div @click="logoutDialog_ = true"
                                class=" h-full w-full flex text-black items-center px-5 space-x-2  "
                                style="background-image: linear-gradient(-14deg,#a0511a,#ff7f27);">
                                <LogoutIcon class="w-7 h-7 "></LogoutIcon>
                                <!-- <img src="@/assets/pc/ll.png" alt="" class="w-7 h-7"> -->
                                <p class="font-bold tracking-widest whitespace-nowrap">退出当前账号</p>
                            </div>
                        </li>
                        <li v-if="token" class="h-[40px] cursor-pointer mb-[30px] relative   ">
                            <router-link to="/pc/feedback">
                                <div class=" h-full w-full flex  items-center px-5 space-x-2">
                                    <img src="@/assets/pc/home/info.png" alt="" class="w-6 h-6">
                                    <p class="font-bold tracking-widest whitespace-nowrap text-white">反馈问题</p>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>

            </nav>

        </div>

        <NotCloseDialog :show="logoutDialog_" @close="logoutDialog_ = false">
            <div class="w-[500px]   py-10 text-white px-3  ">
                <p class="text-center text-xl">提示</p>
                <div class="w-full text-start py-3">
                    <p class="text-[#d04c44] font-bold text-md text-center tracking-widest">您确定要退出账号吗？</p>
                </div>

                <div class="flex pt-5 items-center  w-full  justify-evenly px-3">
                    <div @click="logoutDialog_ = false" class="btn z-10 flex items-center justify-center 
          btn-outline  h-[50px]  border border-solid 
                              border-[#bc6013] text-[#bc6013] font-bold text-md cursor-pointer px-12  whitespace-nowrap
                              ">
                        取消
                    </div>
                    <div @click="logout" class="btn flex z-10 cursor-pointer px-12 whitespace-nowrap 
           items-center justify-center text-[#101114] font-bold text-md text-center  btn-primary  h-[50px]  
              ">
                        确认
                    </div>
                </div>
            </div>
        </NotCloseDialog>
    </div>


</template>
    
<style scoped>
.bg_user {
    background-image: url("@/assets/pc/Home/1.png");
    background-size: cover;
    background-repeat: no-repeat;
    height: 100px;
    width: 100%;
}

.meau-area {
    background-image: url("@/assets/pc/menubg.png");
    background-size: cover;
    background-repeat: no-repeat;
    /* height: 675px; */
    width: 100%;
}

.__bginfo {
    background-image: url("@/assets/pc/menubg.png");
    background-size: cover;
    background-repeat: no-repeat;
}

</style>