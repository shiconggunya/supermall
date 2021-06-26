export default{
  //返回购物车列表的长度
  cartLength(state){
    return state.cartList.length;
  },
  //返回购物车数据
  cartList(state){
    return state.cartList;
  }
}