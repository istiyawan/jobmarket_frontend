<template>
  <v-container fluid class="mt-5">
    <v-row style="margin-bottom: 50px">
      <v-col cols="col-md-3">
        <v-select
          label="Keyword Pencarian"
          multiple
          hint="Keywords"
          persistent-hint
        ></v-select>
      </v-col>
      <v-col cols="col-md-3">
        <v-select
          label="Lokasi"
          multiple
          hint="Lokasi"
          persistent-hint
        ></v-select>
      </v-col>
      <v-col cols="col-md-3">
        <v-select
          label="Select"
          multiple
          hint="Bidang keahlian"
          persistent-hint
        ></v-select>
      </v-col>
    </v-row>
    <v-row dense style="">
      <v-col v-for="(item, i) in items" :key="i" class="col-md-4">
        <v-card class="mx-auto">
          <v-card-text>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1" style="color:#34495e">
                {{ item.title }}
              </v-list-item-title>
              <v-list-item-subtitle><v-icon style="color:#c0392b">mdi-google-maps</v-icon>{{ item.location }} - {{ item.company }}</v-list-item-subtitle>
            </v-list-item-content>

            <p class="display-5 text--primary">
              Key Qualifications :
            </p>
            <p class="display-5 text--primary">{{ item.qualify }}</p>
          </v-card-text>
          <v-card-actions>
            <v-row align="center" justify="end">
              <v-btn text color="teal accent-4">
                Detail
              </v-btn>
              <v-spacer></v-spacer>
              <v-icon class="mr-1">
                mdi-clock
              </v-icon>
              <v-chip
                  class="ml-0 mr-2 black--text"
                  label
                  small
                >
                 3 jam yang lalu
                </v-chip>
              <span class="subheading mr-2"></span>
              <span class="mr-1">·</span>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Jobdata",
  data: () => ({
    drawer: true,
    items: [
      {
        src:
          "https://i.pinimg.com/originals/15/ac/fc/15acfc4367f886e8a0d5a927ee07458c.png",
        company: "Nindya Karya",
        title: "Data Engineer",
        exp: "UI/UX 3 years",
        qualify:
          "AWS, Google Cloud Platform, or Azure experience building solutions in Cloud Environments..",
        location: "Jakarta",
      },
      {
        src:
          "https://res.cloudinary.com/practicaldev/image/fetch/s--AiYDALTg--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/byc6vvzdtkrx5syf9j4r.png",
        company: "Nindya Karya",
        title: "Back-end Engineer",
        exp: "GO PROGRAMMING 3 years",
        qualify:"Experienced in building large-scale web apps/services/APIs.",
        location: "Jakarta",
      },
      {
        src: "https://d2jq2hx2dbkw6t.cloudfront.net/231/vue-js-2.1.0.jpg",
        company: "Nindya Karya",
        title: "Front-End Developer",
        exp: "VUE/REACT/ANGULAR 2years",
        qualify: "Knowledge and experience with Sass or LESS, ReactJS or VueJS.",
        location: "Jakarta",
      },
    ],
  }),
};
</script>
