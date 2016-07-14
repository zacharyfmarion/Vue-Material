import Vue from 'vue'
import Vuex from 'vuex'

// Use the plugin
Vue.use(Vuex)

const state = {
  // When the app starts, count is set to 0
  count: 0
}

const mutations = {
  // A mutation receives the current state as the first argument
  // You can make any modifications you want inside this function
  INCREMENT(state, amount)  {
    state.count += amount 
  }
}

export default new Vuex.Store({
  state,
  mutations
})
