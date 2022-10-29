<template id="corporate">
  <div class="corporate">
    <Corporate />
    <v-container fluid>
      <v-row dense>
        <v-col class="col-md-6">
          <v-card>
            <v-card-subtitle center>Trafik Pengunjung.</v-card-subtitle>
            <line-chart
              :data="Linechart"
            ></line-chart>
          </v-card>
        </v-col>
        <v-col class="col-md-6">
          <pie-chart
            :data="[
              ['Pengunjung', 44],
              ['Pelamar', 23]
            ]"
          ></pie-chart>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Corporate from '@/components/nimda/dashboard/Corporate.vue'

export default {
  name: 'corporate',
  components: {
    Corporate
  },
  data () {
    return {
      colors: ['#b00', '#666'],
      Linechart: {
        Januari: 2,
        Feb: 2,
        Mar: 3,
        April: 2,
        May: 3,
        Juni: 2,
        Juli: 4,
        Agus: 2,
        Sep: 5,
        Okt: 8,
        Nov: 11,
        Des: 9
      }
    }
  }
}
</script>
