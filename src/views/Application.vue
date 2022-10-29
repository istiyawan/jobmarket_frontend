<template>
  <v-container class="pa-5">
    <v-card outlined>
      <v-card-title class="pa-5">
        Your Job Application
      </v-card-title>
      <v-card-text>
        <ApplicationList/>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import ApplicationList from "@/components/ApplicationList.vue";
export default {
  name: "Application",
  components: {
    ApplicationList,
  },
};
</script>
