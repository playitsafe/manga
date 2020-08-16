<template>
  <a class="rank-item-lists" href="#">
    <li class="rank-item-lists-item" :class="{last: lastOne}">
      <div class="rank-item-lists-item-img"
        :style="`background-image: url(${rk.url})`">
        {{i+1}}
      </div>
      <div class="rank-item-lists-item-text">
        <div class="rank-item-lists-item-text-category"
          :style="`color:${themeColor}`">
          {{rk.cate}}
        </div>
        <div class="rank-item-lists-item-text-title">{{rk.title}}</div>
        <div class="rank-item-lists-item-text-author">{{rk.author}}</div>
      </div>
    </li>
  </a>
</template>

<script>
export default {
  props: {
    rk: Object,
    i: Number,
    themeColor: String,
    lastOne: Boolean
  }
}
</script>

<style lang="scss">
.rank-item-lists {
  &-item {
    &.last {
      border-bottom: 1px solid #dddddd;
    }
    border-top: 1px solid #dddddd;
    display: flex;
    &-img {
      height: 98px;
      width: 92px;
      background-size: cover;
      background-position: center;
      font-size: 33px;
      font-weight: 700;
      padding-left: 8px;
      color: #fff;
      text-shadow: 1px 1px 1px black;
    }

    &-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 20px;

      &-category {
        font-size: 13px;
      }
      &-title {
        font-size: 18px;
        font-weight: 700;
      }
      &-author {
        font-size: 13px;
        font-weight: 300;
      }
    }
  }
}
</style>