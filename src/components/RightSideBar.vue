<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import NoticeMsg from "@/utils/alert";
import {ref} from 'vue'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
// import Swiper core and required modules
import SwiperCore, {
    Autoplay, EffectCube, EffectFade
} from 'swiper';
import { useRouter } from 'vue-router';
import {getCurrentInstance} from 'vue';

const activeTab = ref(0)

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
const ranking2 = ref([
    {
    id:'4',
    username:'a***11',
    money:'354503',
  },
    {
    id:'5',
    username:'i***52',
    money:'334603',
  },
    {
    id:'6',
    username:'e***34',
    money:'314812',
  },
    {
    id:'7',
    username:'h***7g',
    money:'301786',
  },
    {
    id:'8',
    username:'c***tw',
    money:'299873',
  },
    {
    id:'9',
    username:'w***4a',
    money:'287873',
  },
    {
    id:'10',
    username:'5***rw',
    money:'276873',
  },
    {
    id:'11',
    username:'w***89',
    money:'266573',
  },
    {
    id:'12',
    username:'a***24',
    money:'248573',
  },
    {
    id:'13',
    username:'h***28',
    money:'232473',
  },
    {
    id:'14',
    username:'r***op',
    money:'222890',
  },
    {
    id:'15',
    username:'n***34',
    money:'212009',
  },
    {
    id:'16',
    username:'l***54',
    money:'200435',
  },
    {
    id:'17',
    username:'g***76',
    money:'198446',
  },
    {
    id:'18',
    username:'w***ut',
    money:'196846',
  },
])
const instance = getCurrentInstance()
const router = useRouter()

const rightBtn = () => {
    return instance.proxy.$message({message: '该功能正在维护，敬请期待更劲爆的晒单方式', duration:2})
}

const Tabclick = (number) => {
    activeTab.value = number
}

const goVip = () => {
    router.push('/pc/vip')
}

</script>
    
<template>
    <div class="h-full w-[212px] min-w-[212px] flex flex-col">
        <div class="">
            <div class="h-[100px] mb-3 w-full">
                <img src="@/assets/pc/Home/trust.png" alt="" class="w-full h-full">
            </div>


            <div @click="goVip" class="h-[100px] mb-3 w-full cursor-pointer ">
                <img src="@/assets/pc/Home/viptrust.png" alt="" class="w-full h-full">
            </div>
            <router-link to="/upgrade">
                <div class="h-[100px] mb-3 w-full bg-[#1f2129]">
                    <div class="w-full flex items-center py-5  text-[#7e7e7e]">
                        <img src="https://344front.jianmeis.com/cdn/344a78FW2/assets/img/advance-superman2.aad19a21.png_.webp" alt="" class="w-16">
                        <p class="px-1 text-[12px]">每周一更新星级</p>
                        <p class=" text-[12px] text-[#ffa43c]">升级Lv.1</p>
                        
                    </div>
                </div>
            </router-link>
        </div>
        <section class="ranking-area  bg-[#1f2129] text-sm relative">
            <div class="ranking-head"></div>
            <div class="top-wanner ">
                <div class="tab flex justify-between items-center mb-[18px]">
                    <p @click="Tabclick(0)"  :class="(activeTab == 0) ? '' : 'text-[#7e7e7e]'">今日</p>
                    <p @click="Tabclick(1)" :class="(activeTab == 1) ? '' : 'text-[#7e7e7e]'">昨日</p>
                    <p @click="Tabclick(2)" :class="(activeTab == 2) ? '' : 'text-[#7e7e7e]'">前日</p>
                </div>
            </div>
            <div class="content h-[272px]  relative  w-full  ">
                <div class="table-count-down h-[272px] ">
                    <div class="pr-[6px] top3">
                        <div class="flex justify-between data-row " style="transition: is 1s;">
                            <span class="rank-icon rank-1"></span>
                            <span class="">{{(activeTab == 0 ? ' m***i3' :'c***y4')}}</span>
                            <span class=""> {{(activeTab == 0 ? ' ¥ 511 , 355' :'¥ 541 , 225')}}</span>
                        </div>
                        <div class="flex justify-between data-row " style="transition: is 1s;">
                            <span class="rank-icon rank-2"></span>
                            <span class="">{{(activeTab == 0 ? ' m***01' :'c***0z')}}</span>
                            <span class="">{{(activeTab == 0 ? ' ¥  436,700' :'¥ 441 , 655')}}</span>
                        </div>
                        <div class="flex justify-between data-row " style="transition: is 1s;">
                            <span class="rank-icon rank-3"></span>
                            <span class="">c***ru</span>
                            <span class="">{{(activeTab == 0 ? ' ¥ 333 , 655 ' :'¥ 351 , 765')}}</span>
                        </div>
                    </div>
                    <div class="table-data flex w-full h-full relative text-center">
                        <div class="header"></div>
                        <div class="table-body  relative overflow-hidden flex-auto">
                            <div v-if="(activeTab == 0)" class="absolute left-0 right-0 top-0 h-full ">
                                <swiper :loop="true" direction="vertical" :modules="[Autoplay]" :slides-per-view="10"
                                    class="mySwiper h-full   w-full  text-base" :autoplay='{
                                      "delay": 2000,
                                      "disableOnInteraction": false, 
                                    }'>
                                    <swiper-slide v-for="data in ranking " :key="data.id" class="data-row bg-transparent">
                                        <div :key="data.id" class="flex justify-between bg-[#1f2129]  data-row ">
                                            <span class="rank-icon">{{data.id}}</span>
                                            <span class="">{{data.username}}</span>
                                            <span class="">¥ {{data.money}}</span>
                                        </div>
                                    </swiper-slide>
                                </swiper>
                            </div>
                            <div v-else class="absolute left-0 right-0 top-0 h-full ">
                                <swiper :loop="true" direction="vertical" :modules="[Autoplay]" :slides-per-view="10"
                                    class="mySwiper h-full   w-full  text-base" :autoplay='{
                                      "delay": 2000,
                                      "disableOnInteraction": false, 
                                    }'>
                                    <swiper-slide v-for="data in ranking2 " :key="data.id" class="data-row bg-transparent">
                                        <div :key="data.id" class="flex justify-between bg-[#1f2129]  data-row ">
                                            <span class="rank-icon">{{data.id}}</span>
                                            <span class="">{{data.username}}</span>
                                            <span class="">¥ {{data.money}}</span>
                                        </div>
                                    </swiper-slide>
                                </swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-2 cursor-pointer left-9  flex items-center justify-center ">
                <img @click="rightBtn()" src="@/assets/pc/Home/btn.png" alt="" class="w-[130px] h-6">
            </div>
        </section>

    </div>
