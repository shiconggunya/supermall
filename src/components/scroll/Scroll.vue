<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props:{
    probeType:{
      type:Number,
      default(){
        return 0;
      }
    },
    pullUpLoad:{
      typeof: Boolean,
      default(){
        return false;
      }
    }

  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    //1.创建Bscroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click:true, //开启事件监听
      probeType: this.probeType , //实时滚动监听
      pullUpLoad:this.pullUpLoad, //下拉加载更多
    });

    //2.实时监听滚动位置
    this.scroll.on('scroll',(position) => {
      //将滚动的位置发送出去
      this.$emit('scroll',position);
    })

    //3.监听上拉事件
    this.scroll.on('pullingUp',() => {
     this.$emit('pullingUp') //发射事件告诉别人可以加载更多
    })

  },
  methods: {
    //自己封装的scrollTo
    //调用scroll里面的scrollTo(),第三个参数是时间
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },

    //自己封装的finishPullUp
    finishPullUp(){
      this.scroll.finishPullUp();
    }
  },
};
</script>

<style>
</style>