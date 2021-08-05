import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quote: {}
  },
  mutations: {
    setQuote (state, payload) {
      state.quote = payload
    }
  },
  actions: {
    getQuote ({ commit }) {
      const url = 'https://animechan.vercel.app/api/random'

      fetch(url)
        .then(response => response.json())
        .then(quote => {
          commit('setQuote', quote)
        })
    }
  },
  getters: {
    quote: state => state.quote
  }
})
