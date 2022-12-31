<script setup>
import { ref, reactive, onMounted } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/free-mode"
import "swiper/css/navigation"
import 'swiper/css/pagination';
import "swiper/css/thumbs"
// import required modules
import { EffectCoverflow, EffectFade, Autoplay, FreeMode, Navigation, Thumbs, Pagination } from "swiper";
import Header from '@/components/Header.vue';
import { useRouter } from 'vue-router';
const thumbsSwiper = ref(null)
const router = useRouter()

const activeVip = ref(0)

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper
}

const smallImage = reactive([
    { img: '/public/s1.webp', title: 'VIP贵宾厅出码服务' },
    { img: '/public/s2.webp', title: '专属VIP客户经理' },
    { img: '/public/s3.webp', title: '专属存取通道' },
    { img: '/public/s4.webp', title: '全球提款服务' },
    { img: '/public/s5.webp', title: '专享礼金' },
    { img: '/public/s6.webp', title: '现场参观' },
    { img: '/public/s7.webp', title: '洗码优惠' },
    { img: '/public/s8.webp', title: '晋级礼金' },

    { img: '/public/s10.webp', title: '生日礼金' },
    { img: '/public/s11.webp', title: '会员日' },
    { img: '/public/s12.webp', title: '私人定制' },

    { img: '/public/s9.webp', title: '高额投注服务' },
    { img: '/public/s13.webp', title: '商务秘书' },
    { img: '/public/s14.webp', title: '海外旅行' },
])

const clickVip = (number) => {
    activeVip.value = number
}

if(window.innerWidth <= 640){
    router.push('/vip')
}
</script>

