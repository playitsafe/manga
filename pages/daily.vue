<template>
  <div class="daily">
    <StickyBar :navItems="navItems" />
    <DailyMain />
  </div>
</template>

<script>
import StickyBar from '@/components/public/StickyBar';
import DailyMain from '@/components/daily/DailyMain';

export default {
  components: {
    StickyBar,
    DailyMain
  },
  data() {
    return {
      navItems: ['连载', '完结']
    }
  }
}
</script>

<style>

</style>