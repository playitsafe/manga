<template>
  <a href="#">
    <div class="daily-grid" :class="{large: large}">
      <p>{{gridData.category}}</p>
      <h3>{{gridData.title}}</h3>
      <p>{{gridData.author}}</p>
      

    </div>

  </a>
</template>

<script>
export default {
  props: {
    large: Boolean,
    gridData: Object

  }
}
</script>

<style lang="scss">
.daily-grid {
  width: 100%;
  height: 152px;
  background: pink;
  border: 1px solid #dbdbdb;
  /* background: #fff; */
  color: #000000;

  h3 {
    font-size: 17px;

  }


}
</style>