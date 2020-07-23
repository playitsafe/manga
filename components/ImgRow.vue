<template>
  <ul class="img-row">
    <a href="#" v-for="img in imgs" :key="img.url">
      <li class="img-row-grid">
        <img :src="img.url" alt="" 
          :style="img.type===2 ? 'width:435px' : 'width:210px'">
      </li>
    </a>
  </ul>
</template>

<script>
export default {
  props: {
    imgs: Array
  }
}
</script>

<style lang="scss">
.img-row {
    list-style: none;
    width: 1110px;
    display: flex;
    justify-content: space-between;
    margin: 7.5px 0;

    &-grid {
      float: left;
      img {
        /* width: 210px; */
        height: 210px;
      }
    }
  }
</style>