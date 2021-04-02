<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import {getHomeMultidata} from 'network/home'
export default {
  name:'Home',
  data(){
    return {
      banners:[],
      recommends:[],
    }
  },
  components:{
    NavBar,
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