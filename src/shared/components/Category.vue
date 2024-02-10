<script setup lang="ts">
import { ref } from "vue";
import type { IDish } from "../types";

import useMenuStore from "../stores/menuStore";

import Dish from "./Dish.vue";
import AddButton from "./AddButton.vue";
import RemoveButton from "./RemoveButton.vue";
import AddingBlock from "./AddingBlock.vue";

interface CategoryProps {
  titile: string;
  dishes: IDish[];
}
const { dishes, titile } = defineProps<CategoryProps>();
const addingInput = defineModel<string>();

const { addDish } = useMenuStore();
const addDishToMenu = () => {
  if (!addingInput.value) return;

  if (addingInput.value.trim() !== "") {
    addDish({ title: addingInput.value }, titile);
  }

  addingInput.value = "";
};

const isInputOpen = ref<boolean>(false);
const toggleInput = () => {
  isInputOpen.value = !isInputOpen.value;
};
</script>

<template>
  <li :class="$style.category">
    <div>
      <h3 :class="$style.title" :id="titile">{{ titile }}</h3>
      <RemoveButton @on-click="" />
    </div>
    <ul v-if="dishes.length > 0" :class="$style.dishes_list">
      <Dish v-for="dish in dishes" :dish="dish" :key="dish.title" />
      <AddButton v-if="!isInputOpen" @on-click="toggleInput" />

      <AddingBlock v-else v-model="addingInput" @add="addDishToMenu" />
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
