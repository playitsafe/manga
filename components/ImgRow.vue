<template>
  <ul class="img-row">
    <a href="#" v-for="(img,i) in imgs" :key="img.url">
      <li class="img-row-grid"
        :style="img.type===2 ? 'width:435px' : 'width:210px'">
        <div class="mg-row-grid-front">
          <img :src="img.url" alt="">
        </div>
        <div class="img-row-grid-back"
          :style="`background: ${getColors(imgs.length)[i]}`">

        </div>
      </li>
    </a>
  </ul>
</template>

<script>
export default {
  props: {
    imgs: Array
  },
  data() {
    return {
      bgColors: ['#37308c', '#fd337f','#8b00e9','#00b19a','#046afa','#eea802','#18b636', '#8e702f']
    }
  },
  methods: {
    getColors(imgsLength) {
      let colors = [...this.bgColors];
      // shuffle array colors
      for (let i = colors.length-1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [colors[i], colors[j]] = [colors[j], colors[i]];
      }
      return colors.slice(0,imgsLength);
    }
  }

}
</script>

<style lang="scss">
@import '@/assets/css/util.scss';

.img-row {
    list-style: none;
    width: 1110px;
    display: flex;
    justify-content: space-between;
    margin: 7.5px 0;

    &-grid {
      float: left;
      position: relative;
      height: 210px;
      /* transition: all ease .3s; */
      img {
        /* width: 210px; */
        height: 100%;
        width: 100%;
      }
      &:hover &-front {
        @include visibility-none;
        /* transition: all ease .3s; */

      }
      &:hover &-back {
        @include visibility-show;
        /* transition: all ease .3s; */
      }

      &-front {
        position: absolute;
        top: 0;
        left: 0;
        @include visibility-show;
        transition: all ease .2s;
        
      }

      &-back {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        /* background: red; */
        /* z-index: -1; */
        @include visibility-none;
        transition: all ease .2s;
      }
    }
  }
</style>