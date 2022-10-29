<template>
  <v-container class="pa-5">
    <div>
      <CompanyList />
    </div>
  </v-container>
</template>
<script>
import CompanyList from "@/components/CompanyList.vue";
export default {
  name: "Company",
  components: {
    CompanyList,
  },
};
</script>
