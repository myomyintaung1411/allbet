<template>
  <div class="w-full h-auto  bg-[#171a21] relative">
    <div class="h-[60px]  w-full text-gray-200   px-2 flex justify-between items-center">
      <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
      <p class=" text-[17px]"> 交易记录 </p>
      <div @click="goService">

        <img src="@/assets/mobile/home/service.png" alt="" class="w-8 h-7">
      </div>
    </div>
    <!-- 
    <div v-if="recordData?.list?.length > 10" class="flex items-center justify-center">
            <Paginate v-model="pageNum" :page-count="Math.ceil(total / pageSize)"
                :page-range="3" :margin-pages="1" :click-handler="clickCallback" :prev-text="'上一页'" :next-text="'下一个'"
        :last-button-text	="'最后'" :first-button-text = "'第一'"
                :container-class="'pagination'" :hide-prev-next="true" :page-class="'page-item'"
                :first-last-button="true" class="flex items-center space-x-4" :no-li-surround="true"
                :page-link-class="'page-link'" :active-class="'active-class'">

            </Paginate>
        </div> -->
    <div class="flex justify-between px-10 py-2 w-full">
      <div @click="Tabclick(0)" class=" tracking-wide py-1 "
        :class="activeTab == 0 ? 'text-[#aaa9a9] border-b-[3px] py-1 border-[#bc6013]' : 'text-white'">取款</div>
      <div @click="Tabclick(1)" class=" tracking-wide  py-1 "
        :class="activeTab == 1 ? 'text-[#aaa9a9] border-b-[3px] py-1 border-[#bc6013]' : 'text-white'">存款</div>
      <div @click="Tabclick(2)" class=" tracking-wide  py-1 "
        :class="activeTab == 2 ? 'text-[#aaa9a9] border-b-[3px] py-1 border-[#bc6013]' : 'text-white'">洗码</div>
      <div @click="Tabclick(3)" class=" tracking-wide  py-1 "
        :class="activeTab == 3 ? 'text-[#aaa9a9] border-b-[3px]  border-[#bc6013]' : 'text-white'">优惠</div>
    </div>

    <section class="py-4 w-full flex justify-between items-center px-5 border-b border-[#7e7e7e] ">
      <div @click="clickDate(1)" :class="activeDate == 1 ? 'text-white' : 'text-[#aaa9a9]'" class=" text-sm">今天</div>
      <div @click="clickDate(2)" :class="activeDate == 2 ? 'text-white' : 'text-[#aaa9a9]'" class=" text-sm">7天</div>
      <div @click="clickDate(3)" :class="activeDate == 3 ? 'text-white' : 'text-[#aaa9a9]'" class=" text-sm">15天</div>
      <div @click="clickDate(4)" :class="activeDate == 4 ? 'text-white' : 'text-[#aaa9a9]'" class=" text-sm">30天</div>
      <div @click="request()" class="px-2 py-1 border border-[#dd6e13] text-[#dd6e13]">刷新记录</div>
    </section>
    <section v-if="activeTab == 0 || activeTab == 1" class="py-3 w-full relative  ">
      <div v-for="record in recordData" :key="record.id" class="border-b border-[#7e7e7e] px-5">
        <div class="py-2 flex items-center w-full justify-between text-[#aaa9a9] ">
          <!-- <div>10:20</div> -->
          <div v-html="dateTime(record?.created_at)" class=" text-ellipsis  overflow-hidden max-w-[50px]"></div>
          <div class="flex flex-col items-center justify-center text-white">
            <h1>{{ record?.amount }} 元</h1>
            <p>{{ record?.type_name }}</p>
            <p>{{ record?.sn }}</p>
          </div>
          <div class="flex flex-col items-center justify-center text-white">
            <!-- <h1>{{washStatus(record?.status)}}</h1> -->
            <p class=" text-[16px]" :class="record?.status == 0 ? 'text-red-500' : record?.status == 1 ? 'text-green-500' : 'text-[#ffc179]'">{{washStatus(record?.status)}}</p>
          </div>
        </div>
      </div>
      <!-- pagination -->
      <div v-if="total > pageSize" class="flex items-center justify-center mt-[30px] ">
        <Paginate v-model="pageNum" :page-count="Math.ceil(total / pageSize)" :page-range="3" :margin-pages="1"
          :click-handler="clickCallback" :prev-text="'上一页'" :next-text="'下一个'" :last-button-text="'最后'"
          :first-button-text="'第一'" :container-class="'pagination'" :hide-prev-next="true" :page-class="'page-item'"
          :first-last-button="true" class="flex items-center space-x-4" :no-li-surround="true"
          :page-link-class="'page-link'" :active-class="'active-class'">

        </Paginate>
      </div>

    </section>
    <section v-if="activeTab == 2" class="py-3 w-full relative  ">
      <div v-for="record in washrecordData" :key="record.id" class="border-b border-[#7e7e7e] px-5">
        <div class="py-2 flex items-center w-full justify-between text-[#aaa9a9] ">
          <!-- <div>10:20</div> -->
          <div v-html="dateTime(record?.created_at)" class=" text-ellipsis  overflow-hidden max-w-[50px]"></div>
          <div class="flex flex-col items-center justify-center text-white">
            <h1>{{ record?.request_amount }} 元</h1>
            <p>{{ record?.type }}</p>
            <!-- <p>{{ record?.sn }}</p> -->
          </div>
          <div class="flex flex-col items-center justify-center text-white">
            <!-- <h1>35:24</h1> -->
            <p class=" text-[16px]"
            :class="record?.status == 0 ? 'text-red-500' : record?.status == 1 ? 'text-green-500' : 'text-[#ffc179]'"
            >{{ washStatus(record?.status) }}</p>
          </div>
        </div>
      </div>
      <!-- pagination -->
      <div v-if="total > pageSize" class="flex items-center justify-center mt-[30px]  ">
        <Paginate v-model="pageNum" :page-count="Math.ceil(total / pageSize)" :page-range="3" :margin-pages="1"
          :click-handler="clickCallback" :prev-text="'上一页'" :next-text="'下一个'" :last-button-text="'最后'"
          :first-button-text="'第一'" :container-class="'pagination'" :hide-prev-next="true" :page-class="'page-item'"
          :first-last-button="true" class="flex items-center space-x-4" :no-li-surround="true"
          :page-link-class="'page-link'" :active-class="'active-class'">

        </Paginate>
      </div>

    </section>
  </div>
