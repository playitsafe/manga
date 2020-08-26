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
  padding-top: 2rem;
  font-size: 0.3rem;
  font-family: sans-serif;
  z-index: 9999;

  &-spinner {
    position: absolute;
    display: inline-block;
    top: 45vh;
    left: 50vw;
    width: 1.6rem;
    height: 1.6rem;
    transform: translate(-50%, -50%);
    /* background: pink; */

    div {
      position: absolute;
      top: 0.66rem;
      width: 0.2rem;
      height: 0.2rem;
      border-radius: 50%;
      background: #00dc64;
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }

    div:nth-child(1) {
      left: 0.4rem;
      animation: lds-ellipsis1 0.6s infinite;
    }

    div:nth-child(2) {
      left: 0.5rem;
      /* background: red; */
      animation: lds-ellipsis2 0.6s infinite;
    }

    div:nth-child(3) {
      left: 0.86rem;
      /* background:pink; */
      animation: lds-ellipsis2 0.6s infinite;
    }

    div:nth-child(4) {
      left: 1.2rem;
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
        transform: translate(0.24rem, 0);
      }
    }
  }
}
</style>
