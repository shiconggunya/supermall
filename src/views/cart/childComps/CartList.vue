<template>
  <div class="cart-list">
  <!--滚动区域  -->
   <scroll class="content" ref="scroll">
     <cart-list-item v-for="(item,index) in cartList "  :key="index" :itemInfo='item'/>
   </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Scroll from 'components/scroll/Scroll.vue';
import CartListItem from './CartListItem.vue';
export default {
  components: { 
    Scroll,
    CartListItem,
  },
  name: "CartList",
  computed: {
    ...mapGetters(["cartList"]),
  },
  activated(){
    this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
.cart-list{
  height: calc(100% - 44px - 49px - 40px);
}
.content{
  height: 100%;
  overflow: hidden;
}
</style>