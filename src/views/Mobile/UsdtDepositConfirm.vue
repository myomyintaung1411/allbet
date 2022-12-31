<template>
    <div class="w-full h-auto   relative sm:hidden">
        <div class="h-[60px]   w-full text-gray-200   px-2 flex justify-between items-center">
            <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
            <p class=" text-[17px] mr-7"> 支付信息确认 </p>
            <div @click="goService">
            </div>
        </div>
        <section class="py-3 w-full text-[#d0d0d0]">
            <div class="w-full px-3 py-5 flex justify-between items-center bg-[#13151b]">
                <div class="flex items-center space-x-2">
                    <img src="@/assets/pc/home/dcoin.webp" alt="" class="w-8 h-8">
                    <p class="text-base tracking-widest"> 金额 100 USDT</p>
                </div>
                <div class="flex flex-col items-center text-[#c15410]">
                    <p>约人民币</p>
                    <p> ¥ 717</p>
                </div>
            </div>
            <div class="py-2 ">
                <div class="py-2 px-3 w-full text-sm tracking-wider text-[#7e7e7e] bg-[#20232c]">
                    汇率波动,到账金额以实时汇率计算为准
                </div>
            </div>
            <div class="py-2 bg-[#13151b] text-white border-b border-[#333]">
                <div class="px-3 py-2">
                    <div class="bg-red-500 px-1 rounded-b rounded-bl-lg  w-fit">方式1</div>
                    <div class="py-2 tracking-wider text-sm">
                        用唤起的小金库APP直接支付或截屏扫码
                    </div>
                </div>
                <div class="flex flex-col py-2 items-center justify-center w-full">
                    <p>TRC 20</p>
                    <div class="w-[200px] h-[150px] my-2 bg-red-500"></div>
                    <div class="flex items-center text-sm space-x-2">
                       <span>没有小金库?</span>
                       <span class="text-[#c15410] underline">去下载</span>
                    </div>
                </div>
            </div>
            <div class="py-2 bg-[#13151b] text-white">
                <div class="px-3 py-2 ">
                    <div class="bg-red-500 px-1 rounded-b rounded-bl-lg  w-fit">方式2</div>
                    <div class="flex items-center space-x-1">
                        <div class="py-2 tracking-wider text-sm">
                        若小金库无法使用,但有账号和余额,请点
                    </div>
                    <div class="py-1 bg-[#c15410] px-2 rounded-lg">
                        网页支付
                    </div>
                    </div>
                </div>
            </div>
            <div class="px-3 py-2">
                <div class="btn_login text-lg w-full py-3 text-center font-medium tracking-wider text-[#272c33]">已付款，去游戏</div>
            </div>
        </section>
    </div>
</template>

<script setup>
import {ChevronLeftIcon  } from "@heroicons/vue/outline";
import {onMounted, computed } from 'vue'
import { useStore } from "vuex";
import { useRouter } from 'vue-router';

const store = useStore()
const router = useRouter()
const token = computed(() => store.getters["user/LToken"]);
const userValue = computed(() => store.getters["user/USERINFO"]);

const goUser = () => {
    router.go(-1)
}

function numberFormat(x){
    return x.replace(/(.{4})/g, "$1-");
}

const goService = () => {
  if(token?.value){
    window.open(`http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293&nick_name=${userValue?.value.username}`)
  }else{
    window.open('http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293')
  }
}
onMounted(()=>{
    if (!token?.value) return router.push('/login')
})
</script>