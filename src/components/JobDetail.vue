<template>
  <div>
      <v-container class="m-0 p-0">
      <div v-if="lowongan.length">
      <div v-for="jobDetail in lowongan" :key="jobDetail.ID">
      <v-card
        v-if="jobDetail.ID"
        max-height="500"
        class="overflow-y-auto"
        outlined
      >
        <v-card-title >
            <h3>{{ jobDetail.job_title}}</h3>
        </v-card-title >
        <v-card-text>
            {{ jobDetail.company_name +' | '+ jobDetail.location +' | IDR '+ jobDetail.sallary}}
            <strong><p class="mt-10">DESKRIPSI PEKERJAAN</p></strong>
              <p>{{ jobDetail.job_desc}}</p>
            <strong><p class="mt-10">INFORMASI TAMBAHAN</p></strong>
            <v-row>
              <v-col cols="6">
                <strong>Tingkat Pekerjaan</strong>
                <p>{{ jobDetail.job_level}}</p>
                
                <strong>Pengalaman Kerja</strong>
                <p>{{ jobDetail.experience}}</p>

                <strong>Spesialisasi</strong>
                <p>{{jobDetail.specialization}}</p>
              </v-col>
              <v-col cols="6">
                <strong>Kualifikasi</strong>
                <p>{{ jobDetail.min_qualification}}</p>
                <strong>Status</strong>
                <p>{{ jobDetail.job_type}}</p>
              </v-col>
            </v-row>
          <v-divider></v-divider>
          <div class="my-5">
              <strong><p>INFORMASI PERUSAHAAN</p></strong>
          </div>
        </v-card-text>
        <v-divider></v-divider>
          <v-card-actions >
            <v-btn
            class="p-8"
              :to="{
                name: 'Apply',
                params: {
                  jabatan: jobDetail.job_title,
                  perusahaan: jobDetail.company_name,
                  tingkatPekerjaan: jobDetail.job_level,
                  kualifikasi: jobDetail.min_qualification,
                  lokasi:jobDetail.location,
                  sallary:jobDetail.sallary,
                  experience:jobDetail.experience,
                  company_id:jobDetail.company_id,
                  job_id:jobDetail.ID
                },
                // query: { debug: true },
              }"
              color="primary"
            >
              Apply Now
            </v-btn>
          </v-card-actions>
       
      </v-card>
      </div>
      </div>
      <div v-else>
        <v-card outlined>
          <v-img
            class="mx-auto py-8"
            max-width="35%"
            max-height="35%"
            src="../assets/img/found.png"
          ></v-img>
          <span class=""
            ><p class="text-center mx-16">Found <strong>{{allJobsPosition.length}}</strong> Jobs</p></span
          >
        </v-card>
      </div>
      </v-container>
  </div>
</template>
<script>
export default {
    data(){
        return{
            jobDetail:'',
            listApplication:[],
            userId: localStorage.getItem("userId"),

        }
    },
    computed:{
      allJobsPosition(){
          return this.$store.state.allJobs
      },
    },
    mounted(){
        this.$store
        .dispatch("getApplication")
            .then((response)=>{
                this.listApplication=response
            })
            .catch((error)=>{
                return error
            })
    },
  name: "Jobdetail",
  components: {},
  props: ["lowongan", "keterangan"],
};
</script>
