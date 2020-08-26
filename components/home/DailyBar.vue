<template>
  <div class="dailybar">
    <div class="dailybar-inner">
      <ul class="dailybar-inner-days">
        <li v-for="(day, i) in days" :key="i" 
          @click="$emit('change-day-img', i)"
          :class="{'dailybar-inner-days-active': i === showDay - 1}">
          {{ day }}
        </li>
      </ul>
      <a href="#" class="dailybar-inner-more">查看更多</a>
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

.dailybar {
  position: relative;
  /* z-index: 99; */
  height: 0.62rem;
  width: 100%;
  @include flex-h-center;
  box-shadow: 0 0.1rem 0.2rem rgba(#5f5f5f, .2);
  margin-bottom: 0.2rem;
  background: #fff;

  &-inner {
    height: 100%;
    min-width: 11.1rem;
    position: relative;

    &-days {
      list-style: none;
      height: 100%;
      font-weight: 700;
      padding-left: 1.5rem;
      padding-right: 2rem;
      display: flex;
      justify-content: center;

      &-active {
        background: #44e013;
        color: #fff !important;
      }

      li {
        color: black;
        float: left;
        font-size: 0.19rem;
        height: 100%;
        /* margin: ; */
        padding: 0 0.3rem;
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
      height: 0.2rem;
      right: 0.3rem;
      top: 50%;
      /* display: inline-block; */
      padding-left: 0.35rem;
      display: grid;
      place-items: center;
      border-left: 0.01rem solid #c2c1c1;
      margin: auto 0;
      line-height: 0.16rem;
      transform: translateY(-50%);
      color: #838383; 
      &:hover {
        color: #44e013;
      }
    }
  }
}
</style>