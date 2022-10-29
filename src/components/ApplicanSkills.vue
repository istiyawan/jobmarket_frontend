<template>
  <v-card class="mb-3" outlined>
    <!-- <div class="text&#45;h6"> -->
      <v-card-title class="ml-3 text-h6">
        Skills
        <v-spacer></v-spacer>
        <div v-if="buttonAbout != false">
          <v-btn
            class="mr-3"
            x-small
            fab
            outlined
            elevation="0"
            v-on:click="addskill"
            color="primary"
            ><v-icon>mdi-plus</v-icon></v-btn
          >
        </div>
      </v-card-title>
    <!-- </div> -->
    <v-card-text>
      <v-divider></v-divider>
      <div v-if="this.$store.getters.pesan != null" v-show="elementAlert">
        <v-alert type="success" >{{gettersPesan}}</v-alert>
      </div>
      <v-container class="formskills">
        <div class="formAddSkills" v-if="formAddSkills == true">
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
            <v-col cols="6">
              <v-text-field
                outlined
                dense
                v-model="item.skills"
                label="skills"
              >
              </v-text-field>
            </v-col>
             <v-col cols="6">
              <v-text-field
                outlined
                dense
                v-model="item.profiency"
                label="profiency"
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
                  v-on:click="
                    Submited();
                    clear();
                  "
                  color="primary"
                  >Save</v-btn
                >
              </div>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </div>
        <div v-else>
          <v-simple-table>
              <thead>
                <tr>
                  <th class="text-left">
                    No
                  </th>
                  <th class="text-left">
                    Skills
                  </th>
                  <th class="text-left">
                    Proficient
                  </th>
                  <th v-if="buttonAbout !=false" class="text-left">
                    Options
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in fetch" :key="item.ID">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.skills }}</td>
                  <td>{{ item.profiency }}</td>
                  <td class="text-xs-center">
                    <v-row>
                      <div v-if="editBtn == true">
                        <v-btn
                          class="mr-3"
                          x-small
                          fab
                          v-on:click="handleEditCancel"
                          color="primary"
                          ><v-icon>mdi-cancel</v-icon></v-btn
                        >
                      </div>
                      <div v-else>
                          <div v-if="buttonAbout != false">
                        <v-btn
                          class="mr-3"
                          x-small
                          fab
                          outlined
                          @click="handleEdit(item, index)"
                          color="primary"
                          ><v-icon>mdi-pencil</v-icon></v-btn
                        >
                      <v-btn
                        class="mr-4"
                        x-small
                        fab
                        outlined
                        @click.prevent="Hapus(item.ID)"
                        color="primary"
                        ><v-icon>mdi-delete</v-icon></v-btn
                      >
                          </div>
                      </div>
                    </v-row>
                  </td>
                </tr>
              </tbody>
          </v-simple-table>
        </div>
        <div v-if="skillForm == true">
          <div class="text-center">
             <v-dialog v-model="skillForm" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    Open Dialog
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">User Profile</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="ID"
                            label="ID*"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="skills"
                            label="SKILL"
                            hint="example of helper text only on focus"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="profiency"
                            label="PROFIENCY"
                            hint="example of helper text only on focus"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="skillForm = false;"
                    >
                      Close
                    </v-btn>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="skillForm = false; update()"
                    >
                      Update
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
          </div>
        </div>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
// <<<<<<< HEAD
// import { mapState } from "vuex"
// export default {
//   name: "Skills",
//   computed: {
//       ...mapState({getSkills:(state)=>state.resume.Skills}),
//     dataSkills() {
//       return this.skills;
// =======
// import { mapState, mapActions } from "vuex";
export default {
  props:['buttonAbout'],
  name: "Skills",
  data: function() {
    return {
      forms: [],
      formAddSkills: false,
      skillForm: false,
      editBtn: "",
      elementAlert: false,
      item: {
        skills: "",
        profiency: "",
        idusers : parseInt(localStorage.getItem("userId")),
      },
    };
  },
  created(){
    this.$store.dispatch("getSkill")
  },
  computed:{
    fetch(){
      return this.$store.state.skill
    },
    gettersPesan(){
      return this.$store.getters.pesan
    },
  },
  methods: {
    // handleEdit(item, index) {
    handleEdit(item) {
      this.skillForm = true;
      this.editBtn = false;
      this.ID   = item.ID,
      this.skills = item.skills;
      this.profiency = item.profiency;
    },
    handleEditCancel() {
      this.skillForm = false;
      this.editBtn = false;
      this.skills = "";
      this.profiency = "";
    },
     update() {
      this.$store
        .dispatch("updateSkills", {
          ID : this.ID,
          skills: this.skills,
          profiency: this.profiency,
          idusers: parseInt(localStorage.getItem("userId")),
        })
        .then((response) => {
          this.skillForm = false;
          this.editBtn = false;
          this.alert()
          this.$store.dispatch("getSkill")
          return response;
        })
        .catch((error) => {
          console.log(error)
        });
    },
    addskill() {
      this.formAddSkills = true;
    },
    Submited() {
      this.$store
        .dispatch("createSkills", this.item)
          setTimeout(()=>{
          this.formAddLang = false
          this.$store.dispatch("getSkill")
          this.alert()
      },2000);
    },
    clear() {
      (this.item.skills = ""), (this.item.profiency = "");
    },
    alert(){
        this.elementAlert = true
        setTimeout(()=>{
          this.elementAlert = false
        },1000);
    },
    Hapus(id) {
      if (confirm("are you sure?")) {
        this.$store
          .dispatch("deleteSkill", id)
          .then((response) => {
            this.$store.dispatch("getSkill")
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
