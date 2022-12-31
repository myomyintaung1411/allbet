import instance from './index.js'

export default {
    SetBankAddress(data) {
        // console.log('data ... ', data)
        
        return instance({
            url: 'api/v1/user/SetBankAddress',
            method: 'post',
            data:data,
            requestBase: '/api',
        })
    },
    SetCoinAddress(data) {
        // console.log('data ... ', data)
        return instance({
            url: 'api/v1/user/SetCoinAddress',
            method: 'post',
            data:data,
            requestBase: '/api',
        })
    },
    GetMoneyAddress(data) {
        // console.log('data ... ', data)
        return instance({
            url: 'api/v1/user/GetMoneyAddress',
            method: 'post',
            data:data,
            requestBase: '/api',
        })
    },
    EditMoneyAddress(data) {
        // console.log('data ... ', data)
        return instance({
            url: 'api/v1/user/EditMoneyAddress',
            method: 'post',
            data:data,
            requestBase: '/api',
        })
    },
    MoneyDeposit(data) {
        // console.log('data ... ', data)
        return instance({
            url: 'api/v1/Pay/Direct',
            method: 'post',
            data:data,
            requestBase: '/pay',
        })
    },
    MoneyWithdraw(data) {
        // console.log('data ... ', data)
        return instance({
            url: 'api/v1/Pay/RedirectAnother',
            method: 'post',
            data:data,
            requestBase: '/pay',
        })
    },
}
