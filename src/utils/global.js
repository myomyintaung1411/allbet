import userApi from "@/network/user.js";
import allApi from "@/network/allApi.js";
import store from '@/store/index'
import AES from '@/utils/aes';

 let token = store.getters["user/LToken"]
 let user = store.getters["user/LOGIN"]
 let gameEn = store.getters["app/GameEn"]

export default {
     getUserInfo ()  {
        if (token) {
          let data = {
            "player": user.info?.username,
            // "key": user.key
          }
          const encrypttxt =  AES.encrypt(JSON.stringify(data), gameEn.pr_k)

          userApi.GetUserInfo({data: data,key:user.key}).then((res) => {
            if (res.data.code == '1') {
              console.log("res of userinfo data", res);
              store.commit('user/UserInfo', res.data.data)
            }
          }).catch((e) => {
            console.log(e);
          })
        }
      },
    //  getWashMoney ()  {
    //     if (token) {
    //       let data = {
    //         "player": user.info?.username,
    //       }

    //       allApi.GetWashMoney({data: data,key:user.key}).then((res) => {
    //         if (res.data.code == '1') {
    //           console.log("res of getwashmoney data", res);
    //           store.commit('user/UserInfo', res.data.data)
    //         }
    //       }).catch((e) => {
    //         console.log(e);
    //       })
    //     }
    //   },
}