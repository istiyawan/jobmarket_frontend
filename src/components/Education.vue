<template>
  <v-card class="mb-3" outlined elevation="0">
        <div class="text-center">
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <v-card>
                <v-card-title class="headline">
                    Delete Education
                </v-card-title>
                <v-card-text>
                    Are you sure you want to delete this Education ?
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
                    @click="deleteEducation(deleteEducationId)"
                  >
                    Ok 
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
      <v-card-title class="ml-3 text-h6">
        Education
        <v-spacer></v-spacer>
        <div v-if="buttonAbout != false">
            <div v-if="addBtn == true">
                <v-btn
                    class="mr-3"
                    x-small
                    outlined
                    fab
                    elevation="0"
                    v-on:click="cancelAddEducation"
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
                    v-on:click="addEducation"
                    color="primary"
                    ><v-icon>mdi-plus</v-icon></v-btn
                  >
            </div>
        </div>
      </v-card-title>
    <v-card-text>
      <v-divider></v-divider>
      <div>
        <v-container class="formEducation">
          <div v-if="formAddEducation == true">
            <v-form @keyup.enter="saveEducation" ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="6">
                <v-combobox
                    label="Field Of Study"
                    outlined
                    dense
                    v-model="add_field_study"
                    :items="getFieldOfStudy"
                    item-text="FieldOfStudyName"
                    item-value="FieldOfStudyName"
                    :rules="notEmptyRules"
                >
                </v-combobox>
              </v-col>
              <v-col cols="6">
                <v-text-field outlined dense v-model="add_major" label="Major">
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-combobox
                    label="Grade"
                    outlined
                    dense
                    v-model="add_grade"
                    :items="getGrade"
                    item-text="Grade"
                    item-value="Grade"
                    :rules="notEmptyRules"
                >
                </v-combobox>
              </v-col>
              <v-col cols="6">
                <v-combobox
                    label="Qualification"
                    outlined
                    dense
                    v-model="add_qualification"
                    :items="getQualification"
                    item-text="Qualification"
                    item-value="Qualification"
                    :rules="notEmptyRules"
                >
                </v-combobox>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  outlined
                  dense
                  v-model="add_university"
                  label="University"
                >
                </v-text-field>
              </v-col>
              <v-col cols="6">
                <v-combobox
                    label="Location"
                    outlined
                    dense
                    v-model="add_location"
                    :items="getMCountries"
                    item-text="CountryName"
                    item-value="CountrCode"
                    :rules="notEmptyRules"
                >
                </v-combobox>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                <v-select
                    :items="add_graduate_month"
                    label="Graduate Month"
                    dense
                    outlined
                    v-model="graduate_month"
                >
                </v-select>
              </v-col>
              <v-col cols="3">
                <v-select
                    :items="add_graduate_year"
                    label="Graduate Year"
                    dense
                    outlined
                    v-model="graduate_year"
                    :rules="notEmptyRules"
                >
                </v-select>
              </v-col>
             </v-row>
             <v-row>
              <v-col cols="12">
                <v-textarea
                    outlined
                    counter
                    label="Information"
                    v-model="add_info"
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
                    v-on:click="cancelAddEducation"
                    color="error"
                    >cancel</v-btn
                  >
                  <v-btn
                    class="mr-3"
                    small
                    elevation="0"
                    v-on:click="saveEducation"
                    color="primary"
                    >Save</v-btn
                  >
                </div>
              </v-col>
            </v-row>
            </v-form>
          </div>
