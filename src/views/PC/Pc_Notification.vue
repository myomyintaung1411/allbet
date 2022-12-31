<template>
    <div class="hidden sm:block relative flex-auto mx-[19px]   ">
        <div class="main">
            <div class="main-content w-full relative">
                <div class="w-full tabs   border-b border-gray-800">
                    <div
                        class="text-base text-center py-1 cursor-pointer w-[140px] tracking-wider border-b border-[#eed0a4]">
                        消息
                    </div>
                </div>

                <section  class="relative w-full bg-[#1f2129]   my-2 py-[20px] px-[18px] ">
                    <div class=" text-center text-[#97989d] text-base h-[700px] 
                    flex flex-col justify-center items-center">暂无消息</div>
                </section>

            </div>
        </div>
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