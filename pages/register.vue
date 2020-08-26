<template>
  <div class="register">
    <h3>注册</h3>
    <div class="register-inner">
      <form action="" class="register-inner-form">
        <div class="register-inner-form-email">
          <label for="">邮箱地址 *</label>
          <input type="text" placeholder="输入邮箱地址"
            :class="{error: $v.email.$error}"
            v-model.trim="$v.email.$model">
          <small v-show="!$v.email.email && $v.email.required">邮箱格式不正确</small>
          <small v-show="!$v.email.required && $v.email.$dirty">邮箱不能为空</small>
        </div>
        <div class="register-inner-form-password">
          <label for="">密码 *</label>
          <input type="password" placeholder="输入密码(6-16个字符)"
            :class="{error: $v.password.$error}"
            v-model="$v.password.$model">
          <small v-show="!$v.password.required && $v.password.$dirty">密码不能为空</small>
          <small v-show="(!$v.password.minLength || !$v.password.maxLength) && $v.password.required">密码必须为6-16个字符</small>
        </div>
        <div class="register-inner-form-repeat">
          <label for="">再次输入密码 *</label>
          <input type="password" placeholder="重复密码(6-16个字符)"
            :class="{error: $v.repeat.$error}"
            v-model="$v.repeat.$model">
          <small v-show="$v.repeat.$dirty && !$v.repeat.sameAsPassword">两次输入不一致</small>
        </div>
        <div class="register-inner-form-username">
          <label for="">输入昵称 *</label>
          <input type="text" placeholder="输入昵称(最长16个字符)"
            :class="{error: $v.username.$error}"
            v-model.trim="$v.username.$model">
          <small v-show="$v.username.required && !$v.username.maxLength">昵称不得超过16字符</small>
          <small v-show="!$v.username.required && $v.username.$dirty">昵称不能为空</small>
        </div>
        <p class="register-inner-form-consent">点击以下注册，表明您已同意用户注册协议</p>
        <a class="register-inner-form-submit"
          :class="$v.$invalid ? 'invalid' : 'valid'"
          href="javascript:;">
          立即注册
        </a>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, maxLength, sameAs } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

export default {
  mixins: [validationMixin],
  head: {
    title: '注册新用户，加入漫书！ | 漫书MangaBook'
  },
  data() {
    return {
      email: '',
      password: '',
      repeat: '',
      username: ''
    }
  },
  validations: {
    email: { required, email },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(16)
    },
    repeat: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(16),
      sameAsPassword: sameAs('password')
    },
    username: {
      required,
      maxLength: maxLength(16)
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/base.scss';
@import '@/assets/css/util.scss';

.register {
  background: #f5f5f5;
  padding: 0.4rem 0;

  h3 {
    width: 11.1rem;
    margin: 0 auto 0.15rem auto;
    font-weight: 700;
    font-size: .22rem;
  }

  &-inner {
    width: 11.1rem;
    min-width: 11.1rem;
    background: #ffffff;
    padding: 0.4rem 0;
    margin: 0 auto;

    &-form {
      @include flex-column;
      margin: 0 auto;
      align-items: flex-start;
      width: 7.7rem;
      
      &-email, &-password, &-repeat, &-username {
        @include flex-column;
        width: 100%;
        height: 0.85rem;
        margin-bottom: 0.35rem;
        input {
          @include remove-input-style;
          font-size: 0.18rem;
          border-bottom: 0.01rem solid #eaeaea;
          &::placeholder {
            color: #dddddd;
          }
          &:focus {
            border-bottom: 0.01rem solid #eaeaea;
          }
        }

        input.error {
          border-bottom: 0.01rem solid #ff4e4e;
          &:focus {
            border-bottom: 0.01rem solid #ff4e4e;
          }
        }

        label {
          font-size: 0.19rem;
          font-weight: 700;
          margin-bottom: 0.1rem;
        }

        small {
          color: #ff4e4e;
        }
      }

      &-consent {
        margin-top: 0.25rem;
      }
      
      &-submit {
        display: inline-block;
        margin: 0.15rem auto;
        padding: 0.15rem 0.4rem;
        font-size: 0.18rem;
        color: #ffffff;
        border-radius: 0.45rem;
        letter-spacing: 0.1rem;
        font-weight: 700;
        &:hover, &:visited, &:target, &:active, &:focus {
          color: #ffffff;
          font-size: 0.18rem;
        }

        &.valid {
          background: #4ce692;
          &:hover {
            background: #00dc64;
          }
        }

        &.invalid {
          background: #d7d7d7;
          cursor: no-drop;
        }
      }
    }

  }
}
</style>