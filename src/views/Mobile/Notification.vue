<template>
    <div class="w-full h-screen bg-[#171a23]   relative">
        <div class="h-[60px]  w-full text-gray-200   px-2 flex justify-between items-center">
            <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
            <p class=" text-[17px]">消息</p>
            <div class="">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </div>
        </div>

        <section class="">
            <div class="pt-[200px] text-center text-[#97989d] text-base">暂无消息</div>
        </section>

    </div>
</template>

<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/outline";
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from "vuex";
import allApi from "@/network/allApi.js";
import { getCurrentInstance } from 'vue';
import AES from '@/utils/aes';

const router = useRouter()
const store = useStore()
const instance = getCurrentInstance()


const user = computed(() => store.getters["user/LOGIN"]);
const userValue = computed(() => store.getters["user/USERINFO"]);
const token = computed(() => store.getters["user/LToken"]);
const gameEn = computed(() => store.getters["app/GameEn"]);
const goUser = () => {
 router.go(-1)
}

const getAlert = () => {
    if (token?.value) {
        let data = {
            "player": user?.value?.info?.username,
        }
        const encrypttxt =  AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)
        allApi.GetAlert({data: data}).then((res) => {
            if (res.data.code == '1') {
                console.log("res of get alert", res);
               // store.commit('user/UserInfo', res.data.data)
            }
        }).catch((e) => {
            console.log(e);
        })
    }
}
const submitAlert = () => {
    if (token?.value) {
        let data = {
            "player": user?.value?.info?.username,
            "ids":[1,2,3]
        }
        const encrypttxt =  AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)
        allApi.SubmitAlert({data: data}).then((res) => {
            if (res.data.code == '1') {
                console.log("res of get alert", res);
               // store.commit('user/UserInfo', res.data.data)
            }
        }).catch((e) => {
            console.log(e);
        })
    }
}

onMounted(() => {
    if (!token?.value) return router.push('/login')
    getAlert()
    submitAlert()
})

</script>

<style scoped>
</style>