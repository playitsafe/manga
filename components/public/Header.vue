<template>
  <div class="my-header">
    <div class="header-outer">
      <div class="left-nav">
        <ul>
          <nuxt-link to="/"><li><img src="imgs/webtoon-logo.jpg" alt="logo"></li></nuxt-link> 
          <li><nuxt-link to="/daily">每日递送</nuxt-link></li>
          <li><nuxt-link to="/genre">分类</nuxt-link></li>
          <li><a href="#">流行</a></li>
          <li><a href="#">排行榜</a></li>
        </ul>
      </div>

      <div class="right-nav">
        <div class="login" v-if="!showSearchInput">
          <a href="javascript:;" class="mybtn" @click="openLoginbox" id="login-btn">登录</a>
          <span class="pipe"></span>
          <a class="btn-search" @click="showSearchInput = !showSearchInput">
            <i class="fas fa-search"></i>
          </a>

        </div>
        <div class="search" v-else>
          <input type="text" placeholder="可以用作品或作者进行搜索。">
          <div class="btns">
            <i class="fas fa-search"></i>
            <i class="far fa-times-circle" @click="showSearchInput = !showSearchInput"></i>
          </div>
        </div>
        <div class="login-box" v-show="showLoginbox" id="login-box">
          <span class="login-box-arrow"></span>
          <span class="login-box-close" @click="closeLoginbox">
            <i class="fas fa-times"></i>
          </span>
          <div class="login-box-inner">
            <p class="login-box-inner-title">登录</p>
            <div class="login-box-inner-username">
              <div class="login-box-inner-username-input"
                :class="{'error-border': $v.email.$error}">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="输入邮箱" v-model.trim="$v.email.$model">
              </div>
              <small class="login-box-inner-username-info"
                v-show="!$v.email.email && $v.email.$error && $v.email.required">
                邮箱格式无效
              </small>
              <small class="login-box-inner-username-info"
                v-show="!$v.email.required && $v.email.$error">
                请输入登录邮箱
              </small>
            </div>
            <div class="login-box-inner-password">
              <div class="login-box-inner-password-input"
                :class="{'error-border': $v.password.$error}">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="输入密码" v-model="$v.password.$model">
              </div>
              <small class="login-box-inner-password-info" v-show="!$v.password.required && $v.password.$error">请输入密码</small>
            </div>
            <a class="login-box-inner-btn" href="javascript:;"
              :class="$v.$invalid ? 'invalid' : 'valid'"
              @click="onLogin">登录</a>
            <div class="login-box-inner-bottom">
              <a href="javascript:;" @click="toRegister" class="login-box-inner-bottom-register">没有账号？去注册</a>
              <div class="bar"></div>
              <a href="#" class="login-box-inner-bottom-forget">忘记密码</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