<!--          <div v-else>-->
            <div v-for="edu in getEducations" :key="edu.id">
              <div v-if="formEditEducation == edu.ID">
                <v-form @keyup.enter="updateEducation" ref="form" v-model="valid" lazy-validation>
                  <v-row>
                    <v-col cols="6">
                      <v-combobox
                          label="Field Of Study"
                          outlined
                          dense
                          v-model="edu.field_study"
                          :items="getFieldOfStudy"
                          item-text="FieldOfStudyName"
                          item-value="FieldOfStudyName"
                          :rules="notEmptyRules"
                      >
                      </v-combobox>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field outlined dense v-model="edu.major" label="Major">
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <v-combobox
                          label="Grade"
                          outlined
                          dense
                          v-model="edu.grade"
                          :items="getGrade"
                          item-text="Grade"
                          item-value="Grade"
                          :rules="notEmptyRules"
                      >
                      </v-combobox>
                    </v-col>
                    <v-col cols="6">
                      <v-combobox
                          label="Qualification"
                          outlined
                          dense
                          v-model="edu.qualification"
                          :items="getQualification"
                          item-text="Qualification"
                          item-value="Qualification"
                          :rules="notEmptyRules"
                      >
                      </v-combobox>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <v-text-field
                          outlined
                          dense
                          v-model="edu.univercity"
                          label="University"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-combobox
                          label="Location"
                          outlined
                          dense
                          v-model="edu.location"
                          :items="getMCountries"
                          item-text="CountryName"
                          item-value="CountrCode"
                          :rules="notEmptyRules"
                      >
                      </v-combobox>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="3">
                      <v-select
                          :items="add_graduate_month"
                          label="Graduate Month"
                          dense
                          outlined
                          v-model="edu.graduate_month"
                      >
                      </v-select>
                    </v-col>
                    <v-col cols="3">
                      <v-select
                          :items="add_graduate_year"
                          label="Graduate Year"
                          dense
                          outlined
                          v-model="edu.graduate_year"
                          :rules="notEmptyRules"
                      >
                      </v-select>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-textarea
                          outlined
                          counter
                          label="Information"
                          v-model="edu.add_info"
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
                            v-on:click="cancelUpdateEducation"
                            color="error"
                        >cancel</v-btn
                        >
                        <v-btn
                            class="mr-3"
                            small
                            elevation="0"
                            v-on:click="updateEducation(edu)"
                            color="primary"
                        >Update</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-form>
              </div>
              <div v-else>
                <v-row>
                  <v-col cols="10">
                    <div class="text-h6 text-capitalize">
                      {{
                        edu.field_study+
                        " at " +
                        edu.univercity+
                        " | " +
                        edu.location
                      }}
                    </div>
                  </v-col>
                        <v-col cols="3">
                        Field Of Study
                        </v-col>
                        <v-col cols="7">
                        : {{ edu.field_study }}
                        </v-col>
                        <v-col cols="2">
                        <v-spacer></v-spacer>
                        <div v-if="buttonAbout != false">
                        <v-btn
                        class="mr-3"
                        x-small
                        fab
                        outlined
                        elevation="0"
                        v-on:click="editEducation(edu.ID)"
                        color="primary"
                        ><v-icon>mdi-pencil</v-icon></v-btn
                        >
                        <v-btn
                        class="mr-3"
                        x-small
                        fab
                        outlined
                        elevation="0"
                        v-on:click="validateDelete(edu.ID, edu.field_study +' at ' + edu.univercity)"
                        color="primary"
                        ><v-icon>mdi-delete</v-icon></v-btn
                        >
                        </div>
                        </v-col>
                        </v-row>
                <v-row>
                        <v-col cols="3">
                        Major
                        </v-col>
                        <v-col cols="7">
                        : {{ edu.major }}
                        </v-col>
                        </v-row>
                <v-row>
                        <v-col cols="3">
                        Grade
                        </v-col>
                        <v-col cols="7">
                        : {{ edu.grade }}
                        </v-col>
                        </v-row>
                <v-row>
                        <v-col cols="3">
                        Qualification
                        </v-col>
                        <v-col cols="7">
                        : {{ edu.qualification }}
                        </v-col>
                        </v-row>
                <v-row>
                        <v-col cols="3">
                        Univercity
                        </v-col>
                        <v-col cols="7">
                        : {{ edu.univercity }}
                        </v-col>
                        </v-row>
                <v-row>
                        <v-col cols="3">
                        Location
                        </v-col>
                        <v-col cols="7">
                        : {{ edu.location }}
                        </v-col>
                        </v-row>
                <v-row>
                        <v-col cols="3">
                        Graduated
                        </v-col>
                        <v-col cols="7">
                        : {{ edu.graduate_month + " " + edu.graduate_year }}
                        </v-col>
                        </v-row>
                <v-row>
                        <v-col cols="3">
                        Information
                        </v-col>
                        <v-col cols="7">
                        : {{ edu.add_info }}
                        </v-col>
                        </v-row>
              </div>
              <v-divider></v-divider>
            </div>
        </v-container>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapState } from "vuex";
