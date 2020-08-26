<template>
<div class="item">
  <div class="item-topbg" :style="`background-image: url(${item.bgImg})`"></div>
  <div class="item-main">
    <div class="item-main_head" :style="`background-image: url(${item.coverImg})`">
      <p class="item-main_head__category" :style="`color: ${item.category.themeColor}`">{{item.category.cateName}}</p>
      <h2 class="item-main_head__title">{{item.title}}</h2>
      <p class="item-main_head__author">{{item.author}}</p>
    </div>
    <div class="item-main_chapters">
      <div class="item-main_chapters_left">
        <div class="item-main_chapters_left_mobile">
          <p>在<b>Manga</b>手机版上可以随时随地阅读~<br />扫描二维码，现在就去手机版吧！</p>
          <img src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorldHelloWorld" alt="qrcode">
        </div>
        <ul class="item-main_chapters_left_list">
          <a :href="$route.path + ep.eplink" target="_blank"
            v-for="(ep, i) in item.episodes" :key="ep.ep">
            <li class="item-main_chapters_left_list_item">
              <div class="item-main_chapters_left_list_item_left">
                <img :src="ep.epImg" alt="episode-img">
                <p>第{{ep.ep}}话</p><span v-show="i===0">UP</span>
              </div>
              <div class="item-main_chapters_left_list_item_right">
                <span class="item-main_chapters_left_list_item_right_date">{{ep.updateOn}}</span>
                <span class="item-main_chapters_left_list_item_right_likes">
                  <i class="fas fa-thumbs-up"></i>
                  {{ep.likes}}
                </span>
                <span class="item-main_chapters_left_list_item_right_ep">#{{ep.ep}}</span>
              </div>
            </li>
          </a>
        </ul>
        <div class="item-main_chapters_left_pages">
          <span class="active">1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span>
        </div>
      </div>
      <div class="item-main_chapters_right" :style="`background-image: url(${item.bottomImg})`">
        <div class="item-main_chapters_right_inner">
          <div class="item-main_chapters_right_inner_rate">
            <i class="fas fa-star"></i>
            <span class="item-main_chapters_right_inner_rate_num">9.66</span>
            <span class="item-main_chapters_right_inner_rate_btn">点评</span>
          </div>
          <div class="item-main_chapters_right_inner_update">
            <span class="item-main_chapters_right_inner_update_circle">更新</span>
            <span class="item-main_chapters_right_inner_update_txt">{{item.updateday}}</span>
          </div>
          <p class="item-main_chapters_right_inner_desc">{{item.desc}}</p>
          <a class="item-main_chapters_right_inner_first">阅读第一话
            <i class="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  head() {
    return {
      title: this.item.title + ' - 漫书MangaBook'
    }
  },
  
  async asyncData({ $axios, params }) {
    const item = await $axios.$get('/item/' + params.id);
    return { item }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/base.scss';
@import '@/assets/css/util.scss';

.item {
  background-color: #f5f5f5;

  &-topbg {
    height: 3.21rem;
    /* @include img-bg('/imgs/item/itembgimg.jpg', cover, center); */
    background-size: cover;
    background-position: center;
    // background: pink;
  }

  &-main {
    width: 12rem;
    /* height: 800px; */
    /* background: pink; */
    margin: -3.21rem auto 0 auto;

    &_head {
      height: 2.4rem;
      background-size: cover;
      background-position: center;
      //text-align: center;
      @include flex-column;
      justify-content: center;
      align-items: center;

      &__category {
        font-size: 0.2rem;
        font-weight: 600;
      }
      &__title {
        font-size: 0.5rem;
        font-weight: 700;
      }
      &__author {
        font-size: 0.17rem;
        margin-top: 0.15rem;
      }
    }

    &_chapters {
      background: #fff;
      /* height: 800px; */
      display: flex;

      &_left {
        /* background: greenyellow; */
        /* height: 400px; */
        flex-grow: 1;
        flex-basis: 66.67%;
        padding: 0.28rem 0.15rem 0.15rem 0.15rem;

        &_mobile {
          height: 1rem;
          border-top: 0.01rem solid #f5f5f5;
          border-bottom: 0.01rem solid #f5f5f5;
          @include flex-v-h-center;
          position: relative;

          p {
            text-align: center;
            /* margin: 0 auto; */
            b {
              color: #c38cff;
            }
          }

          img {
            height: 0.75rem;
            width: 0.75rem;
            margin-left: auto;
            position: absolute;
            right: 0.05rem;
          }
        }

        &_list {
          list-style: none;
          @include flex-column;

          &_item {
            display: flex;
            border-bottom: 0.01rem solid #f5f5f5;
            justify-content: space-between;


            &_left, &_right {
              @include flex-v-center;
            }
            
            &_left {
              img {
                height: 0.73rem;
                width: 0.77rem;
                margin-right: 0.15rem;
              }
              p {
                margin: 0 0.05rem;
              }
              span {
                font-size: 0.12rem;
                color: #05f269;
              }
            }

            &_right {
              min-width: 1.8rem;
              display: flex;
              justify-content: space-between;
              margin-right: 0.15rem;
              &_date {
                color: #c4c4c4;
                font-size: 0.14rem;
              }
      
              &_likes {
                color: #c4c4c4;
                font-size: 0.14rem;
              }
      
              &_ep {
                font-size: 0.17rem;
              }
              
            }
          }
        }

        &_pages {
          text-align: center;
          span {
            display: inline-block;
            height: 0.3rem;
            width: 0.3rem;
            margin: 0.2rem 0.05rem 0.15rem 0.05rem;
          }

          .active {
            background: #05f269;
            border-radius: 0.2rem;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            color: #fff;
          }
        }
      }

      &_right {
        border-left: 0.01rem solid #f5f5f5;
        flex-grow: 1;
        flex-basis: 33.33%;
        padding: 0.55rem 0.3rem 0.55rem 0.3rem;
        background-repeat: no-repeat;
        background-position: bottom right;

        &_inner {
          height: 100%;
          @include flex-column;

          &_rate {
            i {
              color: #05f269;
              margin-right: 0.05rem;
            }

            &_btn {
              display: inline-block;
              background: #05f269;
              color: #fff;
              margin-left: 0.05rem;
              padding: 0 0.1rem;
              border-radius: 0.2rem;
            }
          }
          &_update {
            margin-top: 0.4rem;
            display: flex;
            align-items: center;
            &_circle {
              display: inline-block;
              font-size: 0.14rem;
              color: #fff;
              background: #05f269;
              padding: 0.07rem 0.03rem;
              border-radius: 50%;
            }
            &_txt {
              margin-left: 0.1rem;
              font-size: 0.2rem;
              font-weight: 700;
            }
          }
          &_desc {
            margin-top: 0.2rem;
          }
          &_first {
            background: #2f2f2f;
            color: #fff !important;
            display: inline-block;
            margin: 0.6rem auto 0 auto;
            padding: 0.1rem 1.2rem;
            border-radius: 0.3rem;
            cursor: pointer;
            position: relative;

            i {
              position: absolute;
              right: 0.2rem;
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }
      }
    }
  }
}
</style>