<template>
    <div class="hidden sm:block relative flex-auto mx-[19px] sm:h-auto ">
        <!-- <div v-if="recordData?.list?.length > 10" class="flex items-center justify-center">
            <Paginate v-model="pageNum" :page-count="Math.ceil(total / pageSize)" :page-range="3" :margin-pages="1"
                :click-handler="clickCallback" :prev-text="'上一页'" :next-text="'下一个'" :last-button-text="'最后'"
                :first-button-text="'第一'" :container-class="'pagination'" :hide-prev-next="true"
                :page-class="'page-item'" :first-last-button="true" class="flex items-center space-x-4"
                :no-li-surround="true" :page-link-class="'page-link'" :active-class="'active-class'">

            </Paginate>
        </div> -->

        <div class="w-full tabs flex items-center justify-between   border-b border-gray-800">
            <div @click="Tabclick(0)" class="text-base text-center py-2 cursor-pointer w-[120px] tracking-wider "
                :class="(activeTab == 0 ? 'border-b border-[#eed0a4]' : 'text-[#a6a6a6]')">
                取款
            </div>
            <div @click="Tabclick(1)" class="text-base text-center py-2 cursor-pointer w-[120px] tracking-wider "
                :class="(activeTab == 1 ? 'border-b border-[#eed0a4]' : 'text-[#a6a6a6]')">
                存款
            </div>
            <div @click="Tabclick(2)" class="text-base text-center py-2 cursor-pointer w-[120px] tracking-wider "
                :class="(activeTab == 2 ? 'border-b border-[#eed0a4]' : 'text-[#a6a6a6]')">
                洗码
            </div>
            <div @click="Tabclick(3)" class="text-base text-center py-2 cursor-pointer w-[120px] tracking-wider "
                :class="(activeTab == 3 ? 'border-b border-[#eed0a4]' : 'text-[#a6a6a6]')">
                优惠
            </div>
        </div>

        <section class="my-2 w-full bg-[#1f2129] flex items-center justify-between ">
            <div class=" h-[60px] flex  justify-center items-center  relative">
                <v-date-picker locale="zh" v-model="range" :masks="masks" is-range :min-date="minDate()"
                    :max-date="new Date()" @drag="updateDate($event)">
                    <template v-slot="{ inputValue, inputEvents }">
                        <div class="flex justify-center items-center text-black">
                            <input :value="inputValue.start" v-on="inputEvents.start"
                                class="border px-2 py-2 w-40 rounded focus:outline-none focus:border-indigo-300" />
                            <svg class="w-4 h-4 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                            <input :value="inputValue.end" v-on="inputEvents.end"
                                class="border px-2 py-2 w-40 rounded focus:outline-none focus:border-indigo-300" />
                        </div>
                    </template>
                </v-date-picker>
            </div>
            <div class="flex items-center space-x-2 px-5">
                <div @click="request"
                    class="text-center w-[109px] h-[42px] flex justify-center items-center border border-[#c15410] text-white">
                    查询</div>
                <!-- <div class="text-center w-[109px] h-[42px] flex justify-center items-center btn-primary text-white">批量删除</div> -->
            </div>
        </section>

        <section v-if="activeTab == 0 || activeTab == 1" class="mt-2 w-full bg-[#1f2129] h-[755px]">
            <div class="overflow-auto h-[650px] ">
                <table class="w-full min-w-full text-[#a6a6a6]">
                    <thead class="border-b border-[#333]">
                        <tr>
                            <th scope="col" class="text-[15px] font-medium w-[150px]    py-4  ">
                                存款时间
                            </th>
                            <th scope="col" class="text-[15px] font-medium w-[180px]   py-4 ">
                                订单号
                            </th>
                            <th scope="col" class="text-[15px] font-medium   py-4 ">
                                存款类型

                            </th>
                            <th scope="col" class="text-[15px] font-medium    py-4 ">
                                存款状态

                            </th>
                            <th scope="col" class="text-[15px] font-medium    py-4 ">
                                金额 | 明细
                            </th>
                            <th scope="col" class="text-[15px] font-medium   py-4 ">
                                操作
                            </th>

                        </tr>
                    </thead>

                    <tbody >
                        <tr v-for="record in recordData" :key="record.id" class=" border-b border-[#333]">
                            <td class="text-[13px] font-medium w-[150px] text-center py-3">
                                {{dateTime(record?.created_at)}}
                            </td>
                            <td class="text-[13px] font-medium w-[180px] text-center py-2">
                                {{ record?.sn }}
                            </td>
                            <td class="text-[13px] font-medium text-center py-2">
                                {{record?.type_name}}
                            </td>
                            <td class="text-[13px] font-medium text-center py-2 "
                            :class="record?.status == 0 ? 'text-red-500' : record?.status == 1 ? 'text-green-500' : 'text-[#c15410]'"
                            >
                                {{washStatus(record?.status)}}
                            </td>
                            <td class="text-[13px] font-medium text-center py-2 ">
                                ￥{{ record?.amount }}
                            </td>
                            <td class="text-[13px] font-medium text-center py-2">
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- pagination -->
            <div v-if="total > pageSize"  class="flex items-center justify-center">
                <Paginate v-model="pageNum" :page-count="Math.ceil(total / pageSize)" :page-range="3" :margin-pages="1"
                    :click-handler="clickCallback" :prev-text="'上一页'" :next-text="'下一个'" :last-button-text="'最后'"
                    :first-button-text="'第一'" :container-class="'pagination'" :hide-prev-next="true"
                    :page-class="'page-item'" :first-last-button="true" class="flex items-center space-x-4"
                    :no-li-surround="true" :page-link-class="'page-link'" :active-class="'active-class'">

                </Paginate>
            </div>
        </section>

        <section v-if="activeTab == 2" class="mt-2 w-full bg-[#1f2129] h-[755px]">
            <div class="overflow-auto h-[650px] ">
                <table class="w-full min-w-full text-[#a6a6a6]">
                    <thead class="border-b border-[#333]">
                        <tr>
                            <th scope="col" class="text-[15px] font-medium w-[150px]    py-4  ">
                                时间
                            </th>
                            <th scope="col" class="text-[15px] font-medium w-[180px]   py-4 ">
                                用户名
                            </th>
                            <th scope="col" class="text-[15px] font-medium   py-4 ">
                                类型

                            </th>
                            <th scope="col" class="text-[15px] font-medium    py-4 ">
                                状态

                            </th>
                            <th scope="col" class="text-[15px] font-medium    py-4 ">
                                金额 | 明细
                            </th>
                            <!-- <th scope="col" class="text-[15px] font-medium   py-4 ">
                                操作
                            </th> -->

                        </tr>
                    </thead>

                    <tbody >
                        <tr v-for="record in washrecordData" :key="record.id" class=" border-b border-[#333]">
                            <td class="text-[13px] font-medium w-[150px] text-center py-3">
                                {{dateTime(record?.created_at)}}
                            </td>
                            <td class="text-[13px] font-medium w-[180px] text-center py-2">
                                {{ record?.username }}
                            </td>
                            <td class="text-[13px] font-medium text-center py-2">
                                {{record?.type}}
                            </td>
                            <td class="text-[13px] font-medium text-center py-2 "
                             :class="record?.status == 0 ? 'text-red-500' : record?.status == 1 ? 'text-green-500' : 'text-[#c15410]'"
                            >
                                {{ washStatus(record?.status) }}
                            </td>
                            <td class="text-[13px] font-medium text-center py-2 ">
                                ￥{{ record?.request_amount }}
                            </td>
                            <!-- <td class="text-[13px] font-medium text-center py-2 ">
                                催单
                            </td> -->
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- pagination -->
            <div v-if="total > pageSize"  class="flex items-center justify-center">
                <Paginate v-model="pageNum" :page-count="Math.ceil(total / pageSize)" :page-range="3" :margin-pages="1"
                    :click-handler="clickCallback" :prev-text="'上一页'" :next-text="'下一个'" :last-button-text="'最后'"
                    :first-button-text="'第一'" :container-class="'pagination'" :hide-prev-next="true"
                    :page-class="'page-item'" :first-last-button="true" class="flex items-center space-x-4"
                    :no-li-surround="true" :page-link-class="'page-link'" :active-class="'active-class'">

                </Paginate>
            </div>
        </section>

        <section v-if="activeTab == 3" class="mt-2 w-full bg-[#1f2129] h-[755px]">
        </section>

    </div>
