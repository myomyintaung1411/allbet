<template>
    <div class="h-[86px] w-full border-b border-[#212329] bg-[#16181f] border-solid">
        <div class="mx-auto sm:max-w-xl md:max-w-screen-md h-full lg:max-w-screen-xl  flex">
            <div class="h-full flex items-center w-[525px] relative ">
                <!-- <div class="h-[73px] w-[413px]">
                <img src="https://344a78frontweb.wgqzh.com/cdn/344a78FW2/assets/img/new_logo@2x.8485064a.png_.webp" alt=""
                class="h-full w-full"
                >
                <a href="/" class=" absolute left-0 top-0 h-full w-[220px]  " ></a>
                <a  href="https://z1526.com/eden_hazard" class=" absolute top-0 left-[220px] h-full w-[210px] " target="_blank"></a>
            </div> -->

                <div class="h-[73px] w-[413px] ">
                    <a href="/home">
                        <img src="@/assets/pc/Home/logo.png" alt="" class="h-full w-[180px]">
                    </a>
                </div>

            </div>
            <div class="flex items-center justify-between  h-full ">
                <div @click="noticeDialog = true" class="h-full flex items-center w-[365px] whitespace-nowrap cursor-pointer
                        text-[#a6a6a6] text-[12px] mt-[17px] mr-5
                        ">
                    <Vue3Marquee class="w-full " :duration="30" :pauseOnHover="true">
                        {{ marquee?.content }}
                    </Vue3Marquee>
                </div>
                <section class="w-[390px]  club-hot-search bg-red-400">
                    <div class="flex items-center justify-between ">
                        <div class=" relative h-full  w-[60px]  py-2 pr-[10px] text-[12px] ">
                            <div class="text-[#747474]  ">俱乐部</div>
                            <div class="flex items-center justify-start  w-full -mt-1  text-[#ee5c51]">
                                <img src="@/assets/pc/Home/fire.svg" alt="" class="w-[17px] h-5">
                                <span class="pt-1">俱乐</span>
                            </div>
                        </div>
                        <div class="relative whitespace-nowrap text-sm   w-full flex items-center">
                            <div class="h-full py-3 w-[1px] bg-slate-800 "></div>
                            <div class="w-[300px] flex items-center pl-3   py-1 text-[#a6a6a6] h-[40px] ">
                                <swiper :loop="true" direction="vertical" :modules="[Autoplay]"
                                    class="mySwiper h-full  w-full  text-base" :autoplay='{
                                        "delay": 2500,
                                        "disableOnInteraction": false,
                                    }'>
                                    <swiper-slide class="bg-[#101113] truncate">好运来了</swiper-slide>
                                    <swiper-slide class="bg-[#101113] truncate">今天冲不上去了停留在30个达不溜，就这样吧</swiper-slide>
                                    <swiper-slide class="bg-[#101113] truncate">富矿宝石 2000倍 一下爆了80万</swiper-slide>
                                </swiper>
                            </div>
                            <ChevronDoubleRightIcon class="w-4 h-4 text-[#747474] -mt-2"></ChevronDoubleRightIcon>
                        </div>
                    </div>
                </section>

            </div>
            <div class="bookmark pl-5 cursor-pointer  h-full flex justify-center items-center " title="收藏本站">
                <img @click="bookMark" src="@/assets/pc/Home/bookmark.png" alt="" class="w-14">
            </div>
        </div>

        <!-- dialog -->
        <NotCloseDialog :show="noticeDialog" @close="noticeDialog = false">
            <div class="w-[500px] min-w-[300px]   py-10 text-white px-3  ">
                <p class="text-center text-xl">{{marquee?.title}}</p>
                <div class="w-full  py-3 text-center">
                    <p class="text-sm text-[#7e7e7e] break-words leading-7">{{marquee?.content}}</p>

                </div>

                <div class="flex pt-5 items-center w-full  justify-evenly px-3">

                    <div @click="noticeDialog = false" class="btn flex cursor-pointer px-16 whitespace-nowrap 
           items-center justify-center text-[#272c33] text-center  btn-primary  h-[50px]  
              ">
                        确认
                    </div>
                </div>
            </div>
        </NotCloseDialog>
    </div>


</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import NoticeMsg from "@/utils/alert";
import NotCloseDialog from "@/components/NotCloseDialog.vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
// import Swiper core and required modules
import SwiperCore, {
    Autoplay, EffectCube, EffectFade
} from 'swiper';
import { computed, ref } from 'vue'

// Import Swiper styles
import {
    ChevronDoubleRightIcon
} from "@heroicons/vue/outline";

import { useStore } from "vuex";
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance()

const store = useStore()
const noticeDialog = ref(false)
const marquee = computed(() => store.getters["app/marqueeData"]);


const bookMark = () => {
    return instance.proxy.$message({ message: '加入收藏失败，请使用Ctrl+D进行添加', duration: 2 })
}

</script>

<style scoped>
.club-hot-search {
    background: #101113;
    margin: 17px 0 10px 0;
    padding: 0 9px;
    height: 45px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
}
</style>