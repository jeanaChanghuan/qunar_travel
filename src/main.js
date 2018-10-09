import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick' 
import store from './store'
import 'styles/border.css'
import 'styles/reset.css'
import 'styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
//移动设备上的浏览器默认会在用户点击屏幕大约延迟300毫秒后才会触发点击事件
//fastClick.attach(document.body);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

