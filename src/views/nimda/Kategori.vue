<template>
  <div class="home">
    <List />
  </div>
</template>

<script>
// @ is an alias to /src
import List from "@/components/nimda/kategori/List.vue";

export default {
  name: "kategori",
  components: {
    List
  },
  mounted() {
    this.$store.dispatch("Kategori/loadKategoriPekerjaan"); // DISPATCH loadPelamar YANG BERADA DALAM MODULE pelamars
  }
};
</script>
