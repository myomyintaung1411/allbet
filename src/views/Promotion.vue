<script setup>
import { useStore } from "vuex";
import { computed } from 'vue'
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
    
<template>
  <div class="h-full w-full px-5 tracking-wider sm:hidden">
    <div class="flex   justify-between items-center py-2 text-[#7e7e7e] ">
      <p class="text-[17px] font-bold">优惠</p>
      <img @click="goService()" src="@/assets/mobile/home/service.png" alt="" class="w-8 h-7">
    </div>
    <div class="w-full relative py-2">
      <img src="@/assets/mobile/coporation/1111.webp" alt="" loading="lazy" class="w-full h-[150px]">
      <div class="py-3 bg-[#141314] px-2">
        <p class="text-[#7e7e7e] text-sm">百万现金红包 千万奢侈品豪礼等您来抢</p>
      </div>
    </div>
    <div class="w-full relative py-2">
      <img src="@/assets/mobile/coporation/2222.webp" alt="" loading="lazy" class="w-full h-[150px]">
      <div class="py-3 bg-[#141314] px-2">
        <p class="text-[#7e7e7e] text-sm">尊贵晋级，一路有礼</p>
      </div>
    </div>
    <div class="w-full relative py-2">
      <img src="@/assets/mobile/coporation/3333.webp" alt="" loading="lazy" class="w-full h-[150px]">
      <div class="py-3 bg-[#141314] px-2">
        <p class="text-[#7e7e7e] text-sm ">新人双重礼16,888见面礼+超值存送券x3</p>
      </div>
    </div>
    <div class="w-full relative py-2">
      <img src="@/assets/mobile/coporation/4444.webp" alt="" loading="lazy" class="w-full h-[150px]">
      <div class="py-3 bg-[#141314] px-2">
        <p class="text-[#7e7e7e] text-sm">随时结算，直接提款，上不封顶，永久比例！</p>
      </div>
    </div>
    <div class="w-full relative py-2">
      <img src="@/assets/mobile/coporation/5555.webp" alt="" loading="lazy" class="w-full h-[150px]">
      <div class="py-3 bg-[#141314] px-2">
        <p class="text-[#7e7e7e] text-sm">每日签到享好礼 刮卡博十万巨奖</p>
      </div>
    </div>
  </div>

  <div class="hidden sm:block relative flex-auto mx-[19px]">
    <div class="main">
      <div class="main-content w-full">
        <div class="w-full flex justify-between">
          <div class="w-[600px] h-[200px] ">
            <img src="@/assets/mobile/coporation/1111.webp" alt="" loading="lazy" class="w-full h-full">
          </div>
          <div class="w-[356px] h-[200px] bg-[rgba(31,33,41)] flex-shrink-0
               py-4 px-5
              ">
            <div class="w-full  text-base __title">百万现金红包 千万奢侈品豪礼等您来抢</div>
            <div class="mt-3 w-fit">
              <div class="type ">限时</div>
            </div>
          </div>
        </div>

        <div class="w-full flex justify-between mt-4">
          <div class="w-[600px] h-[200px] ">
            <img src="@/assets/mobile/coporation/2222.webp" alt="" loading="lazy" class="w-full h-full">
          </div>
          <div class="w-[356px] h-[200px] bg-[rgba(31,33,41)] flex-shrink-0
               py-4 px-5
              ">
            <div class="w-full  text-base __title">尊贵晋级，一路有礼</div>
            <div class="mt-3 w-fit">
              <div class="type ">长期</div>
            </div>
          </div>
        </div>

        <div class="w-full flex justify-between mt-4">
          <div class="w-[600px] h-[200px] ">
            <img src="@/assets/mobile/coporation/3333.webp" alt="" loading="lazy" class="w-full h-full">
          </div>
          <div class="w-[356px] h-[200px] bg-[rgba(31,33,41)] flex-shrink-0
               py-4 px-5
              ">
            <div class="w-full  text-base __title">新人双重礼16,888见面礼+超值存送券x3</div>
            <div class="mt-3 w-fit">
              <div class="type ">长期</div>
            </div>
          </div>
        </div>

        <div class="w-full flex justify-between mt-4">
          <div class="w-[600px] h-[200px] ">
            <img src="@/assets/mobile/coporation/4444.webp" alt="" loading="lazy" class="w-full h-full">
          </div>
          <div class="w-[356px] h-[200px] bg-[rgba(31,33,41)] flex-shrink-0
               py-4 px-5
              ">
            <div class="w-full  text-base __title">随时结算，直接提款，上不封顶，永久比例！</div>
            <div class="mt-3 w-fit">
              <div class="type ">长期</div>
            </div>
          </div>
        </div>
        <div class="w-full flex justify-between mt-4">
          <div class="w-[600px] h-[200px] ">
            <img src="@/assets/mobile/coporation/5555.webp" alt="" loading="lazy" class="w-full h-full">
          </div>
          <div class="w-[356px] h-[200px] bg-[rgba(31,33,41)] flex-shrink-0
               py-4 px-5
              ">
            <div class="w-full  text-base __title">每日签到享好礼 刮卡博十万巨奖</div>
            <div class="mt-3 w-fit">
              <div class="type ">长期</div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>
    
<style scoped>
.__title {
  color: rgb(166, 166, 166);
  text-shadow: rgb(54 57 77) 0px 0.5px 0px;
}

.type {
  padding: 2px 10px;
  line-height: 19px;
  font-size: 14px;
  color: rgb(193, 84, 16);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(193, 84, 16);
}
</style>