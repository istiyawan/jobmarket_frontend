<template>
  <v-container class="pa-5">
    <div>
      <Profilelist />
    </div>
  </v-container>
</template>
<script>
import Profilelist from "@/components/Profilelist.vue";

export default {
  name: "Profile",
  data: function() {
    return {
      token: localStorage.getItem("accessToken"),
      userId: localStorage.getItem("userId"),
    };
  },
  components: {
    Profilelist,
  },
  mounted() {
    this.$store
      .dispatch("getDataProfile", {
        token: this.token,
        userId: this.userId,
      })
      .then((response) => {
        this.dataProfile = response;
        return response;
       })
        .catch((error) => {
          error;
        }),
        this.$store
        .dispatch("getEducations", {
          token: this.token,
          userId: this.userId,
        })
        .then((response) => {
          return response;
        })
      .catch((error) => {
        console.error(error);
      }),
      this.$store
      .dispatch("getExperiences", {
        token: this.token,
        userId: this.userId,
      })
      .then((response) => {
        this.dataProfile = response;
        return response;
      })
      .catch((error) => {
        console.error(error);
      }),
      this.$store
        .dispatch("getAbout", {
          token: this.token,
          userId: this.userId,
        })
        .then((response) => {
          return response;
        })
        .catch((error) => {
          error;
        })
      this.$store
        .dispatch("getSkill", {
          token: this.token,
          userId: this.userId,
        })
        .then((response) => {
          return response;
        })
        .catch((error) => {
          error;
        })
        this.$store
        .dispatch("getLang", {
          token: this.token,
          userId: this.userId,
        })
        .then((response) => {
          return response;
        })
        .catch((error) => {
          error;
        })
  },
};
</script>
