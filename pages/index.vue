<template>
  <div class="main">
    <MainBanner />
    <DailyContent />
    <NewContent />
    <CategoryContent />
    <RankContent />
  </div>
</template>

<script>
import MainBanner from '@/components/home/MainBanner';
import DailyContent from '@/components/home/DailyContent';
import NewContent from '@/components/home/NewContent';
import CategoryContent from '@/components/home/CategoryContent';
import RankContent from '@/components/home/RankContent';

import { getDailyContentArray, getNewContentArray, getCategoryArray, addColor } from '@/utils';

// import Imgs from '@/assets/rawData/imgs';
// import { rankings } from '@/assets/rawData/rank';

export default {
  head: {
    title: '漫书MangaBook | 每天更新的漫画书！'
  },
  components: {
    MainBanner,
    DailyContent,
    NewContent,
    CategoryContent,
    RankContent,
  },
  data() {
    return {
      // dailyImgs: [],
      // newImgs: [],
      // categoryImgs: [],
      rankings: {}
    }
  },
  // mounted() {
  //   console.log('rankings', rankings)
  // },
  asyncData() {
    // const colors = ['#37308c', '#fd337f','#8b00e9','#00b19a','#046afa','#eea802','#18b636', '#8e702f'];

    //get categoryImgs
    // let cateImgs = [];

    // get categoryData 
    // for(let key in Imgs.categoryImgs) {
    //   let randomIndex = Math.floor(Math.random() * colors.length);
    //   for(let img of Imgs.categoryImgs[key].imgs) {
    //     img.color = colors[randomIndex];
    //   }
    //   cateImgs.push(Imgs.categoryImgs[key]);
    // }

    //cateImgs:
    // [{cateTitle:'', category:'', imgs:[]}, {}]

    //add color to rankings
    // for(let cate in rankings) {
    //   for(let key in rankings[cate]) {
    //     let randomIndex = Math.floor(Math.random() * colors.length);
    //     rankings[cate][key].color = colors[randomIndex];
    //   }
    // }

    // console.log(rankings)

    //rankings
    // {
    //   beCategory:{
    //     love: {category: '', rank: [{},...{}]}
    //     ...
    //   },
    //   byAge: {
    //     m10: {}
    //   }
    // }

    return {
      // dailyImgs: dailyImgArray,
      // newImgs: newImgArray,
      // categoryImgs: cateImgs,
      // rankings
    }
  },
  async fetch({ store, app }) {
    //***get main banner swiper */
    const { status, data: {banners} } = await app.$axios.get('/mainBanner');
    store.commit('home/setMainBanners', status === 200 ? banners : []);

    //***get daily content */
    const { status:status2, data } = await app.$axios.get('/dailyImgs');

    if (status2 === 200) {
      store.commit('home/setDailyImgs', getDailyContentArray(data));
    }
    
    //***get latest content */
    const { status:status3, data:newImgs } = await app.$axios.get('/latest');
    if (status3 === 200) {
      store.commit('home/setNewImgs', getNewContentArray(newImgs));
    }

    //***get category content */
    const { status:status4, data:cateImgs } = await app.$axios.get('/categoryImgs');
    if (status4 === 200) {
      store.commit('home/setCategoryImgs', getCategoryArray(cateImgs));
    }

    //***get rank content */
    const { status:status5, data:rankImgs } = await app.$axios.get('/rank');
    if (status5 === 200) {
      store.commit('home/setRankings', addColor(rankImgs));
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/base.scss';
</style>