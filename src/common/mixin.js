//混入
//引入一些工具方法
import {
  debounce
} from "common/utils";

//返回顶部按钮组件
import BackTop from "components/content/backTop/BackTop.vue";

//1.图片加载防抖的混入
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null,
    }
  },
  mounted() {
    //1.加载防抖
    this.newRefresh = debounce(this.$refs.scroll.refresh, 500);
    //监听item图片加载完成(事件总线)
    //对监听的事件进行保存
    this.itemImgListener = () => {
      this.newRefresh();
    }
    this.$bus.$on("itemImageLoad", this.itemImgListener);
  },
}

//2.返回顶部按钮的混入
export const backTopMixin = {
  components:{
    BackTop, //返回顶部
  },
  data() {
    return {
      isShowBackTop: false, //决定时候显示返回顶部按钮
    }
  },
  methods: {
    //2.返回顶部按钮的监听
    backClick() {
      //通过ref拿到scroll组件对象,这个组件对象里的data有scroll
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    listenShowBackTop(position){
      //1.判断backTop是否显示
      //注意position的y是负数
      this.isShowBackTop = -position.y > 1000;
    }
  },
}
