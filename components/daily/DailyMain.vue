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
              <DailyListGrid v-for="(item,j) in weekArray[i]" :key="j"
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
import DailyListGrid from '@/components/daily/DailyListGrid';
import { mapState } from 'vuex';

export default {
  // props: {
  //   weekArray: Array
  // },
  components: {
    DailyListGrid
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
  padding: 20px 0;

  &-inner {
    width: 1200px;
    margin: 0 auto;

    h2 {
      font-size: 22px;
      border-bottom: 1px solid #eaeaea;
      padding-bottom: 20px;
    }

    &-week {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      &-day {
        padding: 0 4px;
        width: 162px;
        transition: all ease .2s;
        &.active {
          background: #28DC18;
          width: 236px;
          color: #fff;
          padding-bottom: 4px;
          /* transition: all ease .2s; */
        }

        &-inner {
          h4 {
            text-align: center;
            /* background: yellow; */
            font-size: 20px;
            height: 66px;
            @include flex-v-h-center;
            cursor: pointer;
          }

          &-list {
            @include flex-column;
            &:last-child {
              border-bottom: 1px solid #dbdbdb;
            }

            &-grid {
              border-top: 1px solid #dbdbdb;
              border-left: 1px solid #dbdbdb;
              border-right: 1px solid #dbdbdb;
            }
          }

        }
      }
    }
  }
}

</style>