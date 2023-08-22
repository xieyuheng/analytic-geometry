<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <div class="flex flex-col">
    <label :for="name" class="font-ui py-2">
      <slot name="label"></slot>
    </label>

    <textarea
      class="w-full border border-black p-3 disabled:bg-stone-100 dark:border-white dark:disabled:bg-stone-700"
      :id="name"
      :name="name"
      v-bind="$attrs"
    ></textarea>
  </div>
</template>
