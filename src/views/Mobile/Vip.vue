<script setup>
import { ref, reactive, onMounted } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";
import "swiper/css/navigation"
import 'swiper/css/pagination';
import { useRouter } from 'vue-router';

// import required modules
import { EffectCoverflow,EffectCards, EffectFade, Autoplay, Navigation, Pagination, FreeMode } from "swiper";
import { ArrowCircleDownIcon, XIcon } from '@heroicons/vue/outline';
const swiperContainer = ref(false)
const router = useRouter()

const myCarousel = ref(null)
const itemCount = ref(10)
const activeVip = ref(0)
const showVipDialog = ref(false)
const infoDialog = ref(false)
const controlledSwiper = ref();
const swiperActiveIndex = ref(0)
const realIndex = ref(null)
// const swiper =  ref(Swiper)

const clickVip = (number,swiper_container) => {
  swiperContainer.value = swiper_container
  console.log("leeeee");
    activeVip.value = number
    switch (number) {
      case 0:
        itemCount.value = 10
        break;
      case 1:
      itemCount.value = 12
        break;
      case 2:
      itemCount.value = 14
        break;
    
      default:
        break;
    }
}


const vipClick = (n) => {
  console.log(n,"nnnn");
  myCarousel.value.next()
}

const setControlledSwiper = (swiper) => {
  controlledSwiper.value = swiper
}

const slideChange = (e) => {
  realIndex.value = e.realIndex
}

function activeIndex(e) {
  console.log(e.activeIndex);
}

function onSlideChangeTransitionEnd(e) {
  swiperActiveIndex.value = e.activeIndex
  console.log('swiper ', e.activeIndex)
}

const showSwiper = () => {
  swiperContainer.value = true
}

if(window.innerWidth > 640){
    router.push('/pc/vip')
}

</script>
    
