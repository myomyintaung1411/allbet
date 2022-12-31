<template>
    <div class="hidden sm:block relative flex-auto mx-[19px] bg-[#1f2129]">
        <div class="main">
            <div class="main-content w-full relative">
                <div
                    class="w-full py-5 tabs flex items-center justify-between space-x-5   border-b border-[#7e7e7e] border-dashed">
                    <!-- bind phone -->
                    <div v-if="userValue?.is_set_phone == 0" @click="clickTab(0)"
                        class="text-base link_phone text-center py-1 cursor-pointer w-[120px] tracking-wider "
                        :class="activeTab == 0 ? 'border-b border-[#eed0a4]' : 'text-[#7e7e7e]'">
                        绑定手机号
                    </div>
                    <!-- change phone -->
                    <div v-if="userValue?.is_set_phone == 1" @click="clickTab(1)"
                        class="text-base link_phone text-center py-1 cursor-pointer w-[120px] tracking-wider "
                        :class="activeTab == 1 ? 'border-b border-[#eed0a4]' : 'text-[#7e7e7e]'">
                        更改手机号
                    </div>
                    <!-- change login pass -->
                    <div v-if="userValue?.user_type == 1 || userValue?.user_type == 4" @click="clickTab(2)"
                        class="text-base modified_pass text-center py-1 cursor-pointer w-[120px] tracking-wider "
                        :class="activeTab == 2 ? 'border-b border-[#eed0a4]' : 'text-[#7e7e7e]'">
                        登录密码修改
                    </div>
                    <!-- set withdraw pass -->
                    <div v-if="userValue?.is_set_cash_password == 0" @click="clickTab(3)"
                        class="text-base set_withdraw_pass text-center py-1 cursor-pointer w-[120px] tracking-wider "
                        :class="activeTab == 3 ? 'border-b border-[#eed0a4]' : 'text-[#7e7e7e]'">
                        设置取款密码
                    </div>
                    <!-- edit withdraw pass -->
                    <div v-if="userValue?.is_set_cash_password == 1" @click="clickTab(4)"
                        class="text-base payment_password text-center py-1 cursor-pointer w-[120px] tracking-wider "
                        :class="activeTab == 4 ? 'border-b border-[#eed0a4]' : 'text-[#7e7e7e]'">
                        修改取款密码
                    </div>
                    <div v-if="userValue?.user_type == 2" @click="clickTab(5)"
                        class="text-base freeze_acc text-center py-1 cursor-pointer w-[120px] tracking-wider "
                        :class="activeTab == 5 ? 'border-b border-[#eed0a4]' : 'text-[#7e7e7e]'">
                        设定登录密码
                    </div>
                    <div @click="clickTab(6)"
                        class="text-base freeze_acc text-center py-1 cursor-pointer w-[120px] tracking-wider "
                        :class="activeTab == 6 ? 'border-b border-[#eed0a4]' : 'text-[#7e7e7e]'">
                        个人资料
                    </div>
                </div>


                <SetPhonenum v-if="activeTab == 0 && userValue?.is_set_phone == 0"></SetPhonenum>
                <ChangePhoneNum v-if="activeTab == 1 && userValue?.is_set_phone == 1"></ChangePhoneNum>
                <changePass v-if="activeTab == 2 && (userValue?.user_type == 1 || userValue?.user_type == 4)">
                </changePass>
                <SetPassword v-if="activeTab == 5 && userValue?.user_type == 2"> </SetPassword>
                <SetMoneyPassword v-if="activeTab == 3 && userValue?.is_set_cash_password == 0"></SetMoneyPassword>
                <ChangeMoneyPassword v-if="(activeTab == 4 && userValue?.is_set_cash_password == 1)">
                </ChangeMoneyPassword>
                <SecurityInfo v-if="activeTab == 6"></SecurityInfo>


            </div>
        </div>
        <!-- {{activeTab}} -->
    </div>
</template>
  
<script setup>
import { ref, onMounted, computed } from 'vue'
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import changePass from "../changePass.vue";
import SetMoneyPassword from "../SetMoneyPassword.vue";
import SetPhonenum from "../SetPhoneNum.vue";
import ChangeMoneyPassword from "../ChangeMoneyPassword.vue";
import globaljs from '@/utils/global'
import ChangePhoneNum from "../ChangePhoneNum.vue";
import SetPassword from "../SetPassword.vue";
import SecurityInfo from "../SecurityInfo.vue";


import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance()
const store = useStore()
const router = useRouter()
const activeTab = ref(0)
const userValue = computed(() => store.getters["user/USERINFO"]);
const token = computed(() => store.getters["user/LToken"]);



const goUser = () => {
    router.go(-1)
}

const clickTab = (number) => {
    activeTab.value = number
    switch (number) {
        case 3:
            if (userValue?.value?.is_set_phone == 1) {
                activeTab.value = 3
            } else {
                instance.proxy.$message({ message: '为了您的账户安全，请先绑定手机号。', duration: 2 })
                activeTab.value = 0
            }
            break;
        case 4:
            if (userValue?.value?.is_set_phone == 1) {
                activeTab.value = 4
            } else {
                instance.proxy.$message({ message: '为了您的账户安全，请先绑定手机号。', duration: 2 })
                activeTab.value = 0
            }
            break;

        default:
            break;
    }
}

const getUserInfo = () => {
    return globaljs.getUserInfo()
}
onMounted(() => {
    getUserInfo()
    if (!token.value) {
        router.push('/login')
    }
    if (userValue.value?.is_set_phone == 0) {
        activeTab.value = 0
    } else {
        activeTab.value = 1
    }

})

</script>
  