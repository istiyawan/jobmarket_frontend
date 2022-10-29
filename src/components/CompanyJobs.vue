<template>
  <v-card class="mb-3" >
        <div class="text-center">
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <v-card>
                <v-card-title class="headline">
                    Delete Jobs 
                </v-card-title>
                <v-card-text>
                    Are you sure you want to delete this job post?
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="primary"
                    outlined
                    small 
                    @click="deleteExperience(deleteExperienceId)"
                  >
                    I accept
                  </v-btn>
                  <v-btn
                    color="primary"
                    outline
                    small 
                    @click="dialog = false"
                  >
                    Cancel 
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
      <v-card-title class="ml-3 text-h6">
        Job Posted 
        <v-spacer></v-spacer>
        <div v-if="buttonAbout != false">       
            <div v-if="addBtn == true">
                <v-btn
                  class="mr-3"
                  x-small
                  outlined
                  fab
                  v-on:click="cancelAddExperience"
                  color="error"
                  ><v-icon>mdi-cancel</v-icon></v-btn
                >
            </div>
            <div v-else>
              <v-btn
                class="mr-3"
                x-small
                outlined
                fab
                elevation="0"
                v-on:click="addJobPosted"
                color="primary"
                ><v-icon>mdi-plus</v-icon></v-btn
              >
            </div>
        </div>
      </v-card-title>
    <v-card-text>
      <v-divider></v-divider>
      <!-- <div v&#45;for="ess in getExperiences" :key="ess.ID"> -->
      <v-container class="formPosted">
          <div v-if="formJobPosted == true">
            <v-row>
              <v-col cols="8">
                <v-text-field
                  outlined
                  dense
                  label="Job Title"
                  v-model="add_job_title"
                >
                </v-text-field>
              </v-col>
              </v-row>
              <v-row>
              <v-col cols="8">
                <v-combobox
                  label="Location"
                  outlined
                  dense
                  v-model="add_location"
                  :items="getMCountries"
                  item-text="CountryName"
                  item-value="CountrCode"
                >
                </v-combobox>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="8">
                <v-combobox
                  outlined
                  dense
                  label="Minimal Qualification"
                  v-model="add_min_qualification"
                  :items="getQualification"
                  item-text="Qualification"
                  item-value="Qualification"
                >
                </v-combobox>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="8">
                  <v-combobox
                  outlined
                  dense
                  label="Specialization"
                  v-model="add_specialization"
                  :items="getSpecialization" 
                  item-text="IndustryName"
                  item-value="IndustryId"
                  >
                  </v-combobox>
              </v-col>
            </v-row>
             <v-row>              
                <v-col cols="8">
                <v-combobox
                  outlined
                  dense
                  label="Job Type"
                  v-model="add_job_type"
                  :items="getJobType"
                  item-text="EmploymentTypeName"
                  item-value="EmploymentTypeName"
                >
                </v-combobox>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="8">
                <v-text-field
                  outlined
                  dense
                  label="Sallary"
                  v-model="add_sallary"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                    <v-textarea
                      outlined
                      counter
                      label="Job Description"
                      :rules="rules"
                      :value="value"
                      v-model="add_job_desc"
                    ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                    <v-textarea
                      outlined
                      counter
                      label="Experience Description"
                      :rules="rules"
                      :value="value"
                      v-model="add_experience"
                    ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                    <v-textarea
                      outlined
                      counter
                      label="Add Information"
                      :rules="rules"
                      :value="value"
                      v-model="add_inf"
                    ></v-textarea>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="4">
                <v-menu
                  v-model="menu1"
                  :close-on-content-click="false"
                  max-width="290"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      :value="formatDate"
                      outlined
                      label="From Posted Date"
                      clearable
                      dense
                      v-model="editedItem.fromPostDate"
                      color="primary"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="editedItem.fromPostDate"
                    @change="menu1 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="4">
                <v-menu
                  v-model="menu1"
                  :close-on-content-click="false"
                  max-width="290"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      :value="formatDate"
                      outlined
                      label="To Posted Date"
                      clearable
                      dense
                      v-model="editedItem.toPostDate"
                      color="primary"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="editedItem.toPostDate"
                    @change="menu1 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  outlined
                  dense
                  label="Posting Status"
                  v-model="add_posting_status"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <div>
                  <v-btn
                    class="mr-3"
                    medium 
                    elevation="0"
                    v-on:click="addNewJobPost"
                    color="primary"
                    >Save</v-btn
                  >
                </div>
              </v-col>
            </v-row>
          <v-divider></v-divider>
          </div>

          <!-- {{jobsByCompany}} -->
          <!-- <!&#45;&#45; <div v&#38;#45;for="ess in jobsByCompany" :key="ess.ID"> &#45;&#45;> -->
          <!-- <div v&#45;if="formEditJobPosted == ess.ID"> -->
          <div>
          <div>
          </div>
          <!-- <div v&#45;else> -->
          <div>
            <!-- <v&#45;row> -->
              <template> 
              <v-simple-table>
                  <template>
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Location</th>
                            <th>Applicant</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                <tbody>
                    <tr v-for="ess in jobsByCompany" :key="ess.ID">
                        <td>{{ess.job_title}}</td>
                        <td>{{ess.location}}</td>
                        <td>10</td>
                        <td>{{ess.status}}
                        <td>
                            <div v-if="buttonAbout != false">
                            <v-spacer></v-spacer>
                            <v-btn
                              class="mr-3"
                              x-small
                              fab
                              outlined
                              elevation="0"
                              v-on:click="editExperience(ess.ID)"
                              color="primary"
                              ><v-icon>mdi-pencil</v-icon></v-btn
                            >
                            <v-btn
                              class="mr-3"
                              x-small
                              fab
                              outlined
                              elevation="0"
                              v-on:click="validateDelete(ess.ID, ess.position +' at '+ess.company_name)"
                              color="primary"
                              ><v-icon>mdi-delete</v-icon></v-btn
                            >
                            </div>

                        </td>
                    </tr>
                </tbody>
                  </template>
              </v-simple-table>
              </template>
            <!-- </v&#45;row> -->
          </div>
      </div>
        </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapState } from "vuex";
