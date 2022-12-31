<template>
  <div class="w-full h-auto   relative">
      <div class="h-[60px]  w-full text-gray-200   px-2 flex justify-between items-center">
          <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
          <p class=" text-[17px]"> 赌神风云榜 </p>
          <div @click="goService">
              <img src="@/assets/mobile/home/service.png" alt="" class="w-8 h-7">
          </div>
      </div>
    <section class="w-full px-3 py-2 relative">
      <div class="flex items-center py-2 w-full justify-between px-3 ">
        <div class="w-[28%] relative mt-4">
          <img src="@/assets/mobile/home/rank2.png" alt="" class="w-full h-[90px]">
          <div class="absolute w-full  h-[40px] bottom-0 text-center text-[#bcbcbc] text-[11px]">
            <p class=" tracking-wider">m***01</p>
            <p class=" tracking-wider ">¥ 436,700</p>
          </div>
        </div>
        <div class="w-[38%] relative">
          <img src="@/assets/mobile/home/rank1.png" alt="" class="w-full h-[110px]">
          <div class="absolute w-full  h-[40px] bottom-2 text-center text-[#bcbcbc] text-sm">
            <p class=" tracking-wider">m***i3</p>
            <p class=" tracking-wider ">￥511 , 355</p>
          </div>
        </div>
        <div class="w-[28%] relative mt-4">
          <img src="@/assets/mobile/home/rank3.png" alt="" class="w-full h-[90px]">
          <div class="absolute w-full  h-[40px] bottom-0 text-center text-[#bcbcbc] text-[11px]">
            <p class=" tracking-wider">c***ru</p>
            <p class=" tracking-wider ">￥333 , 655</p>
          </div>
        </div>
      </div>
    </section>

    <section class="px-3 py-2 w-full relative">
        <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full relative">
          <thead class="bg-[#1e2129]  text-[#7e7e7e] sticky top-0">
            <tr>
              <th scope="col" class="text-sm font-medium  px-6 py-4 text-left">
                排名
              </th>
              <th scope="col" class="text-sm font-medium  px-6 py-4 text-left">
                用户名
              </th>
              <th scope="col" class="text-sm font-medium  px-6 py-4 text-left">
                盈利金额(元)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in ranking " :key="data.id" class="" :class="data.id % 2 != 0 ? 'bg-[#272c33]' : 'bg-[#1e2129]'">
              <td class="px-6 py-4 font-bold flex items-center whitespace-nowrap text-center text-sm  ">
                {{data.id}} <span>
                    <img src="@/assets/mobile/coporation/up.png" alt="" class="w-3 h-3 mx-1">
                </span>
              </td>
              <td class="text-sm text-[#7e7e7e]  font-light px-6 py-4 whitespace-nowrap">
                {{data.username}}
              </td>
              <td class="text-sm  text-[#7e7e7e] font-light px-6 py-4 whitespace-nowrap">
                {{data.money}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <section class="text-[#7e7e7e]">
    <ul>
        <li>
            <span class="px-2">*</span>
            <span>排行榜数据每50分钟更新一次</span>
        </li>
        <li>
            <span class="px-2">*</span>
            <span>实时盈利=赢利+洗码，以RMB为计算单位</span>
        </li>
        <li>
            <span class="px-2">*</span>
            <span>会员实时盈利相同时，有效投注额较高者排名靠前</span>
        </li>
    </ul>
  </section>
</div>
</section>
  </div>
</template>
  
<script setup>
  import { ChevronRightIcon  } from "@heroicons/vue/solid";
  import { InformationCircleIcon,ChevronLeftIcon,  } from "@heroicons/vue/outline";
  import { useRouter } from 'vue-router';
  import { useStore } from "vuex";

  import {ref,computed,onMounted} from 'vue'
  const router = useRouter()
  const store = useStore()

  const userValue = computed(() => store.getters["user/USERINFO"]);
  const token = computed(() => store.getters["user/LToken"]);

  const ranking = ref([
    {
    id:'4',
    username:'c***23',
    money:'323565',
  },
    {
    id:'5',
    username:'m***52',
    money:'311565',
  },
    {
    id:'6',
    username:'r***73',
    money:'310065',
  },
    {
    id:'7',
    username:'s***36',
    money:'300786',
  },
    {
    id:'8',
    username:'d***27',
    money:'299988',
  },
    {
    id:'9',
    username:'r***96',
    money:'298760',
  },
    {
    id:'10',
    username:'g***37',
    money:'289760',
  },
    {
    id:'11',
    username:'j***07',
    money:'279760',
  },
    {
    id:'12',
    username:'w***24',
    money:'265760',
  },
    {
    id:'13',
    username:'h***28',
    money:'258890',
  },
    {
    id:'14',
    username:'b***34',
    money:'238390',
  },
    {
    id:'15',
    username:'n***34',
    money:'222890',
  },
    {
    id:'16',
    username:'o***54',
    money:'218698',
  },
    {
    id:'17',
    username:'p***76',
    money:'208890',
  },
    {
    id:'18',
    username:'w***64',
    money:'198856',
  },
])
  
const goService = () => {
  if(token?.value){
    window.open(`http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293&nick_name=${userValue?.value.username}`)
  }else{
    window.open('http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293')
  }
}
  const goUser = () => {
    router.go(-1)
  }

  onMounted(()=>{
    if (!token?.value) return router.push('/login')

})
  </script>