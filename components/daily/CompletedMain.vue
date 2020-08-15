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
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 0;
    h2 {
      font-size: 22px;
      /* border-bottom: 1px solid #eaeaea; */
      padding-bottom: 20px;
    }

    &-view {
      /* height: 1000px; */
      list-style: none;
      /* background: pink; */
      display: flex;
      justify-content: space-evenly;
      align-content: flex-start;
      flex-wrap: wrap;

      &-grid {
        height: 152px;
        width: 228px;
        border: 1px solid #eaeaea;
        margin-bottom: 15px;
      }
    }
  }
}
</style>