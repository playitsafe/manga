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
          <p class="img-row-grid-info-intro4lg" v-show="img.type===2">
            {{img.intro}}
          </p>
          <p class="img-row-grid-info-intro">{{img.intro}}</p>
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
    // [ {},...,{} ]
    imgs: Array
  }
}
</script>

<style lang="scss">
@import '@/assets/css/util.scss';

.img-row {
    list-style: none;
    width: 1110px;
    display: flex;
    justify-content: space-between;
    margin: 7.5px 0;

    &-grid {
      float: left;
      position: relative;
      height: 210px;
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
        padding: 15px 15px 15px 20px;
        
        h5 {
          font-size: 18px;
          font-weight: 700;
          color: black;
        }

        i, &-likes {
          color: #44e013;
          font-size: 14px;
        }

        &-icongroup {
          display: flex;
          &-new {
            background: black;
            color: #44e013;
            font-size: 16px;
            font-weight: 700;
            text-align: center;
            width: 30px;
            height: 30px;
            line-height: 30px;
            border-radius: 15px;
            margin-top: 5px;
            margin-left: -3px;
            margin-right: 6px;
          }

          &-ended {
            background: #ebebeb;
            color: #44e013;
            font-size: 16px;
            font-weight: 700;
            text-align: center;
            width: 30px;
            height: 30px;
            line-height: 30px;
            border-radius: 15px;
            margin-top: 5px;
            margin-left: -3px;
            margin-right: 6px;
          }

          &-updated {
            background: #44e013;
            color: #fff;
            font-size: 10px;
            text-align: center;
            /* @include flex-h-center; */
            width: 30px;
            height: 30px;
            line-height: 30px;
            border-radius: 15px;
            margin-top: 5px;
            margin-left: -3px;
          }

        }

        &-category {
          position: absolute;
          left: 15px;
          bottom: 10px;
          font-size: 14px;
          font-weight: 700;
          background: #fff;
          border-radius: 3px;
          padding: 0 3px;
        }

        &-author {
          position: absolute;
          @include visibility-none;

          &-border {
            position: absolute;
            bottom: -15px;
            width: 18px;
            border-bottom: 1px solid #818080;
          }
        }

        &-intro {
          position: absolute;
          @include visibility-none;
          color: #fff;
          font-size: 13px;
          top: 80px;
          padding-right: 20px;
        }

        &-intro4lg {
          color: #fff;
          font-size: 13px;
          padding: 15px 20px 5px 0px;
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
          font-size: 13px;
          /* font-family: sans-serif; */
          font-weight: 300;
          padding-top: 3px;
        }

        &-intro {
          @include visibility-show;
        }
        /* transition: all ease .3s; */
      }
    }
  }
</style>