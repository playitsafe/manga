<template>
  <div class="main">
    <MainBanner />
  </div>
</template>

<script>
import MainBanner from '../components/MainBanner';
export default {
  components: {
    MainBanner
  }
}
</script>

<style lang="scss">
@import '../assets/css/base.scss';

.main {
  height: 1000px;
}

</style>