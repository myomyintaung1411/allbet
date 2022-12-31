<template>
  <div class="w-full h-screen bg-[#15171f]   relative">
      <div class="h-[60px]  w-full text-gray-200   px-2 flex justify-between items-center">
          <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
          <p class=" text-[17px]"> 合作加盟 </p>
          <!-- <p></p> -->
          <div @click="goService">
              
              <img src="@/assets/mobile/home/service.png" alt="" class="w-8 h-7">
          </div>
      </div>
     <section class="px-3 w-full py-3">
       <div class="flex px-2 justify-center space-x-3">
          <div>
              <h1 class=" tracking-wide text-xl px-3 text-[#ffa43c]">合作加盟</h1>
              <div class="flex py-1 text-[#8e8e93] space-x-2 text-[11px]">
                  <img src="@/assets/mobile/coporation/phone.png" alt=""
                  class="w-5 h-5"
                  >
                  <p>400-842-3711</p>
              </div>
          </div>
          <div>
              <img src="@/assets/mobile/coporation/dd.png" alt="" class="w-16">
          </div>
          <div>
              <h1 class=" tracking-wide text-xl px-3 text-[#ffa43c]">共享财程</h1>
              <div class="flex py-1 text-[#8e8e93] space-x-2 items-center text-[11px]">
                  <img src="@/assets/mobile/coporation/email.png" alt=""
                  class="w-5 h-3"
                  >
                  <p>ob01ceo@gmail.com</p>
              </div>
          </div>

       </div>

       <section class="px-3 flex justify-center py-3 space-x-7">
          <div class="px-7 py-3 btn_login text-center font-bold ">
              联系客服加盟
          </div>
          <div class="px-7 py-3 btn_login text-center font-bold">
              查看您的佣金
          </div>
       </section>
       <div class="px-3 w-full py-2">
          <h1 class="text-[#a6a6a6] text-[17px]">招商负责人</h1>
          <div class="flex items-center text-[#7e7e7e] space-x-3">
              <img src="@/assets/mobile/coporation/p.png" alt="" class="w-5 h-5">
              <span class="text-[#8e8e93] text-sm">西门</span>
              <span class="text-[11px]">TG:@GACEO</span>
              <span class="text-[12px]">QQ：4677465</span>
          </div>
          <div class="flex items-center text-[#7e7e7e] space-x-3 py-1">
              <img src="@/assets/mobile/coporation/p.png" alt="" class="w-5 h-5">
              <span class="text-[#8e8e93] text-sm">阿文</span>
              <span class="text-[11px]">TG:@GAZL88</span>
              <span class="text-[12px]">1194945</span>
          </div>
       </div>
       <div class="w-full  py-2">
          <!-- <img src="@/assets/mobile/coporation/11.png" alt="" class="h-[220px] w-full"> -->
          <div class="flex px-12 justify-between items-center   whitespace-nowrap">
            <div class="flex flex-col items-center justify-center  text-[11px] text-white">
                <img src="@/assets/mobile/coporation/star.png" alt="" class="w-20">
                <span> 持菲律宾牌照</span>
                <span>23年实力品牌网站</span>
            </div>
            <div class="flex flex-col items-center justify-center  text-[11px] text-white">
                <img src="@/assets/mobile/coporation/kin.png" alt="" class="w-20">
                <span> 世界巨星阿扎尔代言</span>
                <span>8家国际俱乐部赞助商</span>
            </div>
          </div>
          <div class="flex px-5 justify-between items-center   whitespace-nowrap">
            <div class="flex flex-col items-center justify-center  text-[11px] text-white">
                <img src="@/assets/mobile/coporation/mone.png" alt="" class="w-20">
                <span> 只需介绍有效会员</span>
                <span>佣金月结 重金回报</span>
            </div>
            <div class="flex flex-col items-center justify-center  text-[11px] text-white">
                <img src="@/assets/mobile/coporation/kef.png" alt="" class="w-20">
                <span> 7x24小时人工客服</span>
                <span>专业团队 服务领先</span>
            </div>
            <div class="flex flex-col items-center justify-center  text-[11px] text-white">
                <img src="@/assets/mobile/coporation/quan.png" alt="" class="w-20">
                <span> 尊龙凯时精准策划</span>
                <span>轻松吸粉赚取佣金</span>
            </div>
          </div>
       </div>
     </section>
     <section class="px-5 w-full py-3">
      <div class="tabs flex items-center text-base tracking-wide space-x-7">
          <div @click="tabClick(1)" 
           :class="tab === 1 ? 'text-[#a6a6a6] border-b-4 border-[#ffa43c] border-solid' : 'text-[#696969]'"
          >
              占成方案
          </div>
          <div @click="tabClick(2)" :class="tab === 2 ? 'text-[#a6a6a6] border-b-4 border-[#ffa43c] border-solid' : 'text-[#696969]'">
              佣金计算器
          </div>
      </div>
      <div class="py-2 w-full my-3">
          <div v-if="tab == 1" class="flex flex-col ">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="py-2 inline-block min-w-full ">
                      <div class="overflow-hidden">
                          <table class="min-w-full border border-slate-800 text-center">
                              <thead class="border-b border-slate-800">
                                  <tr>
                                      <th colspan="4" scope="col" class="text-sm font-medium bg-[1e2129]  px-6 py-4 text-[#ffa43c] ">
                                          月占成方案
                                      </th>
                                  </tr>
                              </thead>
                              <tbody class="text-white">
                                  <tr class="border-b border-slate-800 ">
                                      <td class="px-1 py-4 whitespace-nowrap text-sm font-medium  border-r border-slate-800">代理等级
                                      </td>
                                      <td class="text-sm  font-light px-1 py-4 whitespace-nowrap border-r border-slate-800">
                                          代理等级
                                      </td>
                                      <td class="text-sm  font-light px-1 py-4 whitespace-nowrap border-r border-slate-800">
                                          佣金比例
                                      </td>
                                      <td class="text-sm  font-light px-1 py-4 whitespace-nowrap">
                                          有效会员
                                      </td>
          
                                  </tr>
                                  <tr class="border-b  border-slate-800">
                                      <td class="px-2 py-4 whitespace-nowrap text-sm font-medium  border-r border-slate-800">等级1
                                      </td>
                                      <td class="text-sm  font-light px-2 py-4 whitespace-nowrap border-r border-slate-800">
                                          0-100万
                                      </td>
                                      <td class="text-sm  font-light px-3 py-4 whitespace-nowrap border-r border-slate-800">
                                          30%
                                      </td>
                                      <td rowspan="5" class="text-sm  font-light px-3 py-4 whitespace-nowrap">
                                          只要<br />
                                          <span class="text-xl">5个</span>
                                      </td>
                                  </tr>
                                  <tr class=" border-b border-slate-800">
                                      <td class="px-3 py-4 whitespace-nowrap text-sm font-medium border-r border-slate-800">等级2
                                      </td>
                                      <td class="text-sm  font-light px-3 py-4 whitespace-nowrap border-r border-slate-800">
                                          100-200万
          
                                      </td>
                                      <td class="text-sm  font-light px-6 py-4 whitespace-nowrap border-r border-slate-800">
                                          35%
                                      </td>
                                  </tr>

                                  <tr class=" border-b border-slate-800">
                                      <td class="px-3 py-4 whitespace-nowrap text-sm font-medium  border-r border-slate-800">等级3
                                      </td>
                                      <td class="px-3 py-4 whitespace-nowrap text-sm font-medium  border-r border-slate-800">
                                          200-500万</td>
                                      <td
                                          class="text-sm  font-light px-6 py-4 whitespace-nowrap text-center border-r border-slate-800">
                                          40%
                                      </td>
                                  </tr>
                                  <tr class=" border-b border-slate-800">
                                      <td class="px-3 py-4 whitespace-nowrap text-sm font-medium  border-r border-slate-800">等级4
                                      </td>
                                      <td class="px-3 py-4 whitespace-nowrap text-sm font-medium  border-r border-slate-800">
                                        500-1000万</td>
                                      <td
                                          class="text-sm  font-light px-6 py-4 whitespace-nowrap text-center border-r border-slate-800">
                                          45%
                                      </td>
                                  </tr>
                                  <tr class=" border-b border-slate-800">
                                      <td class="px-3 py-4 whitespace-nowrap text-sm font-medium  border-r border-slate-800">等级5	
                                      </td>
                                      <td class="px-3 py-4 whitespace-nowrap text-sm font-medium  border-r border-slate-800">
                                        1000万以上</td>
                                      <td
                                          class="text-sm  font-light px-6 py-4 whitespace-nowrap text-center border-r border-slate-800">
                                          50%
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
          <div v-if="tab == 2"  class="flex flex-col w-full">
            <div class="py-3 bg-[#1e2129] text-center text-[#ffa43c]">
                月占成
            </div>
            <form @click.prevent class="relative ">
                <div class="py-2 text-[#a6a6a6]">
                    有效会员净利润
                </div>
                <div class="relative formDiv">
                    <div class="  w-full h-full text-sm flex justify-center items-center relative">
                        <input  v-model="name" autocomplete="off" class=" pc-input text-[#ffa43c] bg-transparent   
                                        
                         w-full h-full" type="number" 
          name="profit" min="1" max="100000000" @input="eventName">
                        <XIcon v-if="name" @click="name = ''" class="h-5 w-5 cursor-pointer  absolute right-6  "></XIcon>
                        <span class="absolute right-0 text-[#ffa43c]">元</span>
                    </div>
                </div>
                <div class="pt-4 text-[#a6a6a6]">
                    有效会员个数 (≥5的数字)
                </div>

                <div class="relative formDiv">
                    <div class="  w-full h-full text-sm flex justify-center items-center relative">
                        <input  v-model="amount" autocomplete="off" class=" pc-input text-[#ffa43c] bg-transparent                 
                         w-full h-full" type="number"  @input ="amountEvent"
                         pattern="[\d*]" name="person" min="1" max="100">
                        <XIcon v-if="amount" @click="amount = ''" class="h-5 w-5 cursor-pointer  absolute right-6  "></XIcon>
                        <span class="absolute right-0">人</span>
                    </div>
                </div>
            </form>
          </div>
      </div>
     </section>
  </div>