</template>
    
<style scoped>
.ranking-area {
    background-image: url("@/assets/pc/Home/ranki.png");
    background-color: #1f2129;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 525px;
    width: 100%;
}

.ranking-head {
    height: 30px;
    font-size: 12px;
    color: #a6a6a6;
    text-align: center;
    line-height: 30px;
    /* background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAAaCAMAAAB7CnmQAAAAXVBMVEUAAACoqKinp6enp6enp6enp6epqamoqKinp6enp6enp6enp6erq6umpqaoqKimpqanp6eoqKisrKynp6enp6enp6exsbGpqamnp6enp6eoqKinp6enp6etra2mpqbdf5r3AAAAHnRSTlMAVoGi8c48LMWUa2AkqzTqtGUZdb9CDR/jiU3d1hPb/n6xAAACbElEQVRIx+WV29KjIBCEJQFRPCMSj/3+j7kjiMb8bsqtrdqb7QtqGEK+OD1jov9GeRaibnj5QA7SBymdjamOzorT8bS3xVnt+6Huhhlg2+6B2AcspPBcs/JMWPqPzMJJ4EFIw8FQCA6gWn+SZeVthDUQzSa2ZwfkoSpoQrJGbxI8tnR6F6EFDs172vAQMZQhtG6rfotIjTEeISgK11iFNN6U0q0g3iunJkpRF8V+cI3gWNU+hRAeMVPk4bIA34tT8smGWGJTFdVVVW2P9yIpPGjVZ8SzSJAU489CvQrAyFjtrndvVoya1KF22zlxNcWu6aYXdp7H1e1kTcgZb63bT9pQg4uNWjmSHUgGNa3tXbv9gGQVb6KG7xVzN1spIOpgzptJ4ktHLWVZegQry/zUVAkEZnkkJAStKcC1n2GocJQBYNcIPTYAPIKUnKb7Cfr8obyHtI0ADCoWyZiJo297jhnZFcLwIs+yxiMeWXaU3SoBFPn7Q/Xkik8yDsYA1EcFH1Ap1AdiaRKgllejV7aGA+AiyA1yMlJt1OIeqI1sxuKjTMM6FzXOdncgqQu7X7WfGLFrIiudxuyscUujtyvCzvUJoROlrjtKVE+21Ih2dQGR4KzEe8YR++nO9VVHsZbkESlFq39ulq8RPbVfP9NSiTXyCIXs6zvK4L2j0K753yMmWiZBi/v2ySMWOt0RS9t9IjS9WXKP6Ci0f44gHYi7f0l/j0jvIZJds0MwzgH+ubAfiKZVbQXrWlsJlF8Q1S7uEPHzSuUPRAFCD856P533C/VdeROuaynlZqmUOpw3HU10s5xeUOyIFyajf6BfoRdCxFlVjDwAAAAASUVORK5CYII=); */
    background-position: 50%;
    background-size: 49px 13px;
    background-repeat: no-repeat;
}

.tab p {
    margin-top: 25px;
    padding-bottom: 5px;
    width: 131px;
    height: 20px;
    
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    position: relative;
}

.tab p.active:after {
    content: "";
    margin: auto;
    width: 28px;
    position: absolute;
    top: 25px;
    left: 0;
    right: 0;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #c15410;
}

.data-row,
.pending {
    text-align: left;
    color: #a6a6a6;
    height: 33px;
    letter-spacing: .75px;
    font-size: 12px;
    line-height: 33px;
}

.data-row span {
    -webkit-box-flex: 1.5;
    -ms-flex: 1.5;
    flex: 1.5;
}

.data-row span:first-child {
    -ms-flex: 1;
    flex: 1;
    font-size: 12px;
    color: #787878;
    text-align: center;
    line-height: 33px;

}

.data-row span:last-child {
    -webkit-box-flex: 2.5;
    -ms-flex: 2.5;
    flex: 2.5;
    padding-right: .5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    white-space: nowrap;
    box-sizing: border-box;
}

.rank-icon {
    height: 25px;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 29px 25px;
}

.rank-1 {
    background-image: url("@/assets/pc/Home/rank1.png");
}

.rank-2 {
    background-image: url("@/assets/pc/Home/rank2.png");
}

.rank-3 {
    background-image: url("@/assets/pc/Home/rank3.png");
}

</style>