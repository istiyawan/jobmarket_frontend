<template>
  <div>
    <SideB />
    <v-container fluid>
      <FlashMessage :position="'right top'"></FlashMessage>
      <v-card-title>
        <v-row justify="space-between">
          <span class="title">Data Pelamar</span>
          <v-btn color="blue darken-2" fab dark>
            <v-icon>mdi-account-circle</v-icon></v-btn
          >
        </v-row>
      </v-card-title>
      <v-divider> </v-divider>
      <v-card>
        <v-card-title>
          Pelamar Table
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-skeleton-loader
          :loading="loading"
          v-if="skeleton"
          type="table-heading, table-tfoot"
        ></v-skeleton-loader>
        <v-data-table :headers="headers" :items="pelamar" :search="search">
          <template v-slot:item="props">
            <tr>
              <td class="text-xs-center">{{ props.item.id }}</td>
              <td class="text-xs-center">{{ props.item.nama }}</td>
              <td class="text-xs-center">{{ props.item.email }}</td>
              <td class="text-xs-center">{{ props.item.alamar }}</td>
              <td class="text-xs-center">{{ props.item.umur }}</td>
              <td class="text-xs-center">{{ props.item.grade }}</td>
              <td class="text-xs-center">{{ props.item.minat }}</td>
              <td class="text-xs-center">
                <v-btn
                  class="mx-0"
                  fab
                  dark
                  small
                  color="error"
                  @click.prevent="deletePelamar(props.item.id)"
                >
                  <v-icon dark>
                    mdi-minus
                  </v-icon>
                </v-btn>
              </td>
              <td class="text-xs-center">
                <v-btn class="mx-0" fab dark small color="#16a085">
                  <v-icon>mdi-account-circle</v-icon>
                </v-btn>
              </td>
            </tr>
          </template>
          <v-alert slot="no-results" :value="true" color="error" icon="warning">
          </v-alert>
        </v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

import SideB from '@/components/nimda/Side.vue'

export default {
  name: 'lis',
  components: {
    SideB
  },
  data () {
    return {
      loading: true,
      search: '',
      headers: [
        {
          text: 'Id',
          align: 'left',
          sortable: true,
          value: 'id'
        },
        {
          text: 'Nama',
          value: 'nama'
        },
        {
          text: 'Email',
          value: 'email'
        },
        {
          text: 'Alamat',
          value: 'alamar'
        },
        {
          text: 'Umur',
          value: 'umur'
        },
        {
          text: 'Grade',
          value: 'grade'
        },
        {
          text: 'Minat',
          value: 'minat'
        },
        { text: 'DELETE', value: 'actions', sortable: false },
        { text: 'DETAIL', value: 'actions', sortable: false }
      ],
    }
  },
  computed: {
    pelamar () {
      return this.$store.state.Pelamar.pelamar
    },
    skeleton () {
      return this.$store.state.Pelamar.loading
    }
  },
  methods: {
    deletePelamar (id) {
      if (confirm('Hapus data ini ?')) {
        this.$store.dispatch('Pelamar/deletePelamar', id)
        this.flashMessage.info({
          message: 'data berhasil terhapus'
        })
        window.location.reload()
      }
    }
  }
}
</script>
