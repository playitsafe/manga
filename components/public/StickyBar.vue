<template>
  <div>
    <div class="sticky" :class="{fixed: isFixed}" id="stickybar">
      <div class="sticky-inner">
        <ul class="sticky-inner-navs">
          <a href="javascript:;" class="sticky-inner-navs-item"
            v-for="(navTab, i) in navItems" :key="i"
            :class="{active: i === activeTab}"
            :style="{
              background: i === activeTab ? navTab.color : '#fff',
              color: i === activeTab ? '#fff' : '#000'
            }"
            @click="scrollToTarget(navTab.id, i)"
            @mouseover="hoverOnMenu(navTab.color, i, $event)"
            @mouseout="leaveMenu(i, $event)">
            <li>{{navTab.title}}</li>
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
    <div class="holder" v-if="isFixed"></div>
  </div>
</template>

<script>
import throttle from 'lodash/throttle';

let throttleHandler;
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
    throttleHandler = throttle(this.onScrollEvent, 300);
    window.addEventListener('scroll', throttleHandler);
    window.addEventListener('scroll', this.checkForFix);
  },
  destroyed() {
    console.log('scroll destroyed')
    window.removeEventListener('scroll', throttleHandler);
    window.removeEventListener('scroll', this.checkForFix);
  },
  methods: {
    listenHandler(e) {
      // console.log('listening!')
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
    checkForFix() {
      console.log('Fix navbar triggered')
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.isFixed = scrollTop > 100 ? true : false;
    },
    onScrollEvent() {
      console.log('OnChangeNavbar Triggered')
      //check for fix bar
      // let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      // this.isFixed = scrollTop > 100 ? true : false;
      //this.checkForFix();
      // check for menu highlight
      // let currentIndex = this.activeTab;
      
      for(let nav of this.navItems) {
        let i = this.navItems.indexOf(nav);
        if (document.querySelector(nav.id)) {
          let el = document.querySelector(nav.id);
          // let nextEl = document.querySelector(this.navItems[i+1].id);
          let distanceToTop = el.getBoundingClientRect().top;
          // let nextElDistanceToTop = nextEl.getBoundingClientRect().top;
          let windowHeight = document.documentElement.clientHeight || window.innerHeight;
          //console.log('distanceToTop', distanceToTop)
          //console.log('windowHeight', windowHeight)
          if (distanceToTop > 0 && distanceToTop < (windowHeight * 0.5)) {
            this.activeTab = i;
          } else if (distanceToTop > (windowHeight * 0.5) && distanceToTop < windowHeight) {
            this.activeTab = i - 1;
            //console.log('else',i)
          }
        }
      }
     }, 
    // throttleHandler() {
    //   console.log('d')
    //   throttle(this.onScrollEvent, 500);
    // },
    scrollToTarget(id, i) {
      // this.activeTab = i;
      let targetEl = document.querySelector(id),
          stickyBarHeight = 67,
          headerHeight = 100,
          scrolledFromTop = window.pageYOffset || document.documentElement.scrollTop,
          targetElPositionY = targetEl.getBoundingClientRect().top,
          targetElOriginY = targetElPositionY + scrolledFromTop;
      
      document.documentElement.scrollTo(0, targetElOriginY - stickyBarHeight);
      // console.log(window.getComputedStyle(targetEl));
      // console.log(targetEl.getClientRects())
    },
    hoverOnMenu(color, i, e) {
      if (this.activeTab !== i) {
        e.target.parentElement.style.color = color
      }
    },
    leaveMenu(i, e) {
      if (this.activeTab !== i) {
        e.target.parentElement.style.color = '#000'
      }
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
  z-index: 98;

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
      min-width: 960px;
      
      a {
        display: inline-block;
        height: 100%;

        /* &:hover {
          color: #00dc64;
        }
        &.active {
          background: #00dc64;
          color: #fff;
        } */
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

.holder {
  width: 100%;
  height: 67px;
}

</style>