<template>
    <div class="h-auto w-full relative overflow-hidden">
        <Header></Header>
        <div class="newVip bg-[#111117] min-h-[1010px] relative w-full">
            <div class="relative h-[993px]  w-full">
                <!--  -->
                <section class="absolute top-9 z-30 right-3">
                    <div class="info__ relative"></div>

                    <div
                        class=" absolute right-0 __infodialog w-[250px] z-40 h-auto p-5 bg-[rgba(24,28,34,0.8)] text-sm">
                        <p> 1。贵宾会会籍不可转让；</p>
                        <p>2。如贵宾放弃参与所享福利，将不予任何形式折现；</p>
                        <p>3。晋级礼金请在晋级当周内前往活动页领取，逾期未领取视为自愿放弃；</p>
                        <p>4。会员申请生日礼金前需绑定生日与手机号码，申请成功后生日不可修改；若填写错误需联系客服提供资料修改；</p>
                        <p>5。在您入会后，想要申请私人订制或海外旅游、商务秘书时，请及时联系您的客户经理为您安排；</p>
                        <p>6。本活动的最终解释权归博冠所有。</p>
                    </div>
                    <div @click="clickVip(0)" class="vip4 vip__bg relative"
                        :class="activeVip == 0 ? '' : ' opacity-40'">
                        <div v-if="activeVip == 0" class="label__ t1 absolute"></div>
                    </div>
                    <div @click="clickVip(1)" class="vip5 vip__bg relative"
                        :class="activeVip == 1 ? '' : ' opacity-40'">
                        <div v-if="activeVip == 1" class="label__ t2 absolute"></div>
                    </div>
                    <div @click="clickVip(2)" class="vip6 vip__bg relative"
                        :class="activeVip == 2 ? '' : ' opacity-40'">
                        <div v-if="activeVip == 2" class="label__ t3 absolute"></div>
                    </div>
                </section>
                <section
                    class="z-10 absolute mx-auto flex flex-shrink-0 justify-between items-center bottom-8 left-0 right-0 h-[126px] bg-[rgba(24,28,34,0.8)] rounded-[63px] w-[80%] min-w-[1380px]">
                    <div class="w-[145px] flex-shrink-0 flex items-center justify-center h-full tab_btn ">
                        <div class=" cursor-pointer swiper-button1-prev">
                            <img src="@/assets/pc/vip/left.webp" alt="" class="w-[70px] h-[70px]">
                        </div>
                    </div>
                    <div class="benefits_wapper w-[1140px]  overflow-hidden h-full flex-shrink-0">
                        <div class="flex items-center w-full h-full">
                            <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :preventInteractionOnTransition="true"
                            :slidesPerView="6" :freeMode="true" :followFinger="false" :allowTouchMove="false" :mousewheel="false"
                                :watchSlidesProgress="true" :modules="[Thumbs, EffectFade, Autoplay, Navigation]" 
                                :navigation="{
                                    nextEl: '.swiper-button1-next',
                                    prevEl: '.swiper-button1-prev'
                                }" :autoplay='{
    "delay": 3000,
    "disableOnInteraction": false,
}' class="flex items-center w-full h-full">
                                <swiper-slide
                                    class="w-[190px] cursor-pointer  h-full flex flex-col items-center justify-center">
                                    <img src="/public/s1.webp" alt="" class="w-[150px] h-[83px]">
                                    <p class="text-sm">VIP贵宾厅出码服务</p>
                                </swiper-slide>
                                <swiper-slide
                                    class="w-[190px] cursor-pointer  h-full flex flex-col items-center justify-center">
                                    <img src="/public/s2.webp" alt="" class="w-[150px] h-[83px]">
                                    <p class="text-sm">专属VIP客户经理</p>
                                </swiper-slide>
                                <swiper-slide
                                    class="w-[190px] cursor-pointer  h-full flex flex-col items-center justify-center">
                                    <img src="/public/s3.webp" alt="" class="w-[150px] h-[83px]">
                                    <p class="text-sm">专属存取通道</p>
                                </swiper-slide>
                                <swiper-slide
                                    class="w-[190px] cursor-pointer  h-full flex flex-col items-center justify-center">
                                    <img src="/public/s4.webp" alt="" class="w-[150px] h-[83px]">
                                    <p class="text-sm">全球提款服务</p>
                                </swiper-slide>
                                <swiper-slide
                                    class="w-[190px] cursor-pointer  h-full flex flex-col items-center justify-center">
                                    <img src="/public/s5.webp" alt="" class="w-[150px] h-[83px]">
                                    <p class="text-sm">专享礼金</p>
                                </swiper-slide>
                                <swiper-slide
                                    class="w-[190px] cursor-pointer  h-full flex flex-col items-center justify-center">
                                    <img src="/public/s6.webp" alt="" class="w-[150px] h-[83px]">
                                    <p class="text-sm">现场参观</p>
                                </swiper-slide>
                                <swiper-slide
                                    class="w-[190px] cursor-pointer  h-full flex flex-col items-center justify-center">
                                    <img src="/public/s7.webp" alt="" class="w-[150px] h-[83px]">
                                    <p class="text-sm">洗码优惠</p>
                                </swiper-slide>
                                <swiper-slide
                                    class="w-[190px] cursor-pointer  h-full flex flex-col items-center justify-center">
                                    <img src="/public/s8.webp" alt="" class="w-[150px] h-[83px]">
                                    <p class="text-sm">晋级礼金</p>
                                </swiper-slide>
                                <swiper-slide
                                    class="w-[190px] cursor-pointer  h-full flex flex-col items-center justify-center">
                                    <img src="/public/s10.webp" alt="" class="w-[150px] h-[83px]">
                                    <p class="text-sm">生日礼金</p>
                                </swiper-slide>
                                <swiper-slide
                                    class="w-[190px] cursor-pointer  h-full flex flex-col items-center justify-center">
                                    <img src="/public/s11.webp" alt="" class="w-[150px] h-[83px]">
                                    <p class="text-sm">会员日</p>
                                </swiper-slide>
                                <swiper-slide v-if="activeVip == 1 || activeVip == 2"
                                    class="w-[190px] cursor-pointer  h-full flex flex-col items-center justify-center">
                                    <img src="/public/s12.webp" alt="" class="w-[150px] h-[83px]">
                                    <p class="text-sm">私人定制</p>
                                </swiper-slide>
                                <swiper-slide v-if="activeVip == 1 || activeVip == 2"
                                    class="w-[190px] cursor-pointer  h-full flex flex-col items-center justify-center">
                                    <img src="/public/s9.webp" alt="" class="w-[150px] h-[83px]">
                                    <p class="text-sm">高额投注服务</p>
                                </swiper-slide>
                                <swiper-slide v-if="activeVip == 2"
                                    class="w-[190px] cursor-pointer  h-full flex flex-col items-center justify-center">
                                    <img src="/public/s13.webp" alt="" class="w-[150px] h-[83px]">
                                    <p class="text-sm">商务秘书</p>
                                </swiper-slide>
                                <swiper-slide v-if="activeVip == 2"
                                    class="w-[190px] cursor-pointer  h-full flex flex-col items-center justify-center">
                                    <img src="/public/s14.webp" alt="" class="w-[150px] h-[83px]">
                                    <p class="text-sm">海外旅行</p>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                    <div class="w-[145px] flex items-center justify-center h-full tab_btn flex-shrink-0">
                        <div class=" cursor-pointer swiper-button1-next">
                            <img src="@/assets/pc/vip/right.webp" alt="" class="w-[70px] h-[70px]">
                        </div>
                    </div>
                </section>

                <swiper :spaceBetween="0" :slidesPerView="'1'" :preventInteractionOnTransition="true" :freeMode="true"
                    :freeModeSticky="true" 
                    :followFinger="false" :allowTouchMove="false" :mousewheel="false"
                    :style="{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }" :watchSlidesProgress="true" :thumbs="{ swiper: thumbsSwiper }"
                    :modules="[Thumbs, FreeMode, Autoplay, EffectFade, Navigation]" class="h-full w-full relative"
                    :autoplay='{
                        "delay": 3000,
                        "disableOnInteraction": false,
                    }' :navigation="{
    nextEl: '.swiper-button1-next',
    prevEl: '.swiper-button1-prev'
}">
                    <swiper-slide>
                        <div class="bg_caro h-full w-full relative">
                            <div class="w-full h-full flex justify-center items-center ">
                                <img src="@/assets/pc/vip/s1.png" alt="" class="w-[700px] h-[500px]">
                            </div>
                            <div class="absolute top-[169px] left-[384px]">
                                <h1 v-motion :initial="{
                                    x: 100,
                                    opacity: 0,
                                }" :enter="{
    x: 0,
    opacity: 1,
    transition: {
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 2000,
        duration: 1000,
        delay: 1000,
        type: 'keyframes',
        ease: 'linear',
    },
}" :leave="{ x: 0, opacity: 1, }" class="font-bold text-[45px]">VIP贵宾厅出码服务</h1>
                                <span class="text-[18px] tracking-widest">一站式便捷服务，让您的资金安全有保障</span>
                                <div class="flex items-center relative">
                                    <div v-motion :initial="{
                                        x: -100,
                                        opacity: 0,
                                    }" :enter="{
    x: 0,
    opacity: 1,
    transition: {
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 2000,
        duration: 1000,
        delay: 300,
        type: 'keyframes',
        ease: 'linear',
    },
}" :leave="{ x: 0, opacity: 1, }" class="flex items-center">
                                        <span class="h-[30px] text-base text-white py-[5px] px-[10px] rounded-2xl"
                                            style="background-image: linear-gradient(90deg,transparent 10%,#6a6a6a 97%);">
                                            网站存款

                                        </span>
                                        <span class="_arrow"></span>
                                    </div>
                                    <div v-motion :initial="{
                                        x: -100,
                                        opacity: 0,
                                    }" :enter="{
    x: 0,
    opacity: 1,
    transition: {
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 2000,
        duration: 1000,
        delay: 500,
        type: 'keyframes',
        ease: 'linear',
    },
}" :leave="{ x: 0, opacity: 1, }" class="flex items-center">
                                        <span class="h-[30px] text-base text-white py-[5px] px-[10px] rounded-2xl"
                                            style="background-image: linear-gradient(90deg,transparent 10%,#6a6a6a 97%);">
                                            VIP贵宾厅出码

                                        </span>
                                        <span class="_arrow"></span>
                                    </div>
                                    <div v-motion :initial="{
                                        x: -100,
                                        opacity: 0,
                                    }" :enter="{
    x: 0,
    opacity: 1,
    transition: {
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 2000,
        duration: 1000,
        delay: 700,
        type: 'keyframes',
        ease: 'linear',
    },
}" :leave="{ x: 0, opacity: 1, }" class="flex items-center">
                                        <span class="h-[30px] text-base text-white py-[5px] px-[10px] rounded-2xl"
                                            style="background-image: linear-gradient(90deg,transparent 10%,#6a6a6a 97%);">
                                            网站出款

                                        </span>
                                        <span class="_arrow"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>

                    <swiper-slide>
                        <div class="bg_caro _two h-full w-full relative">
                            <div class="absolute top-[339px] left-[384px]">
                                <h1 v-motion-slide-visible-left class="font-bold text-[45px]">专属VIP客户经理</h1>
                                <div class="text-[18px] px-3">
                                    <ul>
                                        <li v-motion-slide-visible-bottom style="transition-delay: 0.1s;"
                                            class=" list-disc">
                                            专业的产品知识
                                        </li>
                                        <li v-motion-slide-visible-bottom style="transition-delay: 0.3s;"
                                            class=" list-disc">
                                            熟练的专业技能
                                        </li>
                                        <li v-motion-slide-visible-bottom style="transition-delay: 0.5s;"
                                            class=" list-disc">
                                            耐心、热情、细心、守信
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="bg_caro _three h-full w-full relative">
                            <div class="absolute top-[189px] right-[304px]">
                                <h1 v-motion-slide-visible-left class="font-bold text-[45px]">专属存取通道</h1>
                                <div v-motion-slide-visible-right class="text-[18px] tracking-widest">
                                    所有VIP提供最方便的存款渠道、最快速的
                                    <br />
                                    取款通道，让您的款项永远比别人先到
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="bg_caro  h-full w-full relative">
                            <div class="absolute right-0">
                                <img src="@/assets/pc/vip/s4.png" alt="" class="w-auto h-full">
                            </div>
                            <div class="absolute top-[389px] left-[304px]">
                                <h1 v-motion-slide-visible-left class="font-bold text-[45px]">全球提款服务</h1>
                                <div v-motion-slide-visible-right class="text-[18px] tracking-widest">
                                    VIP客户可通过海外银行（港币、美金）提
                                    <br />
                                    款，也可转到博冠线下实体赌场取款
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="bg_caro _five h-full w-full relative">
                            <div class="absolute w-[718px] h-[360px] top-[200px] right-[234px]">
                                <img v-motion-pop-visible src="@/assets/pc/vip/content11.webp" alt=""
                                    class="w-full h-full">
                            </div>
                            <div class="absolute top-[389px] left-[304px]">
                                <h1 v-motion-slide-visible-left class="font-bold text-[45px]">专享礼金</h1>
                                <div v-motion-slide-visible-right class="text-[18px] tracking-widest">VIP客户经理不定期、赠送专享礼金
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="bg_caro _six h-full w-full relative">
                            <div class="absolute  w-full h-[637px] flex justify-center bottom-[118px]">
                            </div>
                            <div class="absolute w-full h-[232px]  bottom-0  mx-auto flex-shrink-0 ">
                                <img src="@/assets/pc/vip/content33.webp" alt="" class="w-full h-full object-cover">
                            </div>
                            <div class="absolute top-[108px]  w-full justify-center flex flex-col items-center">
                                <h1 v-motion-slide-visible-left class="font-bold text-[45px]">现场参观</h1>
                                <div v-motion-slide-visible-right class="text-[18px] tracking-widest">考察发牌现场、与荷官接触、参观洗牌房
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>

                        <div class="bg_caro _seven h-full w-full relative">
                            <div class="absolute right-[100px]">
                                <img src="@/assets/pc/vip/s7.png" alt="" class="w-auto h-auto">

                            </div>
                            <div class="absolute top-[108px]  left-[110px]">
                                <h1 v-motion-slide-visible-left class="font-bold text-[45px]">洗码优惠</h1>
                                <div v-motion-slide-visible-right class="text-[18px] tracking-widest">
                                    随时结算，上不封顶，最高可享受1.2%
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="bg_caro _eight h-full w-full relative">
                            <div class="absolute top-[291px]  left-[291px]">
                                <h1 v-motion-slide-visible-left class="font-bold text-[45px]">晋级礼金</h1>
                                <div v-motion-slide-visible-right class="text-[18px] tracking-widest">晋级送礼金，最高2888元
                                </div>
                            </div>
                            <section v-motion-slide-visible-bottom style="transition-delay: 0.1s;"
                                class="flex flex-col items-center justify-center absolute top-[295px] left-[658px] ">
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
                            <section v-motion-slide-visible-bottom style="transition-delay: 0.3s;"
                                class="flex flex-col items-center justify-center absolute top-[250px] left-[777px]">
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
                            <section v-motion-slide-visible-bottom style="transition-delay: 0.5s;"
                                class="flex flex-col items-center justify-center absolute top-[230px] left-[880px]">
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
                            <section v-motion-slide-visible-bottom style="transition-delay: 0.7s;"
                                class="flex flex-col items-center justify-center absolute top-[211px] left-[999px]">
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
                            <section v-motion-slide-visible-bottom style="transition-delay: 0.9s;"
                                class="flex flex-col items-center justify-center absolute top-[235px] left-[1092px]">
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
                    </swiper-slide>
                    <swiper-slide>
                        <div class="bg_caro _nine h-full w-full relative">
                            <div class="absolute top-[150px]  left-[372px] z-10  ">
                                <h1 v-motion-slide-visible-left class="font-bold text-[45px]">生日礼金</h1>
                                <div v-motion-slide-visible-right class="text-[18px] tracking-widest">会员生日当月可获得<br />
                                    惊喜生日礼金
                                </div>
                            </div>
                            <section v-motion-slide-visible-bottom style="transition-delay: 0.1s;"
                                class="flex flex-col items-center justify-center space-y-1 absolute top-[490px] left-[416px] ">
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
                            <section v-motion-slide-visible-bottom style="transition-delay: 0.3s;"
                                class="flex flex-col items-center justify-center space-y-1  absolute top-[410px] left-[591px] ">
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
                            <section v-motion-slide-visible-bottom style="transition-delay: 0.5s;"
                                class="flex flex-col items-center justify-center space-y-1  absolute top-[327px] left-[718px] ">
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
                            <section v-motion-slide-visible-bottom style="transition-delay: 0.7s;"
                                class="flex flex-col items-center justify-center space-y-1 absolute top-[281px] left-[847px]">
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
                    </swiper-slide>
                    <swiper-slide>
                        <div class="bg_caro _ten h-full w-full relative">
                            <div class="absolute right-32">
                                <img src="@/assets/pc/vip/s10.png" alt="">
                            </div>
                            <div class="absolute top-[171px]  left-[154px] z-10  ">
                                <div v-motion-slide-visible-left class="relative">
                                    <div class="flex items-center space-x-4">
                                        <div class="font-bold text-3xl">会员日</div>
                                        <div>
                                            <img src="@/assets/mobile/vip/month.png" alt="" class="w-5">
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="absolute top-[300px] left-[154px] space-y-11">
                                <div>
                                    <img src="@/assets/mobile/vip/aa.png" alt="" class="w-20">
                                </div>
                                <div>
                                    <img src="@/assets/mobile/vip/bb.png" alt="" class="w-20">
                                </div>
                                <div>
                                    <img src="@/assets/mobile/vip/cc.png" alt="" class="w-20">
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide v-if="activeVip == 1 || activeVip == 2">
                        <div class="bg_caro _eleven h-full w-full relative">
                            <div class="absolute top-[387px]  left-[206px] z-10  ">
                                <h1 v-motion-slide-visible-left class="font-bold text-[45px]">私人订制</h1>
                                <div v-motion-slide-visible-right class="text-[18px] tracking-widest">
                                    尊贵私人订制、至尊醇享品味奢华<br />
                                    独家定制专属域名、特殊礼品
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide v-if="activeVip == 1 || activeVip == 2">
                        <div class="bg_caro _twele h-full w-full relative">
                            <div class="absolute top-[387px]  left-[206px] z-10  ">
                                <h1 v-motion-slide-visible-left class="font-bold text-[45px]">高额投注服务

                                </h1>
                                <div v-motion-slide-visible-right class="text-[18px] tracking-widest">单注投注高达500万元，豪客首选

                                </div>
                            </div>
                        </div>
                    </swiper-slide>

                    <swiper-slide v-if="activeVip == 2">
                        <div class="bg_caro _threen h-full w-full relative">
                            <div v-motion-slide-visible-top
                                class="flex flex-col pt-10 font-bold  text-center justify-center w-full  z-10  ">
                                <h1 class="font-bold text-[45px]">商务秘书 豪华出行</h1>
                                <div class="text-[18px] tracking-widest">高端定制 海天盛宴 邂逅风情

                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide v-if="activeVip == 2">
                        <div class="bg_caro _fourteen h-full w-full relative">
                            <div class="absolute top-[246px]  left-[218px] z-10   ">
                                <h1 v-motion-slide-visible-left class="font-bold text-[45px]">海外旅行</h1>
                                <div v-motion-slide-visible-right class="text-[18px] tracking-widest">
                                    香港、台湾、澳门、菲律宾、韩国、日<br />
                                    本、欧洲等全世界的旅游胜地，根据您 <br />
                                    的需求安排，想去哪儿就去哪儿。 <br />

                                </div>
                            </div>
                            <div v-motion-pop-visible class="absolute top-[165px] left-[1341px] item tower"></div>
                            <div v-motion-pop-visible class="absolute  item tower2"></div>
                            <div v-motion-pop-visible class="absolute top-[177px] left-[722px] item main_travel"></div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    transition: all 1s linear;
}

