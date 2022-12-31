<template>
    <div class="w-full h-screen   relative sm:hidden sm:mx-[19px]">
        <div class="h-[60px]  w-full text-gray-400    px-2 flex justify-between items-center">
            <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
            <p class=" text-[17px]"> USDT怎么用 </p>
            <div class="flex flex-col pt-2 text-center mr-8 items-center whitespace-nowrap ">
            </div>
        </div>

        <div class="w-full px-2 sm:px-0 py-3 bg-[#13151b] sm:bg-transparent text-[#7e7e7e] text-base">
            <ul>
                <li class="mb-5 tracking-widest px-3  leading-7">

                    USDT，也被称为泰达币，是2015年由Tether引入的一种锚定在美元上的加密货币。理论上，1USDT=1美元。这种价格稳定是基于Tether的声明，即每一个USDT币的发行Tether将在他们的银行有一个美元储备，从而确保Tether和美元之间有流动性产生。

                </li>
                <li class="mb-5 tracking-widest px-3">

                    虽然USDT币和比特币一样是加密货币，但USDT币的价格波动幅度比较小，不像比特币大跌或者大涨之类的。

                </li>
                <li class="mb-5 tracking-widest px-3">

                    这可能是Tether承诺用户可以随时使用USDT与USD进行1:1兑换的原因，同时Tether公司严格遵守1：1的准备金保证，即每发行1个USDT代币，其银行账户都会有1美元的资金保障。并且用户都可以在这家公司的平台进行查阅，保证了整个过程的透明度。

                </li>
                <li class="mb-5 tracking-widest px-3">

                    2022年初，博冠宣布与凯时强强联合，后续将继续为用户提供安全便捷、信誉非凡的至尊游戏体验。

                </li>
                <li class="mb-5 tracking-widest px-3">

                    USDT怎么用？<br /><br />
                    1、用来规避其他加密货币下跌的风险。<br /><br /><br />
                    在币币交易中，最常见的三种情况有：用BTC买入LTC后，BTC和LTC都在涨，你享受两份收益、用BTC买入LTC后一个涨一个跌，亏或盈利取决于两个整体亏盈情况、用BTC买入LTC后，两个币种都在跌则需要承受两份亏损。
                    <br /><br />
                    但如果是USDT，当其他币价下跌时，则可以立刻把其他换成USDT币，从而保证资产不会缩水。
                </li>

                <li class="mb-5 tracking-widest px-3">
                    2、反向操作：数字货币提现<br /><br />
                    炒币中，如果想提现，则可以先将手中的多个货币其他加密货币换成USDT币，再通过Tether 公司或其它平台兑换为美元，这样提现就不再需要认证的币币交易平台就可以直接进行交易了，不需要再次认证其它平台。
                </li>
                <li class="mb-5 tracking-widest px-3">
                    泰达币 (USDT）是Tether公司推出的基于稳定价值货币美元 (USD）的代币Tether
                    USD（下称USDT），1USDT=1美元，用户可以随时使用USDT与USD进行1：:1兑换。Tether 公司严格遵守1：1的准备金保证，即每发行1个
                    USDT 代币，其银行账户都会有1美元的资金保障。用户可以在 Tether 平台进行资金查询，以保障透明度。
                </li>
                <li class="mb-5 tracking-widest px-3">
                    2、泰达币是一种将加密货币与法定货币关元挂钩的鹿拟货币。每一枚泰达市都会象征性的与政府支持的法定货币关联。泰达币是一种保存在外汇储备账户、获得法定货币支持的虛拟货币。该种方式可以有效的防止加密货币出现价格
                    大幅波动，基本上一个泰达币价值就等1关元。
                </li>
            </ul>

        </div>

    </div>
</template>

<script setup>
import { ChevronLeftIcon } from "@heroicons/vue/outline";
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from "vuex";

const router = useRouter()
const store = useStore()
const token = computed(() => store.getters["user/LToken"]);

const goUser = () => {
    router.go('-1')
}

onMounted(()=>{
    if (!token?.value) return router.push('/login')
})
</script>