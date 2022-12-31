<script setup>
import NotCloseDialog from "@/components/NotCloseDialog.vue";
import {
    ChevronRightIcon
} from "@heroicons/vue/outline";
import { ref, onMounted, computed,onBeforeUnmount } from 'vue'
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import userApi from "@/network/user.js";
import allApi from "@/network/allApi.js";
import { getCurrentInstance } from 'vue';
import AES from '@/utils/aes';

const instance = getCurrentInstance()
const store = useStore()
const router = useRouter()
const logoutDialog = ref(false)
const deg = ref(0);

const interval = ref(null)


const user = computed(() => store.getters["user/LOGIN"]);
const userValue = computed(() => store.getters["user/USERINFO"]);
const token = computed(() => store.getters["user/LToken"]);
const gameEn = computed(() => store.getters["app/GameEn"]);

const activeTab = ref(1)
const goReg = () => {
    router.push('/register')
}
const goLogin = () => {
    router.push('/login')
}

if (localStorage.getItem('tab')) {
    activeTab.value = localStorage.getItem('tab')
}

const moneyActive = (number) => {
    activeTab.value = number
    localStorage.setItem('tab', number)
}

const logout = () => {
    if (userValue.value) {
        localStorage.clear()
        router.push('/')
        setTimeout(() => {
            window.location.reload()
        }, 1000);
    }
}


const reload = () => {
    if (!token?.value) router.push('/login')
    deg.value += 360;
    getUserInfo()
}

const goService = () => {
    if (token?.value) {
        window.open(`http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293&nick_name=${userValue?.value.username}`)
    } else {
        window.open('http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293')
    }
}

const getUserInfo = () => {
    if (token?.value) {
        let data = {
            "player": user?.value?.info?.username,
        }
        const encrypttxt =  AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)
        userApi.GetUserInfo({data: data,key:user?.value?.key}).then((res) => {
            if (res.data.code == '1') {
                console.log("res of userinfo data", res);
                store.commit('user/UserInfo', res.data.data)
            }
        }).catch((e) => {
            console.log(e);
        })
    }
}
//only withdraw when user level is >= 1 & is_set_phone = 1
const goSetting = (number) => {
    if (!token?.value) return router.push('/login')
    console.log("number", number);
    switch (number) {
        case 1:
            if (userValue?.value?.is_set_phone == 0) {

                instance.proxy.$message({ message: '为了您的账户安全，请先绑定手机号。', duration: 2 })
                setTimeout(() => {
                    router.push('/setPhonenum')
                }, 1000);

                return
            }
            if (activeTab.value == 1) {
                router.push('/addBankCard')
            } else {
                router.push('/user/addUsdtCard')
            }
            
            break;
        case 2:
            router.push('/accsetting')
            break;
        case 3:
            router.push('/transRecord')
            break;
        case 4:
            router.push('/coporation')
            break;
        case 5:
            router.push('/setting')
            break;
        case 6:
            router.push('/download')
            break;
        case 7:
            logoutDialog.value = true
            break;
        default:
            break;
    }
}
const goUserInfo = (number) => {
    if (!token?.value) return router.push('/login')

    switch (number) {
        case 1:
            if (userValue?.value?.is_set_phone == 0) {

                instance.proxy.$message({ message: '为了您的账户安全，请先绑定手机号。', duration: 2 })
                setTimeout(() => {
                    router.push('/setPhonenum')
                }, 1000);
                return
            }

            if (activeTab.value == 1) {
                router.push('/moneyDeposit')
            } else {
                router.push('/usdtDeposit')
            }
            break;
        case 2:
            router.push('/wash')
            break;
        case 3:
            if (userValue?.value?.is_set_phone == 0) {

                instance.proxy.$message({ message: '为了您的账户安全，请先绑定手机号。', duration: 2 })
                setTimeout(() => {
                    router.push('/setPhonenum')
                }, 1000);
                return
            }


            if (activeTab.value == 1 && userValue?.value?.user_level < 1) {
                return instance.proxy.$message({ message: '您尚未到达取款等级', duration: 2 })
            }

            if (activeTab.value == 1 && userValue?.value?.user_level >= 1 && userValue?.value?.is_set_phone == 1 && userValue?.value?.is_set_cash_password
                == 0) {
                    router.push({path:'/user/bindPhoneForWithdraw',query:{type:'BANK'}})
            }

            if (activeTab.value == 1 && userValue?.value?.user_level >= 1 && userValue?.value?.is_set_phone == 1 && userValue?.value?.is_set_cash_password
                == 1) {
                router.push('/user/bindWithdrawPass')
            }
            //usdt withdrawal
            if(activeTab.value == 2 && userValue?.value?.is_add_usdt_info == 0)return instance.proxy.$message({ message: '请先添加USDT地址', duration: 2 })
            if (activeTab.value == 2 && userValue?.value?.is_set_phone == 1) {
                router.push({path:'/user/bindPhoneForWithdraw',query:{type:'USDT'}})
            }

            break;
        case 4:
            router.push('/user/usdtBuy')
            break;
        case 5:
            router.push('/user/usdtSell')
            break;

        default:
            break;
    }
}

