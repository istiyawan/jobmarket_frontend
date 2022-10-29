import Vue from "vue";
import axios from "axios";
// import VueAxios from "vue-axios";
import router from "@/router";
import qs from "qs";

// Vue.use(VueAxios, axios);
Vue.use(axios);

const admins = {
  namespaced: true,
  state: {
    admin: [],
    token: window.localStorage.getItem('token'),
  },
  actions: {
    async authIN({ commit }, admin) {
      try {
        const response = await axios.post(
          "https://projectapi-tes.000webhostapp.com/user/auth",
          qs.stringify(admin),
          {
            "Content-Type": "application/x-www-form-urlencoded",
          }
        );
        // console.log(response.data.token);
        if (response.data.token != null) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("username", response.data.username);
          commit('SET_AUTH', admin)
          commit('SET_TOKEN', response.data.token)
          router.push("/nimda/corporate");
        } else {
          alert("username atau password salah");
        }
      } catch (err) {
        console.log(err);
      }
    },
    async Logout({ commit }) {
      commit('SET_REMOVE')
      router.push("/nimda/auth");
    }
  },
  mutations: {
    SET_AUTH(state, admin) {
      state.admin = admin;
    },
    SET_TOKEN(state, newtoken) {
     state.token = newtoken;
     localStorage.setItem('token', JSON.stringify(newtoken))
    },
    SET_REMOVE(state) {
      state.token =  localStorage.clear();
     }
  },
  getters: {
    settokens: state => {
      return state.token;
    }
  }
};

export default admins;
