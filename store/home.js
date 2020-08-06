export const state = () => ({
  mainBanners: [],
  dailyImgs: [],
  newImgs: [],
  categoryImgs: [],
  rankings: {}
})

export const mutations = {
  setMainBanners(state, val) {
    state.mainBanners = val;
  },
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
  setMainBanners: ({ commit }, mainBanners) => {
    commit('setMainBanners', mainBanners);
  },
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