import moment from "moment";

export default {
  props:['buttonAbout'],
  name: "CompanyJobs",
  data: function() {
    return {
      deleteExperienceData:"",
      deleteExperieceId:"",
      dialog:"",
      addBtn:"",
      formEditJobPosted: "",
      formJobPosted: "",
      add_job_title:"",
      add_location: "",
      add_job_desc: "",
      add_min_qualification: "",
      add_experience: "",
      add_job_type: "",
      add_join_date: moment(String(new Date())).format("YYYY-MM-DD"),
      add_specialization: "",
      // add_position_level: "",
      add_posting_status: "",
      add_inf: "",
      add_sallary: "",
      add_to_date: "",
      country:[],
      editedItem: {
        fromPostDate: "",
        toPostDate: "",
      },
    };
  },
  created(){
    return this.$store.dispatch("StoreCompany/getJobsByCompany")
  },
  computed: {
    // ...mapState({ getJobsCompany: (state) => state.StoreCompany.jobsCompany}),
    ...mapState({ getMCountries: (state) => state.mcountries }),
    ...mapState({ getSpecialization: (state) => state.StoreCompany.industriesCompany }),
    ...mapState({ getJobType: (state) => state.StoreCompany.employmentTypeCompany}),
    ...mapState({ getCurrency:(state)=>state.currency}),
    ...mapState({ getQualification:(state)=>state.StoreCompany.qualificationCompany}),

    formatDate() {
      return this.editedItem.JoinDate
        ? moment(this.editedItem).format("L")
        : "";
    },

    jobsByCompany(){
        return this.$store.state.StoreCompany.jobsCompany
    },

  },

  methods: {
    addJobPosted() {
      this.addBtn=true;
      this.formJobPosted = true;
      this.formEditJobPosted = false;
      // this.editedItem.joinDate = moment(String(new Date())).format("YYYY-MM-DD");
      // this.editedItem.toDate = moment(String(new Date())).format("YYYY-MM-DD");
    },
    cancelAddExperience() {
      this.formJobPosted = false;
      this.addBtn = false;
    },
    editExperience(id) {
      this.formJobPosted = false;
      this.formEditJobPosted = id;
    },
    cancelEditExperience() {
      this.formEditJobPosted = false;
    },

    validateDelete(id, data){
        this.dialog = true;
        this.deleteExperienceId= id;
        this.deleteExperienceData = data;
    },

    addNewJobPost() {
      this.$store
            .dispatch("StoreCompany/addNewJobPost", {
            job_title: this.add_job_title,
            location: this.add_location,// parseInt(localStorage.getItem("userId")),
            company_id:3,  
            job_desc: this.add_job_desc,
            min_qualification: this.add_min_qualification.Qualification,
            experience: this.add_experience,
            job_type: this.add_job_type.IndustryName,
            specialization: this.add_specialization.IndustryName,
            status: this.add_posting_status,
            add_inf:this.add_inf,
            sallary : parseInt(this.add_sallary),
          // join_date: moment(String(this.add_join_date)).format(),
            from_post_date: moment(String(this.editedItem.fromPostDate)).format(),
            to_post_date: moment(String(this.editedItem.toPostDate)).format(),
          // join_date: this.editedItem.joinDate,
            // position: this.add_job_title,
            // sallary: parseInt(this.add_inf),
          // to_date: moment(String(this.add_to_date)).format(),
            // to_date: moment(String(this.editedItem.toDate)).format(),
          // to_date: this.editedItem.toDate,
        })
        .then((response) => {
          this.formJobPosted = false;
          this.addBtn = false;
          return response;
        })
        .catch((error) => {
          error;
          console.log(error)
        });
      
    },
    updateExperience(ess) {
      this.$store
        .dispatch("updateExperience", {
          company_name: ess.company_name,
          idusers: ess.idusers,
          id: ess.ID,
          country:ess.country.CountryName||ess.country,
          currency: ess.currency.CurrCode||ess.currency,
          experience: ess.experience,
          industry: ess.industry.IndustryName||ess.industry,
          join_date: moment(String(ess.join_date)).format(),
          position: ess.position,
          position_level: ess.position_level,
          role: ess.role,
          sallary: parseInt(ess.sallary),
          specialization: ess.specialization,
          to_date: moment(String(ess.to_date)).format(),
          employment_type:ess.employment_type.EmploymentTypeName||ess.employment_type,
        })
        .then((response) => {
          this.formEditJobPosted = false;
          return response;
        })
        .catch((error) => {
          error;
        });
    },
    deleteExperience(id) {
      this.$store
        .dispatch("deleteExperience", { id: id })
        .then((response) => {
         this.dialog=false;
          return response;
        })
        .catch((error) => {
          error;
        });
    },
  },
};
</script>
<style>
.v-row .v-col {
  max-height: 200px;
}
.formPosted .v-text-field {
  height: 40px;
}
.formPosted .v-textarea {
  height: 180px;
}
</style>
