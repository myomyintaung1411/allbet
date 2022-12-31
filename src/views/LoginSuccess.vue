<template>
    <div class="register_suss w-full h-screen sm:hidden ">
        <div class="header_ flex flex-col items-center pt-16  space-y-2">
            <div class="text-xl">登陆成功</div>
            <div class="sub_title text-[#7e7e7e] text-sm">非凡贵宾礼遇 提款无限额 超高返水尽在博冠！</div>
        </div>
        <section class="name_sec px-3 w-full py-10 ">
            <div
                class="h-16 w-full bg-[#13151b] px-5 pr-16 border-b border-b-[#413d3d] flex items-center justify-center">
                <span class="text-[#7e7e7e] px-2">账号</span>
                <span class="first-letter:text-red-700 tracking-wider">{{ loginINfo?.info.username }}</span>
            </div>
            <div class="h-16 w-full relative bg-[#13151b] pl-9  flex  items-center justify-center">
                <span class="text-[#7e7e7e] ">密码</span>
                <form action="">
                    <input disabled :value="loginPass" :type="passwordField" autocomplete="off"
                        class=" outline-0 focus:outline-none border-none w-[120px]  input__ bg-transparent">
                </form>
                <div class="absolute right-5">
                    <EyeIcon v-if="passwordField !== 'password'" @click="showVisibile"
                        class="w-5 h-5 cursor-pointer " />
                    <EyeOffIcon v-else @click="showVisibile" class="w-5 h-5 cursor-pointer" />
                </div>
            </div>
            <router-link to="/setPhonenum"
                class="btn_login py-3 mt-8 flex justify-center text-[#272c33] w-full text-lg tracking-widest">
                绑定手机号入金
            </router-link>
            <router-link to="/home"
                class="pt-5 flex  justify-center items-center text-center w-full text-base tracking-wide">
                <p class="px-3">返回首页</p>
                <ArrowCircleRightIcon class="w-5 h-5 "></ArrowCircleRightIcon>
            </router-link>
        </section>
        <div class="w-full">
            <img src="@/assets/pc/Home/reg.png" alt="" class="w-full h-[130px]">
        </div>
    </div>
    <div class="hidden sm:block bg-[#16181f] relative">
        <div class="register-fame">
            <div class="relatvie w-[946px] pt-20 mx-auto flex justify-between">
                <div class="h-[567px] w-[420px]   ">
                    <img src="@/assets/pc/Home/register.png" class="w-full h-full" alt="">
                </div>
                <div class="pc-reg-container  min-h-[550px] w-[600px] bg-[#171a21] rounded-[3px] ">
                    <div class="flex flex-col items-center   h-full px-6 py-6">
                        <div class="relative pt-[10px]     ">
                            <span class="text-xl text-center">登陆成功</span>
                            <div class="pt-3 flex space-x-4 pl-5">
                                <span>账号</span>
                                <div class="first-letter:text-red-700 tracking-wider">{{ loginINfo?.info.username }}</div>
                            </div>

                        </div>
                        <div class="h-16 w-[300px] relative bg-[#13151b] flex px-2 my-5  items-center justify-center">
                            <span class="text-[#7e7e7e] ">密码</span>
                            <form action="">
                                <input disabled :value="loginPass" :type="passwordField" autocomplete="off"
                                    class=" outline-0 focus:outline-none border-none w-full  input__ bg-transparent">
                            </form>
                            <div class="absolute right-5">
                                <EyeIcon v-if="passwordField !== 'password'" @click="showVisibile" class="w-5 h-5 " />
                                <EyeOffIcon v-else @click="showVisibile" class="w-5 h-5 " />
                            </div>
                        </div>
                        <div class="py-5 flex flex-col">
                            <div @click="callUserInfo()"
                                class="btn-primary px-5 py-3 w-[300px] text-center text-white cursor-pointer">
                                绑定手机号入金
                            </div>
                            <router-link to="/home"
                                class="border border-solid border-[#eed0a4] px-5 py-3 my-5 w-[300px] text-center text-white cursor-pointer">
                                进入首页
                            </router-link>
                        </div>

                        <div class="w-full flex justify-center">
                            <img src="@/assets/pc/Home/reg.png" alt="" class="w-[300px] h-[130px]">
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { EyeIcon, EyeOffIcon, ArrowCircleRightIcon } from "@heroicons/vue/outline";
import { ref, onMounted, computed } from 'vue'
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import globaljs from '@/utils/global'
import userApi from "@/network/user.js";
import AES from '@/utils/aes';

const router = useRouter()
const store = useStore()
const pass = ref('111aaa')
const passwordField = ref('password')

const showVisibile = () => {
    passwordField.value = passwordField.value === "password" ? "text" : "password";
};

const callUserInfo = () => {
    router.push('/pc/accsetting')
}

const loginINfo = computed(() => store.getters["user/LOGIN"]);
const loginPass = computed(() => store.getters["user/LoginUserName"]);
const gameEn = computed(() => store.getters["app/GameEn"]);

const getUserInfo = () => {
    let data = {
        "player": loginINfo?.value?.info?.username,
    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)


    userApi.GetUserInfo({ data:data, key: loginINfo?.value?.key }).then((res) => {
        if (res.data.code == '1') {
            console.log("res of userinfo data", res);
            store.commit('user/UserInfo', res.data.data)
        }
    }).catch((e) => {
        console.log(e);
    })
}

onMounted(() => {
    getUserInfo()
    if (loginPass.value == '' || loginPass.value == undefined) {
        router.push('/home')
    }
})

</script>

<style scoped>
.register_suss {
    background-image: url("https://344a78frontweb.wgqzh.com/cdn/344a78FM2/assets/img/rgeist-succeed-bg2.3482710a.png_.webp");
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
}

.input__:focus-within {
    outline: none;
    box-shadow: none;
}

.btn_login {
    width: 100%;
    background-image: linear-gradient(to right, #d4b48c, #cfaf87, #cbab83, #c6a67e, #c2a27a, #bd9d75, #b7996f, #b2946a, #aa8e62, #a3885b, #9b8253, #937c4c);
    border: none;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    color: #272c33;
    outline: none;
}

.register-fame {
    background-image: url("@/assets/pc/Home/register-fame.webp");
    background-color: #16181f;
    background-size: 1920px 304px;
    background-position: top;
    background-repeat: no-repeat;

}
</style>