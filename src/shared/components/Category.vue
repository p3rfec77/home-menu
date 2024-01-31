<script setup lang="ts">
import type { IDish } from "../types";

interface CategoryProps {
  titile: string;
  dishes: IDish[];
}
const { dishes, titile } = defineProps<CategoryProps>();
</script>
<template>
  <li :class="$style.category">
    <h3 :class="$style.title" :id="titile">{{ titile }}</h3>
  </li>
</template>

<style lang="scss" module scoped>
.category {
  list-style: none;
  .title {
    font-size: 26px;
  }
}
</style>
