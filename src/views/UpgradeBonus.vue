<template>
    <div class="w-full h-auto  bg-[#171a21] relative sm:hidden">
        <div class="h-[60px]  w-full text-gray-400   px-2 flex justify-between items-center">
            <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
            <p class=" text-[17px]"> 晋级有礼 </p>
            <div class="flex flex-col pt-2 text-center mr-2 items-center whitespace-nowrap ">
                <img src="@/assets/mobile/user/service.png" alt="" class="h-7 w-7">
                <p>客服</p>
            </div>
        </div>
        <section class="upgradeBonus">
            <div class="h-[320px] __bgupg">
                <img src="@/assets/upgb.png" alt="" class="w-full h-full">
            </div>
            <div class=" px-3 w-full">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full relative">
                                <thead class="  border border-[#c99f62] text-[#c99f62]   sticky top-0">
                                    <tr>
                                        <th scope="col"
                                            class="text-sm font-bod    px-2 py-4 text-left border-r border-[#6f4515]">
                                            <div class="flex flex-col items-center">
                                                <img class="w-5"
                                                    src="data:image/png;base64,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"
                                                    alt="">
                                                <p class="py-2">星级</p>
                                            </div>
                                        </th>
                                        <th scope="col"
                                            class="text-sm font-bod   px-2 py-4 text-left border-r border-[#6f4515]">
                                            <div class="flex flex-col items-center">
                                                <img class="w-5"
                                                    src="data:image/png;base64,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"
                                                    alt="">
                                                <p class="py-2"> 晋级条件 </p>
                                            </div>
                                        </th>
                                        <th scope="col"
                                            class="text-sm font-bod   px-2 py-4 text-left border-r border-[#c99f62]">
                                            <div class="flex flex-col items-center">
                                                <img class="w-5"
                                                    src="data:image/png;base64,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"
                                                    alt="">
                                                <p class="py-2"> 晋级条件 </p>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="data in tableData" :key="data.id"
                                        class="border border-[#c99f62] text-[#c99f62]">
                                        <td
                                            class="px-3 py-4 font-bold  whitespace-nowrap text-center text-sm  border-r border-[#6f4515] ">
                                            {{ data.level }}
                                        </td>
                                        <td
                                            class="text-sm font-bold text-center   px-3 py-4 whitespace-nowrap border-r border-[#6f4515]">
                                            {{ data.title }}
                                        </td>
                                        <td
                                            class="text-sm font-bold text-center   px-3 py-4 whitespace-nowrap border-r border-[#c99f62]">
                                            {{ data.amount }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!--  -->
                <section class="active py-3 text-[#c99f62]">
                    <p class="text-center text-xl">活动细则</p>
                    <div class="px-3 text-white">
                        <ol>
                            <li class=" text-sm py-1">
                                1. 本活动只适用于活动开始后的晋级，以往已晋级将不补发礼金；
                            </li>
                            <li class=" text-sm  py-1">
                                2. 周洗码投注额分开计算人民币和USDT账户，投注特惠电子游戏和部分体育盘口等将不计入洗码投注额，详见
                            </li>
                            <li class=" text-sm  py-1">
                                3. 每周一更新星级，双账户同步晋升且永久保持，可享受更高洗码比例等特权，从Lv.1开始每晋升一级可获得对应礼金，合计可领6,140元；
                            </li>
                            <li class=" text-sm  py-1">
                                4. 晋级礼金需于活动页手动领取，CNY活动页领取派发至CNY账户，USDT活动页领取派发至USDT账户，1倍流水可取款，限当周领取，逾期未领取视为自愿放弃；
                            </li>
                            <li class=" text-sm  py-1">
                                5. 此优惠只适用于一个账号玩家；同一手机号码、银行资料、登录设备ID及IP地址只能享受一次；
                            </li>
                            <li class=" text-sm  py-1">
                                6. 对于各种非正常投注、如对冲等行为，一经发现将取消优惠资格；
                            </li>
                            <li class=" text-sm  py-1">
                                7. 为避免文字理解差异，博冠保留最终解释权。
                            </li>
                        </ol>
                    </div>
                </section>
            </div>
        </section>
    </div>

    <div class="hidden sm:block relative overflow-x-hidden ">
        <Header></Header>
        <div style="background-color: rgb(53, 15, 3)">
            <div class="w-full h-[418px]">
                <div class="h-[350px] __bgupg relative">
                    <img src="@/assets/upgb.png" alt="" class="w-[350px] h-full absolute m-auto left-0 right-0
">
                </div>
            </div>
            <div class="mx-auto  max-w-[1920px]">
                <div class="relative pt-[10px] pb-[90px] box-border">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2  min-w-full mx-auto flex justify-center sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <table class="min-w-[900px] relative">
                                    <thead class="  border border-[#ffb538] text-[#ffb538]   sticky top-0">
                                        <tr>
                                            <th scope="col"
                                                class="text-sm font-medium    px-2 py-4 text-left border-r border-[#6f4515]">
                                                <div class="flex flex-col items-center">
                                                    <img class="w-5"
                                                        src="data:image/png;base64,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"
                                                        alt="">
                                                    <p class="py-2">星级</p>
                                                </div>
                                            </th>
                                            <th scope="col"
                                                class="text-sm font-medium   px-2 py-4 text-left border-r border-[#6f4515]">
                                                <div class="flex flex-col items-center">
                                                    <img class="w-5"
                                                        src="data:image/png;base64,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"
                                                        alt="">
                                                    <p class="py-2"> 晋级条件 </p>
                                                </div>
                                            </th>
                                            <th scope="col"
                                                class="text-sm font-medium   px-2 py-4 text-left border-r border-[#ffb538]">
                                                <div class="flex flex-col items-center">
                                                    <img class="w-5"
                                                        src="data:image/png;base64,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"
                                                        alt="">
                                                    <p class="py-2"> 晋级条件 </p>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="data in tableData" :key="data.id" class="border border-[#ffb538]">
                                            <td
                                                class="px-3 py-4 font-bold  whitespace-nowrap text-center text-sm  border-r border-[#6f4515] ">
                                                {{ data.level }}
                                            </td>
                                            <td
                                                class="text-sm font-bold text-center   px-3 py-4 whitespace-nowrap border-r border-[#6f4515]">
                                                {{ data.title }}
                                            </td>
                                            <td
                                                class="text-sm font-bold text-center   px-3 py-4 whitespace-nowrap border-r border-[#ffb538]">
                                                {{ data.amount }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-10 mx-auto max-w-[1000px] " style="background-color: rgb(80, 26, 10);">
                <div class="w-full text-center">
                    <h1 class="text-xl">活动规则</h1>
                </div>
                <div class="py-3 px-6 space-y-3">
                    <ul class="space-y-3">
                        <li>
                            1. 本活动只适用于活动开始后的晋级，以往已晋级将不补发礼金；
                        </li>
                        <li>
                            2. 周洗码投注额分开计算人民币和USDT账户，投注特惠电子游戏和部分体育盘口等将不计入洗码投注额，详见洗码活动页；
                        </li>
                        <li>
                            3. 每周一更新星级，双账户同步晋升且永久保持，可享受更高洗码比例等特权，从Lv.1开始每晋升一级可获得对应礼金，合计可领6,140元；
                        </li>
                        <li>
                            4. 晋级礼金需于活动页手动领取，CNY活动页领取派发至CNY账户，USDT活动页领取派发至USDT账户，1倍流水可取款，限当周领取，逾期未领取视为自愿放弃；
                        </li>
                        <li>
                            5. 此优惠只适用于一个账号玩家；同一手机号码、银行资料、登录设备ID及IP地址只能享受一次；
                        </li>
                        <li>
                            6. 对于各种非正常投注、如对冲等行为，一经发现将取消优惠资格；
                        </li>
                        <li>
                            7. 为避免文字理解差异，博冠保留最终解释权。
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="py-7 w-full text-center">
            <p>© 2022 龙凯 版权所有. All rights Reserved</p>
        </div>
    </div>
</template>

<script setup>
import { ChevronLeftIcon } from "@heroicons/vue/outline";
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import Header from "@/components/Header.vue";

const router = useRouter()
const tableData = ref([
    {
        id: 1,
        level: 'Lv.1',
        title: '新用户完成首笔存款',
        amount: '/'
    },
    {
        id: 2,
        level: 'Lv.2',
        title: '周洗码投注额≥10万',
        amount: '88元'
    },
    {
        id: 3,
        level: 'Lv.3',
        title: '周洗码投注额≥50万',
        amount: '388元'
    },
    {
        id: 4,
        level: 'VIP4',
        title: '周洗码投注额≥100万',
        amount: '888元'
    },
    {
        id: 5,
        level: 'VIP5',
        title: '周洗码投注额≥300万',
        amount: '1,888元'
    },
    {
        id: 6,
        level: 'VIP6',
        title: '周洗码投注额≥1,000万',
        amount: '2,888元'
    }
])

const goUser = () => {
    router.go(-1)
}
</script>

<style scoped>
.__bgupg {
    background-image: url(@/assets/upg.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
}

.upgradeBonus {
    height: auto;
}
</style>