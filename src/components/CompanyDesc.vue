<template>
  <v-card class="mb-3" outlined elevation="">
    <v-card-title class="ml-3 text-h6">
      Company Description
      <v-spacer></v-spacer>
      <div v-if="buttonAbout != false">
        <div v-if="editBtn == false">
          <v-btn
            class="mr-3"
            x-small
            fab
            v-on:click="editCompanyProfile"
            color="primary"
          ><v-icon>mdi-pencil</v-icon>
          </v-btn>
        </div>
      </div>
    </v-card-title>
    <v-card-text>
    <v-divider></v-divider>
    {{ "companyProfile "+getCompanyProfile}}
      <v-container class="formJm">
        <div v-if="aboutForm == true">
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Company Name "
                outlined
                dense
                v-model="companyName"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Contact"
                outlined
                dense
                v-model="companyContact"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Address"
                outlined
                dense
                v-model="companyAddress"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Phone"
                outlined
                dense
                v-model="companyPhone"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Email"
                outlined
                dense
                v-model="companyEmail"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Overview"
                outlined
                dense
                v-model="companyOverview"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Benefit"
                outlined
                dense
                v-model="companyBenefit"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Work Hours"
                outlined
                dense
                v-model="companyWorkHours"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Logo"
                outlined
                dense
                v-model="companyLogo"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Picture"
                outlined
                dense
                v-model="companyPicture"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Websites"
                outlined
                dense
                v-model="companyWebsites"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Dress Code"
                outlined
                dense
                v-model="companyDressCode"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Application Processing"
                outlined
                dense
                v-model="companyAppProcessing"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Company Size"
                outlined
                dense
                v-model="companySize"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Language"
                outlined
                dense
                v-model="companyLanguage"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Industry"
                outlined
                dense
                v-model="companyIndustry"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Info"
                outlined
                dense
                v-model="companyAddInfo"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Company Description"
                outlined
                dense
                v-model="companyDesc"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn
                class="primary"
                outlined
                dark
                @click="updateCompanyProfile"
              >
                Update 
              </v-btn>
            </v-col>
          </v-row>
        </div>
        <div v-else>
          <v-row>
            <v-col cols="3">
              Description
            </v-col>
            <v-col cols="7">
              <!-- {{ getCompanyProfile.companydesc + " " + getCompanyProfile.lname }} -->
            </v-col>
            <v-col cols="3">
              Company Name
            </v-col>
            <v-col cols="7">
              <!-- {{ getCompanyProfile.companyProfile+ " " + getCompanyProfile.lname }} -->
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>

import { mapState } from "vuex";
// import moment from "moment";
export default {
  props:['buttonAbout'],
  name: "CompanyDesc",
  data: function() {
    return {
      token: localStorage.getItem("accessToken"),
      company_id: localStorage.getItem("userIdCompany"),
      aboutForm: "",
      editBtn: "",
      companydesc: "",
      companyDesc:"",
      companyName:"",
      companyContact:"",
      companyAddress:"",
      companyPhone:"",
      companyEmail:"",
      companyOverview:"",
      companyBenefit:"",
      companyWorkHours:"",
      companyLogo:"",
      companyPicture:"",
      companyWebsites:"",
      companyDressCode:"",
      companyAppProcessing:"",
      companySize	:"",
      companyLanguage:"",
      companyIndustry:"",
      companyAddInfo:"",
    };
  },
  //// mounted() {
  //   this.$store
  //     .dispatch("getAbout", {
  //       token: this.token,
  //       userId: this.userId,
  //     })
  //     .then((response) => {
  //       // this.dataAbout = response;
  //       return response;
  //     })
  //     .catch((error) => {
  //       error;
  //     });
  // },
  computed: {
    ...mapState({ getCompanyProfile: (state) => state.companyProfile}),
    // formatDate() {
    //   return this.editedItem.BirthDate
    //     ? moment(this.editedItem.BirthDate).format("L")
    //     : "";
    // },
  },
  methods: {
    editCompanyProfile() {
      this.aboutForm = true;
      this.editBtn = true;
      // this.companydesc = this.$store.state.about.companydesc;
      // this.editedItem.birthDate = moment(
      //   String(this.$store.state.about.birth)
      // ).format("YYYY-MM-DD");
    },
    handleClickAboutCancel() {
      this.aboutForm = false;
      this.editBtn = false;
      this.companydesc = "";
    },
    updateCompanyProfile() {
      this.$store
        .dispatch("StoreCompany/updateCompanyProfile", {
          company_id: this.userId, 
          companydesc: this.companydesc,
          company_name:this.companyName,
          contact_name:this.companyContact,
          address:this.companyAddress,
          contact:this.companyPhone,
          email:this.companyEmail,
          company_overview:this.companyOverview,
          benefit:this.companyBenefit,
          work_hours:this.companyWorkHours,
          logo:this.companyLogo,
          picture:this.companyPicture,
          website:this.companyWebsites,
          dress_code:this.companyDressCode,
          application_processing:this.companyAppProcessing,
          company_size:this.companySize,
          language:this.companyLanguage,
          industry:this.companyIndustry,
          add_info:this.companyAddInfo,
        })
        .then((response) => {
          this.aboutForm = false;
          this.editBtn = false;
          this.id = ""
          this.created_at="";
          this.updated_at="";
          this.deleted_at="";
          this.company_id="";
          this.company_name="";
          this.contact_name="";
          this.address="";
          this.contact="";
          this.email="";
          this.company_overview="";
          this.benefit="";
          this.work_hours="";
          this.website="";
          this.dress_code="";
          this.application_processing="";
          this.company_size="";
          this.language="";
          this.industry="";
          this.add_info="";
          return response;
        })
        .catch((error) => {
          return error;
        });
    },
  },
};
</script>
<style>
.formJm .v-text-field {
  height: 40px;
}
</style>
