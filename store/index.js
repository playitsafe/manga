import { getDailyContentArray, getNewContentArray, getCategoryArray, addColor, getFullWeekArr, getColoredObjArr } from '@/utils';

export const state = () => ({
  
})

export const mutations = {

}

export const actions = {
  async nuxtServerInit(store, ctx) {
    let { commit } = store;
    let { req, app } = ctx;

    //***get main banner swiper */
    const { status, data: {banners} } = await app.$axios.get('/mainBanner');
    commit('home/setMainBanners', status === 200 ? banners : []);

    //***get daily content */
    const { status:status2, data } = await app.$axios.get('/dailyImgs');

    if (status2 === 200) {
      commit('home/setDailyImgs', getDailyContentArray(data));
    }
    
    //***get latest content */
    const { status:status3, data:newImgs } = await app.$axios.get('/latest');
    if (status3 === 200) {
      commit('home/setNewImgs', getNewContentArray(newImgs));
    }

    //***get category content */
    const { status:status4, data:cateImgs } = await app.$axios.get('/categoryImgs');
    if (status4 === 200) {
      commit('home/setCategoryImgs', getCategoryArray(cateImgs));
    }

    //***get rank content */
    const { status:status5, data:rankImgs } = await app.$axios.get('/rank');
    if (status5 === 200) {
      commit('home/setRankings', addColor(rankImgs));
    }

    //***get full daily content */
    const { status:status6, data:dailyContents } = await app.$axios.get('/fullWeek');
    if (status6 === 200) {
      commit('daily/setDailyContents', getFullWeekArr(dailyContents));
    }

    //***get completed content */
    const { status:status7, data:completedItems } = await app.$axios.get('/fullCompleted');
    if (status7 === 200) {
      commit('daily/setCompletedContents', getColoredObjArr(completedItems.completed));
    }

    //***get genre content */
    const { status:status8, data:genreObj } = await app.$axios.get('/genre');
    if (status8 === 200) {
      commit('genre/setGenreContents', genreObj);
    }

  }
}
