<script setup lang="ts">
import Category from "./Category.vue";
import useMenuStore from "../stores/menuStore";
import AddButton from "./AddButton.vue";

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
  <div>
    <AddButton :on-click="() => console.log('add')" />
    <p>добавить Категорию</p>
  </div>
</template>

<style lang="scss" module scoped>
.categories_list {
}
</style>
