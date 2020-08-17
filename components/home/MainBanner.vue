<template>
  <div class="main-banner">
    <div class="main-banner-inner">

      <!-- <div class="main-banner-inner-big" v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" :key="banner" v-for="banner in banners">
            <img :src="banner">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div> -->
      <div class="main-banner-inner-big">
        <Swiper ref="mySwiper" :options="swiperOptions">
          <SwiperSlide v-for="banner in banners" :key="banner.url">
            <nuxt-link to="/item/itemid001">
              <img :src="banner.url" alt="">
            </nuxt-link>
          </SwiperSlide>
          <div class="swiper-pagination" slot="pagination"></div>
        </Swiper>
      </div>
      <a href="#"><div class="main-banner-inner-sm1"></div></a>
      <div class="main-banner-inner-sm2"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.min.css';

import { mapState } from 'vuex';

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },

  data() {
    return {
      // banners: [ '/imgs/banner1.png', '/imgs/banner2.png', '/imgs/banner3.png', '/imgs/banner4.png', '/imgs/banner5.png', '/imgs/banner6.png', '/imgs/banner7.png', '/imgs/banner8.png' ],
      swiperOptions: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        loop: false,
        spaceBetween: 100,
        pagination: {
          el: '.swiper-pagination',
          clickable :true
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        }
      }
    }
  },
  computed: {
    ...mapState({
      banners: state => state.home.mainBanners
    }),
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/util.scss';

.main-banner {
  height: 492px;
  width: 100%;
  /* background-image: url('/imgs/home_bg.jpg');
  background-size: cover; // contain
  background-position: center; */
  @include img-bg('/imgs/home_bg.jpg', cover, center);
  @include flex-h-center;

  &-inner {
    height: 492px;
    min-width: 1110px;
    position: relative;

    &-big {
      height: 492px;
      width: 946px;
      position: absolute;
      left: -100px;
      /* overflow: auto; */
      .swiper-pagination {
        /* height: 40px; */
        width: 200px;
        position: absolute;
        left: 110px;
        bottom: 55px;

        &-bullet {
          width: 12px;
          height: 12px;
          background: #fff;
        }
      }
    }

    &-sm1 {
      height: 208px;
      width: 314px;
      position: absolute;
      top: 38px;
      right: 0;
      /* background-image: url('/imgs/corner1.png');
      background-size: cover; // contain
      background-position: center; */
      @include img-bg('/imgs/corner1.png', cover, center);
    }

    &-sm2 {
      height: 224px;
      width: 280px;
      position: absolute;
      bottom: 38px;
      right: 0;
      @include img-bg('/imgs/corner2.png', cover, center);
    }
  }
}
</style>