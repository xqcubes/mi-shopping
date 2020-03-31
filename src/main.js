import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/**
 * 引入样式
 */
import '@/assets/style/index.styl'

Vue.config.productionTip = false
/**
 * mock模拟假数据
 */
const mock = true
if (mock) {
  require('./mock/api')
}

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
