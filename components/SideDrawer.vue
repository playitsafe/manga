<template>
  <div class="sidedrawer">
    <span>最近观看</span>
    <i class="fas fa-chevron-down"></i>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/css/util.scss';

.sidedrawer {
  position: fixed;
  padding: 0 15px;
  font-size: 15px;
  background: rgba(#fff, .65);
  top: 55%;
  right: 0;
  height: 40px;
  width: 156px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: 99;
  transform: rotate(90deg);
  transform-origin: top right;
}
</style>