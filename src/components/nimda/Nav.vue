<template>
  <v-toolbar>
    <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title v-show="!drawer" class="title">
        <v-avatar size="20">
            <img src="@/assets/logo.png" alt="avatar" />
        </v-avatar>
        <router-link to="/" tag="span" style="cursor:pointer"
            >&nbsp; VueJs</router-link
        >
        </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on">
          <span>Menu</span>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn text @click.prevent="logout">
      <span>Sign Out</span>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', link: '/home' },
      { title: 'Wilayah', icon: 'mdi-heart', link: '/About' },
      { title: 'Data-Pelamar', icon: 'mdi-heart', link: '/pelamars' },
      {
        title: 'Kategori-Pekerjaan',
        icon: 'mdi-heart',
        link: '/kategori-pekerjaan'
      },
      { title: 'Posting-JOBS', icon: 'mdi-heart', link: 'lll' }
    ]
  }),
  methods: {
    logout: function () {
      this.$store.dispatch("Auth/Logout");
    }
  }
}
</script>
