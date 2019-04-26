import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coordinats: [
      {
        title: 'Ostgoh',
        id: 1,
        lat: 50.331223,
        lng: 26.519238
      },
      {
        title: 'Kiev',
        id: 2,
        lat: 50.450762,
        lng: 30.522661
      },
      {
        title: 'Rivne',
        id: 3,
        lat: 50.619838,
        lng: 26.240490
      }
        
    ]
  },
  getters:{
    getMap: state => {
      return state.coordinats
    }
  },
  mutations: {

  },
  actions: {

  }
})
