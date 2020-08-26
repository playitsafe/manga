<template>
  <div class="completed" id="daily-completed">
    <div class="completed-inner">
      <h2>完结作品</h2>
      <ul class="completed-inner-view">
        <li class="completed-inner-view-grid" v-for="item in completedItems" :key="item.id">
          <ListGrid :gridData="item" :large="true" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ListGrid from '@/components/public/ListGrid';
import { mapState } from 'vuex';

export default {
  components: {
    ListGrid
  },
  computed: {
    ...mapState({
      completedItems: state => state.daily.completedContents
    })
  }
}
</script>

<style lang="scss">
.completed {
  background: #f5f5f5;

  &-inner {
    max-width: 12rem;
    margin: 0 auto;
    padding: 0.4rem 0;
    h2 {
      font-size: 0.22rem;
      /* border-bottom: 1px solid #eaeaea; */
      padding-bottom: 0.2rem;
    }

    &-view {
      list-style: none;
      display: flex;
      justify-content: space-evenly;
      align-content: flex-start;
      flex-wrap: wrap;

      &-grid {
        height: 1.52rem;
        width: 2.28rem;
        border: 0.01rem solid #eaeaea;
        margin-bottom: 0.15rem;
      }
    }
  }
}
</style>