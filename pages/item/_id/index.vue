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
  
  // data() {
  //   return {
  //     item: {
  //       "category": {
  //         "cateName": "少年",
  //         "themeColor": "#046afa"
  //       },
  //       "id": 101,
  //       "bottomImg": "/imgs/item/bottomImg.jpg",
  //       "bgImg": "/imgs/item/itembgimg.jpg",
  //       "coverImg": "/imgs/item/item-cover-img.png",
  //       "title": "恋人攻略",
  //       "author": "黎丽",
  //       "stars": 9632,
  //       "updateday": "在周一更新",
  //       "desc": "她因患有罕见的不治之症备受瞩目 她性格沉稳却经历了悲惨童年 一个偶然的契机，两位少女开始了解彼此，她们将痛苦深藏，一起展开“复仇”……",
  //       "episodes": [
  //         {
  //           "ep": 1,
  //           "eplink": "/ep0001",
  //           "epImg": "/imgs/item/epimg1.jpg",
  //           "updateOn": "2020-6-8",
  //           "likes": 9983,
  //           "other": [
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "田杰",
  //               "likes": 9399,
  //               "cover": "/imgs/x1.jpg"
  //             },
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "龙平",
  //               "likes": 9810,
  //               "cover": "/imgs/x3.jpg"
  //             },
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "Donna Miller",
  //               "likes": 8554,
  //               "cover": "/imgs/x2.jpg"
  //             }
  //           ]
  //         },
  //         {
  //           "ep": 2,
  //           "eplink": "/ep0001",
  //           "epImg": "/imgs/item/epimg7.jpg",
  //           "updateOn": "2020-6-8",
  //           "likes": 9748,
  //           "other": [
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "Susan Anderson",
  //               "likes": 9181,
  //               "cover": "/imgs/x1.jpg"
  //             },
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "Cynthia Jones",
  //               "likes": 9182,
  //               "cover": "/imgs/x3.jpg"
  //             },
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "Kenneth Davis",
  //               "likes": 9388,
  //               "cover": "/imgs/x3.jpg"
  //             }
  //           ]
  //         },
  //         {
  //           "ep": 3,
  //           "eplink": "/ep0001",
  //           "epImg": "/imgs/item/epimg9.jpg",
  //           "updateOn": "2020-6-8",
  //           "likes": 8415,
  //           "other": [
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "周芳",
  //               "likes": 8295,
  //               "cover": "/imgs/x1.jpg"
  //             },
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "Sharon Lopez",
  //               "likes": 8688,
  //               "cover": "/imgs/x2.jpg"
  //             },
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "孟军",
  //               "likes": 9182,
  //               "cover": "/imgs/x3.jpg"
  //             }
  //           ]
  //         },
  //         {
  //           "ep": 4,
  //           "eplink": "/ep0001",
  //           "epImg": "/imgs/item/epimg4.jpg",
  //           "updateOn": "2020-6-8",
  //           "likes": 9660,
  //           "other": [
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "Matthew Wilson",
  //               "likes": 9314,
  //               "cover": "/imgs/x2.jpg"
  //             },
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "方军",
  //               "likes": 8264,
  //               "cover": "/imgs/x1.jpg"
  //             },
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "Patricia Harris",
  //               "likes": 9153,
  //               "cover": "/imgs/x2.jpg"
  //             }
  //           ]
  //         },
  //         {
  //           "ep": 5,
  //           "eplink": "/ep0001",
  //           "epImg": "/imgs/item/epimg4.jpg",
  //           "updateOn": "2020-6-8",
  //           "likes": 8259,
  //           "other": [
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "Laura White",
  //               "likes": 9689,
  //               "cover": "/imgs/x2.jpg"
  //             },
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "阎杰",
  //               "likes": 8988,
  //               "cover": "/imgs/x1.jpg"
  //             },
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "Donna Robinson",
  //               "likes": 8433,
  //               "cover": "/imgs/x2.jpg"
  //             }
  //           ]
  //         },
  //         {
  //           "ep": 6,
  //           "eplink": "/ep0001",
  //           "epImg": "/imgs/item/epimg5.jpg",
  //           "updateOn": "2020-6-8",
  //           "likes": 8041,
  //           "other": [
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "Karen Jones",
  //               "likes": 8435,
  //               "cover": "/imgs/x3.jpg"
  //             },
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "Paul Taylor",
  //               "likes": 9210,
  //               "cover": "/imgs/x2.jpg"
  //             },
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "Karen Anderson",
  //               "likes": 8398,
  //               "cover": "/imgs/x1.jpg"
  //             }
  //           ]
  //         },
  //         {
  //           "ep": 7,
  //           "eplink": "/ep0001",
  //           "epImg": "/imgs/item/epimg9.jpg",
  //           "updateOn": "2020-6-8",
  //           "likes": 9888,
  //           "other": [
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "黄娟",
  //               "likes": 9287,
  //               "cover": "/imgs/x1.jpg"
  //             },
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "Scott Perez",
  //               "likes": 9311,
  //               "cover": "/imgs/x1.jpg"
  //             },
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "罗刚",
  //               "likes": 8953,
  //               "cover": "/imgs/x1.jpg"
  //             }
  //           ]
  //         },
  //         {
  //           "ep": 8,
  //           "eplink": "/ep0001",
  //           "epImg": "/imgs/item/epimg9.jpg",
  //           "updateOn": "2020-6-8",
  //           "likes": 8685,
  //           "other": [
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "Nancy Martinez",
  //               "likes": 8801,
  //               "cover": "/imgs/x2.jpg"
  //             },
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "黎秀英",
  //               "likes": 9380,
  //               "cover": "/imgs/x2.jpg"
  //             },
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "汪桂英",
  //               "likes": 9317,
  //               "cover": "/imgs/x2.jpg"
  //             }
  //           ]
  //         },
  //         {
  //           "ep": 9,
  //           "eplink": "/ep0001",
  //           "epImg": "/imgs/item/epimg7.jpg",
  //           "updateOn": "2020-6-8",
  //           "likes": 8450,
  //           "other": [
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "苏秀兰",
  //               "likes": 8635,
  //               "cover": "/imgs/x1.jpg"
  //             },
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "王秀兰",
  //               "likes": 8485,
  //               "cover": "/imgs/x2.jpg"
  //             },
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "Donna Lee",
  //               "likes": 9589,
  //               "cover": "/imgs/x2.jpg"
  //             }
  //           ]
  //         },
  //         {
  //           "ep": 10,
  //           "eplink": "/ep0001",
  //           "epImg": "/imgs/item/epimg3.jpg",
  //           "updateOn": "2020-6-8",
  //           "likes": 9124,
  //           "other": [
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "杜明",
  //               "likes": 9646,
  //               "cover": "/imgs/x2.jpg"
  //             },
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "杨秀英",
  //               "likes": 9042,
  //               "cover": "/imgs/x2.jpg"
  //             },
  //             {
  //               "title": "喜欢我的小狮子",
  //               "author": "吕洋",
  //               "likes": 8400,
  //               "cover": "/imgs/x1.jpg"
  //             }
  //           ]
  //         },
  //       ]
  //     }
  //   }
  // },

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
    height: 321px;
    /* @include img-bg('/imgs/item/itembgimg.jpg', cover, center); */
    background-size: cover;
    background-position: center;
    // background: pink;
  }

  &-main {
    width: 1200px;
    /* height: 800px; */
    /* background: pink; */
    margin: -321px auto 0 auto;

    &_head {
      height: 240px;
      background-size: cover;
      background-position: center;
      //text-align: center;
      @include flex-column;
      justify-content: center;
      align-items: center;

      &__category {
        font-size: 20px;
        font-weight: 600;
      }
      &__title {
        font-size: 50px;
        font-weight: 700;
      }
      &__author {
        font-size: 17px;
        margin-top: 15px;
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
        padding: 28px 15px 15px 15px;

        &_mobile {
          height: 100px;
          border-top: 1px solid #f5f5f5;
          border-bottom: 1px solid #f5f5f5;
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
            height: 75px;
            width: 75px;
            margin-left: auto;
            position: absolute;
            right: 5px;
          }
        }

        &_list {
          list-style: none;
          @include flex-column;

          &_item {
            display: flex;
            border-bottom: 1px solid #f5f5f5;
            justify-content: space-between;


            &_left, &_right {
              @include flex-v-center;
            }
            
            &_left {
              img {
                height: 73px;
                width: 77px;
                margin-right: 15px;
              }
              p {
                margin: 0 5px;
              }
              span {
                font-size: 12px;
                color: #05f269;
              }
            }

            &_right {
              min-width: 180px;
              display: flex;
              justify-content: space-between;
              margin-right: 15px;
              &_date {
                color: #c4c4c4;
                font-size: 14px;
              }
      
              &_likes {
                color: #c4c4c4;
                font-size: 14px;
              }
      
              &_ep {
                font-size: 17px;
              }
              
            }
          }
        }

        &_pages {
          text-align: center;
          span {
            display: inline-block;
            height: 30px;
            width: 30px;
            margin: 20px 5px 15px 5px;
          }

          .active {
            background: #05f269;
            border-radius: 20px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            color: #fff;
          }
        }
      }

      &_right {
        border-left: 1px solid #f5f5f5;
        flex-grow: 1;
        flex-basis: 33.33%;
        padding: 55px 30px 55px 30px;
        background-repeat: no-repeat;
        background-position: bottom right;

        &_inner {
          height: 100%;
          @include flex-column;

          &_rate {
            i {
              color: #05f269;
              margin-right: 5px;
            }

            &_btn {
              display: inline-block;
              background: #05f269;
              color: #fff;
              margin-left: 5px;
              padding: 0 10px;
              border-radius: 20px;
            }
          }
          &_update {
            margin-top: 40px;
            display: flex;
            align-items: center;
            &_circle {
              display: inline-block;
              font-size: 14px;
              color: #fff;
              background: #05f269;
              padding: 7px 3px;
              border-radius: 50%;
            }
            &_txt {
              margin-left: 10px;
              font-size: 20px;
              font-weight: 700;
            }
          }
          &_desc {
            margin-top: 20px;
          }
          &_first {
            background: #2f2f2f;
            color: #fff !important;
            display: inline-block;
            margin: 60px auto 0 auto;
            padding: 10px 120px;
            border-radius: 30px;
            cursor: pointer;
            position: relative;

            i {
              position: absolute;
              right: 20px;
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