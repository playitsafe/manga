<template>
  <div class="main">
    <MainBanner />
    <DailyContent />
  </div>
</template>

<script>
import MainBanner from '../components/MainBanner';
// import DailyBar from '../components/DailyBar';
import DailyContent from '../components/DailyContent';
export default {
  components: {
    MainBanner,
    // DailyBar,
    DailyContent
  }
}
</script>

<style lang="scss">
@import '../assets/css/base.scss';

.main {
  /* height: 1000px; */
}

</style>