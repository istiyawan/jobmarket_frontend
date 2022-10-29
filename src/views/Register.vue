<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="mt-16" md="6" xs="12">
        <v-img :src="require('../assets/img/register.png')"></v-img>
      </v-col>
      <v-col class="mx-auto" cols="12" md="6" xs="12">
        <v-card class="mx-auto mt-16" max-width="900" elevation="0">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-card-title class="mx-16">
                    <v-btn rounded width="100%" color="primary" dark>
                      <v-icon left>mdi-facebook</v-icon>
                      JOIN WITH FACEBOOK</v-btn
                    >
                  </v-card-title>
                </v-col>
                <v-col cols="12">
                  <p><center>OR</center></p>
                  <v-divider class="mx-16"></v-divider>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="email"
                    class="mx-16"
                    prepend-inner-icon="mdi-account-circle"
                    label="Email Address"
                    :rules="emailRules"
                    required
                  >
                  </v-text-field>
                  <v-text-field
                    v-model="password"
                    class="mx-16"
                    prepend-inner-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    label="Password"
                    :rules="passwordRules"
                    required
                    @click:append="showPassword = !showPassword"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-card-actions class="mx-16">
                    <v-btn
                      @click="submitRegister"
                      rounded
                      color="info"
                      dark
                      width="100%"
                      >Join Jobmarket</v-btn
                    >
                  </v-card-actions>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-btn
                    text
                    class="ml-16 mt-5"
                    rounded
                    color="success"
                    width="76%"
                    dark
                    to="/login"
                    >Already Member</v-btn
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
  name: "Register",
  data: () => ({
    valid: true,
    showPassword: false,
    email: "",
    emailRules: [
      (v) => !!v || "Email is Required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is Required",
      (v) => v.length >= 8 || "Password must contain 8 or more character",
      (v) =>
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) ||
        "Password must contain at least lowercase letter, one number, a special character and one uppercase letter",
    ],
    // attemptSubmit: false,
  }),
  methods: {
    validate: function() {
      this.$refs.form.validate();
    },
    submitRegister: function(event) {
      //hasil validasi jika terdapat kosong = false
      if (this.$refs.form.validate()) {
        // alert(this.$refs.form.validate());
        this.register();
      } else {
        // alert(this.$refs.form.validate());
        event.preventDefault();
      }
    },
    register() {
      this.$store
        .dispatch("register", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          this.$router.push({ name: "Login" });
          return response;
        })
        .catch((error) => {
          error;
        });
    },
  },
};
</script>
