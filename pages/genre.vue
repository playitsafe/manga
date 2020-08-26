<template>
  <div class="genre">
    <StickyBar :navItems="navItems" />
    <div class="genre-wrap">
      <div v-for="genre in navItems" :key="genre.id" 
        class="genre-wrap-sub" :id="genre.id.slice(1)">
        <h3 :style="{color: genre.color}">{{genre.title}}</h3>
        <ul class="genre-wrap-sub-content">
          <li v-for="grid in genreCollection[genre.id.slice(1)]" :key="grid.id">
            <ListGrid :gridData="grid" large />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import StickyBar from '@/components/public/StickyBar';
import ListGrid from '@/components/public/ListGrid';

import { mapState } from 'vuex';

export default {
  head: {
    title: '漫画分类 | 恋爱，少年，古风，奇幻，搞笑，校园，都市，悬疑 | 漫书MangaBook'
  },
  components: {
    StickyBar,
    ListGrid
  },
  data() {
    return {
      navItems: [
        {
          id: '#love',
          title: '恋爱',
          color: '#fd337f'
        },
        {
          id: '#young',
          title: '少年',
          color: '#046afa'
        },
        {
          id: '#ancient',
          title: '古风',
          color: '#8e702f'
        },
        {
          id: '#fantasy',
          title: '奇幻',
          color: '#8b00e9'
        },
        {
          id: '#comedy',
          title: '搞笑',
          color: '#eea802'
        },
        {
          id: '#campus',
          title: '校园',
          color: '#00b19a'
        },
        {
          id: '#city',
          title: '都市',
          color: '#37308c'
        },
        {
          id: '#healing',
          title: '治愈',
          color: '#18b636'
        },
        {
          id: '#suspense',
          title: '悬疑',
          color: '#424457'
        },
        {
          id: '#inspiring',
          title: '励志',
          color: '#e11c1c'
        },
        {
          id: '#finished',
          title: '完结',
          color: '#012c60'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      genreCollection: state => state.genre.genreContents
    })
  },
  async fetch({ store, app}) {
    //***get genre content */
    const { status:status8, data:genreObj } = await app.$axios.get('/genre');
    if (status8 === 200) {
      store.commit('genre/setGenreContents', genreObj);
    }
  }
}
</script>

<style lang="scss">
.genre {
  /* height: 500px; */
  background: #f5f5f5;

  &-wrap {
    padding-top: 0.5rem;
    margin: 0 auto;
    width: 11.4rem;
    /* background: pink; */

    &-sub {
      margin-bottom: 0.4rem;

      h3 {
        font-size: 0.18rem;
        padding: 0.15rem 0;
      }

      &-content {
        display: flex;
        list-style: none;
        flex-wrap: wrap;
        justify-content: flex-start;

        li {
          width: 2.1rem;
          height: 2.1rem;
          margin-right: 0.15rem;
          margin-bottom: 0.15rem;
          /* align-content: flex-start; */
        }
      }

    }

  }
}
</style>