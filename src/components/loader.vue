<template>
  <div class="loader" :class="{ 'loader--visible': visible }">
    <v-progress-circular
      :size="50"
      indeterminate
      color="red"
    ></v-progress-circular>
  </div>
</template>
<script>
export default {
  name: "loader",
  props: ["visible"],
};
</script>
<style lang="scss">
.loader {
  background: rgba(255, 255, 255, 0.8);
  transition: 0.15s ease-in opacity;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  &--visible {
    opacity: 1;
    pointer-events: all;
  }
}
</style>
