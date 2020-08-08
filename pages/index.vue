<template>
  <div class="main">
    <MainBanner />
    <DailyContent />
    <NewContent />
    <CategoryContent />
    <RankContent />
    <Footer />
    <SideDrawer />
  </div>
</template>

<script>
import MainBanner from '@/components/home/MainBanner';
import DailyContent from '@/components/home/DailyContent';
import NewContent from '@/components/home/NewContent';
import CategoryContent from '@/components/home/CategoryContent';
import RankContent from '@/components/home/RankContent';
import Footer from '@/components/public/Footer';
import SideDrawer from '@/components/public/SideDrawer';

import Imgs from '@/assets/rawData/imgs';
import { rankings } from '@/assets/rawData/rank';

export default {
  components: {
    MainBanner,
    DailyContent,
    NewContent,
    CategoryContent,
    RankContent,
    Footer,
    SideDrawer
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
  }
}
</script>

<style lang="scss">
@import '../assets/css/base.scss';
</style>