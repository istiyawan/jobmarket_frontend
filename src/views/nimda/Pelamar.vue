<template>
  <div class="home">
    <List />
  </div>
</template>

<script>
// @ is an alias to /src
import List from "@/components/nimda/pelamar/List.vue";

export default {
  name: "pelamar",
  components: {
    List
  },
  mounted() {
    this.$store.dispatch("Pelamar/loadPelamar"); // DISPATCH loadPelamar
  }
};
</script>
