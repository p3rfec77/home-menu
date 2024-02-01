<script setup lang="ts">
import type { IDish } from "../types";
import Dish from "./Dish.vue";
import AddButton from "./AddButton.vue";
import RemoveButton from "./RemoveButton.vue";

interface CategoryProps {
  titile: string;
  dishes: IDish[];
}
const { dishes, titile } = defineProps<CategoryProps>();
</script>
<template>
  <li :class="$style.category">
    <div>
      <h3 :class="$style.title" :id="titile">{{ titile }}</h3>
      <RemoveButton :on-click="() => {}" />
    </div>
    <ul v-if="dishes.length > 0" :class="$style.dishes_list">
      <Dish v-for="dish in dishes" :dish="dish" :key="dish.title" />
      <AddButton :on-click="() => console.log('aaa')" />
    </ul>
  </li>
</template>

<style lang="scss" module scoped>
.category {
  list-style: none;

  .title {
    font-size: 26px;
  }

  .dishes_list {
    margin-top: 25px;
    padding: 20px;
    border-radius: 5%;
    background-color: var(--secondary-bg-color);
    list-style: none;
  }
}
</style>
