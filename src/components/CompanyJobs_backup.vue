<template>
  <v-card class="mb-3" outlined>
    <div class="text-h6">
      <v-card-title class="ml-3 text-h6">
        Jobs Posted
        <v-spacer></v-spacer>
        <div v-if="edittab == true">
          <v-btn class="mr-3" x-small fab @click="cancel" color="error"
            ><v-icon>mdi-cancel</v-icon></v-btn
          >
        </div>
        <div v-else>
          <v-btn
            class="mr-3"
            x-small
            fab
            elevation="0"
            v-on:click="addskill"
            color="primary"
            ><v-icon>mdi-plus</v-icon></v-btn
          >
        </div>
      </v-card-title>
    </div>
    <v-card-text>
      <div v-if="this.$store.getters.pesan != null" v-show="elementAlert">
        <v-alert type="success">{{ gettersPesan }}</v-alert>
      </div>
      <v-container class="formskills">
        <div class="formAddSkills" v-if="formAddSkills == true">
          <v-row justify="center">
            <v-dialog v-model="formAddSkills" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                  Open Dialog
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">Posted Jobs</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field label="Title*" required></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          label="Qualify"
                          hint="example of helper text only on focus"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="12">
                        <v-textarea
                          name="input-7-1"
                          label="Description"
                          hint="Hint text"
                        ></v-textarea>
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
                    @click="formAddSkills = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="formAddSkills = false"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </div>
        <div v-else>
          <v-simple-table>
            <thead>
              <tr>
                <th class="text-left">
                  No
                </th>
                <th class="text-left">
                  Title
                </th>
                <th class="text-left">
                  Description
                </th>
                <th class="text-left">
                  Qualify
                </th>
                <th class="text-left">
                  Posted
                </th>
                <th class="text-left">
                  Active
                </th>
                <th class="text-left">
                  Option
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
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
                      <v-btn
                        class="mr-3"
                        x-small
                        fab
                        @click="handleEdit"
                        color="error"
                        ><v-icon>mdi-pencil</v-icon></v-btn
                      >
                    </div>
                    <v-btn
                      class="mr-4"
                      x-small
                      fab
                      @click.prevent="Hapus"
                      color="primary"
                      ><v-icon>mdi-delete</v-icon></v-btn
                    >
                  </v-row>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </div>
        <div v-if="skillForm == true">
          <div class="text-center">
            <v-row justify="center">
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
                            label="Legal first name*"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Legal middle name"
                            hint="example of helper text only on focus"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Legal last name*"
                            hint="example of persistent helper text"
                            persistent-hint
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field label="Email*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            label="Password*"
                            type="password"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-select
                            :items="['0-17', '18-29', '30-54', '54+']"
                            label="Age*"
                            required
                          ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-autocomplete
                            :items="[
                              'Skiing',
                              'Ice hockey',
                              'Soccer',
                              'Basketball',
                              'Hockey',
                              'Reading',
                              'Writing',
                              'Coding',
                              'Basejump',
                            ]"
                            label="Interests"
                            multiple
                          ></v-autocomplete>
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
                      @click="skillForm = false"
                    >
                      Close
                    </v-btn>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="skillForm = false"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </div>
        </div>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "Skills",
  data: function() {
    return {
      forms: [],
      formAddSkills: false,
      skillForm: false,
      editBtn: false,
      edittab: false,
      elementAlert: false,
      item: {
        skills: "",
        profiency: "",
        idusers: parseInt(localStorage.getItem("userId")),
      },
    };
  },
  created() {
    // this.$store.dispatch("getSkill")
  },
  computed: {
    // fetch(){
    //   return this.$store.state.skill
    // },
    gettersPesan() {
      return this.$store.getters.pesan;
    },
  },
  methods: {
    handleEdit(item) {
      this.skillForm = true;
      this.editBtn = false;
      (this.ID = item.ID), (this.skills = item.skills);
      this.profiency = item.profiency;
    },
    cancel() {
      this.edittab = false;
      this.formAddSkills = false;
      console.log("kensel");
    },
    update() {
      this.$store
        .dispatch("updateSkills", {
          ID: this.ID,
          skills: this.skills,
          profiency: this.profiency,
          idusers: parseInt(localStorage.getItem("userId")),
        })
        .then((response) => {
          this.skillForm = false;
          this.editBtn = false;
          this.alert();
          return response;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addskill() {
      this.formAddSkills = true;
      this.edittab = false;
    },
    Submited() {
      this.$store.dispatch("", this.item);
      setTimeout(() => {
        this.formAddLang = false;
        this.alert();
      }, 2000);
    },
    clear() {
      (this.item.skills = ""), (this.item.profiency = "");
    },
    alert() {
      this.elementAlert = true;
      setTimeout(() => {
        this.elementAlert = false;
      }, 1000);
    },
    Hapus(id) {
      if (confirm("are you sure?")) {
        this.$store
          .dispatch("", id)

          .then((response) => {
            this.alert();
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
