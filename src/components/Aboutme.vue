<template>
  <v-card class="mb-3" color="#f8f8f8" elevation="2" dense min-height="470">
    <v-card-title class="ml-3 text-h6">
      About Me <v-spacer></v-spacer>
      <div v-if="buttonAbout != false">
          <div v-if="editBtn == false">
            <v-btn
              class="mr-3"
              outlined
              x-small
              fab
              v-on:click="handleClickAbout"
              color="primary"
              ><v-icon>mdi-pencil</v-icon></v-btn
            >
            <!-- <v-btn
              class="mr-3"
              x-small
              outlined
              fab
              v-on:click="handleClickAboutCancel"
              color="error"
              ><v-icon>mdi-cancel</v-icon></v-btn
            > -->
          </div>
          <!-- <div v-else>
            <v-btn
              class="mr-3"
              outlined
              x-small
              fab
              v-on:click="handleClickAbout"
              color="primary"
              ><v-icon>mdi-pencil</v-icon></v-btn
            >
          </div> -->
      </div>
    </v-card-title>
    <v-card-text>
    <v-divider></v-divider>
      <v-container class="formJm">
        <div v-if="aboutForm == true">
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="First Name"
                outlined
                dense
                elevation="1"
                v-model="fname"
              ></v-text-field>
            </v-col>
            <v-col cols="6"> <v-text-field
                label="Last Name"
                outlined
                dense
                v-model="lname"
              ></v-text-field>

            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
                <v-select
                    :items="genderItems"
                    label="Gender"
                    dense
                    outlined
                    v-model="gender"
                    >
                </v-select>
            </v-col>
            <v-col cols="6">
              <v-menu
                v-model="menu1"
                :close-on-content-click="false"
                max-width="290"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    :value="formatDate"
                    outlined
                    label="Date of Birth"
                    clearable
                    dense
                    v-model="editedItem.birthDate"
                    color="primary"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="editedItem.birthDate"
                  @change="menu1 = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Primary Phone"
                outlined
                dense
                v-model="phone1"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Secondary Phone"
                outlined
                dense
                v-model="phone2"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Email Address"
                outlined
                dense
                v-model="email"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Primary Address"
                outlined
                dense
                v-model="address1"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Secondary Address"
                outlined
                dense
                v-model="address2"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
             <v-col cols="6">
                <v-combobox
                  label="Country"
                  outlined
                  dense
                  v-model="country"
                  :items="getMCountries"
                  item-text="CountryName"
                  item-value="CountryCode"
                  @change="findRegions"
                >
                </v-combobox>
            </v-col>
            <v-col cols="6">
                <v-combobox
                  label="State/region"
                  outlined
                  dense
                  v-model="stateRegion"
                  :items="selectRegion"
                  item-text="RegionName"
                  item-value="RegionCode"
                >
                </v-combobox>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="City"
                outlined
                dense
                v-model="city"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Postal Code"
                outlined
                dense
                v-model="postalCode"
              ></v-text-field>
            </v-col>          
          </v-row>
          <v-row>
            <v-col cols="6">
                <v-combobox label="Nationality"
                  outlined
                  dense
                  v-model="nationality"
                  :items="getMCountries"
                  item-text="Nationality"
                  item-value="Nationality"
                >
                </v-combobox>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn outlined @click="updateAbout" class="primary" dark>Update</v-btn>
            </v-col>
          </v-row>
        </div>
        <div v-else>
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
  props:['buttonAbout'],
  name: "Aboutme",
  data: function() {
    return {
      filterRegion:[],
      genderItems:['Male', 'Female'],
      buttonToggle:false,
      token: localStorage.getItem("accessToken"),
      userId: localStorage.getItem("userId"),
      aboutForm: "",
      editBtn: "",
      fname : this.$store.state.about.fname,
      lname : this.$store.state.about.lname,
      gender : this.$store.state.about.gender,
      phone1 : this.$store.state.about.phone1,
      phone2 : this.$store.state.about.phone2,
      email : this.$store.state.about.email,
      address1 : this.$store.state.about.address1,
      address2 : this.$store.state.about.address2,
      city : this.$store.state.about.city,
      postalCode : this.$store.state.about.postal_code,
      birthDate : this.$store.state.about.birth,
      editedItem:{birthDate : moment(
        String(this.$store.state.about.birth)
      ).format("YYYY-MM-DD")},
      stateRegion: {RegionName:this.$store.state.about.state_region,RegionCode:this.$store.state.about.state_region_code},
      filteredProperty:"CountryCode",
      update:null, 
      country:{CountryName:this.$store.state.about.country,CountryCode:this.$store.state.about.country_code},
      nationality: {Nationality:this.$store.state.about.nationality},
      menu1: false,
    };
  },
  computed: {
    ...mapState({ getAbout: (state) => state.about }),
    ...mapState({ getMCountries: (state) => state.mcountries }),
    ...mapState({ getRegion: (state) => state.region}),
    
    selectRegion(){
        var selectRegion = this.stateRegion
        this.filterRegion.forEach(filter=>{
            selectRegion = this.getRegion.filter(record=>{
                return filter.name === 'name'
                    ? new RegExp(filter.value, 'i').test(record[filter.name])
                    : record[filter.name]==filter.value
            })
        })
        return selectRegion 

    },

    formatDate() {
      return this.editedItem.BirthDate
        ? moment(this.editedItem.BirthDate).format("L")
        : "";
    },
  },
  methods: { 
    findRegions() {
      this.stateRegion=''
      this.filterRegion.push({
        // name : "CountryCode",
        name: this.filteredProperty,
        value: this.country.CountryCode 
      })
      // this.query = ''
    },
    handleClickAbout() {
      this.aboutForm = true;
      this.editBtn = true;
    },

    handleClickAboutCancel() {
      this.aboutForm = false;
      this.editBtn = false;
      this.fname = "";
      this.lname = "";
      this.gender = "";
      this.phone1 = "";
      this.phone2 = "";
      this.email = "";
      this.address1 = "";
      this.address2 = "";
      this.email = "";
      this.city = "";
      this.postalCode = null;
      this.stateRegion = "";
      this.country = "";
      this.birthDate = "";
      this.nationality = "";
    },

    updateAbout() {
      this.$store
        .dispatch("updateProfileAbout", {
          fname: this.fname,
          lname: this.lname,
          gender: this.gender,
          phone1: this.phone1,
          phone2: this.phone2,
          address1: this.address1,
          address2: this.address2,
          birth: moment(String(this.editedItem.birthDate)).format(),
          city: this.city,
          postal_code: parseInt(this.postalCode),
          state_region: this.stateRegion.RegionName,
          state_region_code: this.stateRegion.RegionCode,
          country: this.country.CountryName,
          country_code: this.country.CountryCode,
          nationality:this.nationality.Nationality,
          email: this.email,
          iduser: this.$store.state.about.ID,
          experience: this.$store.state.Experience,
        })
        .then((response) => {
          this.aboutForm = false;
          this.editBtn = false;
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
