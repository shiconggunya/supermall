import {
  ADD_COUNTER,
  ADD_TO_CART,
} from './mutations-types';

export default {
  //mutations唯一的目的就是修改state中状态
  //mutations中每一方法尽可能完成的事件比较单一
  [ADD_COUNTER](state,payload){
    payload.count+=1;
  },
  [ADD_TO_CART](state,payload){
    payload.checked = true  //商品默认选中
    payload.count =1
    state.cartList.push(payload)
  },
}