<template>
  <div class="rank-wrap">
    <div class="rank-wrap-head">
      <a href="#">
        <h3>
          {{Object.keys(ranking).length > 6 ? '分类' : '年龄'}}排行榜
          <i class="fas fa-chevron-right"></i>
        </h3>
      </a>

      <span class="rank-wrap-head-select" @click="toggleDropdown"
        :id="`rank-dropdown-btn-${rankType}`">
        {{ranking[Object.keys(ranking)[0]].category}}
        <i class="fas fa-chevron-down"></i>
      </span>
      <ul class="rank-wrap-head-dropdown" v-show="showDropdown"
        :id="`rank-dropdown-${rankType}`">
        <li class="rank-wrap-head-dropdown-item"
          v-for="(cate,i) in categories" :key="i"
          :class="{
            colx2: categories.length > 6, 
            active: categories[i] === currentRank.category
          }"
          @click="onSelectCategory(cate)">
          {{cate}}
        </li>
      </ul>
    </div>
    <ul class="rank-wrap-lists">
      <RankListItem v-for="(rk,i) in currentRank.rank.slice(0,5)" :key="i" 
        :rk="rk" :i="i" :themeColor="currentRank.color"
        :lastOne="currentRank.rank.slice(0,5).length === i + 1" />
    </ul>
  </div>
</template>

<script>
import RankListItem from '@/components/public/RankListItem';

export default {
  props: {
    ranking: Object, //{love: {category,color,rank:[]}...}
    categories: Array, //['恋爱',...]
    rankType: String // 'byCategory'
  },
  data() {
    return {
      //ancient: {cate,color,rank:[]}
      currentRank: this.ranking[Object.keys(this.ranking)[0]],
      showDropdown: false
    }
  },
  // mounted() {
  //   console.log('rankingggg',this.ranking)
  // },
  methods: {
    onSelectCategory(cate) {
      let selectedKey = Object.keys(this.ranking).filter((key) => this.ranking[key].category === cate);
      this.currentRank = this.ranking[selectedKey];
      this.showDropdown = false;
      window.removeEventListener('click', this.listenHandler);

    },
    listenHandler(e) {
      let clickedInDropDownBox = document.getElementById(`rank-dropdown-${this.rankType}`).contains(e.target);
      let clickOnBtn = document.getElementById(`rank-dropdown-btn-${this.rankType}`).contains(e.target);

      if (!clickedInDropDownBox && !clickOnBtn) {
        e.stopPropagation()
        window.removeEventListener('click', this.listenHandler);
        this.showDropdown = false;
      }
    },
    toggleDropdown() {
      //let clickListener = window.addEventListener(document.get)
      // e.stopPropagation() // this will stop propagation of this event to upper level
      // this.showDropdown = !this.showDropdown;
      // if (this.showDropdown) {
      //   window.addEventListener('click', () => {
      //     this.showDropdown = false
      //   })
      // } else {
      //   window.removeEventListener('click', () => {
      //     this.showDropdown = false
      //   })
      // }
      // let self = this;

      // function handler(e) {
      //   console.log('listening')
      //   let clickedInDropDownBox = document.getElementById(`rank-dropdown-${self.rankType}`).contains(e.target);
      //   let clickOnBtn = element.target.contains(e.target);

      //   if (!clickedInDropDownBox && !clickOnBtn) {
      //     e.stopPropagation()
      //     window.removeEventListener('click', handler);
      //     self.showDropdown = false;
      //   }
      // }
      
      if (this.showDropdown) {
        window.removeEventListener('click', this.listenHandler);
        this.showDropdown = false;
      } else {
        //if dropdown is close
        this.showDropdown = true;
        window.addEventListener('click', this.listenHandler);
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/util.scss';

.rank-wrap {
  /* width: ; */
  width: 47%;
  min-width: 3.7rem;
  border-bottom: #e5e5e5;
  /* height: 100px; */
  /* border: 1px solid black; */
  /* background-image: url('/imgs/x1.jpg'); */
  &-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.15rem 0;
    position: relative;
    h3 {
      font-size: 0.2rem;
      font-weight: 700;
      /* @include flex-h-center; */
      
      i {
        font-size: 0.15rem;
        padding-left: 0.05rem;
      }
    }

    &-select {
      font-size: 0.16rem;
      font-weight: 700;
      cursor: pointer;
      color: #6c6c6c;
      margin-right: 0.1rem;

      i {
        margin-left: 0.1rem;
        font-size: 0.13rem;
        color: #6c6c6c;
      }
    }
    &-dropdown {
      width: 1.6rem;
      background: #fbfbfb;
      position: absolute;
      right: 0;
      padding: 0.1rem 0;
      border: 0.01rem solid #dddddd;
      top: 100%;
      list-style: none;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      &-item {
        margin: 0.08rem 0;
        text-align: center;
        flex-shrink: 0;
        flex-basis: 1.6rem;
        cursor: pointer;
        &:hover {
          font-weight: 700;
        }
      }

      .colx2 {
        flex-basis: 0.75rem;
      }

      .active {
        font-weight: 700;
        color: #44e013;
      }

    }
  }


  &-lists {
    list-style: none;
  }
  

}
</style>