</template>

<script setup>
import allApi from "@/network/allApi.js";
import AES from '@/utils/aes';
import Loading from "@/utils/loader";
import { useRouter } from 'vue-router';
import { useStore } from "vuex";
import { ref, onMounted, computed, reactive } from 'vue'
import moment from 'moment'
import Paginate from "vuejs-paginate-next";

const router = useRouter()
const store = useStore()
const recordData = ref(null)
const washrecordData = ref(null)
const pageNum = ref(1)
const pageSize = ref(10)
const total = ref(0)
const req_type = ref(0) //1 is deposit and 0 is withdraw

const range = reactive({
    start: new Date(),
    end: new Date(),
});
const masks = reactive({
    input: "YYYY/MM/DD",
});

const activeTab = ref(0)

const userValue = computed(() => store.getters["user/LOGIN"]);
const token = computed(() => store.getters["user/LToken"]);
const gameEn = computed(() => store.getters["app/GameEn"]);

const updateDate = (r) => {
    range.start = r.start;
    range.end = r.end;
};

const clickCallback = (pageNum) => {
    // console.log(pageNum, "from click callback");
    // GetUpDownRecord()
    request()
}

const refreshRec = () => {
    GetUpDownRecord()
}

const dateTime = (time) => {
  time = moment(new Date(time)).format("YYYY-MM-DD HH:mm:ss")
  return time
}

