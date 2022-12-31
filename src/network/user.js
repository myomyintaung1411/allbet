import instance from './index.js'

export default {
  ForgetPass(data) {
      // console.log('data ... ', data)
      return instance({
          url: 'api/v1/user/ForgetPassword',
          method: 'post',
          data:data,
          requestBase: '/api',
      })
  },
  UserReg(data) {
      // console.log('data ... ', data)
      return instance({
          url: 'api/v1/user/Register',
          method: 'post',
          data:data,
          requestBase: '/api',
      })
  },
  PhoneRegister(data) {
      // console.log('data ... ', data)
      return instance({
          url: 'api/v1/user/PhoneRegister',
          method: 'post',
          data:data,
          requestBase: '/api',
      })
  },
  UserLogin(data) {
      // console.log('data ... ', data)
      return instance({
          url: 'api/v1/user/Login',
          method: 'post',
           data:data,
           requestBase: '/api',
         // headers: { 'Content-Type': 'application/x-www-form-urlencoded;chatset=UTF-8' }
      })
  },
  PhoneLogin(data) {
      // console.log('data ... ', data)
      return instance({
          url: 'api/v1/user/PhoneLogin',
          method: 'post',
          data:data,
          requestBase: '/api',
      })
  },
  PhoneMoreAccountLogin(data) {
      // console.log('data ... ', data)
      return instance({
          url: 'api/v1/user/PhoneMoreAccountLogin',
          method: 'post',
          data:data,
          requestBase: '/api',
      })
  },
  LoginTrial(data) {
      // console.log('data ... ', data)
      return instance({
          url: 'api/v1/user/LoginTrail',
          method: 'post',
          data:data,
          requestBase: '/api',
      })
  },
  ChangePass(data) {
      // console.log('data ... ', data)
      return instance({
          url: 'api/v1/user/ChangePassword',
          method: 'post',
          data:data,
          requestBase: '/api',
      })
  },
  UserLogout(data) {
      // console.log('data ... ', data)
      return instance({
          url: 'api/v1/user/Logout',
          method: 'post',
          data:data,
          requestBase: '/api',
      })
  },
  SetMoneyPassword(data) {
      // console.log('data ... ', data)
      return instance({
          url: 'api/v1/user/SetMoneyPassword',
          method: 'post',
          data:data,
          requestBase: '/api',
      })
  },
  ChangeMoneyPassword(data) {
      // console.log('data ... ', data)
      return instance({
          url: 'api/v1/user/ChangeMoneyPassword',
          method: 'post',
          data:data,
          requestBase: '/api',
      })
  },
  FreezeOwnAccount(data) {
      // console.log('data ... ', data)
      return instance({
          url: 'api/v1/user/FreezeOwnAccount',
          method: 'post',
          data:data,
          requestBase: '/api',
      })
  },
  GetUserInfo(data) {
      // console.log('data ... ', data)
      return instance({
          url: 'api/v1/user/GetInfo',
          method: 'post',
          data:data,
          requestBase: '/api',
      })
  },
  GetReferenceInfo(data) {
      // console.log('data ... ', data)
      return instance({
          url: 'api/v1/user/GetReferenceInfo',
          method: 'post',
          data:data,
          requestBase: '/api',
      })
  },
  BindRealName(data) {
      // console.log('data ... ', data)
      return instance({
          url: 'api/v1/user/BindRealName',
          method: 'post',
          data:data,
          requestBase: '/api',
      })
  },
  BindPhoneNumber(data) {
      // console.log('data ... ', data)
      return instance({
          url: 'api/v1/user/BindPhoneNumber',
          method: 'post',
          data:data,
          requestBase: '/api',
      })
  },
  UnBindPhoneNumber(data) {
      // console.log('data ... ', data)
      return instance({
          url: 'api/v1/user/UnBindPhoneNumber',
          method: 'post',
          data:data,
          requestBase: '/api',
      })
  },
  ChangePhoneNumber(data) {
      // console.log('data ... ', data)
      return instance({
          url: 'api/v1/user/ChangePhoneNumber',
          method: 'post',
          data:data,
          requestBase: '/api',
      })
  },
  GetSmsCode(data,id) {
      // console.log('data ... ', data)
      return instance({
          url: `api/v1/user/Sms/:${id}`,
          method: 'post',
          data:data,
          requestBase: '/api',
      })
  },
  GetRegLoginSmsCode(data) {
      // console.log('data ... ', data)
      return instance({
          url: `api/v1/user/Sms/NoAuth`,
          method: 'post',
          data:data,
          requestBase: '/api',
      })
  },
  BindBirthday(data) {
      // console.log('data ... ', data)
      return instance({
          url: `api/v1/user/BindMoreInfo`,
          method: 'post',
          data:data,
          requestBase: '/api',
      })
  },
  CheckCode(data) {
      // console.log('data ... ', data)
      return instance({
          url: `api/v1/user/CheckCode`,
          method: 'post',
          data:data,
          requestBase: '/api',
      })
  },
  RequestFeedback(data) {
      // console.log('data ... ', data)
      return instance({
          url: `api/v1/user/RequestFeedback`,
          method: 'post',
          data:data,
          requestBase: '/api',
      })
  },
  SetPasswordPhU(data) {
      // console.log('data ... ', data)
      return instance({
          url: `api/v1/user/SetPasswordPhU`,
          method: 'post',
          data:data,
          requestBase: '/api',
      })
  },
  CheckMoneyPasswordForWithdraw(data) {
      // console.log('data ... ', data)
      return instance({
          url: `api/v1/user/CheckMoneyPassword`,
          method: 'post',
          data:data,
          requestBase: '/api',
      })
  },
  
}
