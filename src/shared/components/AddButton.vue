<script setup lang="ts">
const emit = defineEmits(["onClick"]);
</script>

<template>
  <button @click="$emit('onClick')">add smth</button>
</template>

<style lang="scss" module scoped></style>
