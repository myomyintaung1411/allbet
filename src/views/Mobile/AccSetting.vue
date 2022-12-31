<template>
    <div class="w-full h-screen bg-[#171a23]   relative">
        <div class="h-[60px]  w-full text-gray-200   px-2 flex justify-between items-center">
            <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
            <p class=" text-[17px]">账号安全</p>
            <div @click="goService">
                <img src="@/assets/mobile/home/service.png" alt="" class="w-8 h-7">
            </div>
        </div>
        <section class="px-5 py-2 w-full">

            <div v-if="userValue?.is_set_phone === 0" @click="goBind(4)"
                class="flex relative my-3 items-center px-2 py-9 bg-[#14151a] text-white">
                <div>
                    <img src="@/assets/Phone.svg" alt="" class="w-8 h-8">
                </div>
                <div class="text-base text-white tracking-wider px-3">
                    手机号
                </div>
                <div class="absolute right-1 flex items-center">
                    <p class="mr-6">未设置</p>
                    <ChevronRightIcon class="w-7 h-7 text-[#7e7e7e]"></ChevronRightIcon>
                </div>
            </div>
            <div v-if="userValue?.is_set_phone === 1" @click="goBind(5)"
                class="flex relative my-3 items-center px-2 py-9 bg-[#14151a] text-white">
                <div>
                    <img src="@/assets/Phone.svg" alt="" class="w-8 h-8">

                </div>
                <div class="text-base text-white tracking-wider px-3">
                    手机号
                </div>
                <div class="absolute right-1 flex items-center">
                    <p class="mr-6">更改</p>
                    <ChevronRightIcon class="w-7 h-7 text-[#7e7e7e]"></ChevronRightIcon>
                </div>
            </div>

            <div v-if="userValue?.user_type == 2" @click="goBind(0)"
                class="flex relative items-center px-2 py-9 bg-[#14151a] text-white">
                <div>
                    <img src="@/assets/lock.svg" alt="" class="w-8 h-8">
                </div>
                <div class="text-base text-white tracking-wider px-3">
                    设置密码
                </div>
                <div class="absolute right-1 flex items-center">
                    <p class="mr-6">未设置</p>
                    <ChevronRightIcon class="w-7 h-7 text-[#7e7e7e]"></ChevronRightIcon>
                </div>
            </div>
            <div v-if="userValue?.user_type == 1 || userValue?.user_type == 4" @click="goBind(1)"
                class="flex relative items-center px-2 py-9 bg-[#14151a] text-white">
                <div>
                    <img src="@/assets/lock.svg" alt="" class="w-8 h-8">
                </div>
                <div class="text-base text-white tracking-wider px-3">
                    登陆密码
                </div>
                <div class="absolute right-1 flex items-center">
                    <p class="mr-6">更改</p>
                    <ChevronRightIcon class="w-7 h-7 text-[#7e7e7e]"></ChevronRightIcon>
                </div>
            </div>
            <div v-if="userValue?.is_set_cash_password === 0"
                class="flex relative my-3 items-center px-2 py-9 bg-[#14151a] text-white" @click="goBind(2)">
                <div>
                    <img src="@/assets/money.svg" alt="" class="w-8 h-8 ">
                </div>
                <div class="text-base text-white tracking-wider px-3">
                    取款密码

                </div>
                <div class="absolute right-1 flex items-center">
                    <p class="mr-6">未设置</p>
                    <ChevronRightIcon class="w-7 h-7 text-[#7e7e7e]"></ChevronRightIcon>
                </div>
            </div>
            <div v-if="userValue?.is_set_cash_password === 1" @click="goBind(3)"
                class="flex relative my-3 items-center px-2 py-9 bg-[#14151a] text-white">
                <div>
                    <img src="@/assets/money.svg" alt="" class="w-8 h-8 ">
                </div>
                <div class="text-base text-white tracking-wider px-3">
                    取款密码
                </div>
                <div class="absolute right-1 flex items-center">
                    <p class="mr-6">更改</p>
                    <ChevronRightIcon class="w-7 h-7 text-[#7e7e7e] "></ChevronRightIcon>
                </div>
            </div>

            <div @click="goBind(6)" class="flex relative items-center px-2 py-9 bg-[#14151a] text-white">
                <div>
                    <img src="@/assets/wodedingdan.svg" alt="" class="w-8 h-8">
                </div>
                <div class="text-base text-white tracking-wider px-3">
                    个人资料
                </div>
                <div class="absolute right-1 flex items-center">
                    <p class="mr-6">未设置</p>
                    <ChevronRightIcon class="w-7 h-7 text-[#7e7e7e]"></ChevronRightIcon>
                </div>
            </div>
        </section>
    </div>
</template>
  
<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/outline";
import { ref, onMounted, computed } from 'vue'
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import globaljs from '@/utils/global'
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance()

const store = useStore()
const router = useRouter()

const user = computed(() => store.getters["user/LOGIN"]);
const userValue = computed(() => store.getters["user/USERINFO"]);
const token = computed(() => store.getters["user/LToken"]);


const goUser = () => {
 router.push('/user')
}

const goBind = (number) => {

    switch (number) {
        case 0:
            router.push('/set_pass')
            break;
        case 1:
            router.push('/changePass')
            break;
        case 2:
            if (userValue?.value?.is_set_phone == 1) {
                router.push('/setmoneypass')
            } else {
                instance.proxy.$message({ message: '为了您的账户安全，请先绑定手机号。', duration: 2 })
                router.push('/setPhonenum')
            }
            break;
        case 3:
            if (userValue?.value?.is_set_phone == 1) {
                router.push('/changemoneypass')
            } else {
                instance.proxy.$message({ message: '为了您的账户安全，请先绑定手机号。', duration: 2 })
                router.push('/setPhonenum')
            }

            break;
        case 4:
            router.push('/setPhonenum')
            break;
        case 5:

            router.push('/changePhonenum')
            break;
        case 6:
            router.push('/setSecurityInfo')
            break;

        default:
            break;
    }
}

const goService = () => {
  if(token?.value){
    window.open(`http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293&nick_name=${userValue?.value.username}`)
  }else{
    window.open('http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293')
  }
}

onMounted(() => {
    globaljs.getUserInfo()
    if (!token.value) {
        router.push('/login')
    }
})

</script>
  
<style scoped>

</style>