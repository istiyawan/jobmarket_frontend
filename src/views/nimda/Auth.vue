<template>
  <section style="margin-top:90px">
    <v-container>
      <v-card style="padding:30px" elevation="9">
      <v-row class="row justify-content-center">
        <v-col class="col-md-6">
            
            <hr class="widht:100%">
            <br>
            <p>“Nindya karya V.1-2020”<br /></p>
        </v-col>

        <div class="col-md-6" style="color:#2980b9">
          <h1>Masuk <b> Administrator</b></h1>
          <FlashMessage :position="'right bottom'"></FlashMessage>
          <v-form ref="form" @submit="submit">
            <v-col md="12">
              <v-text-field
                prepend-inner-icon="mdi-account-circle"
                label="Enter your username"
                v-model="admin.username"
                required
              >
              </v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Enter your password"
                v-model="admin.password"
                min="8"
                type="password"
                prepend-inner-icon="mdi-lock"
              ></v-text-field>
            </v-col>
            <v-layout justify-space-between style="margin-top: 30px">
              <v-btn
                @click="submit"
                :loading="loading"
                color="primary"
                style="color: #fff"
                >Login</v-btn
              >
            </v-layout>
          </v-form>
        </div>
      </v-row>
      </v-card>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Auth",
  data() {
    return {
      loading: false,
      admin: {
        password: "",
        username: "",
      },
    };
  },
  methods: {
    submit() {
      if (this.admin.username === "") {
        this.flashMessage.error({
          message: "Ups, form tidak boleh kosong",
        });
      } else {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.authgo();
        }, 3000);
      }
    },
    authgo() {
      this.$store.dispatch("Auth/authIN", this.admin);
    },
  },
};
</script>
