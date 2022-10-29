<template>
    <div>
        <v-dialog
              v-model="dialog"
              width="500"
            >
              <v-card>
                <v-card-title class="headline">
                   Attend Interview Invitation 
                </v-card-title>
                <v-card-text>
                    Are you sure you want to Attend this Interview Invitation?
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="error"
                    outlined
                    small
                    @click="dialog = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="primary"
                    outlined
                    small
                    @click="attendInterview(idApplication)"
                  >
                    Ok 
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog
      v-model="dialog2"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text">*Submit your reason for not attending interview invitation</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-textarea
                  outlined
                  label=""
                  v-model="reason"
                  required
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            outlined
            small
            @click="dialog2 = false"
          >
            Cancel 
          </v-btn>
          <v-btn
            color="primary"
            outlined
            small
            @click="notAttendInterview(idApplication)"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
        <v-container>
            <v-row>
                <div v-for="application in listApplication" :key="application.id">
                    <v-col cols="12">
                        <v-card width="330px" height="300px" outlined>
                            <v-card-title v-text="application.CompanyName">
                            </v-card-title>
                            <v-card-subtitle v-text="application.JobTitle +' at '+ application.CompanyName">
                            </v-card-subtitle>
                            <v-card-subtitle v-text="'Applied on '+application.CreatedAt" >
                            </v-card-subtitle>
                            <v-card-subtitle v-if = "application.Appstatus===1" v-text="'status: interview send'">
                            </v-card-subtitle>
                            <v-card-subtitle v-else-if = "application.AppStatus===2" v-text="'Status: Attend Interview'">
                            </v-card-subtitle>
                            <v-card-subtitle v-else-if = "application.AppStatus===3" v-text="'Status: Not Attending Interview'">
                            </v-card-subtitle>
                            <v-card-subtitle v-else-if = "application.AppStatus===4" v-text="'Status: Hired'">
                            </v-card-subtitle>
                            <v-card-subtitle v-else-if = "application.AppStatus===5" v-text="'Status: Not Suitable'" >
                            </v-card-subtitle>
                            <v-card-subtitle v-else text="'Status: Not Defined'" >
                            </v-card-subtitle>
                            <v-card-subtitle v-text="application.idApplication" >
                            </v-card-subtitle>
                            <v-card-actions v-if = "application.AppStatus===3 || application.AppStatus===4 || application.AppStatus===2">
                            </v-card-actions>
                            <v-card-actions v-else>
                                <v-btn @click.prevent="validateAttendInterview(application.IdApplication)" outlined class="ml-2" color="error">Attend</v-btn>
                                <v-btn @click.prevent="notAttendInterviewReason(application.IdApplication)" outlined class="ml-2" color="primary">Not Attend</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </div>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default{
    data:()=>({
        headers:[
            { text: 'Company Name',value:'CompanyName' },
            { text: 'Job Title',value:'JobTitle' },
            { text: 'Status',value:'AppStatus' },
        ],
        dialog:"",
        dialog2:"",
        reason:"",
    }),
    mounted(){
        this.$store
        .dispatch("getInterview")
            .then((response)=>{
                this.listApplication=response
            })
            .catch((error)=>{
                return error
            })
    },
    computed:{
        ...mapState({ listApplication: (state) => state.listInterview}),
    },
    methods:{
        validateAttendInterview(id){
            this.dialog = true;
            this.idApplication = id;
        },
        attendInterview(id){
            this.$store
                .dispatch("attendInterview",{id:id})
                .then((response)=>{
                    this.dialog=false;
                    return response
                })
                .catch((error)=>{return error})
        },
        notAttendInterviewReason(id){
            this.dialog2 = true;
            this.idApplication = id;
        },
        notAttendInterview(id){
            this.$store
                .dispatch("notAttendInterviewInvitation",{
                  id:id,
                  reason : this.reason,
                })
                .then((response)=>{
                    this.dialog2 = false
                    return response})
                .catch((error)=>{return error})
        },
        reschudeleInterview(id){
            this.$store
                .dispatch("rescheduleInterview", {id:id})
                .then((response)=>{
                    this.$router.push({name: "Application"});
                    return response
                })
                .catch((error)=>{
                    return error
                })
        },
    },
}
</script>