</template>
  
<script setup>
import {XIcon } from "@heroicons/vue/solid";
import { ChevronLeftIcon  } from "@heroicons/vue/outline";
import { useRouter } from 'vue-router';
import { useStore } from "vuex";
import {  computed,ref } from 'vue'
const router = useRouter()

const name = ref('')
const amount = ref('')
const store = useStore()

const userValue = computed(() => store.getters["user/USERINFO"]);
const token = computed(() => store.getters["user/LToken"]);

const goUser = () => {
  router.push('/user')
}
const eventName = (e) => {
    if (!/^[0-9]+$/.test(name.value)) name.value = name.value.replace(/\D/g, ''); 
    if (name.value > 100000000) name.value = 100000000; 
    if (name.value < 0) name.value = null
}
const amountEvent = (e) => {
    if (!/^[0-9]+$/.test(amount.value)) amount.value = amount.value.replace(/\D/g, ''); 
    if (amount.value > 100) amount.value = 100; 
    if (amount.value < 0) amount.value = null
}
const tab = ref(1)
const activeOne = ref(true)
const activeTwo = ref(false)

const goService = () => {
  if(token?.value){
    window.open(`http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293&nick_name=${userValue?.value.username}`)
  }else{
    window.open('http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293')
  }
}

 const tabClick = (numb) => {
  tab.value = numb
  if(numb === 1) {
      activeOne.value = true
      activeTwo.value = false
  }
  if(numb === 2) {
      activeOne.value = false
      activeTwo.value = true
  }
 }

 if(window.innerWidth > 640){
    router.push('/pc/coporation')
}
</script>
  
<style scoped>
 .pc-input:focus-within {
    /* border: 0; */
    outline: none;
    box-shadow: none;
    border-color: #eed0a4
}

.pc-input {
    outline: 0;
    border-width: 0 0 1px;
    border-color: grey
}
  </style>