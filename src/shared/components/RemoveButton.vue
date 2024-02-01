<script setup lang="ts">
interface RemoveButtonProps {
  onClick: () => void;
}
const { onClick } = defineProps<RemoveButtonProps>();
</script>

<template>
  <button :on-click="onClick">remove smth</button>
</template>

<style lang="scss" module scoped></style>