const minDate = () => {
    var d = moment().subtract(7, 'd').format('YYYY-MM-DD');
    return d
}

const washStatus = (status) => {
  if(status == 0) return '拒绝'
  if(status == 1) return '接受'
  if(status == 2) return '等待'
  
}

const Tabclick = (num) => {
    activeTab.value = num;
    recordData.value = null //reset data
    washrecordData.value = null//reset data
    pageNum.value = 1 //reset pagination
    pageSize.value = 10 //reset pagination
    total.value = 0 //reset pagination
    switch (num) {
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

const GetUpDownRecord = () => {
    let startTime_ = moment(new Date(range.start)).startOf('day').format("YYYY-MM-DD HH:mm:ss");
    let endTime_ = moment(new Date(range.end)).endOf('day').format("YYYY-MM-DD HH:mm:ss");
    let data = {
        "player": userValue?.value?.info?.username,
        "pageNum": pageNum.value,
        "pageSize": pageSize.value,
        startDate: startTime_,
        endDate: endTime_,
        type:req_type.value
    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

    Loading.showLoading()

    allApi.GetUpDownRecord({ data: data, key: userValue?.value?.key }).then((res) => {
        Loading.hideLoading()
        if (res.data.code == '1') {
            console.log("res of getupdown record data", res);
            recordData.value = res.data.data?.list
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
    "player": userValue?.value?.info?.username,
    "pageNum": pageNum.value,
    "pageSize": pageSize.value,
    startDate: startTime_,
    endDate: endTime_,
  }
  Loading.showLoading()

  allApi.GetWashRecord({ data: data, key: userValue?.value?.key, }).then((res) => {
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
    GetUpDownRecord()
    if (!token?.value) return router.push('/login')
})
const goUser = () => {
    router.go(-1)
}
</script>
<style>
.page-item {
    @apply px-4 py-2 bg-blue-500
}

.page-link {
    /* background: red !important; */
    @apply bg-[#c15410] text-[#fff] sm:px-4 px-2 sm:py-1 cursor-pointer rounded-full sm:rounded-none;
}

.active-class {
    display: inline-block;
    color: #241e1e;
    @apply bg-white !important;

}
</style>