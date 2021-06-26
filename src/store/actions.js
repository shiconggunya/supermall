import {
  ADD_COUNTER,
  ADD_TO_CART,
} from './mutations-types';

export default {
  //除了异步操作外,一些判断逻辑的操作也可以放在actions
  addCart(context,payload){ //payload新添加的商品
    //context上下文
    return new Promise((resolve , reject)=>{
    //另一种方法,查早数组是否有改商品
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);

    //如果存在,数量加一,否则添加新商品到购物车
    if(oldProduct){
      context.commit(ADD_COUNTER,oldProduct) //如果一样的话,上面已经将内存地址给了oldProduct,只要将数量加一
      resolve('当前商品数量加一')
    }else{
      context.commit(ADD_TO_CART,payload);
      resolve('添加新的商品')
    }
    })
  },

}