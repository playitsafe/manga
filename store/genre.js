export const state = () => ({
  genreContents: {}
})

export const mutations = {
  setGenreContents(state, val) {
    state.genreContents = val;
  }
}

export const actions = {
  setGenreContents: ({ commit }, genreContents) => {
    commit('setGenreContents', genreContents);
  }
}