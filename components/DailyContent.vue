<template>
  <div class="daily-content">
    <DailyBar />
    <ImgRow v-for="row in Object.keys(dailyImgs[showDay])" :key="row"
      :imgs="dailyImgs[showDay][row]" />
  </div>
</template>

<script>
import DailyBar from '@/components/DailyBar';
import ImgRow from '@/components/ImgRow';
//import dailyImgs from '@/assets/rawData/imgs';

export default {
  props: {
    dailyImgs: Array
  },
  components: {
    DailyBar,
    // ImgRow
  },
  data() {
    return {
      showDay: new Date().getDay() - 1,
      // dailyImgs: []
    }
  },
  computed: {
    
  },
  mounted() {
    // console.log('propday',this.dailyImgs)

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

  /* &-imgrow {
    list-style: none;
    width: 1110px;
    display: flex;
    justify-content: space-between;
    margin: 7.5px 0;

    &-grid {
      float: left;
      img {
        // width: 210px;
        height: 210px;
      }
    }
  } */
}
</style>