</template>

<script setup>
import bankApi from "@/network/bank.js";
import allApi from "@/network/allApi.js";
import AES from '@/utils/aes';
import Loading from "@/utils/loader";
import { useRouter, useRoute } from 'vue-router';
import { useStore } from "vuex";
import { ref, onMounted, computed, reactive } from 'vue'
import { XIcon, UserIcon, LockClosedIcon, EyeIcon, LibraryIcon, DocumentTextIcon, EyeOffIcon, ChevronLeftIcon, SelectorIcon, CheckIcon, SearchIcon, ViewGridAddIcon } from "@heroicons/vue/outline";
import moment from 'moment'
import Paginate from "vuejs-paginate-next";

const router = useRouter()
const route = useRoute()
const store = useStore()
const recordData = ref(null)
const washrecordData = ref(null)
const pageNum = ref(1)
const pageSize = ref(10)
const total = ref(0)
const req_type = ref(0) //1 is deposit and 0 is withdraw

const activeTab = ref(0)
const activeDate = ref(1)
const range = reactive({
  start: new Date(),
  end: new Date(),
});

const masks = reactive({
  input: "YYYY/MM/DD",
});
const login_info = computed(() => store.getters["user/LOGIN"]);
const token = computed(() => store.getters["user/LToken"]);
const userValue = computed(() => store.getters["user/USERINFO"]);
const gameEn = computed(() => store.getters["app/GameEn"]);

const Tabclick = (number) => {
  activeTab.value = number
  recordData.value = null //reset data
  washrecordData.value = null//reset data
  pageNum.value = 1 //reset pagination
  pageSize.value = 10 //reset pagination
  total.value = 0 //reset pagination
  switch (number) {
    case 0: //withdraw
      req_type.value = 0
      GetUpDownRecord()
      break;
    case 1: //deposit
      req_type.value = 1
      GetUpDownRecord()
      break;
    case 2: 
    WashRecord()
      break;

    default:
      break;
  }


}

