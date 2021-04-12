<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="../../../assets/img/common/back.svg" alt="" />
      </div>

      <div slot="center" class="title">
        <div
          v-for="(item, index) in tltles"
          class="titleitem"
          :key="index"
          :class="{ active: currentIndex === index }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
      
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      tltles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      //点击谁,谁就变色
      this.currentIndex = index;
    },
    backClick(){
      //点击返回
      this.$router.back();
    }
  },
};
</script>

<style scoped>
.title {
  display: flex;
}
.titleitem {
  flex: 1;
  font-size: 13px;
}
.active {
  color: var(--color-high-text);
}
.back img{
  transform: translateY(5px);
}
</style>