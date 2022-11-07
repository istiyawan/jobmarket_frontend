<template>
  <div class="">
  <v-container class="">
    <v-row>
      <v-col cols="3">
        <v-text-field
          v-model="keyword"
          dense
          outlined
          label="Search Keyword"
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field
          v-model="location"
          dense
          outlined
          label="Location"
          prepend-inner-icon="mdi-map-marker"
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-combobox
          v-model="specialization"
          :items="items"
          label="Specialization"
          outlined
          dense
          prepend-inner-icon="mdi-account-settings"
        >
        </v-combobox>
      </v-col>
      <v-col cols="3">
        <v-btn @click="submitSearchLowongan" class="py-5" color="primary" block
          >Search</v-btn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
          <v-card v-if="allJobsPosition.length > 0" class="" outlined>
          <v-card-text>{{allJobsPosition.length + " Lowongan Kerja ditemukan"}}</v-card-text>
            <div v-for="jobs in allJobsPosition" :key="jobs.ID">
                  <v-card outlined class="mx-2 my-2" @click="handleRowClick(jobs.ID)">
                      <v-card-title class="text-h6" v-text="jobs.job_title"/>
                      <v-card-text v-text="jobs.company_name" />
                      <v-card-text v-text="jobs.location" />
                  </v-card>
            </div>
          </v-card>
          <v-card v-else outlined>
            <v-card-text>{{allJobsPosition.length + " Lowongan Kerja ditemukan"}}</v-card-text>
          </v-card>
      </v-col>
      <v-col cols="9" class="py-0">
        <Jobdetail
          keterangan="keterangan nama lowongan:"
          :lowongan="lowongan" 
        />
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>
<script>
import Jobdetail from "@/components/JobDetail.vue";
export default {
  components: {
    Jobdetail,
  },
  data() {
    return {
      keyword: "",
      location: "",
      specialization: "",
      lowongan: [],
      items: ["Programming", "Design", "Vue", "Vuetify"],
      search: "",
      lowonganKerja:this.allJobsPosition,
    };
  },
  created(){
    return this.$store.dispatch("getAllJobs")
  },
  computed: {
    headers() {
      return [
        {
          text: "JOBMARKET LIST",
          align: "start",
          sortable: false,
          value: "posisi",
        },
      ];
    },

    allJobsPosition(){
        return this.$store.state.allJobs
    },

    dataJobById(){
        return this.$store.state.jobById
    },
  },
  methods: {
    handleRowClick(id) {
      this.$store
        .dispatch("getJobById", {
            ID:id
        })
        .then((response) => {
          this.lowongan = this.dataJobById
          return response;
        })
        .catch((error) => {
          return error;
        });

    },
    submitSearchLowongan() {
      this.$store
        .dispatch("submitSearchLowongan", {
          keyword: this.keyword,
          location: this.location,
          specialization: this.specialization,
        })
        .then((response) => {
          this.lowongan = this.allJobsPosition.length
          return response;
        })
        .catch((error) => {
          return error;
        });
    },
  },
};
</script>