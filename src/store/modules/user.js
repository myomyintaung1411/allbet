import AES from "@/utils/aes";
export default {
  state: () => ({
    /* User */
   // user: JSON.parse( localStorage.getItem('xx')) || null,
   user: localStorage.getItem('xx') ?
   JSON.parse(AES.Cryptodecrypt(JSON.parse(localStorage.getItem('xx')), {
     key: "@hKe9@A1lKe9$Tz1kE@8HnG7",
     iv: "1234567890123456"
   })) :
   null,
   // userInfo:JSON.parse( localStorage.getItem('uxux')) || null,
   userInfo: localStorage.getItem('uxux') ?
   JSON.parse(AES.Cryptodecrypt(JSON.parse(localStorage.getItem('uxux')), {
     key: "@hKe9@A1lKe9$Tz1kE@8HnG7",
     iv: "1234567890123456"
   })) :
   null,
    //token: localStorage.getItem('tttt') || '',
    token: localStorage.getItem('tttt') ?
    JSON.parse(AES.Cryptodecrypt(JSON.parse(localStorage.getItem('tttt')), {
      key: "@hKe9@A1lKe9$Tz1kE@8HnG7",
      iv: "1234567890123456"
    })) :
    null,
    loginUsername:'' // its is only to display when login is successful
    
  }),

  getters: {
    LToken: state => state.token,
    LOGIN: state => state.user,
    USERINFO:state=>state.userInfo,
    LoginUserName:state => state.loginUsername,
  },

  mutations: {

    /* User */
    Login(state, payload) {
      console.log(payload,"User payload ********");
      state.user = payload
      state.token = payload?.token
      
      //localStorage.setItem('tttt', payload?.token)
      //localStorage.setItem('xx',JSON.stringify(payload))
      
      localStorage.setItem('tttt',
      JSON.stringify(AES.Cryptoencrypt(JSON.stringify(payload?.token),
        {
          key: "@hKe9@A1lKe9$Tz1kE@8HnG7",
          iv: "1234567890123456"
        }
      )))


      localStorage.setItem('xx',
      JSON.stringify(AES.Cryptoencrypt(JSON.stringify(payload),
        {
          key: "@hKe9@A1lKe9$Tz1kE@8HnG7",
          iv: "1234567890123456"
        }
      )))


    },
    UserInfo(state, payload) {
      console.log(payload,"userInfo payload ********");
      state.userInfo = payload
      //localStorage.setItem('uxux',JSON.stringify(payload))
      localStorage.setItem('uxux',
      JSON.stringify(AES.Cryptoencrypt(JSON.stringify(payload),
        {
          key: "@hKe9@A1lKe9$Tz1kE@8HnG7",
          iv: "1234567890123456"
        }
      )))
    },
    LOGIN_USERNAME(state,payload) {
      state.loginUsername = payload
    }
  },

  actions: {
    //
  },
  namespaced: true
}
