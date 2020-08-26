<template>
  <div class="sidedrawer" :class="{hide: showSideBar}">
    <div class="sidedrawer-btn" @click="showSideBar = !showSideBar">
      <div class="sidedrawer-btn-closed" v-show="!showSideBar">
        <span>最近观看</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="sidedrawer-btn-open" v-show="showSideBar">
        <i class="fas fa-chevron-up"></i>
      </div>
    </div>
    <div class="sidedrawer-main">
      <div class="sidedrawer-main-header">最近观看</div>
      <ul class="sidedrawer-main-list">
        <li v-for="(rl,i) in recentList" :key="i">
          <a :href="rl.link"><img :src="rl.url" alt=""></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import recentList from '@/assets/rawData/recent';

export default {
  data() {
    return {
      showSideBar: false,
      recentList
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/util.scss';

.sidedrawer {
  opacity: .8;
  display: flex;
  width: 1.15rem;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  background: #fff;
  overflow: show;
  /* position: fixed;
  right: 0;
  display: flex; */
  transform: translateX(1.15rem);
  transition: transform ease .2s;

  
  &.hide {
  transform: translateX(0);
  }
  
  &-btn {
    background: #fff;
    position: absolute;
    top: 55%;
    right: 1.45rem;
    height: 0.35rem;
    width: 1.56rem;
    transform: rotate(90deg);
    transform-origin: bottom right;

    font-size: 0.15rem;
    border-bottom-left-radius: 0.1rem;
    border-bottom-right-radius: 0.1rem;
    cursor: pointer;
    @include flex-v-h-center;
    padding: 0 0.18rem;

    &-closed {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-open {
      display: flex;
      align-items: center;
      font-size: 0.22rem;
    }
  }

  &-main {
    height: 100%;
    min-height: 5rem;
    width: 1.15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.2rem 0.1rem;

    &-header {
      border-bottom: 0.01rem solid #e3deda;
      padding-bottom: 0.1rem;
    }

    &-list {
      margin-top: 0.15rem;
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 4.2rem;
      height: 70%;

      li {

        img {
          height: 0.7rem;
          width: 0.7rem;
        }
      }
    }
  }

}

</style>