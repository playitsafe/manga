<template>
  <div class="rank">
    <div class="rank-inner">
      <RankList v-for="(category,i) in Object.keys(rankings)" :key="i" 
        :ranking="rankings[category]"
        :categories="getCategories(category)"
        :rankType="category" />
    </div>
  </div>
</template>

<script>
import RankList from '@/components/public/RankList';
import { mapState } from "vuex";
export default {
  // props: {
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
  //   rankings: Object
  // },
  components: {
    RankList
  },
  methods: {
    getCategories(key) {
      // innerkey: love
      let categories = [];
      for(let innerKey of Object.keys(this.rankings[key])) {
        categories.push(this.rankings[key][innerKey].category);
      }
      return categories;
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
@import '@/assets/css/util.scss';

.rank {
  @include flex-h-center;

  &-inner {
    @include flex-h-center;
    justify-content: space-between;
    width: 11.1rem;
    margin: 0.5rem 0;

  }
}
</style>