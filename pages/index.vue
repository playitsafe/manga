<template>
  <div class="main">
    <MainBanner />
    <DailyContent :dailyImgs="dailyImgs" />
  </div>
</template>

<script>
import MainBanner from '../components/MainBanner';
import DailyContent from '../components/DailyContent';

import Imgs from '@/assets/rawData/imgs';

export default {
  components: {
    MainBanner,
    DailyContent
  },
  data() {
    return {
      dailyImgs: []
    }
  },
  asyncData() {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let imgArray = [];
    for (let i = 0; i < days.length; i++) {
      for (let imgDayKey in Imgs.dailyImgs) {
        if (imgDayKey === days[i]) {
          imgArray.push(Imgs.dailyImgs[imgDayKey]);
        }
      }
    }
    // console.log('imgArr',imgArray)
    return {
      dailyImgs: imgArray
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/base.scss';

.main {
  /* height: 1000px; */
}

</style>