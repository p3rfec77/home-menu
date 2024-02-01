<script setup lang="ts">
import type { IDish } from "../types";
import RemoveButton from "./RemoveButton.vue";

interface DishProps {
  dish: IDish;
}
const { dish } = defineProps<DishProps>();
</script>

<template>
  <li :class="$style.dish">
    <p>{{ dish.title }}</p>
    <RemoveButton :on-click="() => {}" />
  </li>
</template>

<style lang="scss" module scoped>
.dish {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  position: relative;

  &:first-of-type {
    margin-top: 0px;
  }
}
</style>
