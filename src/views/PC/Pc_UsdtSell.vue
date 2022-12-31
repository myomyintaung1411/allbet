<template>
    <div class="hidden sm:block relative flex-auto mx-[19px]  ">
        <div class="main">
            <div class="main-content w-full relative">
                <div class="w-full tabs   border-b border-gray-800">
                    <div class="text-base text-center py-1 cursor-pointer w-[125px] tracking-wider border-b border-[#eed0a4]">
                        USDT兑人民币
                    </div>
                </div>
                <section class="relative w-full bg-[#1f2129] my-2 py-[20px] px-[18px]">
                  <div class="px-5 py-3 text-[#cbcbcb] ">请选择下列交易所</div>
                  <div class="py-5 px-5 tracking-wider">
                    注：  在任何情况下，在线客服不会提供任何银行卡号或者交易地址给用   户进行支付，谨防资金损失！
                  </div>
                  <div class="flex flex-wrap relative ">
                    <div v-for="data in usdtPic" :key="data.id" class="w-[159px] bg-[#fafafb] hover:bg-[#706c6c] h-[98px] mx-2 mb-8 my-2 relative cursor-pointer flex justify-center items-center">
                        <img :src="data.pic" alt="" loading="lazy"
                     class="w-28" @click="goSite(data.link)"
                    >
                    </div>
                </div>
                </section>
 
            </div>
        </div>
        <!--  -->
        <NotCloseDialog :show="Dialog" @close="Dialog = false">
        <div class="w-[500px]   py-10 text-white px-3  ">
            <p class="text-center text-xl">温馨提示</p>
            <div class="w-full text-start py-7 px-8">
                <p class="text-sm text-white">为方便游戏，建议您持有少量USDT。使用USDT存款秒到账，资金更安全，是在线博彩用户的最佳选择。</p>
            </div>

            <div class="flex pt-5 items-center w-full  justify-evenly px-3">
                <div @click="Dialog = false" class="btn flex items-center justify-center 
          btn-outline  h-[50px]  border border-solid 
                              border-[#eed0a4] cursor-pointer px-10  whitespace-nowrap
                              ">
                              继续卖出
                </div>
                <router-link to="/"  class="btn flex cursor-pointer px-10 whitespace-nowrap 
           items-center justify-center text-[#272c33] text-center  btn-primary  h-[50px]  
              ">
              先不卖了
                </router-link>
            </div>
        </div>
    </NotCloseDialog>
    </div>
</template>

<script setup>
import NotCloseDialog from "@/components/NotCloseDialog.vue";
import { useRouter } from 'vue-router';
import { useStore } from "vuex";

import {ref,reactive,onMounted,computed} from 'vue'
const router = useRouter()
const Dialog = ref(false)
const store = useStore()

const token = computed(() => store.getters["user/LToken"]);
const usdtPic = reactive([
    {id:1,pic:'/public/usdt1.webp',link:'https://bitpie.com/'},
    {id:2,pic:'/public/usdt2.webp',link:'https://www.bixin.com/cn/'},
    {id:3,pic:'/public/usdt3.webp',link:'https://www.coinw.com/'},
    {id:4,pic:'/public/usdt4.webp',link:'https://coins.co.th/'},
    {id:5,pic:'/public/usdt5.webp',link:'https://www.okcoin.com/'},
    {id:6,pic:'/public/usdt6.webp',link:'https://www.gateio.ch/'},
    {id:7,pic:'/public/usdt7.webp',link:'https://pro.coinbase.com/'},
    {id:8,pic:'/public/usdt8.webp',link:'https://coincheck.com/exchange'},
])

const goSite = (link) => {
     window.open(link)
}
onMounted(()=>{
    if (!token?.value) return router.push('/login')
    Dialog.value = true
})
</script>