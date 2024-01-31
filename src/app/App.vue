<script setup lang="ts">
import Header from "../shared/components/Header.vue";
import CategoriesList from "../shared/components/CategoriesList.vue";
</script>

<template>
  <Header />
  <main :class="$style.wrapper">
    <CategoriesList />
  </main>
</template>

<style scoped module lang="scss">
.wrapper {
  width: 100%;
  min-height: 80vh;
  padding: 0px 75px;
}
</style>
