<template>
      <v-navigation-drawer fixed v-model="drawer" app>
        <v-list-item>
          <v-toolbar flat>
            <v-list>
              <v-list-item>
                <v-avatar size="25">
                  <img src="@/assets/logo.png" alt="avatar" />
                </v-avatar>
                <v-list-item-action class="title">
                  <router-link to="/" tag="span" style="cursor:pointer"
                    >&nbsp; VUEJOBS</router-link
                  >
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-toolbar>
        </v-list-item>

        <v-divider></v-divider>
        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" :to="item.link">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title> {{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
export default {
  name: 'dashboard',
  data: () => ({
    drawer: true,
    items: [
      { title: 'Dashboard', icon: 'mdi-format-list-bulleted-square', link: '/nimda/corporate' },
      { title: 'Data - Wilayah', icon: 'mdi-format-list-bulleted-square', link: '/About' },
      { title: 'Data - Pelamar', icon: 'mdi-format-list-bulleted-square', link: '/nimda/pelamar' },
      { title: 'Kategori - Pekerjaan', icon: 'mdi-format-list-bulleted-square', link: '/nimda/kategori-pekerjaan' },
      { title: 'Posting - JOBS', icon: 'mdi-format-list-bulleted-square', link: '/belum-ada' },
      { title: 'Data - Laporan', icon: 'mdi-format-list-bulleted-square', link: '/belum-ada' },
      { title: 'Manage - Artikel', icon: 'mdi-format-list-bulleted-square', link: '/belum-ada' }
    ]
  })
}
</script>
