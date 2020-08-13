export const state = () => ({
  dailyContents: [],
  completedContents: []
})

export const mutations = {
  setDailyContents(state, val) {
    state.dailyContents = val;
  },
  setCompletedContents(state, val) {
    state.completedContents = val;
  }
}

export const actions = {
  setDailyContents: ({ commit }, dailyContents) => {
    commit('setDailyContents', dailyContents);
  },
  setCompletedContents: ({ commit }, completedContents) => {
    commit('setCompletedContents', completedContents);
  }
}

// export const getters = {
//   getDailyImgsArray(state) {
//     return state.dailyImgs;
//   }
// }