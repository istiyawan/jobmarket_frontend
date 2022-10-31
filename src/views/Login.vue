<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="mt-16" md="6" xs="12">
        <v-img :src="require('../assets/img/login.png')"></v-img>
      </v-col>
      <v-col class="mx-auto" cols="12" md="6" xs="12">
        <v-card class="mx-auto" max-width="500" elevation="0">
            <v-form @keyup.enter="submitLogin" ref="form" v-model="valid" lazy-validation>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-card-title class="mx-11">
                    <h1 class="mx-auto">Login ROYYAN</h1>
                  </v-card-title>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="email"
                    class="mx-14"
                    prepend-inner-icon="mdi-account-circle"
                    label="email"
                    :rules="emailRules"
                  >
                  </v-text-field>
                  <v-text-field
                    v-model="password"
                    class="mx-14"
                    prepend-inner-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    label="Password"
                    :rules="passwordRules"
                    :type="showPassword ? 'text' : 'password'"
                    :messages="messages"
                    @click:append="showPassword = !showPassword"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-card-actions class="mx-14">
                    <v-btn
                      type="submit"
                      rounded
                      @click.prevent="submitLogin"
                      color="info"
                      dark
                      width="100%"
                      @click.stop="show = false"
                      >Login</v-btn
                    >
                  </v-card-actions>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    class="ml-16 mr-3 mt-5"
                    rounded
                    color="success"
                    width="40%"
                    dark
                    >Forget Password ?</v-btn
                  >

                  <v-btn
                    to="/register"
                    text
                    class="mt-5"
                    rounded
                    color="success"
                    width="40%"
                    dark
                    >Register</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      valid: true,
      showPassword: false,
      email: "",
      messages: "",
      emailRules: [(v) => !!v || "E-mail required"],
      password: "",
      passwordRules: [(v) => !!v || "Password required"],
    };
  },
  props: ["visible"],
  computed: {
    show: {
      get() {
        return this.visible;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
      // ulogin(){
      //    return this.$store.getters.userRole;
      // }
    },
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    submitLogin() {
      if (this.$refs.form.validate()) {
        this.login();
      } else {
        event.preventDefault();
      }
    },
    login() {
      this.$store
        .dispatch("submitLogin", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
            // this.$router.push({ name: "Profile" });
            this.$router.push({ name: "Jobs" });
          return response;
        })
        .catch((error) => {
          this.messages = "Wrong Username or Password";
          return error;
        });
    },
  },
};
</script>