export default {
  props:['buttonAbout'],
  name: "Education",
  data: function() {
    return {
      valid:true,
      elementAlert: false,
      forms: [
        { model: "add_university2", label: "university" },
        { model: "add_graduate_year2", label: "Graduated year" },
      ],
      add_university2: "",
      add_graduate_year2: "",
      formAddEducation: "",
      edu: "",
      add_university: "",
      addBtn:"",
      add_graduate_year: this.startYear(),
      graduate_year:"",
      add_graduate_month:['Januari','February','March','April', 'May', ''],
      graduate_month:null,
      add_qualification: null,
      Qualification:"",
      add_location:null,
      CountryName:"",
      FieldOfStudyName:"",
      add_field_study:null,
      add_major: "",
      add_grade: null,
      Grade:"",
      add_info: "",
      deleteEducationData:"",
      dialog:"",
      add_country: "",
      notEmptyRules:[(v)=> !! v || "Field Of Required"],
      formEditEducation:"",
  };
  },
  created(){
    this.$store.dispatch("getEducations")
  },
  computed: {
    ...mapState({ getEducations: (state) => state.education}),
    ...mapState({ getFieldOfStudy:(state) =>state.field_of_study}),
    ...mapState({ getMCountries: (state) => state.mcountries }),
    ...mapState({ getQualification: (state)=> state.qualification}),
    ...mapState({ getGrade: (state)=>state.grade}),
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    saveEducation() {
      if (this.$refs.form.validate()) {
        this.addNewEducation();
      } else {
        event.preventDefault();
      }
    },
    startYear(){
      var currentYear = new Date().getFullYear()+5, years = [],
          startYear = startYear || 1980;
      while ( startYear <= currentYear){
        years.push(startYear++);
      }
      return years;
    },
    addEducation() {
      this.formAddEducation = true;
      this.formEditEducation = false;
      this.addBtn = true;
    },
    addNewEducation() {
      this.$store
        .dispatch("addNewEducation", {
          univercity: this.add_university,
          graduate_year: this.graduate_year,
          graduate_month: this.graduate_month,
          qualification: this.add_qualification.Qualification,
          location: this.add_location.CountryName,
          field_study: this.add_field_study.FieldOfStudyName,
          major: this.add_major,
          grade: this.add_grade.Grade,
          add_info: this.add_info,
          idusers: parseInt(localStorage.getItem("userId")),
        })
        .then((response) => {
          this.formAddEducation = false;
          this.addBtn=false;
          // this.$store.dispatch("getEducations")
          return response;
        })
        .catch((error) => {
          error;
        });
    },
    cancelAddEducation(){
        this.addBtn=false;
        this.editBtn=false;
        this.formAddEducation=false;
    },
    validateDelete(id, data){
        this.dialog = true;
        this.deleteEducationId= id;
        this.deleteEducationData= data;
    },
    deleteEducation(id) {
      this.$store
        .dispatch("deleteEducation", {id:id})
        .then((response) => {
          this.dialog = false;
          return response;
        })
        .catch((error) => {
          error;
        });
    },
    editEducation(id) {
      this.formAddEducation = false;
      this.formEditEducation= id;
    },
//     if (this.$refs.form.validate()) {
//   this.addNewEducation();
// } else {
//   event.preventDefault();
// }
    updateEducation(edu){
      // if(this.$refs.form.validate()){
        this.$store.dispatch("updateEducation",{
            ID:edu.ID,
            idusers:edu.idusers,
            univercity:edu.univercity,
            graduate_year:edu.graduate_year,
            graduate_month:edu.graduate_month,
            qualification:edu.qualification,
            location:edu.location.CountryName||edu.location,
            field_study:edu.field_study.FieldOfStudyName||edu.field_study,
            major:edu.major,
            grade:edu.grade,
            add_info:edu.add_info,
        })
            .then((response) => {
              this.formEditEducation = false;
              return response;
            })
            .catch((error) => {
              error;
            });

      // }else{
      //   event.preventDefault();
      // }

     },
     cancelUpdateEducation(){
      this.formEditEducation = false
     }
   },
};

</script>

<style>
.v-row .v-col {
  max-height: 200px;
}
.formEducation .v-text-field {
  height: 40px;
}
.formEducation .v-textarea {
  height: 180px;
}
</style>