const userDetail = () => {
    if (!token?.value) return router.push('/login')
    router.push('/userdetail')
}

const checkAlert = () => {
    if (token?.value) {
        let data = {
            "player": userValue?.value?.username,
        }
        const encrypttxt =  AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)
        allApi.CheckAlert({data: data}).then((res) => {
            if (res.data.code == '1') {
                console.log("res of check alert", res);
               // store.commit('user/UserInfo', res.data.data)
            }
        }).catch((e) => {
            console.log(e);
        })
    }
}

function setTimeCheckAlert(){
    interval.value = setInterval(() => {
    checkAlert()
    console.log("10 log second");
  }, 20000);
}

onBeforeUnmount(() => {
    clearInterval(interval.value)
    interval.value = null
})

onMounted(() => {
    if (!token?.value) return router.push('/login')
    checkAlert()
    getUserInfo()
    //setTimeCheckAlert()
})
</script>
    
<template>
    <div class="sm:hidden relative user_setting h-full w-full overflow-x-hidden">
        <div class="py-2 w-full relative flex items-center px-6 justify-between text-gray-200">
            <router-link to="/noti" class="flex flex-col text-center items-center whitespace-nowrap relative">
                <img src="@/assets/mobile/user/noti.png" alt="" class="h-8 w-5">
                <!-- <div class="absolute -top-1 -right-4 bg-red-700 rounded-full h-5 w-5 ">
                    <p class="text-sm p-0 m-0 text-[10px]">10</p>
                </div> -->
            </router-link>
            <div @click="goService()" class="flex flex-col text-center items-center whitespace-nowrap">
                <img src="@/assets/mobile/user/service.png" alt="" class="h-7 w-8">
            </div>
        </div>
        <section class="px-3 w-full py-1  relative">
            <div class="user_bg bg-black relative flex flex-col py-1 justify-between px-3">
                <div>
                    <div class=" first-letter:text-red-700 tracking-[3px] text-[#cac8c8]">{{ userValue?.username }}
                    </div>
                    <div class="flex relative items-center space-x-3">
                        <div class="w-20 relative h-7 ">
                            <img src="@/assets/mobile/user/level.png" alt="" class="w-full h-7">
                            <div class=" text-right absolute top-1 right-2 w-full h-7 text-[#5e3f15] text-base ">
                                {{ userValue?.user_level }}</div>
                        </div>
                        <div class="px-2">
                            <img src="@/assets/mobile/user/gurad.png" alt="" class="w-[16px] h-5">
                        </div>
                    </div>
                </div>
                <div class="absolute right-5  bg__money  top-0 flex items-center ">
                    <div class="w-full flex items-center justify-center -mt-2 space-x-6">
                        <div @click="moneyActive(1)" class="">
                            <img v-if="(activeTab == 1)" src="@/assets/mobile/user/yena.png" alt="" class="w-auto h-8">
                            <img v-else src="@/assets/mobile/user/yen.png" alt="" class="w-auto h-8">
                        </div>
                        <div class="h-5 w-[2px] bg-[#585757]">

                        </div>
                        <div @click="moneyActive(2)">
                            <img v-if="(activeTab == 2)" src="@/assets/mobile/user/usdta.png" alt="" class="w-auto h-8">
                            <img v-else src="@/assets/mobile/user/usdt.png" alt="" class="w-auto h-8">
                        </div>
                    </div>

                </div>
                <div class="flex items-center relative ">
                    <div>
                        <img src="@/assets/mobile/user/money.png" alt="" class="w-6 h-6" />
                    </div>
                    <div class="text-base pt-1 px-3 text-white">{{ userValue?.balance || 0 }}</div>
                    <div class="text-base pt-1 px-10">
                        <img @click="reload()" src="@/assets/mobile/user/load.png" alt="" class="w-5 h-5 transition"
                            v-bind:style="{ transform: `rotate(${deg}deg)` }">
                    </div>
                    <div @click="userDetail()" class="absolute right-0">
                        <img src="@/assets/mobile/user/more.png" alt="" class="w-auto h-[15px]">
                    </div>
                </div>
            </div>
        </section>
        <section class="px-6 w-full py-3 text-[#787474]    relative flex items-center  "
            :class="activeTab == 1 ? ' justify-around' : 'justify-between'">
            <div @click="goUserInfo(1)" class="flex flex-col items-center justify-center">
                <img src="@/assets/mobile/home/l11.png" alt="" class="w-auto h-[25px]">
                <p class="text-[12px]">存款</p>
            </div>
            <div @click="goUserInfo(2)" class="flex flex-col items-center justify-center">
                <img src="@/assets/mobile/home/l22.png" alt="" class="w-auto h-[25px]">
                <p class="text-[12px]">洗码</p>
            </div>
            <div @click="goUserInfo(3)" class="flex flex-col items-center justify-center">
                <img src="@/assets/mobile/home/l33.png" alt="" class="w-auto h-[25px]">
                <p class="text-[12px]">取款</p>
            </div>
            <div @click="goUserInfo(4)" v-if="(activeTab == 2)" class="flex flex-col items-center justify-center">
                <img src="@/assets/mobile/home/l44.png" alt="" class="w-auto h-[25px]">
                <p class="text-[12px]">买入</p>
            </div>
            <div @click="goUserInfo(5)" v-if="activeTab == 2" class="flex flex-col items-center justify-center">
                <img src="@/assets/mobile/home/l55.png" alt="" class="w-auto h-[25px]">
                <p class="text-[12px]">卖出</p>
            </div>
        </section>

        <section class="px-2 w-full relative py-3">
            <router-link to="/upgrade" class="flex px-3 justify-between items-center text-[#4a4a4a] text-[12px]">
                <div class="flex justify-start items-center space-x-1 text-[12px]">
                    <img src="@/assets/mobile/user/throphy.png" alt="" class="w-8 h-8">
                    <div class=" tracking-[3px] text-base px-1 text-[#eed0a4]">会员晋级</div>
                    每周一更新星级
                </div>
                <div class="flex justify-end items-center">
                    <p>等级福利</p>
                    <ChevronRightIcon class="w-6 h-6 text[#4a4a4a]"></ChevronRightIcon>
                </div>
            </router-link>
            <div class="bg_champion my-2 px-2 flex items-center">
                <div class="flex items-center">
                    <img src="@/assets/mobile/user/star.png" alt="" class="w-6 h-6">
                    <div class="rule px-2 tracking-[3px]">每周一更新星级</div>
                    <div class="level-label text-red-600">
                        升级
                        <span class="level-label vip ">
                            Lv.1</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="px-12 pt-5 w-full">
            <div class="flex w-full items-center justify-between">
                <div @click="goSetting(1)"
                    class="flex flex-col justify-center space-y-2 tracking-wider text-[13px]  items-center text-[#7e7e7e]">
                    <img src="@/assets/mobile/user/1111.png" alt="" class="w-auto h-[28px]">
                    <p>取款账户</p>
                </div>
                <div @click="goSetting(2)"
                    class="flex flex-col justify-center space-y-2 tracking-wider text-[13px]  items-center text-[#7e7e7e]">
                    <img src="@/assets/mobile/user/2222.png" alt="" class="w-auto h-[28px]">
                    <p>账号安全</p>
                </div>
                <div @click="goSetting(3)"
                    class="flex flex-col justify-center space-y-2 tracking-wider text-[13px]  items-center text-[#7e7e7e]">
                    <img src="@/assets/mobile/user/3333.png" alt="" class="w-auto h-[28px]">
                    <p>交易记录</p>
                </div>
            </div>
            <div class="flex w-full items-center justify-between py-20">
                <div @click="goSetting(4)"
                    class="flex flex-col justify-center space-y-2 tracking-wider text-[13px]  items-center text-[#7e7e7e]">
                    <img src="@/assets/mobile/user/6666.png" alt="" class="w-auto h-[28px]">
                    <p>合作加盟</p>
                </div>

                <div @click="goSetting(6)"
                    class="flex flex-col justify-center  space-y-2 mr-4 tracking-wider text-[13px]  items-center text-[#7e7e7e]">
                    <img src="@/assets/mobile/user/7777.png" alt="" class="w-auto h-[28px]">
                    <p>游戏客户端</p>
                </div>
                <div @click="goSetting(5)"
                    class="flex flex-col justify-center  items-center space-y-2 mr-3 text-[13px] tracking-wider   text-[#7e7e7e]">
                    <img src="@/assets/mobile/user/9999.png" alt="" class="w-auto h-[28px]">
                    <p>设置</p>
                </div>
            </div>
            <div @click="goSetting(7)" v-if="token"
                class="w-full pb-5   flex flex-col cursor-pointer justify-center items-center">
                <img src="@/assets/logout.png" alt="" class="w-full h-auto">
            </div>
        </section>
    </div>
    <div class="hidden sm:block relative flex-auto mx-[19px]">
        <div class="main">
            <div class="main-content w-full">
                <div class="banner h-[235px] w-[956px] bg-[#1f2129]">
    
                </div>
            </div>
        </div>
    </div>

    <NotCloseDialog :show="logoutDialog" @close="logoutDialog = false">
        <div class="w-[90vw]   py-10 text-white px-3  ">
            <p class="text-center text-xl">提示</p>
            <div class="w-full text-start py-3">
                <p class="text-[#d04c44] font-bold text-md text-center tracking-widest">您确定要退出账号吗？</p>
            </div>

            <div class="flex pt-5 items-center w-full  justify-evenly px-3">
                <router-link to="/" class="btn flex items-center justify-center 
          btn-outline  h-[50px]  border border-solid 
                              border-[#bc6013] text-[#bc6013] font-bold text-md cursor-pointer px-12  whitespace-nowrap
                              ">
                    取消
                </router-link>
                <div @click="logout" class="btn flex cursor-pointer px-12 whitespace-nowrap 
           items-center justify-center text-[#101114] font-bold text-md text-center  btn-primary  h-[50px]  
              ">
                    确认
                </div>
            </div>
        </div>
    </NotCloseDialog>
</template>
    
<style scoped>
.bg__money {
    background-image: url("@/assets/mobile/user/bgmoney__.png");
    width: 170px;
    height: 55px;
    background-size: 100% 100%;
}
.bg_champion {
    background: url("@/assets/mobile/user/label.png") no-repeat;
    background-size: 100% 100%;
    height: 80px;
    width: 100%;
    color: #7e7e7e;
}
.user_bg {
    height: 150px;
    width: 100%;
}
</style>