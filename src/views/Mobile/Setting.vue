<template>
    <div class="w-full h-auto   bg-[#171a21] relative">
        <div class="h-[60px]  w-full text-gray-400    px-2 flex justify-between items-center">
            <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
            <p class=" text-[17px] mr-7"> 设置 </p>
            <div class="flex flex-col pt-2 text-center mr-2 items-center whitespace-nowrap ">
            </div>
        </div>
       <div class="py-3  w-full space-y-3">
        <div @click="goSetting(1)" class="py-7 px-5 flex text-gray-400 justify-between items-center bg-[#4b494a]">
            <p class="text-base text-white">添加到主屏幕</p>
            <ChevronRightIcon class="w-5 h-5 absolute right-10"></ChevronRightIcon>
        </div>
        <div @click="goSetting(2)" class="py-7 px-5 flex text-gray-400 justify-between items-center bg-[#4b494a]">
            <p class="text-base text-white">问题反馈</p>
            <ChevronRightIcon class="w-5 h-5 absolute right-10"></ChevronRightIcon>
        </div>
        <div @click="goSetting(3)" class="py-7 px-5 flex text-gray-400 justify-between items-center bg-[#4b494a]">
            <p class="text-base text-white">规则与条例</p>
            <ChevronRightIcon class="w-5 h-5 absolute right-10"></ChevronRightIcon>
        </div>
        <div @click="goSetting(4)" class="py-7 px-5 flex text-gray-400 justify-between items-center bg-[#4b494a]">
            <p class="text-base text-white">关于博冠</p>
            <ChevronRightIcon class="w-5 h-5 absolute right-10"></ChevronRightIcon>
        </div>
       </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from "vuex";
import {ref,onMounted,computed} from 'vue'
import { XIcon,UserIcon,LockClosedIcon,EyeIcon,EyeOffIcon ,ChevronLeftIcon ,ChevronRightIcon } from "@heroicons/vue/outline";

const router = useRouter()
const store = useStore()

const token = computed(() => store.getters["user/LToken"]);

const goUser = () => {
    router.go(-1)
}

const goSetting = (num) => {
    switch (num) {
        case 1:
            // router.push('/aggrement')
            break;
        case 2:
            router.push('/feedback')
            break;
        case 3:
            router.push('/aggrement')
            break;
        case 4:
            router.push('/about')
            break;
    
        default:
            break;
    }
}

onMounted(()=>{
    if (!token?.value) return router.push('/login')
})
</script>