<template>
    <div class="w-full h-screen  bg-black relative sm:hidden sm:mx-[19px]">
        <div class="h-[60px]  w-full text-gray-400    px-2 flex justify-between items-center">
            <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
            <p class=" text-[17px]"> 个人资料 </p>
            <div class="flex flex-col pt-2 text-center mr-2 items-center whitespace-nowrap ">
                &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
        </div>
        <div class="py-4 w-full ">
            <div class="flex items-center relative justify-between px-4 py-6  bg-[#13151b] text-[#b3abab]">
                <div class="pl-2">
                    <span class="text-[#b3abab] text-lg whitespace-nowrap">真实姓名</span>
                </div>
                <div @click="openDialog" class="flex items-center justify-end pr-6 w-full">
                    {{ userValue?.realname == '' ? '未填写' : hideWord(userValue?.realname) }}
                </div>

                <ChevronRightIcon class="w-5 h-5 absolute right-2  "></ChevronRightIcon>
            </div>
            <div class="bg-[#13151b] text-[#b3abab]  my-5  relative  flex items-center mx-auto px-2 py-6">
                <div class="relative flex items-center   justify-center w-24 text-[12px] py-1  ">
                    <p class="text-[#b3abab] text-lg">性别</p>
                </div>
                <div class="  cursor-pointer z-10   w-full     ">
                    <Listbox v-model="selectGender">
                        <div class="relative w-full">
                            <ListboxButton
                                class="relative w-full py-2 pl-3 pr-8 text-left bg-transparent  cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                <span class="block truncate text-right">{{ selectGender.name }}</span>
                                <span class="absolute inset-y-0 right-0 flex items-center pointer-events-none">

                                    <ChevronRightIcon class="w-5 h-5 "></ChevronRightIcon>
                                </span>
                            </ListboxButton>

                            <transition leave-active-class="transition duration-100 ease-in"
                                leave-from-class="opacity-100" leave-to-class="opacity-0">
                                <ListboxOptions
                                    class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white   ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    <ListboxOption v-slot="{ active, selected }" v-for="select in GenderStatus"
                                        :key="select.name" :value="select" as="template">
                                        <li :class="[
                                            active ? 'text-amber-900 bg-amber-100' : 'text-gray-900 ',
                                            'cursor-default select-none relative py-2 pl-10 pr-4',
                                        ]">
                                            <span :class="[
                                                selected ? 'font-medium' : 'font-normal',
                                                'block truncate',
                                            ]">{{ select.name }}</span>
                                            <span v-if="selected"
                                                class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                <CheckIcon class="w-5 h-5" aria-hidden="true" />
                                            </span>
                                        </li>
                                    </ListboxOption>
                                </ListboxOptions>
                            </transition>
                        </div>
                    </Listbox>
                </div>
            </div>

            <div class="flex items-center relative justify-between px-4  py-8 bg-[#13151b] text-[#b3abab]">
                <div class="pl-2">
                    <span class="text-[#b3abab] text-lg whitespace-nowrap">出生日期</span>
                </div>
                <div class="flex items-center  absolute right-7  ">
                    <v-date-picker v-model="date"  :max-date='maxDate()'  locale="zh" >
                        <template v-slot="{ inputValue, inputEvents }">
                            <input
                                class=" border-none text-right  px-2 py-1 rounded bg-transparent placeholder:text-[#b3abab]"
                                :value="inputValue" v-on="inputEvents"
                                :placeholder="userValue?.birthday ? bdate(userValue?.birthday) : '未填写'" />
                        </template>
                    </v-date-picker>

                </div>
                <ChevronRightIcon class="w-5 h-5 absolute right-2  "></ChevronRightIcon>
            </div>
        </div>
        <section class="px-6 py-3">
            <div @click="setBirthday()" class="py-5 text-lg w-full btn_login text-center">
                保存
            </div>
        </section>
    </div>
    <!-- pc -->
    <div class="hidden sm:block relative w-full bg-[#1f2129] my-2 py-[20px] px-[18px]">
        <div class="py-5 flex flex-col justify-center items-center">
            <div class="mb-[40px] flex space-x-3 items-center justify-center">
                <div class=" py-2 rounded-full bg-slate-500 px-2 border-[#7e7e7e]">
                    <LockClosedIcon class="w-10 h-10"></LockClosedIcon>
                </div>
                <span class="text-base text-white">个人资料</span>
            </div>
            <section class="form w-[381px]">
                <form @click.prevent>
                    <div class="flex items-center relative justify-between px-4 py-4  bg-[#13151b] text-[#b3abab]">
                        <div class="pl-2">
                            <span class="text-[#b3abab] text-lg whitespace-nowrap">真实姓名</span>
                        </div>
                        <div @click="openDialog" class="flex items-center justify-end pr-6 w-full">
                            {{ userValue?.realname == '' ? '未填写' : hideWord(userValue?.realname) }}
                        </div>

                        <ChevronRightIcon class="w-5 h-5 absolute right-2  "></ChevronRightIcon>
                    </div>

                    <div class="bg-[#13151b] text-[#b3abab]  my-5  relative  flex items-center mx-auto px-2 py-3">
                        <div class="relative flex items-center   justify-center w-24 text-[12px] py-1  ">
                            <p class="text-[#b3abab] text-lg">性别</p>
                        </div>
                        <div class="  cursor-pointer z-10   w-full     ">
                            <Listbox v-model="selectGender">
                                <div class="relative w-full">
                                    <ListboxButton
                                        class="relative w-full py-2 pl-3 pr-8 text-left bg-transparent  cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                        <span v-if="userValue?.sex" class="block truncate text-right">{{ userValue?.sex
                                                == 'male' ? '男' : '女'
                                        }}</span>
                                        <span v-else class="block truncate text-right">{{ selectGender.name }}</span>
                                        <span class="absolute inset-y-0 right-0 flex items-center pointer-events-none">

                                            <ChevronRightIcon class="w-5 h-5 "></ChevronRightIcon>
                                        </span>
                                    </ListboxButton>

                                    <transition leave-active-class="transition duration-100 ease-in"
                                        leave-from-class="opacity-100" leave-to-class="opacity-0">
                                        <ListboxOptions
                                            class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white   ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                            <ListboxOption v-slot="{ active, selected }" v-for="select in GenderStatus"
                                                :key="select.name" :value="select" as="template">
                                                <li :class="[
                                                    active ? 'text-amber-900 bg-amber-100' : 'text-gray-900 ',
                                                    'cursor-default select-none relative py-2 pl-10 pr-4',
                                                ]">
                                                    <span :class="[
                                                        selected ? 'font-medium' : 'font-normal',
                                                        'block truncate',
                                                    ]">{{ select.name }}</span>
                                                    <span v-if="selected"
                                                        class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                        <CheckIcon class="w-5 h-5" aria-hidden="true" />
                                                    </span>
                                                </li>
                                            </ListboxOption>
                                        </ListboxOptions>
                                    </transition>
                                </div>
                            </Listbox>
                        </div>
                    </div>

                    <div class="flex items-center relative justify-between px-4  py-4 bg-[#13151b] text-[#b3abab]">
                        <div class="pl-2">
                            <span class="text-[#b3abab] text-lg whitespace-nowrap">出生日期</span>
                        </div>
                        <div class="flex items-center  absolute right-7  ">
                            <v-date-picker v-model="date" locale="zh" class=" " :max-date="maxDate()">
                                <template v-slot="{ inputValue, inputEvents }">
                                    <input
                                        class=" border-none text-right  px-2 py-1 rounded bg-transparent placeholder:text-[#b3abab]"
                                        :value="inputValue" v-on="inputEvents"
                                        :placeholder="userValue?.birthday ? bdate(userValue?.birthday) : '未填写'" />
                                </template>
                            </v-date-picker>

                        </div>
                        <ChevronRightIcon class="w-5 h-5 absolute right-2  "></ChevronRightIcon>
                    </div>
                    <section class=" py-5">
                        <div @click="setBirthday()" class="py-5 text-lg w-full btn_login text-center">
                            保存
                        </div>
                    </section>
                </form>
            </section>
        </div>
    </div>

    <!-- dialog -->
    <NotCloseDialog :show="depo_Dialog" @close="depo_Dialog = false">
        <div class="w-[90vw] sm:w-[500px]   py-10 text-white px-3  ">
            <p class="text-center text-xl">提示</p>
            <div class="w-full text-start py-3">
                <p class="text-sm text-[#7e7e7e] py-5">人民币存款前请实名认证，并只用该实名账户存取款。</p>
                <p class="text-[#ff1818] text-sm">注：实名不可随意更改，如需变更请联系在线客服。</p>
            </div>
            <div class="w-full h-12 bg-[#13151b] my-5">
                <form @click.prevent>
                    <input v-model="realname" type="text" placeholder="真实姓名" name="username" id="usr" class="w-full focus:border-none  focus:outline-0 focus:shadow-none 
                    bg-transparent h-12 outline-0 border-none focus-within:outline-0 focus-within:shadow-none">
                </form>
            </div>
            <div class="flex justify-end w-full items-center text-[#858585]">
                若姓名包含
                <span class="text-[#e74747] text-xl mx-2 -mt-2">.</span>
                请点
                <span class="text-[#bc6013]">复制</span>
                <span>后粘贴</span>
            </div>
            <div class="flex pt-5 items-center w-full  justify-evenly px-3">
                <div @click="depo_Dialog = false" class="btn flex items-center justify-center 
          btn-outline  h-[50px]  border border-solid 
                              border-[#bc6013] text-[#bc6013] cursor-pointer px-12  whitespace-nowrap
                              ">
                    取消
                </div>
                <div @click="requestName" class="btn flex cursor-pointer px-12 whitespace-nowrap 
           items-center justify-center text-[#272c33] text-center  btn-primary  h-[50px]  
              ">
                    确认
                </div>
            </div>
        </div>
    </NotCloseDialog>
</template>

<script setup>

import userApi from "@/network/user.js";
import Loading from "@/utils/loader";
import { useRouter } from 'vue-router';
import AES from '@/utils/aes';

import { useStore } from "vuex";
import { ref, onMounted, computed, reactive } from 'vue'
import { XIcon, UserIcon, LockClosedIcon, ChevronLeftIcon, ChevronRightIcon, CheckIcon } from "@heroicons/vue/outline";
import moment from "moment";
import NotCloseDialog from "@/components/NotCloseDialog.vue";
import globaljs from '@/utils/global'

import {
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from "@headlessui/vue";
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance()
const GenderStatus = reactive([
    { id: 1, name: "男" },
    { id: 2, name: "女" },
]);
const realname = ref('') //realname bind
const depo_Dialog = ref(false)
const selectGender = ref(GenderStatus[0]);
const date = ref('')
const router = useRouter()
const store = useStore()
const login = computed(() => store.getters["user/LOGIN"]);
const userValue = computed(() => store.getters["user/USERINFO"]);
const token = computed(() => store.getters["user/LToken"]);
const gameEn = computed(() => store.getters["app/GameEn"]);

const goUser = () => {
    router.go(-1)
}

const openDialog = () => {
    if (userValue?.value?.realname) return instance.proxy.$message({ message: '更改实名信息需要联系在线客服', duration: 2 })
    if (userValue?.value?.realname == '' || userValue?.value.realname == undefined || userValue?.value.realname == null) {
        depo_Dialog.value = true
    }
}



function hideWord(w) {
    if (w?.length < 1) return w;
    return w?.substring(0, 1) + '*'.repeat(w?.length - 1);
}

const bdate = (date) => {
    return moment(new Date(date)).format("YYYY-MM-DD")
}

const maxDate = () => {
   // return new Date(2002, 0, 0)
  let d =  moment().subtract(18, 'y').format('YYYY-MM-DD');
  console.log(d,'ddddddddddddddd');
  return d
}

const requestName = () => {

    if (realname.value == '') return instance.proxy.$message({ message: '请输入真实姓名', duration: 2 })
    if (!realname.value?.match(/^[\u4E00-\u9FFF\u3400-\u4DFF\uF900-\uFAFF]+$/g)) return instance.proxy.$message({ message: '只允许使用汉字', duration: 2 })
    if (token?.value) {
        let data = {
            "player": login?.value?.info?.username,
            "realname": realname.value
        }
        const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

        userApi.BindRealName({ data: data, key: login?.value?.key }).then((res) => {
            console.log(res, "rrrrrrrrr");
            if (res.data.code == '1') {
                instance.proxy.$message({ message: res?.data?.message, duration: 2 })
                globaljs.getUserInfo()
                depo_Dialog.value = false;
            }
        }).catch((e) => {
            console.log(e.response, "ee");
            instance.proxy.$message({ message: e.response?.data.message, duration: 2 })
        })
    }

}

const setBirthday = () => {
    console.log(selectGender.value);
    if (!token?.value) return
    if (date.value == '' || date.value == null || date.value == undefined) return instance.proxy.$message({ message: '请输入您的生日日期', duration: 2 })
    let data = {
        "player": userValue?.value?.username,
        "sex": selectGender.value?.name == '男' ? 'male' : 'female',

        "birthday": moment(new Date(date.value)).startOf('day').format("YYYY-MM-DD HH:mm:ss"),
    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

    Loading.showLoading()
    userApi.BindBirthday({ data: data }).then((res) => {
        Loading.hideLoading()
        if (res.data.code == '1') {
            console.log("res of userinfo data", res);
            instance.proxy.$message({ message: res.data?.message, duration: 2 })
            router.push('/')
        }
    }).catch((e) => {
        Loading.hideLoading()
        instance.proxy.$message({ message: e.response?.data?.message, duration: 2 })
    })

}

onMounted(() => {
    if (!token?.value) return router.push('/login')

    if (userValue.value?.sex == 'male') {
        selectGender.value = GenderStatus[0]
    }
    if (userValue.value?.sex == 'female') {
        selectGender.value = GenderStatus[1]
    }
})
</script>
