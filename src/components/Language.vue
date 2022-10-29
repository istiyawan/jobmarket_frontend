<template>
    <v-card class="mb-3" outlined elevation="0">
        <v-card-title class="ml-3 text-h6">
            Language 
        <v-spacer></v-spacer>
        <div v-if="buttonAbout != false">       
            <div v-if="addBtn == true">
                <v-btn
                    class="mr-3"
                    x-small
                    outlined
                    fab
                    v-on:click="cancelAddLanguage"
                    color="error"
                    ><v-icon>mdi-cancel</v-icon></v-btn
                >
            </div>
            <div v-else>
                <v-btn
                    class="mr-3"
                    x-small
                    outlined
                    fab
                    elevation="0"
                    v-on:click="addLanguage"
                    color="primary"
                    ><v-icon>mdi-plus</v-icon></v-btn
                >
            </div>
        </div>
        </v-card-title>
        <v-card-text>
        <v-container class="formSkills">
          <div v-if="formAddLanguage== true">
            <v-form @keyup.enter="addNewLanguage" ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  outlined
                  dense
                  label="Language"
                  v-model="add_language"
                >
                </v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  outlined
                  dense
                  label="Proficient"
                  v-model="add_proficient"
                >
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
                    v-on:click="addNewLanguage"
                    color="primary"
                    >Save</v-btn
                  >
                </div>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            </v-form>
          </div>
            <v-simple-table>
              <thead>
                <tr>
                  <th class="text-left">
                    No
                  </th>
                  <th class="text-left">
                    Language 
                  </th>
                  <th class="text-left">
                    Proficient
                  </th>
                  <th v-if="buttonAbout !=false" class="text-center">
                    Options
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in language" :key="item.ID">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.language}}</td>
                  <td>{{ item.Score}}</td>

                  <td v-if="buttonAbout !=false" class="text-center">
                        <v-btn
                          class=""
                          x-small
                          fab
                          outlined
                          @click.prevent="deleteLang(item.ID)"
                          color="primary"
                          ><v-icon>mdi-delete</v-icon></v-btn
                        >
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
        </v-container>
        </v-card-text>
    </v-card>
</template>
<script>
import { mapState } from "vuex" 

export default {
    props:['buttonAbout'],
    Name: "Skills",
    data: function() {
        return {
            addBtn:"",
            formAddLanguage:"", 
            add_language:"",
            add_proficient:"",
        }
    },
    computed:{
       ...mapState({ language: (state) => state.language}), 
    },
    methods: {
        addLanguage(){
            this.addBtn = true;
            this.formAddLanguage= true;
        },
        cancelAddLanguage(){
            this.formAddLanguage= false;
            this.addBtn = false;
        },
        addNewLanguage(){
            this.$store
            .dispatch("createLang",{
               language : this.add_language,
               Score : this.add_proficient,
               idusers : parseInt(localStorage.getItem("userId")),
            })
            .then((response) => {
                this.formAddLanguage= false;
                this.add_language= "";
                this.add_proficient = "";
                this.addBtn = false;
                return response;
            })
            .catch((error) => {
                error;
            })
        },
        deleteLang(id){
            this.$store
            .dispatch("deleteLang", id)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                error;
            });
        },
    },
};
</script>
