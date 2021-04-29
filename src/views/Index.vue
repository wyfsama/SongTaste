<template>
  <div>
    <!-- nav-bar -->
    <van-nav-bar fixed placeholder class="navbar">
      <template #left>
        <van-icon class="menu-icon" name="wap-nav"/>
      </template>
      <template #title> SongTaste </template>
      <template #right>
        <van-icon class="search-icon" name="search" />
      </template>
    </van-nav-bar>
    <!-- swipe -->
    <index-swipe></index-swipe>
  </div>
</template>

<script>
import IndexSwipe from '../components/Index/IndexSwipe.vue';
export default {
  components:{
    IndexSwipe
  }
};
</script>

<style lang="less" scoped>
.navbar{
  .menu-icon{
    // color:#fff;
    font-size: 18px;
  }
  .search-icon{
    font-weight:900;
    font-size: 20px;
  }
}
</style>