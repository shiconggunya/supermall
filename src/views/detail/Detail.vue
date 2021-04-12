<template>
  <div id="detail">
    <!--  -->
    <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue';


export default {
  name: "Detail",
  components: {
    DetailNavBar,
  },
  data() {
    return {
      iid: null, //id
    };
  },
  created() {
    this.iid = this.$route.params.iid; ////保存动态路由传过来的id
  },
};
</script>

<style scoped>
</style>