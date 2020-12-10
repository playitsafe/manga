<template>
  <div class="index">
    <MainBanner />
    <div class="index-section-wrapper">
      <HomeSection v-for="section in sections" :key="section.id" :content="section" />
    </div>
    <!-- <DailyContent />
    <NewContent />
    <CategoryContent />
    <RankContent /> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MainBanner from '@/components/home/MainBanner';
import HomeSection from '@/components/home/HomeSection';
// import DailyContent from '@/components/home/DailyContent';
// import NewContent from '@/components/home/NewContent';
// import CategoryContent from '@/components/home/CategoryContent';
// import RankContent from '@/components/home/RankContent';

import { getDailyContentArray, getNewContentArray, getCategoryArray, addColor } from '@/utils';

// import Imgs from '@/assets/rawData/imgs';
// import { rankings } from '@/assets/rawData/rank';

export default {
  head: {
    title: '漫书MangaBook | 每天更新的漫画书！'
  },
  components: {
    MainBanner,
    // DailyContent,
    // NewContent,
    // CategoryContent,
    // RankContent,
  },
  computed: {
    ...mapState({
      sections: state => state.home.homeSections
    })
  },
  data() {
    return {
      // dailyImgs: [],
      // newImgs: [],
      // categoryImgs: [],
      rankings: {}
    }
  },

  async fetch({ store, app }) {
    let [ banners, sections ] = await Promise.all([
      app.$axios.get('/homepage/promotions').then( res => res.status === 200 && res.data.status === 'success' ? res.data.data.banners : [] ),
      app.$axios.get('/homepage/recommendations').then( res => res.status === 200 && res.data.status === 'success' ? res.data.data: [] ),
    ]);

    store.commit('home/setMainBanners', banners);
    store.commit('home/setHomeSections', sections);

    // let [ banners, dailyData, newImgs, cateImgs, rankImgs ] = await Promise.all([
    //   app.$axios.get('/mainBanner').then( res => res.status === 200 ? res.data.banners : [] ),
    //   app.$axios.get('/dailyImgs').then( res => res.status === 200 ? res.data : {} ),
    //   app.$axios.get('/latest').then( res => res.status === 200 ? res.data : {} ),
    //   app.$axios.get('/categoryImgs').then( res => res.status === 200 ? res.data : {} ),
    //   app.$axios.get('/rank').then( res => res.status === 200 ? res.data : {} )
    // ]);

    // store.commit('home/setMainBanners', banners);
    // store.commit('home/setDailyImgs', getDailyContentArray(dailyData));
    // store.commit('home/setNewImgs', getNewContentArray(newImgs));
    // store.commit('home/setCategoryImgs', getCategoryArray(cateImgs));
    // store.commit('home/setRankings', addColor(rankImgs));



    // //***get main banner swiper */
    // const { status, data: {banners} } = await app.$axios.get('/mainBanner');
    // store.commit('home/setMainBanners', status === 200 ? banners : []);

    // //***get daily content */
    // const { status:status2, data:dailyData } = await app.$axios.get('/dailyImgs');

    // if (status2 === 200) {
    //   store.commit('home/setDailyImgs', getDailyContentArray(dailyData));
    // }

    // //***get latest content */
    // const { status:status3, data:newImgs } = await app.$axios.get('/latest');
    // if (status3 === 200) {
    //   store.commit('home/setNewImgs', getNewContentArray(newImgs));
    // }

    // //***get category content */
    // const { status:status4, data:cateImgs } = await app.$axios.get('/categoryImgs');
    // if (status4 === 200) {
    //   store.commit('home/setCategoryImgs', getCategoryArray(cateImgs));
    // }

    // //***get rank content */
    // const { status:status5, data:rankImgs } = await app.$axios.get('/rank');
    // if (status5 === 200) {
    //   store.commit('home/setRankings', addColor(rankImgs));
    // }
  }
}
</script>

<style lang="scss">
@import '../assets/css/base.scss';

.index {
  &-section-wrapper {
    /* background: pink; */
    max-width: 11.25rem;
    margin: 0 auto;
    padding: .6rem 0;
    transform: translateX(-.075rem);
  }
}
</style>
