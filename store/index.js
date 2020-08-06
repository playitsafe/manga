import { getDailyContentArray } from '@/utils';

export const state = () => ({
  
})

export const mutations = {

}

export const actions = {
  async nuxtServerInit(store, ctx) {
    let { commit } = store;
    let { req, app } = ctx;

    //***get daily contents
    // {
    //   Mon: {row1:[], row2:[]}
    // }
    // ===
    // [
    //   {row1:[],row2:[]},...{}
    // ]
    const { status, data } = await app.$axios.get('/dailyImgs');
    // commit('home/setDailyImgs', status === 200 ? data : {});

    // const colors = ['#37308c', '#fd337f','#8b00e9','#00b19a','#046afa','#eea802','#18b636', '#8e702f'];
    // const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    // let dailyImgArray = [];
    // if (status === 200) {
    //   for (let i = 0; i < days.length; i++) {
    //     for (let imgDayKey in data) {
    //       if (imgDayKey === days[i]) {
    //         dailyImgArray.push(data[imgDayKey]);
    //       }
    //     }
    //   }
    // }

    // for (let i = 0; i < dailyImgArray.length; i++) {
    //   for (let row in dailyImgArray[i]) {
    //     for (let j = 0; j < dailyImgArray[i][row].length; j++) {
    //       let randomIndex = Math.floor(Math.random() * colors.length);
    //       dailyImgArray[i][row][j].color = colors[randomIndex];
    //     }
    //   }
    // }

    if (status === 200) {
      commit('home/setDailyImgs', getDailyContentArray(data));
    }
    
    //***get latest content */


  }
}
