import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import 'normalize.css'
import './style/index.scss'
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon.vue'
import { Button } from 'vant'

const app = createApp(App)
app.component('SvgIcon', SvgIcon)
app.use(Button)
app.use(router).use(store).mount('#app')
