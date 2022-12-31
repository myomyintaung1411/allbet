<template>
    <div class="hidden sm:block relative flex-auto mx-[19px]   ">
        <div class="main">
            <div class="main-content w-full relative">
                <div class="w-full tabs   border-b border-gray-800">
                    <div
                        class="text-base text-center py-1 cursor-pointer w-[140px] tracking-wider border-b border-[#eed0a4]">
                        人民币取款
                    </div>
                </div>
                <section class="relative w-full bg-[#1f2129]  my-2 py-[20px] px-[18px]">
                    <div class="absolute left-5 top-5 h-5 w-12">
                        <img src="@/assets/mobile/user/num11.webp" alt="" class="w-full h-full" loading="lazy">
                    </div>
                    <div class="py-5 flex flex-col justify-center items-center">
                        <div class="mb-[40px] flex space-x-3 items-center justify-center">
                            <div class=" py-2 rounded-full bg-slate-600 px-2 border-[#7e7e7e]">
                                <img src="@/assets/lock.svg" alt="" class="w-10 h-10">
                            </div>
                            <span class="text-base text-white">为了您的账户资金安全，请您先验证您的提现密码</span>
                        </div>
                        <section class="form w-[381px]">
                            <div
                                class="bg-[#13151b] my-2   formDiv relative overflow-hidden flex items-center mx-auto  h-14">
                                <div
                                    class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                                    <input disabled autocomplete="off" class=" input-name text-[#d0d0d0]   
                                        border-none outline-none focus:outline-none focus:border-none    
                                      w-full h-full" id="name" pattern="" name="name"
                                        :placeholder="hideWord(userValue?.realname)" type="text">
                                </div>
                            </div>
                            <div class="flex justify-end w-full items-center text-[#858585]  text-sm">
                                若姓名包含
                                <span class="text-[#e74747] text-xl mx-2 -mt-2">.</span>
                                请点
                                <span class="text-[#eed0a4]">复制</span>
                                <span>后粘贴</span>
                            </div>

                            <div
                                class="bg-[#13151b] my-2   formDiv relative overflow-hidden flex items-center mx-auto  h-14">
                                <form @click.prevent class="w-full">
                                <div
                                    class=" border-none w-full  h-full text-sm flex justify-center items-center relative">
                                    <input v-model="withdrawpass" autocomplete="off" class=" input-name text-[#d0d0d0]   
                                                                        border-none outline-none focus:outline-none focus:border-none    
                                                                      w-full h-full" id="withdrawpass" pattern=""
                                        name="withdrawpass" placeholder="请输入取款密码" type="password" maxlength="17" min="6"
                                        max="6">
                                    <XIcon v-if="withdrawpass" @click="withdrawpass = ''"
                                    class="h-5 w-5 cursor-pointer  absolute right-3  ">
                                </XIcon>

                                </div>
                            </form>
                            </div>
                            <p @click="goBindPhone()" class=" cursor-pointer">手机短信验证</p>
                            <section class="btn py-5">
                                <button @click="BindWithPass"
                                    class="py-3 cursor-pointer text-base w-full btn_login text-center">
                                    下一步
                                </button>
                            </section>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    </div>

</template>

<script setup>
import { XIcon } from "@heroicons/vue/solid";
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted, computed } from 'vue'
import NotCloseDialog from "@/components/NotCloseDialog.vue";
import { getCurrentInstance } from 'vue';
import globaljs from '@/utils/global'
import { useStore } from "vuex";
import userApi from "@/network/user.js";
import Loading from "@/utils/loader";
import AES from '@/utils/aes';

const instance = getCurrentInstance()
const withdrawpass = ref('')
const store = useStore()
const router = useRouter()
const route = useRoute();
const login = computed(() => store.getters["user/LOGIN"]);
const userValue = computed(() => store.getters["user/USERINFO"]);
const token = computed(() => store.getters["user/LToken"]);
const gameEn = computed(() => store.getters["app/GameEn"]);

const goUser = () => {
    router.go(-1)
}

const eventName = (e) => {
    if (!/^[0-9]+$/.test(amount.value)) amount.value = amount.value.replace(/\D/g, '');
    if (amount.value > 100000000) amount.value = 100000000;
    if (amount.value < 0) amount.value = null
}

function hideWord(w) {
    if (w?.length < 1) return w;
    return w?.substring(0, 1) + '*'.repeat(w?.length - 1);
}

function hideMiddle(string, prefixLength, suffixLength) {
    var re = new RegExp('^(\\+?\\d{' + prefixLength + '})(\\d+)(\\d{' + suffixLength + '})$');

    return string?.replace(re, function (match, prefix, middle, suffix) {
        return prefix + '*'.repeat(middle?.length) + suffix;
    });
}


const BindWithPass = () => {
    if (userValue.value?.user_level < 1) return instance.proxy.$message({ message: '账号未充值', duration: 2 })//userlevel must be greater than 1

    if (userValue.value?.realname == '' || userValue.value?.realname == undefined) {
        depo_Dialog.value = true
        return instance.proxy.$message({ message: '请先绑定实名', duration: 2 })
    }

    if (withdrawpass.value == '') return instance.proxy.$message({ message: '请输入提现密码', duration: 2 })

    let data = {
        "player": userValue?.value?.username,
        "money_password": withdrawpass.value
    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

    Loading.showLoading()
    userApi.CheckMoneyPasswordForWithdraw({ data: data, key: login?.value?.key }).then((res) => {
        Loading.hideLoading()
        if (res.data.code == '1') {
            console.log("res of CheckMoneyPasswordForWithdraw data", res);
            instance.proxy.$message({ message: res?.data?.message, duration: 2 })

            router.push('/pc/moneyWithdraw')
        }
    }).catch((e) => {
        Loading.hideLoading()
        return instance.proxy.$message({ message: e.response?.data?.message, duration: 2 })
    })
}



const goBindPhone = () => {
    router.push({ path: '/pc/PcbindPhoneForWithdraw', query: { type: 'BANK' } })
}



onMounted(() => {
    if (!token?.value) return router.push('/login')
    return globaljs.getUserInfo()
})
</script>

<style scoped>
.formDiv:focus-within {
    background-color: #ffffff !important;
    color: #272c33 !important;
    outline: 0;
}

.formDiv input {
    border: none;
    outline: none;
    background: no-repeat;
}

.input-name:focus-within {
    border: 0;
    outline: none;
    box-shadow: none;
}

.input-name:focus {
    outline: 0 !important;
    outline: none !important;
    border: none !important;
    color: black !important;
}
</style>