<template>
  <div class="new">
    <h3 class="new-title">新作推荐</h3>

    <div class="new-carousel" >
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div v-swiper:mySwiper="swiperOptions">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(row,i) in newImgs" :key="i">
            <ImgRow :imgs="row" />
          </div>
        </div>
        <div class="swiper-pagination"></div>

      </div>
      <!-- <div class="swiper-button-prev" slot="navigation"></div>
      <div class="swiper-button-next" slot="navigation"></div>
      <Swiper ref="mySwiper" :options="swiperOptions">

        <SwiperSlide v-for="(row,i) in newImgs" :key="i">
          <ImgRow :imgs="row" />
        </SwiperSlide>
        <div class="swiper-pagination" slot="pagination"></div>
      </Swiper> -->
    </div>
  </div>
</template>

<script>
import ImgRow from '@/components/public/ImgRow';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import { mapState } from 'vuex';

export default {
  // props: {
  //   newImgs: Array
  // },
  directives: {
    swiper: directive
  },
  components: {
    ImgRow,
    // Swiper,
    // SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false
        // },
        loop: true,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          clickable :true
        },
        // effect: 'fade',
        // fadeEffect: {
        //   crossFade: true
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        observer: true,  
        observeParents: true,
      }
    }
  },
  computed: {
    ...mapState({
      newImgs: state => state.home.newImgs
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/css/util.scss';

.new {
  background: #f4f4f4;
  border-bottom: 0.01rem solid #c2c2c2;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* @include flex-h-center; */

  &-title {
    text-align: center;
    font-size: 0.22rem;
    font-weight: 700;
    padding-top: 0.3rem;
  }

  &-carousel {
    width: 12.3rem;
    position: relative;
    padding-bottom: 0.25rem;

    .swiper-container {
      width: 11.1rem;
      /* overflow: visible; */
      padding: 0.3rem 0;
    }

    .swiper-button-prev, .swiper-button-next {
      outline: none;
      color: #acacac;

      &:hover {
        color: #44e013;
      }
    }

    .swiper-pagination {
      position: absolute;
      bottom: 0rem;

      &-bullet {
        display: inline-block;
        height: 0.12rem;
        width: 0.12rem;
        margin: 0 0.06rem !important;

        &-active {
          background: #000000;
        }
      }
    }

  }
}
</style>