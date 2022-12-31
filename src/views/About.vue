<template>
  <div class="w-full h-auto   relative sm:flex-auto sm:mx-[19px] sm:bg-[#1f2129] ">
    <div
      class="h-[60px]  w-full text-gray-400 sm:bg-[#1f2129]    px-2 flex justify-between sm:justify-center items-center">
      <ChevronLeftIcon @click="goUser()" class="w-7 h-7  sm:hidden "></ChevronLeftIcon>
      <p class=" text-[17px] sm:text-center mr-5 sm:mr-0"> 关于博冠 </p>
      <p></p>
    </div>
    <div class="w-full px-2 sm:px-0 py-3 bg-[#13151b] sm:bg-transparent text-[#7e7e7e] text-base">
      <ul>
        <li class="mb-5 tracking-widest px-3  leading-7">

          博冠由亚洲顶级游戏运营商“博冠”和国际知名娱乐集团“凯时”合并而来。

        </li>
        <li class="mb-5 tracking-widest px-3">

          博冠先后赞助斯诺克、F1、ONE等世界大型赛事，更在2020年以千万巨资签约皇马巨星艾登 · 阿扎尔，作为品牌大使向全球千万用户推荐博冠。

        </li>
        <li class="mb-5 tracking-widest px-3">

          拥有23年历史的凯时是德甲勒沃库森、奥格斯堡、巴甲弗鲁米嫩塞以及意甲罗马和荷甲阿贾克斯的官方赞助商，在世界各地拥有广泛的知名度，并在2021年签约足坛巨星范佩西担任品牌大使。

        </li>
        <li class="mb-5 tracking-widest px-3">

          2022年初，博冠宣布与凯时强强联合，后续将继续为用户提供安全便捷、信誉非凡的至尊游戏体验。

        </li>
        <li class="mb-5 tracking-widest px-3">

          隐私保障<br />
          博冠使用DigiCert提供的256-bit加密程式，以确保每位客户资料的隐私。博冠绝不会分享或出售任何客户的资料给第三者，除非在隐私政策上有例外说明。

        </li>
        <li class="mb-5 tracking-widest px-3">

          游戏责任<br />
          博冠致力于负责任博彩和确保客户入会的最低的年龄限制为合法年龄18岁或以上。博冠的团队拥有充足和丰富的经验并能对病态赌徒提供协助及指引。

        </li>
        <li class="mb-5 tracking-widest px-3">

          支付方式<br />
          博冠向您提供安全方便的各种支付方式。博冠坚持以“了解你的客户”和“反洗钱”为一贯宗旨，并配合第三方金融监管机构，以确保遵守最高标准。

        </li>
        <li class="mb-5 tracking-widest px-3">

          友善和专业的客户服务团队<br />
          博冠亲切友善的客户服务员训练有素，在帮助解决客户疑难的同时亦能给与您最优越和贴身的服务。博冠亦有提供线上聊天的功能，让客户们能即时联络博冠。

        </li>
      </ul>

    </div>
  </div>
</template>

<script setup>
import { ChevronLeftIcon } from "@heroicons/vue/outline";
import { useRouter } from 'vue-router';

const router = useRouter()


const goUser = () => {
  router.go(-1)
}
</script>