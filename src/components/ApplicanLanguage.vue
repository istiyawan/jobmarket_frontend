<template>
  <v-card class="mb-3" outlined>
    <!-- <div class="text&#45;h6"> -->
      <v-card-title class="ml-3 text-h6">
        Language
        <v-spacer></v-spacer>
        <div v-if="buttonAbout != false">
          <v-btn
            class="mr-3"
            x-small
            fab
            outlined
            elevation="0"
            v-on:click="addlanguage"
            color="primary"
            ><v-icon>mdi-plus</v-icon></v-btn
          >
        </div>
      </v-card-title>
    <!-- </div> -->
    <v-card-text>
    <v-divider> </v-divider>
      <div v-if="this.$store.getters.pesan != null" v-show="elementAlert">
        <v-alert type="success" >{{mes}}</v-alert>
      </div>

      <v-container class="formskills">
        <div class="formAddLang" v-if="formAddLang == true">
          <div v-for="form in forms" :key="form.index">
            <v-row>
              <v-col cols="6">
                <v-text-field
                  outlined
                  dense
                  :v-model="form.model"
                  :label="form.label"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </div>

          <v-row>
            <v-col cols="5">
              <v-text-field
                outlined
                dense
                v-model="lang.language"
                label="language"
              >
              </v-text-field>
            </v-col>
            <v-col cols="5">
              <v-text-field outlined dense v-model="lang.Score" label="Score">
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <div class="mb-6">
                <v-btn
                  class="mr-3"
                  small
                  elevation="0"
                  v-on:click="Submited"
                  color="primary"
                  >Save</v-btn
                >
              </div>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </div>
        <div v-else>
          <div v-for="lang in fetch" :key="lang.ID">
            <v-row>
              <v-col cols="5">
                Skills
              </v-col>
              <v-col cols="5">
                {{ lang.language }}
              </v-col>
              <v-col cols="2">
                  <div v-if="buttonAbout != false">
                <v-btn
                  class="mr-4"
                  x-small
                  fab
                  outlined
                  elevation="0"
                  @click.prevent="Hapus(lang.ID)"
                  color="primary"
                  ><v-icon>mdi-delete</v-icon></v-btn
                >
                  </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="5">Proficient </v-col>
              <v-col cols="5"> {{ lang.Score }} </v-col>
            </v-row>
            <v-divider></v-divider>
          </div>
        </div>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>

// import { mapState, mapGetters } from "vuex";
export default {
    props:['buttonAbout'],
  name: "Language",
  data: function() {
    return {
      forms: [],
      formAddLang: "",
      elementAlert: false,
      lang: {
        language: "",
        Score: "",
        idusers: parseInt(localStorage.getItem("userId")),
      },
    };
  },
  created(){
    this.$store.dispatch("getLang")

  },
  computed: {
    fetch(){
      return this.$store.state.language
    },
    mes(){
      return this.$store.getters.pesan
    },
  },
  methods: {
    addlanguage() {
      this.formAddLang = true;
    },
    alert(){
        this.elementAlert = true
        setTimeout(()=>{
          this.elementAlert = false
        },1000);
    },
    Submited() {
      this.$store
        .dispatch("createLang", this.lang)
          setTimeout(()=>{
          this.formAddLang = false
          this.$store.dispatch("getLang")
          this.alert()
      },2000);
    },
    Hapus(id) {
      if (confirm('are you sure?')) {
        this.$store.dispatch('deleteLang', id)
         .then((response) => {
          this.$store.dispatch("getLang")
          this.alert()
          return response;
        })
        .catch((error) => {
          error;
        });
      }

    },
  },
};
</script>
