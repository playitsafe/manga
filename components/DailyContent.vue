<template>
  <div class="daily-content">
    <DailyBar :showDay="showDay" @changeDayImg="showDay = $event" />
    <ImgRow v-for="row in Object.keys(dailyImgs[showDay])" :key="row"
      :imgs="dailyImgs[showDay][row]" />
  </div>
</template>

<script>
import DailyBar from '@/components/DailyBar';
import ImgRow from '@/components/ImgRow';

export default {
  props: {
    dailyImgs: Array
  },
  components: {
    DailyBar,
    ImgRow
  },
  data() {
    return {
      showDay: new Date().getDay()
    }
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
}
</style>