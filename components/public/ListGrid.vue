<template>
  <a href="#">
    <div class="daily-grid" :class="{large}"
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
        <span class="daily-grid-sign-ended" v-show="gridData.isEnded">完</span>
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
  height: 100%;
  /* border: 1px solid #dbdbdb; */
  /* border-left: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb; */
  background: #fff;
  color: #000000;
  padding: 0.1rem;
  position: relative;
  background-size: 1.26rem 1.26rem;
  background-repeat: no-repeat;
  background-position: right bottom;

  &-category {
    font-size: 0.14rem;
  }

  /* &.large {
    .daily-grid-category {
    }
  } */

  &:not(.large) {
    .daily-grid-category {
      position: absolute;
      left: 0.1rem;
      bottom: 0.1rem;
    }
  } 

  h3 {
    font-size: 0.18rem;
  }

  &-author {
    font-size: 0.13rem;
    font-weight: 300;
  }

  &-sign {
    /* height: 30px; */
    display: flex;

    &-new, &-update, &-suspend, &-ended {
      font-size: 14px;
      display: inline-block;
      width: 0.28rem;
      height: 0.28rem;
      display: grid;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      margin-right: 0.04rem;
      margin-top: 0.1rem;
    }

    &-new {
      background: #000;
      color: #28DC18;
    }

    &-update {
      background: #28DC18;
      color: #fff;
      font-size: 0.13rem;
    }
    
    &-suspend {
      background: #939393;
      color: #fff;
      font-size: 0.13rem;
    }
    &-ended {
      background: #939393;
      color: #28DC18;
    }
  }

  &-likes {
    position: absolute;
    left: 0.1rem;
    bottom: 0.1rem;
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