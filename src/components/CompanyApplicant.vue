<template>
  <v-card class="mb-3" outlined>
    <div class="text-h6">
      <v-card-title class="ml-3 text-h6">
        Applican 
        <v-spacer></v-spacer>
      </v-card-title>
    </div>
    <!-- <v-card-text> -->
    <!--     <v-container> -->
    <!--         {{applicanByCompany}} -->
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
                    <td v-if = "allApplican.AppStatus===0">Submit Application</td>
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
                        @click="handleViewApplican(allApplican.IdUser,allApplican.IdJob, allApplican.AppStatus)"
                        color="success"
                        ><v-icon>mdi-eye</v-icon></v-btn
                      >
                    </td>
              </tr>
            </tbody>
          </v-simple-table>
        </div>
        <div v-if="viewDetail == true">
            <ApplicanResume :idUser="idUserApplican" :idJob="idJob" :appStatus="appStatus"/>
        </div>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import ApplicanResume from "@/components/ApplicanResume";

export default {
  name: "CompanyApplicant",
  components:{
    ApplicanResume
  },

  data: function() {
    return {
      idUserApplican: '',
      idJob:'',
      appStatus:'',
      viewDetail: false,
    };
  },
  created() {
      return this.$store.dispatch("StoreCompany/getApplicanByCompany")
  },
  computed: {
    applicanByCompany(){
        return this.$store.state.StoreCompany.applicanByCompany
    },
  },
  methods: {
    handleViewApplican(IdUser,IdJob,AppStatus) {
      this.viewDetail = true;
      this.idUserApplican = IdUser;
      this.idJob= IdJob;
      this.appStatus=AppStatus;
      this.applicationList = false;
    },
  },
};
</script>
