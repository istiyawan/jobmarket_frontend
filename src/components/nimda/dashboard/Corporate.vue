<template>
  <div>
    <SideB />
    <v-container fluid>
      <v-row dense>
        <v-col v-for="(item, i) in items" :key="i" class="col-md-2">
          <v-card :color="item.color" dark elevation="5">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>

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
                </v-card-actions>
              </div>

              <v-avatar class="ma-2" size="125" tile>
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SideB from '@/components/nimda/Side.vue'

export default {
  name: "HelloWorld",
  components: {
    SideB
  },
  data: () => ({
    items: [
      {
        color: "#1F7087",
        title: "213",
        artist: "Trafik pengunjung",
      },
      {
        color: "#16a085",
        title: "22",
        artist: "Total pelamar",
      },
      {
        color: "#f39c12",
        title: "5",
        artist: "Wilayah 1",
      },
      {
        color: "#bdc3c7",
        title: "5",
        artist: "Wilayah 2",
      },
      {
        color: "#e74c3c",
        title: "5",
        artist: "Wilayah 3",
      },
      {
        color: "#34495e",
        title: "7",
        artist: "Wilayah 4",
      },
    ],
  }),
};
</script>
