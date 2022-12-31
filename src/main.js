import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import router from './routes.js'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import Vue3Marquee from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import VCalendar from 'v-calendar';
import 'v-calendar/dist/style.css';
import { MotionPlugin } from '@vueuse/motion'
import Swal from "sweetalert2";

// import { registerSW } from "virtual:pwa-register";

// if ("serviceWorker" in navigator) {
//   // && !/localhost/.test(window.location)) {
//   const updateSW = registerSW({
//     onNeedRefresh() {
//       Swal.fire({
//         title: "An update is available!",
//         text: "Click to update and reload",
//         icon: "warning",
//         showCancelButton: false,
//         allowOutsideClick: false,
//         backdrop: true,
//         confirmButtonText: "Ok",
//         color: "#000",

//       }).then((res) => {
//         if (res.isConfirmed) {
//           updateSW(true);
//         }
//       })
//     }
//   });
// }



//prompt use for 
import { message } from './utils/prompt'

const app = createApp(App)

const options = {
  confirmButtonColor: '#3B82F6',
  cancelButtonColor: '#ff7674',
  color: "#b95c13"
};

/* Default title tag */
const defaultDocumentTitle = '博冠'

router.afterEach(to => {
  /* Set document title from route meta */
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} — ${defaultDocumentTitle}`
  } else {
    document.title = defaultDocumentTitle
  }
})
app.config.globalProperties.$message = message;
app.use(router)
app.use(store)
app.use(VueSweetalert2, options)
app.use(VueLoading)
app.use(Vue3Marquee)
app.use(VCalendar, {})
app.use(MotionPlugin)
app.mount('#app')
