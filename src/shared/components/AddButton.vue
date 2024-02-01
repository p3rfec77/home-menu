<script setup lang="ts">
interface AddButtonProps {
  onClick: () => void;
}
const { onClick } = defineProps<AddButtonProps>();
</script>

<template>
  <button :on-click="onClick">add smth</button>
</template>

<style lang="scss" module scoped></style>
