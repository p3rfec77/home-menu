<script setup lang="ts">
import Category from "./Category.vue";
import useMenuStore from "../stores/menuStore";

const { categories } = useMenuStore();
</script>

<template>
  <ul :class="$style.categories_list">
    <Category
      v-for="category in categories"
      :dishes="category.dishes"
      :titile="category.titile"
      :key="category.titile"
    />
  </ul>
</template>

<style lang="scss" module scoped>
.categories_list {
}
</style>
