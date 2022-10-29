<template>
    <v-container fluid>
    <SideB />
      <v-layout>
        <v-flex xs12>
          <v-card-title>
            <v-row justify="space-between">
              <v-btn depressed color="primary" :to="{ name: 'add' }">
                + Kategori
              </v-btn>
            </v-row>
          </v-card-title>
          <v-divider> </v-divider>
          <v-card>
            <v-card-title>
              Kategori Pekerjaan
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
              type="table-heading, list-item-two-line,table-tfoot"
            ></v-skeleton-loader>
            <v-data-table :headers="headers" :items="kategori" :search="search">
              <template v-slot:item="props">
                <tr>
                  <td class="text-xs-center">{{ props.item.id }}</td>
                  <td class="text-xs-center">{{ props.item.kode }}</td>
                  <td class="text-xs-center">{{ props.item.jenis }}</td>
                  <td class="text-xs-center">{{ props.item.create }}</td>
                  <td class="text-xs-center">
                    <v-btn
                      class="mx-0"
                      fab
                      dark
                      small
                      color="error"
                      @click.prevent="deleteKategori(props.item.id)"
                    >
                      <v-icon center small>
                        {{ icons.mdiDelete }}
                      </v-icon>
                    </v-btn>
                  </td>
                </tr>
              </template>
              <v-alert
                slot="no-results"
                :value="true"
                color="error"
                icon="warning"
              >
              </v-alert>
            </v-data-table>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import { mdiDelete } from '@mdi/js'
import SideB from '@/components/nimda/Side.vue'

export default {
  components: {
    SideB
  },
  data () {
    return {
      loading: true,
      search: '',
      icons: {
        mdiDelete
      },
      headers: [
        {
          text: 'Id',
          align: 'left',
          sortable: true,
          value: 'id'
        },
        {
          text: 'Kode',
          value: 'kode'
        },
        {
          text: 'Jenis',
          value: 'umur'
        },
        {
          text: 'Create',
          value: 'create'
        },
        { text: 'Action', value: 'actions', sortable: false }
      ]
    }
  },
  computed: {
    kategori () {
      return this.$store.state.Kategori.kategori
    },
    skeleton () {
      return this.$store.state.Kategori.loading
    }
  },
  methods: {
    deleteKategori (id) {
      if (confirm('are you sure?')) {
        this.$store.dispatch('Kategori/deleteKategori', id)
        alert('Kategori terhapus')
      }
    }
  }
}
</script>
