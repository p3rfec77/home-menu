<script setup lang="ts">
import Header from "../shared/components/Header.vue";
</script>

<template>
  <Header />
  <div :class="$style.wrapper"></div>
</template>

<style scoped module lang="scss">
.wrapper {
  width: 100%;
  min-height: 80vh;
  padding: 0px 75px;
}
</style>
