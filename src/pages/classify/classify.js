import 'babel-polyfill'
import Vue from 'vue'
import App from './classify-app'
// import router from './router'
import '@/assets/style/common.less'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#classify-app',
  // router,
  template: '<App/>',
  components: { App }
})
