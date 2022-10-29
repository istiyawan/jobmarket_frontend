<template>
  <v-card class="mb-3" outlined>
    <v-card-title class="ml-3 text-h6">
      About Me 
    <v-spacer></v-spacer>
    </v-card-title>
    <v-card-text>
    <v-divider></v-divider>
      <v-container class="formJm">
        <div>
          <v-row>
            <v-col cols="3">
              Name
            </v-col>
            <v-col cols="7">
              : {{ getAbout.fname + " " + getAbout.lname }}
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
              Contact No
            </v-col>
            <v-col cols="7">
              : {{ getAbout.phone1 + " / " + getAbout.phone2 }}
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
              Email
            </v-col>
            <v-col cols="7">
              : {{ getAbout.email }}
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
              Address
            </v-col>
            <v-col cols="7">
              : {{
                getAbout.address1 + " / " + getAbout.address2 + ", " + getAbout.postal_code + ", " + getAbout.city + ", " + getAbout.state_region + ", " + getAbout.country
              }}
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
              Date of Birth
            </v-col>
            <v-col cols="7">
              : {{ getAbout.birth | formatDate }}
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
              Nationality
            </v-col>
            <v-col cols="7">
              : {{ getAbout.nationality }}
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapState } from "vuex";
import moment from "moment";
export default {
  props:['buttonAbout',"iduser"],
  name: "Aboutme",
  data: function() {
    return {
      // filterRegion:[],
      // genderItems:['Male', 'Female'],
      // buttonToggle:false,
      // token: localStorage.getItem("accessToken"),
      tokenCompany: localStorage.getItem("accessTokenCompany"),
      // userId: localStorage.getItem("userId"),
      // aboutForm: "",
      // editBtn: "",
      // fname : this.$store.state.about.fname,
      // lname : this.$store.state.about.lname,
      // gender : this.$store.state.about.gender,
      // phone1 : this.$store.state.about.phone1,
      // phone2 : this.$store.state.about.phone2,
      // email : this.$store.state.about.email,
      // address1 : this.$store.state.about.address1,
      // address2 : this.$store.state.about.address2,
      // city : this.$store.state.about.city,
      // postalCode : this.$store.state.about.postal_code,
      // birthDate : this.$store.state.about.birth,
      // editedItem:{birthDate : moment(
      //   String(this.$store.state.about.birth)
      // ).format("YYYY-MM-DD")},
      // stateRegion: {RegionName:this.$store.state.about.state_region,RegionCode:this.$store.state.about.state_region_code},
      // filteredProperty:"CountryCode",
      // update:null, 
      // country:{CountryName:this.$store.state.about.country,CountryCode:this.$store.state.about.country_code},
      // nationality: {Nationality:this.$store.state.about.nationality},
      // menu1: false,
    };
  },
    created(){
        return this.$store.dispatch("getAbout", {
            userId:this.iduser,
            token:this.tokenCompany,
        })
    },
  computed: {
    ...mapState({ getAbout: (state) => state.about }),
    // ...mapState({ getMCountries: (state) => state.mcountries }),
    // ...mapState({ getRegion: (state) => state.region}),
    
    // selectRegion(){
    //     var selectRegion = this.stateRegion
    //     this.filterRegion.forEach(filter=>{
    //         selectRegion = this.getRegion.filter(record=>{
    //             return filter.name === 'name'
    //                 ? new RegExp(filter.value, 'i').test(record[filter.name])
    //                 : record[filter.name]==filter.value
    //         })
    //     })
    //     return selectRegion 
    //
    // },

    formatDate() {
      return this.editedItem.BirthDate
        ? moment(this.editedItem.BirthDate).format("L")
        : "";
    },
  },
  methods: { 
  },
};
</script>
