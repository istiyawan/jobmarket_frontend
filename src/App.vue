<template>
  <v-app class="grey--text text--darken2" id="defaultFont">
    <v-main>
        <NavA  v-if="settokens == null" />
        <NavB  v-else />
      <router-view />
    </v-main>
    <v-footer class="footer">
      <v-container>
        <v-spacer></v-spacer>
        <div class="mr-16">Jobmarket &copy;{{ new Date().getFullYear() }}</div>
      </v-container>
    </v-footer>
    <Loader :visible="loading" />
  </v-app>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import NavA from "@/components/Navbar.vue";
import NavB from '@/components/nimda/Nav.vue'
import Loader from "@/components/loader.vue";
import Vue from "vue";
import moment from "moment";
export default {
  data: () => ({
    drawer: true,
  }),
  state: {},
  components: {
    NavA,
    Loader,
    NavB,
  },
  mounted(){
    this.settokens
  },
  computed: {
    ...mapState("loader", ["loading"]),
    ...mapGetters("Auth",["settokens"]),
  },
};
Vue.filter('formatDate', function(value){
    if(value){
        return moment(String(value)).format('YYYY-MM-DD')
    }
})
</script>
<style>
.footer{
    color:#FFFFFF;
}
</style>
