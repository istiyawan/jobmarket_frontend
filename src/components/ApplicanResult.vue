<template>
    <div>
        <div>
            {{"is user:" + idUser}}
            {{"is job:" + idJob}}
        </div>
        <v-card elevation="0" class="pb-3">
        <div class="text-right">
                <v-btn
                    class="mr-1"
                    outlined
                    elevation="0"
                    v-on:click="handleHiredApplican(idUser,idJob)"
                    color="primary"
                    >Hired</v-btn
                >
                  <v-btn
                    class=""
                    outlined 
                    elevation="0"
                    v-on:click="handleNotHired(idUser,idJob)"
                    color="primary"
                    >Not Suitable</v-btn
                  >
        </div>
        <v-card-text>
            <v-textarea 
                outlined
                v-model="interviewResult"
            >
                
            </v-textarea>
        </v-card-text>
        </v-card>

        <!-- {{iduser +''+ idApplication}} -->
        <!-- <ApplicanAboutme :iduser="iduser"/> -->
        <!-- <ApplicanExperience :iduser="iduser"/> -->
        <!-- <ApplicanEducation :iduser="iduser"/> -->
        <!-- <ApplicanSkills :iduser="iduser"/> -->
        <!-- <ApplicanLanguage :iduser="iduser"/> -->
    </div>
</template>
<script>
// import ApplicanAboutme from "@/components/ApplicanAboutme.vue";
// import ApplicanExperience from "@/components/ApplicanExperience.vue";
// import ApplicanEducation from "@/components/ApplicanEducation.vue";
// import ApplicanSkills from "@/components/ApplicanSkills.vue";
// import ApplicanLanguage from "@/components/ApplicanLanguage.vue";
// import { mapState } from "vuex";
export default {
  props:['idUser','idJob'],
  name: "ApplicanResult",
  components: {
    // ApplicanAboutme,
    // ApplicanExperience,
    // ApplicanEducation,
    // ApplicanSkills,
    // ApplicanLanguage,
  },
  data() {
    return {
        interviewResult:"",
      // exp: "",
      // select: ["programming", "database"],
      // selectedProfileDetail: null,
      // items: [
      //   {
      //     title: "About Me",
      //     icon: "mdi-card-account-details",
      //     to: "aboutMe",
      //     text: "about me text",
      //   },
      //   { title: "ApplicanExperience", icon: "mdi-calendar-clock" , color: 'teal' , to: "experience" },
      //   { title: "ApplicanEducation", icon: "mdi-book-open", to: "education" },
      //   { title: "ApplicanSkills", icon: "mdi-sword-cross", to: "skills" },
      //   { title: "ApplicanLanguage", icon: "mdi-human-greeting", to: "language" },
      //   { title: "Upload Resume", icon: "mdi-attachment", to: "uploadResume" },
      // ],
      // right: null,
      // Address: "",
    };
  },
  // computed: {
  //   ...mapState({ getAbout: (state) => state.about }),
  //   ...mapState({ getApplicanExperiences: (state) => state.experiences }),
  //   ...mapState({ dataApplicanEducation: (state) => state.education }),
  //   ...mapState({ dataApplicanSkills: (state) => state.skill }),
  //   ...mapState({ dataApplicanLanguage: (state) => state.language }),
  //   ...mapState({ dataInfo: (state) => state.ApplicanExperiences }),
  // },
  methods: {
      handleHiredApplican(idUser,idJob){
          this.$store
            .dispatch("StoreCompany/updateApplican",{
                id_users:idUser,
                id_job:idJob,
                app_status:3,
                interview_result:this.interviewResult,
              })
              .then((response)=>{
                return response
              })
              .catch((error)=>{error})
      },
      handleNotHired(idUser,idJob){
          this.$store
            .dispatch("StoreCompany/updateApplican",{
                id_users:idUser,
                id_job:idJob,
                app_status:4,
                interview_result:this.interviewResult,
            })
              .then((response)=>{return response})
              .catch((error)=>{error})
      },
  //   handleProfile(item) {
  //     this.selectedProfileDetail = item;
  //   },
  //   handleProfileAll() {
  //     this.selectedProfileDetail = "";
  //   },
  //   handleSearchJob() {
  //     alert("search");
  //   },
  //   handleSelectMobile(item) {
  //     // alert("handle select mobile " + item);
  //     this.selectedProfileDetail = item;
  //   },
  //   addItem(item) {
  //     const removed = this.items.splice(0, 1);
  //     this.items.push(...this.more.splice(this.more.indexOf(item), 1));
  //     this.more.push(...removed);
  //     this.$nextTick(() => {
  //       this.currentItem = "tab-" + item;
  //     });
  //   },
  },
};
</script>
