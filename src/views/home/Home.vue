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
  </div>
</template>

<script>
//顶部导航条
import NavBar from 'components/common/navbar/NavBar';
//home组件网络封装
import {getHomeMultidata} from 'network/home';
//轮播图组件
import HomeSwiper from './childComps/HomeSwiper'
//推荐展示组件
import RecommendView from './childComps/RecommendView'


export default {
  name:'Home',
  data(){
    return {
      banners:[],
      recommends:[],
    }
  },
  components:{
    NavBar, //顶部导航条组件
    HomeSwiper,//完成好的轮播图组件
    RecommendView, //推荐展示组件

  },
  created(){
    //组件创建完之后发送网络请求
    //1.请求数据
    getHomeMultidata().then(res =>{
      //拿到返回的数据
      this.banners = res.data.banner.list //将数据保存到data
      this.recommends = res.data.recommend.list
    })
    
  }
}
</script>

<style>
  .home-nav{
    background-color:var(--color-tint) ;
    color: white;
  }
</style>