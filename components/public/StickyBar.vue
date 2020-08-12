<template>
  <div class="sticky" :class="{fixed: isFixed}">
    <div class="sticky-inner">
      <ul class="sticky-inner-navs">
        <a href="javascript:;" class="sticky-inner-navs-item"
          v-for="(navTab, i) in navItems" :key="i"
          :class="{active: i === activeTab}"
          @click="activeTab = i">
          <li>{{navTab}}</li>
        </a>
      </ul>
      <div class="sticky-inner-filter" @click="onClickFilter" id="daily-sticky-filter-btn">
        {{filterItems[currentFilter]}}
        <i class="fas fa-angle-down"></i>
      </div>
      <ul id="daily-sticky-filter-box" class="sticky-inner-dropdown" v-show="showDropdown">
        <li v-for="(item, i) in filterItems" :key="i"
          @click="onSelectFilter(i)">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    navItems: Array
  },
  data() {
    return {
      // navItems: ['连载', '完结'],
      activeTab: 0,
      showDropdown: false,
      filterItems: ['按人气', '按点赞时间', '按更新时间'],
      currentFilter: 0,
      isFixed: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.checkScrollForFix);
  },
  destroyed() {
    window.removeEventListener('scroll', this.checkScrollForFix);
  },
  methods: {
    listenHandler(e) {
      console.log('listening!')
      let clickOnDropdown = document.getElementById('daily-sticky-filter-box').contains(e.target);
      let clickOnFilterBtn = document.getElementById('daily-sticky-filter-btn').contains(e.target);
      
      if (!clickOnDropdown && !clickOnFilterBtn) {
        window.removeEventListener('click', this.listenHandler);
        this.showDropdown = false;
      }
    },

    onClickFilter() {
      this.showDropdown = true;
      window.addEventListener('click', this.listenHandler);
    },
    onSelectFilter(i) {
      //do change
      this.currentFilter = i;
      window.removeEventListener('click', this.listenHandler);
      this.showDropdown = false;
    },
    checkScrollForFix() {
      console.log('scroll!')
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.isFixed = scrollTop > 100 ? true : false;
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/util.scss';


.sticky {
  background: #fff;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;

  &.fixed {
    position: fixed;
    width: 100%;
    top: 0;
    box-shadow: 0 5px 5px #eaeaea;
  }

  &-inner {
    max-width: 1270px;
    height: 67px;
    margin: 0 auto;
    display: flex;
    position: relative;

    &-navs {
      height: 100%;
      display: inline-block;
      list-style: none;
      margin: 0 auto;

      a {
        display: inline-block;
        height: 100%;

        &:hover {
          color: #00dc64;
        }
        &.active {
          background: #00dc64;
          color: #fff;
        }
      }


      li {
        float: left;
        height: 100%;
        padding: 0 25px;
        /* text-align: center; */
        /* vertical-align: middle; */
        font-size: 18px;
        display: flex;
        align-items: center;

        /* &:hover {
          color: #00dc64;
        } */
      }

      /* a {
        height: 100%;
        display: inline-block;
        background: #00dc64;
      } */
    }

    &-filter {
      display: flex;
      height: 100%;
      @include flex-v-center;
      cursor: pointer;
      font-size: 18px;
      font-weight: 700;
      width: 115px;

      i {
        font-size: 20px;
        margin-left: 10px;
      }
    }

    &-dropdown {
      width: 150px;
      height: 160px;
      background: #fff;
      z-index: 99;
      position: absolute;
      top: 67px;
      right: 0;
      border: 1px solid #eaeaea;

      list-style: none;
      @include flex-column;
      align-items: center;
      justify-content: center;

      li {
        padding: 6px 0;
        cursor: pointer;
      }

    }
  }
}

</style>