export default {
  data() {
    return {
      showSearchInput: false,
      showLoginbox: false,
      email: '',
      password: ''
    }
  },
  mixins: [validationMixin],
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },
  computed: {
    // fineToLogin() {
    //   return !this.$v.$invalid;
    // },
    
  },
  methods: {
    listenHandler(e) {
      e.stopPropagation();

      // console.log('listening...');
      let clickInBox = document.getElementById('login-box').contains(e.target);
      let clickOnLoginBtn;
      if (document.getElementById('login-btn')) {
        clickOnLoginBtn = document.getElementById('login-btn').contains(e.target);
      }

      if(!clickInBox && !clickOnLoginBtn) {
        e.stopPropagation();
        window.removeEventListener('click', this.listenHandler);
        this.showLoginbox = false;
      }
    },
    closeLoginbox() {
      window.removeEventListener('click', this.listenHandler);
      this.showLoginbox = false;
    },
    openLoginbox() {
      this.showLoginbox = true;
      window.addEventListener('click', this.listenHandler);
    },
    onLogin() {
      if (!this.$v.$invalid) {
        console.log('login')
        //console.log(this.fineToLogin);
      }
    },
    toRegister() {
      window.removeEventListener('click', this.listenHandler);
      this.showLoginbox = false;
      this.$router.push('/register');
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/util.scss';

.my-header {
  display: flex;
  justify-content: center;
  .header-outer {
    @include flex-v-center;
    /* display: flex; */
    justify-content: space-between;
    /* align-items: center; */
    height: 100px;
    width: 1680px;
    max-width: 1680px;
    /* margin-left: auto;
    margin-right: auto; */
    .left-nav {
      ul {
        list-style: none;
        @include flex-v-center;
        /* display: flex;
        align-items: center; */
        @include clearfix;

        li {
          float: left;
          margin-left: 35px;
          font-size: 20px;
          font-weight: 700;
          margin-top: auto;
          margin-bottom: auto;

          a {
            color: black;
            &:hover {
              color: #00d564;
            }
          }
        }
      } 
    }

    .right-nav {
      margin-right: 40px;
      @include flex-v-center;
      position: relative;

      .login {
        position: relative;
        @include flex-v-center;

        .mybtn {
          @include inline-flex-center;
          width: 102px;
          height: 33px;
          font-size: 15px;
          color: #696666;
          border: 1px solid #b4b4b4;
          text-decoration: none;
          border-radius: 20px;
          /* margin-right: 10px; */
        }

        .pipe {
          height: 20px;
          border-right: 1px solid #b4b4b4;
          margin: 0 15px;
        }

        .btn-search {
          @include inline-flex-center;
          color: #696666;
          font-size: 14px;
          height: 31px;
          width: 31px;
          color: #b4b4b4;
          border: 1px solid #b4b4b4;
          border-radius: 15.5px;
          text-decoration: none;
          @include hover-pointer;
        }

        
      }

      .search {
        @include flex-v-center;
        justify-content: space-between;
        height: 33px;
        width: 330px;
        border: 1px solid #b4b4b4;
        border-radius: 20px;

        input {
          height: 23px;
          width: 210px;
          margin-left: 15px;
          border:none;
          border-width:0px;
          font-size: 13px;
          outline: none;
          &:focus {
            border:none;
            border-width:0px;
            outline: none;
          }
        }

        .btns {
          margin-right: 15px;
          color: #b4b4b4;
          font-size: 16px;
          
          .fa-search {
            padding-right: 13px;
            border-right: 1px solid #b4b4b4;
            @include hover-pointer;
          }

          .fa-times-circle {
            padding-left: 10px;
            @include hover-pointer;
          }

        }
      }

      .login-box {
        left: -250px;
        top: 50px;
        position: absolute; 
        height: 420px;
        width: 358px;
        background: #2c2c2c;
        border-radius: 15px;
        z-index: 99;
        color: #ffffff;
        padding: 20px;

        &-close {
          position: absolute;
          top: 10px;
          right: 25px;
          font-size: 25px;
          color: #858585;
          cursor: pointer;
        }

        &-arrow {
          position: absolute;
          display: inline-block;
          height: 0;
          width: 0;
          border-left: 9px solid transparent;
          border-right: 9px solid transparent;
          border-bottom: 15px solid #2c2c2c;
          top: -15px;
          right: 50px; 
        }

        &-inner {
          padding: 30px;
          text-align: center;

          &-title {
            font-size: 20px;
            letter-spacing: 30px;
            margin-bottom: 30px;
            padding-left: 30px;
          }

          &-username-info, &-password-info {
            text-align: left;
            color: #c38cff;
          }

          &-username {
            margin-bottom: 35px;
            @include flex-column;
            overflow: hidden;
            height: 45px;

            &-input {
              border-bottom: 1px solid #6e6e6e;
              display: flex;

              &.error-border {
                border-bottom: 1px solid #c38cff;
              }

              i {
                color: #797979;
                margin: 0 5px;
                line-height: 20px;
              }
              input {
                @include remove-input-style;
                background: #2c2c2c;
                color: #ffffff;
                width: 100%;

                &::placeholder {
                  font-family: 'Noto Serif SC';
                }
              }
            }
          }

          &-password {
            margin-bottom: 35px;
            @include flex-column;
            height: 45px;

            &-input {
              border-bottom: 1px solid #6e6e6e;
              display: flex;

              &.error-border {
                border-bottom: 1px solid #c38cff;
              }

              i {
                color: #797979;
                margin: 0 5px;
                line-height: 20px;
              }
              input {
                @include remove-input-style;
                background: #2c2c2c;
                color: #ffffff;
                font-family: sans-serif;
                width: 100%;

                &::placeholder {
                  font-family: 'Noto Serif SC';
                }
              }
            }
          }

          &-btn {
            display: block;
            /* height: 40px; */
            padding: 10px 60px 10px 90px;
            border-radius: 20px;
            letter-spacing: 30px;
            cursor: pointer;
            margin-bottom: 30px;

            &.invalid {
              background: #d7d7d7;
              cursor: no-drop;
            }

            &.valid {
              background: #c38cff;
            }
          }

          &-bottom {
            display: flex;
            padding: 0 15px;
            justify-content: space-between;
            align-items: center;

            .bar {
              height: 15px;
              border-right: 1px solid #ffffff;
            }

            &-forget {
              color: #868686;
            }
          }
        }
      }
    }
  }
  
}


</style>