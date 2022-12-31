<template>
    <div class="hidden sm:block relative flex-auto mx-[19px]  ">
        <div class="main">
            <div class="main-content w-full relative">
                <div class="w-full tabs   border-b border-gray-800">
                    <div
                        class="text-base text-center py-1 cursor-pointer w-[100px] tracking-wider border-b border-[#eed0a4]">
                        USDT买入
                    </div>
                </div>
                <section class="relative w-full bg-[#1f2129] my-2 py-[20px] px-[18px]">
                    <div class="px-5 py-3 text-[#cbcbcb] ">请选择下列交易所</div>
                    <div class="py-5 px-5 tracking-wider">
                        注： 下载下列任意交易所APP均可买入USDT并存款到博冠，具体可点击右边“如何买入”查看教程。
                    </div>
                    <div class="flex flex-wrap relative ">
                        <div v-for="data in usdtPic" :key="data.id"
                            class="w-[159px] bg-[#fafafb] hover:bg-[#706c6c] h-[98px] mx-2 mb-8 my-2 relative cursor-pointer flex justify-center items-center">
                            <img :src="data.pic" alt="" loading="lazy" class="w-28" @click="goSite(data.link)">
                        </div>
                    </div>
                </section>

            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { reactive, onMounted, computed } from 'vue'
import { useStore } from "vuex";

const router = useRouter()

const store = useStore()

const token = computed(() => store.getters["user/LToken"]);

const usdtPic = reactive([
    { id: 1, pic: '/public/usdt1.webp', link: 'https://bitpie.com/' },
    { id: 2, pic: '/public/usdt2.webp', link: 'https://www.bixin.com/cn/' },
    { id: 3, pic: '/public/usdt3.webp', link: 'https://www.coinw.com/' },
    { id: 4, pic: '/public/usdt4.webp', link: 'https://coins.co.th/' },
    { id: 5, pic: '/public/usdt5.webp', link: 'https://www.okcoin.com/' },
    { id: 6, pic: '/public/usdt6.webp', link: 'https://www.gateio.ch/' },
    { id: 7, pic: '/public/usdt7.webp', link: 'https://pro.coinbase.com/' },
    { id: 8, pic: '/public/usdt8.webp', link: 'https://coincheck.com/exchange' },
])

const goSite = (link) => {
    window.open(link)
}

onMounted(() => {
    if (!token?.value) return router.push('/login')
})
</script>
