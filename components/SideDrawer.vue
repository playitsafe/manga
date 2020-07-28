<template>
  <div class="sidedrawer" :class="{hide: showSideBar}">
    <div class="sidedrawer-btn" @click="showSideBar = !showSideBar">
      <div class="sidedrawer-btn-closed" v-show="showSideBar">
        <span>最近观看</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="sidedrawer-btn-open" v-show="!showSideBar">
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
  width: 115px;
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
  transform: translateX(0);
  transition: transform ease .2s;

  
  &.hide {
    transform: translateX(115px);
  }
  
  &-btn {
    background: #fff;
    position: absolute;
    top: 55%;
    right: 145px;
    height: 35px;
    width: 156px;
    transform: rotate(90deg);
    transform-origin: bottom right;

    font-size: 15px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
    @include flex-v-h-center;
    padding: 0 18px;

    &-closed {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-open {
      display: flex;
      align-items: center;
      font-size: 22px;
    }
  }

  &-main {
    height: 100%;
    min-height: 500px;
    width: 115px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 10px;

    &-header {
      border-bottom: 1px solid #e3deda;
      padding-bottom: 10px;
    }

    &-list {
      margin-top: 15px;
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 420px;
      height: 70%;

      li {

        img {
          height: 70px;
          width: 70px;
        }
      }
    }
  }

}

</style>