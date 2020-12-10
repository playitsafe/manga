<template>
  <div class="home-sec">
    <div class="home-sec-type">
      <h2>{{ content.title }}</h2>
      <div><a href="#" class="home-sec-type_seeall">See All ></a></div>
    </div>
    <div class="home-sec-wrapper">
      <div class="home-sec-wrapper-item" v-for="item in content.items" :key="item.id">
        <div class="home-sec-wrapper-item_cover">
          <img :src="item.image_url" :alt="item.title">
        </div>
        <div class="home-sec-wrapper-item_title">
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
@import '@/assets/css/util.scss';

.home-sec {
  &-type {
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: .28rem;
      font-weight: 300;
      margin-bottom: .4rem;
    }

    &_seeall {
      margin-right: .15rem;
      color: #fd337f;
      font-weight: 700;
    }
  }

  &-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: .8rem;
    /* justify-content: space-between; */
    &-item {
      width: 2.1rem;
      margin-right: .15rem;
      margin-bottom: .15rem;

      &_cover {
      height: 2.3rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      &_title {
        margin-top: .1rem;
      }
    }
  }
}
</style>
