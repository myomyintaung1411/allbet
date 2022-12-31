import Main from './views/Main.vue'
import NotFound from './views/NotFound.vue'
import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router'
import store from '@/store/index'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: '/',
    name:'Main',
    component: Main,
    meta: { title: 'Main' },
    redirect:'/home',
    children:[
        {
          path: '/home',
          name:'Home',
          meta: { title: 'Home' },
          component: () => import('./views/Home.vue')
        },
        {
          path: '/promotion',
          name:'Promotion',
          meta: { title: 'Promotion' },
           component: () => import('./views/Promotion.vue')
        },
        {
          path: '/vip',
          name:'Vip',
          meta: { title: 'Vip' },
           component: () => import('./views/Mobile/Vip.vue')
        },
        {
          path: '/user',
          name:'User',
          meta: { title: 'User',requireAuth:true },
           component: () => import('./views/Mobile/User.vue')
        },
        {
          path: '/setting',
          name:'Setting',
          meta: { title: 'Setting' },
           component: () => import('./views/Mobile/Setting.vue')
        },
        {
          path: '/download',
          name:'Download',
          meta: { title: 'Download' },
           component: () => import('./views/Download.vue')
        },
        {
          path: '/aggrement',
          name:'Agreement',
          meta: { title: 'Agreement' },
           component: () => import('./views/Agreement.vue')
        },
        {
          path: '/about',
          name:'About',
          meta: { title: 'About' },
           component: () => import('./views/About.vue')
        },

        {
          path: '/pc/feedback',
          name:'Feedback Customer',
          meta: { title: 'Feedback Customer',requireAuth:true },
           component: () => import('./views/PC/Pc_Feedback.vue')
        },

        {
          path: '/pc/transRecord',
          name:'Pc_TranscationRecord',
          meta: { title: 'Pc_TranscationRecord',requireAuth:true },
           component: () => import('./views/PC/PcTransaction.vue')
        },
        {
          path: '/pc/coporation',
          name:'PC Coporation',
          meta: { title: 'PC Coporation' },
           component: () => import('./views/PC/PC_Coporation.vue')
        },
        {
          path: '/pc/moneyDeposit',
          name:'PC moneyDeposit',
          meta: { title: 'PC moneyDeposit',requireAuth:true },
           component: () => import('./views/PC/PCMoneyDeposit.vue')
        },
        {
          path: '/pc/usdtDeposit',
          name:'PC USDTDeposit',
          meta: { title: 'PC USDTDeposit',requireAuth:true },
           component: () => import('./views/PC/Pc_Usdt_Deposit.vue')
        },
        {
          path: '/pc/PcbindPhoneForWithdraw',
          name:'PcbindPhoneForWithdraw',
          meta: { title: 'PcbindPhoneForWithdraw',requireAuth:true },
           component: () => import('./views/PC/Pc_Bind_Phone_For_Withdraw.vue')
        },
        {
          path: '/pc/bindWithdrawpass',
          name:'Pc_BindWithdraw_Pass',
          meta: { title: 'Pc_BindWithdraw_Pass',requireAuth:true },
           component: () => import('./views/PC/Pc_BindWithdraw_Pass.vue')
        },
        {
          path: '/pc/PcusdtWithdraw',
          name:'PcusdtWithdraw',
          meta: { title: 'PcusdtWithdraw' },
          beforeEnter:(to,from,next) =>{
            const user = store.state.user?.userInfo
            // If logged in, or going to the Login page.
            if (user?.user_level >= 1) {
              // Continue to page.
              next()
            } else {
              // Not logged in, redirect to login.
              next({ name: 'Home' })
            }
           },
           component: () => import('./views/PC/Pc_Usdt_Withdraw.vue')
        },
        {
          path: '/pc/PcUsdtBuy',
          name:'PcUsdtBuy',
          meta: { title: 'PcUsdtBuy',requireAuth:true },
           component: () => import('./views/PC/Pc_UsdtBuy.vue')
        },
        {
          path: '/pc/PcUsdtSell',
          name:'PcUsdtSell',
          meta: { title: 'PcUsdtSell',requireAuth:true },
           component: () => import('./views/PC/Pc_UsdtSell.vue')
        },
        {
          path: '/pc/accsetting',
          name:'PC AccSetting',
          meta: { title: 'PC AccSetting',requireAuth:true },
           component: () => import('./views/PC/PC_AccSetting.vue')
        },
        {
          path: '/pc/wash',
          name:'Pc Wash',
          meta: { title: 'Pc Wash',requireAuth:true },
           component: () => import('./views/PC/Pc_Wash.vue')
        },
        {
          path: '/pc/userdetail',
          name:'UserDetail',
          meta: { title: 'UserDetail',requireAuth:true },
           component: () => import('./views/PC/Pc_UserDetail.vue')
        },

        {
          path: '/pc/addBankCard',
          name:'Pc_AddBankCard',
          meta: { title: 'Pc_AddBankCard',requireAuth:true },
           component: () => import('./views/PC/Pc_AddBankCard.vue')
        },
        {
          path: '/pc/addUsdtCard',
          name:'Pc_AddUsdtCard',
          meta: { title: 'Pc_AddUsdtCard' },
           component: () => import('./views/PC/Pc_AddUsdtCard.vue')
        },

        {
          path: '/pc/moneyWithdraw',
          name:'Pc_Money_Withdraw',
          meta: { title: 'Pc_Money_Withdraw' },
          beforeEnter:(to,from,next) =>{
            const user = store.state.user?.userInfo
            // If logged in, or going to the Login page.
            if (user?.user_level >= 1) {
              // Continue to page.
              next()
            } else {
              // Not logged in, redirect to login.
              next({ name: 'Home' })
            }
           },
           component: () => import('./views/PC/Pc_Money_Withdraw.vue')
        },
        {
          path: '/pc/unbindphone',
          name:'PCUnBindPhone',
          meta: { title: 'PCUnBindPhone',requireAuth:true },
           component: () => import('./views/PC/Pc_UnbindPhone.vue')
        },
        {
          path: '/pc/notification',
          name:'Pc_Notification',
          meta: { title: 'Pc_Notification',requireAuth:true },
           component: () => import('./views/PC/Pc_Notification.vue')
        },

    ],
    
  },
  {
    path: '/user/bindPhoneForWithdraw',
    name:'BindPhoneForWithdraw',
    meta: { title: 'BindPhoneForWithdraw',requireAuth:true },
     component: () => import('./views/Mobile/BindPhoneForWithdraw.vue')
  },
  {
    path: '/user/bindWithdrawPass',
    name:'bindWithdrawPass',
    meta: { title: 'bindWithdrawPass',requireAuth:true },
     component: () => import('./views/Mobile/BindWithdrawPass.vue')
  },
  {
    path: '/user/usdtBuy',
    name:'usdtBuy',
    meta: { title: 'usdtBuy',requireAuth:true },
     component: () => import('./views/Mobile/UsdtBuy.vue')
  },
  {
    path: '/user/usdtSell',
    name:'usdtSell',
    meta: { title: 'usdtSell',requireAuth:true },
     component: () => import('./views/Mobile/UsdtSell.vue')
  },
  {
    path: '/moneyWithdraw',
    name:'moneyWithdraw',
    meta: { title: 'moneyWithdraw' },
    beforeEnter:(to,from,next) =>{
      const user = store.state.user?.userInfo
      // If logged in, or going to the Login page.
      if (user?.user_level >= 1) {
        // Continue to page.
        next()
      } else {
        // Not logged in, redirect to login.
        next({ name: 'Home' })
      }
     },
     component: () => import('./views/Mobile/moneyWithdraw.vue')
  },
  {
    path: '/usdtWithdraw',
    name:'usdtWithdraw',
    meta: { title: 'usdtWithdraw' },
     component: () => import('./views/Mobile/UsdtWithdraw.vue'),
     beforeEnter:(to,from,next) =>{
      const user = store.state.user?.userInfo
      // If logged in, or going to the Login page.
      if (user?.user_level >= 1) {
        // Continue to page.
        next()
      } else {
        // Not logged in, redirect to login.
        next({ name: 'Home' })
      }
     },
  },
  {
    path: '/moneyDeposit',
    name:'Deposit',
    meta: { title: 'Deposit',requireAuth:true },
     component: () => import('./views/Mobile/Deposit.vue')
  },
  {
    path: '/usdtDeposit',
    name:'USDT_Deposit',
    meta: { title: 'USDT_Deposit',requireAuth:true },
     component: () => import('./views/Mobile/USDT_Deposit.vue')
  },
  {
    path: '/accsetting',
    name:'AccSetting',
    meta: { title: 'AccSetting',requireAuth:true },
     component: () => import('./views/Mobile/AccSetting.vue')
  },
  {
    path: '/coporation',
    name:'Coporation',
    meta: { title: 'Coporation' },
     component: () => import('./views/Mobile/Coporation.vue')
  },
  {
    path: '/transRecord',
    name:'TranscationRecord',
    meta: { title: 'TranscationRecord',requireAuth:true },
     component: () => import('./views/Mobile/Transaction.vue')
  },
  {
    path: '/ranking',
    name:'Ranking View',
    meta: { title: 'Ranking View' },
     component: () => import('./views/Mobile/Ranking.vue')
  },

  {
    path: '/login',
    name:'Login',
    meta: { title: 'Login',requiresVisitor: true },
     component: () => import('./views/Login.vue')
  },
  {
    path: '/register',
    name:'Register',
    meta: { title: 'Register',requiresVisitor: true },
     component: () => import('./views/Register.vue')
  },
  {
    path: '/forgetpass',
    name:'ForgetPass',
    meta: { title: 'ForgetPass' },
     component: () => import('./views/ForgetPass.vue')
  },
  {
    path: '/login/success',
    name:'Login Success',
    meta: { title: 'Login Success'  },
     component: () => import('./views/LoginSuccess.vue')
  },
  {
    path: '/upgrade',
    name:'UpgradeBonus',
    meta: { title: 'UpgradeBonus' },
     component: () => import('./views/UpgradeBonus.vue')
  },
  {
    path: '/wash',
    name:'Wash',
    meta: { title: 'Wash',requireAuth:true  },
     component: () => import('./views/Mobile/Wash.vue')
  },
  {
    path: '/pc/vip',
    name:'PcVip',
    meta: { title: 'PcVip' },
     component: () => import('./views/PC/Pc_Vip.vue')
  },

  {
    path: '/setPhonenum',
    name:'setPhonenum',
    meta: { title: 'setPhonenum',requireAuth:true  },
     component: () => import('./views/SetPhoneNum.vue')
  },
  {
    path: '/changePhonenum',
    name:'changePhonenum',
    meta: { title: 'changePhonenum',requireAuth:true  },
     component: () => import('./views/ChangePhoneNum.vue')
  },
  {
    path: '/changePass',
    name:'changePass',
    meta: { title: 'changePass',requireAuth:true  },
     component: () => import('./views/changePass.vue')
  },
  {
    path: '/setmoneypass',
    name:'SetMoneyPassword',
    meta: { title: 'SetMoneyPassword',requireAuth:true  },
     component: () => import('./views/SetMoneyPassword.vue')
  },
  {
    path: '/changemoneypass',
    name:'ChangeMoneyPassword',
    meta: { title: 'ChangeMoneyPassword',requireAuth:true  },
     component: () => import('./views/ChangeMoneyPassword.vue')
  },
  {
    path: '/setSecurityInfo',
    name:'setSecurityInfo',
    meta: { title: 'setSecurityInfo',requireAuth:true  },
     component: () => import('./views/SecurityInfo.vue')
  },
  {
    path: '/set_pass',
    name:'SetPass',
    meta: { title: 'SetPass',requireAuth:true  },
     component: () => import('./views/SetPassword.vue')
  },

  {
    path: '/notice',
    name:'Notice',
    meta: { title: 'Notice' },
     component: () => import('./views/Mobile/Notice.vue')
  },
  {
    path: '/feedback',
    name:'Feedback',
    meta: { title: 'Feedback',requireAuth:true  },
     component: () => import('./views/Mobile/Feedback.vue')
  },

  {
    path: '/userdetail', 
    name:'userDetail',
    meta: { title: 'userDetail',requireAuth:true  },
     component: () => import('./views/Mobile/userDetail.vue')
  },
  {
    path: '/usdtExplain', 
    name:'ExplainUsdt',
    meta: { title: 'ExplainUsdt',requireAuth:true  },
     component: () => import('./views/Mobile/ExplainUsdt.vue')
  },
  {
    path: '/unbindphone',
    name:'UnBindPhone',
    meta: { title: 'UnBindPhone',requireAuth:true  },
     component: () => import('./views/Mobile/UnBindPhone.vue')
  },
  {
    path: '/moneyconfirm',
    name:'MoneyConfirm',
    meta: { title: 'MoneyConfirm',requireAuth:true  },
     component: () => import('./views/Mobile/PayMentConfirm.vue')
  },
  {
    path: '/usdtdepositConfirm',
    name:'UsdtDepositConfirm',
    meta: { title: 'UsdtDepositConfirm',requireAuth:true  },
     component: () => import('./views/Mobile/UsdtDepositConfirm.vue')
  },
  {
    path: '/addBankCard',
    name:'AddBankCard',
    meta: { title: 'AddBankCard',requireAuth:true  },
     component: () => import('./views/Mobile/AddBankCard.vue')
  },

  {
    path: '/user/addUsdtCard',
    name:'AddUSDTCard',
    meta: { title: 'AddUSDTCard',requireAuth:true  },
     component: () => import('./views/Mobile/AddUSDTCard.vue')
  },
  {
    path: '/noti',
    name:'Notification',
    meta: { title: 'Notification',requireAuth:true  },
     component: () => import('./views/Mobile/Notification.vue')
  },

  { path: '/:path(.*)', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  let token = store.getters["user/LToken"]
  if (to.matched.some(record => record.meta.requiresVisitor) 
  ) {
    if (token) {
      next('/')
    } else {
      next()
    }
  } else if(to.matched.some(record => record.meta.requireAuth)) {
    if (!token) {
      next('/login')
    } else {
      next()
    }
  }else{
    next()
  }
 // next()

});

export default router