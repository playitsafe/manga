<template>
  <div class="daily-content">
    <DailyBar :showDay="showDay" @change-day-img="showDay = $event + 1" />
    <div class="daily-content-wrap">
      <ImgRow v-for="row in Object.keys(dailyImgs[showDay - 1])" :key="row"
        :imgs="dailyImgs[showDay - 1][row]" />
    </div>
  </div>
</template>

<script>
import DailyBar from '@/components/home/DailyBar';
import ImgRow from '@/components/public/ImgRow';

import { mapGetters } from 'vuex';

export default {
  // props: {
    // [
    //   {row1:[],row2:[]},...{}
    // ]
  //   dailyImgs: Array
  // },
  components: {
    DailyBar,
    ImgRow
  },
  data() {
    return {
      // Sun:0 Mon:1...
      showDay: new Date().getDay() === 0 ? 7 : new Date().getDay()
    }
  },
  computed: {
    ...mapGetters({
      dailyImgs: 'home/getDailyImgsArray'
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/css/util.scss';
.daily-content {
  background: #f4f4f4;
  border-bottom: 1px solid #c2c2c2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;

  &-wrap {
    width: 1110px;
  }
}
</style>