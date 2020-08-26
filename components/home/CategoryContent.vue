<template>
  <div class="category">
    <a href="#">
      <h3 class="category-title">
        分类 <i class="fas fa-chevron-right"></i>
      </h3>
    </a>
    <div class="category-main">
      <div class="category-main-row" v-for="cate in categoryImgs" :key="cate.category">
        <a href="#">
          <div class="category-main-row-head"
            :style="`background: ${cate.imgs[0].color}`">
            <h4>{{cate.category}}</h4>
            <i class="fas fa-chevron-right"></i>
            <p>{{cate.categoryTitle}}</p>
          </div>
        </a>
        <div class="category-main-row-body">
          <ImgRow :showIntro="false" :imgs="cate.imgs" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImgRow from '@/components/public/ImgRow';
import { mapState } from 'vuex';

export default {
  //props: {
    // [{cateTitle:'', category:'', imgs:[]}, {}]
  //   categoryImgs: Array
  // },
  components: {
    ImgRow
  },
  computed: {
    ...mapState({
      categoryImgs: state => state.home.categoryImgs
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/css/util.scss';

.category {
  background: #f4f4f4;
  border-bottom: 0.01rem solid #c2c2c2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0.3rem;

  &-title {
    font-size: 0.22rem;
    font-weight: 700;
    padding: 0.3rem 0;
    @include flex-v-center;

    &:hover {
      color: #44e013;
    }
    
    i {
      font-size: 0.16rem;
      margin-left: 0.1rem;
    }
  }

  &-main {
    &-row {
      width: 11.1rem;
      display: flex;
      &-head {
        margin: 0.15rem 0.15rem 0 0;
        height: 2.1rem;
        width: 2.1rem;
        padding: 0.2rem;
        position: relative;

        h4 {
          font-size: 0.25rem;
        }

        h4, i, p {
          color: #fff;
        }

        i {
          position: absolute;
          right: 0.2rem;
          top: 0.27rem;
        }

        p {
          position: absolute;
          bottom: 0.2rem;
        }
      }

      &-body {
        width: 8.85rem;
      }
    }
  }
}
</style>