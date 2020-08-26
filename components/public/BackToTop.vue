<template>
  <div class="back-totop" v-show="showBtn" @click="toTop">
    <i class="fas fa-chevron-up"></i><br />
    TOP
  </div>
</template>

<script>
import throttle from 'lodash/throttle';
let throttleHandler;

export default {
  data() {
    return {
      showBtn: false
    }
  },
  mounted() {
    throttleHandler = throttle(this.scrollHandler, 500);
    window.addEventListener('scroll', throttleHandler);
  },
  destroyed() {
    window.removeEventListener('scroll', throttleHandler);
  },
  methods: {
    scrollHandler() {
      if (window.scrollY > 300) {
        console.log('top btn check')
        this.showBtn = true;
      } else if (window.scrollY <= 300) {
        this.showBtn = false;
      }
    },
    toTop() {
      window.scrollTo(0, 0);
    }
  }
}
</script>

<style lang="scss">
.back-totop {
  height: 0.55rem;
  width: 0.55rem;
  background: red;
  position: fixed;
  right: 0.35rem;
  bottom: 0.25rem;
  z-index: 98;
  border: 0.01rem solid #cecece;
  background: #fff;
  text-align: center;
  font-size: 0.15rem;
  cursor: pointer;
  opacity: .5;
  transition: all ease .2s;

  &:hover {
    opacity: 1;
  }

  i {
    line-height: 0.2rem;
    font-size: 0.3rem;
    font-weight: 700;
    /* position: absolute;
    top: -15px; */
  }
}
</style>