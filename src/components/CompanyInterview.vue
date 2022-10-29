<template>
  <v-card class="mb-3" outlined>
    <div class="text-h6">
      <v-card-title class="ml-3 text-h6">
        Interview List 
        <!-- <v-spacer></v-spacer> -->
      </v-card-title>
    </div>
    <!-- <v-card-text> -->
    <!--     <v-container> -->
            <!-- {{applicanByCompany}} -->
    <!--     </v-container> -->
    <!-- </v-card-text> -->
    <v-card-text>
      <v-container>
        <div v-if="viewDetail == false">
          <v-simple-table>
            <thead>
              <tr>
                <th class="text-left">
                  No
                </th>
                <th class="text-left">
                  Job Title
                </th>
                <th class="text-left">
                  Applican Name 
                </th>
                <th class="text-left">
                  Status 
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="allApplican in  applicanByCompany" :key="allApplican.IdApplication">
                    <td>{{allApplican.IdApplication}}</td>
                    <td>{{allApplican.JobTitle}}</td>
                    <td>{{allApplican.Applicant}}</td>
                    <!-- <td>{{allApplican.AppStatus}}</td> -->
                    <td v-if = "allApplican.AppStatu===0">Submit Application</td>
                    <td v-else-if= "allApplican.AppStatus===1">Interview Send</td>
                    <td v-else-if= "allApplican.AppStatus===2">Attend Interview</td>
                    <td v-else-if= "allApplican.AppStatus===3">Hired</td>
                    <td v-else-if= "allApplican.AppStatus===4">Not Suitable</td>
                    <td v-else>Attend Interview</td>
                    <td>
                      <v-btn
                        text
                        class="text-center"
                        x-small
                        fab
                        @click="handleViewApplican(allApplican.IdUser,allApplican.IdJob)"
                        color="success"
                        ><v-icon>mdi-eye</v-icon></v-btn
                      >
                    </td>
              </tr>
            </tbody>
          </v-simple-table>
        </div>
        <div v-if="viewDetail == true">
            <ApplicanResult :idUser="idUserApplican" :idJob="idJob"/>
        </div>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import ApplicanResult from "@/components/ApplicanResult";

export default {
  name: "CompanyInterview",
  components:{
    ApplicanResult
  },

  data: function() {
    return {
      idUserApplican: '',
      idJob:'',
      viewDetail: false,
    };
  },
  created() {
      return this.$store.dispatch("StoreCompany/getInterviewByCompany")
  },
  computed: {
    applicanByCompany(){
        return this.$store.state.StoreCompany.interviewByCompany
    },
  },
  methods: {
    handleViewApplican(IdUser,IdJob) {
      this.viewDetail = true;
      this.idUserApplican = IdUser;
      this.idJob= IdJob;
      this.applicationList = false;
    },
  },
};
</script>
