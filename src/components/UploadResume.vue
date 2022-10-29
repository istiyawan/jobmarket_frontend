<template>
  <v-card class="mb-3" outlined>
            <div class="text-center">
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <v-card>
                <v-card-title class="headline">
                    Delete Education
                </v-card-title>
                <v-card-text>
                    Are you sure you want to delete this resume file ?
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="primary"
                    outlined
                    small
                    @click="DeleteResume(resumeId)"
                  >
                    Delete 
                  </v-btn>
                  <v-btn
                    color="primary"
                    outlined
                    small
                    @click="dialog = false"
                  >
                    Cancel
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
    <v-card-title class="ml-3 text-h6">
      <div>My Resume</div>
    </v-card-title>
    <v-card-text>
    <v-divider></v-divider>
    <v-container>
      <v-row>
        <div v-for="resume in resumeFile" :key="resume.id">
          <v-row>
            <v-col>
              {{ "Filename :" +  resume.file_name}}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ "Uploaded:" +  resume.CreatedAt}}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn
                class="mr-3"
                elevation="0"
                outlined
                v-on:click="DownloadResume(resume.ID);"
                color="primary"
                >Download</v-btn
              >
              <v-btn
                class="mr-3"
                elevation="0"
                outlined
                v-on:click="validateDeleteResume(resume.ID);"
                color="error"
                >Delete</v-btn
              >
            </v-col>
          </v-row>
        </div>
      </v-row>
      <v-row v-if = "resumeFile.length == 0">
        <v-col cols="6">
          <v-file-input
            label="Select pdf File..."
            outlined
            dense
            @change="selectFile"
            accept="pdf/*"
          ></v-file-input>
        </v-col>
        <v-col cols="6">
          <div class="mb-6">
            <v-btn
              class="mr-3"
              elevation="0"
              v-on:click="Submited();"
              color="primary"
              >Upload</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapState } from "vuex"
export default {
  name: "UploadResume",
  data: function() {
    return {
      forms: [],
      upload: {
        name:'',
        file: null
      },
      resumeId:"",
      dialog:"",
    };
  },
  mounted(){
    this.$store
    .dispatch('getResumeFile',{
      token: this.token,
      userId: this.userId,
    })
    .then((response)=>{
      this.resumeFile = response;
    })
    .catch((error) => {
      return error;
    })
  },
  computed:{
    ...mapState({ resumeFile:(state) => state.resumeFile}),
  },
  methods: {
    validateDeleteResume(id){
        this.dialog = true;
        this.resumeId = id;
    },
    selectFile() {
      this.upload.file = event.target.files[0]
      this.upload.name = event.target.files[0].name
    },
    Submited() {
      if(this.upload.file != null){
        let formData = new FormData();
        formData.append("file", this.upload.file);
        formData.append("name", this.upload.name);
        this.$store.dispatch("uploadResume", formData)
      }else{
        alert('silahkan di isi')
      }
    },
    clear() {
      this.upload.file = null,
      this.upload.name = ''
    },
    // DownloadResume(id){
       DownloadResume(){
      this.$store
      .dispatch('downloadResume',{
        responseType: "Blob",
      })
      .then((response) => {
        return response;
      })
      .catch((error)=>{ 
        console.log(error);
      })
    },
    DeleteResume(id){
      this.$store
      .dispatch('deleteResume',id,{
        responseType: "Blob",
      })
      .then((response) => {
        this.dialog = false,
        this.resumeId =""
        return response;
      })
      .catch((error)=>{ 
        console.log(error);
      })
    },

  },
};
</script>
