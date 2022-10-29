<template>
  <v-container fluid>
    <v-row class="hidden-md-and-down" color="white" elevation="1">
      <v-col cols="12" md="3" xs="12">
        <v-card width="256" class="mx-auto">
          <v-list-item @click="handleProfileAll()">
            <v-row>
              <v-col cols="3">
                <v-img
                  class=""
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Portrait_of_Abdul_Hamid_II_of_the_Ottoman_Empire.jpg/800px-Portrait_of_Abdul_Hamid_II_of_the_Ottoman_Empire.jpg"
                  width="40"
                  height="50"
                ></v-img>
              </v-col>
              <v-col cols="9">
                FACEBOOK.COM
              </v-col>
            </v-row>
          </v-list-item>

          <v-divider></v-divider>
          <v-list nav>
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
                <v-list-item-title class="blue--text">{{
                  item.title
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <v-col v-if="selectedProfileDetail == 'CompanyDesc'">
        <CompanyDesc />
      </v-col>
      <v-col v-else-if="selectedProfileDetail == 'CompanyJobs'">
        <CompanyJobs />
      </v-col>
      <v-col v-else-if="selectedProfileDetail == 'CompanyApplicant'">
        <CompanyApplicant />
      </v-col>
      <v-col v-else-if="selectedProfileDetail == 'CompanyInterview'">
        <CompanyInterview/>
      </v-col>
      <v-col v-else-if="selectedProfileDetail == 'language'">
        <Language />
      </v-col>
      <v-col v-else-if="selectedProfileDetail == 'additionalInfo'">
        <AdditionalInfo />
      </v-col>
      <v-col v-else-if="selectedProfileDetail == 'uploadResume'">
        <UploadResume />
      </v-col>
      <v-col cols="12" md="9" xs="12" v-else>
        <h1 style="color:#636e72">Dashboard</h1>
        <v-divider></v-divider>
        <v-row>
          <v-col class="col-md-4">
            <v-card class="mx-auto" outlined elevation="2" color="blue" dark>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">
                    PENDAFTARAN
                  </div>
                  <v-list-item-title class="headline mb-2">
                    330
                  </v-list-item-title>
                  <v-list-item-subtitle
                    >Lorem ipsum dolor
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                  color="transparent"
                >
                  <v-icon
                    large
                    color="teal darken-2"
                  >
                    mdi-buffer
                  </v-icon>
                  </v-list-item-avatar>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col class="col-md-4">
            <v-card class="mx-auto" elevation="2" outlined color="#1F7087" dark>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">
                    TOTAL PELAMAR
                  </div>
                  <v-list-item-title class="headline mb-2">
                    40
                  </v-list-item-title>
                  <v-list-item-subtitle
                    >Lorem ipsum dolor
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80" color="transparent">
                  <v-icon large color="teal darken-2">
                    mdi-chart-areaspline
                  </v-icon>
                </v-list-item-avatar>
              </v-list-item>
            </v-card>
          </v-col>
           <v-col class="col-md-4">
            <v-card class="mx-auto" elevation="2" outlined color="#952175" dark>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">
                    JOB POSTED
                  </div>
                  <v-list-item-title class="headline mb-2">
                    7
                  </v-list-item-title>
                 <v-list-item-subtitle
                    >Lorem ipsum dolor
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80" color="transparent">
                  <v-icon large color="teal darken-2">
                    mdi-image-filter-drama
                  </v-icon>
                </v-list-item-avatar>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>

        <!-- <CompanyDesc />
        <CompanyJobs />
        <CompanyApplicant /> -->
        <!-- <Skills />
        <Language />
        <AdditionalInfo />
        <UploadResume /> -->
      </v-col>
    </v-row>
    <!-- <v&#45;card -->
    <!--   class="mx&#45;auto hidden&#45;md&#45;and&#45;up" -->
    <!--   color="white" -->
    <!--   elevation="0" -->
    <!--   width="80%" -->
    <!-- > -->
      <!-- <v&#45;row class="hidden&#45;md&#45;and&#45;up" color="white" elevation="1"> -->
      <!-- <v&#45;row> -->
      <!--   <v&#45;select -->
      <!--     v&#45;model="select" -->
      <!--     :items="items" -->
      <!--     item&#45;text="title" -->
      <!--     item&#45;value="to" -->
      <!--     label="Select" -->
      <!--     return&#45;object -->
      <!--     solo -->
      <!--     v&#45;on:change="handleSelectMobile(select.to)" -->
      <!--   ></v&#45;select> -->
      <!--   <v&#45;col v&#45;if="selectedProfileDetail == 'CompanyDesc'"> -->
      <!--     <CompanyDesc /> -->
      <!--   </v&#45;col> -->
      <!--   <v&#45;col v&#45;else&#45;if="selectedProfileDetail == 'CompanyJobs'"> -->
      <!--     <CompanyJobs /> -->
      <!--   </v&#45;col> -->
      <!--   <v&#45;col v&#45;else&#45;if="selectedProfileDetail == 'CompanyApplicant'"> -->
      <!--     <CompanyApplicant /> -->
      <!--   </v&#45;col> -->
      <!--   <!&#45;&#45; <v&#45;col v&#45;else&#45;if="selectedProfileDetail == 'skills'"> -->
      <!--     <Skills /> -->
      <!--   </v&#45;col> -->
      <!--   <v&#45;col v&#45;else&#45;if="selectedProfileDetail == 'language'"> -->
      <!--     <Language /> -->
      <!--   </v&#45;col> -->
      <!--   <v&#45;col v&#45;else&#45;if="selectedProfileDetail == 'additionalInfo'"> -->
      <!--     <AdditionalInfo /> -->
      <!--   </v&#45;col> -->
      <!--   <v&#45;col v&#45;else&#45;if="selectedProfileDetail == 'uploadResume'"> -->
      <!--     <UploadResume /> -->
      <!--   </v&#45;col> &#45;&#45;> -->
      <!--   <v&#45;col cols="12" md="9" xs="12" v&#45;else> -->
      <!--     <CompanyDesc /> -->
      <!--     <CompanyJobs /> -->
      <!--     <CompanyApplicant /> -->
      <!--     <!&#45;&#45; <Skills /> -->
      <!--     <Language /> -->
      <!--     <AdditionalInfo /> -->
      <!--     <UploadResume /> &#45;&#45;> -->
      <!--   </v&#45;col> -->
      <!-- </v&#45;row> -->
    <!-- </v&#45;card> -->
  </v-container>
</template>
<script>
import CompanyDesc from "@/components/CompanyDesc.vue";
import CompanyJobs from "@/components/CompanyJobs.vue";
import CompanyApplicant from "@/components/CompanyApplicant.vue";
import CompanyInterview from "@/components/CompanyInterview.vue";
// import Skills from "@/components/Skills.vue";
// import Language from "@/components/Language.vue";
// import AdditionalInfo from "@/components/AdditionalInfo.vue";
// import UploadResume from "@/components/UploadResume.vue";
// import Company from "../views/Company.vue";

export default {
  name: "CompanyList",
  components: {
    CompanyDesc,
    CompanyJobs,
    CompanyApplicant,
    CompanyInterview,
    // Skills,
    // Language,
    // AdditionalInfo,
    // UploadResume,
  },
  data() {
    return {
      labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
      value: [200, 675, 410, 390, 310, 460, 250, 240],
      select: ["programming", "database"],
      selectedProfileDetail: null,
      items: [
        {
          title: "Company Profile",
          icon: "mdi-card-account-details",
          to: "CompanyDesc",
          text: "about me text",
        },
        { title: "BOD", icon: "mdi-calendar-clock", to: "" },
        { title: "Job", icon: "mdi-book-open", to: "CompanyJobs" },
        { title: "Applican", icon: "mdi-sword-cross", to: "CompanyApplicant" },
        { title: "Interview",  icon: "mdi-attachment", to: "CompanyInterview" },
      ],
      right: null,
    };
  },
  mounted(){
    this.$store
      .dispatch("StoreCompany/getDataProfileUserCompany")
      .then((response) => {
        this.dataProfile = response;
        return response;
       })
       .catch((error) => {
          error;
       });
    },
  methods: {
    handleProfile(item) {
      // alert('profile'+ item)
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
