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
import ImgRow from '@/components/ImgRow';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

export default {
  props: {
    newImgs: Array
  },
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
  }
}
</script>

<style lang="scss">
@import '@/assets/css/util.scss';

.new {
  background: #f4f4f4;
  border-bottom: 1px solid #c2c2c2;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* @include flex-h-center; */

  &-title {
    text-align: center;
    font-size: 22px;
    font-weight: 700;
    padding: 30px 0;
  }

  &-carousel {
    width: 1230px;
    position: relative;
    padding-bottom: 25px;

    .swiper-container {
      width: 1110px;
      /* overflow: visible; */
    padding-bottom: 35px;
    }

    .swiper-button-prev, .swiper-button-next {
      
      outline: none;
      color: #acacac;

      &:hover {
        color: #44e013;
      }
      /* &::after {
        width: 15px;
        height: 24px;

      } */

      /* position: absolute; */
      /* left: -20px; */
      /* transform: translateX(-100%); */

    }

    /* .swiper-container {
      padding-bottom: 30px;

      .swiper-pagination {
        position: absolute;
        bottom: 0px;
        
        &-bullet {
          height: 10px;
          width: 10px;

          &-active {
            background: #000000;
          }
        }
      }
    } */
    .swiper-pagination {
      position: absolute;
      bottom: 0px;

      &-bullet {
        display: inline-block;
        height: 12px;
        width: 12px;
        margin: 0 6px !important;

        &-active {
          background: #000000;
        }
      }
    }

  }
}
</style>