const goService = () => {
  if (token?.value) {
    window.open(`http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293&nick_name=${userValue?.value.username}`)
  } else {
    window.open('http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293')
  }
}

const washStatus = (status) => {
  if(status == 0) return '拒绝'
  if(status == 1) return '接受'
  if(status == 2) return '等待'
}

const goUser = () => {
  router.push('/user')
}

const updateDate = (r) => {
  range.start = r.start;
  range.end = r.end;
};

const dateTime = (time) => {
  time = moment(new Date(time)).format("MM-DD HH:mm")
  return time
}

const clickCallback = (pageNum) => {
  console.log(pageNum, "from click callback");

  request()
}

//call date today , last 7 , last 15 and last month
const clickDate = (num) => {
  activeDate.value = num
  recordData.value = null //reset data
  washrecordData.value = null//reset data
  pageNum.value = 1 //reset pagination
  pageSize.value = 10 //reset pagination
  total.value = 0 //reset pagination
  switch (num) {
    case 1:
      range.start = new Date()
      range.end = new Date()
      break;
    case 2:
      range.start = moment().subtract(7, 'd').format('YYYY-MM-DD HH:mm:ss');
      range.end = new Date()
      break;
    case 3:
      range.start = moment().subtract(15, 'd').format('YYYY-MM-DD HH:mm:ss');
      range.end = new Date()
      break;
    case 4:
      range.start = moment().subtract(30, 'd').format('YYYY-MM-DD HH:mm:ss');
      range.end = new Date()
      break;

    default:
      break;
  }
  // GetUpDownRecord()
  request() //call data base on tab
}



const GetUpDownRecord = () => {
  let startTime_ = moment(new Date(range.start)).startOf('day').format("YYYY-MM-DD HH:mm:ss");
  let endTime_ = moment(new Date(range.end)).endOf('day').format("YYYY-MM-DD HH:mm:ss");
  let data = {
    "player": login_info?.value?.info?.username,
    "pageNum": pageNum.value,
    "pageSize": pageSize.value,
    startDate: startTime_,
    endDate: endTime_,
    type: req_type.value // 1 is depo and 0 is withdraw
  }
  const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

  Loading.showLoading()

  allApi.GetUpDownRecord({ data: data, key: login_info?.value?.key, }).then((res) => {
    Loading.hideLoading()
    if (res.data.code == '1') {
      console.log("res of getupdown record data", res);
      recordData.value = res.data?.data?.list
      total.value = res.data?.data?.total
    }
  }).catch((e) => {
    console.log(e);
    Loading.hideLoading()
  })
}

const WashRecord = () => {
  let startTime_ = moment(new Date(range.start)).startOf('day').format("YYYY-MM-DD HH:mm:ss");
  let endTime_ = moment(new Date(range.end)).endOf('day').format("YYYY-MM-DD HH:mm:ss");
  let data = {
    "player": login_info?.value?.info?.username,
    "pageNum": pageNum.value,
    "pageSize": pageSize.value,
    startDate: startTime_,
    endDate: endTime_,
  }
  Loading.showLoading()

  allApi.GetWashRecord({ data: data, key: login_info?.value?.key, }).then((res) => {
    Loading.hideLoading()
    if (res.data.code == '1') {
      console.log("res of GetWashRecord data", res);
      washrecordData.value = res.data?.data?.list
      total.value = res.data?.data?.total
    }
  }).catch((e) => {
    console.log(e);
    Loading.hideLoading()
  })
}

const request = () => {
  if (activeTab.value == 0 || activeTab.value == 1) {
    GetUpDownRecord()
  }

  if (activeTab.value == 2) {
    WashRecord()
  }
}




onMounted(() => {
  if (!token?.value) return router.push('/login')
  //activeTab.value = route.query?.type //0 withdraw 1, deposit
  GetUpDownRecord()
})


</script>