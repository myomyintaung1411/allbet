<template>
    <div class="w-full h-auto bg-[#171a21] relative sm:flex-auto sm:mx-[19px]">
        <div class="h-[60px]  w-full text-gray-200   px-2 flex justify-between items-center">
            <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
            <p class=" text-[17px]">USDT买入</p>
            <div></div>
        </div>
        <section class="px-5 py-3">
            <div class="flex justify-between items-center">
                <p class="text-sm text-white">请选择下列交易所</p>
                <div class="flex items-center text-[12px] text-[#a88308]">
                    <p>如何买入</p>
                    <ChevronRightIcon class="w-5 h-5"></ChevronRightIcon>
                </div>
            </div>
            <div class="py-3 text-sm text-left text-[#a88308]">
                注：下载下列任意交易所APP均可买入USDT并存款到博冠，具体可点击右边“如何买入”查看教程。
            </div>
        </section>
        <section class="py-5 flex px-3 flex-wrap mx-auto">
            <div v-for="data in usdtPic" :key="data.id" class="relative mb-8 mr-[10px] flex justify-center items-center bg-[#d0d0d0] w-[47%] h-20">
                <img :src="data.pic" alt="" loading="lazy"
                     class="w-28" @click="goSite(data.link)"
                    >
            </div>
        </section>
        <section class="px-3 py-3 text-white">
            <p>注：以实际合作交易所为准</p>
        </section>

        <NotCloseDialog :show="depo_Dialog" @close="depo_Dialog = false">
        <div class="w-[90vw]   py-5 text-white px-3  ">
            <p class="text-center text-xl text-[#d0d0d0]">提示</p>
            <div class="w-full text-start py-3">
                <p class="text-base text-[#7e7e7e] py-5 tracking-widest">若您已购买USDT，请到“其他钱包”存款。</p>
            </div>
            <div class="flex pt-5 items-center w-full  justify-evenly px-3">
                <div @click="depo_Dialog = false" class="btn flex items-center justify-center 
          btn-outline  h-[50px]  border border-solid 
                              border-[#bc6013] text-[#bc6013] cursor-pointer w-[40%]  whitespace-nowrap
                              ">
                    取消
                </div>
                <router-link to="/usdtDeposit"   class="btn flex cursor-pointer w-[40%] whitespace-nowrap 
           items-center justify-center text-[#272c33] text-center  btn-primary  h-[50px]  
              ">
              立即存款
                </router-link >
            </div>

        </div>
        <div class=" w-[90vw]  bottom-[100px] mt-5">
                <img src="@/assets/ubuy.webp" alt=""
                 class="w-full h-[170px]"
                >
            </div>
    </NotCloseDialog>
    </div>

</template>

<script setup>
import {ChevronLeftIcon,ChevronRightIcon } from "@heroicons/vue/outline";
import {ref,reactive,onMounted,computed} from 'vue'
import { useRouter } from 'vue-router';
import NotCloseDialog from "@/components/NotCloseDialog.vue";
import { useStore } from "vuex";

const router = useRouter()
const store = useStore()

const token = computed(() => store.getters["user/LToken"]);
const depo_Dialog = ref(false)
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
const goUser = () => {
    router.go(-1)
}
const goSite = (link) => {
     window.open(link)
    depo_Dialog.value = true
}

onMounted(()=>{
    if (!token?.value) return router.push('/login')
})
</script>

<style scoped>

</style>