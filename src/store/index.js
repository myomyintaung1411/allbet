
import { createStore } from 'vuex'
import user from './modules/user.js'
import app from './modules/app.js'
import pay from './modules/pay.js'
const store = createStore({
  modules: {
    user,
    app,
    pay
  }
})

export default store
