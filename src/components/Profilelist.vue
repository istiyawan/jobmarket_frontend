<template>
  <!-- <v-container fluid> -->
    <!-- <v-card width="100%" outlined class="pt-0 hidden-md-and-down"> 
      <v-row>
        <v-col cols="12" md="2" xs="12"> </v-col>
        <v-col cols="12" md="8" xs="12">
          <v-text-field
            dense
            outlined
            label="Search job by keywords"
            append-icon="mdi-magnify"
            @click:append="handleSearchJob"
            class="mt-5"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="2" xs="12"> </v-col>
      </v-row>
    </v-card> -->
    <!-- <v&#45;row> -->
    <v-row class="hidden-md-and-down" color="white" elevation="0">

      <v-col cols="12" md="3" xs="12">
        <v-card height="" width="267" elevation="2" color="#f8f8f8" class="">
          <!-- <v-list-item @click="handleProfileAll()" class="center"> -->
            <!-- <v-row> -->
              <!-- <v-col cols="12" class="text-center items-center"> -->
                <v-card-title>
                  <v-avatar class="center" size="120">
                    <v-img
                      src="https://picsum.photos/200/"
                    ></v-img>
                  </v-avatar>
                </v-card-title>
              <!-- </v-col>
              <v-col cols="9"> -->
                <!-- <div class="text center py-3"> -->
                  <v-card-text class="text-center">
                    {{ getAbout.fname + " " + getAbout.lname || "loading cuy"}}
                  </v-card-text>
                <!-- </div> -->
              <!-- </v-col> -->
            <!-- </v-row> -->
          <!-- </v-list-item> -->

          <v-divider></v-divider>
          <v-list nav color="#f8f8f8">
            <v-list-item
              dense
              v-for="item in items"
              :key="item.title"
              link
              @click="handleProfile(item.to)"
              class="blue--text"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col v-if="selectedProfileDetail == 'aboutMe'">
        <Aboutme />
      </v-col>
      <v-col v-else-if="selectedProfileDetail == 'experience'">
        <Experience />
      </v-col>
      <v-col v-else-if="selectedProfileDetail == 'education'">
        <Education />
      </v-col>
      <v-col v-else-if="selectedProfileDetail == 'skills'">
        <Skills />
      </v-col>
      <v-col v-else-if="selectedProfileDetail == 'language'">
        <Language />
      </v-col>
      <!-- <v-col v-else-if="selectedProfileDetail == 'additionalInfo'">
        <AdditionalInfo />
      </v-col> -->
      <v-col v-else-if="selectedProfileDetail == 'uploadResume'">
        <UploadResume />
      </v-col>
      <v-col cols="12" md="9" xs="12" v-else>
          <div v-if="getAbout">
          <Resume v-bind:buttonAbout=buttonAbout />
          </div>
          <div v-else>
            <v-skeleton-loader
                v-bind="attrs"
                height=350
              type="table-heading,divider, list-item-three-line, list-item-three-line"
            ></v-skeleton-loader>

          </div>
          <!-- <Resume v&#45;bind:buttonAbout=buttonAbout /> -->
      </v-col>
    </v-row>
  <!-- </v-container> -->
</template>
<script>
import Resume from "@/components/Resume.vue";
import Aboutme from "@/components/Aboutme.vue";
import Experience from "@/components/Experience.vue";
import Education from "@/components/Education.vue";
import Skills from "@/components/Skills.vue";
import Language from "@/components/Language.vue";
import UploadResume from "@/components/UploadResume.vue";
import { mapState } from "vuex";
export default {
  name: "Profilelist",
  components: {
    Resume,
    Aboutme,
    Experience,
    Education,
    Skills,
    Language,
    UploadResume,
  },
  data() {
    return {
        attrs: {
        class: 'mb-6',
        boilerplate: true,
        elevation: 2,
      },
      buttonAbout:false,
      exp: "",
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
        { title: "Resume", icon: "mdi-attachment", to: "uploadResume" },
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
      // alert('profile'+ item)
      this.selectedProfileDetail = item;
      this.buttonAbout = true;
    },
    handleProfileAll() {
      this.selectedProfileDetail = "";
      this.buttonAbout = false;
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
