<template>
  <div class="daily">
    <StickyBar :navItems="navItems" />
    <DailyMain />
    <CompletedMain />
  </div>
</template>

<script>
import StickyBar from '@/components/public/StickyBar';
import DailyMain from '@/components/daily/DailyMain';
import CompletedMain from '@/components/daily/CompletedMain';

export default {
  components: {
    StickyBar,
    DailyMain,
    CompletedMain
  },
  data() {
    return {
      navItems: [
        {
          id: '#daily-week',
          title: '连载' 
        },
        {
          id: '#daily-completed',
          title: '完结' 
        }
      ]
      // weekArray: []
    }
  }
}
</script>

<style lang="scss">

</style>