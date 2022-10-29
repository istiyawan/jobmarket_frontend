import Vue from 'vue'
import axios from 'axios'
// import VueAxios from 'vue-axios'
// import qs from 'qs'

// Vue.use(VueAxios, axios)
Vue.use(axios)

const pelamar = {
  namespaced: true,
  state: {
    loading: true,
    pelamar: []
  },
  actions: {
    async loadPelamar ({ commit }) {
      try {
        const res = await axios.get(
          'https://projectapi-tes.000webhostapp.com/pelamar'
        )
        commit('SET_PELAMAR', res.data.data)
      } catch (error) {
        console.log('data -> error', error)
      }
    },
    async deletePelamar ({ commit }, id) {
      try {
        const FormData = require('form-data')
        const dataID = new FormData()
        dataID.append('id', id)
        const res = await axios.post(
          'https://projectapi-tes.000webhostapp.com/pelamar/deletePelamar/',
          dataID
        )
        console.log(res)
        commit('DELETE_PELAMAR', id)
      } catch (error) {
        console.log('delete kategori -> error', error)
      }
    }
  },
  mutations: {
    SET_PELAMAR (state, pelamar) {
      setTimeout(function () {
        state.pelamar = pelamar
        state.loading = false
      }, 3000)
    },
    DELETE_PELAMAR (state, id) {
      const index = state.pelamar.indexOf(id)
      // hapus elemene id dimulai dari index i
      state.pelamar.splice(index, 1)
    }
  }
}

export default pelamar
