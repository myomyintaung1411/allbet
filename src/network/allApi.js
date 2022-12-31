import instance from './index.js'
import aes from '@/utils/aes'

export default {
    GetCarouselImages(data) {
        // console.log('data ... ', data)
        return instance({
            url: 'api/v1/user/GetCarouselImages',
            method: 'post',
            data:data,
            requestBase: '/api',
            
        })
    },
    getMarqueeText(data) {
        // console.log('data ... ', data)
        return instance({
            url: 'api/v1/user/GetMarqueeText',
            method: 'post',
            data:data,
            requestBase: '/api',
        })
    },
    GetGameUrl(data) {
        // console.log('data ... ', data)
        return instance({
            url: 'api/v1/user/GetGameUrl',
            method: 'post',
            data:data,
            requestBase: '/api',
        })
    },
    GetUpDownRecord(data) {
        // console.log('data ... ', data)
        return instance({
            url: 'api/v1/user/GetUpDownRecord',
            method: 'post',
            data:data,
            requestBase: '/api',
        })
    },
    GetWashRecord(data) {
        // console.log('data ... ', data)
        return instance({
            url: 'api/v1/user/WashRequestRecord',
            method: 'post',
            data:data,
            requestBase: '/api',
        })
    },
    CheckAlert(data) {
        return instance({
            url: 'api/v1/user/CheckAlert',
            method: 'post',
            data:data,
            requestBase: '/api',
        })
    },
    GetAlert(data) {
        return instance({
            url: 'api/v1/user/GetAlert',
            method: 'post',
            data:data,
            requestBase: '/api',
        })
    },
    SubmitAlert(data) {
        return instance({
            url: 'api/v1/user/SubmitAlert',
            method: 'post',
            data:data,
            requestBase: '/api',
        })
    },
    GetWashMoney(data) {
        return instance({
            url: 'api/v1/user/GetWashMoney',
            method: 'post',
            data:data,
            requestBase: '/api',
        })
    },
    RequestWashMoney(data) {
        return instance({
            url: 'api/v1/user/RequestWashMoney',
            method: 'post',
            data:data,
            requestBase: '/api',
        })
    },
}

// http://127.0.0.1:6195/main/memberRequestRecharge
