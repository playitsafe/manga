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
  border-bottom: 1px solid #c2c2c2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;

  &-title {
    font-size: 22px;
    font-weight: 700;
    padding: 30px 0;
    @include flex-v-center;

    &:hover {
      color: #44e013;
    }
    
    i {
      font-size: 16px;
      margin-left: 10px;
    }
  }

  &-main {
    &-row {
      width: 1110px;
      display: flex;
      /* margin: 7.5px 0; */
      /* justify-content: space-between; */
      &-head {
        margin: 15px 15px 0 0;
        height: 210px;
        width: 210px;
        padding: 20px;
        position: relative;

        h4, i, p {
          color: #fff;
        }

        i {
          position: absolute;
          right: 20px;
          top: 27px;
        }

        p {
          position: absolute;
          bottom: 20px;
        }
      }

      &-body {
        width: 885px;
      }
    }
  }
}
</style>