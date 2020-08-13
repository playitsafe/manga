<template>
  <a href="#">
    <div class="daily-grid" :class="{large: large}"
      :style="`background-image: url(${gridData.imgUrl})`">
      <!-- <img :src="gridData.imgUrl" alt="cover"> -->
      <p :style="{color: gridData.color}" class="daily-grid-category">
        {{gridData.category}}
      </p>
      <h3>{{gridData.title}}</h3>
      <p class="daily-grid-author" v-show="large">{{gridData.author}}</p>
      <div class="daily-grid-sign">
        <span class="daily-grid-sign-new" v-show="gridData.isNew">新</span>
        <span class="daily-grid-sign-update" v-show="gridData.isUpdated">更新</span>
        <span class="daily-grid-sign-suspend" v-show="gridData.isSuspended">暂停</span>
      </div>
      <p class="daily-grid-likes" v-show="large">
        <i class="fas fa-thumbs-up"></i>
        {{gridData.likes}}
      </p>
      <!-- <div class="daily-grid-img" :style="`background-image: url(${gridData.imgUrl});`"></div> -->
    </div>
  </a>
</template>

<script>
export default {
  props: {
    large: Boolean,
    gridData: Object

  }
}
</script>

<style lang="scss">
.daily-grid {
  width: 100%;
  height: 152px;
  /* border: 1px solid #dbdbdb; */
  /* border-left: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb; */
  background: #fff;
  color: #000000;
  padding: 10px;
  position: relative;
  background-size: 126px 126px;
  background-repeat: no-repeat;
  background-position: right bottom;

  &-category {
    font-size: 14px;

  }

  /* &.large {
    .daily-grid-category {
    }
  } */

  &:not(.large) {
    .daily-grid-category {
      position: absolute;
      left: 10px;
      bottom: 10px;
    }
  } 

  h3 {
    font-size: 18px;
  }

  &-author {
    font-size: 13px;
    font-weight: 300;
  }

  &-sign {
    /* height: 30px; */
    display: flex;

    &-new, &-update, &-suspend {
      font-size: 14px;
      display: inline-block;
      width: 28px;
      height: 28px;
      display: grid;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      margin-right: 4px;
      margin-top: 10px;
    }

    &-new {
      background: #000;
      color: #28DC18;
    }

    &-update {
      background: #28DC18;
      color: #fff;
      font-size: 13px;
    }
    
    &-suspend {
      background: #939393;
      color: #fff;
      font-size: 13px;
    }
  }

  &-likes {
    position: absolute;
    left: 10px;
    bottom: 10px;
    color: #28DC18;
  }
  /* img {
    height: 126px;
    width: 126px;
    position: absolute;
    right: 0;
    bottom: 0;
  } */

}
</style>