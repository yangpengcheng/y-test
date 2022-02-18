import { createApp } from 'vue'
import App from './App.vue'

import './styles/index.scss'
import router from './router'
import store from './store'
import './navi.js'

import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App)
  .use(router)
  .use(store)
  .use(ElementPlus, { size: 'small', zIndex: 3000, locale })
  .mount('#app')
