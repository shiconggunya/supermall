import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index.js';
//自己封装的插件
import toast from 'components/common/toast';
//解决点击延迟
import FastClick from 'fastclick';
//图片懒加载
import VueLazyLoad from 'vue-lazyload';

Vue.prototype.$bus = new Vue();   //在原型上添加事件总线

//安装toast插件
Vue.use(toast);

//解决移动端300ms延迟
FastClick.attach(document.body);

//使用懒加载插件
Vue.use(VueLazyLoad,{
  loading:require('assets/img/common/placeholder.png') //图片加载占位
})

new Vue({
  render : h=>h(App),
  router,
  store,
}).$mount('#app')
