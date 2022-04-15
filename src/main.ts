import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import { setupRouter } from './router'
import { setupAntd } from './libs/antdv'

const app = createApp(App)

setupStore(app) // 引入状态管理器
setupRouter(app) // 引入路由
setupAntd(app) // 引入组件

app.mount('#app')