<template>
  <div class="h-full w-full  relative vip sm:hidden">
    <div v-if="!swiperContainer" class="flex flex-col bg-[#15171d] h-full w-full relative">
      <div class="head relative"></div>
      <section class="vip_body w-full mt-10 h-[100px] ">
        <div class="benefits flex justify-between px-2 h-14 relative  ">
          <div class="relative mt-5 w-14 h-14  ">
            <div class="relative circle__ h-full w-full">
              <div id="fade__" class="relative w-full h-full justify-center items-center flex ">
                <swiper :loop="true" :autoplay='{
                  "delay": 3000,
                  "disableOnInteraction": false,
                }' :modules="[Autoplay]" class=" w-full h-full  ">
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/1.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/2.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/3.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/4.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/5.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/6.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/7.png" alt="" class="w-12 h-12"></swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
          <div class="relative -mt-2  w-14 h-14 benefit2  ">
            <div class="relative circle__ h-full w-full">
              <div class="w-full h-full justify-center items-center flex">

                <swiper  :loop="true" :autoplay='{
                  "delay": 3000,
                  "disableOnInteraction": false,
                }' :modules="[Autoplay]" class=" w-full h-full  ">
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/2.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/3.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/4.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/5.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/6.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/7.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/1.png" alt="" class="w-12 h-12"></swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
          <div class="text-[12px]">
            <div class="relative -mt-5  w-14 h-14 benefit3   ">
              <div class="relative circle__ h-full w-full">
                <div class="w-full h-full justify-center items-center flex">

                  <swiper :loop="true" :autoplay='{
                  "delay": 3000,
                  "disableOnInteraction": false,
                }' :modules="[Autoplay]" class=" w-full h-full  ">
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/3.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/4.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/5.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/6.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/7.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/1.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/2.png" alt="" class="w-12 h-12"></swiper-slide>
                </swiper>
                </div>
              </div>
              <!-- <span class="mt-12 ">生日礼金</span> -->
            </div>
            <div class="mt-2 text-center ">生日礼金</div>
          </div>
          <div class="relative -mt-3  w-14 h-14 benefit4  ">
            <div class="relative circle__ h-full w-full">
              <div class="w-full h-full justify-center items-center flex">
                <swiper  :loop="true" :autoplay='{
                  "delay": 3000,
                  "disableOnInteraction": false,
                }' :modules="[Autoplay]" class=" w-full h-full  ">
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/4.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/5.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/6.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/7.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/1.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/2.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/3.png" alt="" class="w-12 h-12"></swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
          <div class="relative mt-5 w-14 h-14 benefit5  ">
            <div class="relative circle__ h-full w-full">
              <div class="w-full h-full justify-center items-center flex">
                                <swiper  :loop="true" :autoplay='{
                  "delay": 3000,
                  "disableOnInteraction": false,
                }' :modules="[Autoplay]" class=" w-full h-full  ">
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/5.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/6.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/7.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/1.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/2.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/3.png" alt="" class="w-12 h-12"></swiper-slide>
                  <swiper-slide class="justify-center items-center flex w-full h-full"><img
                      src="@/assets/mobile/vip/4.png" alt="" class="w-12 h-12"></swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </div>
        <h1 class="h1__ text-center text-xl font-bold my-5">14大特权 极致体验</h1>
        <section class="h-[120px] w-full   relative overflow-hidden vip-body">
          <swiper :effect="'cards'" :grabCursor="true" :loop="true" :cardsEffect="{
            perSlideOffset:20
          }" 
              :modules="[EffectCards]" class=" flex justify-center w-1/2   h-full  items-center">
            <swiper-slide @click="clickVip(0,true)" ><img src="@/assets/mobile/vip/vip4.webp" class="h-full w-[180px]" /></swiper-slide>
            <swiper-slide @click="clickVip(1,true)"><img src="@/assets/mobile/vip/vip5.webp"  class="h-full w-[180px]"/></swiper-slide>
            <swiper-slide @click="clickVip(2,true)" ><img src="@/assets/mobile/vip/vip6.webp" class="h-full w-[180px]" />
            </swiper-slide>
          </swiper>
        </section>

      </section>
      <!--  -->
      <section @click="infoDialog = true" class="absolute top-9 right-0">
        <img src="@/assets/mobile/vip/btnInfo.png" alt=""
         class=" h-7"
        >
      </section>
      <section v-if="infoDialog" class=" __testani fixed bottom-16 z-20 w-full h-auto p-5 bg-[rgba(24,28,34,0.9)] rounded-2xl ">
       <div @click="infoDialog = false" class="flex justify-end  ">
        <XIcon class="w-8 h-8 bg-red-500 rounded-full p-1"></XIcon>
       </div>
        <p> 1。贵宾会会籍不可转让；</p>
        <p>2。如贵宾放弃参与所享福利，将不予任何形式折现；</p>
        <p>3。晋级礼金请在晋级当周内前往活动页领取，逾期未领取视为自愿放弃；</p>
        <p>4。会员申请生日礼金前需绑定生日与手机号码，申请成功后生日不可修改；若填写错误需联系客服提供资料修改；</p>
        <p>5。在您入会后，想要申请私人订制或海外旅游、商务秘书时，请及时联系您的客户经理为您安排；</p>
        <p>6。本活动的最终解释权归博冠所有。</p>
      </section>

      <section class="btn fixed bottom-24 w-full z-10 h-10 ">
        <div class="flex w-full justify-center items-center h-full space-x-8 ">
          <div class="px-3">
            <img src="@/assets/mobile/vip/up_dis.png" alt="" class="h-full w-10">
          </div>
          <div @click="showSwiper()" class="px-3">
            <img src="@/assets/mobile/vip/down.webp" alt="" class="h-full w-10">
          </div>
        </div>
      </section>
    </div>
    <!-- swiper -->
    <section v-else class="bg-[#15171d] h-full w-full relative">
      <div @click="swiperContainer= false, infoDialog = false " class="absolute top-3 flex items-center left-3 z-10">
        <img
          src="data:image/png;base64,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"
          alt="" class="h-5 w-5">
        <span class="text-[11px] px-2">专题首页</span>
      </div>
      <div class="absolute left-0 right-0 top-0 m-auto __center__  h-[100px] w-[150px] z-10">
        <div class="w-full h-full text-center ">
          <span>{{realIndex + 1}}</span>
          <span> /{{itemCount}}</span>
        </div>
      </div>
      <section class="h-full w-full relative">
        <swiper :direction="'vertical'" class=" h-full w-full relative" :autoplay='{
                    "delay": 4000,
                    "disableOnInteraction": false,
                    }'  :followFinger="false" :allowTouchMove="false"
          :centeredSlides="true" :slidesPerView="'auto'" :freeMode="true" :freeModeSticky="true"
          @swiper="setControlledSwiper" 
          @slideChangeTransitionEnd="onSlideChangeTransitionEnd" @slideChange="slideChange" 

          :modules="[Autoplay,FreeMode,Navigation]" :navigation="{
            nextEl: '.swiper-button11-next',
            prevEl: '.swiper-button11-prev',
          }" >
          <swiper-slide>
            <div class="caro__bg __one h-full w-full relative">
              <div class="pt-28">
                <div class="px-6 space-y-3">
                  
                  <h1 v-motion-slide-left class="text-2xl">VIP贵宾厅出码服务</h1>
                  <h3 class="text-[14px]">一站式便捷服务，让您的资金安全有保障</h3>
                  <div class="flex items-center">
                    <span v-motion-slide-left style="transition-delay: 0.1s;" class="flex items-center">
                      <span class="h-[30px] text-[11px] text-white py-[5px] px-[10px] rounded-2xl"
                        style="background-image: linear-gradient(90deg,transparent 10%,#6a6a6a 97%);">
                        网站存款
                      
                      </span>
                      <span class="_arrow"></span>
                    </span>
                    <span v-motion-slide-left style="transition-delay: 0.5s;" class="flex items-center">
                      <span class="h-[30px] text-[11px] text-white py-[5px] px-[10px] rounded-2xl"
                        style="background-image: linear-gradient(90deg,transparent 10%,#6a6a6a 97%);">
                        VIP贵宾厅出码
                      
                      </span>
                      <span class="_arrow"></span>
                    </span>
                    <span v-motion-slide-left style="transition-delay: 0.7s;" class="flex items-center">
                      <span class="h-[30px] text-[11px] text-white py-[5px] px-[10px] rounded-2xl"
                        style="background-image: linear-gradient(90deg,transparent 10%,#6a6a6a 97%);">
                        网站出款
                      
                      </span>
                      <span class="_arrow"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="caro__bg __two h-full w-full relative">
              <div class="pt-28 flex flex-col justify-center h-full ">
                <div class="px-6 space-y-3 ">
                  <h1 v-motion-slide-visible-left class="text-2xl">专属VIP客户经理</h1>
                  <div class="px-3">
                    <ul>
                      <li v-motion-slide-visible-bottom style="transition-delay: 0.1s;" class=" list-disc ">专业的产品知识</li>
                      <li v-motion-slide-visible-bottom style="transition-delay: 0.3s;" class=" list-disc ">熟练的专业技能</li>
                      <li v-motion-slide-visible-bottom style="transition-delay: 0.6s;" class=" list-disc ">耐心、热情、细心、守信</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="caro__bg __three h-full w-full relative">
              <div class="pt-28 flex flex-col justify-center h-full ">
                <div class="px-6 space-y-3 absolute bottom-24 ">
                  <h1 v-motion-slide-visible-left class="text-2xl">专属存取通道</h1>
                  <div class=" text-[12px]">
                    <ul v-motion-slide-visible-right>
                      <li>所有VIP提供最方便的存款渠道、最快速的<br />

                        取款通道，让您的款项永远比别人先到</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="caro__bg __four h-full w-full relative">
              <div class="pt-28 flex flex-col justify-center h-full ">
                <div class="px-6 space-y-3 absolute bottom-24 ">
                  <h1 v-motion-slide-visible-left class="text-2xl">专属存取通道</h1>
                  <div class=" text-[12px]">
                    <ul v-motion-slide-visible-right>
                      <li>VIP客户可通过海外银行（港币、美金）提<br />

                        款，也可转到博冠线下实体赌场取款</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="caro__bg __five h-full w-full relative">
              <div class="pt-28  ">
                <div class="px-6 space-y-3  ">
                  <h1 v-motion-slide-visible-left class="text-2xl">专享礼金</h1>
                  <h3 v-motion-slide-visible-right class="text-[14px]">VIP客户经理不定期、赠送专享礼金</h3>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>

            <div class="caro__bg __six h-full w-full relative">
              <div class="pt-28  ">
                <div class="px-6 space-y-3  ">
                  <h1 v-motion-slide-visible-left class="text-2xl">高额投注服务</h1>
                  <h3 class="text-[14px]">单注投注高达500万元，豪客首选</h3>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="caro__bg __seven h-full w-full relative">
              <div class="pt-28  ">
                <div class="px-6 space-y-3  ">
                  <h1 v-motion-slide-visible-left class="text-2xl">现场参观</h1>
                  <h3 v-motion-slide-visible-right class="text-[14px]">考察发牌现场、与荷官接触、参观洗牌房</h3>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="caro__bg __eight h-full w-full relative">
              <div class="pt-28  ">
                <div class="px-6 space-y-3 absolute bottom-24  ">
                  <h1 v-motion-slide-visible-left class="text-2xl">商务秘书</h1>
                  <h3 v-motion-slide-visible-right class="text-[14px]">高端定制 海天盛宴 邂逅风情</h3>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="caro__bg __nine h-full w-full relative">
              <div class="pt-28  ">
                <div class="px-6 space-y-3 absolute bottom-24  ">
                  <h1 v-motion-slide-visible-left class="text-2xl">海外旅行</h1>
                  <div class=" text-[12px]">
                    <ul v-motion-slide-visible-right>
                      <li>香港、台湾、澳门、菲律宾、韩国、日<br />
                        本、欧洲等全世界的旅游胜地，根据您<br />
                        的需求安排，想去哪儿就去哪儿。
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="caro__bg __ten h-full w-full relative">
              <div class="pt-28  ">
                <div class="px-6 space-y-3  ">
                  <h1 v-motion-slide-visible-left class="text-2xl">私人定制</h1>
                  <p v-motion-slide-visible-right class="text-[13px]">尊贵私人订制、至尊醇享品味奢华<br />
                    独家定制专属域名、特殊礼品
                  </p>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide v-if="activeVip == 1 || activeVip == 2">
            <div class="caro__bg __eleven h-full w-full relative">
              <div class="pt-28  ">
                <div class="px-6 space-y-3  ">
                  <h1 v-motion-slide-visible-left class="text-2xl">洗码优惠</h1>
                  <p v-motion-slide-visible-right class="text-[13px]">随时结算，上不封顶，最高可享受1.2%
                  </p>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide v-if="activeVip == 1 || activeVip == 2">
            <div class="caro__bg __twele h-full w-full relative">
              <div class="pt-28  ">
                <div class="px-6 space-y-3  ">
                  <h1 v-motion-slide-visible-left class="text-2xl">晋级礼金</h1>
                  <p v-motion-slide-visible-right class="text-[13px]">晋级送礼金，最高2888元
                  </p>
                </div>
              </div>
              <div class="flex items-center pt-28 justify-between px-5">
                <section v-motion-slide-visible-bottom style="transition-delay: 0.1s;" class="flex flex-col items-center justify-center ">
                  <div class="">
                    <p>¥ 88</p>
                  </div>
                  <div class="flex space-x-1">
                    <p>≈13</p>
                    <p>T</p>
                  </div>
                  <div>
                    <img src="@/assets/mobile/vip/line.png" alt="" class="w-2">
                  </div>
                  <div class="-mt-3">
                    <img class="w-6" src="@/assets/mobile/vip/star2.webp" alt="">
                  </div>
                  <div class="font-bold text-xl">
                    Lv.2
                  </div>
                </section>
                <section v-motion-slide-visible-bottom style="transition-delay: 0.3s;" class="flex flex-col items-center justify-center -mt-7">
                  <div class="">
                    <p>¥ 388</p>
                  </div>
                  <div class="flex space-x-1">
                    <p>≈55</p>
                    <p>T</p>
                  </div>
                  <div>
                    <img src="@/assets/mobile/vip/line.png" alt="" class="w-2">
                  </div>
                  <div class="-mt-3">
                    <img class="w-8" src="@/assets/mobile/vip/star3.webp" alt="">
                  </div>
                  <div class="font-bold text-xl">
                    Lv.3
                  </div>
                </section>
                <section v-motion-slide-visible-bottom style="transition-delay: 0.5s;" class="flex flex-col items-center justify-center -mt-9">
                  <div class="">
                    <p>¥ 888</p>
                  </div>
                  <div class="flex space-x-1">
                    <p>≈127</p>
                    <p>T</p>
                  </div>
                  <div>
                    <img src="@/assets/mobile/vip/line.png" alt="" class="w-2 ">
                  </div>
                  <div class="-mt-3">
                    <img class="w-6" src="@/assets/mobile/vip/l4.webp" alt="">
                  </div>
                  <div class="font-bold text-xl">
                    VIP 4
                  </div>
                </section>
                <section v-motion-slide-visible-bottom style="transition-delay: 0.7s;" class="flex flex-col items-center justify-center -mt-11">
                  <div class="">
                    <p>¥ 2888</p>
                  </div>
                  <div class="flex space-x-1">
                    <p>≈413</p>
                    <p>T</p>
                  </div>
                  <div>
                    <img src="@/assets/mobile/vip/line.png" alt="" class="w-2">
                  </div>
                  <div class="-mt-3">
                    <img class="w-6" src="@/assets/mobile/vip/l6.webp" alt="">
                  </div>
                  <div class="font-bold text-xl">
                    VIP 6
                  </div>
                </section>
                <section v-motion-slide-visible-bottom style="transition-delay: 0.9s;" class="flex flex-col items-center justify-center">
                  <div class="">
                    <p>¥ 1888</p>
                  </div>
                  <div class="flex space-x-1">
                    <p>≈270</p>
                    <p>T</p>
                  </div>
                  <div>
                    <img src="@/assets/mobile/vip/line.png" alt="" class="w-2">
                  </div>
                  <div class="-mt-3">
                    <img class="w-6" src="@/assets/mobile/vip/l5.webp" alt="">
                  </div>
                  <div class="font-bold text-xl">
                    VIP 5
                  </div>
                </section>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide v-if="activeVip == 2">
            <div class="caro__bg __threen h-full w-full relative">
              <div class="pt-28  ">
                <div class="px-6 space-y-3">
                  <h1 v-motion-slide-visible-left class="text-2xl">生日礼金</h1>
                  <p v-motion-slide-visible-right class="text-[13px]">会员生日当月可获得<br/>惊喜生日礼金
                  </p>
                </div>
              </div>
              <div class="flex items-center pt-28 justify-between px-5">
                <section v-motion-slide-visible-bottom style="transition-delay: 0.1s;" class="flex flex-col items-center justify-center space-y-1 ">
                  <div class="">
                    <img src="@/assets/mobile/vip/m1.png" alt="" class=" w-8">
                  </div>
                  <div>
                    <img src="@/assets/mobile/vip/line.png" alt="" class="w-2">
                  </div>
                  <div class="-mt-3">
                    <img class="w-6" src="@/assets/mobile/vip/star2.webp" alt="">
                  </div>
                  <div class="font-bold text-xl">
                    Lv.3
                  </div>
                </section>
                <section v-motion-slide-visible-bottom style="transition-delay: 0.3s;" class="flex flex-col items-center justify-center space-y-1 -mt-9 ">
                  <div class="">
                    <img src="@/assets/mobile/vip/m2.png" alt="" class=" w-8">
                  </div>
                  <div>
                    <img src="@/assets/mobile/vip/line.png" alt="" class="w-2">
                  </div>
                  <div class="-mt-3">
                    <img class="w-6" src="@/assets/mobile/vip/l4.webp" alt="">
                  </div>
                  <div class="font-bold text-xl">
                    VIP 4
                  </div>
                </section>
                <section v-motion-slide-visible-bottom style="transition-delay: 0.5s;" class="flex flex-col items-center justify-center space-y-1 -mt-12 ">
                  <div class="">
                    <img src="@/assets/mobile/vip/m3.png" alt="" class=" w-8">
                  </div>
                  <div>
                    <img src="@/assets/mobile/vip/line.png" alt="" class="w-2">
                  </div>
                  <div class="-mt-3">
                    <img class="w-6" src="@/assets/mobile/vip/l5.webp" alt="">
                  </div>
                  <div class="font-bold text-xl">
                    VIP 5
                  </div>
                </section>
                <section v-motion-slide-visible-bottom style="transition-delay: 0.7s;" class="flex flex-col items-center justify-center space-y-1 -mt-14 ">
                  <div class="">
                    <img src="@/assets/mobile/vip/m3.png" alt="" class=" w-8">
                  </div>
                  <div>
                    <img src="@/assets/mobile/vip/line.png" alt="" class="w-2">
                  </div>
                  <div class="-mt-3">
                    <img class="w-6" src="@/assets/mobile/vip/l6.webp" alt="">
                  </div>
                  <div class="font-bold text-xl">
                    VIP 6
                  </div>
                </section>
            </div>
            </div>
          </swiper-slide>
          <swiper-slide v-if="activeVip == 2">
            <div class="caro__bg __fourteen h-full w-full relative">
              <div class="pt-[70px]  ">
                <div v-motion-slide-visible-left class="px-6  flex  items-center space-x-3  ">
                  <h1   class="text-2xl font-bold">会员日</h1>
                   <div>
                    <img src="@/assets/mobile/vip/month.png" alt="" class="w-5">
                   </div>
                   <div>
                    <img src="@/assets/mobile/vip/aa.png" alt="" class="w-8">
                   </div>
                   <div>
                    <img src="@/assets/mobile/vip/bb.png" alt="" class="w-8">
                   </div>
                   <div>
                    <img src="@/assets/mobile/vip/cc.png" alt="" class="w-8">
                   </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </section>
      <!-- fixed btn -->
      <section class="btn fixed bottom-24 w-full z-10 h-10 ">
        <div class="flex w-full justify-center items-center h-full space-x-8 ">
          <div  class="swiper-button11-prev px-3">
            <img src="@/assets/mobile/vip/up.webp" alt="" class="h-full w-10">
          </div>
          <div  class="swiper-button11-next px-3">
            <img v-if="realIndex == (itemCount - 1)" src="@/assets/mobile/vip/down_dis.png" alt="" class="h-full w-10">
            <img v-else src="@/assets/mobile/vip/down.webp" alt="" class="h-full w-10">
          </div>
        </div>
      </section>
      <section @click="infoDialog = true" class="absolute z-10 top-9 right-0">
        <img src="@/assets/mobile/vip/btnInfo.png" alt=""
         class=" h-7"
        >
      </section>
      <section v-if="infoDialog" class=" __testani fixed bottom-16 z-20 w-full h-auto p-5 bg-[rgba(24,28,34,0.9)] rounded-2xl ">
       <div @click="infoDialog = false" class="flex justify-end  ">
        <XIcon class="w-8 h-8 bg-red-500 rounded-full p-1"></XIcon>
       </div>
        <p> 1。贵宾会会籍不可转让；</p>
        <p>2。如贵宾放弃参与所享福利，将不予任何形式折现；</p>
        <p>3。晋级礼金请在晋级当周内前往活动页领取，逾期未领取视为自愿放弃；</p>
        <p>4。会员申请生日礼金前需绑定生日与手机号码，申请成功后生日不可修改；若填写错误需联系客服提供资料修改；</p>
        <p>5。在您入会后，想要申请私人订制或海外旅游、商务秘书时，请及时联系您的客户经理为您安排；</p>
        <p>6。本活动的最终解释权归博冠所有。</p>
      </section>

      <section @click="showVipDialog = !showVipDialog" class="absolute flex items-center px-1 z-10 top-20 right-0  __Vbginfo">
        <div class="flex items-start mt-2 justify-center w-full h-full  space-x-1">
          <ArrowCircleDownIcon class="w-5 h-5 text-black"></ArrowCircleDownIcon>
        <p class="text-[12px] text-black font-bold">星级</p>
        </div>
      </section>
      <section v-if="showVipDialog" @click="showVipDialog = !showVipDialog"  class="absolute rounded-l-lg  flex flex-col space-y-2 items-center p-2 z-10 top-20 right-0 bg-[#d0aa77] w-20 h-auto">
        <div @click="clickVip(0,true)" class="vip__info vip4">
          <div v-if="activeVip == 0" class="absolute top-0 right-0 bg-red-600 text-[12px] p-[2px] text-white rounded">星级</div>
        </div>
        <div @click="clickVip(1,true)" class="vip__info vip5">
          <div v-if="activeVip == 1" class="absolute top-0 right-0 bg-red-600 text-[12px] p-[2px] text-white rounded">星级</div>
        </div>
        <div @click="clickVip(2,true)" class="vip__info vip6">
          <div v-if="activeVip == 2" class="absolute top-0 right-0 bg-red-600 text-[12px] p-[2px] text-white rounded">星级</div>
        </div>
      </section>
    </section>
  </div>
