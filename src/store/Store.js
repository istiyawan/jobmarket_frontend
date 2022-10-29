import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { mapState } from "vuex";
import loader from "./modules/loader";
import httpClient from "@/utils/httpClient";
import Auth from "./modules/nimda/Auth";
import Pelamar from "./modules/nimda/Pelamar";
import Kategori from "./modules/nimda/Kategori_pekerjaan";
// import createPersistedState from "vuex-persistedstate";
import StoreCompany from "./StoreCompany"

Vue.use(Vuex);


httpClient.defaults.baseURL = "http://localhost:8081";
const API_URL = "http://localhost:8081";
axios.defaults.baseURL = "http://localhost:8081";

// httpClient.defaults.baseURL = "https://jobmarketbackend.herokuapp.com";
// const API_URL = "http://jobmarketbackend.herokuapp.com";
// axios.defaults.baseURL = "https://jobmarketbackend.herokuapp.com";


export const store = new Vuex.Store({
  plugins: [
    // createPersistedState(),
  ],
  state: {
    token: "",
    about: [],
    fname: "",
    role: "",
    pesan: null,
    experiences: [],
    mcountries: [],
    education: [],
    skill: [],
    language: [],
    region:[],
    industries:[],
    employmentType:[],
    currency:[],
    field_of_study:[],
    qualification:[],
    grade:[],
    allJobs:[],
    jobById:[],
    application:[],
    listInterview:[],
    StoreCompany:[],
    resumeFile:"",
  },
  computed: {
    ...mapState("loader", ["loading"]),
  },
  modules: {
    Auth,
    Pelamar,
    Kategori,
    loader,
    StoreCompany,
  },
  getters: {
    loggedIn(state) {
      return state.token;
    },
    userFnameCompany(state) {
      return state.StoreCompany.fnameCompany;
    },
    loggedInCompany(state) {
      return state.StoreCompany.tokenCompany;
    },
    userFname(state) {
      return state.fname;
    },
    dataRole(state) {
      return state.role;
    },
    pesan(state) {
      return state.pesan;
    },
  },
  mutations: {
    submitLogin(state, payload) {
      state.token = payload.token;
      state.mcountries = payload.countries;
      state.role = payload.role;
      state.region = payload.region;
      state.industries = payload.industries;
      state.employmentType = payload.employmentType;
      state.currency = payload.currency;
      state.field_of_study = payload.fieldOfStudy;
      state.qualification = payload.qualification;
      state.grade = payload.grade;
      state.fname = payload.fname;
    },
    destroyToken(state) {
        state.token = null;
        state.fname = '';
        state.role = '';
        state.about= '',
        state.role='',
        state.pesan= null,
        state.experiences= '',
        state.mcountries= '',
        state.education='',
        state.skill='',
        state.language='',
        state.StoreCompany.tokenCompany = null,
        state.StoreCompany.fnameCompany= '',
        state.access='',
        state.accessCompany='',
        state.StoreCompany.applicanByCompany= null

    },

    SET_DATA_PROFILE(state, data) {
      state.resume = data;
      state.fname = data.fname;
      state.role = data.role;
    },
    UPDATE_DATA_ABOUT(state, data) {
      state.about = data;
    },
    SET_DATA_ABOUT(state, data) {
      state.about = data;
    },
    SET_DATA_EXPERIENCES(state, data) {
      state.experiences = data;
    },
    UPDATE_EXPERIENCE(state, data) {
      state.experiences = data;
    },
    SET_DATA_EDUCATION(state, data) {
      state.education = data;
    },
    UPDATE_EDUCATION(state,data){
      state.education = data;
    },
    SET_DATA_DELETE_SKILL(state, id) {
      const index = state.skill.indexOf(id);
      state.skill.splice(index, 1);
      state.pesan = "sukses di hapus";
    },
    SET_MY_SKILLS(state, data) {
      state.skill = data;
    },
    SET_DATA_SKILLS(state, data) {
      state.skill = data;
      state.pesan = "sukses di tambah";
    },
    UPDATE_MYSKILL(state, data) {
      state.skill = data;
    },
    SET_DATA_LANG(state, data) {
      state.language = data;
    },
    SET_DATA_LANGUAGE(state, data) {
      state.language = data;
    },
    SET_DATA_DELETE_LANG(state, id) {
      const index = state.language.indexOf(id);
      state.language.splice(index, 1);
    },
    SET_DATA_ALL_JOBS(state, data){
        state.allJobs = data;
    },
    SET_DATA_JOB_BY_ID(state,data){
        state.jobById = data;
    },
    SET_DATA_APPLICATION(state,data){
        state.application = data;
    },
    SET_DATA_INTERVIEW(state,data){
        state.listInterview = data;
    },
    SET_DATA_FILE_RESUME(state,data){
      state.resumeFile = data;
    },
  },
  actions: {
      destroyToken(context){
        if(context.getters.loggedIn || context.getters.loggedInCompany){
            localStorage.removeItem("accessToken");
            localStorage.removeItem("userId");
            localStorage.removeItem("userIdCompany");
            localStorage.removeItem("accessTokenCompany");
            context.commit("destroyToken");
        }
      },
    register(context, data) {
      return new Promise((resolve, reject) => {
        httpClient
          .post("/users", {
            email: data.email,
            password: data.password,
          })
          .then((data) => {
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    submitLogin(context, data) {
      return new Promise((resolve, reject) => {
        httpClient
          .post("/login", {
            email: data.email,
            password: data.password,
          })
          .then((data) => {
            const token = data.accessToken;
            const userId = data.userId;
            const countries = data.countries;
            const role = data.role;
            const region = data.region;
            const industries = data.industries;
            const employmentType = data.employment_type;
            const currency = data.currency;
            const fieldOfStudy = data.Field_of_study;
            const qualification = data.qualification;
            const grade = data.grade;
            const fname = data.fname;

            localStorage.setItem("accessToken", token);
            localStorage.setItem("userId", userId);
            context.commit("submitLogin", {
              token: token,
              countries: countries,
              role:role,
              region:region,
              industries:industries,
              employmentType:employmentType,
              currency:currency,
              fieldOfStudy:fieldOfStudy,
              qualification:qualification,
              grade:grade,
              fname:fname,
            });
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    getDataProfile({ commit }, data) {
      return new Promise((resolve, reject) => {
        httpClient
          // axios
          .get("users/" + data.userId, {
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + data.token,
            },
          })
          .then((response) => {
            commit("SET_DATA_PROFILE", response);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    async getAbout({ commit }, data) {
      return await new Promise((resolve, reject) => {
        httpClient
          .get("usersAbout/" + data.userId, {
            headers: {
              // Accept: "application/json",
              Authorization: "Bearer " + data.token,
            },
          })
          .then((response) => {
            commit("SET_DATA_ABOUT", response);
            resolve(response);
            // console.log(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    // async getRegion({ commit }, data){
    //     return await new Promise((resolve, reject)=>{
    //         httpClient
    //         .get()
    //         .then()
    //         .catch()
    //     });
    // },
    async updateProfileAbout({ commit }, data) {
      return await new Promise((resolve, reject) => {
        httpClient
          .put("users/" + localStorage.getItem("userId"), data, {
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + this.state.token,
            },
          })
          .then((response) => {
            commit("UPDATE_DATA_ABOUT", response);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    async getExperiences({ commit, state }, data) {
      return await new Promise((resolve, reject) => {
        httpClient
          .get("/experiences/" + data.userId, {
            headers: {
              Authorization: "Bearer " + data.token,
            },
          })
          .then((response) => {
            commit("SET_DATA_EXPERIENCES", response);
            state.pesan = "Data berhasil di update";
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    async updateExperience({ commit }, data) {
      return await new Promise((resolve, reject) => {
        httpClient
          .put("/experiences/" + data.id, data, {
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + this.state.token,
            },
          })

          .then((response) => {
            commit("UPDATE_EXPERIENCE", response);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    async addNewExperience({ commit }, data) {
      return await new Promise((resolve, reject) => {
        httpClient
          // .post("/experiences/" + data.idusers, data, {
          .post("/experiences", data, {
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + this.state.token,
            },
          })

          .then((response) => {
            commit("SET_DATA_EXPERIENCES", response);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    async deleteExperience({ commit }, data) {
      return await new Promise((resolve, reject) => {
        httpClient
          .delete("/experiences/" + data.id, {
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + this.state.token,
            },
          })
          .then((response) => {
            commit("SET_DATA_EXPERIENCES", response);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    // async addNewEducation({ commit, state }, data) {
    //   return await new Promise((resolve, reject) => {
    //     httpClient
    //       .post("/educations", data, {
    //         headers: {
    //           Authorization: "Bearer " + this.state.token
    //         }
    //       })
    //       .then(response => {
    //         commit("SET_DATA_EDUCATION", response);
    //         state.pesan = 'Data edukasi berhasil ditambah'
    //         resolve(response);
    //       })
    //       .catch(error => {
    //         reject(error);
    //       });
    //   });
    // },
    async getEducations({ commit, state }) {
      let id = parseInt(localStorage.getItem("userId"));
      try {
        const response = await axios.get(API_URL + "/educations/" + id, {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + this.state.token,
          },
        });
        if (response.status === 200) {
          commit("SET_DATA_EDUCATION", response.data);
        } else {
          state.pesan = "kesalahan server";
        }
      } catch (err) {
        state.pesan = "kesalahan server";
      }
    },
    // async deleteEducation({ commit, state }, id) {
    //   try {
    //     const res = await axios.delete(API_URL + "/educations/" + id, {
    //       headers: {
    //         Accept: "application/json",
    //         Authorization: "Bearer " + this.state.token,
    //       },
    //     });
    //     if (res.status === 204) {
    //       commit("SET_DATA_DELETE_EDUCATION", id);
    //       state.pesan = "Data berhasil dihapus.";
    //     } else {
    //       alert("gagal");
    //       commit("SET_DATA_DELETE_EDUCATION", id);
    //       state.pesan = "Data gagal dihapus.";
    //     }
    //   } catch (error) {
    //     state.pesan = "kesalahan server.";
    //     console.log(error);
    //   }
    // },
    

    async deleteExperience_({ commit }, data) {
      return await new Promise((resolve, reject) => {
        httpClient
          .delete("/experiences/" + data.id, {
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + this.state.token,
            },
          })
          .then((response) => {
            commit("SET_DATA_EXPERIENCES", response);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    async deleteEducation({ commit }, data) {
        return await new Promise((resolve, reject)=>{
            httpClient
            .delete("/educations/" + data.id, {
                headers: {
                  Accept: "application/json",
                  Authorization: "Bearer " + this.state.token,
                },
            })
            .then((response)=>{
                // commit("SET_DATA_DELETE_EDUCATION", response);
                commit("SET_DATA_EDUCATION", response);
                resolve(response);
            })
            .catch((error)=>{
                reject(error);
                console.log("error cuy :"+error);
            });
        });
      // try {
      //   const res = await axios.delete(API_URL + "/educations/" + id, {
      //     headers: {
      //       Accept: "application/json",
      //       Authorization: "Bearer " + this.state.token,
      //     },
      //   });
      //   if (res.status === 204) {
      //     commit("SET_DATA_DELETE_EDUCATION", id);
      //     state.pesan = "Data berhasil dihapus.";
      //   } else {
      //     alert("gagal");
      //     commit("SET_DATA_DELETE_EDUCATION", id);
      //     state.pesan = "Data gagal dihapus.";
      //   }
      // } catch (error) {
      //   state.pesan = "kesalahan server.";
      //   console.log(error);
      // }
    },
    async updateEducation({ commit }, data) {
      return await new Promise((resolve, reject) => {
        httpClient
            .put("/educations/" + data.ID, data, {
              headers: {
                Accept: "application/json",
                Authorization: "Bearer " + this.state.token,
              },
            })

            .then((response) => {
              commit("UPDATE_EDUCATION", response);
              resolve(response);
            })
            .catch((error) => {
              reject(error);
            });
      });
    },

    async deleteSkill({ commit, state }, id) {
      try {
        const response = await axios.delete(API_URL + "/skills/" + id, {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + this.state.token,
          },
        });
        if (response.status === 204) {
          commit("SET_DATA_DELETE_SKILL", id);
        } else {
          state.pesan = "kesalahan server";
        }
      } catch (error) {
        console.log("delete skill -> error", error);
      }
    },
    async getSkill({ commit }) {
      let id = parseInt(localStorage.getItem("userId"));
      try {
        const res = await axios.get(API_URL + "/skills/" + id, {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + this.state.token,
          },
        });
        if (res.status === 200) {
          commit("SET_MY_SKILLS", res.data);
        } else {
          alert("400");
        }
      } catch (err) {
        console.log(err);
      }
    },
    async createSkills({ commit}, data) {
      return await new Promise((resolve, reject) => {
        httpClient
          .post("/skills", data, {
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + this.state.token,
            },
          })
          .then((response) => {
            commit("SET_MY_SKILLS", response);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    async addNewEducation({ commit }, data) {
      return await new Promise((resolve, reject) => {
        httpClient
          .post("/educations", data, {
            headers: {
              Authorization: "Bearer " + this.state.token,
            },
          })
          .then((response) => {
            commit("SET_DATA_EDUCATION", response);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    async getLang({ commit }) {
      let id = parseInt(localStorage.getItem("userId"));
      try {
        const res = await axios.get(API_URL + "/language/" + id, {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + this.state.token,
          },
        });
        if (res.status === 200) {
          commit("SET_DATA_LANGUAGE", res.data);
        } else {
          console.log("error response");
        }
      } catch (err) {
        console.log(err);
      }
    },
    async createLang({ commit, state }, data) {
      return await new Promise((resolve, reject) => {
        httpClient
          .post("/language", data, {
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + this.state.token,
            },
          })
          .then((response) => {
            commit("SET_DATA_LANG", response);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    async deleteLang({ commit, state }, id) {
      try {
        const response = await axios.delete(API_URL + "/language/" + id, {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + this.state.token,
          },
        });
        if (response.status === 204) {
          commit("SET_DATA_DELETE_LANG", id);
          state.pesan = "sukses hapus data";
        } else {
          state.pesan = "kesalahan server";
        }
      } catch (error) {
        console.log("error", error);
      }
    },

    // async uploadResume({commit},formData) {
    //   try {
    //     let id = parseInt(localStorage.getItem("userId"));
    //       await axios.post(API_URL + "/resume/" + id, formData, {
    //       headers: {
    //         'Content-Type': "multipart/form-data",
    //         Authorization: "Bearer " + this.state.token,
    //       },
    //     });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },


    async uploadResume({ commit }, formData) {
      let id = parseInt(localStorage.getItem("userId"));
      return await new Promise((resolve, reject) => {
        httpClient
          .post("/resume/" + id,formData, {
            headers: {
              'Content-Type': "multipart/form-data",
              Authorization: "Bearer " + this.state.token,
            },
          })
          .then((response) => {
            commit("SET_DATA_FILE_RESUME", response);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    
    async getResumeFile({ commit }, data) {
      let id = parseInt(localStorage.getItem("userId"));
      return await new Promise((resolve, reject) => {
        httpClient
          .get("/listResume/" + id,{
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + this.state.token,
            },
          })
          .then((response) => {
            commit("SET_DATA_FILE_RESUME", response);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    async downloadResume({ commit }, data) {
      let id = parseInt(localStorage.getItem("userId"));
      return await new Promise((resolve, reject) => {
        httpClient
          .get("/resume/" + id,{
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + this.state.token,
            },
            responseType:"blob",
          })
          .then((response) => {
            console.log(response.data);
            var FILE = window.URL.createObjectURL(new Blob([response]));
            var docUrl = document.createElement('a');
            docUrl.href = FILE;
            docUrl.setAttribute('download', '1f9828020f496065bc2acec000f8db34.pdf');
            document.body.appendChild(docUrl);
            docUrl.click();
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    async deleteResume({ commit }, id) {
      return await new Promise((resolve, reject) => {
        httpClient
          .delete("/resume/" + id,{
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + this.state.token,
            },
          })
          .then((response) => {
            commit("SET_DATA_FILE_RESUME", response);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    //-------------------------------------------COMPANY MODULE--------------------------------------------------------//

    async getApplication({ commit }, data) {
      return await new Promise((resolve, reject) => {
        httpClient
          .get("/application",{
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + this.state.token,
            },
          })
          .then((response) => {
            commit("SET_DATA_APPLICATION", response);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    submitSearchLowongan({commit}, data) {
      return new Promise((resolve, reject) => {
        httpClient
          .post("jobSearch", {
            keyword: data.keyword,
            location: data.location,
            specialization: data.specialization,
          })
          .then((response) => {
            commit("SET_DATA_ALL_JOBS", response)
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    getAllJobs({commit}) {
      return new Promise((resolve, reject) => {
        httpClient
          .get("jobs/0" , {
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + this.state.token,
            },
          })
          .then((response) => {
            commit("SET_DATA_ALL_JOBS", response);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    
    getJobById({commit}, data) {
      return new Promise((resolve, reject) => {
        httpClient
          .get("jobsById/" + data.ID, data,{
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + this.state.token,
            },
          })
          .then((response) => {
            commit("SET_DATA_JOB_BY_ID", response);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    
    createApplication({commit}, data) {
      return new Promise((resolve, reject) => {
        httpClient
          .post("application", data,{
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + this.state.token,
            },
          })
          .then((response) => {
            commit("SET_DATA_APPLICATION", response);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    cancelApplication({commit}, data) {
      return new Promise((resolve, reject) => {
        httpClient
          .delete("application/" + data.id_application,{
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + this.state.token,
            },
          })
          .then((response) => {
            commit("SET_DATA_APPLICATION", response);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },


    getInterview({commit}) {
      return new Promise((resolve, reject) => {
        httpClient
          .get("interview" ,{
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + this.state.token,
            },
          })
          .then((response) => {
            commit("SET_DATA_INTERVIEW", response);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    attendInterview({commit}, data){
        return new Promise((resolve, reject)=>{
            httpClient
            .put("interview/" + data.id, data,{
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + this.state.token
                },
            })
            .then((response)=>{
                commit("SET_DATA_INTERVIEW", response);
                resolve(response);
            })
            .catch((error)=>{
                reject(error);
            })

        })
    },
  
    notAttendInterviewInvitation({commit}, data){
    return new Promise((resolve, reject)=>{
      httpClient
      .put("notAttendInterviewInvitation/" + data.id, data,{
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + this.state.token
        },
      })
      .then((response)=>{
          commit("SET_DATA_INTERVIEW", response);
          resolve(response);
      })
      .catch((error)=>{
          reject(error);
      })
    })
  },

  },
});
