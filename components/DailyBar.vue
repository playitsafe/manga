<template>
  <div class="daily">
    <div class="daily-inner">
      <ul class="daily-inner-days">
        <li v-for="(day, i) in days" :key="i" 
          @click="$emit('changeDayImg', i)"
          :class="{'daily-inner-days-active': i === showDay}">
          {{day}}
        </li>
      </ul>
      <div class="daily-inner-more">
        <a href="#">查看更多</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showDay: Number
  },
  data() {
    return {
      days: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }
  },
  methods: {
    // onClickDay(i, e){
    //   console.log('e',e.target)
    //   console.log('ev',event.target)
    //   console.log('i',i)
    //   this.$emit('changeDayImg', i)
    // }
  }
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
  background: #fff;

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

      &-active {
        background: #44e013;
      }

      li {
        color: black;
        float: left;
        height: 100%;
        /* margin: ; */
        padding: 0 30px;
        @include flex-v-center;
        &:hover {
          cursor: pointer;
          background: #b4f2a0;
          /* background: #44e013; */

        }
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