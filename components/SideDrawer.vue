<template>
  <div class="sidedrawer" :class="{hide: showSideBar}">
    <div class="sidedrawer-btn" @click="showSideBar = !showSideBar">
      <span>最近观看</span>
      <i class="fas fa-chevron-down"></i>
    </div>
    <div class="sidedrawer-main">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSideBar: false
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/util.scss';

.sidedrawer {
  display: flex;
  width: 115px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  background: rgba(#fff, .65);
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
    background: rgba(#fff, .65);
    position: absolute;
    top: 55%;
    right: 155px;
    height: 40px;
    width: 156px;
    transform: rotate(90deg);
    transform-origin: bottom right;

    padding: 0 15px;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
  }

  &-main {
    height: 100%;
    width: 115px;

  }

}

</style>