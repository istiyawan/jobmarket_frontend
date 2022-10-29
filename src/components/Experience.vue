<template>
  <v-card class="mb-3" outlined>
        <div class="text-center">
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <v-card>
                <v-card-title class="headline">
                    Delete Experience 
                </v-card-title>
                <v-card-text>
                    Are you sure you want to delete this Experience ?
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="error"
                    outlined
                    small 
                    @click="dialog = false"
                  >
                    Cancel 
                  </v-btn>
                  <v-btn
                    color="primary"
                    outlined
                    small 
                    @click="deleteExperience(deleteExperienceId)"
                  >
                    Ok 
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
      <v-card-title class="ml-3 text-h6">
        Experience
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
                v-on:click="addExperience"
                color="primary"
                ><v-icon>mdi-plus</v-icon></v-btn
              >
            </div>
        </div>
      </v-card-title>
    <v-card-text>
        <v-container class="formExperience">
          <div v-if="formAddExperience == true">
            <v-row>
              <v-col cols="6">
                <v-text-field
                  outlined
                  dense
                  label="Position Title"
                  v-model="add_position_title"
                >
                </v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  outlined
                  dense
                  label="Company Name"
                  v-model="add_company_name"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-combobox
                  label="Country"
                  outlined
                  dense
                  v-model="add_country"
                  :items="getMCountries"
                  item-text="CountryName"
                  item-value="CountrCode"
                >
                </v-combobox>
              </v-col>
              <v-col cols="6">
                  <v-combobox
                  outlined
                  dense
                  label="Industry"
                  v-model="add_industry"
                  :items="getIndustry" 
                  item-text="IndustryName"
                  item-value="IndustryId"
                  >
                  </v-combobox>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-combobox
                  outlined
                  dense
                  label="Employment Type"
                  v-model="add_employmentType"
                  :items="getEmploymentType"
                  item-text="EmploymentTypeName"
                  item-value="EmploymentTypeName"
                >
                </v-combobox>
              </v-col>
              <v-col cols="2">
                <v-combobox
                  outlined
                  dense
                  label="Currency"
                  v-model="add_currency"
                  :items="getCurrency"
                  item-text="CurrCode"
                  item-value="CurrCode"
                >
                </v-combobox>
              </v-col>
              <v-col cols="4">
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
              <v-col cols="3">
                <v-menu
                  v-model="menu1"
                  :close-on-content-click="false"
                  max-width="290"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      :value="formatDate"
                      outlined
                      label="Join Date"
                      clearable
                      dense
                      v-model="editedItem.joinDate"
                      color="primary"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="editedItem.joinDate"
                    @change="menu1 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="3">
                <v-menu
                  v-model="menu1"
                  :close-on-content-click="false"
                  max-width="290"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      :value="formatDate"
                      outlined
                      label="To Date"
                      clearable
                      dense
                      v-model="editedItem.toDate"
                      color="primary"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="editedItem.toDate"
                    @change="menu1 = false"
                  ></v-date-picker>
                </v-menu>
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
              <v-col cols="6">
                <div class="mb-6">
                  <v-btn
                    class="mr-3"
                    small
                    elevation="0"
                    v-on:click="addNewExperience"
                    color="primary"
                    >Save</v-btn
                  >
                </div>
              </v-col>
            </v-row>
            <v-divider></v-divider>
          </div>
      <div v-for="ess in getExperiences" :key="ess.ID">
          <div v-if="formEditExperience == ess.ID">
            <v-row>
              <v-col cols="6">
                <v-text-field
                  dense
                  outlined
                  label="Position Title"
                  v-model="ess.position"
                >
                </v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  dense
                  outlined
                  label="Company Name"
                  v-model="ess.company_name"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-combobox
                  label="Country"
                  outlined
                  dense
                  v-model="ess.country"
                  :items="getMCountries"
                  item-text="CountryName"
                  item-value="CountryCode"
                >
                </v-combobox>
              </v-col>
              <v-col cols="6">
                  <v-combobox
                  outlined
                  dense
                  label="Industry"
                  v-model="ess.industry"
                  :items="getIndustry" 
                  item-text="IndustryName"
                  item-value="IndustryId"
                  >
                  </v-combobox>
              </v-col>
              <v-col cols="6">
                <v-combobox
                  outlined
                  dense
                  label="Employment Type"
                  v-model="ess.employment_type"
                  :items="getEmploymentType"
                  item-text="EmploymentTypeName"
                  item-value="EmploymentTypeId"
                >
                </v-combobox>
              </v-col>
              <v-col cols="2">
                <v-combobox
                  outlined
                  dense
                  label="Currency"
                  v-model="ess.currency"
                  :items="getCurrency"
                  item-text="CurrCode"
                  item-value="CurrCode"
                >
                </v-combobox>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  outlined
                  dense
                  label="Sallary"
                  v-model="ess.sallary"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                <v-menu
                  v-model="menu1"
                  :close-on-content-click="false"
                  max-width="290"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      :value="ess.join_date | formatDate"
                      @input="value=>ess.join_date =value"
                      outlined
                      label="Join Date"
                      clearable
                      dense
                      color="primary"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                     @input="value=>ess.join_date =value"
                    @change="menu1 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="3">
                <v-menu
                  v-model="menu1"
                  :close-on-content-click="false"
                  max-width="290"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      :value="ess.to_date | formatDate"
                        @input="value=>ess.to_date=value"
                      outlined
                      label="To Date"
                      clearable
                      dense
                      color="primary"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                     @input="value=>ess.to_date=value"
                    @change="menu1 = false"
                  ></v-date-picker>
                </v-menu>
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
                      v-model="ess.experience"
                    ></v-textarea>
              </v-col>
            </v-row>
            <v-btn
              class="mr-3"
              small
              elevation="0"
              v-on:click="cancelEditExperience"
              color="error"
              >Cancel</v-btn
            >
            <v-btn
              class="mr-3"
              small
              elevation="0"
              v-on:click="updateExperience(ess)"
              color="primary"
              >Update</v-btn
            >
          </div>
          <div v-else>
             <v-divider></v-divider>
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
              <v-col cols="2">
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
        </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapState } from "vuex";
