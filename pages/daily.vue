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
  head: {
    title: '漫话小说每日更新 | 一周最新更新的漫画小说 - 漫书MangaBook'
  },
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
          title: '连载',
          color: '#00dc64'
        },
        {
          id: '#daily-completed',
          title: '完结',
          color: '#00dc64'
        }
      ]
      // weekArray: []
    }
  },
  // metho
  // mounted() {
  //   window.addEventListener('scroll', this.checkScrollForFix);

  // },
  // destroyed() {

  // }
}
</script>

<style lang="scss">

</style>