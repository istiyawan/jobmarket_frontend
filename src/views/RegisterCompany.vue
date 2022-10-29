<template>
  <div>
    <v-container>
      <v-layout row wrap class="company_register">
          <v-flex xs12 md6 class="mt-16">  
              <v-card max-width="470" elevation="0">
                  <v-img :src="require('../assets/img/future_job.png')"></v-img>
              </v-card>
          </v-flex>
          <v-flex xs12 md6>
          <!-- <v-flex> -->
                <v-card max-width="500" class="register_form" elevation="0">
                    <!-- <v-card-title> -->
                        <!-- <h2>Registrasi Perusahaan Anda</h2> -->
                    <!-- </v-card-title> -->
                    <!-- <v-card-subtitle>
                        <h3>Buat Semuanya Lebih Mudah, Pilih Kandidat Terbaik</h3>
                    </v-card-subtitle> -->
                    <!-- <v-spacer></v-spacer> -->
                    <v-card-text>
                      <v-form ref="form" v-model="valid" lazy-validation max-width="499">
                        <v-row>
                          <v-col cols="12" xs="6">
                            <v-text-field
                              dense
                              label="Contact person name"
                              :rules="rulesContactName"
                              v-model="contactName"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" xs="12">
                            <v-text-field
                              dense
                              label="Company Name"
                              auto-grow
                              rows="0"
                              :rules="rulesCompanyName"
                              v-model="companyName"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" xs="12">
                            <v-text-field
                              label="Phone"
                              dense
                              auto-grow
                              rows="0"
                              :rules="rulesPhone"
                              v-model="phone"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" xs="12">
                            <v-text-field
                              label="Email"
                              dense
                              auto-grow
                              rows="0"
                              :rules="rulesEmail"
                              v-model="email"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="12">
                            <v-text-field
                              label="Password"
                              :type="showPassword?'text':'password'"
                              dense
                              auto-grow
                              rows="0"
                              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                              :rules="rulesPassword"
                              v-model="password"
                              required
                              @click:append="showPassword = !showPassword"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                     </v-form>
                    </v-card-text>
                    <v-card-actions class="pb-5 mx-2">
                      <v-btn @click="submit" 
                        outlined 
                        class="primary" 
                        dark
                        >Register</v-btn
                      >
                      <v-btn
                        to="/companyLogin"
                        outlined
                        color="secondary"
                        >Login</v-btn
                      >
                    </v-card-actions>
              </v-card>
          </v-flex>
      </v-layout>
     </v-container>
  </div>
</template>
<style>
.company_register{
    margin-top:20px;
    /* background-image:url('../assets/img/bergabung.png');  */
    /* background-size:1500px 1500px; */
}

.company_register h1{
    font-size:28px;
    /* text-align:center; */
}

.company_register h3{
    /* text-align:center; */
}

.company_register p{
    color:black;
    font-size:18px;
}

.register_form{
     padding:25px;
}
/* .cards { */
/*   position: absolute; */
/* }.logo { */
/*   width: 30px; */
/*   top: 10px; */
/* } */
</style>

<script>
// @ is an alias to /src
export default {
  name: "LoginCompany",
  data() {
    return {
      valid:true,
      showPassword: false,
      contactName: "",
      companyName: "",
      phone: "",
      email: "",
      password: "",
      rulesContactName: [
        (v) => !!v || "Contact name is required",
        (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
      ],
      rulesCompanyName: [
        (v) => !!v || "Company name is required",
        (v) => (v && v.length <= 20) || "phone must be less than 20 characters",
      ],
      rulesEmail: [
        (v) => !!v || "E-mail is required",
        (v) =>
          /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || "E-mail must be valid",
      ],
      rulesPhone: [
        (v) => !!v || "Phone is required",
        (v) => (v && v.length <= 17) || "phone must be less than 17 characters",
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
    validate(){
      this.$refs.form.validate() ;
    },
    submit() {
     if(this.$refs.form.validate()){
       this.registerCompany()
     }else{
        event.preventDefault();
     }

    },
    registerCompany(){
      this.$store.dispatch("StoreCompany/registerCompany",{
        username:this.contactName,
        company_name:this.companyName,
        phone1:this.phone,
        email:this.email,
        password:this.password,
      })
      .then((response)=>{
        this.$router.push({name:"LoginCompany"})
        return response
      })
      .catch((error)=>{error;})
    },
  },
};
</script>
