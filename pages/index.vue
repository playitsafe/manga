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
    /*
    Imgs: {
      Mon: {row1:[], row2:[]}
      ...
      Sun: {row1:[], row2:[]}
    }
    */
    for (let i = 0; i < days.length; i++) {
      for (let imgDayKey in Imgs.dailyImgs) {
        if (imgDayKey === days[i]) {
          imgArray.push(Imgs.dailyImgs[imgDayKey]);
        }
      }
    }
    // imgArray: [{row1:[],row2:[]},...,{}]
    const colors = ['#37308c', '#fd337f','#8b00e9','#00b19a','#046afa','#eea802','#18b636', '#8e702f'];
    for (let i = 0; i < imgArray.length; i++) {
      for (let row in imgArray[i]) {
        for (let j = 0; j < imgArray[i][row].length; j++) {
          let randomIndex = Math.floor(Math.random() * colors.length);
          imgArray[i][row][j].color = colors[randomIndex];
        }
      }
    }
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