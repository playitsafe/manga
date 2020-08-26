<template>
  <div class="daily-main" id="daily-week">
    <div class="daily-main-inner">
      <h2>连载作品</h2>
      <div class="daily-main-inner-week">
        <div class="daily-main-inner-week-day"
          v-for="(day,i) in days" :key="i"
          :class="{active: activeDay - 1 === i}">
          <div class="daily-main-inner-week-day-inner">
            <h4 @click="activeDay = i + 1">{{day}}</h4>
            <div class="daily-main-inner-week-day-inner-list">
              <ListGrid v-for="(item,j) in weekArray[i]" :key="j"
                :large="activeDay - 1 === i"
                :gridData="item" class="daily-main-inner-week-day-inner-list-grid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListGrid from '@/components/public/ListGrid';
import { mapState } from 'vuex';

export default {
  // props: {
  //   weekArray: Array
  // },
  components: {
    ListGrid
  },

  data() {
    return {
      days: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      activeDay: new Date().getDay() === 0 ? 7 : new Date().getDay()
    }
  },
  computed: {
    ...mapState({
      weekArray: state => state.daily.dailyContents
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/css/util';

.daily-main {
  width: 100%;
  /* height: 1000px; */
  background: #f5f5f5;
  padding: 0.2rem 0;

  &-inner {
    width: 12rem;
    margin: 0 auto;

    h2 {
      font-size: 0.22rem;
      border-bottom: 0.01rem solid #eaeaea;
      padding-bottom: 0.2rem;
    }

    &-week {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      &-day {
        padding: 0 0.04rem;
        width: 1.62rem;
        transition: all ease .2s;
        &.active {
          background: #28DC18;
          width: 2.36rem;
          color: #fff;
          padding-bottom: 0.04rem;
          /* transition: all ease .2s; */
        }

        &-inner {
          h4 {
            text-align: center;
            /* background: yellow; */
            font-size: 0.2rem;
            height: 0.66rem;
            @include flex-v-h-center;
            cursor: pointer;
          }

          &-list {
            @include flex-column;
            &:last-child {
              border-bottom: 0.01rem solid #dbdbdb;
            }

            &-grid {
              border-top: 0.01rem solid #dbdbdb;
              border-left: 0.01rem solid #dbdbdb;
              border-right: 0.01rem solid #dbdbdb;
              width: 100%;
              height: 1.52rem;
            }
          }

        }
      }
    }
  }
}

</style>