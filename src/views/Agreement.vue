<template>
    <div class="w-full h-auto   relative sm:flex-auto sm:mx-[19px] sm:bg-[#1f2129]">
        <div class="h-[60px]  w-full text-gray-400   px-2 sm:bg-[#1f2129] flex justify-between sm:justify-center items-center">
            <ChevronLeftIcon @click="goUser()" class="w-7 h-7 sm:hidden "></ChevronLeftIcon>
            <p class=" text-[17px]  mr-5 sm:mr-0 sm:text-center"> 规则与条例 </p>
            <p></p>
        </div>
        <div class="w-full px-2 sm:px-0 py-3 bg-[#13151b] sm:bg-transparent text-[#7e7e7e] text-base">
          <ul>
            <li class="mb-3 tracking-widest px-3">
                1、为避免投注时产生争议，请会员务必于进入网站前详阅博冠所定的各项规则，开户进入本网站进行投注，即被视为已接受博冠的所有规则与条例；
            </li>
            <li class="mb-3 tracking-widest px-3">
                2、用户须达到居住地国家法律规定的合法年龄（如满18周岁）方可使用博冠网站进行投注；
            </li>
            <li class="mb-3 tracking-widest px-3">
                3、博冠游戏账户只限会员本人使用。会员有责任确保自己的账户及登入资料的保密性，以会员账号及密码进行的任何网上投注，将被视为有效。请您务必定期修改密码。如客户发现或怀疑自己的资料被盗用，请告知本公司进行密码变更；
            </li>
            <li class="mb-3 tracking-widest px-3">
                4、每次登入时会员都应该核对自己的账户额度，如对账户额度有任何疑问，请立即通知本公司；
            </li>
            <li class="mb-3 tracking-widest px-3">
                5、若博冠发现会员以不正当手法，如恶意利用游戏网站程序漏洞套利，或使用外挂程序进行投注，或擅自修改系统数据来获取不当盈利，经查证属实，将立即禁用会员账号，并保留取消游戏注单的权利，且非法所得不予计算和发放；
            </li>
            <li class="mb-3 tracking-widest px-3">
                6、所有提款申请必须符合本网站的提款政策及相关反洗钱等法律规定，如存款后有效投注未达1倍流水，则无法通过提款审核，提款申请将会被驳回；
            </li>
            <li class="mb-3 tracking-widest px-3">
                7、博冠保留追回为会员账户错误添加的额度的权利，诸如彩金派发、存款、优惠，并保留在没有任何形式通知会员的情况下暂时停用会员账号的权利；
            </li>
            <li class="mb-3 tracking-widest px-3">
                8、特此声明，博冠会对所有的电子交易进行记录，如有任何争议，将会以注单记录为准；
            </li>
            <li class="mb-3 tracking-widest px-3">
                9、牌类游戏在出牌途中，尚无结果前被动或强制断开网络连接，若注单已提交将不影响游戏结果；
            </li>
            <li class="mb-3 tracking-widest px-3">
                10、如遇不可抗因素，如发生自然灾害，黑客入侵，网络问题等造成数据丢失，以本公司公告为最终处理方案；
            </li>
            <li class=" tracking-widest px-3">
                11、博冠保留自行决定和不定时更改本条例的权利，更改的条例将从更改之日起生效，博冠保留一切有争议事项的最终解释权。
            </li>
          </ul>

        </div>
    </div>
</template>

<script setup>
import { ChevronLeftIcon  } from "@heroicons/vue/outline";
import { useRouter } from 'vue-router';

const router = useRouter()


const goUser = () => {
    router.go(-1)
}
</script>

<style scoped>
.upgradeBonus {
    background-image: url("https://344a78frontweb.wgqzh.com/cdn/344a78FM2/assets/img/upgrade-bonus-bg.90b121f8.png_.webp");
    background-size: 100% 100%;
    background-color: #501a0a;
    background-repeat: no-repeat;
}

.table-header {
    background-color: rgba(38, 20, 0, .76);
    border: 1px solid #ffc64f;
    border-radius: 4px;
}
</style>