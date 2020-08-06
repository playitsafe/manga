export const state = () => ({
  dailyImgs: [],
  newImgs: [],
  categoryImgs: [],
  rankings: {}
})

export const mutations = {
  setDailyImgs(state, val) {
    state.dailyImgs = val;
  },
  setNewImgs(state, val) {
    state.newImgs = val;
  },
  setCategoryImgs(state, val) {
    state.categoryImgs = val;
  },
  setRankings(state, val) {
    state.rankings = val
  }
}

export const actions = {
  setDailyImgs: ({ commit }, dailyImgs) => {
    commit('setDailyImgs', dailyImgs);
  },
  setNewImgs: ({ commit }, newImgs) => {
    commit('setNewImgs', newImgs);
  },
  setCategoryImgs: ({ commit }, categoryImgs) => {
    commit('setUser', categoryImgs);
  },
  setRankings({ commit }, rankings) {
    commit('setRankings', rankings);
  }
}

export const getters = {
  getDailyImgsArray(state) {
    return state.dailyImgs;
  }
}