<template>
  <v-container>
    <v-row>
      <v-col class="mx-auto mt-16" cols="12">
        <v-card class="mx-auto mt-16" max-width="500" elevation="1" min-height="300">
          <v-card-title class="mx-auto mt-16">
            <h4 class="mx-auto mt-16">
              {{ StatusActivation }}
            </h4>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
axios.defaults.baseURL = "http://localhost:8081";

export default {
  name:"ActivationAccount",
  data(){
    return{
        ActivationCode : this.$route.params.activationCode,
        StatusActivation:"",
        // ActivationCode : "69737469796177616e40676d61696c2e636f6d",
    }
  },
  mounted:function(){
    this.activationUserProses()
  },
  methods:{
    activationUserProses:function(){
      axios
          .put("/user/" + this.ActivationCode,{
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            this.StatusActivation = response.data.message;
          })
          .catch((error)=>{ this.statusActivation = error.error})
    }
  },
}

</script>
