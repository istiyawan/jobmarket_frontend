<template>
  <div>
    <v-container>
    <v-app-bar class="hidden-md-and-down px-15" elevation="0" fixed>
      <v-toolbar-title><h2>Job Market</h2></v-toolbar-title>
      <v-spacer></v-spacer>
            <v-menu>
              <template v-slot:activator="{ on }">
                <div>
                <v-menu
                  offset-y
                  open-on-hover
                  v-if="loggedIn && role=='user'"
                  transition="slide-x-transition"
                >
                  <template v-slot:activator="{ attrs, on }">
                    <v-btn  medium text v-bind="attrs" v-on="on" color="primary">
                      <span>My Profile<v-icon>mdi-chevron-down</v-icon></span>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-btn medium text to="/profile" color="primary">
                          <span>Profile</span>
                      </v-btn>
                    </v-list-item>
                    <v-list-item>
                      <v-btn medium text to="/application" color="primary">
                        <span>Application</span>
                      </v-btn>
                    </v-list-item>
                    <v-list-item>
                      <v-btn medium
                             text to="/interview" color="primary">
                        <span>Interview</span>
                      </v-btn>
                    </v-list-item>
                  </v-list>
                </v-menu>
                  <v-btn  medium v-on="on" v-if="!loggedIn && !loggedInCompany" text to="/" color="primary" >
                    <span>Beranda</span>
                  </v-btn>
                  <v-btn  medium v-if="!loggedInCompany" text to="/jobs" color="primary">
                   <span>Lowongan</span>
                  </v-btn>
                  <v-btn text medium v-if="!loggedIn && !loggedInCompany" to="/company-register">
                   <span>Perusahaan</span>
                  </v-btn>
                  <v-btn medium v-if="!loggedIn && !loggedInCompany" text to="/register" color="primary" >
                    <span>Mendaftar</span>
                  </v-btn>
                  <v-btn  medium v-on="on" v-if="!loggedIn && !loggedInCompany" text to="/login"  color="primary">
                    <span>Login</span>
                  </v-btn>
                  <!--  <v&#45;btn medium text v&#45;if="loggedIn" to="" color="primary"> -->
                  <!--   <span>{{userFname}}</span><v&#45;icon medium >mdi&#45;circle</v&#45;icon> -->
                  <!-- </v&#45;btn> -->
                  <!-- <v&#45;btn medium text v&#45;on="on" v&#45;if="loggedIn" to="/logout" > -->
                  <!-- <v&#45;btn @click="logout" medium text v&#45;on="on" v&#45;if="loggedIn || loggedInCompany" > -->
                  <!--   <span>Logout</span><v&#45;icon medium >mdi&#45;power</v&#45;icon> -->
                  <!-- </v&#45;btn> -->

                <v-menu
                  offset-y
                  open-on-hover
                    v-if="loggedIn && role=='user' || loggedInCompany"
                  transition="slide-x-transition"
                >
                  <template v-slot:activator="{ attrs, on }">
                    <v-btn  medium text v-bind="attrs" v-on="on" color="primary" >
                        <span>{{userFname}} {{userFnameCompany}}</span><v-icon medium >mdi-account-circle</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-btn @click="logout" medium text v-on="on" v-if="loggedIn || loggedInCompany" >
                        <span>Logout</span><v-icon medium >mdi-power</v-icon>
                      </v-btn>
                    </v-list-item>
                  </v-list>
                </v-menu>
                </div>
              </template>
            </v-menu>
           <!-- <v&#45;menu class="font&#45;weight&#45;black" v&#45;for="menus in access" :key="menus.id"> -->
           <!--      <template  v&#45;slot:activator="{ attrs,on }"> -->
           <!--         <v&#45;btn medium text v&#45;on="on" :to=menus.Url><span>{{menus.Menu}}</span></v&#45;btn> -->
           <!--      </template> -->
           <!-- </v&#45;menu> -->
            <!-- <v&#45;menu class="font&#45;weight&#45;black"> -->
            <!--   <template class="font&#45;weight&#45;black" v&#45;slot:activator="{ attrs,on }"> -->
            <!--     <!&#45;&#45; <v&#38;#45;btn small text to="/home" v&#38;#45;on="on"> &#45;&#45;> -->
            <!--  -->
            <!--     <v&#45;btn  medium v&#45;on="on" v&#45;if="!loggedIn" text to="/"> -->
            <!--       <span>Beranda</span> -->
            <!--     </v&#45;btn> -->
            <!--     <v&#45;btn  medium text to="/jobs" color=""> -->
            <!--       <span>Lowongan</span> -->
            <!--     </v&#45;btn> -->
            <!--     <v&#45;btn text medium to="/company&#45;register" > -->
            <!--       <span>Perusahaan</span> -->
            <!--     </v&#45;btn> -->
            <!--   </template> -->
            <!-- </v&#45;menu> -->
            <!-- <v&#45;menu class="font&#45;weight&#45;black"> -->
            <!--   <template class="font&#45;weight&#45;black" v&#45;slot:activator="{ attrs,on }"> -->
            <!--        <v&#45;btn medium text v&#45;if="loggedIn" to="" color="primary"> -->
            <!--         <span>{{userFname}}</span><v&#45;icon medium >mdi&#45;circle</v&#45;icon> -->
            <!--       </v&#45;btn> -->
            <!--       <v&#45;btn @click="logout" medium text v&#45;on="on" v&#45;if="loggedIn" > -->
            <!--         <span>Logout Cuy</span><v&#45;icon medium >mdi&#45;power</v&#45;icon> -->
            <!--       </v&#45;btn> -->
            <!--   </template> -->
            <!-- </v&#45;menu> -->
            <!-- <v&#45;menu -->
            <!--   offset&#45;y -->
            <!--   open&#45;on&#45;hover -->
            <!--   v&#45;if="loggedIn &#38;&#38; role=='user'" -->
            <!--   transition="slide&#45;x&#45;transition" -->
            <!-- > -->
            <!--   <template v&#45;slot:activator="{ attrs, on }"> -->
            <!--     <v&#45;btn  medium text v&#45;bind="attrs" v&#45;on="on" > -->
            <!--       <span>My Profile<v&#45;icon>mdi&#45;chevron&#45;down</v&#45;icon></span> -->
            <!--     </v&#45;btn> -->
            <!--   </template> -->
            <!--   <v&#45;list> -->
            <!--     <v&#45;list&#45;item> -->
            <!--       <v&#45;btn medium text to="/profile"> -->
            <!--         <span>Profile &#45; {{ userFname }}</span> -->
            <!--       </v&#45;btn> -->
            <!--     </v&#45;list&#45;item> -->
            <!--     <v&#45;list&#45;item> -->
            <!--       <v&#45;btn medium text to="/application"> -->
            <!--         <span>Application</span> -->
            <!--       </v&#45;btn> -->
            <!--     </v&#45;list&#45;item> -->
            <!--     <v&#45;list&#45;item> -->
            <!--       <v&#45;btn medium -->
            <!--              text to="/interview"> -->
            <!--         <span>Interview Invitations</span> -->
            <!--       </v&#45;btn> -->
            <!--     </v&#45;list&#45;item> -->
            <!--   </v&#45;list> -->
            <!-- </v&#45;menu> -->
            <!-- <v&#45;menu -->
            <!--   offset&#45;y -->
            <!--   open&#45;on&#45;hover -->
            <!--   v&#45;else&#45;if="loggedIn &#38;&#38; role == 'Company'" -->
            <!--   transition="slide&#45;x&#45;transition" -->
            <!-- > -->
            <!--   <template v&#45;slot:activator="{ attrs, on }"> -->
            <!--     <v&#45;btn medium text v&#45;bind="attrs" v&#45;on="on"> -->
            <!--       <span>My company<v&#45;icon>mdi&#45;chevron&#45;down</v&#45;icon></span> -->
            <!--     </v&#45;btn> -->
            <!--   </template> -->
            <!--   <v&#45;list> -->
            <!--     <v&#45;list&#45;item> -->
            <!--       <v&#45;btn medium text to="/profile"> -->
            <!--         <span>My company</span> -->
            <!--       </v&#45;btn> -->
            <!--     </v&#45;list&#45;item> -->
            <!--     <v&#45;list&#45;item> -->
            <!--       <v&#45;btn medium text to="/application"> -->
            <!--         <span>Application</span> -->
            <!--       </v&#45;btn> -->
            <!--     </v&#45;list&#45;item> -->
            <!--   </v&#45;list> -->
            <!-- </v&#45;menu> -->
          <!-- </v-col> -->
          <!-- <v-col cols="3" class="text-right pt-5"> -->
            <!-- <v&#45;menu> -->
            <!--   <template v&#45;slot:activator="{ on }"> -->
            <!--     <div> -->
            <!--  -->
            <!--       <v&#45;btn  medium text to="/jobs" color=""> -->
            <!--        <span>Lowongan</span> -->
            <!--       </v&#45;btn> -->
            <!--       <v&#45;btn text medium to="/company&#45;register" > -->
            <!--        <span>Perusahaan</span> -->
            <!--       </v&#45;btn> -->
            <!--       <v&#45;btn  medium v&#45;on="on" v&#45;if="!loggedIn" text to="/"> -->
            <!--         <span>Beranda</span> -->
            <!--       </v&#45;btn> -->
            <!--        <v&#45;btn medium v&#45;if="!loggedIn" text to="/register"> -->
            <!--         <span>Mendaftar</span> -->
            <!--       </v&#45;btn> -->
            <!--       <v&#45;btn  medium v&#45;on="on" v&#45;if="!loggedIn" text to="/login"> -->
            <!--         <span>Login</span> -->
            <!--       </v&#45;btn> -->
            <!--        <v&#45;btn medium text v&#45;if="loggedIn" to="" color="primary"> -->
            <!--         <span>{{userFname}}</span><v&#45;icon medium >mdi&#45;circle</v&#45;icon> -->
            <!--  -->
            <!--       </v&#45;btn> -->
            <!--       <v&#45;btn medium text v&#45;on="on" v&#45;if="loggedIn" to="/logout" > -->
            <!--       <!&#45;&#45; <v&#38;#45;btn @click="logout" medium text v&#38;#45;on="on" v&#38;#45;if="loggedIn" > &#45;&#45;> -->
            <!--         <!&#45;&#45; {{token}} &#45;&#45;> -->
            <!--         <span>Logout Cuy</span><v&#45;icon medium >mdi&#45;power</v&#45;icon> -->
            <!--       </v&#45;btn> -->
            <!--  -->
            <!--     </div> -->
            <!--   </template> -->
            <!-- </v&#45;menu> -->
          <!-- </v-col> -->
        <!-- </v-row> -->
        <!-- <v&#45;row> -->
        <!--     <v&#45;col> -->
        <!--        <v&#45;menu class="font&#45;weight&#45;black" v&#45;for="menus in access" :key="menus.id"> -->
        <!--             <template  v&#45;slot:activator="{ attrs,on }"> -->
        <!--                <v&#45;btn medium text v&#45;on="on" :to=menus.Url><span>{{menus.Menu}}</span></v&#45;btn> -->
        <!--             </template> -->
        <!--        </v&#45;menu> -->
        <!--     </v&#45;col> -->
        <!-- </v&#45;row> -->
    </v-app-bar>

    <!-- <v&#45;app&#45;bar -->
    <!--   color="#2980b9" -->
    <!--   class="hidden&#45;md&#45;and&#45;up" -->
    <!--   dense -->
    <!--   dark -->
    <!--   elevation="1" -->
    <!-- > -->
    <!--   <v&#45;app&#45;bar&#45;nav&#45;icon @click.stop="drawer = !drawer"></v&#45;app&#45;bar&#45;nav&#45;icon> -->
    <!--   <v&#45;toolbar&#45;title>JOBMARKET</v&#45;toolbar&#45;title> -->
    <!--   <v&#45;spacer></v&#45;spacer> -->
    <!--   <v&#45;btn icon><v&#45;icon>mdi&#45;magnify</v&#45;icon></v&#45;btn> -->
    <!-- </v&#45;app&#45;bar> -->

    <!-- <v&#45;navigation&#45;drawer v&#45;model="drawer" absolute temporary> -->
    <!--   <v&#45;list nav dense> -->
    <!--     <v&#45;list&#45;item&#45;group -->
    <!--       v&#45;model="group" -->
    <!--       active&#45;class="deep&#45;purple&#45;&#45;text text&#45;&#45;accent&#45;4" -->
    <!--     > -->
    <!--       <v&#45;list&#45;item to="/home"> -->
    <!--         <v&#45;list&#45;item&#45;title>Home</v&#45;list&#45;item&#45;title> -->
    <!--       </v&#45;list&#45;item> -->
    <!--       <v&#45;list&#45;item to="/jobs"> -->
    <!--         <v&#45;list&#45;item&#45;title>Find Jobs</v&#45;list&#45;item&#45;title> -->
    <!--       </v&#45;list&#45;item> -->
    <!--       <v&#45;list&#45;item to="/apply"> -->
    <!--         <v&#45;list&#45;item&#45;title>Apply</v&#45;list&#45;item&#45;title> -->
    <!--       </v&#45;list&#45;item> -->
    <!--       <v&#45;list&#45;item to="/profile"> -->
    <!--         <v&#45;list&#45;item&#45;title>Profile</v&#45;list&#45;item&#45;title> -->
    <!--       </v&#45;list&#45;item> -->
    <!--       <v&#45;list&#45;item to="/register"> -->
    <!--         <v&#45;list&#45;item&#45;title>Register</v&#45;list&#45;item&#45;title> -->
    <!--       </v&#45;list&#45;item> -->
    <!--       <v&#45;list&#45;item to="/login"> -->
    <!--         <v&#45;list&#45;item&#45;title>Login</v&#45;list&#45;item&#45;title> -->
    <!--       </v&#45;list&#45;item> -->
    <!--       <v&#45;list&#45;item to="/logout"> -->
    <!--         <v&#45;list&#45;item&#45;title>Logout</v&#45;list&#45;item&#45;title> -->
    <!--       </v&#45;list&#45;item> -->
    <!--     </v&#45;list&#45;item&#45;group> -->
    <!--   </v&#45;list> -->
    <!-- </v&#45;navigation&#45;drawer> -->
  <!-- </nav> -->
  </v-container>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      group: null,
      token: localStorage.getItem("accessTokenCompany"),
      // token:"",
      access:this.$store.state.StoreCompany.accessCompany,
      // access:this.$store.state.accessCompany,
      items: [
        { title: "Pelamar", icon: "mdi-view-dashboard", link: "/login" },
        { title: "Perusahaan", icon: "mdi-heart", link: "/company-register" },
      ],

      // showLoginForm: false,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
    loggedInCompany() {
      return this.$store.getters.loggedInCompany;
    },
    role() {
      return this.$store.getters.dataRole;
    },
    buttonControl(){
      if( this.$store.getters.loggedIn != null || this.$store.getters.loggedInCompany != null){
            return false
      }else{
          return true
      }
    },
    ...mapGetters(["userFname"]),
    ...mapGetters(["userFnameCompany"]),
    ...mapGetters(["dataRole"]),
  },
    methods:{
        logout(){
        this.$store
          .dispatch("destroyToken")
          .then(this.$router.push({ name: "Home" }));
      },
    },

};
</script>
<style>
h2{
  color:#2b80d5;
}
</style>
