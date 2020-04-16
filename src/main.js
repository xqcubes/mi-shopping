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
const mock = false
if (mock) {
  require('./mock/api')
}
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: '/imgs/loading-svg/loading-bars.svg' // 加载中图片，一定要有，不然会一直重复加载占位图
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
