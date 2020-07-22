<template>
  <div class="main">
    <MainBanner />
    <DailyBar />
  </div>
</template>

<script>
import MainBanner from '../components/MainBanner';
import DailyBar from '../components/DailyBar';
export default {
  components: {
    MainBanner,
    DailyBar
  }
}
</script>

<style lang="scss">
@import '../assets/css/base.scss';

.main {
  height: 1000px;
}

</style>