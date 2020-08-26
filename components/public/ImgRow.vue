<template>
  <ul class="img-row">
    <a href="#" v-for="img in imgs" :key="img.url">
      <li class="img-row-grid"
        :style="img.type===2 ? 'width:435px' : 'width:210px'">
        <div class="img-row-grid-front">
          <img :src="img.url" alt="">
        </div>
        <div class="img-row-grid-back"
            :style="`background: ${img.color}`">
          <!-- :style="`background: ${getColors(imgs.length)[i]}`"> -->
        </div>
        <div class="img-row-grid-info">
          <h5 :style="img.type===2 ? 'color:#fff' : ''">{{img.title}}</h5>
          <p class="img-row-grid-info-author">
            {{img.author}}
            <span class="img-row-grid-info-author-border"></span>
          </p>
          <p class="img-row-grid-info-intro4lg" v-show="img.type===2 && showIntro">
            {{img.intro}}
          </p>
          <p class="img-row-grid-info-intro" v-show="showIntro">{{img.intro}}</p>
          <i class="fas fa-thumbs-up"></i>
          <span class="img-row-grid-info-likes">{{img.likes}}万</span>
          <div class="img-row-grid-info-icongroup">
            <div class="img-row-grid-info-icongroup-new" v-show="img.isNew">新</div>
            <div class="img-row-grid-info-icongroup-ended" v-show="img.ended">完</div>
            <div class="img-row-grid-info-icongroup-updated" v-show="img.isUpdated">更新</div>
          </div>
          <span class="img-row-grid-info-category"
            :style="`color: ${img.color}`">
            <!-- :style="`color: ${getColors(imgs.length)[i]}`"> -->
            {{img.category}}
          </span>
        </div>
      </li>
    </a>
  </ul>
</template>

<script>
export default {
  props: {
    imgs: Array,// [ {},...,{} ]
    showIntro: { type: Boolean, default: true }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/util.scss';

.img-row {
    list-style: none;
    /* width: 1110px; */
    display: flex;
    justify-content: space-between;
    margin-top: 0.15rem;

    &-grid {
      float: left;
      position: relative;
      height: 2.1rem;
      /* margin: 7.5px; */
      /* transition: all ease .3s; */
        

      &:hover &-front {
        @include visibility-none;
        /* transition: all ease .3s; */

      }
      &:hover &-back {
        @include visibility-show;
        /* transition: all ease .3s; */
      }

      &-front {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        @include visibility-show;
        transition: all ease .2s;
        img {
          /* width: 210px; */
          height: 100%;
          width: 100%;
        }
      }

      &-back {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        /* background: red; */
        /* z-index: -1; */
        @include visibility-none;
        transition: all ease .2s;
      }
      &-info {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: transparent;
        padding: 0.15rem 0.15rem 0.15rem 0.2rem;
        
        h5 {
          font-size: 18px;
          font-weight: 700;
          color: black;
        }

        i, &-likes {
          color: #44e013;
          font-size: 0.14rem;
        }

        &-icongroup {
          display: flex;
          &-new {
            background: black;
            color: #44e013;
            font-size: 0.16rem;
            font-weight: 700;
            text-align: center;
            width: 0.3rem;
            height: 0.3rem;
            line-height: 0.3rem;
            border-radius: 0.15rem;
            margin-top: 0.05rem;
            margin-left: -0.03rem;
            margin-right: 0.06rem;
          }

          &-ended {
            background: #ebebeb;
            color: #44e013;
            font-size: 0.16rem;
            font-weight: 700;
            text-align: center;
            width: 0.3rem;
            height: 0.3rem;
            line-height: 0.3rem;
            border-radius: 0.15rem;
            margin-top: 0.05rem;
            margin-left: -0.03rem;
            margin-right: 0.06rem;
          }

          &-updated {
            background: #44e013;
            color: #fff;
            font-size: 0.1rem;
            text-align: center;
            /* @include flex-h-center; */
            width: 0.3rem;
            height: 0.3rem;
            line-height: 0.3rem;
            border-radius: 0.15rem;
            margin-top: 0.05rem;
            margin-left: -0.03rem;
          }

        }

        &-category {
          position: absolute;
          left: 0.15rem;
          bottom: 0.1rem;
          font-size: 0.14rem;
          font-weight: 700;
          background: #fff;
          border-radius: 0.03rem;
          padding: 0 0.03rem;
        }

        &-author {
          position: absolute;
          @include visibility-none;

          &-border {
            position: absolute;
            left: 0;
            bottom: -0.1rem;
            width: 0.18rem;
            border-bottom: 0.01rem solid #818080;
          }
        }

        &-intro {
          position: absolute;
          @include visibility-none;
          color: #fff;
          font-size: 0.13rem;
          top: 0.8rem;
          padding-right: 0.2rem;
        }

        &-intro4lg {
          color: #fff;
          font-size: 0.13rem;
          padding: 0.15rem 0.2rem 0.05rem 0rem;
        }
      }

      &:hover &-info {
        i, &-likes, &-icongroup-updated, &-icongroup-new, &-icongroup-ended, &-category, &-intro4lg {
          @include visibility-none;
        }
        h5 {
          color: #fff;
        }

        &-author {
          @include visibility-show;
          color: #fff;
          font-size: 0.13rem;
          /* font-family: sans-serif; */
          font-weight: 300;
          padding-top: 0.03rem;
        }

        &-intro {
          @include visibility-show;
        }
        /* transition: all ease .3s; */
      }
    }
  }
</style>