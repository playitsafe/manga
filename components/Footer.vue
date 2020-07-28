<template>
  <div class="footer">

    <div class="footer-notice">
      <div class="footer-notice-inner">
        <span class="footer-notice-inner-list">公告<i class="fas fa-chevron-right"></i></span>
        <span class="footer-notice-inner-detail">
          【能量补给站】7月福利活动特辑
          <span class="footer-notice-inner-detail-date">2020-7-24</span>
        </span>
      </div>
    </div>

    <div class="footer-qrcode">
      <div class="footer-qrcode-inner">
        <div class="footer-qrcode-inner-code">
        
        </div>
        <div class="footer-qrcode-inner-app">
          <div class="footer-qrcode-inner-app-desc">
            <p>上下学，上下班的无聊路途给你带来欢乐的唯一APP</p>
            <p>现在就下载到手机吧！</p>
          </div>
          <div class="footer-qrcode-inner-app-btns">
            <span class="footer-qrcode-inner-app-btns-android">Android</span>
            <span class="footer-qrcode-inner-app-btns-ios">iOS</span>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-menu">
      <ul class="footer-menu-inner">
        <li v-for="(item,i) in footerMenu" :key="i">
          <a href="#">{{item}}</a>
          <!-- <span class="footer-menu-bar"></span> -->
        </li>
      </ul>
    </div>

    <div class="footer-company">
        <span> &copy; Dongman Entertainment Corp</span>
        <span class="footer-company-bar">|</span>
        <span>北京咚漫娱乐有限公司</span>
    </div>

    <div class="footer-addr">
      <span>地址：北京市朝阳区阜通东大街1号院5号楼323506室</span>
      <span class="footer-addr-bar">丨</span>
      <span>联系方式：01057076671</span>
    </div>

    <div class="footer-reg">
      <span>京ICP备17001033-1</span>
      <span>丨</span>
      <span>京B2-20170726</span>
      <span>丨</span>
      <span>京网文(2017) 1570-143号</span>
      <span>丨</span>
      <span>京公网安备 11010502035338号</span>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      footerMenu: ['反馈', '帮助', '条款', '个人信息', '公司介绍', '版权合作']
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/util.scss';

.footer {
  border-top: 1px solid #e5e5e5;
  background: #f5f5f5;
  /* min-width: 1240px; */
  display: flex;
  flex-direction: column;
  align-items: center;

  &-notice {
    border-bottom: 1px solid #e5e5e5;
    width: 100%;
    @include flex-h-center;

    &-inner {
      @include flex-v-center;
      height: 50px;
      width: 1240px;
      padding: 20px;
      font-size: 17px;
  
      &-list{
        margin-right: 15px;
        i {
          margin-left: 15px;
        }
      }
  
      &-detail {
        @include flex-h-center;
  
        &-date {
          color: #b1b1b1;
          font-size: 13px;
          margin-left: 25px;
          display: inline-flex;
          align-items: center;
        }
      }
    }
  }

  &-qrcode {
    border-bottom: 1px solid #e5e5e5;
    width: 100%;
    @include flex-h-center;

    &-inner {
      height: 154px;
      @include flex-h-center;
      align-items: center;

      &-code {
        @include img-bg('/imgs/qr.png', contain, no-repeat);
        /* background-size: ; */
        width: 391px;
        height: 93px;
      }

      &-app {
        margin-left: 17px;
        &-desc {
          font-size: 16px;
        }
        &-btns {
          margin-top: 20px;
          span {
            color: #fff;
            font-weight: 700;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            height: 30px;
            width: 102px;
            background: #b1b1b1;
            border-radius: 15px;
          }
          &-ios {
            margin-left: 10px;
          }
        }
      }
    }
  }

  &-menu {
    width: 100%;
    padding: 25px 0;
    @include flex-h-center;

      &-inner {
        list-style: none;
        width: 550px;
        display: flex;
        justify-content: space-between;
    
        li {
          display: inline-flex;
          justify-content: center;
          flex-grow: 1;
          position: relative;

          &:not(:last-child)::after {
            content: '';
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            height: 14px;
            border-right: 1px solid #d6d6d6;
          }
        }
    
        
      }

  }

  &-company {
    font-size: 13px;
    color: #c5c5c5;
    &-bar {
      font-size: 10px;
      font-weight: 300;
    }
    span {
      display: inline-block;
      padding: 15px 5px 0 5px;
    }
  }

  &-addr {
    font-size: 14px;
    color: #b1b1b1;

    &-bar {
      font-weight: 300;
    }

    span {
      display: inline-block;
      padding: 15px 5px;
    }
  }

  &-reg {
    color: #b1b1b1;
    font-size: 14px;
    padding-bottom:35px;
    span {
      padding: 0 5px;
    }
  }




}
</style>