.bg_caro {
    background-repeat: no-repeat;
    background-size: cover;

}

._two {
    background-image: url("@/assets/pc/vip/s2.png");
}

._three {
    background-image: url("@/assets/pc/vip/s3.png");
    background-position: top;
}

._four {
    background-image: url("@/assets/pc/vip/s4.png");
}

._five {
    background-image: url("@/assets/pc/vip/s5.webp");
}

._six {
    background-image: url("@/assets/pc/vip/s6.png");
}

._seven {
    /* background-image: url("@/assets/pc/vip/s7.png"); */
}

._eight {
    background-image: url("@/assets/pc/vip/s8.webp");
}

._nine {
    background-image: url("@/assets/pc/vip/s9.webp");
    background-size: 100% 100% !important;

}

._ten {
    /* background-image: url("@/assets/pc/vip/s10.png");
    background-repeat: no-repeat;
    background-size: cover; */
}

._eleven {
    background-image: url("@/assets/pc/vip/s11.webp");
    background-repeat: no-repeat;
    background-size: 100% 100% !important;
}

._twele {
    background-image: url("@/assets/pc/vip/s12.webp");
    background-repeat: no-repeat;
    background-size: 100% 100% !important;
}

._threen {
    /* background-position-y: -6rem; */

    background-image: url("@/assets/mobile/vip/girl.png");
}

