<script>
export default {
  // methods:function(){
  //     alert();
  //
  // },
  created() {
    this.$store
      .dispatch("destroyToken")
      .then(this.$router.push({ name: "Home" }));
  },
  // beforeDestroy(){
  //   localStorage.removeItem('accessTokenCompany')
  // },
};
</script>
