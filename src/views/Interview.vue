<template>
  <v-container class="pa-5">
    <v-card outlined>
      <v-card-title class="pa-5">
        Your Interview Invitation
      </v-card-title>
      <v-card-text>
        <InterviewList/>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import InterviewList from "@/components/InterviewList.vue";
export default {
  name: "Interview",
  components: {
      InterviewList,
  },
};
</script>
