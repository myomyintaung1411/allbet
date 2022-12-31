<template>
    <div class="w-full h-auto   relative sm:hidden">
        <div class="h-[60px]   w-full text-gray-200   px-2 flex justify-between items-center">
            <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
            <p class=" text-[17px] mr-7"> 支付信息确认 </p>
            <!-- <p></p> -->
            <div @click="goService">
            </div>
        </div>
       <section class="flex flex-col bg-[#13151b] justify-start py-3 px-3">
         <div>
            <div class="flex items-center py-2 text-[#d0d0d0] text-[17px] space-x-7 border-b border-[#333]">
                <span>付款人</span>
                <span>{{ userValue?.realname }}</span>
            </div>
         </div>
         <div class="py-2 border-b border-[#333]">
            <p class="text-[#d0d0d0] text-[#15px]">存款金额</p>
            <div class=" flex items-center ">
                <span class="text-lg mr-2 text-[#d0d0d0]">
                    ¥
                </span>
                <span class="text-[40px] mr-7 font-medium text-[#d0d0d0]">{{moneyDepo?.info?.amount}}</span>
                <ClipboardCopyIcon @click="copy(moneyDepo?.info?.amount)" class="w-8 h-8 text-white"></ClipboardCopyIcon>
            </div>
         </div>
         <div class="flex items-center py-2 space-x-2">
            <InformationCircleIcon class="w-5 h-5 text-red-700"></InformationCircleIcon>
            <p class="text-[12px] text-[#7e7e7e] tracking-wide">付款人和存款金额必须与上述完全一致，否则无法到账。</p>
         </div>
       </section>

       <section class="my-2 px-3 py-3 w-full bg-[#13151b] border-b border-[#333]">
        <div class="flex py-2 items-center justify-between text-[#d0d0d0]">
            <span class="text-base">请转账到以下银行账户</span>
            <a href="https://www.baidu.com/#wd=王帅的拼音" target="_blank" class="text-sm text-[#7e7e7e]">查看收款人拼音</a>
        </div>
        <div class="py-3 px-3 w-full rounded-lg text-[#d0d0d0]" style="background-image: linear-gradient(-125deg,#33aa96 1%,#078873 79%);">
            <div class="py-2 flex items-center justify-between">
                <div class="flex items-center space-x-2">
                    <img src="@/assets/cc_card.webp" alt=""
                     class="w-8 h-8"
                    >
                    <p class="text-sm">{{moneyDepo?.info?.accountBank}}</p>
                </div>
                <div class="flex items-center space-x-1">
                        <p>按</p>
                        <ClipboardCopyIcon class="w-5 h-5 text-[#d0d0d0]"></ClipboardCopyIcon>
                        <p>复制信息</p>
                </div>
            </div>
            <div class="py-1 flex items-center space-x-2 text-[#d0d0d0]">
                <p class="font-medium tracking-wider text-[17px]">
                            {{numberFormat(moneyDepo?.info?.accountCard)}}
                </p>
                <ClipboardCopyIcon @click="copy(moneyDepo?.info?.accountCard)" class="w-5 h-5 text-white"></ClipboardCopyIcon>
            </div>
            <div class="py-1 flex items-center space-x-2 text-[17px] text-[#d0d0d0]">
                <p>崔添宇</p>
                <p>{{moneyDepo?.info?.accountBank}}</p>
                <ClipboardCopyIcon @click="copy(moneyDepo?.info?.accountBank)" class="w-5 h-5 text-white"></ClipboardCopyIcon>
            </div>
            <div class="py-1 flex space-x-2 items-center text-[17px] text-[#d0d0d0]">
                <p>河南</p>
                <p>{{moneyDepo?.info?.accountHolder}}</p>
                <ClipboardCopyIcon @click="copy(moneyDepo?.info?.accountHolder)" class="w-5 h-5 text-white"></ClipboardCopyIcon>
            </div>
        </div>
       </section>

       <section class="py-2 px-3 w-full bg-[#13151b] text-[#7e7e7e] text-sm">
        <p>温馨提示</p>
        <p>1. 请及时使用手机银行或网银完成转账， <span class="text-[#c15410]">若多次未存后续将会关闭相应存款渠道；</span></p>
        <p>2. 您存款完成后 <span class="text-[#c15410]">15分钟</span>
            左右到账。
        </p>

        <div class="py-3">
            <div @click="goHome" class="btn_login text-lg w-full py-3 text-center font-medium tracking-wider text-[#272c33]">已付款，去游戏</div>
        </div>
        <div class="py-3 w-full flex justify-between text-[#7e7e7e] text-sm">
            <router-link to="/moneyDeposit" class=" underline">继续存款</router-link>
            <a @click="gomoneyHistory()" class=" underline">查看存款记录</a>
        </div>
       </section>
    </div>
</template>

<script setup>
import {onMounted, computed } from 'vue'
import {  ChevronLeftIcon,ClipboardCopyIcon,InformationCircleIcon  } from "@heroicons/vue/outline";
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import useClipboard from 'vue-clipboard3'
import { getCurrentInstance } from 'vue';

const { toClipboard } = useClipboard()
const instance = getCurrentInstance()

const store = useStore()
const router = useRouter()
const token = computed(() => store.getters["user/LToken"]);
const userValue = computed(() => store.getters["user/USERINFO"]);

const moneyDepo = computed(() => store.getters["pay/MONEY_DEPOSIT"])

const goUser = () => {
    router.go(-1)
}
const goHome = () => {
    router.push('/home')
}

function numberFormat(x){
    return x?.replace(/(.{4})/g, "$1-");
}

const gomoneyHistory = () => {
    router.push({path:'/transRecord',query:{type:1}})
}

const copy = async (copyTxt) => {
    try {
        await toClipboard(copyTxt.toString())
        return instance.proxy.$message({ message: '复制成功', duration: 2 })
    } catch (e) {
        alert('copy error')
        console.error(e)
    }
}


const goService = () => {
  if(token?.value){
    window.open(`http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293&nick_name=${userValue?.value.username}`)
  }else{
    window.open('http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293')
  }
}
onMounted(()=>{
   // if(moneyDepo.value == null || moneyDepo.value == undefined) return router.push('/moneyDeposit')
    if (!token?.value) return router.push('/')
})
</script>