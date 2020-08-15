<template>
  <div class="back-totop" v-show="showBtn" @click="toTop">
    <i class="fa fa-angle-up"></i>
    TOP
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBtn: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandler);
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollHandler);
  },
  methods: {
    scrollHandler() {
      if (window.scrollY > 300) {
        this.showBtn = true;
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
  height: 55px;
  width: 55px;
  background: red;
  position: fixed;
  right: 35px;
  bottom: 25px;
  z-index: 98;
  border: 1px solid #cecece;
  background: #fff;
  text-align: center;
  font-size: 15px;
  cursor: pointer;
  opacity: .5;
  transition: all ease .2s;

  &:hover {
    opacity: 1;
  }

  i {
    font-size: 30px;
  }
}
</style>