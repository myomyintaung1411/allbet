<template>
    <div class="w-full h-auto   relative">
        <div class="h-[60px]  w-full text-gray-200   px-2 flex justify-between items-center">
            <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
            <p class=" text-[17px]"> 存款 </p>
            <div @click="goService">
                <img src="@/assets/mobile/home/service.png" alt="" class="w-8 h-7">
            </div>
        </div>
        <section class="px-5 py-3 w-full  border-b border-[#272c33]">
            <div class="flex flex-wrap justify-center px-2 space-x-5">
                <div @click="chooseBank(0)"
                    class="px-3 whitespace-nowrap py-2 flex items-center space-x-2 tracking-widest w-[45%] border border-solid "
                    :class="activeBank == 0 ? 'border-[#bc6013] text-[#efae3d]' : 'text-white border-[#272c33]'">
                    <img src="@/assets/pc/Home/depo11.webp" alt="" class="w-[24px] h-[24px]">
                    <p>银行卡转账</p>
                </div>
                <div @click="chooseBank(1)"
                    class="px-3 py-2 whitespace-nowrap flex items-center space-x-2 tracking-widest w-[45%] border  border-solid "
                    :class="activeBank == 1 ? 'border-[#bc6013] text-[#efae3d]' : 'text-white border-[#272c33]'">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAYAAAD7PHgWAAAAAXNSR0IArs4c6QAAA4ZJREFUWAnNWEsobWEU/o4redybgUM6hBBmDOQRE0rklpsJSspAmSklM92uklIGhl4jiZIB5UbKhGIgeZTuHRwpl+SVV3l0z1l3LZvzsPfZ/nO6nLNq7f3/a63/39/69trrnL0tMBECktn9jfUrawarjfUza3CFgdlYh1n/slIwVccEg6lhvQ4mKM9rewFkRxurwzMg2GMXQAYizIUUOCHHIgh5IMX/i/WLzENJwp7B/OCz/+Di4oDCQiA11XdO4pMYiQ1EmL1k1sCe1sZGepKBAd9PuvhEJDaAjhDOSUmf+2SaXEICUF6uDykq0mxZWUBDg94vFvGJSKzDoY09j0tLwMmJp8V7zFn9fDOz8nKNhfc4yt4mzAqD8gthLru7QHOzPqa4GGhtBRYXgfFxvV8sjY1ARQUwOAisrupjZG8zYfQ3ZhmY+j6gBi0CwCwBU5/UZk4OcHYGTE0BBwdAdTXgdLqXZWcDKSnAzg5wfOy2q45MGTKpDa91TU1adY6NmdaT1xrFvdUZlOytVuO8w7idWrjnCzxP9oyjva2ZmcD+vrfNYyYPiZosLwOxsfrYvDwgPh6w24G9Pb3/LcvdnXlEILS71pSWEj08EJ2fE9ls//32ynXUGXydpxT+9DQQEQG0tABHR9ywuGOlp7+ONJ6fngKbm8Y+T6uLDcWifYqPiSHa3NQejKEhN3Pd3eqtfHbWvc7k2v4zGBMDTE4Cubkaa+3t7nzn54HLS/f89aigAKivBw4Pgb6+117juV8MZmQQbW+7WVpfV2KBoqOJ+vuJHA6iuTkiq1VtHTMrXVotuKqK6OJCA7exoZ1VACYlEdntRI+PRB0dRBaL2vWecakBbG3VshdYo6NEkZFETieRCsD8fC2ZqSm/gL0Qp1aDa2vA1RXQ2QmMjOhrpbYW6OnR28USGanZKysBoz8GXV1aNzBeDTWAW1tAWhq/610bbxMVBSQmGvvCny8hQI1iZK1vuVW7xUZ1+jG3+PfLO4nvHILrsYc6wDm1GvSXxZIS4PYWeHgA6uq01b7q1/fe8gIz8z41uLKitRbPY22tv21mWLAHzuDEhO//cb29QFmZxs39PbCwAKysaHO14w2HfX8KfWmIIXSWzy81rjxCCJiUgIBrc4GTQQgBlE9+buZeUIYAQPnsIh9L5QOWTgJ/SHRbKRu4/4D/foNfYjDHOsOvW3/4bCj/AOjQvw0dMJwGAAAAAElFTkSuQmCC"
                        alt="" class="w-[20px] h-[20px]">
                    <p>云闪付</p>
                </div>
            </div>
        </section>
        <section class="px-5 py-3 w-full border-b border-[#272c33]">
            <form @click.prevent class="relative">
                <input disabled type="text" :placeholder=" hideWord(userValue?.realname)" 
                    class="w-full input_foucs  h-12 bg-transparent border border-solid border-[gray] pr-12">
                <XIcon v-if="name" @click="name = ''" class="h-5 w-5 cursor-pointer top-3  absolute right-6  "></XIcon>
            </form>
            <div class="flex justify-end w-full items-center text-[#858585] py-3 text-sm">
                若姓名包含
                <span class="text-[#e74747] text-xl mx-2 -mt-2">.</span>
                请点
                <span class="text-[#efae3d]">复制</span>
                <span>后粘贴</span>
            </div>
        </section>

        <section class="text-[#efae3d] text-base  px-5 py-3">
            <div class="  text-[12px] text-start  ">
                请使用户名为
                <span class="text-[#fff44c]">提*</span>
                的银行卡转账，否则将无法到账，修改姓名请联系客服
            </div>
        </section>

        <section class="px-4 py-3 border-t border-[#272c33] w-full">
            <div class="flex flex-wrap  justify-center  ">
                <div v-for="(mon, n) in money" :key="n" @click="moneyClick(n, mon)"
                    :class="activeMoney == n ? ' border border-solid border-[#bc6013] text-[#efae3d]' : 'text-white border border-solid border-[#272c33] '"
                    class="w-[30%]   mx-[5px] my-2    cursor-pointer
                text-center py-2 text-base">
                    {{ mon }} 元
                </div>
            </div>
            <div class="relative px-2 py-2">
                <form @click.prevent>
                    <div class="relative">
                        <input v-model="amount" type="number" min="1" max="100000000" @input="eventName"
                            placeholder="存款金额  限额100元-3万元"
                            class="w-full input_foucs left-11  h-12 bg-transparent border border-solid border-[gray]">
                        <XIcon v-if="amount" @click="amount = ''"
                            class="h-5 w-5 cursor-pointer top-3  absolute right-6  "></XIcon>
                    </div>
                </form>
            </div>
        </section>
        <section class="px-6  py-3">
            <div @click="Deposit()" class="py-5 text-base w-full btn_login text-center">
                下一步
            </div>
            <div class="py-4 text-[#7e7e7e]">
                注：获取卡号后请及时存款，若多次未存后续将会关闭相应存款渠道。
            </div>
        </section>

    </div>

    <!-- dialog -->
    <NotCloseDialog :show="depo_Dialog" @close="depo_Dialog = false">
        <div class="w-[90vw]   py-10 text-white px-3  ">
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
                <router-link to="/" class="btn flex items-center justify-center 
          btn-outline  h-[50px]  border border-solid 
                              border-[#bc6013] text-[#bc6013] cursor-pointer px-12  whitespace-nowrap
                              ">
                    取消
                </router-link>
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
import { ViewGridAddIcon, UserIcon, XIcon, CreditCardIcon, CurrencyYenIcon, SelectorIcon, CheckIcon } from "@heroicons/vue/solid";
import { ChevronLeftIcon, InformationCircleIcon, LockClosedIcon, UserRemoveIcon } from "@heroicons/vue/outline";
import { useRouter } from 'vue-router';
import { useStore } from "vuex";
import { ref, reactive, onMounted, computed ,watch} from 'vue'
import userApi from "@/network/user.js";
import bankApi from "@/network/bank.js";
import Loading from "@/utils/loader";
import NoticeMsg from "@/utils/alert";
import AES from '@/utils/aes';

import globaljs from '@/utils/global'
import { getCurrentInstance } from 'vue';

import NotCloseDialog from "@/components/NotCloseDialog.vue";
const activeBank = ref(0)
const depo_Dialog = ref(false)
const activeMoney = ref(0)
const activeCard = ref(0)
const router = useRouter()
const store = useStore()
const amount = ref('200')
const name = ref('')
const realname = ref('') //realname bind
const cardNumber = ref('')

const money = ref(["200", "500", "1000", "3000", "5000", "10000"])
const Bankstatus = reactive([
    { id: 1, name: "BANK" },
    { id: 2, name: "USDT" },
]);
const selectOrderStatus = ref(Bankstatus[0]);

const login_info = computed(() => store.getters["user/LOGIN"]);
const userValue = computed(() => store.getters["user/USERINFO"]);
const token = computed(() => store.getters["user/LToken"]);
const gameEn = computed(() => store.getters["app/GameEn"]);

const instance = getCurrentInstance()

const goService = () => {
  if(token?.value){
    window.open(`http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293&nick_name=${userValue?.value.username}`)
  }else{
    window.open('http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293')
  }
}

const eventName = (e) => {
    if (!/^[0-9]+$/.test(amount.value)) amount.value = amount.value.replace(/\D/g, '');
    if (amount.value > 100000000) amount.value = 100000000;
    if (amount.value < 0) amount.value = null
}

const chooseBank = (num) => {
    activeBank.value = num
}

const moneyClick = (n, mon) => {
    activeMoney.value = n
    amount.value = mon
}

const goUser = () => {
    router.go(-1)
}

const Deposit = () => {
    // router.push('/paymentconfirm')
    // return
	 if (amount.value == '') return instance.proxy.$message({ message: '请选择金额', duration: 2 })
	    let data = {
	        "payType":'bankCard',
	        "username":userValue.value?.username,
	        "amount":amount.value
	    }
	    const encrypttxt =  AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)
	    Loading.showLoading()
	    bankApi.MoneyDeposit({data: data,key:login_info?.value?.key}).then((res) => {
            Loading.hideLoading()
	            console.log(res, "Deposit rrrrrrrrrrrrrr");
	            if (res.data.code == '1') {
	                instance.proxy.$message({ message: res?.data?.message, duration: 2 })
	                //globaljs.getUserInfo()
	                //depo_Dialog.value = false;
                    //localStorage.setItem('aa',res?.data?.data)
                    store.commit('pay/MoneyDeposit',res?.data?.data)
                    router.push('/moneyconfirm')
	            }
	        }).catch((e) => {
                Loading.hideLoading()
	            console.log(e.response, "ee");
	            instance.proxy.$message({ message: e.response?.data.message || '网络错误', duration: 2 })
	        })
	
}

const requestName = () => {
    if (realname.value == '') return instance.proxy.$message({ message: '请输入真实姓名', duration: 2 })
    if (!realname.value?.match(/^[\u4E00-\u9FFF\u3400-\u4DFF\uF900-\uFAFF]+$/g)) return instance.proxy.$message({ message: '只允许使用汉字', duration: 2 })
    if (token?.value) {
        let data = {
            "player": login_info?.value?.info?.username,
            "realname": realname.value
        }
        const encrypttxt =  AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

        userApi.BindRealName({data: data,key:login_info?.value?.key}).then((res) => {
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

function hideWord(w) {
    if (w?.length < 1) return w;
    return w?.substring(0, 1) + '*'.repeat(w?.length-1);
}



onMounted(() => {
    if (!token?.value) return router.push('/login')

    if (userValue?.value?.realname == '' || userValue?.value?.realname == undefined || userValue?.value?.realname == null) {
        depo_Dialog.value = true
    }
    return globaljs.getUserInfo()
})
</script>
  
<style scoped>
.input_foucs:focus-within {
    border: 0;
    outline: none;
    box-shadow: none;
}
.input_foucs:focus {
    outline: 0 !important;
    outline: none !important;
    border: 1px solid gray;
}
</style>