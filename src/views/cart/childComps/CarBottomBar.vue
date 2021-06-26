<template>

  <div class="bottom-bar">
    <div class="check-content">
      <check-button 
      class="check-botton"  
      :isChecked='isSelectAll'
      @click.native ='checkClick'/>
      <span>全选</span>
    </div>

    <div class="price">
      合计 {{ totalPrice }}
    </div>

    <div class="calculate" @click="calcClick">
      去计算: {{checkLength}}
    </div>

  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";

export default {
  name: "CarBottomBar",
  components: {
    CheckButton,
  },
  methods:{
    //监听全选按钮
    checkClick(){
      if(this.isSelectAll){ //如果全部选中,点击一次全部不选中按
        this.$store.state.cartList.forEach(item => {
          return item.checked = false;
        })
      }else{ //否则就是有不选中的
        this.$store.state.cartList.forEach(item => {
          return item.checked = true;
        })

      }
    }
  },
  computed: {

    //计算选中商品总价格
    totalPrice() {
      return (
        "$" +
        this.$store.state.cartList
          .filter((item) => item.checked)
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0).toFixed(2)   //toFixed,保留小数
      );
    },

    //计算选中商品的个数
    checkLength(){
      return this.$store.state.cartList.filter(item => item.checked).length
    },

    //是否全部选中
    isSelectAll(){
      //1.长度为0的时候是不选中的
      //2.选中的个数是否等于列表原来的个数
      return  this.$store.state.cartList.length !==0 && (this.$store.state.cartList.filter(item => item.checked).length === 
      this.$store.state.cartList.length)
    },
    //结算时没选商品,提示要选商品才可以结算
    calcClick(){
      //如果全部都没选中
      if(!this.isSelectAll){

      }
    }

  },
};
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.check-content {
  display: flex;
  height: 100%;
  align-items: center;
}
.check-botton {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.calculate{
  padding-right: 5px;
  background-color: red;
  height: 100%;
  width: 100px;
  line-height: 40px;
  text-align: center;
  color: white;
}
</style>