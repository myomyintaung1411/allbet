<script setup>
import { ref, onMounted, computed } from 'vue'
import { XIcon, UserIcon, LockClosedIcon, EyeIcon, EyeOffIcon, ChatAltIcon, ChevronLeftIcon } from "@heroicons/vue/outline";
import Header from '@/components/Header.vue';
import userApi from "@/network/user.js";
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import Loading from "@/utils/loader";
import AES from '@/utils/aes';

import { getCurrentInstance } from 'vue';
const store = useStore()
const router = useRouter()
const instance = getCurrentInstance()
const name = ref('')
const pass = ref('')
const passwordField = ref('password')

const phoneNum = ref('')
const codeDisable = ref(false)
const codeMsg = ref('获取校验码')
const timer = ref(null)
const countdown = ref(60)
const codeNum = ref('')
const gameEn = computed(() => store.getters["app/GameEn"]);

const showVisibile = () => {
    passwordField.value = passwordField.value === "password" ? "text" : "password";
};

const goUser = () => {
    router.go(-1)
}


const getCode = () => {
    if (phoneNum.value == '') return instance.proxy.$message({ message: '请输入电话号码', duration: 2 })
    // if (
    //     !/^((1[3,5,8,7,9][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(
    //         phoneNum.value
    //     )
    // ) {
    //     return instance.proxy.$message({ message: '手机号码格式不对', duration: 2 })
    // }
    getValidStr()
}

const getValidStr = () => {
    console.log(phoneNum.value, "ttttttttttt");

    console.log(codeDisable.value, "disable");
    codeMsg.value = "重发(" + countdown.value + ")";
    countdown.value--;
    if (countdown.value == 59) {
        console.log("countdown value is", countdown.value);
        createPhoneCode()
    }
    if (countdown.value <= 0) {
        countdown.value = 60;
        codeMsg.value = "获取校验码";
        codeDisable.value = false
    } else {
        codeDisable.value = true;
        timer.value = setTimeout(() => {
            getValidStr()
        }, 1000);
    }
}

