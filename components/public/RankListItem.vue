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
      border-bottom: 0.01rem solid #dddddd;
    }
    border-top: 0.01rem solid #dddddd;
    display: flex;
    &-img {
      height: 0.98rem;
      width: 0.92rem;
      background-size: cover;
      background-position: center;
      font-size: 0.33rem;
      font-weight: 700;
      padding-left: 0.08rem;
      color: #fff;
      text-shadow: 0.01rem 0.01rem 0.01rem black;
    }

    &-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 0.2rem;

      &-category {
        font-size: 0.13rem;
      }
      &-title {
        font-size: 0.18rem;
        font-weight: 700;
      }
      &-author {
        font-size: 0.13rem;
        font-weight: 300;
      }
    }
  }
}
</style>