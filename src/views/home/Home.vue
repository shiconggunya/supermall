<template>
  <div id="home">
    <!-- 顶部导航条组件 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 封装好的滚动框架 -->`
    <scroll
      class="content"
      ref="scroll"
      :probeType="3" 
      :pullUpLoad="true"
      @scroll="contentScroll"
      @pullingUp = 'loadMore'
    >
      <!-- 轮播图组件 -->
      <home-swiper :banners="banners" ></home-swiper>
      <!-- 推荐展示组件 -->
      <recommend-view :recommends="recommends"></recommend-view>
      <!-- 本周推荐组件 -->
      <feature-view></feature-view>
      <!-- 选项卡组件 -->
      <tab-control
        :titles="['流行', '新款', '精选']"
        class="tab-control"
        @tabClick="tabClick"
      ></tab-control>
      <!--商品展示列表组件  -->
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!-- 返回顶部的组件 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
//轮播图组件
import HomeSwiper from "./childComps/HomeSwiper";
//推荐展示组件
import RecommendView from "./childComps/RecommendView";
//本周推荐
import FeatureView from "./childComps/FeatureView";

//顶部导航条
import NavBar from "components/common/navbar/NavBar";
//选项卡组件
import tabControl from "components/content/tabControl/tabControl";
//商品列表组件
import GoodsList from "components/content/goods/GoodsList";
//返回顶部按钮组件
import BackTop from "components/content/backTop/BackTop.vue";

//home组件网络封装
import { getHomeMultidata, getHomeGoods } from "network/home";
//引入滚动优化框架的封装
import Scroll from "components/scroll/Scroll.vue";

export default {
  name: "Home",
  data() {
    return {
      banners: [], //保存轮播图的数据
      recommends: [], //保存推荐展示的数据
      //保存商品的数据
      goods: {
        pop: { page: 0, list: [] }, //保存流行的数据
        new: { page: 0, list: [] }, //保存新款的数据
        sell: { page: 0, list: [] }, //保存精选的数据
      },
      currentType: "pop", //要展示的类型
      isShowBackTop: false, //决定时候显示返回顶部按钮
    };
  },
  components: {
    NavBar, //顶部导航条组件
    HomeSwiper, //完成好的轮播图组件
    RecommendView, //推荐展示组件
    FeatureView, //本周热门组件
    tabControl, //选项卡组件
    GoodsList, //商品列表组件
    Scroll, //封装好的滚动组件
    BackTop, //返回顶部的组件
  },
  //组件创建完执行
  created() {
    //组件创建完之后发送网络请求
    //请求多个数据
    this.getHomeMultidata(); //由于名字一样,this不要忘记

    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  //组件挂载完执行
  mounted() {},
  methods: {
    /*
      事件监听的方法
    */
    //1.接收选项卡点击的方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;

        case 1:
          this.currentType = "new";
          break;

        case 2:
          this.currentType = "sell";
          break;

        default:
          break;
      }
    },

    //2.返回顶部按钮的监听
    backClick() {
      //通过ref拿到scroll组件对象,这个组件对象里的data有scroll
      this.$refs.scroll.scrollTo(0, 0, 500);
    },

    //3.获取滚动位置的方法
    contentScroll(position) {
      //注意position的y是负数
      this.isShowBackTop = -position.y > 1000;
    },

    //4.下拉加载更多
    loadMore(){
      this.getHomeGoods(this.currentType);
    },

    /*
      网络请求相关的方法
    */
    //1.获取轮播图数据的方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        //拿到返回的数据
        this.banners = res.data.banner.list; //将数据保存到data
        this.recommends = res.data.recommend.list;
      });
    },
    //2.获取商品数据的方法
    getHomeGoods(type) {
      const page = this.goods[type].page + 1; //取出原来的page+1
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list); //因为有页数,不能直接覆盖,要用push
        this.goods[type].page++;
        this.$refs.scroll.finishPullUp();
      });
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>

<style scoped >
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.tab-control {
  /* position: sticky;
  top: 44px;
  z-index: 9; */
}
/* .content{
  margin-top: 44px;
  height: calc(100% - 93px);
} */

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
}
</style>
