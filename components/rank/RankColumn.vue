<template>
<div class="rank-column">
  <h3>{{$vnode.key === 'byCategory' ? '分类排行榜' : '年龄排行榜'}}</h3>
  <div class="rank-column-categories">
    <span v-for="(cate,i) in getCategories($vnode.key)" :key="i"
      :class="{active: activeCategory === i}"
      @click="onSelectCategory(cate, i)">
      {{cate}}
    </span>
  </div>
  <div class="rank-column-first"
    :style="`background-image: url('/imgs/rank/toprank1.jpg')`">
    <div class="rank-column-first-num">1</div>
    <div class="rank-column-first-more">
      <span class="rank-column-first-more-category"
        :style="`color: ${currentContent.color}`">
        {{currentContent.rank[0].cate}}</span>
      <span class="rank-column-first-more-title">{{currentContent.rank[0].title}}</span>
      <span class="rank-column-first-more-author">{{currentContent.rank[0].author}}</span>
      <span class="rank-column-first-more-desc">{{currentContent.rank[0].desc}}</span>
    </div>
  </div>
  <RankListItem v-for="(rk, i) in currentContent.rank.slice(1,10)" :key="i"
    :rk="rk" :i="i + 1" :themeColor="currentContent.color"
    :lastOne="i === currentContent.rank.slice(1,10).length - 1" />
</div>
</template>

<script>
import RankListItem from '@/components/public/RankListItem';

export default {
  props: {
    columnData: Object
  },
  components: {
    RankListItem
  },
  data() {
    return {
      activeCategory: 0
    }
  },
  computed: {
    currentContent() {
      let currentCateKey = Object.keys(this.columnData)[this.activeCategory];
      return this.columnData[currentCateKey];
    }
  },
  methods: {
    getCategories(key) {
      let cateArray = [];
      for(let cateKey of Object.keys(this.columnData)) {
        cateArray.push(this.columnData[cateKey].category);
      }
      return cateArray;
    },
    onSelectCategory(cate, i) {
      this.activeCategory = i;

    }
  }
}
</script>

<style lang="scss">

.rank-column {
  max-width: 525px;
  min-width: 482px;
  width: 100%;

  h3 {
    font-size: 16px;
    padding: 30px 0;
    border-bottom: 1px solid #eaeaea;
  }

  &-categories {
    //@include flex-h-center;
    flex-wrap: wrap;
    display: flex;
    justify-content: flex-start;
    padding: 15px 35px;
    height: 100px;
    border-bottom: 1px solid #eaeaea;

    /* &:after {
      content: '';
      flex: auto;
    } */
    span {
      /* padding: 5px 20px; */
      display: inline-block;
      margin: 5px 20px;
      cursor: pointer;
      color: #6c6c6c;
      height: 26px;
      box-sizing: border-box;

      &.active {
        color: #11d300;
        border-bottom: 2px solid #11d300;
      }
      &:hover {
        color: #11d300;
      }
    }
  }

  &-first {
    height: 200px;
    background-size: 200px 200px;
    background-repeat: no-repeat;
    background-position: right bottom;
    display: flex;
    padding: 25px 4px;

    &-num {
      font-size: 60px;
      line-height: 50px;
      padding-right: 15px;
      font-weight: 700;
    }

    &-more {
      display: flex;
      flex-direction: column;
      &-category {
        font-size: 13px;
      }
      &-title {
        font-size: 23px;
        font-weight: 600;
      }
      &-author {

      }
      &-desc {
        margin-top: 5px;
        font-size: 14px;
        line-height: 16px;
        max-width: 310px;
      }
    }
  }
}
</style>