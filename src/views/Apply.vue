<template>
  <v-container class="mt-5">
    <v-container>
      <v-row>
        <v-col cols="3">
          <v-card height="" width="267">
            <v-card-title>
              {{ jabatan }}
              {{ perusahaan }}
            </v-card-title>
            <v-card-text>
              <div>{{ sallary }}</div>
              <div>{{ pengalaman}}</div>
              <div>{{ lokasi }}</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="9" v-if="1 == '1'">
          <div v-if="errorMessage">
              <v-alert border="top" type="error">
                {{ errorMessage }}
              </v-alert>
          </div>
          <v-card class="px-5 py-5">
            <v-textarea
              label="Tell the employer you are best suited for this role"
              v-model="suited"
              auto-grow
              outlined
              rows="10"
              row-height="15"
            ></v-textarea>
            <FlashMessage></FlashMessage>
            <v-card-actions>
              <v-btn  outlined class="mb-3 pa-4" color="primary" @click.prevent="submitJob">
                Submit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
export default {
  name: "Apply",
  components: {},
  props: ["lowonganAll"],
  data() {
    return {
      token : localStorage.getItem('accessToken'),
      jabatan: "",
      perusahaan: "",
      tingkatPekerjaan: "",
      sallary:"",
      pengalaman:"",
      company_id:"",
      job_id:"",
      lokasi: "",
      suited: "",
      errorMessage: "",
      right: null,
    };
  },
  methods: {
    submitJob () {
      this.$store
        .dispatch("createApplication", {
            company_id:this.company_id,
            id_job:this.job_id,
            suited:this.suited,
        })
        .then((response) => {
          this.$router.push({name: "SuccessApply"});
          return response;
        })
        .catch((error) => {
          if(error.response.status==401){
            this.errorMessage = "You have to login to apply this position"
          }else{
            this.errorMessage = "Already Apply For This Position";
          }
        });
    }
  },
  created() {
    this.jabatan = this.$route.params.jabatan;
    this.perusahaan = this.$route.params.perusahaan;
    this.pengalaman =this.$route.params.experience;
    this.tingkatPekerjaan = this.$route.params.tingkatPekerjaan;
    this.kualifikasi = this.$route.params.kualifikasi;
    this.lokasi = this.$route.params.lokasi;
    this.sallary = this.$route.params.sallary;
    this.company_id = this.$route.params.company_id;
      this.job_id = this.$route.params.job_id;
    if (this.$route.query.debug) {
      this.debug = this.$route.query.debug;
    }
  },
};
</script>
