<template>
  <div id="home">
    <!-- 顶部导航条组件 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 轮播图组件 -->
    <home-swiper :banners='banners'></home-swiper>
    <!-- 推荐展示组件 -->
    <recommend-view :recommends='recommends'></recommend-view>
    <!-- 本周推荐组件 -->
    <feature-view></feature-view>
    <!-- 选项卡组件 -->
    <tab-control :titles="['流行','新款','精选']" class="tab-control"></tab-control>
    <!--商品展示列表组件  -->
    <goods-list :goods='goods.pop.list'></goods-list>

    <ul>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
    </ul>
  </div>
</template>

<script>
//轮播图组件
import HomeSwiper from './childComps/HomeSwiper'
//推荐展示组件
import RecommendView from './childComps/RecommendView'
//本周推荐
import FeatureView from './childComps/FeatureView'


//顶部导航条
import NavBar from 'components/common/navbar/NavBar';
//选项卡组件
import tabControl from 'components/content/tabControl/tabControl'
//商品列表组件
import GoodsList from '../../components/content/goods/GoodsList'

//home组件网络封装
import {getHomeMultidata,getHomeGoods} from 'network/home';

export default {
  name:'Home',
  data(){
    return {
      banners:[], //保存轮播图的数据
      recommends:[], //保存推荐展示的数据
      //保存商品的数据
      goods:{
        pop:{page:0, list:[]}, //保存流行的数据
        new:{page:0, list:[]},//保存新款的数据
        sell:{page:0, list:[]},//保存精选的数据
      }
    }
  },
  components:{
    NavBar, //顶部导航条组件
    HomeSwiper,//完成好的轮播图组件
    RecommendView, //推荐展示组件
    FeatureView,  //本周热门组件
    tabControl,  //选项卡组件
    GoodsList,  //商品列表组件 

  },
  //组件挂载完执行
  created(){
    //组件创建完之后发送网络请求
    //请求多个数据
    this.getHomeMultidata(); //由于名字一样,this不要忘记

    //请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
    
  },
  methods:{
      getHomeMultidata(){
      getHomeMultidata().then(res =>{
      //拿到返回的数据
      this.banners = res.data.banner.list //将数据保存到data
      this.recommends = res.data.recommend.list
    })
    },
    getHomeGoods(type){
      const page = this.goods[type].page +1  //取出原来的page+1
      getHomeGoods(type,page).then(res =>{
      this.goods[type].list.push(...res.data.list); //因为有页数,不能直接覆盖,要用push
      this.goods[type].page++;
    })
    }

  }
}
</script>

<style>
  #home{
    padding-top: 44px;
  }
  .home-nav{
    background-color:var(--color-tint) ;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
  }
</style>
