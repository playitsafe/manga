<template>
  <div class="daily-content">
    <DailyBar />
    <div>
      <ul class="daily-content-upper">
        <a href="#" v-for="img in dailyImgs1" :key="img">
          <li class="daily-content-upper-grid">
            <img :src="img" alt="">
          </li>
        </a>
      </ul>
      <ul class="daily-content-lower">
        <a href="#" v-for="img in dailyImgs2" :key="img">
          <li class="daily-content-lower-grid">
            <img :src="img" alt="">
          </li>
        </a>
      </ul>
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
      dailyImgs1: ['/imgs/x6.jpg', '/imgs/x7.jpg', '/imgs/x8.jpg', '/imgs/x9.jpg', '/imgs/x10.jpg'],
      dailyImgs2: ['/imgs/x1.jpg', '/imgs/x2.jpg', '/imgs/x3.jpg', '/imgs/x4.jpg', '/imgs/x5.jpg']
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

  &-upper {
    
  }

  &-lower{
    margin: 15px 0 40px;
  }

  &-lower, &-upper {
    list-style: none;
    width: 1110px;
    display: flex;
    justify-content: space-between;

    &-grid {
      float: left;
      img {
        width: 210px;
        height: 210px;
      }
    }
  }
}
</style>