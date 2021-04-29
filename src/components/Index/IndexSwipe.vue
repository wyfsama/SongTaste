<template>
  <div>
    <van-swipe :autoplay="3000" class="swiper">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" class="img" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { _getSwiper } from "@/network/index.js";
export default {
  data() {
    return {
      images: [],
    };
  },
  methods: {
    async getSwiper() {
      let { data: res } = await _getSwiper();
      console.log(res.banners);
      if (res.code === 200) {
        for (let i = 0; i < res.banners.length; i++) {
          this.images.push(res.banners[i].pic);
        }
      }
    },
  },
  created() {
    this.getSwiper();
  },
};
</script>

<style lang="less" scoped>

  .img {
    width: 100vw;
  }

</style>