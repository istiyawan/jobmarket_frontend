<template>
    <div>
        <v-container>
            <v-layout row wrap class="home_1">
                <v-flex xs12 md6>
                    <v-img :src="require('../assets/img/future_job.png')"></v-img>
                </v-flex>
                <v-flex xs12 md6 class="mt-10 pa-10">
                    <v-card max-width="450" elevation=0 min-width="430">
                        <v-card-title>
                            <h1>Kembangkan masa </h1>
                            <h1>depan anda ! </h1>
                        </v-card-title>
                        <v-card-text>
                            <p>Jobmarket merupakan platform yang akan membantu anda mendapatkan pekerjaan impian anda</p>
                        </v-card-text>
                    <v-card-actions>
                        <v-btn outlined color="red" class="mt-16" to="/register">Daftar</v-btn>
                        <v-btn outlined color="blue" class="mt-16" to="/login">Login</v-btn>
                    </v-card-actions>
                   </v-card>
                </v-flex>
            </v-layout>
            <v-layout row wrap class="home_2">
                <v-flex xs12 md12>
                    <h1>Menjadi Bagian Keluarga Besar Kami</h1>
                </v-flex>
            </v-layout>
            <v-layout row wrap class="home_2">
                <v-flex xs12 md4 align="center">
                    <v-img
                         class="center"
                         contain
                         height="300px"
                         width="300px"
                         :src="require('../assets/img/warm.png')"></v-img>
                        <h2>Profesional</h2>
                        <p>Anda akan menjadi bagian dari individu-individu terbaik kami</p>
                </v-flex>
                <v-flex xs12 md4>
                    <v-img 
                         class="center"
                         contain
                         height="300px"
                         width="300px"
                         :src="require('../assets/img/kebersamaan.png')"></v-img>
                        <h2>Kebersamaan</h2>
                        <p>Pecahkan masalah bersama karena anda tidak sendirian</p>
                </v-flex>
                <v-flex xs12 md4>
                    <v-img 
                         class="center"
                         contain
                         height="300px"
                         width="300px"
                         :src="require('../assets/img/colaboration.png')"></v-img>
                        <h2>Kolaborasi</h2>
                        <p>Membangun ekosistem dengan ide-ide cemerlang</p>
                </v-flex>
            </v-layout>
            <v-layout row wrap class="home_3 home_3_background">
                <v-flex xs12 md6>
                    <v-card max-width="430" elevation=0>
                        <v-card-title>
                            <h1>Mari Bergabung</h1>
                        </v-card-title>
                        <v-card-text>
                            <p>Pilih lowongan terbaik, kemudian daftar dengan melengkapi profil pribadi anda, secepat mungkin tim kami akan menghubungi anda</p>
                        </v-card-text>
                   </v-card>
                </v-flex>
                <v-flex xs12 md6>
                    <v-img 
                        :src="require('../assets/img/3langkah.png')"></v-img>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<style>

.home_1{
    margin-top:20px;
}

.home_1 h1{
    font-size:40px;
}

.home_1 p{
    margin-top:30px;
    font-size:18px;
    color:black;
}

.home_2 h1{
    margin-top:90px;
    margin-bottom:60px;
    color:blue;
    text-align:center;
    font-size:40px;
}

.home_2 h2{
    text-align:center;
}

.home_2 img{
    /* text-align:center; */
    justify:center;
}

.home_2 p{
    text-align:center;
    font-size:18px;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.home_3{
    margin-top:90px;
}

.home_3_background{

    background-image:url('../assets/img/bergabung.png');

}

.home_3 h1{
    color:blue;
    font-size:40px;
    margin-top:40px;
    margin-bottom:40px;
}

.home_3 p{
    font-size:18px;
    color:black;
}
/*.carousel-cell {*/
  /*width: 50%;  half-width */
/*  height: 300px;
  margin-right: 0px;
}
.header {
  left: 0px;
  right: 0px;
  height: 500px;
  width: 100px;*/
  /* background: linear-gradient(rgba(34, 34, 34, 0.8), rgba(0, 0, 0, 0.8)), */
  /*   url("https://i.ibb.co/rp1Jy1t/1.jpg"); */
/*  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

}
.img {
  object-fit: cover;
  opacity: 0.4;
}
.holder {
  margin-top: 100px;
  padding: 20px 5px;
  height: 200px;
}
.hero-text-header {
  font-family: "Zilla Slab", serif;
}
.hero-text-sub {
  font-family: "Raleway", sans-serif;
}
.brand-text {
  font-weight: bold;
}*/
</style>

<script>

// import Dashboard from "@/components/Dashboard.vue";
// import Conten from "@/components/Dashboard.vue";
// import Flickity from "vue-flickity";
// import Contentpublish from "@/components/Contentpublish.vue";
export default {
  name: "Home",
  components: {
    // Dashboard,
    // Flickity,
    // Contentpublish,
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 1,
        // any options from Flickity can be used
      },
    };
  },
    
};
</script>
