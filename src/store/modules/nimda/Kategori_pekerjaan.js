import Vue from 'vue'
import axios from 'axios'
// import VueAxios from 'vue-axios'
import qs from 'qs'

// Vue.use(VueAxios, axios)
Vue.use(axios)

const kategori = {
  namespaced: true,
  state: {
    loading: true,
    kategori: []
  },
  actions: {
    async loadKategoriPekerjaan ({ commit }) {
      try {
        const res = await axios.get(
          'https://projectapi-tes.000webhostapp.com/pelamar/kategori_pekerjaan'
        )
        commit('SET_KATEGORI', res.data.data)
      } catch (error) {
        console.log('data -> error', error)
      }
    },
    async createKategori ({ commit }, kategori) {
      try {
        const res = await axios.post(
          'https://projectapi-tes.000webhostapp.com/pelamar/kategoriPost',
          qs.stringify(kategori)
        )
        console.log(res)
        commit('CREATE_KATEGORI', kategori)
      } catch (error) {
        console.log('submit kategori -> error', error)
      }
    },
    async deleteKategori ({ commit }, id) {
      try {
        const FormData = require('form-data')
        const dataID = new FormData()
        dataID.append('id', id)
        const res = await axios.post(
          'https://projectapi-tes.000webhostapp.com/pelamar/deleteKategori/',
          dataID
        )
        console.log(res)
        commit('DELETE_KATEGORI', id)
      } catch (error) {
        console.log('delete kategori -> error', error)
      }
    }
  },
  mutations: {
    SET_KATEGORI (state, kategori) {
      setTimeout(function () {
        state.kategori = kategori
        state.loading = false
      }, 3000)
    },
    CREATE_KATEGORI (state, kategori) {
      state.kategori.push([kategori])
    },
    DELETE_KATEGORI (state, id) {
      const index = state.kategori.indexOf(id)
      // hapus elemene id dimulai dari index i
      state.kategori.splice(index, 1)
    }
  }
}

export default kategori
