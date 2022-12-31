<template>
    <div class="w-full h-auto   relative sm:hidden">
        <div class="h-[60px] border-b border-gray-800  w-full text-gray-200   px-2 flex justify-between items-center">
            <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
            <p class=" text-[17px]"> 结算洗码 </p>
            <div @click="goService">

                <img src="@/assets/mobile/home/service.png" alt="" class="w-8 h-7">
            </div>
        </div>
        <section class="px-3 w-full py-3">
            <div class="text-center w-full py-3">
                <h1 class=" text-2xl text-white">可结算洗码</h1>
                <div class="flex justify-center py-5 items-center text-base  ">
                    <img src="@/assets/money.png" alt="" class="w-7 h-8">
                    <h1 class="text-[22px] px-3 pt-1 text-white">{{washData?.wash?.xmf?.toFixed(2) || '0.00'}}</h1>
                </div>
                <div class="btn py-4">
                    <div @click="washCode()" class="btn_login w-full py-5 font-bold tracking-wider text-[#7e7e7e]">一键申请结算</div>
                </div>
            </div>
        </section>
        <section class="px-3 w-full py-2">
            <div class="flex flex-col">
                <div class="overflow-x-auto">
                    <div class="py-2 inline-block min-w-full ">
                        <div class="overflow-hidden">
                            <table class="min-w-full border border-slate-800 text-center">
                                <thead class="border-b border-slate-800 bg-[#c0a45b] text-black font-bold">
                                    <tr class="border-b border-slate-800">
                                        <td
                                            class="px-1 py-4 whitespace-nowrap text-sm font-bold  border-r border-slate-800">
                                            游戏
                                        </td>
                                        <td
                                            class="text-sm  font-bold px-1 py-4 whitespace-nowrap border-r border-slate-800">
                                            比例
                                        </td>
                                        <td
                                            class="text-sm  font-bold px-1 py-4 whitespace-nowrap border-r border-slate-800">
                                            洗码投注额
                                        </td>
                                        <td class="text-sm  font-bold px-1 py-4 whitespace-nowrap">
                                            可结算金额(元)
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!--  -->
                                    <tr v-for="(wash,n) in washData?.list" :key="n"  class="border-b border-slate-800 text-white" :class="n % 2 != 0 ? 'bg-[#5e543b]' : 'bg-[#c0a45b]'">
                                        <td
                                            class="px-1 py-4 whitespace-nowrap text-sm font-medium  border-r border-slate-800">
                                            {{wash?.gameName || '真人'}}
                                        </td>
                                        <td
                                            class="text-sm  font-light px-1 py-4 whitespace-nowrap border-r border-slate-800">
                                            {{wash?.xmb}}%
                                        </td>
                                        <td
                                            class="text-sm  font-light px-1 py-4 whitespace-nowrap border-r border-slate-800">
                                            {{wash?.total_valid_amount}}
                                        </td>
                                        <td class="text-sm  font-light px-1 py-4 whitespace-nowrap">
                                            {{wash?.total_xmf}}
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-3 text-[#7e7e7e]">
                <p class="text-[#bc6013]">温馨提示</p>
                <span>单一游戏类型可洗码投注额需≥300元才可结算洗码。</span>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ChevronLeftIcon } from "@heroicons/vue/outline";
import { computed, onMounted, reactive,ref } from 'vue'
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import { getCurrentInstance } from 'vue';
import allApi from "@/network/allApi.js";
import Loading from "@/utils/loader";

const instance = getCurrentInstance()
const store = useStore()
const router = useRouter()
const token = computed(() => store.getters["user/LToken"]);
const userValue = computed(() => store.getters["user/USERINFO"]);
const user = computed(() => store.getters["user/LOGIN"]);

const goUser = () => {
    router.go(-1)
}

const washData = ref(null)
const goService = () => {
  if(token?.value){
    window.open(`http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293&nick_name=${userValue?.value.username}`)
  }else{
    window.open('http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293')
  }
}

const washCode = () => {
    if(userValue?.value?.balance <= 0) return  instance.proxy.$message({ message: '0星级不能洗码，请存款升级', duration: 2 }) 
    let data = {
            "player": userValue?.value?.username,
            "amount":washData?.value?.wash?.xmf,
            "ids": washData?.value?.wash?.ids,

          }
          Loading.showLoading()
          allApi.RequestWashMoney({data: data,key:user?.value?.key}).then((res) => {
            Loading.hideLoading()
            if (res.data.code == '1') {
              console.log("res of RequestWashMoney data", res);
              //store.commit('user/UserInfo', res.data.data)
              instance.proxy.$message({ message: res?.data?.message, duration: 2 })
            }
          }).catch((e) => {
            Loading.hideLoading()
            console.log(e);
            instance.proxy.$message({ message: e.response?.data?.message, duration: 2 })
          })

} 

const getWashData = () => {
    let data = {
            "player": userValue?.value?.username,
          }

          allApi.GetWashMoney({data: data,key:user?.value?.key}).then((res) => {
            if (res.data.code == '1') {
              console.log("res of getwashmoney data", res);
              washData.value = res?.data?.data
              //store.commit('user/UserInfo', res.data.data)
            }
          }).catch((e) => {
            console.log(e);
          })
}

onMounted(()=>{
    getWashData()
})


</script>