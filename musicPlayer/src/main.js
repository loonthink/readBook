import 'babel-polyfill'

import Vue from 'vue'
import App from './App'
import router from './router'

import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import 'common/stylus/index.styl'

// 点击延迟 300 取消
fastclick.attach(document.body)

Vue.use(VueLazyload, {
	loading: require('common/image/default.png')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
