import Vue from "vue"
import Vuex from "vuex"
import httpClient from "@/utils/httpClient";

Vue.use(Vuex)

const StoreCompany = {
    namespaced:true,
    state: {
        tokenCompany: "",
        mcountriesCompany: "",
        roleCompany: "",
        regionCompany: "",
        industriesCompany: "",
        employmentTypeCompany: "",
        currencyCompany: "",
        field_of_studyCompany: "",
        qualification: "",
        gradeCompany: "",
        accessCompany:[],
        jobsCompany:[],
        applicanByCompany:[],
        interviewByCompany:[],
        fnameCompany:"",
        companyProfile:[],
    },
    mutations: {
         submitLoginCompany(state, payload) {
             state.tokenCompany= payload.tokenCompany;
             state.mcountriesCompany = payload.countriesCompany;
             state.roleCompany = payload.roleCompany;
             state.regionCompany = payload.regionCompany;
             state.industriesCompany = payload.industriesCompany;
             state.employmentTypeCompany = payload.employmentTypeCompany;
             state.currencyCompany = payload.currencyCompany;
             state.field_of_studCompanyy = payload.fieldOfStudyCompany;
             state.qualificationCompany= payload.qualificationCompany;
             state.gradeCompany = payload.gradeCompany;
             state.accessCompany = payload.accessCompany

         },
        SET_DATA_JOB_COMPANY(state, payload){
            state.jobsCompany = payload 
        },
        SET_DATA_APPLICAN_BY_COMPANY(state,payload){
            state.applicanByCompany = payload
        },
        SET_DATA_INTERVIEW_BY_COMPANY(state, payload){
            state.interviewByCompany = payload
        },
        SET_DATA_PROFILE_USER_COMPANY(state, payload){
            state.fnameCompany= payload.fname
        },
        SET_DATA_COMPANY_PROFILE(state, payload){
            state.companyProfile = payload
        },
     },
    actions: {
        registerCompany(context, data) {
            return new Promise((resolve, reject) => {
                httpClient
                    .post("/userCompany", {
                        email: data.email,
                        password: data.password,
                        username: data.username,
                        company_name: data.company_name,
                        phone1: data.phone1,
                    })
                    .then((data) => {
                        resolve(data);

                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        async CompanyLogin(context,data){
            return await new Promise((resolve, reject)=>{
                httpClient
                    .post("/loginCompany",{
                        email:data.email,
                        password:data.password
                    })
                    .then((data) => {
                        const tokenCompany = data.accessToken;
                        const userIdCompany = data.userId;
                        const countriesCompany = data.countries;
                        const roleCompany = data.role;
                        const regionCompany = data.region;
                        const industriesCompany = data.industries;
                        const employmentTypeCompany = data.employment_type;
                        const currencyCompany = data.currency;
                        const fieldOfStudyCompany= data.Field_of_study;
                        const qualificationCompany = data.qualification;
                        const gradeCompany = data.grade;
                        const access = data.access;

                        localStorage.setItem("accessTokenCompany", tokenCompany);
                        localStorage.setItem("userIdCompany", userIdCompany);
                        context.commit("submitLoginCompany", {
                            tokenCompany: tokenCompany,
                            countriesCompany: countriesCompany,
                            roleCompany:roleCompany,
                            regionCompany:regionCompany,
                            industriesCompany:industriesCompany,
                            employmentTypeCompany:employmentTypeCompany,
                            currencyCompany:currencyCompany,
                            fieldOfStudyCompany:fieldOfStudyCompany,
                            qualificationCompany:qualificationCompany,
                            gradeCompany:gradeCompany,
                            accessCompany:access,

                        });
                        resolve(data);
                        console.log("stateCompany: "  + this.StoreCompany.stateCompany)
                    })
                    .catch((error) => {
                        reject(error);
                    });
            })
        },
        async addNewJobPost({ commit }, data) {
          return await new Promise((resolve, reject) => {
            httpClient
              .post("/jobs", data, {
                headers: {
                  Accept: "application/json",
                  Authorization: "Bearer " + this.state.StoreCompany.tokenCompany,
                },
              })

              .then((response) => {
                commit("SET_DATA_COMPANY", response);
                resolve(response);
              })
              .catch((error) => {
                reject(error);
              });
          });
        },
        async getJobsByCompany({ commit }) {
          return await new Promise((resolve, reject) => {
            httpClient
              .get("/jobsByCompany",  {
                headers: {
                  Accept: "application/json",
                  Authorization: "Bearer " + this.state.StoreCompany.tokenCompany,
                },
              })

              .then((response) => {
                commit("SET_DATA_JOB_COMPANY", response);
                resolve(response);
              })
              .catch((error) => {
                reject(error);
              });
          });
        },
        async getApplicanByCompany({commit}){
            return await new Promise((resolve, reject)=>{
                httpClient
                .get("/applicanByCompany",{
                    headers: {
                      Accept: "application/json",
                      Authorization: "Bearer " + this.state.StoreCompany.tokenCompany,
                    },
                })
                .then((response)=>{
                    commit("SET_DATA_APPLICAN_BY_COMPANY", response);
                    resolve(response);
                })
                .catch((error)=>{reject(error)})
            });
        },

        async updateApplican({commit}, data){
            return await new Promise((resolve, reject) => {
                httpClient
                .put("/applican",data,{
                    headers:{
                      Accept: "application/json",
                      Authorization: "Bearer " + this.state.StoreCompany.tokenCompany,
                    },
                })
                .then((response)=>{
                    commit("SET_DATA_APPLICAN_BY_COMPANY", response);
                    resolve(response);
                })
                .catch((error)=>{ reject(error)})
            })
        },

        async getInterviewByCompany({commit}){
            return await new Promise((resolve, reject) => {
                httpClient
                .get("/interviewInvitation",{
                    headers:{
                      Accept: "application/json",
                      Authorization: "Bearer " + this.state.StoreCompany.tokenCompany,
                    },
                })
                .then((response)=>{
                    commit("SET_DATA_INTERVIEW_BY_COMPANY", response);
                    resolve(response);
                })
                .catch((error)=>{ reject(error)})
            })
        },

        async updateCompanyProfile({ commit }, data){
          return await new Promise((resolve, reject)=>{
            httpClient
            .put("/companyProfile", data,  {
              headers: {
                Accept: "application/json",
                Authorization: "Bearer "+ this.state.StoreCompany.tokenCompany
              }
            })
            .then((response)=>{
              commit("SET_DATA_COMPANY_PROFILE", response);
              resolve(response);
            })
            .catch((error)=>{
              reject(error);
            })
          })
        },

        getDataProfileUserCompany({ commit }) {
          return new Promise((resolve, reject) => {
            httpClient
              .get("/userCompany",{
                headers: {
                  Accept: "application/json",
                  Authorization: "Bearer " + this.state.StoreCompany.tokenCompany,
                },
              })
              .then((response) => {
                commit("SET_DATA_PROFILE_USER_COMPANY", response);
                resolve(response);
              })
              .catch((error) => {
                reject(error);
              });
          });
        },
    },
}

export default StoreCompany
