import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.prototype.$bus = new Vue();   //在原型上添加事件总线

new Vue({
  render : h=>h(App),
  router,
}).$mount('#app')
