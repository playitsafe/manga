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
  max-width: 5.25rem;
  min-width: 4.82rem;
  width: 100%;

  h3 {
    font-size: 0.16rem;
    padding: 0.3rem 0;
    border-bottom: 0.01rem solid #eaeaea;
  }

  &-categories {
    //@include flex-h-center;
    flex-wrap: wrap;
    display: flex;
    justify-content: flex-start;
    padding: 0.15rem 0.35rem;
    height: 1rem;
    border-bottom: 0.01rem solid #eaeaea;

    /* &:after {
      content: '';
      flex: auto;
    } */
    span {
      /* padding: 5px 20px; */
      display: inline-block;
      margin: 0.05rem 0.2rem;
      cursor: pointer;
      color: #6c6c6c;
      height: 0.26rem;
      box-sizing: border-box;

      &.active {
        color: #11d300;
        border-bottom: 0.02rem solid #11d300;
      }
      &:hover {
        color: #11d300;
      }
    }
  }

  &-first {
    height: 2rem;
    background-size: 2rem 2rem;
    background-repeat: no-repeat;
    background-position: right bottom;
    display: flex;
    padding: 0.25rem 0.04rem;

    &-num {
      font-size: 0.6rem;
      line-height: 0.5rem;
      padding-right: 0.15rem;
      font-weight: 700;
    }

    &-more {
      display: flex;
      flex-direction: column;
      &-category {
        font-size: 0.13rem;
      }
      &-title {
        font-size: 0.23rem;
        font-weight: 600;
      }
      /* &-author {

      } */
      &-desc {
        margin-top: 0.05rem;
        font-size: 0.14rem;
        line-height: 0.16rem;
        max-width: 3.1rem;
      }
    }
  }
}
</style>