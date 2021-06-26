<template>
  <div id="home">
    <!-- 顶部导航条组件 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <!-- 复制的选项卡组件 -->
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-contral"
      v-show="isTabFixed"
    ></tab-control>

    <!-- 封装好的滚动框架 -->`
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      :pullUpLoad="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <!-- 轮播图组件 -->
      <home-swiper
        :banners="banners"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <!-- 推荐展示组件 -->
      <recommend-view :recommends="recommends"></recommend-view>
      <!-- 本周推荐组件 -->
      <feature-view></feature-view>
      <!-- 选项卡组件 -->
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
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

//home组件网络封装
import { getHomeMultidata, getHomeGoods } from "network/home";
//引入滚动优化框架的封装
import Scroll from "components/scroll/Scroll.vue";


//引入混入
import {itemListenerMixin,backTopMixin} from 'common/mixin'

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
      tabOffsetTop: 0, //tabControl距离顶部的高度
      isTabFixed: false, //决定tabControl是否吸顶
      saveY: 0, //保存路由离开时位置的高度
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
  },
  mixins:[itemListenerMixin,backTopMixin],
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
  mounted() {

  },
  activated() {
    //路由活跃的时候(进来)
    //1.进来时设置保存的高度
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh() //刷新一下
  },
  deactivated() {
    //不活跃的时候(离开)
    //1.离开时保存高度
    this.saveY = this.$refs.scroll.getScrollY();
  
    //2.取消全局事件监听
    this.$bus.$off('itemImgLoad',this.itemImgListener);
  },
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
      if(this.$refs.tabControl1.currentIndex != null){
      //让两个的点击状态保持一致
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
      }
    },
    //3.滚动位置的监听
    contentScroll(position) {
       this.listenShowBackTop(position);

      //2.判断tabControl是否固定(吸顶)
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },

    //4.下拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType);
    },

    //5.轮播图片加载完成
    swiperImageLoad() {
      //2.获取tabControl的tabOffsetTop
      //所有组件都有一个属性$el,用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
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
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: relative;
  z-index: 9;
  /* 使用浏览器原生滚动时,将导航栏固定住,不跟随滚动 */
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9; */
}

/* .content{
  margin-top: 44px;
  height: calc(100% - 93px);
} */
.tab-contral {
  position: relative;
  z-index: 9;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
}
</style>