</template>

<style scoped>
* {
    transition: all 1s linear;
}
.head {
  background-image: url("@/assets/mobile/vip/head.webp");
  background-position: bottom;
  background-size: cover;
  height: 250px;
  width: 100%;
}

.vip_body {
  background-image: url("@/assets/mobile/vip/vip_body.webp");
  background-color: #15171d;
  background-size: 150%;
  background-repeat: no-repeat;
  background-position: center .3rem;

}

.circle__ {
  background-image: url("@/assets/mobile/vip/circle.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.h1__ {
  background-clip: text;
  -webkit-background-clip: text;

  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(90deg, #c7a160 50%, #f8daa2);

}

.__center__ {
  background-image: url(data:image/png;base64,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);
  background-repeat: no-repeat;
  background-size: 100% auto;
}

.caro__bg {
  background-image: url("@/assets/mobile/vip/bg1.png");
  background-repeat: no-repeat;
  background-size: 100% auto;
}
.__one{
 background-position: bottom;
}

.__two {
  background-image: url("@/assets/mobile/vip/bg2.png");
}

.__three {
  background-image: url("@/assets/mobile/vip/bg3.png");
  background-position: center;

}

.__four {
  background-image: url("@/assets/mobile/vip/bg4.png");
  background-position: center;

}

.__five {
  background-image: url("@/assets/mobile/vip/bg5.webp");
}

.__six {
  background-image: url("@/assets/mobile/vip/bg6.png");
  background-position: center;

}

.__seven {
  background-image: url("@/assets/mobile/vip/bg7.png");

}

.__eight {
  background-image: url("@/assets/mobile/vip/bg8.png");
  /* height: 100vh; */

}

.__nine {
  background-image: url("@/assets/mobile/vip/bg9.png");
  background-size: 100% auto;
  background-position: center;

}

.__ten {
  background-position-y: -5rem;
  background-image: url("@/assets/mobile/vip/bg10.webp");
  background-color: #0a0a0a;
}
.__eleven{
  background-image: url("@/assets/mobile/vip/bg11.png");
  background-color: #0a0a0a;
  background-position: center;
}
.__twele{
  background-image: url("@/assets/mobile/vip/bg12.png");
  background-color: #0a0a0a;
  background-position: bottom;
}
.__threen{
  background-image: url("@/assets/mobile/vip/bg13.webp");
  background-color: #0a0a0a;
  background-position-y: -8rem;
}
.__fourteen{
  background-image: url("@/assets/mobile/vip/bg14.png");
  background-color: #0a0a0a;
  background-position: center;
}

._arrow {
    margin: 0 5px;
    width: 14px;
    height: 14px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAA+tJREFUSA29lm1oTmEYx891n/MsS6JmXsZSwhevkzESiSQpyVv5wBfCl2U2GmN79swoJB8kJBHLa96zFjZLmpfN0DYawpB8Ix9k23Nu/+u6zzk2ezxhD/d6znOe+9z39bv+/+vaOcd6ULZyft3JlUu11mT9h0G6KuzUfXhbS4psjKKxiw5cICL9r9iiqv7UqkzXsmrIUrZS6hHQRWMX7rv8L6CBjY/OrtmjtZUDdRZ/FKlapZzCkQv2licSHAAfV+T11F++NpLWQ0gpSz4gEamakOMUjpi3+0YiwAGQgzWez54T1W65UalAsyxYzFj+vm0r2jp87q7q7oA7ATlQw4XsMgCWwVVWxwex2CgWcCXZVDhs9o47fwPuAnx+bVNqW9vXp9qilKCeohLsQK2AK0IqVJg+M3z/T8BdgLz56aWcFZB11ACMUvzbGKVQzYngwI3F51eTQklFadMKHv4OOCZQoFfzriPYLF7g2ykQVikwTsDUmb8Bv4hCF6VPK3gSD/xLYPON/KHWN7cBkZJ9azlwR3XcVALzLFfKxu2KzlEoFB6YldcUC/xLIC9+UZ6/QRPt5HPuVoGBIoo7NZNxAUesE+tdIvsU7iLFqZNym3m/P+ICtT5jv6iofwBAhhKAsZBrB7okwZAfDnROBuuiSPhEknJK+kzIfsnQuEBe8PpmeLx2o/ex0maIb6upK0cwYANFIjIFN1gp/8EZm6hdKzqmetgljqyIc8B6pMlxfVWcoxdMEsA5X5NhLOUkgsRwDpUOsLOsVnUnLlDXHgy9+vTuCKyBOoZ6MK6nmZA5mcWcJCKJmbW8HrV/hf3be48LHSNa3RYX2PL5/WZsGi0gyRoYCewFZLA3LzDYaPLgefXSJlXaJ2PUcaIZ7Z4FfDn2aKkKj4q6Vh0ejUlsj7mndgB5Cs08JwI1xvZmPN5KUzIGlBEtif4cPaZC7s7XlQ1spcCQLvaZoGylXx8TzGsaZT2D+tKU8WknY4F8cEzgm8omPBdVpoDYMr9mHpQ3B1YSNeH6tr4T1p3GHJ7j8UcXS99WhYe5Fj3B5mTeagJ7bS71Mt0KXQ14PyhJzcw59zsgPw2/n+U3v0jhKXEYP5JZncC8xmBL+YOaPcbrz6L+Wblj+k1cf+ZPYAzppLDlVvFavGbsN6qMlQYidatXth3pNzH3Eq7/9UtWAHxfvS29XbuNmOjl14zBUIQ3OjsyYPKGK5xhd0fQNK52D0FHLzBENkD3yLEjA7M2XusupON+Ab6pjiyHlXMYBttqoLA4bUp+RceFiTqnj3dL+7e2uk1Qh/amyKCpBdcTFTxWHAewJWiBxYOnb6mMtSDRc98BTsTmQD9SIg4AAAAASUVORK5CYII=);
    background-repeat: no-repeat;
    background-size: 100%;
}

@keyframes slide {
    0% {
        left: 100px
    }

    15% {
        left: 0
    }

    85% {
        left: 0
    }

    to {
        left: -100px
    }
}

@keyframes fadeOutLeft {
            0% {
               opacity: 0;
               transform: translateY(-20px);
            }
            100% {
               opacity: 1;
               transform: translateY(0);
            }
         }
.__testani{
  animation: fadeOutLeft 1s linear forwards;
  -webkit-animation: fadeOutLeft 1s linear forwards;
   }
 .__Vbginfo{
  background-image: url("@/assets/mobile/vip/vbg.webp");
  background-repeat: no-repeat;
    background-size: 100% auto;
      height: 40px;
  width: 71px;
 }
 .vip4{
  background-image: url("@/assets/mobile/vip/vip4.png");
 }
 .vip5{
  background-image: url("@/assets/mobile/vip/vip5.png");
 }
 .vip6{
  background-image: url("@/assets/mobile/vip/vip6.png");
 }
 .vip__info{
  background-repeat: no-repeat;
  background-size: 100% auto;
  position: relative;
  width: 70px;
  height: 70px;
 }
</style>
    