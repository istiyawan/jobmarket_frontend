<template>
  <div>
      <v-container>
          <v-layout row wrap class="company_login">
            <v-flex xs12 md6 class="mt-16">
                <v-spacer></v-spacer>
                <v-card max-width="470" elevation="0">
                    <v-img :src="require('../assets/img/future_job.png')"></v-img>
                </v-card>
            </v-flex>
            <v-flex xs12 md6>
            <v-card class="company_login" max-width="500"  elevation=0>
                <v-card-title>
                    <h1>Login Perusahaan</h1>
                </v-card-title>
                <v-card-text>
                  <v-form ref="form" lazy-validation max-width="499">
                    <v-row>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          label="Email"
                          auto-grow
                          rows="1"
                          :rules="rulesEmail"
                          v-model="email"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          label="Password"
                          auto-grow
                          rows="1"
                          :rules="rulesPassword"
                          v-model="password"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-form>

                </v-card-text>
                <v-card-actions class="pb-5 px-3" >
                  <v-btn @click="submitLogin" class="primary" dark
                    >Login</v-btn
                  >
                  <v-btn
                    to="/company-register"
                    outlined
                    color="secondary"
                    >Register</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>
<style>
.company_login{
    margin-top:20px;
    /* padding:15px; */
}

.company_login h1{
    font-size:28px;
    /* text-align:center; */
}

.company_login p{
    /* color:black; */
    font-size:18px;
}

.login_form{
    padding:25px;
}
</style>
<script>
// @ is an alias to /src
export default {
  name: "LoginCompany",
  data() {
    return {
      email: "infra1@gmail.com",
      password: "QWer!@34",
      rulesEmail: [
        (v) => !!v || "E-mail is required",
        (v) =>
          /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || "E-mail must be valid",
      ],
      rulesPassword: [
        (v) => !!v || "Password is required",
        (v) =>
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) ||
          "Password must contain at least lowercase letter, one number, a special character and one uppercase letter",
      ],
    };
  },
  components: {},
  methods: {
    validasi() {
      this.$refs.form.validate();
    },
    submitLogin() {
      if (this.$refs.form.validate()) {
        this.loginCompany();
      } else {
        event.preventDefault();
      }
    },
    loginCompany() {
      this.$store
        .dispatch("StoreCompany/CompanyLogin", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
            this.$router.push({ name: "Company" });
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