._fourteen {

    background-image: url("@/assets/pc/vip/s14.webp");
    background-repeat: no-repeat;
    background-size: 100% 100% !important;
}

.tower {
    background-image: url("@/assets/pc/vip/tower1.webp");
    background-repeat: no-repeat;
    background-size: 100%;
    width: 179px;
    height: 456px;
}

.tower2 {
    background-image: url("@/assets/pc/vip/tower2.webp");
    background-repeat: no-repeat;
    background-size: 100%;
    width: 254px;
    height: 562px;
    top: 130px;
    left: 1150px;
    z-index: 3;
}

.main_travel {
    background-image: url("@/assets/pc/vip/maint.webp");
    background-repeat: no-repeat;
    background-size: 100%;
    width: 858px;
    height: 481px;
}

._arrow {
    margin: 0 5px;
    width: 14px;
    height: 14px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAA+tJREFUSA29lm1oTmEYx891n/MsS6JmXsZSwhevkzESiSQpyVv5wBfCl2U2GmN79swoJB8kJBHLa96zFjZLmpfN0DYawpB8Ix9k23Nu/+u6zzk2ezxhD/d6znOe+9z39bv+/+vaOcd6ULZyft3JlUu11mT9h0G6KuzUfXhbS4psjKKxiw5cICL9r9iiqv7UqkzXsmrIUrZS6hHQRWMX7rv8L6CBjY/OrtmjtZUDdRZ/FKlapZzCkQv2licSHAAfV+T11F++NpLWQ0gpSz4gEamakOMUjpi3+0YiwAGQgzWez54T1W65UalAsyxYzFj+vm0r2jp87q7q7oA7ATlQw4XsMgCWwVVWxwex2CgWcCXZVDhs9o47fwPuAnx+bVNqW9vXp9qilKCeohLsQK2AK0IqVJg+M3z/T8BdgLz56aWcFZB11ACMUvzbGKVQzYngwI3F51eTQklFadMKHv4OOCZQoFfzriPYLF7g2ykQVikwTsDUmb8Bv4hCF6VPK3gSD/xLYPON/KHWN7cBkZJ9azlwR3XcVALzLFfKxu2KzlEoFB6YldcUC/xLIC9+UZ6/QRPt5HPuVoGBIoo7NZNxAUesE+tdIvsU7iLFqZNym3m/P+ICtT5jv6iofwBAhhKAsZBrB7okwZAfDnROBuuiSPhEknJK+kzIfsnQuEBe8PpmeLx2o/ex0maIb6upK0cwYANFIjIFN1gp/8EZm6hdKzqmetgljqyIc8B6pMlxfVWcoxdMEsA5X5NhLOUkgsRwDpUOsLOsVnUnLlDXHgy9+vTuCKyBOoZ6MK6nmZA5mcWcJCKJmbW8HrV/hf3be48LHSNa3RYX2PL5/WZsGi0gyRoYCewFZLA3LzDYaPLgefXSJlXaJ2PUcaIZ7Z4FfDn2aKkKj4q6Vh0ejUlsj7mndgB5Cs08JwI1xvZmPN5KUzIGlBEtif4cPaZC7s7XlQ1spcCQLvaZoGylXx8TzGsaZT2D+tKU8WknY4F8cEzgm8omPBdVpoDYMr9mHpQ3B1YSNeH6tr4T1p3GHJ7j8UcXS99WhYe5Fj3B5mTeagJ7bS71Mt0KXQ14PyhJzcw59zsgPw2/n+U3v0jhKXEYP5JZncC8xmBL+YOaPcbrz6L+Wblj+k1cf+ZPYAzppLDlVvFavGbsN6qMlQYidatXth3pNzH3Eq7/9UtWAHxfvS29XbuNmOjl14zBUIQ3OjsyYPKGK5xhd0fQNK52D0FHLzBENkD3yLEjA7M2XusupON+Ab6pjiyHlXMYBttqoLA4bUp+RceFiTqnj3dL+7e2uk1Qh/amyKCpBdcTFTxWHAewJWiBxYOnb6mMtSDRc98BTsTmQD9SIg4AAAAASUVORK5CYII=);
    background-repeat: no-repeat;
    background-size: 100%;
}

