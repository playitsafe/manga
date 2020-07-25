<template>
  <div class="main">
    <MainBanner />
    <DailyContent :dailyImgs="dailyImgs" />
    <NewContent :newImgs="newImgs" />
  </div>
</template>

<script>
import MainBanner from '../components/MainBanner';
import DailyContent from '../components/DailyContent';
import NewContent from '../components/NewContent';

import Imgs from '@/assets/rawData/imgs';
/*
console.log(Imgs)
{
  dailyImgs: {
    Mon: {row1:[], row2:[]}
    ...
    Sun: {row1:[], row2:[]}
  }
}
*/

export default {
  components: {
    MainBanner,
    DailyContent,
    NewContent,
  },
  data() {
    return {
      dailyImgs: [],
      newImgs: []
    }
  },
  asyncData() {
    //console.log('Imgs', Imgs)

    // get dailyImg data
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let dailyImgArray = [];
    for (let i = 0; i < days.length; i++) {
      for (let imgDayKey in Imgs.dailyImgs) {
        if (imgDayKey === days[i]) {
          dailyImgArray.push(Imgs.dailyImgs[imgDayKey]);
        }
      }
    }
    // dailyImgArray: [ {row1:[],row2:[] },...,{}]
    // push color randomly to elements
    const colors = ['#37308c', '#fd337f','#8b00e9','#00b19a','#046afa','#eea802','#18b636', '#8e702f'];
    for (let i = 0; i < dailyImgArray.length; i++) {
      for (let row in dailyImgArray[i]) {
        for (let j = 0; j < dailyImgArray[i][row].length; j++) {
          let randomIndex = Math.floor(Math.random() * colors.length);
          dailyImgArray[i][row][j].color = colors[randomIndex];
        }
      }
    }

    // get newImg data
    let newImgArray = [];
    for (let newImgKey in Imgs.newImgs) {
      newImgArray.push(Imgs.newImgs[newImgKey]);
    }

    //newImgArray
    /*
    [
      [ {},...,{} ], [ {},...,{} ]
    ]
    */

    // add color
    for (const row of newImgArray) {
      for (let img of row) {
        let randomIndex = Math.floor(Math.random() * colors.length);
        img.color = colors[randomIndex];
      }
    }

    return {
      dailyImgs: dailyImgArray,
      newImgs: newImgArray
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