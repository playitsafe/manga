<template>
  <div class="rankwrap">
    <div class="rankwrap-inner">
      <RankColumn v-for="cateKey in Object.keys(rankings)" :key="cateKey"
       :columnData="rankings[cateKey]" />
    </div>
  </div>
</template>

<script>
import RankColumn from '@/components/rank/RankColumn';
import { mapState } from "vuex";

export default {
  components: {
    RankColumn
  },
  head: {
    title: '漫画小说排行榜 - 热门漫画，人气小说 | 漫书MangaBook'
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      rankings: state => state.home.rankings
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/css/base.scss';
@import '@/assets/css/util.scss';

.rankwrap {
  border-top: 0.01rem solid #eaeaea;
  padding-bottom: 1rem;
  &-inner {
    max-width: 11.1rem;
    /* height: 200px; */
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
}
</style>