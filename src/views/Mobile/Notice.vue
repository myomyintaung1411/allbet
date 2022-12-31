<template>
        <div class="w-full h-auto  bg-[#171a21] relative sm:hidden sm:mx-[19px]">
        <div class="h-[60px]  w-full text-gray-400    px-2 flex justify-between items-center">
            <XIcon @click="goUser()" class="w-7 h-7 "></XIcon>
            <p class=" text-[17px] mr-5"> 公告 </p>
            <div class="flex flex-col pt-2 text-center mr-2 items-center whitespace-nowrap ">
            </div>
        </div>
        <section class="w-full bg-[#13151b] py-5 px-3 text-[15px]">
         <h2 class="text-[#a6a6a6] py-2 ">{{marquee?.title}}</h2>
         <p class="text-[#7e7e7e]  tracking-widest">{{marquee?.content}}</p>
        </section>
        </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from "vuex";
import {  onMounted, computed } from 'vue'
import { XIcon} from "@heroicons/vue/outline";
const router = useRouter()
const store = useStore()
const goUser = () => {
    router.go(-1)
}
const marquee = computed(() => store.getters["app/marqueeData"]);
onMounted(()=>{
    if(marquee.value == '' || marquee.value == undefined){
        router.push('/')
    }
})
</script>