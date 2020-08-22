<template>
  <div v-if="loading" class="loading">
    <div class="loading-spinner">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    }
  }
}
</script>

<style lang="scss">
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 9999;

  &-spinner {
    position: absolute;
    display: inline-block;
    top: 45vh;
    left: 50vw;
    width: 160px;
    height: 160px;
    transform: translate(-50%, -50%);
    /* background: pink; */

    div {
      position: absolute;
      top: 66px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #00dc64;
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }

    div:nth-child(1) {
      left: 40px;
      animation: lds-ellipsis1 0.6s infinite;
    }

    div:nth-child(2) {
      left: 50px;
      /* background: red; */
      animation: lds-ellipsis2 0.6s infinite;
    }

    div:nth-child(3) {
      left: 86px;
      /* background:pink; */
      animation: lds-ellipsis2 0.6s infinite;
    }

    div:nth-child(4) {
      left: 120px;
      /* background: blue; */
      animation: lds-ellipsis3 0.6s infinite;
    }

    @keyframes lds-ellipsis1 {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes lds-ellipsis3 {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(0);
      }
    }
    @keyframes lds-ellipsis2 {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(24px, 0);
      }
    }
  }
}
</style>
