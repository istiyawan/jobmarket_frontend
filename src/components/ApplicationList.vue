<template>
    <div>
        <v-dialog
              v-model="dialog"
              width="500"
            >
              <v-card>
                <v-card-title class="headline">
                    Cancel Job Application
                </v-card-title>
                <v-card-text>
                    Are you sure you want to cancel this Job Application ?
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
                     No 
                  </v-btn>
                  <v-btn
                    color="primary"
                    outlined
                    small
                    @click="cancelApplication(idApplication)"
                  >
                     Yes 
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
        <!-- <v-container> -->
            <v-row>
                <div v-for="application in listApplication" :key="application.company_id">
                    <v-col cols="12">
                        <v-card width="330px" height="300px"  outlined>
                            <v-card-title v-text="application.CompanyName">
                            </v-card-title>
                            <v-card-subtitle v-text="application.JobTitle +' at '+ application.CompanyName">
                            </v-card-subtitle>
                            <v-card-subtitle v-text="'Applied on '+application.CreatedAt" >
                            </v-card-subtitle>
                            <v-card-subtitle v-text="'Status'+' '+application.AppStatus" >
                            </v-card-subtitle>
                            <v-card-actions>
                                <v-btn @click.prevent="validateCancelApplication(application.IdApplication)" outlined class="ml-2" color="error">Cancel Application</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </div>
            </v-row>
        <!-- </v-container> -->
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
    }),
    mounted(){
        this.$store
        .dispatch("getApplication", {
            token: this.token,
            userId: this.userId,
        })
        .then((response)=>{
            this.listApplication=response;
        })
        .catch((error)=>{
            return error;
        })
    },
    computed: {
        ...mapState({ listApplication: (state) => state.application}),
    },
    methods:{
        validateCancelApplication(id){
            this.dialog = true;
            this.idApplication = id;
        },
        cancelApplication(idApplication){
            this.$store
                .dispatch("cancelApplication", {id_application:idApplication})
                .then((response)=>{
                    this.dialog=false;
                    return response
                })
                .catch((error)=>{
                    return error
                })
        },

    },
}
</script>
