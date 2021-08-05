import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quote: {},
    isLoading: false
  },
  mutations: {
    setQuote (state, payload) {
      state.quote = payload
    },
    setIsLoading (state, payload) {
      state.isLoading = payload
    }
  },
  actions: {
    getQuote ({ commit }) {
      const url = 'https://animechan.vercel.app/api/random'
      commit('setIsLoading', true)
      fetch(url)
        .then(response => response.json())
        .then(quote => {
          commit('setQuote', quote)
          commit('setIsLoading', false)
        })
    }
  },
  getters: {
    quote: state => state.quote,
    isLoading: state => state.isLoading
  }
})
