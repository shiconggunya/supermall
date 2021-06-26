<template>
  <div class="cart">
    <!-- 顶部导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}}) </div>
    </nav-bar>

    <!-- 商品列表 -->
    <cart-list/>

    <!-- 底部工具栏-->
    <car-bottom-bar/>
  </div>
</template>

<script>
// 导航条组件
import NavBar from 'components/common/navbar/NavBar.vue'
//商品列表
import CartList from './childComps/CartList'
//底部工具栏
import CarBottomBar from './childComps/CarBottomBar.vue'

import {mapGetters} from 'vuex'


export default {
  name:'Cart',
  components:{
    NavBar, //底部导航条
    CartList, //商品列表
    CarBottomBar, //底部工具栏

  },
  mounted(){
    console.log(this.$store.state.cartList);
  },
  computed:{
    //两种语法
    //数组用原来的名字, 对象可以改名字
    // ...mapGetters(['cartLength','cartList'])
    ...mapGetters({
      length:'cartLength', //不想用原来名字的话,可以用第二种写法,
      lest:'cartList',
    })

  }
}
</script>

<style scoped>
.cart{
  height: 100vh;
}
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
  z-index: 9;
}
</style>