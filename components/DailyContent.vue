<template>
  <div class="daily-content">
    <DailyBar />
    <div>
      <ul v-for="row in Object.keys(dailyImgs)" :key="row"
          class="daily-content-imgrow">
        <a href="#" v-for="img in dailyImgs[row]" :key="img.url">
          <li class="daily-content-imgrow-grid">
            <img :src="img.url" alt="" 
              :style="img.type===2 ? 'width:435px' : 'width:210px'">
          </li>
        </a>
      </ul>
      <!-- <ul class="daily-content-upper">
        <a href="#" v-for="img in dailyImgs1" :key="img.url">
          <li class="daily-content-upper-grid">
            <img :src="img.url" alt="" 
              :style="img.type===2 ? 'width:435px' : 'width:210px'">
          </li>
        </a>
      </ul>
      <ul class="daily-content-lower">
        <a href="#" v-for="img in dailyImgs2" :key="img.url">
          <li class="daily-content-lower-grid">
            <img :src="img" alt="">
          </li>
        </a>
      </ul> -->
    </div>
  </div>
</template>

<script>
import DailyBar from '@/components/DailyBar';

export default {
  components: {
    DailyBar
  },
  data() {
    return {
      dailyImgs: {
        row1: [
          {url:'/imgs/x6.jpg', type:1}, 
          {url:'/imgs/x7.jpg', type:1}, 
          {url:'/imgs/xx1.jpg', type:2}, 
          {url:'/imgs/x8.jpg', type:1}
        ],
        row2: [
          {url:'/imgs/x1.jpg', type:1}, 
          {url:'/imgs/x2.jpg', type:1}, 
          {url:'/imgs/x3.jpg', type:1}, 
          {url:'/imgs/x4.jpg', type:1}, 
          {url:'/imgs/x5.jpg', type:1}
        ]
      }
      
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/util.scss';
.daily-content {
  background: #f4f4f4;
  border-bottom: 1px solid #f1f1f1;
  // @include flex-h-center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;

  &-imgrow {
    list-style: none;
    width: 1110px;
    display: flex;
    justify-content: space-between;
    margin: 15px 0;

    &-grid {
      float: left;
      img {
        /* width: 210px; */
        height: 210px;
      }
    }
  }
}
</style>