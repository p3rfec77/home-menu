<script setup lang="ts">
import AddButton from "./AddButton.vue";
import RemoveButton from "./RemoveButton.vue";

interface AddingBlockProps {
  modelValue: string | undefined;
}

const emit = defineEmits(["add", "remove", "update:modelValue"]);
const { modelValue } = defineProps<AddingBlockProps>();
</script>

<template>
  <div>
    <input
      @input="
        emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      @keydown.enter="emit('add')"
      :value="modelValue"
    />
    <div>
      <AddButton @on-click="emit('add')" />
      <RemoveButton @on-click="emit('remove')" />
    </div>
  </div>
</template>

<style lang="scss" module scoped></style>
