<template>
  <div class="recommends"> 
    <div v-for="(item,index) in recommends" :key="index" class="recommends-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div> {{item.title}} </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'RecommendView',
  props:{
    recommends:{
      type:Array,
      default(){
        return [];
      },
    }
  }
}
</script>

<style>
.recommends{
  width: 100%;
  display: flex;
  font-size: 12px;
  padding:  10px 0 20px;
  border-bottom:  10px solid #eee;
}
.recommends-item{
  flex: 1;
  text-align: center;
}
.recommends-item img{
  width: 70px;
  height: 70px;
}


</style>