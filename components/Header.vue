<template>
  <div class="my-header">
    <div class="header-outer">
      <div class="left-nav">
        <ul>
          <li><a href="#"><img src="imgs/webtoon-logo.jpg" alt="logo"></a></li>
          <li><a href="#">原创</a></li>
          <li><a href="#">分类</a></li>
          <li><a href="#">流行</a></li>
          <li><a href="#">排行榜</a></li>
        </ul>
      </div>

      <div class="right-nav">
        <div class="login" v-if="!showSearchInput">
          <a href="#" class="mybtn">登陆</a>
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
      </div>
    </div>
  </div>

  <!-- <b-container class="my-header">
    <b-navbar toggleable="lg" type="light">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">首页</b-nav-item>
        <b-nav-item href="#">漫画</b-nav-item>
        <b-nav-item href="#">小说</b-nav-item>
        <b-nav-item href="#" disabled="">投稿</b-nav-item>
        <b-nav-item href="#">购买金币</b-nav-item>
      </b-navbar-nav>

      <! -- Right aligned nav items -- >
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown right>
          <! -- Using 'button-content' slot -- >
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </b-container> -->
</template>

<script>
export default {
  data() {
    return {
      showSearchInput: false
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/util.scss';
/* .my-header {
  max-width: 1200px;
  height: 70px;
  padding-left: 0;
  padding-right: 0;
} */

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
            text-decoration: none;
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


      .login {
        display: none;
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
    }
  }
  
}


</style>