import moment from "moment";

export default {
  props:['buttonAbout'],
  name: "Experience",
  data: function() {
    return {
      deleteExperienceData:"",
      deleteExperieceId:"",
      dialog:"",
      addBtn:"",
      formEditExperience: "",
      formAddExperience: "",
      add_position_title:"",
      add_company_name: "",
      add_country: "",
      add_currency: "",
      add_experience: "",
      add_industry: "",
      add_join_date: moment(String(new Date())).format("YYYY-MM-DD"),
      add_position: "",
      add_position_level: "",
      add_role: "",
      add_sallary: "",
      add_employmentType: "",
      add_to_date: "",
      country:[],
      editedItem: {
        joinDate: "",
        toDate: "",
      },
    };
  },
  computed: {
    ...mapState({ getExperiences: (state) => state.experiences }),
    ...mapState({ getMCountries: (state) => state.mcountries }),
    ...mapState({ getIndustry: (state) => state.industries }),
    ...mapState({ getEmploymentType: (state) => state.employmentType}),
    ...mapState({ getCurrency:(state)=>state.currency}),
      

    formatDate() {
      return this.editedItem.JoinDate
        ? moment(this.editedItem).format("L")
        : "";
    },

  },

  methods: {
    addExperience() {
      this.addBtn=true;
      this.formAddExperience = true;
      this.formEditExperience = false;
      this.editedItem.joinDate = moment(String(new Date())).format("YYYY-MM-DD");
      this.editedItem.toDate = moment(String(new Date())).format("YYYY-MM-DD");
    },
    cancelAddExperience() {
      this.formAddExperience = false;
      this.addBtn = false;
    },
    editExperience(id) {
      this.formAddExperience = false;
      this.formEditExperience = id;
    },
    cancelEditExperience() {
      this.formEditExperience = false;
    },

    validateDelete(id, data){
        this.dialog = true;
        this.deleteExperienceId= id;
        this.deleteExperienceData = data;
    },

    addNewExperience() {
      this.$store
        .dispatch("addNewExperience", {
          company_name: this.add_company_name,
          idusers: parseInt(localStorage.getItem("userId")),
          country: this.add_country.CountryName,
          currency: this.add_currency.CurrCode,
          experience: this.add_experience,
          industry: this.add_industry.IndustryName,
          join_date: moment(String(this.editedItem.joinDate)).format(),
          position: this.add_position_title,
          position_level: this.add_position_level,
          role: this.add_role,
          sallary: parseInt(this.add_sallary),
          employment_type: this.add_employmentType.EmploymentTypeName,
          to_date: moment(String(this.editedItem.toDate)).format(),
        })
        .then((response) => {
          this.formAddExperience = false;
          this.addBtn = false;
          this.add_position_title = "";
          this.add_company_name = "";
          this.add_industry = "";
          this.add_country = "";
          this.add_employmentType = "";
          this.add_currency = "";
          this.add_sallary = "";
          this.add_experience = "";
          return response;
        })
        .catch((error) => {
          error;
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
          this.formEditExperience = false;
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
.formExperience .v-text-field {
  height: 40px;
}
.formExperience .v-textarea {
  height: 180px;
}
</style>
