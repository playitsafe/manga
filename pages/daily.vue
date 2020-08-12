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
      navItems: ['连载', '完结'],
      // weekArray: []
    }
  },
  async asyncData({ $axios }) {
  //   const { data: fullWeekList } = await $axios.get('/fullWeek');
  //   // console.log(fullWeekList)
  //   const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  //   let weekArray = [];
  //   for(let day of week) {
  //     for(let key in fullWeekList) { //Mon...
  //       if(key === day) {
  //         weekArray.push(fullWeekList[key]);
  //       }
  //     }
  //   }
  //   return { weekArray };
  }
}
</script>

<style lang="scss">

</style>