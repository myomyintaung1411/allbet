<template>
  <div class="h-screen sm:h-auto">
   <div class="hidden sm:block">
    <Header></Header>
   </div>
    <div class="sm:mt-[74px] h-full sm:h-auto flex flex-col justify-center items-center relative">
      <div class="h-[307px] w-[307px] bg-[#13151b] rounded-full">
        <div class="h-full w-full flex justify-center items-center">
          <img src="@/assets/404.webp" alt="" class="w-[213px] h-[82px]" draggable="false" loading="lazy">
        </div>
      </div>
      <p class="pt-5 text-white text-xl tracking-wider">出错啦，您访问的页面无法连接！</p>
      <router-link to="/" class="py-3 flex items-center space-x-2 text-white text-[18px]">
        <p>联系客服</p>
        <ChevronRightIcon class="text-white h-6 w-6 cursor-pointer"></ChevronRightIcon>
      </router-link>
      <div class="py-3 w-[300px]">
        <div @click="goService" class="btn_login text-center py-3 cursor-pointer text-lg text-black">
          联系客服
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
 import Header from '@/components/Header.vue';
import { ChevronRightIcon } from '@heroicons/vue/outline';
import { computed } from 'vue'

import { useStore } from "vuex";

const store = useStore()

const token = computed(() => store.getters["user/LToken"]);
const userValue = computed(() => store.getters["user/USERINFO"]);

const goService = () => {
    if (token?.value) {
        window.open(`http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293&nick_name=${userValue?.value.username}`)
    } else {
        window.open('http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293')
    }
}

</script>