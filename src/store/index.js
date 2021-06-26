//1.引入
import Vue from 'vue'
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';
//2.安装插件
Vue.use(Vuex);


//3.创建Store对象
const store = new Vuex.Store({
  state:{
    cartList:[],  //购物车数据
  },
  mutations,
  actions,
  getters,
})

//4.挂载Vue实例三
export default store;
