<template>
    <div class="w-full h-auto   relative sm:hidden">
        <div class="account_header relative w-full">
            <div class=" bg-transparent  relative">
                <div class="px-3 w-full flex justify-between items-center py-2">
                    <ChevronLeftIcon @click="goUser()" class="w-7 h-7 text-[#7e7e7e] "></ChevronLeftIcon>
                    <p class=" text-[17px] text-[#7e7e7e] mr-5"> 用户详情 </p>
                    <div class=""></div>
                </div>
                <div class="py-3 px-3">
                    <div class="">
                        <p class="text-[#7e7e7e] text-base">总额度</p>
                        <div class="flex items-center pt-8 space-x-3">
                            <img src="@/assets/money.svg" alt="" class="w-7 h-7">
                            <div class="text-3xl text-[#d0d0d0]">{{userValue?.balance || 0}}</div>
                            <div @click="reload()">
                                <img   src="@/assets/mobile/user/load.png" alt="" class="w-5 h-5 transition z-10" v-bind:style="{transform: `rotate(${deg}deg)`}" >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class=" px-3 z-10   w-full absolute -bottom-24    ">
                <div class="amounut__  w-full    ">
                    <div class="w-full px-1  h-full  flex  items-center justify-around ">
                        <div class="flex flex-col items-center space-y-2 justify-center">
                            <p class="text-[#7e7e7e] text-[18px]">用户名</p>
                            <span class="text-[#eed0a4] text-sm">{{userValue?.username}}</span>
                        </div>
                        <div v-if="userValue?.realname"  class="flex space-y-2 flex-col items-center justify-center">
                            <p class="text-[#7e7e7e] text-[18px]">真实姓名</p>
                            <span class="text-[#eed0a4] text-sm">{{ hideWord(userValue?.realname)}}</span>
                        </div>
                        <div class="flex flex-col items-center space-y-2 justify-center">
                            <p class="text-[#7e7e7e] text-[18px]">等级</p>
                            <span class="text-[#eed0a4] text-sm">{{userValue?.user_level}}</span>
                        </div>
                        <div v-if="userValue?.phone" class="flex flex-col space-y-2 items-center justify-center">
                            <p class="text-[#7e7e7e] text-[18px]">手机号</p>
                            <span class="text-[#eed0a4] text-sm">{{hideMiddle(userValue?.phone, 2, 2)}}</span>
                        </div>
                    </div>
                </div>
            </div>
    </div>

    <div class="w-full h-auto bg-[#1f2129]   relative flex-auto mx-[19px] hidden sm:block">
        <div class="h-[60px] bg-[#1f2129]   w-full text-gray-200   px-2 flex justify-center items-center">
            <p class=" text-xl text-center"> 上级代理 </p>

        </div>
       <section class=" w-full py-7 mx-auto flex justify-center items-center">
        <div class="py-5 bg-[#16181f] tracking-wider px-8 rounded-lg max-w-lg w-[512px] ">
          <h1 class="text-center text-xl">User Inforamtion</h1>  
          <div class="text-white">
            <div class="flex items-center py-1 ">
                <span>用户名:</span>
                <span class="pl-2">{{userValue?.username}}</span>
            </div>
            <div class="flex items-center py-1">
                <span>数量:</span>
                <span class="pl-2">{{userValue?.ye}}</span>
            </div>
            <div class="flex items-center py-1">
                <span>上级代理:</span>
                <span class="pl-2">{{refname}}</span>
            </div>
            <div class="flex items-center py-1">
                <span>Level:</span>
                <span class="pl-2">{{userValue?.level}}</span>
            </div>
          </div>
        </div>
       </section>
    </div>
  </template>
  
<script setup>
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import {SelectorIcon,CheckIcon,ChevronLeftIcon   } from "@heroicons/vue/outline";
import { ref, onMounted, computed,reactive } from 'vue'
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import userApi from "@/network/user.js";
import global from "@/utils/global";
import AES from '@/utils/aes';

const store = useStore()
const router = useRouter()
const refname = ref('')
const bankInfo = ref(null)
const deg = ref(0);

const Bankstatus = reactive([
  { id: 1, name: "BANK" },
  { id: 2, name: "USDT" },
]);
const selectOrderStatus = ref(Bankstatus[0]);

const userValue = computed(() => store.getters["user/USERINFO"]);
const user = computed(() => store.getters["user/LOGIN"]);//login key
const token = computed(() => store.getters["user/LToken"]);
const gameEn = computed(() => store.getters["app/GameEn"]);


const goUser = () => {
  router.go(-1)
}

const edit = () => {
router.push({ path: '/edit_money_address', query: { type: selectOrderStatus.value.id } })

}

const add = () => {
router.push({ path: '/add_money_address', query: { type: selectOrderStatus.value.id } })

}

function hideWord(w) {
    if (w.length < 1) return w;
    return w.substring(0, 1) + '*'.repeat(w.length-1);
}

function hideMiddle(string, prefixLength, suffixLength) {
    var re = new RegExp('^(\\+?\\d{' + prefixLength + '})(\\d+)(\\d{' + suffixLength + '})$');

    return string.replace(re, function (match, prefix, middle, suffix) {
        return prefix + '*'.repeat(middle.length) + suffix;
    });
}

const GetReferenceInfo = () => {
if (token?.value) {
  let data = {
    "player": userValue?.value?.username,
    "upper_agent": userValue?.value?.reference_name,
  }
  const encrypttxt =  AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)
  userApi.GetReferenceInfo({data: data,key:user?.value?.key}).then((res) => {
    if (res.data.code == '1') {
      refname.value = res?.data?.data?.name
      console.log("res of GetReferenceInfo data", res);
    }
  }).catch((e) => {
    console.log(e);
  })
}
}

const reload = () => {
    console.log("leeeeeeeee");
    if(!token?.value) router.push('/login')
    deg.value += 360;
    return global.getUserInfo()
}

onMounted(()=>{
    if (!token?.value) return router.push('/login')
  GetReferenceInfo()
})
</script>
  
<style scoped>
.account_header{
    background-image: url("@/assets/ttt.webp");
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    height: 220px;
    width: 100%;
    z-index: 1;

}
.amounut__{
    width: 100%;
 height: 150px;
    background-image: url("@/assets/sss.png");
 background-repeat: no-repeat;
 background-size: cover;


}
.btn_login {
    background-image: linear-gradient(to right, #d4b48c, #cfaf87, #cbab83, #c6a67e, #c2a27a, #bd9d75, #b7996f, #b2946a, #aa8e62, #a3885b, #9b8253, #937c4c);
    border: none;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    color: #272c33;
    outline: none;
}
  </style>