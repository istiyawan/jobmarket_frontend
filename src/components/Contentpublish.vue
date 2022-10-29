<template>
  <section section style="margin-top: 90px">
    <h1>Kategori lowongan pekerjaan</h1>
    <v-row dense style="margin-top: 90px">

      <v-col v-for="(item, i) in items" :key="i" class="col-md-4">
        <v-card :color="item.color" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>

              <v-card-subtitle v-text="item.artist"></v-card-subtitle>

              <v-card-actions>
                <v-btn
                  v-if="item.artist === 'Ellie Goulding'"
                  class="ml-2 mt-3"
                  fab
                  icon
                  height="40px"
                  right
                  width="40px"
                >
                  <v-icon>mdi-play</v-icon>
                </v-btn>

                <v-btn v-else class="ml-2 mt-5" outlined rounded small href="/register">
                  APPLY
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'publish',
  data: () => ({
    drawer: true,
    items: [
      {
        color: '#fed142',
        src: 'https://i.pinimg.com/originals/15/ac/fc/15acfc4367f886e8a0d5a927ee07458c.png',
        title: 'UI/UX',
        artist: 'UI/UX 3 years'
      },
      {
        color: '#19323b',
        src: 'https://res.cloudinary.com/practicaldev/image/fetch/s--AiYDALTg--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/byc6vvzdtkrx5syf9j4r.png',
        title: 'BACK-END',
        artist: 'GO PROGRAMMING 3 years'
      },
      {
        color: '#00bf7e',
        src: 'https://d2jq2hx2dbkw6t.cloudfront.net/231/vue-js-2.1.0.jpg',
        title: 'Front-End',
        artist: 'VUE/REACT/ANGULAR 2years'
      }
    ]
  })
}
</script>
