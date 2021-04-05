<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "HomeSwiper",
  components: {
    SwiperItem,
    Swiper, //轮播图组件
    SwiperItem, //轮播图的每个元素组件
  },
  props:{
    banners:{
      type:Array,
      default(){
        return [];
      }
    },
  }
  
};
</script>

<style>
</style>