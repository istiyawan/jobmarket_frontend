<template>
  <v-card class="mb-3" outlined>
    <v-container>
      <v-card-title class="text-h6">
        Experience
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text>
      <v-divider></v-divider>
      <div v-for="ess in getExperiences" :key="ess.ID">
          <div>
            <v-row>
              <v-col cols="10">
                <div class="text-h6 text-capitalize">
                  {{
                      ess.position +
                        " at " +
                        ess.company_name +
                        " | " +
                        ess.country
                    }}
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                Position Title
              </v-col>
              <v-col cols="7">
                : {{ ess.position}}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                Company Name 
              </v-col>
              <v-col cols="7">
                : {{ ess.company_name}}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                Employment Type 
              </v-col>
              <v-col cols="7">
                : {{ ess.employment_type}}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                Country 
              </v-col>
              <v-col cols="7">
                : {{ ess.country}}
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="3">
                Sallary
              </v-col>
              <v-col cols="7">
                : {{
                  ess.currency + ". " + ess.sallary.toLocaleString()
                }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                From
              </v-col>
              <v-col cols="7">
                : {{ ess.join_date  | formatDate}} to {{ess.to_date | formatDate }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                Experience Detail
              </v-col>
              <v-col cols="7">
                : {{ ess.experience }}
              </v-col>
            </v-row>
          </div>
      </div>
      </v-card-text>
    </v-container>
  </v-card>
</template>
<script>
import { mapState } from "vuex";
import moment from "moment";

export default {
  props:['buttonAbout','iduser'],
  name: "ApplicanExperience",
  data: function() {
    return {
  //     deleteExperienceData:"",
  //     deleteExperieceId:"",
  //     dialog:"",
  //     addBtn:"",
  //     formEditExperience: "",
  //     formAddExperience: "",
  //     add_position_title:"",
  //     add_company_name: "",
  //     add_country: "",
  //     add_currency: "",
  //     add_experience: "",
  //     add_industry: "",
  //     add_join_date: moment(String(new Date())).format("YYYY-MM-DD"),
  //     add_position: "",
  //     add_position_level: "",
  //     add_role: "",
  //     add_sallary: "",
  //     add_employmentType: "",
  //     add_to_date: "",
  //     country:[],
  //     editedItem: {
  //       joinDate: "",
  //       toDate: "",
  //     },
      tokenCompany: localStorage.getItem("accessTokenCompany"),
    };
  },
    created(){
        return this.$store.dispatch("getExperiences", {
            userId:this.iduser,
            token:this.tokenCompany,
        })
    },
  computed: {
    ...mapState({ getExperiences: (state) => state.experiences }),
    // ...mapState({ getMCountries: (state) => state.mcountries }),
    // ...mapState({ getIndustry: (state) => state.industries }),
    // ...mapState({ getEmploymentType: (state) => state.employmentType}),
    // ...mapState({ getCurrency:(state)=>state.currency}),
      

    formatDate() {
      return this.editedItem.JoinDate
        ? moment(this.editedItem).format("L")
        : "";
    },

  },

  // methods: {
  //   addExperience() {
  //     this.addBtn=true;
  //     this.formAddExperience = true;
  //     this.formEditExperience = false;
  //     this.editedItem.joinDate = moment(String(new Date())).format("YYYY-MM-DD");
  //     this.editedItem.toDate = moment(String(new Date())).format("YYYY-MM-DD");
  //   },
  //   cancelAddExperience() {
  //     this.formAddExperience = false;
  //     this.addBtn = false;
  //   },
  //   editExperience(id) {
  //     this.formAddExperience = false;
  //     this.formEditExperience = id;
  //   },
  //   cancelEditExperience() {
  //     this.formEditExperience = false;
  //   },
  //
  //   validateDelete(id, data){
  //       this.dialog = true;
  //       this.deleteExperienceId= id;
  //       this.deleteExperienceData = data;
  //   },
  //
  //   addNewExperience() {
  //     this.$store
  //       .dispatch("addNewExperience", {
  //         company_name: this.add_company_name,
  //         idusers: parseInt(localStorage.getItem("userId")),
  //         country: this.add_country.CountryName,
  //         currency: this.add_currency.CurrCode,
  //         experience: this.add_experience,
  //         industry: this.add_industry.IndustryName,
  //         // join_date: moment(String(this.add_join_date)).format(),
  //         join_date: moment(String(this.editedItem.joinDate)).format(),
  //         // join_date: this.editedItem.joinDate,
  //         position: this.add_position_title,
  //         position_level: this.add_position_level,
  //         role: this.add_role,
  //         sallary: parseInt(this.add_sallary),
  //         employment_type: this.add_employmentType.EmploymentTypeName,
  //         // to_date: moment(String(this.add_to_date)).format(),
  //         to_date: moment(String(this.editedItem.toDate)).format(),
  //         // to_date: this.editedItem.toDate,
  //       })
  //       .then((response) => {
  //         this.formAddExperience = false;
  //         this.addBtn = false;
  //         return response;
  //       })
  //       .catch((error) => {
  //         error;
  //         console.log(error)
  //       });
  //     
  //   },
  //   updateExperience(ess) {
  //     this.$store
  //       .dispatch("updateExperience", {
  //         company_name: ess.company_name,
  //         idusers: ess.idusers,
  //         id: ess.ID,
  //         country:ess.country.CountryName||ess.country,
  //         currency: ess.currency.CurrCode||ess.currency,
  //         experience: ess.experience,
  //         industry: ess.industry.IndustryName||ess.industry,
  //         join_date: moment(String(ess.join_date)).format(),
  //         position: ess.position,
  //         position_level: ess.position_level,
  //         role: ess.role,
  //         sallary: parseInt(ess.sallary),
  //         specialization: ess.specialization,
  //         to_date: moment(String(ess.to_date)).format(),
  //         employment_type:ess.employment_type.EmploymentTypeName||ess.employment_type,
  //       })
  //       .then((response) => {
  //         this.formEditExperience = false;
  //         return response;
  //       })
  //       .catch((error) => {
  //         error;
  //       });
  //   },
  //   deleteExperience(id) {
  //     this.$store
  //       .dispatch("deleteExperience", { id: id })
  //       .then((response) => {
  //        this.dialog=false;
  //         return response;
  //       })
  //       .catch((error) => {
  //         error;
  //       });
  //   },
  // },
};
</script>
