<template>
  <div class="daily">
    <div class="daily-inner">
      <ul class="daily-inner-days">
        <a href="#"><li>周一</li></a>
        <a href="#"><li>周二</li></a>
        <a href="#"><li>周三</li></a>
        <a href="#"><li>周四</li></a>
        <a href="#"><li>周五</li></a>
        <a href="#"><li>周六</li></a>
        <a href="#"><li>周日</li></a>
      </ul>
      <div class="daily-inner-more">
        <a href="#">查看更多</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/css/util.scss';

.daily {
  position: relative;
  /* z-index: 99; */
  height: 62px;
  width: 100%;
  @include flex-h-center;
  box-shadow: 0 10px 20px rgba(#5f5f5f, .2);
  margin-bottom: 20px;

  &-inner {
    height: 100%;
    min-width: 1110px;
    position: relative;

    &-days {
      list-style: none;
      height: 100%;
      font-size: 19px;
      font-weight: 700;
      padding-left: 150px;
      padding-right: 200px;
      display: flex;
      justify-content: center;

      a:hover {
        background: #44e013;
        color: #fff;
      }

      li {
        float: left;
        height: 100%;
        /* margin: ; */
        padding: 0 30px;
        @include flex-v-center;
      }

    }

    &-more {
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translate(0, -50%);
      border-left: 1px solid #c2c1c1;
      padding-left: 35px;
      color: #838383;
      &:hover {
        color: #44e013;
      }
    }
  }
}
</style>