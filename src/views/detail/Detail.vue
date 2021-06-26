<template>
  <div id="detail">
    <!-- 顶部导航栏 -->
    <detail-nav-bar class="detail-bar" @titleClick="titleClick" ref="nav" />

    <!--滚动区域  -->
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
      <!-- 轮播图组件-->
      <detail-swiper :topImages="topImages" />
      <!-- 商品信息组件 -->
      <detail-base-info :goods="goods" />
      <!-- 店铺信息组件 -->
      <detail-shop-info :shop="shop" />
      <!-- 商品详情信息组件 -->
      <detail-goods-info
        :detailInfo="detailInfo"
        @imageLoad="imageLoad"
        ref="goodsInfo"
      />
      <!-- 商品详情参数 -->
      <detail-param-info :paramInfo="paramInfo" ref="params" />
      <!-- 评论信息 -->
      <detail-comment-info :commentInfo="commentInfo" ref="comment" />
      <goods-list :goods="recommends" ref="recommend" />
    </scroll>
    <!-- 底部工具栏 -->
    <detail-bottom-bar @addCart='addCart'></detail-bottom-bar>

    <!-- 返回顶部的组件 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
// 详情页,顶部导航组件
import DetailNavBar from "./childComps/DetailNavBar.vue";
//详情页轮播图组件
import DetailSwiper from "./childComps/DetailSwiper.vue";
//商品信息展示组件
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
//店铺信息展示组件
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
//商品详情信息组件
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
//商品参数组件
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
//评论信息
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
//底部导航栏组件
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

//引入商品展示列表组件
import GoodsList from "../../components/content/goods/GoodsList.vue";


//防抖函数
import { debounce } from "common/utils";
//详情页面的网络封装
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";
//引入Scroll局部滚动
import Scroll from "components/scroll/Scroll";
//混入
import { itemListenerMixin,backTopMixin } from "../../common/mixin";
import {mapActions} from 'vuex' //映射methods



export default {
  name: "Detail",
  components: {
    DetailNavBar, //导航条组件
    DetailSwiper, //轮播图组件
    DetailBaseInfo, //商品信息组件
    DetailShopInfo, //店铺信息组件
    Scroll, //局部滚动
    DetailGoodsInfo, //商品详情信息组件
    DetailParamInfo, //商品参数组件
    DetailCommentInfo, //评论组件
    GoodsList, //商品列表
    DetailBottomBar, //底部导航栏 
  },
  data() {
    return {
      iid: null, //id
      topImages: [], //顶部导航图片
      goods: {}, //商品信息数据
      shop: {}, //店铺信息
      detailInfo: {}, //商品详情图片
      paramInfo: {}, //商品参数信息
      commentInfo: {}, //评论信息
      recommends: [], //推荐商品
      themTopYs: [], //每一个标题的高度
      getThemeTopY: null, //防抖(保存获取各个主题的高度)
      currentIndex: null, //保存对应高度的i值
      message:'',
      show:false,
    };
  },
  mixins: [itemListenerMixin,backTopMixin],
  created() {
    this.iid = this.$route.params.iid; ////保存动态路由传过来的id
    //1.请求对应id的数据
    getDetail(this.iid).then((res) => {
      console.log(res);
      const data = res.result;
      //1.保存轮播图的数据
      this.topImages = res.result.itemInfo.topImages;

      //2.保存商品信息数据(多个对象,通过类整理数据)
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //3.保存商店信息(多个对象,通过类整理数据)
      this.shop = new Shop(data.shopInfo);

      //4.保存商品详情图片的信息
      this.detailInfo = data.detailInfo;

      //5.商品参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      //5.评论信息
      //判断有没有评论
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }

      //1.第一次获取值,值不对
      //值不对的原因:this.$refs.params.$el压根没有绚烂

      //第一个,商品的高度
      // this.themTopYs.push(0);
      // //第二个,参数的高度
      // this.themTopYs.push(this.$refs.params.$el.offsetTop);
      // //第三个,评论的高度
      // this.themTopYs.push(this.$refs.comment.$el.offsetTop);
      // //第四个,推荐的高度
      // this.themTopYs.push(this.$refs.recommend.$el.offsetTop);
      // console.log(this.themTopYs);

      //等绚烂完毕,计算高度
      //2.第二次获取值,值不对
      //值不对原因:图片没加载完

      // this.$nextTick(() => {
      //   //根据最新的数据,对应的DOM是已经被绚烂出来
      //   //但是图片依然是没有加载完
      //   //offsetTop值不对,一般都是因为图片问题
      //   //第一个,商品的高度
      //   this.themTopYs.push(0);
      //   //第二个,参数的高度
      //   this.themTopYs.push(this.$refs.params.$el.offsetTop);
      //   //第三个,评论的高度
      //   this.themTopYs.push(this.$refs.comment.$el.offsetTop);
      //   //第四个,推荐的高度
      //   this.themTopYs.push(this.$refs.recommend.$el.offsetTop);
      //   console.log(this.themTopYs);
      // });
    });

    //2.获取推荐数据
    getRecommend().then((res) => {
      console.log(res);
      this.recommends = res.data.list;
    });

    //3.给getThemeTopY赋值
    this.getThemeTopY = debounce(() => {
      //第一个,商品的高度
      this.themTopYs.push(0);
      //第二个,参数的高度
      this.themTopYs.push(this.$refs.params.$el.offsetTop);
      //第三个,评论的高度
      this.themTopYs.push(this.$refs.comment.$el.offsetTop);
      //第四个,推荐的高度
      this.themTopYs.push(this.$refs.recommend.$el.offsetTop);
    });
  },
  mounted() {},
  updated() {},
  // 销毁后调用
  destroyed() {
    // this.$bus.off("itemImageLoad", this.itemImgListener);
  },
  methods: {
    ...mapActions({
      add:'addCart'
    }),
    //1.图片加载完毕
    imageLoad() {
      //图片加载完成
      this.$refs.scroll.refresh(); //调用刷新,重新计算高度
      this.themTopYs = []; //每次都是一个新的数组,

      //每一个标题对应的高度
      this.getThemeTopY();
    },
    //2.点击标题,跳转到对应位置
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themTopYs[index], 100);
    },

    //3.监听滚动的位置
    contentScroll(position) {
      this.listenShowBackTop(position);
      
      //获取y值
      const positionY = -position.y;

      //2.获取到的值和主题中值进行对比,
      let length = this.themTopYs.length;
      for (let i = 0; i < this.themTopYs.length; i++) {
        if (
          this.currentIndex !== i &&
          ((i < length - 1 &&
            positionY > this.themTopYs[i] &&
            positionY <= this.themTopYs[i + 1]) ||
            (i === length - 1 && positionY >= this.themTopYs[i]))
        ) {
          //保存i值
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    //4.添加购物车
    addCart(){
      //1.获取购物车需要展示的信息 
      const product ={};
      product.image = this.topImages[0]; //商品图片
      product.titil = this.goods.title;  //商品标题
      product.desc = this.goods.desc //详情信息
      product.price = this.goods.realPrice //商品价格
      product.iid = this.iid //商品的id
      

      //2.将商品添加到购物车里(1.Promise 2.mapAction)
      // this.$store.commit('addCart',product);
      //将actions的方法,映射到methods
      this.add(product).then(res =>{
        //购物车添加成功
        this.$toast.show(res,1500);
      })
    },

  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 102px);
  /* overflow: hidden; */
}
.detail-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>