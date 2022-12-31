<template>
    <div class="hidden sm:block relative flex-auto mx-[19px]  ">
        <div class="main">
            <div class="main-content w-full relative">
                <div class="w-full tabs   border-b border-gray-800">
                    <div
                        class="text-base text-center py-1 cursor-pointer w-[180px] tracking-wider border-b border-[#eed0a4]">
                        {{ editAdd ? '修改取款账户' : '添加取款账户' }}
                    </div>
                </div>
                <!-- first step -->
                <section v-if="!verify" class="relative w-full bg-[#1f2129] my-2 py-[20px] px-[18px]">
                    <div class="absolute left-5 top-5 h-5 w-12">
                        <img src="@/assets/mobile/user/num11.webp" alt="" class="w-full h-full" loading="lazy">
                    </div>
                    <div class="py-5 flex flex-col justify-center items-center">
                        <div class="mb-[40px] flex space-x-3 items-center justify-center">
                            <div class=" py-2 rounded-full bg-slate-600 px-2 border-[#7e7e7e]">
                                <img src="@/assets/Phone.svg" alt="" class="w-10 h-10">
                            </div>
                            <span class="text-base text-white">为保障您的账号安全，请验证个人信息</span>
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
                                <div
                                    class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                                    <span class="absolute left-0 px-3 text-[#858585]">手机号</span>
                                    <input disabled :value="hideMiddle(userValue?.phone, 2, 2)" autocomplete="off"
                                        class=" input-name text-[#d0d0d0]   
                                                                        border-none outline-none focus:outline-none focus:border-none pl-16    
                                                                      w-full h-full text-sm" type="text">
                                </div>
                            </div>
                            <div
                                class="bg-[#13151b] my-2   formDiv relative overflow-hidden flex items-center mx-auto  h-14">
                                <div
                                    class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                                    <input v-model="phonecode" autocomplete="off" class=" input-name text-[#d0d0d0]   
                                                                        border-none outline-none focus:outline-none focus:border-none    
                                                                      w-full h-full" id="phonecode" pattern=""
                                        name="phonecode" placeholder="6位短信校验码" type="text" maxlength="6" min="6"
                                        max="6">
                                    <XIcon v-if="phonecode" @click="phonecode = ''"
                                        class="h-5 w-5 cursor-pointer  absolute right-28  ">
                                    </XIcon>
                                    <button :disabled="codeDisable" @click="getCode()"
                                        class="h-10 px-2 absolute right-2 whitespace-nowrap flex items-center justify-center cursor-pointer border border-solid border-[#eed0a4] ">{{
                                                codeMsg
                                        }}</button>
                                </div>
                            </div>
                            <section class="btn py-5">
                                <button @click="BindcheckCode"
                                    class="py-3 cursor-pointer text-base w-full btn_login text-center">
                                    提交验证
                                </button>
                            </section>
                        </section>
                    </div>
                </section>

                <!-- second step -->

                <section v-if="verify" class="relative w-full bg-[#1f2129] my-2 py-[20px] px-[18px]">
                    <div class="absolute left-5 top-5 h-5 w-12">
                        <img src="@/assets/mobile/user/num22.webp" alt="" class="w-full h-full" loading="lazy">
                    </div>
                    <div class="py-5 flex flex-col justify-center items-center">
                        <div class="mb-[40px] flex space-x-3 items-center justify-center"></div>
                        <section class="form w-[381px]">
                            <div
                                class="bg-[#13151b] my-3   formDiv relative overflow-hidden flex items-center mx-auto  h-14">
                                <div
                                    class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                                    <input v-model="bankcard" autocomplete="off" class=" input-name text-[#d0d0d0]   
                                                                        border-none outline-none focus:outline-none focus:border-none    
                                                                      w-full h-full" id="bankcard" pattern=""
                                        name="bankcard" placeholder="开户行名称" type="text" maxlength="17" min="6" max="6">
                                    <XIcon v-if="bankcard" @click="bankcard = ''"
                                        class="h-5 w-5 cursor-pointer  absolute right-5  ">
                                    </XIcon>

                                </div>
                            </div>
                            <div
                                class="bg-[#13151b] my-3   formDiv relative overflow-hidden flex items-center mx-auto  h-14">
                                <div
                                    class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                                    <input v-model="cardnumber" autocomplete="off" class=" input-name text-[#d0d0d0]   
                                                                        border-none outline-none focus:outline-none focus:border-none    
                                                                      w-full h-full" id="cardnumber" pattern=""
                                        name="cardnumber" placeholder="银行卡号" type="text" maxlength="17" min="6" max="6">
                                    <XIcon v-if="cardnumber" @click="cardnumber = ''"
                                        class="h-5 w-5 cursor-pointer  absolute right-5  ">
                                    </XIcon>

                                </div>
                            </div>
                            <div
                                class="bg-[#13151b] my-2   formDiv relative overflow-hidden flex items-center mx-auto  h-14">
                                <div
                                    class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                                    <span class="absolute left-0 px-3 text-[#858585]">手机号</span>
                                    <input disabled :value="hideWord(userValue?.realname)" autocomplete="off" class=" input-name text-[#d0d0d0]   
                                                                        border-none outline-none focus:outline-none focus:border-none pl-16    
                                                                      w-full h-full text-sm" type="text">
                                </div>
                            </div>
                            <p class="text-red-500 text-sm py-3">请使用户名 提*的名字进行添加取款户 名字不相同则无非添加。如需更改名字 请联系在线客服 客服地址</p>
                            <section class="btn py-5">
                                <button @click="editAdd ? editBankCard() : addBankCard()"
                                    class="py-3 cursor-pointer text-base w-full btn_login text-center">
                                    确定
                                </button>
                            </section>
                        </section>
                    </div>
                </section>
                <!--  -->
                <section v-if="moneyAddData?.length > 0 && verify"
                    class=" w-full mt-[12px] py-[20px] px-[18px] relative bg-[#1f2129]">
                    <div class="flex items-center justify-between pb-[11px] text-[#dedede] border-b border-[#282b30]">
                        <div class=" flex items-center space-x-2 ">
                            <img src="@/assets/pc/Home/depo11.webp" alt="" class="w-6">
                            <p class="text-[#d0d0d0] ">添加银行卡</p>
                        </div>
                        <div class="text-[13px] text-[#a5a8b2]">
                            数量 ({{ moneyAddData?.length || 0 }} / 5)
                        </div>
                    </div>
                    <section class=" w-full">
                        <div class=" mb-2 px-5 w-full flex flex-wrap justify-start   py-2">
                            <div v-for="bank in moneyAddData" :key="bank.id"
                                class="flex  bg-[#393b42] py-2 mr-3 mb-3 px-2 items-center w-[300px] justify-between">
                                <div class=" space-x-2">
                                    <span> {{ bank?.ma_address }}</span>
                                    <span>({{ hideWord(bank?.ma_id) }})</span>
                                </div>
                                <div @click="editAddress(bank)" class="text-red-600 cursor-pointer tracking-wider ">编辑
                                </div>
                            </div>

                        </div>
                    </section>
                </section>
            </div>
        </div>
    </div>

    <!-- dialog -->
    <NotCloseDialog :show="depo_Dialog" @close="depo_Dialog = false">
        <div class="w-[500px] min-w-[300px]   py-10 text-white px-3  ">
            <p class="text-center text-xl">提示</p>
            <div class="w-full  py-3 text-center">
                <p class="text-sm text-[#7e7e7e]">人民币存款前请实名认证，并只用该实名账户存取款。</p>
                <p class="text-[#ff1818] text-sm">注：实名不可随意更改，如需变更请联系在线客服。</p>
            </div>
            <div class="w-full h-12 bg-[#13151b] my-2">
                <form @click.prevent>
                    <input v-model="realname" type="text" placeholder="真实姓名" name="username" id="usr" class="w-full focus:border-none  focus:outline-0 focus:shadow-none 
                    bg-transparent h-12 outline-0 border-none  focus-within:outline-0 focus-within:shadow-none">
                </form>
            </div>
            <div class="flex justify-end w-full items-center text-[#858585]">
                若姓名包含
                <span class="text-[#e74747] text-xl mx-2 -mt-2">.</span>
                请点
                <span class="text-[#eed0a4]">复制</span>
                <span>后粘贴</span>
            </div>
            <div class="flex pt-5 items-center w-full  justify-evenly px-3">
                <router-link to="/" class="btn flex items-center justify-center 
          btn-outline  h-[50px]  border border-solid 
                              border-[#eed0a4] cursor-pointer px-16  whitespace-nowrap
                              ">
                    取消
                </router-link>
                <div @click="requestName" class="btn flex cursor-pointer px-16 whitespace-nowrap 
           items-center justify-center text-[#272c33] text-center  btn-primary  h-[50px]  
              ">
                    确认
                </div>
            </div>
        </div>
    </NotCloseDialog>
</template>

<script setup>
import { XIcon } from "@heroicons/vue/solid";
import { useRouter } from 'vue-router';
import { ref, reactive, onMounted, computed } from 'vue'
import NotCloseDialog from "@/components/NotCloseDialog.vue";
import { getCurrentInstance } from 'vue';
import globaljs from '@/utils/global'
import { useStore } from "vuex";
import userApi from "@/network/user.js";
import bankApi from "@/network/bank.js";
import Loading from "@/utils/loader";
import AES from '@/utils/aes';

const instance = getCurrentInstance()
const moneyAddData = ref(null)

const store = useStore()
const router = useRouter()
const activeBank = ref(0)
const amount = ref('200')
const phonecode = ref('')

const depo_Dialog = ref(false)
const codeDisable = ref(false)
const codeMsg = ref('获取校验码')
const timer = ref(null)
const countdown = ref(60)
const realname = ref('')
const verify = ref(false)
const editAdd = ref(false) /// edit address
const bankId = ref('')//when user click on edit button then use


const bankcard = ref('')
const cardnumber = ref('')



const money = ref(["200", "500", "1000", "3000", "5000", "10000"])
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

const clickBank = (n) => {
    activeBank.value = n
    console.log(activeBank.value);
}



function getCode() {
    if (userValue.value?.realname == '' || userValue.value?.realname == undefined) {
        depo_Dialog.value = true
        return instance.proxy.$message({ message: '请先绑定实名', duration: 2 })
    }
    if (userValue.value?.user_level < 1) return instance.proxy.$message({ message: '账号未充值', duration: 2 })//userlevel must be greater than 1
    getValidStr()
}


const getValidStr = () => {

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
        "type": 9,
        "player": userValue.value?.username,
        "phone": userValue.value?.phone,
    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

    userApi.GetSmsCode({ data: data, key: login?.value?.key }, userValue.value?.id).then((res) => {
        console.log(res, "sms code");
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


const BindcheckCode = () => {

    if (userValue.value?.realname == '' || userValue.value?.realname == undefined) {
        depo_Dialog.value = true
        return instance.proxy.$message({ message: '请先绑定实名', duration: 2 })
    }
    if (phonecode.value == '') return instance.proxy.$message({ message: '请输入所有字段', duration: 2 })
    if (userValue.value?.user_level < 1) return instance.proxy.$message({ message: '账号未充值', duration: 2 })//userlevel must be greater than 1


    let data = {
        "phone": userValue?.value?.phone,
        "type": 9,//BindBankAddress
        "code": phonecode.value,
        "player": userValue.value?.username,
    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

    Loading.showLoading()
    userApi.CheckCode({ data: data }).then((res) => {
        Loading.hideLoading()
        if (res.data.code == '1') {
            phonecode.value = ''
            verify.value = true
            clearTimeout(timer.value)
            codeMsg.value = "获取校验码";
            codeDisable.value = false
            countdown.value = 60;
            console.log(res, "CheckCode resp ********");
            instance.proxy.$message({ message: res?.data?.message, duration: 2 })
        }
    }).catch((err) => {
        Loading.hideLoading()
        console.log(err.response.data.message);
        return instance.proxy.$message({ message: err.response?.data?.message, duration: 2 })
    })
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

const editAddress = (bank) => {
    console.log(bank);
    editAdd.value = true
    bankcard.value = bank?.ma_address
    cardnumber.value = bank?.ma_id
    bankId.value = bank?.id
}

const editBankCard = () => {
    if (cardnumber.value === ''
        || bankcard.value === ''
    )
        return instance.proxy.$message({ message: '请输入所有字段', duration: 2 })
    if (!bankcard.value?.match(/^[\u4E00-\u9FFF\u3400-\u4DFF\uF900-\uFAFF]+$/g)) return instance.proxy.$message({ message: '输入格式有问题', duration: 2 })

    let data = {
        "player": userValue.value?.username,
        "type": 'BANK',
        "ad_id": cardnumber.value,
        "ad_name": userValue.value?.realname,
        "ad_address": bankcard.value,
        "ad_more": '',
        "id": bankId.value
    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

    Loading.showLoading()
    bankApi.EditMoneyAddress({ data: data, key: login?.value?.key }).then((res) => {
        Loading.hideLoading()
        if (res.data.code == '1') {
            console.log(res, "EditMoneyAddress from bank resp ********");
            GetMoneyAddress()
            instance.proxy.$message({ message: res?.data?.message, duration: 2 })
            editAdd.value = false // 
            cardnumber.value = ''
            enter_realname.value = ''
            bankcard.value = ''

        } else {
            instance.proxy.$message({ message: res?.data.message, duration: 2 })
        }
    }).catch((err) => {
        Loading.hideLoading()
        console.log(err);
        instance.proxy.$message({ message: err.response?.data?.message, duration: 2 })
    })
}

const addBankCard = () => {

    let data = {
        "player": userValue.value?.username,
        "type": 'BANK',
        "ad_id": cardnumber.value,
        "ad_name": userValue.value?.realname,
        "ad_address": bankcard.value,
        "ad_more": ''
    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

    if (cardnumber.value === ''
        || bankcard.value === ''
    )
        return instance.proxy.$message({ message: '请输入所有字段', duration: 2 })
    if (userValue.value?.user_level < 1) return instance.proxy.$message({ message: '账号未充值', duration: 2 })
    if (!bankcard.value?.match(/^[\u4E00-\u9FFF\u3400-\u4DFF\uF900-\uFAFF]+$/g)) return instance.proxy.$message({ message: '输入格式有问题', duration: 2 })

    Loading.showLoading()
    bankApi.SetBankAddress({ data: data, key: login?.value?.key }).then((res) => {
        Loading.hideLoading()
        if (res.data.code == '1') {
            console.log(res, "addBankCard from bank resp ********");
            instance.proxy.$message({ message: res?.data.message, duration: 2 })
            GetMoneyAddress()
            cardnumber.value = ''
            enter_realname.value = ''
            bankcard.value = ''
        }
    }).catch((err) => {
        Loading.hideLoading()
        console.log(err.response.data.message);
        instance.proxy.$message({ message: err.response.data.message, duration: 2 })
    })
}

const GetMoneyAddress = () => {
    if (token?.value) {
        let data = {
            "player": login?.value?.info?.username,
            "type": 'BANK'
        }
        const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

        bankApi.GetMoneyAddress({ data: data, key: login?.value?.key }).then((res) => {
            if (res.data.code == '1') {
                console.log("res of GetMoneyAddress data", res);
                moneyAddData.value = res?.data?.data
            }
        }).catch((e) => {
            console.log(e);
        })
    }
}

onMounted(() => {
    if (!token?.value) return router.push('/login')

    if (userValue?.value?.realname == '' || userValue?.value?.realname == undefined || userValue?.value?.realname == null) {
        depo_Dialog.value = true
    }
    GetMoneyAddress()
    globaljs.getUserInfo()
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