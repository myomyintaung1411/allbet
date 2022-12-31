<template>
  <div class="w-full min-w-[800px] h-auto bg-[#171a21]   relative sm:flex-auto sm:mx-[19px] sm:bg-[#1f2129]">

    <div class="w-full tabs   border-b border-gray-800">
      <div class="text-base text-center py-3 cursor-pointer w-[100px] tracking-wider border-b border-[#eed0a4]">
        问题反馈
      </div>
    </div>

    <section
      class=" max-w-md w-[448px] mx-auto flex justify-center flex-col mt-20 text-[#7e7e7e] text-[18px] tracking-wider pt-5">
      <div class="py-2">
        <div @click="feedbackDialog = true"
          class="px-3 py-5 bg-[#13151b] flex items-center cursor-pointer justify-between">
          <div class="pl-4">问题类型</div>
          <div class="flex items-center">
            <p class="text-[18px] text-[#d0d0d0]">{{ feetxt || '' }}</p>
            <ChevronRightIcon class="w-7 h-7"></ChevronRightIcon>
          </div>
        </div>
      </div>
      <div v-if="feedbackDialog" class=" z-10  w-[300px] overflow-y-hidden bg-[rgba(0,0,0,0.72)] ">
        <div class="px-5 w-[448px]  fixed flex flex-col items-center justify-center z-20  bg-[rgba(0,0,0,0.72)]">
          <div v-for="(tet, n) in feedData" :key="n" @click="clickDialog(tet.title, tet.id)"
            class="flex border-b border-[#202330] 
            items-center text-center text-[18px] cursor-pointer text-[#d0d0d0] justify-center py-3 bg-[#272c33] px-2 w-full">
            {{ tet.title }}
          </div>
          <div @click="feedbackDialog = false"
            class="flex cursor-pointer items-center py-3 my-3 text-center text-[18px] justify-center bg-[#272c33] px-2 w-full">
            取消
          </div>
        </div>
      </div>
      <div class="py-1">
        <div class="px-3 py-3 bg-[#13151b] w-full flex items-center justify-between">
          <form @click.prevent class="w-full ">
            <input v-model="phone" max="11" min="11" maxlength="11" type="tel" placeholder="手机号码"
              class="
                w-full bg-transparent text-[#d0d0d0] input-name border-none outline-none placeholder:text-[#7e7e7e] placeholder:text-[18px]">
          </form>
        </div>
      </div>
      <div class="pt-1">
        <div class="px-3 py-3 bg-[#13151b] w-full ">
          <div class="pl-4">反馈内容</div>

        </div>
        <div class=" px-6">
          <div class="h-[1px] w-full bg-[#202330]"></div>
        </div>
      </div>
      <div class="px-3  w-full bg-[#13151b]">
        <textarea v-model="textarea" placeholder="请简要输入您的问题和建议"
          class=" text-[#d0d0d0]   w-full bg-transparent h-32 px-4   outline-none border-none input-name placeholder:text-[#7e7e7e] placeholder:text-[18px]"></textarea>
      </div>

      <div class="py-7 w-full px-0">
        <button @click="reqData" class="w-full btn_login text-[18px] py-4">
          提交
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/outline";
import { useRouter } from 'vue-router';
import Loading from "@/utils/loader";
import userApi from "@/network/user.js";
import { useStore } from "vuex";
import { ref, onMounted, computed } from 'vue'
import { getCurrentInstance } from 'vue';
import AES from '@/utils/aes';

const instance = getCurrentInstance()

const router = useRouter()
const store = useStore()
const feedbackDialog = ref(false)
const feetxt = ref('')
const questionType = ref('')
const textarea = ref('')
const phone = ref('')

const feedData = ref([
  {
    title: '存款',
    id: 1,
  },
  {
    title: '取款',
    id: 2,
  },
  {
    title: '优惠',
    id: 3,
  },
  {
    title: '投诉',
    id: 4,
  },
  {
    title: '其他',
    id: 5,
  },
])

const clickDialog = (txt, type) => {
  feetxt.value = txt
  questionType.value = type
  feedbackDialog.value = false
}

const goUser = () => {
  router.go(-1)
}
const token = computed(() => store.getters["user/LToken"]);
const userValue = computed(() => store.getters["user/USERINFO"]);
const gameEn = computed(() => store.getters["app/GameEn"]);

const reqData = () => {
  if (textarea.value == '' || phone.value == '' || questionType.value == '') return instance.proxy.$message({ message: '请输入所有字段', duration: 2 })
  // if (
  //   !/^((1[3,5,8,7,9][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(
  //     phone.value
  //   )
  // ) {
  //   return instance.proxy.$message({ message: '手机号码格式不对', duration: 2 })
  // }

  if (token?.value) {
    let data = {
      "player": userValue.value?.username,
      "feedback": textarea.value,
      "phone": phone.value,
      "question_type": questionType.value
    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

    Loading.showLoading()

    userApi.RequestFeedback({ data: data }).then((res) => {
      Loading.hideLoading()
      if (res.data.code == '1') {
        console.log("res of GetMoneyAddress data", res);
        instance.proxy.$message({ message: res?.data?.message, duration: 2 })
        router.push('/')
      }
    }).catch((e) => {
      Loading.hideLoading()
      console.log(e);
    })
  }

}

onMounted(() => {
  if (!token?.value) return router.push('/login')
})
</script>

<style scoped>

.input-name:focus-within {
    border: 0;
    outline: none;
    box-shadow: none;
}

.input-name::-webkit-resizer {
    display: none;
}
</style>
