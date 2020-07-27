<template>
  <div class="rank-wrap">
    <div class="rank-wrap-head">
      <a href="#">
        <h3>
          {{Object.keys(ranking).length > 6 ? '分类' : '年龄'}}排行榜
          <i class="fas fa-chevron-right"></i>
        </h3>
      </a>

      <span class="rank-wrap-head-select" @click="toggleDropdown">
        {{ranking[Object.keys(ranking)[0]].category}}
        <i class="fas fa-chevron-down"></i>
      </span>
      <ul class="rank-wrap-head-dropdown" v-show="showDropdown"
        :id="`rank-dropdown-${rankType}`">
        <li class="rank-wrap-head-dropdown-item"
          v-for="(cate,i) in categories" :key="i"
          :class="{ colx2: categories.length > 6}">
          {{cate}}
        </li>
      </ul>
    </div>


    <ul class="rank-wrap-lists">
      <a href="#" v-for="(rk,i) in currentRank.rank" :key="i">
        <li class="rank-wrap-lists-item">
          <div class="rank-wrap-lists-item-img"
          :style="`background-image: url(${rk.url})`">
            {{i+1}}
          </div>
          <div class="rank-wrap-lists-item-text">
            <div class="rank-wrap-lists-item-text-category"
              :style="`color:${currentRank.color}`">
              {{rk.cate}}
            </div>
            <div class="rank-wrap-lists-item-text-title">{{rk.title}}</div>
            <div class="rank-wrap-lists-item-text-author">{{rk.author}}</div>
          </div>
        </li>
      </a>
    </ul>
    
    
  </div>
</template>

<script>

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
    selectRankType(category) {
      
      // this.currentRank = 0;
    },
    toggleDropdown(element) {
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
      let self = this;

      function handler(e) {
        console.log('listening')
        let clickedInDropDownBox = document.getElementById(`rank-dropdown-${self.rankType}`).contains(e.target);
        let clickOnBtn = element.target.contains(e.target);

        if (!clickedInDropDownBox && !clickOnBtn) {
          e.stopPropagation()
          window.removeEventListener('click', handler);
          self.showDropdown = false;
        }
      }
      
      if (self.showDropdown) {
        window.removeEventListener('click', handler);
        self.showDropdown = false;
      } else {
        //if dropdown is close
        self.showDropdown = true;
        window.addEventListener('click', handler);
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
  min-width: 370px;
  /* height: 100px; */
  /* border: 1px solid black; */
  /* background-image: url('/imgs/x1.jpg'); */
  &-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    position: relative;
    h3 {
      font-size: 20px;
      font-weight: 700;
      /* @include flex-h-center; */
      
      i {
        font-size: 15px;
        padding-left: 5px;
      }
    }

    &-select {
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      color: #6c6c6c;
      margin-right: 10px;

      i {
        margin-left: 10px;
        font-size: 13px;
        color: #6c6c6c;
      }
    }
    &-dropdown {
      width: 160px;
      background: #fbfbfb;
      position: absolute;
      right: 0;
      padding: 10px 0;
      border: 1px solid #dddddd;
      top: 100%;
      list-style: none;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      &-item {
        margin: 8px 0;
        text-align: center;
        flex-shrink: 0;
        flex-basis: 160px;
      }

      .colx2 {
        flex-basis: 75px;
      }

    }
  }


  &-lists {
    list-style: none;

    &-item {
      border-top: 1px solid #dddddd;
      display: flex;
      &-img {
        height: 98px;
        width: 92px;
        /* background-image: url('/imgs/x1.jpg'); */
        background-size: cover;
        background-position: center;
        font-size: 33px;
        font-weight: 700;
        padding-left: 8px;
        color: #fff;
        text-shadow: 1px 1px 1px black;
      }

      &-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 20px;

        &-category {
          font-size: 13px;
        }
        &-title {
          font-size: 18px;
          font-weight: 700;
        }
        &-author {
          font-size: 13px;
          font-weight: 300;
        }
      }
    }
  }
  

}
</style>