<template>
    <div>
        <Aboutme v-bind:buttonAbout=buttonAbout />
        <Experience v-bind:buttonAbout=buttonAbout />
        <Education  v-bind:buttonAbout=buttonAbout />
        <Skills v-bind:buttonAbout=buttonAbout />
        <Language  v-bind:buttonAbout=buttonAbout />
    </div>
</template>
<script>
// import Resume from "@/components/Resume.vue";
import Aboutme from "@/components/Aboutme.vue";
import Experience from "@/components/Experience.vue";
import Education from "@/components/Education.vue";
import Skills from "@/components/Skills.vue";
import Language from "@/components/Language.vue";
// import UploadResume from "@/components/UploadResume.vue";
import { mapState } from "vuex";
export default {
    props:['buttonAbout'],
  name: "Profilelist",
  components: {
    // Resume,
    Aboutme,
    Experience,
    Education,
    Skills,
    Language,
    // AdditionalInfo,
    // UploadResume,
  },
  data() {
    return {
      exp: "",
      // dataAbout: this.dataProfile,
      select: ["programming", "database"],
      selectedProfileDetail: null,
      items: [
        {
          title: "About Me",
          icon: "mdi-card-account-details",
          to: "aboutMe",
          text: "about me text",
        },
        { title: "Experience", icon: "mdi-calendar-clock" , color: 'teal' , to: "experience" },
        { title: "Education", icon: "mdi-book-open", to: "education" },
        { title: "Skills", icon: "mdi-sword-cross", to: "skills" },
        { title: "Language", icon: "mdi-human-greeting", to: "language" },
        { title: "Upload Resume", icon: "mdi-attachment", to: "uploadResume" },
      ],
      right: null,
      Address: "",
    };
  },
  computed: {
    ...mapState({ getAbout: (state) => state.about }),
    ...mapState({ getExperiences: (state) => state.experiences }),
    ...mapState({ dataEducation: (state) => state.education }),
    ...mapState({ dataSkills: (state) => state.skill }),
    ...mapState({ dataLanguage: (state) => state.language }),
    ...mapState({ dataInfo: (state) => state.Experiences }),
  },
  methods: {
    handleProfile(item) {
      this.selectedProfileDetail = item;
    },
    handleProfileAll() {
      this.selectedProfileDetail = "";
    },
    handleSearchJob() {
      alert("search");
    },
    handleSelectMobile(item) {
      // alert("handle select mobile " + item);
      this.selectedProfileDetail = item;
    },
    addItem(item) {
      const removed = this.items.splice(0, 1);
      this.items.push(...this.more.splice(this.more.indexOf(item), 1));
      this.more.push(...removed);
      this.$nextTick(() => {
        this.currentItem = "tab-" + item;
      });
    },
  },
};
</script>