.fade_ani {
    animation: subtitle-transform .5s linear forwards;
}

@keyframes subtitle-transform {
    0% {
        opacity: 0;
        -webkit-transform: translateY(-20px);
        transform: translateY(-20px);
        -webkit-filter: blur(2px);
        filter: blur(2px)
    }

    to {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-filter: blur(0);
        filter: blur(0)
    }
}

.info__ {

    width: 92px;
    height: 40px;
    cursor: pointer;
    margin-bottom: 50px;
    background-image: url("@/assets/pc/vip/info_.webp");
    background-repeat: no-repeat;
    background-size: 100%;
}

.info__:hover {
    background-image: url("@/assets/pc/vip/_infoh.png");
}

.info__:hover+.__infodialog {
    display: block;
}

.__infodialog {
    display: none;
}

.vip4 {
    background-image: url("@/assets/pc/vip/v4.webp");
}

.vip5 {
    background-image: url("@/assets/pc/vip/v5.png");
}

.vip6 {
    background-image: url("@/assets/pc/vip/v6.png");
}

.vip__bg {
    margin-bottom: 24px;
    width: 88px;
    height: 80px;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-size: 100%;
    /* opacity: .4; */
    cursor: pointer;
    -webkit-transition: all .5s;
    transition: all .5s
}

.label__ {
    width: 117px;
    height: 70px;
    background-repeat: no-repeat;
    background-size: 100%;
    right: 50px;
    bottom: 35px;
}

.t1 {
    background-image: url("@/assets/pc/vip/t1.png");
}

.t2 {
    background-image: url("@/assets/pc/vip/t2.png");
}

.t3 {
    background-image: url("@/assets/pc/vip/t3.png");
}
</style>
