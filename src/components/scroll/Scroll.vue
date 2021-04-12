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
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      },
    },
    pullUpLoad: {
      typeof: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    //1.创建Bscroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true, //开启事件监听
      probeType: this.probeType, //实时滚动监听
      pullUpLoad: this.pullUpLoad, //下拉加载更多
    });

    //2.实时监听滚动位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        //将滚动的位置发送出去
        this.$emit("scroll", position);
      });
    }

    //3.监听下拉加载更多
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp');
      })
    }
  },
  methods: {
    //自己封装的scrollTo
    //调用scroll里面的scrollTo(),第三个参数是时间
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },

    //自己封装的finishPullUp
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp(); //先判断有没有this.scroll,这个对象,在执行
    },

    //加载完刷新
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    //获取滚动条的高度
    getScrollY(){
      return this.scroll ? this.scroll.y :0;  //有就返回高度,没有就返回0
    }
  },
};
</script>

<style>
</style>