const createPhoneCode = () => {
    let data = {
        "type": 11,
        "phone": phoneNum.value,
    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

    userApi.GetRegLoginSmsCode({ data: data }).then((res) => {
        console.log(res, "login sms code");
        if (res.data.code == '1') {
            console.log("success *************************")
            return instance.proxy.$message({ message: '手机验证码发送成功，请查收手机', duration: 2 })
        }
    }).catch((e) => {
        console.log(e);
        //catch error then reset timer
        clearTimeout(timer.value)
        codeMsg.value = "获取校验码";
        codeDisable.value = false
        countdown.value = 60;
        return instance.proxy.$message({ message: e.response?.data?.message, duration: 2 })
    })
}


const ChangePass = () => {
    if (name.value == '' || phoneNum.value == '' || codeNum.value == '' || pass.value == '') return instance.proxy.$message({ message: '请输入所有字段', duration: 2 })
    let data = {
        "player": name.value,
        "phone": phoneNum.value,
        "code": codeNum.value,
        "password": pass.value
    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

    Loading.showLoading()
    userApi.ForgetPass({ data: data }).then((res) => {
        Loading.hideLoading()
        if (res.data.code == '1') {

            clearTimeout(timer.value)
            codeMsg.value = "获取校验码";
            codeDisable.value = false
            countdown.value = 60;

            instance.proxy.$message({ message: res?.data.message, duration: 2 })
            router.go(-1)
            // router.push('/')
        }
    }).catch((err) => {
        Loading.hideLoading()
        console.log(err.response?.data.message);
        return instance.proxy.$message({ message: err.response?.data?.message, duration: 2 })
    })
}

</script>

<template>

    <div class="h-screen w-full relative sm:hidden">
        <div class="h-[60px]  w-full text-gray-200   px-2 flex justify-between items-center">
            <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
            <p class=" text-[17px] mr-5">忘记密码</p>
            <div></div>
        </div>

        <section class="py-6 w-full relative px-8">
            <form @click.prevent class="py-3">
                <div
                    class="bg-[#13151b] my-5 formDiv border border-solid border-[#272c33] relative overflow-hidden flex items-center mx-auto px-2 h-16">
                    <div
                        class="relative flex items-center justify-center w-20 h-5   border-r border-[#7e7e7e] border-solid">
                        <UserIcon class="w-5 h-5 "></UserIcon>
                    </div>
                    <div class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                        <input v-model="name" autocomplete="off" class=" input-name text-[#d0d0d0]   
                        border-none outline-none focus:outline-none focus:border-none    
                        w-full h-full" id="username" pattern="" name="username" placeholder="当前使用账户" min="6" max="12"
                            maxlength="17" type="text">
                        <XIcon v-if="name" @click="name = ''" class="h-5 w-5 cursor-pointer  absolute right-3  ">
                        </XIcon>
                    </div>
                </div>
                <div
                    class="bg-[#13151b] my-5 formDiv border border-solid border-[#272c33] relative overflow-hidden flex items-center mx-auto px-2 h-16">
                    <div
                        class="relative flex items-center justify-center w-20 h-5   border-r border-[#7e7e7e] border-solid">
                        <img src="@/assets/mobile/user/phone.svg" class="w-5 h-5 ">
                    </div>
                    <div class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                        <input v-model="phoneNum" autocomplete="off" class=" input-name text-[#d0d0d0]   
                        border-none outline-none focus:outline-none focus:border-none    
                        w-full h-full" id="phoneNum" pattern="" name="phoneNum" placeholder="已绑定的手机号码" min="6" max="11"
                            maxlength="11" type="text">
                        <XIcon v-if="phoneNum" @click="phoneNum = ''"
                            class="h-5 w-5 cursor-pointer  absolute right-3  ">
                        </XIcon>
                    </div>
                </div>

                <div
                    class="bg-[#13151b] border border-solid border-[#272c33] my-5 formDiv  relative overflow-hidden flex items-center mx-auto px-2 h-16">
                    <div
                        class="relative flex items-center justify-center w-20 py-1 h-5     border-r border-[#7e7e7e] border-solid">

                        <ChatAltIcon class="w-5 h-5 "></ChatAltIcon>
                    </div>

                    <div class="formInput w-full  h-full text-sm flex justify-center items-center relative">
                        <input v-model="codeNum" autocomplete="off"
                            class=" input-name  focus:border-none  border-none w-full outline-none bg-transparent focus:outline-none text-[#d0d0d0] h-full"
                            id="codeNum" pattern="" name="codeNum" placeholder="6位短信校验码" min="6" max="6" maxlength="6"
                            type="tel">
                        <div class="absolute right-2 cursor-pointer">
                            <button :disabled="codeDisable" @click="getCode()" class=""
                                :class="!codeDisable ? '' : ' opacity-80 cursor-not-allowed'">{{ codeMsg
                                }}</button>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-[#13151b] formDiv relative overflow-hidden border border-solid border-[#272c33] flex items-center mx-auto px-2 h-16">
                    <div
                        class="relative flex items-center justify-center w-20 h-5   border-r border-[#7e7e7e] border-solid">
                        <LockClosedIcon class="w-5 h-5  "></LockClosedIcon>
                    </div>
                    <div class=" w-full h-full  text-sm flex justify-center items-center relative">
                        <input v-model="pass" autocomplete="off" :type="passwordField" class=" input-name  focus:border-none border-none outline-none
                          focus:outline-none text-[#d0d0d0] w-full pl-4 h-full " id="password" pattern=""
                            name="username" placeholder="请输入新密码" min="6" max="12" maxlength="12">
                        <XIcon v-if="pass" @click="pass = ''" class="h-5 w-5 cursor-pointer  absolute right-10  ">
                        </XIcon>
                        <div class="absolute right-3">
                            <EyeIcon v-if="passwordField !== 'password'" @click="showVisibile" class="w-5 h-5 " />
                            <EyeOffIcon v-else @click="showVisibile" class="w-5 h-5 " />
                        </div>
                    </div>
                </div>
                <div class="py-7 w-full">
                    <button @click="ChangePass()" class="w-full btn_login text-base py-4 text-[#373c33] text-[19px]">
                        更改密码
                    </button>
                </div>
            </form>
        </section>
    </div>

    <div class="h-screen w-full relative hidden sm:block">

        <div class="register-fame">
            <div class="relatvie w-[946px] pt-20 mx-auto flex justify-between">
                <div class="h-[550px] w-[470px]   ">
                    <img src="@/assets/pc/Home/register.png" class="w-full h-full" alt="">
                </div>
                <section
                    class="py-6 w-[450px] bg-[#171a21] flex-col h-full  flex justify-center items-center mx-auto relative px-8">
                    <div class="text-center">
                        <p class=" text-[20px]">忘记密码</p>
                    </div>
                    <form @click.prevent class="py-3 w-full">
                        <div
                            class="bg-[#13151b] my-5 formDiv border border-solid border-[#272c33] relative overflow-hidden flex items-center mx-auto px-2 h-16">
                            <div
                                class="relative flex items-center justify-center w-20 h-5   border-r border-[#7e7e7e] border-solid">
                                <UserIcon class="w-5 h-5 "></UserIcon>
                            </div>
                            <div class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                                <input v-model="name" autocomplete="off" class=" input-name text-[#d0d0d0]   
                        border-none outline-none focus:outline-none focus:border-none    
                        w-full h-full" pattern="" name="username" placeholder="当前使用账户" min="6" max="12" maxlength="17"
                                    type="text">
                                <XIcon v-if="name" @click="name = ''"
                                    class="h-5 w-5 cursor-pointer  absolute right-3  ">
                                </XIcon>
                            </div>
                        </div>
                        <div
                            class="bg-[#13151b] my-5 formDiv border border-solid border-[#272c33] relative overflow-hidden flex items-center mx-auto px-2 h-16">
                            <div
                                class="relative flex items-center justify-center w-20 h-5   border-r border-[#7e7e7e] border-solid">
                                <img src="@/assets/mobile/user/phone.svg" class="w-5 h-5 ">
                            </div>
                            <div class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                                <input v-model="phoneNum" autocomplete="off" class=" input-name text-[#d0d0d0]   
                        border-none outline-none focus:outline-none focus:border-none    
                        w-full h-full" pattern="" name="phoneNum" placeholder="已绑定的手机号码" min="6" max="11"
                                    maxlength="11" type="text">
                                <XIcon v-if="phoneNum" @click="phoneNum = ''"
                                    class="h-5 w-5 cursor-pointer  absolute right-3  ">
                                </XIcon>
                            </div>
                        </div>

                        <div
                            class="bg-[#13151b] border border-solid border-[#272c33] my-5 formDiv  relative overflow-hidden flex items-center mx-auto px-2 h-16">
                            <div
                                class="relative flex items-center justify-center w-20 py-1 h-5     border-r border-[#7e7e7e] border-solid">

                                <ChatAltIcon class="w-5 h-5 "></ChatAltIcon>
                            </div>

                            <div class="formInput w-full  h-full text-sm flex justify-center items-center relative">
                                <input v-model="codeNum" autocomplete="off"
                                    class=" input-name  focus:border-none  border-none w-full outline-none bg-transparent focus:outline-none text-[#d0d0d0] h-full"
                                    pattern="" name="codeNum" placeholder="6位短信校验码" min="6" max="6" maxlength="6"
                                    type="tel">
                                <div class="absolute right-2 cursor-pointer">
                                    <button :disabled="codeDisable" @click="getCode()" class=""
                                        :class="!codeDisable ? '' : ' opacity-80 cursor-not-allowed'">{{ codeMsg
                                        }}</button>
                                </div>
                            </div>
                        </div>

                        <div
                            class="bg-[#13151b] formDiv relative overflow-hidden border border-solid border-[#272c33] flex items-center mx-auto px-2 h-16">
                            <div
                                class="relative flex items-center justify-center w-20 h-5   border-r border-[#7e7e7e] border-solid">
                                <LockClosedIcon class="w-5 h-5  "></LockClosedIcon>
                            </div>
                            <div class=" w-full h-full  text-sm flex justify-center items-center relative">
                                <input v-model="pass" autocomplete="off" :type="passwordField" class=" input-name  focus:border-none border-none outline-none
                          focus:outline-none text-[#d0d0d0] w-full pl-4 h-full " pattern="" name="username"
                                    placeholder="请输入新密码" min="6" max="12" maxlength="12">
                                <XIcon v-if="pass" @click="pass = ''"
                                    class="h-5 w-5 cursor-pointer  absolute right-10  ">
                                </XIcon>
                                <div class="absolute right-3">
                                    <EyeIcon v-if="passwordField !== 'password'" @click="showVisibile"
                                        class="w-5 h-5 " />
                                    <EyeOffIcon v-else @click="showVisibile" class="w-5 h-5 " />
                                </div>
                            </div>
                        </div>
                        <div class="py-7 w-full">

                            <div class="flex justify-between  -mx-[11px] mb-0">
                                <div @click="goUser()" class="btn flex items-center justify-center w-full btn-outline mx-[11px] h-[50px] border border-solid text-[#eed0a4]
                    border-[#eed0a4] cursor-pointer
                    ">
                                    取消
                                </div>
                                <div @click="ChangePass()" class="btn flex cursor-pointer items-center justify-center text-[#272c33] text-center w-full btn-primary mx-[11px] h-[50px]  
                    ">
                                    更改密码
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    </div>


</template>


<style scoped>
.formDiv:focus-within {
    background: transparent !important;
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
    background: transparent !important;
}

.register-fame {
    background-image: url("@/assets/pc/Home/register-fame.webp");
    background-size: 1920px 304px;
    background-position: top;
    background-repeat: no-repeat;

}
</style>